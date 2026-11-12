/******************************************************************************
 * vl53l0x.c - minimal VL53L0X driver (C port for STM32 HAL)
 *
 * Register sequence ported from the Pololu VL53L0X Arduino library
 * (https://github.com/pololu/vl53l0x-arduino, Copyright (c) 2017-2022 Pololu
 * Corporation, MIT licence), which is based on ST's VL53L0X API (STSW-IMG005).
 * Ported to C / STM32 HAL for EE2028 Assignment 2. Only what we need is kept:
 * init, reference calibration, continuous ranging and a non-blocking read.
 ******************************************************************************/
#include "vl53l0x.h"
#include "app_config.h"

extern I2C_HandleTypeDef hI2cHandler;    /* I2C2 handle owned by the BSP (stm32l4s5i_iot01.c) */

#define TOF_ADDR      0x52              /* 8-bit address (0x29 << 1) */
#define TOF_TIMEOUT   20                /* ms per I2C transfer */
#define LOOP_TIMEOUT  100               /* ms for internal polling loops */

/* register addresses */
#define SYSRANGE_START                              0x00
#define SYSTEM_SEQUENCE_CONFIG                      0x01
#define SYSTEM_INTERRUPT_CONFIG_GPIO                0x0A
#define SYSTEM_INTERRUPT_CLEAR                      0x0B
#define RESULT_INTERRUPT_STATUS                     0x13
#define RESULT_RANGE_STATUS                         0x14
#define FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT 0x44
#define MSRC_CONFIG_TIMEOUT_MACROP                  0x46
#define PRE_RANGE_CONFIG_VCSEL_PERIOD               0x50
#define PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI          0x51
#define MSRC_CONFIG_CONTROL                         0x60
#define FINAL_RANGE_CONFIG_VCSEL_PERIOD             0x70
#define FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI        0x71
#define GPIO_HV_MUX_ACTIVE_HIGH                     0x84
#define VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV           0x89
#define GLOBAL_CONFIG_SPAD_ENABLES_REF_0            0xB0
#define GLOBAL_CONFIG_REF_EN_START_SELECT           0xB6
#define IDENTIFICATION_MODEL_ID                     0xC0
#define DYNAMIC_SPAD_NUM_REQUESTED_REF_SPAD         0x4E
#define DYNAMIC_SPAD_REF_EN_START_OFFSET            0x4F

#define XSHUT_PORT  GPIOC
#define XSHUT_PIN   GPIO_PIN_6

static uint8_t  stop_variable;
static uint8_t  io_error;

/* ---------------- low level I2C ---------------- */
static void wr(uint8_t reg, uint8_t v)
{
	if (HAL_I2C_Mem_Write(&hI2cHandler, TOF_ADDR, reg, I2C_MEMADD_SIZE_8BIT, &v, 1, TOF_TIMEOUT) != HAL_OK) io_error = 1;
}
static void wr16(uint8_t reg, uint16_t v)
{
	uint8_t b[2] = { (uint8_t)(v >> 8), (uint8_t)v };
	if (HAL_I2C_Mem_Write(&hI2cHandler, TOF_ADDR, reg, I2C_MEMADD_SIZE_8BIT, b, 2, TOF_TIMEOUT) != HAL_OK) io_error = 1;
}
static void wrm(uint8_t reg, uint8_t *src, uint16_t n)
{
	if (HAL_I2C_Mem_Write(&hI2cHandler, TOF_ADDR, reg, I2C_MEMADD_SIZE_8BIT, src, n, TOF_TIMEOUT) != HAL_OK) io_error = 1;
}
static void rdm(uint8_t reg, uint8_t *dst, uint16_t n)
{
	if (HAL_I2C_Mem_Read(&hI2cHandler, TOF_ADDR, reg, I2C_MEMADD_SIZE_8BIT, dst, n, TOF_TIMEOUT) != HAL_OK) io_error = 1;
}
static uint8_t rd(uint8_t reg)
{
	uint8_t v = 0;
	rdm(reg, &v, 1);
	return v;
}
static uint16_t rd16(uint8_t reg)
{
	uint8_t b[2] = { 0, 0 };
	rdm(reg, b, 2);
	return (uint16_t)((b[0] << 8) | b[1]);
}

/* ---------------- timing helpers (from the ST API) ---------------- */
#define DECODE_VCSEL_PERIOD(r)     ((uint8_t)(((r) + 1) << 1))
#define CALC_MACRO_PERIOD(vcsel)   ((((uint32_t)2304 * (vcsel) * 1655) + 500) / 1000)

static uint16_t decode_timeout(uint16_t v)
{
	return (uint16_t)((v & 0x00FF) << ((v & 0xFF00) >> 8)) + 1;
}
static uint16_t encode_timeout(uint32_t mclks)
{
	uint32_t ls = 0; uint16_t ms = 0;
	if (mclks == 0) return 0;
	ls = mclks - 1;
	while ((ls & 0xFFFFFF00) > 0) { ls >>= 1; ms++; }
	return (uint16_t)((ms << 8) | (ls & 0xFF));
}
static uint32_t mclks_to_us(uint16_t mclks, uint8_t vcsel)
{
	uint32_t mp = CALC_MACRO_PERIOD(vcsel);
	return ((mclks * mp) + 500) / 1000;
}
static uint32_t us_to_mclks(uint32_t us, uint8_t vcsel)
{
	uint32_t mp = CALC_MACRO_PERIOD(vcsel);
	return (((us * 1000) + (mp / 2)) / mp);
}

typedef struct { uint8_t tcc, msrc, dss, pre_range, final_range; } Enables;
typedef struct {
	uint8_t  pre_vcsel, final_vcsel;
	uint16_t msrc_mclks, pre_mclks, final_mclks;
	uint32_t msrc_us, pre_us, final_us;
} Timeouts;

static void get_enables(Enables *e)
{
	uint8_t c = rd(SYSTEM_SEQUENCE_CONFIG);
	e->tcc = (c >> 4) & 1; e->dss = (c >> 3) & 1; e->msrc = (c >> 2) & 1;
	e->pre_range = (c >> 6) & 1; e->final_range = (c >> 7) & 1;
}
static void get_timeouts(const Enables *e, Timeouts *t)
{
	t->pre_vcsel   = DECODE_VCSEL_PERIOD(rd(PRE_RANGE_CONFIG_VCSEL_PERIOD));
	t->msrc_mclks  = rd(MSRC_CONFIG_TIMEOUT_MACROP) + 1;
	t->msrc_us     = mclks_to_us(t->msrc_mclks, t->pre_vcsel);
	t->pre_mclks   = decode_timeout(rd16(PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI));
	t->pre_us      = mclks_to_us(t->pre_mclks, t->pre_vcsel);
	t->final_vcsel = DECODE_VCSEL_PERIOD(rd(FINAL_RANGE_CONFIG_VCSEL_PERIOD));
	t->final_mclks = decode_timeout(rd16(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI));
	if (e->pre_range) t->final_mclks -= t->pre_mclks;
	t->final_us    = mclks_to_us(t->final_mclks, t->final_vcsel);
}

#define START_OVH 1910
#define END_OVH    960
#define MSRC_OVH   660
#define TCC_OVH    590
#define DSS_OVH    690
#define PRE_OVH    660
#define FINAL_OVH  550

static uint32_t get_budget(void)
{
	Enables e; Timeouts t;
	uint32_t b = START_OVH + END_OVH;
	get_enables(&e); get_timeouts(&e, &t);
	if (e.tcc) b += t.msrc_us + TCC_OVH;
	if (e.dss) b += 2 * (t.msrc_us + DSS_OVH);
	else if (e.msrc) b += t.msrc_us + MSRC_OVH;
	if (e.pre_range) b += t.pre_us + PRE_OVH;
	if (e.final_range) b += t.final_us + FINAL_OVH;
	return b;
}

static int set_budget(uint32_t budget_us)
{
	Enables e; Timeouts t;
	uint32_t used = START_OVH + END_OVH;
	get_enables(&e); get_timeouts(&e, &t);
	if (e.tcc) used += t.msrc_us + TCC_OVH;
	if (e.dss) used += 2 * (t.msrc_us + DSS_OVH);
	else if (e.msrc) used += t.msrc_us + MSRC_OVH;
	if (e.pre_range) used += t.pre_us + PRE_OVH;
	if (e.final_range) {
		used += FINAL_OVH;
		if (used > budget_us) return 0;
		uint32_t final_mclks = us_to_mclks(budget_us - used, t.final_vcsel);
		if (e.pre_range) final_mclks += t.pre_mclks;
		wr16(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI, encode_timeout(final_mclks));
	}
	return 1;
}

static int single_ref_cal(uint8_t vhv_init_byte)
{
	uint32_t t0 = HAL_GetTick();
	wr(SYSRANGE_START, 0x01 | vhv_init_byte);
	while ((rd(RESULT_INTERRUPT_STATUS) & 0x07) == 0) {
		if (HAL_GetTick() - t0 > LOOP_TIMEOUT || io_error) return 0;
	}
	wr(SYSTEM_INTERRUPT_CLEAR, 0x01);
	wr(SYSRANGE_START, 0x00);
	return 1;
}

static int get_spad_info(uint8_t *count, uint8_t *is_aperture)
{
	uint32_t t0;
	uint8_t tmp;
	wr(0x80, 0x01); wr(0xFF, 0x01); wr(0x00, 0x00);
	wr(0xFF, 0x06); wr(0x83, rd(0x83) | 0x04);
	wr(0xFF, 0x07); wr(0x81, 0x01);
	wr(0x80, 0x01);
	wr(0x94, 0x6b); wr(0x83, 0x00);
	t0 = HAL_GetTick();
	while (rd(0x83) == 0x00) {
		if (HAL_GetTick() - t0 > LOOP_TIMEOUT || io_error) return 0;
	}
	wr(0x83, 0x01);
	tmp = rd(0x92);
	*count = tmp & 0x7F;
	*is_aperture = (tmp >> 7) & 0x01;
	wr(0x81, 0x00); wr(0xFF, 0x06); wr(0x83, rd(0x83) & ~0x04);
	wr(0xFF, 0x01); wr(0x00, 0x01);
	wr(0xFF, 0x00); wr(0x80, 0x00);
	return 1;
}

/* tuning settings from ST's vl53l0x_tuning.h (DefaultTuningSettings) */
static const uint8_t tuning[][2] = {
	{0xFF,0x01},{0x00,0x00},{0xFF,0x00},{0x09,0x00},{0x10,0x00},{0x11,0x00},
	{0x24,0x01},{0x25,0xFF},{0x75,0x00},{0xFF,0x01},{0x4E,0x2C},{0x48,0x00},
	{0x30,0x20},{0xFF,0x00},{0x30,0x09},{0x54,0x00},{0x31,0x04},{0x32,0x03},
	{0x40,0x83},{0x46,0x25},{0x60,0x00},{0x27,0x00},{0x50,0x06},{0x51,0x00},
	{0x52,0x96},{0x56,0x08},{0x57,0x30},{0x61,0x00},{0x62,0x00},{0x64,0x00},
	{0x65,0x00},{0x66,0xA0},{0xFF,0x01},{0x22,0x32},{0x47,0x14},{0x49,0xFF},
	{0x4A,0x00},{0xFF,0x00},{0x7A,0x0A},{0x7B,0x00},{0x78,0x21},{0xFF,0x01},
	{0x23,0x34},{0x42,0x00},{0x44,0xFF},{0x45,0x26},{0x46,0x05},{0x40,0x40},
	{0x0E,0x06},{0x20,0x1A},{0x43,0x40},{0xFF,0x00},{0x34,0x03},{0x35,0x44},
	{0xFF,0x01},{0x31,0x04},{0x4B,0x09},{0x4C,0x05},{0x4D,0x04},{0xFF,0x00},
	{0x44,0x00},{0x45,0x20},{0x47,0x08},{0x48,0x28},{0x67,0x00},{0x70,0x04},
	{0x71,0x01},{0x72,0xFE},{0x76,0x00},{0x77,0x00},{0xFF,0x01},{0x0D,0x01},
	{0xFF,0x00},{0x80,0x01},{0x01,0xF8},{0xFF,0x01},{0x8E,0x01},{0x00,0x01},
	{0xFF,0x00},{0x80,0x00},
};

int vl53l0x_init(void)
{
	GPIO_InitTypeDef g = {0};
	uint8_t spad_count = 0, spad_aperture = 0, map[6];
	uint8_t first, enabled = 0;
	uint32_t budget;

	io_error = 0;

	/* XSHUT: hold low (reset), then release high to boot the sensor */
	__HAL_RCC_GPIOC_CLK_ENABLE();
	g.Pin = XSHUT_PIN; g.Mode = GPIO_MODE_OUTPUT_PP; g.Pull = GPIO_NOPULL; g.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(XSHUT_PORT, &g);
	HAL_GPIO_WritePin(XSHUT_PORT, XSHUT_PIN, GPIO_PIN_RESET);
	HAL_Delay(5);
	HAL_GPIO_WritePin(XSHUT_PORT, XSHUT_PIN, GPIO_PIN_SET);
	HAL_Delay(5);                                   /* boot time is 1.2 ms max */

	if (rd(IDENTIFICATION_MODEL_ID) != 0xEE || io_error) return 0;

	/* ---- DataInit ---- */
	wr(VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV, rd(VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV) | 0x01);  /* 2V8 I/O */
	wr(0x88, 0x00);
	wr(0x80, 0x01); wr(0xFF, 0x01); wr(0x00, 0x00);
	stop_variable = rd(0x91);
	wr(0x00, 0x01); wr(0xFF, 0x00); wr(0x80, 0x00);
	wr(MSRC_CONFIG_CONTROL, rd(MSRC_CONFIG_CONTROL) | 0x12);
	wr16(FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT, (uint16_t)(0.25f * (1 << 7)));   /* 0.25 MCPS */
	wr(SYSTEM_SEQUENCE_CONFIG, 0xFF);

	/* ---- StaticInit: reference SPADs ---- */
	if (!get_spad_info(&spad_count, &spad_aperture)) return 0;
	rdm(GLOBAL_CONFIG_SPAD_ENABLES_REF_0, map, 6);
	wr(0xFF, 0x01);
	wr(DYNAMIC_SPAD_REF_EN_START_OFFSET, 0x00);
	wr(DYNAMIC_SPAD_NUM_REQUESTED_REF_SPAD, 0x2C);
	wr(0xFF, 0x00);
	wr(GLOBAL_CONFIG_REF_EN_START_SELECT, 0xB4);
	first = spad_aperture ? 12 : 0;
	for (uint8_t i = 0; i < 48; i++) {
		if (i < first || enabled == spad_count) map[i / 8] &= (uint8_t)~(1 << (i % 8));
		else if ((map[i / 8] >> (i % 8)) & 0x1) enabled++;
	}
	wrm(GLOBAL_CONFIG_SPAD_ENABLES_REF_0, map, 6);

	/* ---- tuning settings ---- */
	for (unsigned i = 0; i < sizeof(tuning) / sizeof(tuning[0]); i++) wr(tuning[i][0], tuning[i][1]);

	/* interrupt on "new sample ready", active low on GPIO1 */
	wr(SYSTEM_INTERRUPT_CONFIG_GPIO, 0x04);
	wr(GPIO_HV_MUX_ACTIVE_HIGH, rd(GPIO_HV_MUX_ACTIVE_HIGH) & ~0x10);
	wr(SYSTEM_INTERRUPT_CLEAR, 0x01);

	budget = get_budget();
	wr(SYSTEM_SEQUENCE_CONFIG, 0xE8);              /* disable MSRC and TCC */
	set_budget(budget);

	/* ---- reference calibration ---- */
	wr(SYSTEM_SEQUENCE_CONFIG, 0x01);
	if (!single_ref_cal(0x40)) return 0;           /* VHV */
	wr(SYSTEM_SEQUENCE_CONFIG, 0x02);
	if (!single_ref_cal(0x00)) return 0;           /* phase */
	wr(SYSTEM_SEQUENCE_CONFIG, 0xE8);

	/* ---- start continuous back-to-back ranging ---- */
	wr(0x80, 0x01); wr(0xFF, 0x01); wr(0x00, 0x00);
	wr(0x91, stop_variable);
	wr(0x00, 0x01); wr(0xFF, 0x00); wr(0x80, 0x00);
	wr(SYSRANGE_START, 0x02);

	return io_error ? 0 : 1;
}

/* device range status (RESULT_RANGE_STATUS bits 6:3), as decoded by ST's API */
#define ST_VALID        11
#define ST_MIN_RANGE_A  8
#define ST_MIN_RANGE_B  10
#define COVERED_MM      20

static uint16_t last_raw = TOF_NO_TARGET;
static uint8_t  last_status;
static float    last_signal;

int vl53l0x_read_mm(uint16_t *mm)
{
	uint8_t b[12];
	uint16_t r;

	if ((rd(RESULT_INTERRUPT_STATUS) & 0x07) == 0) return 0;     /* no new sample yet */
	rdm(RESULT_RANGE_STATUS, b, 12);
	wr(SYSTEM_INTERRUPT_CLEAR, 0x01);

	r           = (uint16_t)((b[10] << 8) | b[11]);
	last_raw    = r;
	last_status = (uint8_t)((b[0] & 0x78) >> 3);
	last_signal = (float)((b[6] << 8) | b[7]) / 128.0f;          /* 9.7 fixed point */

	if (last_status == ST_VALID && r > 0 && r < 2000)
		*mm = r;                                                 /* a real target */
#if TOF_COVERED_IS_NEAR
	else if (last_status == ST_MIN_RANGE_A || last_status == ST_MIN_RANGE_B)
		*mm = COVERED_MM;                                        /* something right on the sensor */
#endif
	else
		*mm = TOF_NO_TARGET;                                     /* nothing, or a reading the sensor distrusts */
	return 1;
}

uint16_t vl53l0x_last_raw(void)    { return last_raw; }
uint8_t  vl53l0x_last_status(void) { return last_status; }
float    vl53l0x_last_signal(void) { return last_signal; }

void vl53l0x_shutdown(void)
{
	wr(SYSRANGE_START, 0x01);
	HAL_GPIO_WritePin(XSHUT_PORT, XSHUT_PIN, GPIO_PIN_RESET);
}

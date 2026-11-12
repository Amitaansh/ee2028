/******************************************************************************
 * tele_oled.c - telemetry OLED (Yatin's driver, graphics and screens)
 *
 * Sections 9-11 of Yatin's single-file main.c, moved here unchanged except:
 *   - the UI_* functions are public (declared in tele_oled.h),
 *   - the sensor table uses the thresholds in app_config.h (same as the UART),
 *   - the text helpers (put_*) are local copies,
 *   - UI_Status() added for messages from the rest of the firmware.
 * Everything else in this file is static, so nothing clashes with oled.c / hud.c
 * (the drone HUD on the other display).
 ******************************************************************************/
#include "main.h"
#include "app_config.h"
#include "tele_oled.h"
#include "comms.h"
#include <string.h>
#include <stdlib.h>
#include <math.h>

#if ENH_TELE_OLED

#define MAX_ENERGY 10                       /* laser capacity, tenths (drone.c caps at 10) */

/* ---- text helpers (from section 1 of Yatin's main.c) ---- */
static char *put_str(char *p, const char *s)
{
	while ((*p = *s++)) p++;
	return p;
}

static char *put_uint(char *p, uint32_t v)
{
	char t[10];
	int n = 0;
	do t[n++] = (char)('0' + v % 10u); while (v /= 10u);
	while (n) *p++ = t[--n];
	*p = 0;
	return p;
}

/* signed integer, right-aligned in 'width' characters (like %4d) */
static __attribute__((unused)) char *put_int(char *p, int v, int width)
{
	char t[12];
	char *e = put_uint(v < 0 ? put_str(t, "-") : t, (uint32_t)(v < 0 ? -v : v));
	for (int pad = width - (int)(e - t); pad > 0; pad--) *p++ = ' ';
	return put_str(p, t);
}

/* float with 0..2 decimals (like %.2f). NaN -> "---", out of range -> "OVR" */
static char *put_fixed(char *p, float v, int dec)
{
	uint32_t scale = dec >= 2 ? 100u : dec == 1 ? 10u : 1u;
	int neg = v < 0.0f;

	if (v != v) return put_str(p, "---");
	if (neg) v = -v;
	if (v > 999999.0f) return put_str(p, neg ? "-OVR" : "OVR");

	uint32_t n = (uint32_t)(v * (float)scale + 0.5f);
	if (neg && n) *p++ = '-';
	p = put_uint(p, n / scale);
	if (dec > 0) {
		*p++ = '.';
		if (dec >= 2 && n % scale < 10u) *p++ = '0';
		p = put_uint(p, n % scale);
	}
	return p;
}

/* ---- sensor table: tags, units and the same thresholds as the UART telemetry ---- */
static const struct { const char *tag, *unit; float lo, hi; } SENS[NSENS] = {
	[S_T] = { "T", "degC",  T_LO, T_HI },
	[S_P] = { "P", "hPa",   P_LO, P_HI },
	[S_H] = { "H", "%RH",   H_LO, H_HI },
	[S_A] = { "A", "m/s^2", A_LO, A_HI },
	[S_G] = { "G", "dps",   G_LO, G_HI },
	[S_M] = { "M", "gauss", M_LO, M_HI },
};

/* =============================================================================
 * 9. OLED DRIVER - SSD1306 128x64 on I2C1 (PB8 = SCL, PB9 = SDA)
 *    Screens are drawn into oled_fb, then oled_commit() finds the 8-row bands that
 *    changed. oled_flush() hands one band at a time to DMA, so the CPU never waits for
 *    the bus: a full redraw takes ~25 ms of bus time at 400 kHz (~10 ms at 1 MHz) and
 *    costs the main loop nothing. While nothing changes, one band per 100 ms is re-sent
 *    anyway, so a glitch on the bus heals itself within a second. After a bus error the
 *    link is restarted within 0.25 s; a missing display is then retried less and less
 *    often (up to every 3 s) and never stalls the firmware.
 * ============================================================================= */
#define OLED_ADDR          0x3C     /* 7-bit address; if nothing answers, the bus is scanned once */
#define OLED_W             128
#define OLED_H             64
#define OLED_BANDS         (OLED_H / 8)
#define OLED_ROTATE_180    0        /* 1 = display mounted upside down */
#define OLED_RETRY_MS      3000     /* slowest retry interval for a missing display            */
#define OLED_RETRY_FIRST   250      /* first retry after an error: back within a quarter second */
#define OLED_SCRUB_MS      100      /* while idle, resend one band this often (whole screen / 0.8 s) */
#define OLED_I2C_FAST      0        /* 0 = 400 kHz, the SSD1306's rated speed (most reliable with jumper wires
                                       and a servo next to the bus); 1 = 1 MHz Fast-mode Plus, out of spec */

typedef uint32_t __attribute__((may_alias)) word32;   /* to read the framebuffer 4 bytes at a time */

/* framebuffer: byte [band * 128 + x] holds rows band*8 .. band*8+7 of column x, bit 0 = top */
static uint8_t  oled_fb[OLED_W * OLED_BANDS] __attribute__((aligned(4)));
static uint32_t band_hash[OLED_BANDS];      /* fingerprint of each band as drawn      */
static uint32_t sent_hash[OLED_BANDS];      /* ... and as last sent to the display    */
static uint8_t  dirty;                      /* bit b = band b must be sent            */
static uint8_t  oled_present, bus_ready, bus_fails, next_band;
static int8_t   tx_band = -1;               /* band the DMA is sending now, -1 = bus idle */
static uint32_t tx_start;
/* one band = ONE I2C write: set page and column, then 128 pixel bytes (0x80 = "one command
 * follows", 0x40 = "pixel data follows"). Copied here so drawing the next frame can't tear it. */
static uint8_t  oled_pkt[7 + OLED_W] = { 0x80, 0, 0x80, 0x00, 0x80, 0x10, 0x40 };
static uint16_t oled_addr = OLED_ADDR;
static uint32_t t_retry, t_scrub;
static uint16_t retry_ms = OLED_RETRY_FIRST;
static uint8_t  scrub_band, oled_lost;
static I2C_HandleTypeDef hi2c1;

static const uint8_t OLED_INIT[] = {        /* sent as one command stream */
	0xAE,                                   /* display off while setting up       */
	0xD5, 0x80,                             /* clock divider                      */
	0xA8, OLED_H - 1,                       /* 64 rows                            */
	0xD3, 0x00,                             /* no vertical offset                 */
	0x40,                                   /* start line 0                       */
	0x8D, 0x14,                             /* charge pump on                     */
	OLED_ROTATE_180 ? 0xA0 : 0xA1,          /* column order                       */
	OLED_ROTATE_180 ? 0xC0 : 0xC8,          /* row order                          */
	0xDA, 0x12,                             /* COM pins for 128x64                */
	0x81, 0xCF,                             /* contrast                           */
	0xD9, 0xF1,                             /* pre-charge                         */
	0xDB, 0x40,                             /* VCOMH                              */
	0xA4, 0xA6,                             /* show RAM, not inverted             */
};

/* I2C1 clocked from the 16 MHz HSI, so the bus speed doesn't depend on the core clock */
static int i2c1_init(void)
{
	GPIO_InitTypeDef g = {0};
	uint32_t t0 = HAL_GetTick();

	__HAL_RCC_HSI_ENABLE();
	while (__HAL_RCC_GET_FLAG(RCC_FLAG_HSIRDY) == RESET)
		if (HAL_GetTick() - t0 > 10u) return 0;
	__HAL_RCC_I2C1_CONFIG(RCC_I2C1CLKSOURCE_HSI);
	__HAL_RCC_GPIOB_CLK_ENABLE();

	/* a reset in the middle of a transfer can leave the display holding SDA low:
	 * up to 9 clock pulses let it finish and release the bus */
	g.Pin   = GPIO_PIN_8 | GPIO_PIN_9;
	g.Mode  = GPIO_MODE_OUTPUT_OD;
	g.Pull  = GPIO_PULLUP;
	g.Speed = GPIO_SPEED_FREQ_HIGH;
	HAL_GPIO_WritePin(GPIOB, g.Pin, GPIO_PIN_SET);
	HAL_GPIO_Init(GPIOB, &g);
	for (int i = 0; i < 9 && HAL_GPIO_ReadPin(GPIOB, GPIO_PIN_9) == GPIO_PIN_RESET; i++) {
		HAL_GPIO_WritePin(GPIOB, GPIO_PIN_8, GPIO_PIN_RESET);
		for (volatile uint32_t d = 0; d < SystemCoreClock / 200000u; d++) { }
		HAL_GPIO_WritePin(GPIOB, GPIO_PIN_8, GPIO_PIN_SET);
		for (volatile uint32_t d = 0; d < SystemCoreClock / 200000u; d++) { }
	}

	__HAL_RCC_I2C1_CLK_ENABLE();
	__HAL_RCC_I2C1_FORCE_RESET();
	__HAL_RCC_I2C1_RELEASE_RESET();
	g.Mode      = GPIO_MODE_AF_OD;              /* internal pull-ups as a backup to the module's own */
	g.Alternate = GPIO_AF4_I2C1;
	HAL_GPIO_Init(GPIOB, &g);

	hi2c1.Instance             = I2C1;
	hi2c1.Init.Timing          = OLED_I2C_FAST ? 0x00200204u : 0x10320309u;   /* 1 MHz / 400 kHz at 16 MHz (RM0432) */
	hi2c1.Init.AddressingMode  = I2C_ADDRESSINGMODE_7BIT;
	if (HAL_I2C_Init(&hi2c1) != HAL_OK) return 0;
	HAL_I2CEx_ConfigAnalogFilter(&hi2c1, I2C_ANALOGFILTER_ENABLE);
	if (OLED_I2C_FAST) HAL_I2CEx_EnableFastModePlus(I2C_FASTMODEPLUS_PB8 | I2C_FASTMODEPLUS_PB9);

	__HAL_RCC_DMA1_CLK_ENABLE();                /* I2C1_TX = DMA1 channel 6, routed by the DMAMUX */
	__HAL_RCC_DMAMUX1_CLK_ENABLE();
	DMAMUX1_Channel5->CCR = DMA_REQUEST_I2C1_TX;
	DMA1_Channel6->CPAR = (uint32_t)&I2C1->TXDR;
	DMA1_Channel6->CMAR = (uint32_t)oled_pkt;
	DMA1_Channel6->CCR  = DMA_CCR_MINC | DMA_CCR_DIR;       /* memory -> I2C, 8-bit, incrementing */
	return 1;
}

/* control byte 0x00 = the bytes are commands, 0x40 = the bytes are pixel data */
static int oled_write(uint8_t control, const uint8_t *buf, uint16_t len)
{
	return HAL_I2C_Mem_Write(&hi2c1, (uint16_t)(oled_addr << 1), control, I2C_MEMADD_SIZE_8BIT,
	                         (uint8_t *)buf, len, 10u + len / 16u) == HAL_OK;
}

/* 1 if the display answers. Not at OLED_ADDR? It is the only device on this bus, so use
 * whatever answers - scanned once only, so a missing display never slows the loop down. */
static int oled_probe(void)
{
	static uint8_t scanned;

	if (HAL_I2C_IsDeviceReady(&hi2c1, (uint16_t)(oled_addr << 1), 2, 5) == HAL_OK) return 1;
	if (scanned) return 0;
	scanned = 1;
	for (uint16_t a = 0x08; a < 0x78; a++)
		if (HAL_I2C_IsDeviceReady(&hi2c1, (uint16_t)(a << 1), 1, 2) == HAL_OK) { oled_addr = a; return 1; }
	return 0;
}

/* cheap fingerprint of one band (FNV-1a over 32-bit words). Comparing fingerprints instead of
 * keeping a copy of the whole screen saves 1 KB of RAM. */
static uint32_t oled_band_hash(int b)
{
	const word32 *w = (const word32 *)&oled_fb[b * OLED_W];
	uint32_t h = 2166136261u;
	for (int i = 0; i < OLED_W / 4; i++) h = (h ^ w[i]) * 16777619u;
	return h;
}

/* frame finished: mark the bands that differ from what the display shows */
static void oled_commit(void)
{
	for (int b = 0; b < OLED_BANDS; b++) {
		band_hash[b] = oled_band_hash(b);
		if (band_hash[b] != sent_hash[b]) dirty |= (uint8_t)(1u << b);
		else                              dirty &= (uint8_t)~(1u << b);
	}
}

static int oled_init(void);

/* start the DMA write of band b; the I2C hardware ends it with a STOP by itself */
static void oled_tx_start(int b)
{
	oled_pkt[1] = (uint8_t)(0xB0 | b);                          /* page b */
	memcpy(&oled_pkt[7], &oled_fb[b * OLED_W], OLED_W);
	DMA1->IFCR = DMA_IFCR_CGIF6;
	DMA1_Channel6->CNDTR = sizeof oled_pkt;
	DMA1_Channel6->CCR  |= DMA_CCR_EN;
	I2C1->ICR = I2C_ICR_STOPCF | I2C_ICR_NACKCF;
	I2C1->CR1 |= I2C_CR1_TXDMAEN;
	I2C1->CR2 = (uint32_t)(oled_addr << 1) | (sizeof oled_pkt << I2C_CR2_NBYTES_Pos) | I2C_CR2_AUTOEND | I2C_CR2_START;
	tx_band  = (int8_t)b;
	tx_start = HAL_GetTick();
}

/* 0 = still sending, 1 = band delivered, -1 = failed (no answer, bus error or stuck) */
static int oled_tx_poll(void)
{
	uint32_t isr = I2C1->ISR;
	int ok = (isr & I2C_ISR_STOPF) && !(isr & I2C_ISR_NACKF);

	if (!ok && !(isr & (I2C_ISR_NACKF | I2C_ISR_ARLO | I2C_ISR_BERR)) && HAL_GetTick() - tx_start < 20u)
		return 0;
	DMA1_Channel6->CCR &= ~DMA_CCR_EN;
	I2C1->CR1 &= ~I2C_CR1_TXDMAEN;
	I2C1->ICR = I2C_ICR_STOPCF | I2C_ICR_NACKCF;
	if (!ok) {                                                  /* PE off/on clears any error state */
		I2C1->CR1 &= ~I2C_CR1_PE;
		while (I2C1->CR1 & I2C_CR1_PE) { }
		I2C1->CR1 |= I2C_CR1_PE;
	}
	return ok ? 1 : -1;
}

/* call every loop pass: finishes the band in flight, then starts the next changed one (round robin) */
static void oled_flush(void)
{
	if (!oled_present) {                        /* look for a missing display: after 0.25 s, then less and less often */
		if (HAL_GetTick() - t_retry >= retry_ms) oled_init();
		return;
	}
	if (tx_band >= 0) {
		int r = oled_tx_poll();
		if (!r) return;
		if (r > 0) bus_fails = 0;
		else {                                  /* resend it; three failures in a row = unplugged */
			sent_hash[tx_band] = ~band_hash[tx_band];
			dirty |= (uint8_t)(1u << tx_band);
			if (++bus_fails >= 3) {             /* give up on this link: restart the bus (frees a stuck SDA) soon */
				oled_present = 0;
				bus_ready = 0;
				retry_ms = OLED_RETRY_FIRST;
				t_retry = HAL_GetTick();
				if (!oled_lost) send("[ZD] telemetry OLED: bus error, reconnecting...\r\n");
				oled_lost = 1;
			}
		}
		tx_band = -1;
	}
	for (int i = 0; i < OLED_BANDS && dirty && oled_present; i++) {
		int b = (next_band + i) % OLED_BANDS;
		if (!(dirty & (1u << b))) continue;
		sent_hash[b] = band_hash[b];
		dirty &= (uint8_t)~(1u << b);
		next_band = (uint8_t)((b + 1) % OLED_BANDS);
		oled_tx_start(b);
		break;
	}

	/* nothing to send: quietly refresh the screen, one band at a time. The display keeps no check of its own,
	 * so a glitch on the bus (servo noise, a loose wire) would otherwise stay on screen until that part
	 * of the picture changed. Every full round also re-sends the setup, in case it was reset. */
	if (tx_band < 0 && !dirty && HAL_GetTick() - t_scrub >= OLED_SCRUB_MS) {
		static const uint8_t ON = 0xAF;
		t_scrub = HAL_GetTick();
		if (scrub_band == 0) {
			oled_write(0x00, &OLED_INIT[1], sizeof OLED_INIT - 1);   /* everything but the leading "display off" */
			oled_write(0x00, &ON, 1);
		}
		sent_hash[scrub_band] = ~band_hash[scrub_band];
		dirty |= (uint8_t)(1u << scrub_band);
		scrub_band = (uint8_t)((scrub_band + 1) % OLED_BANDS);
	}
}

static void oled_flush_all(void)                 /* blocking: send the whole frame now */
{
	t_scrub = HAL_GetTick();
	oled_commit();
	for (uint32_t t0 = HAL_GetTick(); oled_present && (dirty || tx_band >= 0) && HAL_GetTick() - t0 < 500u; )
		oled_flush();
}

static int oled_init(void)
{
	static const uint8_t ON = 0xAF;

	oled_present = 0;
	tx_band = -1;
	t_retry = HAL_GetTick();
	if (retry_ms < OLED_RETRY_MS) retry_ms = (uint16_t)(retry_ms * 2u > OLED_RETRY_MS ? OLED_RETRY_MS : retry_ms * 2u);
	if (!bus_ready && !(bus_ready = (uint8_t)i2c1_init())) return 0;
	HAL_Delay(5);                               /* the module's own power-on reset */
	if (!oled_probe() || !oled_write(0x00, OLED_INIT, sizeof OLED_INIT)) return 0;

	oled_present = 1;
	retry_ms = OLED_RETRY_FIRST;
	bus_fails = 0;
	if (oled_lost) { oled_lost = 0; send("[ZD] telemetry OLED: reconnected\r\n"); }
	for (int b = 0; b < OLED_BANDS; b++) sent_hash[b] = ~oled_band_hash(b);   /* resend everything */
	oled_flush_all();
	if (oled_present) oled_write(0x00, &ON, 1); /* display on */
	return oled_present;
}

/* =============================================================================
 * 10. GRAPHICS - drawing into oled_fb. x right, y down, (0,0) = top left; clipped.
 * ============================================================================= */
enum { GFX_BLACK, GFX_WHITE, GFX_INVERT };
#define GFX_DEG   "\xF8"                    /* degree sign   */
#define GFX_SQ    "\xFD"                    /* superscript 2 */

/* 5x7 font (Adafruit GFX "glcd", BSD licence): printable ASCII + the two symbols above.
 * One byte per column, bit 0 = top row. */
static const uint8_t FONT[97][5] = {
	{0x00,0x00,0x00,0x00,0x00}, {0x00,0x00,0x5F,0x00,0x00}, {0x00,0x07,0x00,0x07,0x00}, {0x14,0x7F,0x14,0x7F,0x14},  /* ' ' '!' '"' '#' */
	{0x24,0x2A,0x7F,0x2A,0x12}, {0x23,0x13,0x08,0x64,0x62}, {0x36,0x49,0x56,0x20,0x50}, {0x00,0x08,0x07,0x03,0x00},  /* '$' '%' '&' "'" */
	{0x00,0x1C,0x22,0x41,0x00}, {0x00,0x41,0x22,0x1C,0x00}, {0x2A,0x1C,0x7F,0x1C,0x2A}, {0x08,0x08,0x3E,0x08,0x08},  /* '(' ')' '*' '+' */
	{0x00,0x80,0x70,0x30,0x00}, {0x08,0x08,0x08,0x08,0x08}, {0x00,0x00,0x60,0x60,0x00}, {0x20,0x10,0x08,0x04,0x02},  /* ',' '-' '.' '/' */
	{0x3E,0x51,0x49,0x45,0x3E}, {0x00,0x42,0x7F,0x40,0x00}, {0x72,0x49,0x49,0x49,0x46}, {0x21,0x41,0x49,0x4D,0x33},  /* '0' '1' '2' '3' */
	{0x18,0x14,0x12,0x7F,0x10}, {0x27,0x45,0x45,0x45,0x39}, {0x3C,0x4A,0x49,0x49,0x31}, {0x41,0x21,0x11,0x09,0x07},  /* '4' '5' '6' '7' */
	{0x36,0x49,0x49,0x49,0x36}, {0x46,0x49,0x49,0x29,0x1E}, {0x00,0x00,0x14,0x00,0x00}, {0x00,0x40,0x34,0x00,0x00},  /* '8' '9' ':' ';' */
	{0x00,0x08,0x14,0x22,0x41}, {0x14,0x14,0x14,0x14,0x14}, {0x00,0x41,0x22,0x14,0x08}, {0x02,0x01,0x59,0x09,0x06},  /* '<' '=' '>' '?' */
	{0x3E,0x41,0x5D,0x59,0x4E}, {0x7C,0x12,0x11,0x12,0x7C}, {0x7F,0x49,0x49,0x49,0x36}, {0x3E,0x41,0x41,0x41,0x22},  /* '@' 'A' 'B' 'C' */
	{0x7F,0x41,0x41,0x41,0x3E}, {0x7F,0x49,0x49,0x49,0x41}, {0x7F,0x09,0x09,0x09,0x01}, {0x3E,0x41,0x41,0x51,0x73},  /* 'D' 'E' 'F' 'G' */
	{0x7F,0x08,0x08,0x08,0x7F}, {0x00,0x41,0x7F,0x41,0x00}, {0x20,0x40,0x41,0x3F,0x01}, {0x7F,0x08,0x14,0x22,0x41},  /* 'H' 'I' 'J' 'K' */
	{0x7F,0x40,0x40,0x40,0x40}, {0x7F,0x02,0x1C,0x02,0x7F}, {0x7F,0x04,0x08,0x10,0x7F}, {0x3E,0x41,0x41,0x41,0x3E},  /* 'L' 'M' 'N' 'O' */
	{0x7F,0x09,0x09,0x09,0x06}, {0x3E,0x41,0x51,0x21,0x5E}, {0x7F,0x09,0x19,0x29,0x46}, {0x26,0x49,0x49,0x49,0x32},  /* 'P' 'Q' 'R' 'S' */
	{0x03,0x01,0x7F,0x01,0x03}, {0x3F,0x40,0x40,0x40,0x3F}, {0x1F,0x20,0x40,0x20,0x1F}, {0x3F,0x40,0x38,0x40,0x3F},  /* 'T' 'U' 'V' 'W' */
	{0x63,0x14,0x08,0x14,0x63}, {0x03,0x04,0x78,0x04,0x03}, {0x61,0x59,0x49,0x4D,0x43}, {0x00,0x7F,0x41,0x41,0x41},  /* 'X' 'Y' 'Z' '[' */
	{0x02,0x04,0x08,0x10,0x20}, {0x00,0x41,0x41,0x41,0x7F}, {0x04,0x02,0x01,0x02,0x04}, {0x40,0x40,0x40,0x40,0x40},  /* '\\' ']' '^' '_' */
	{0x00,0x03,0x07,0x08,0x00}, {0x20,0x54,0x54,0x78,0x40}, {0x7F,0x28,0x44,0x44,0x38}, {0x38,0x44,0x44,0x44,0x28},  /* '`' 'a' 'b' 'c' */
	{0x38,0x44,0x44,0x28,0x7F}, {0x38,0x54,0x54,0x54,0x18}, {0x00,0x08,0x7E,0x09,0x02}, {0x18,0xA4,0xA4,0x9C,0x78},  /* 'd' 'e' 'f' 'g' */
	{0x7F,0x08,0x04,0x04,0x78}, {0x00,0x44,0x7D,0x40,0x00}, {0x20,0x40,0x40,0x3D,0x00}, {0x7F,0x10,0x28,0x44,0x00},  /* 'h' 'i' 'j' 'k' */
	{0x00,0x41,0x7F,0x40,0x00}, {0x7C,0x04,0x78,0x04,0x78}, {0x7C,0x08,0x04,0x04,0x78}, {0x38,0x44,0x44,0x44,0x38},  /* 'l' 'm' 'n' 'o' */
	{0xFC,0x18,0x24,0x24,0x18}, {0x18,0x24,0x24,0x18,0xFC}, {0x7C,0x08,0x04,0x04,0x08}, {0x48,0x54,0x54,0x54,0x24},  /* 'p' 'q' 'r' 's' */
	{0x04,0x04,0x3F,0x44,0x24}, {0x3C,0x40,0x40,0x20,0x7C}, {0x1C,0x20,0x40,0x20,0x1C}, {0x3C,0x40,0x30,0x40,0x3C},  /* 't' 'u' 'v' 'w' */
	{0x44,0x28,0x10,0x28,0x44}, {0x4C,0x90,0x90,0x90,0x7C}, {0x44,0x64,0x54,0x4C,0x44}, {0x00,0x08,0x36,0x41,0x00},  /* 'x' 'y' 'z' '{' */
	{0x00,0x00,0x77,0x00,0x00}, {0x00,0x41,0x36,0x08,0x00}, {0x02,0x01,0x02,0x04,0x02}, {0x06,0x0F,0x09,0x0F,0x06},  /* '|' '}' '~' deg */
	{0x00,0x19,0x1D,0x17,0x12},  /* sq2 */
};

static const uint8_t *glyph(unsigned char ch)
{
	if (ch >= ' ' && ch <= '~') return FONT[ch - ' '];
	if (ch == 0xF8) return FONT[95];
	if (ch == 0xFD) return FONT[96];
	return FONT[0];                             /* anything else: blank */
}

static void gfx_pixel(int x, int y, uint8_t c)
{
	if ((unsigned)x >= OLED_W || (unsigned)y >= OLED_H) return;
	uint8_t *p = &oled_fb[(y >> 3) * OLED_W + x], m = (uint8_t)(1u << (y & 7));
	if (c == GFX_WHITE)      *p |= m;
	else if (c == GFX_BLACK) *p &= (uint8_t)~m;
	else                     *p ^= m;
}

static void gfx_clear(void) { memset(oled_fb, 0, sizeof oled_fb); }

/* filled rectangle, a whole byte (8 rows) at a time */
static void gfx_fill(int x, int y, int w, int h, uint8_t c)
{
	if (x < 0) { w += x; x = 0; }
	if (y < 0) { h += y; y = 0; }
	if (x + w > OLED_W) w = OLED_W - x;
	if (y + h > OLED_H) h = OLED_H - y;
	if (w <= 0 || h <= 0) return;

	int y1 = y + h - 1;
	for (int band = y >> 3; band <= y1 >> 3; band++) {
		int top = band == y >> 3  ? y & 7  : 0;
		int bot = band == y1 >> 3 ? y1 & 7 : 7;
		uint8_t m = (uint8_t)((0xFFu << top) & (0xFFu >> (7 - bot)));
		uint8_t *row = &oled_fb[band * OLED_W + x];
		if (c == GFX_WHITE)      for (int i = 0; i < w; i++) row[i] |= m;
		else if (c == GFX_BLACK) for (int i = 0; i < w; i++) row[i] &= (uint8_t)~m;
		else                     for (int i = 0; i < w; i++) row[i] ^= m;
	}
}

static void gfx_hline(int x, int y, int w, uint8_t c) { gfx_fill(x, y, w, 1, c); }
static void gfx_vline(int x, int y, int h, uint8_t c) { gfx_fill(x, y, 1, h, c); }

static void gfx_rect(int x, int y, int w, int h, uint8_t c)
{
	if (w <= 0 || h <= 0) return;
	gfx_hline(x, y, w, c);
	if (h > 1) gfx_hline(x, y + h - 1, w, c);
	if (h > 2) {
		gfx_vline(x, y + 1, h - 2, c);
		if (w > 1) gfx_vline(x + w - 1, y + 1, h - 2, c);
	}
}

static void gfx_round_rect(int x, int y, int w, int h, uint8_t c)   /* 1-pixel cut corners */
{
	if (w < 3 || h < 3) { gfx_rect(x, y, w, h, c); return; }
	gfx_hline(x + 1, y, w - 2, c);
	gfx_hline(x + 1, y + h - 1, w - 2, c);
	gfx_vline(x, y + 1, h - 2, c);
	gfx_vline(x + w - 1, y + 1, h - 2, c);
}

static void gfx_fill_round(int x, int y, int w, int h, uint8_t c)
{
	if (w < 3 || h < 3) { gfx_fill(x, y, w, h, c); return; }
	gfx_fill(x + 1, y, w - 2, h, c);
	gfx_vline(x, y + 1, h - 2, c);
	gfx_vline(x + w - 1, y + 1, h - 2, c);
}

static void gfx_hatch(int x, int y, int w, int h, uint8_t c)       /* 50 % checkerboard */
{
	for (int j = 0; j < h; j++)
		for (int i = (x + y + j) & 1; i < w; i += 2) gfx_pixel(x + i, y + j, c);
}

static void gfx_dots_h(int x, int y, int w, int step, uint8_t c) { for (int i = 0; i < w; i += step) gfx_pixel(x + i, y, c); }
static void gfx_dots_v(int x, int y, int h, int step, uint8_t c) { for (int j = 0; j < h; j += step) gfx_pixel(x, y + j, c); }

static void gfx_line(int x0, int y0, int x1, int y1, uint8_t c)    /* Bresenham */
{
	int dx = abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
	int dy = -abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
	for (int err = dx + dy;;) {
		gfx_pixel(x0, y0, c);
		if (x0 == x1 && y0 == y1) break;
		int e2 = 2 * err;
		if (e2 >= dy) { err += dy; x0 += sx; }
		if (e2 <= dx) { err += dx; y0 += sy; }
	}
}

static void gfx_circle(int cx, int cy, int r, uint8_t c)           /* midpoint circle */
{
	for (int x = r, y = 0, err = 1 - r; x >= y;) {
		gfx_pixel(cx + x, cy + y, c); gfx_pixel(cx + y, cy + x, c);
		gfx_pixel(cx - y, cy + x, c); gfx_pixel(cx - x, cy + y, c);
		gfx_pixel(cx - x, cy - y, c); gfx_pixel(cx - y, cy - x, c);
		gfx_pixel(cx + y, cy - x, c); gfx_pixel(cx + x, cy - y, c);
		y++;
		if (err < 0) err += 2 * y + 1;
		else { x--; err += 2 * (y - x) + 1; }
	}
}

static void gfx_fill_circle(int cx, int cy, int r, uint8_t c)
{
	for (int dy = -r; dy <= r; dy++) {
		int dx = 0;
		while ((dx + 1) * (dx + 1) + dy * dy <= r * r + r) dx++;
		gfx_hline(cx - dx, cy + dy, 2 * dx + 1, c);
	}
}

/* Lopaka / Adafruit bitmap: row by row, MSB = leftmost pixel, rows padded to whole bytes */
static void gfx_bitmap(int x, int y, const uint8_t *bits, int w, int h, uint8_t c)
{
	int bpr = (w + 7) / 8;
	for (int j = 0; j < h; j++)
		for (int b = 0; b < bpr; b++) {
			uint8_t v = bits[j * bpr + b];
			for (int i = b * 8; v && i < w; i++, v = (uint8_t)(v << 1))
				if (v & 0x80u) gfx_pixel(x + i, y + j, c);
		}
}

/* '.' and ':' are drawn 2 columns wide, so "28.53" doesn't read as "28 .53" */
static int narrow(unsigned char ch)  { return ch == '.' || ch == ':'; }
static int advance(unsigned char ch) { return narrow(ch) ? 3 : 6; }

/* one character at 1x..4x size. Each glyph column is stretched and OR-ed into the bands
 * in one go, far faster than pixel by pixel. Returns the x after the character. */
static int gfx_char(int x, int y, unsigned char ch, int size, uint8_t c)
{
	const uint8_t *g = glyph(ch);
	int first = narrow(ch) ? 2 : 0, last = narrow(ch) ? 3 : 4;

	for (int col = first; y >= 0 && col <= last; col++) {
		uint32_t m = g[col];
		if (size > 1) {                                   /* stretch 8 rows to 8 * size */
			m = 0;
			for (int r = 0; r < 8; r++)
				if (g[col] & (1u << r)) m |= ((1u << size) - 1u) << (r * size);
		}
		for (int k = 0; k < size; k++) {
			int px = x + (col - first) * size + k;
			uint64_t mm = (uint64_t)m << (y & 7);
			for (int band = y >> 3; (unsigned)px < OLED_W && mm && band < OLED_BANDS; band++, mm >>= 8) {
				uint8_t *p = &oled_fb[band * OLED_W + px], b = (uint8_t)mm;
				*p = c == GFX_WHITE ? *p | b : c == GFX_BLACK ? *p & (uint8_t)~b : *p ^ b;
			}
		}
	}
	return x + advance(ch) * size;
}

static int gfx_text(int x, int y, const char *s, int size, uint8_t c)   /* returns x after the text */
{
	while (*s) x = gfx_char(x, y, (unsigned char)*s++, size, c);
	return x;
}

static int gfx_text_w(const char *s, int size)
{
	int w = 0;
	while (*s) w += advance((unsigned char)*s++) * size;
	return w ? w - size : 0;
}

static void gfx_text_center(int cx, int y, const char *s, int size, uint8_t c) { gfx_text(cx - gfx_text_w(s, size) / 2, y, s, size, c); }
static void gfx_text_right(int xr, int y, const char *s, int size, uint8_t c)  { gfx_text(xr - gfx_text_w(s, size) + 1, y, s, size, c); }

/* =============================================================================
 * 11. OLED SCREENS (128 x 64)
 *    rows 0..12  header: mode tabs (active = white) + warning triangle
 *                (outline = all fine, solid = sensor out of range, blinking = attacked)
 *    rows 14..63 STANDBY  4 pages (joystick click = next): T+P, H+A, G+M, all six.
 *                         Each card: icon, value, gauge with the threshold ticks
 *                         (hatched = out of range). An out-of-range card turns white.
 *                BATTLE   laser battery, charge, shots, LED
 *                AIM      turret position, pan / tilt angles, laser bar
 *                ATTACKED flashing banner, 10 s rescue countdown
 *    Screens only redraw when something changes. Events (a press, a shot, a rescue, a
 *    recentre) are never animated or shown full screen: the result appears for 1.5 s in a
 *    small status bar on the bottom row.
 * ============================================================================= */
#define W            GFX_WHITE
#define B            GFX_BLACK
#define CY           14         /* first row below the header */
#define NPAGES       4
#define CARD_H       25
#define STATUS_MS        1500   /* how long a status-bar message stays up */
#define IDLE_FRAME_MS     250   /* redraw period when only blinks and sensor values change */
#define AIM_FRAME_MS       50   /* live aiming view */
#define ATTACK_FRAME_MS   100   /* rescue countdown */

static const uint8_t ICON_TEMP[72] = {   /* thermometer */
	0x0F, 0x80, 0x00, 0x1F, 0xC0, 0x04, 0x18, 0x60, 0x06, 0x1B, 0x70, 0x1B,
	0x1B, 0x70, 0x0F, 0x1B, 0x60, 0x06, 0x1B, 0x71, 0xF0, 0x1B, 0x73, 0xE0,
	0x1B, 0x67, 0x80, 0x1B, 0x76, 0x00, 0x1B, 0x76, 0x00, 0x1B, 0x66, 0x00,
	0x1B, 0x67, 0x80, 0x33, 0x73, 0xE0, 0x63, 0x31, 0xF0, 0xCF, 0x8C, 0x00,
	0xDF, 0xCC, 0x00, 0xDB, 0xEC, 0x00, 0xDF, 0xEC, 0x00, 0xDF, 0xCC, 0x00,
	0xCF, 0x8C, 0x00, 0x60, 0x30, 0x00, 0x3F, 0xF0, 0x00, 0x1F, 0xE0, 0x00,
};
static const uint8_t ICON_PRESSURE[72] = {   /* pressure: arrows pushing on a surface */
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x18, 0x0C,
	0x30, 0x18, 0x0C, 0x30, 0x18, 0x0C, 0x30, 0x18, 0x0C, 0x30, 0x18, 0x0C,
	0x30, 0x18, 0x0C, 0x30, 0x18, 0x0C, 0xFC, 0x7E, 0x3F, 0x78, 0x3C, 0x1E,
	0x30, 0x18, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
	0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x44, 0x44, 0x44, 0x88, 0x88, 0x88,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
};
static const uint8_t ICON_HUMIDITY[72] = {   /* humidity dial */
	0x00, 0x3C, 0x00, 0x00, 0xFF, 0x00, 0x03, 0x3F, 0xC0, 0x0C, 0x0F, 0xE0,
	0x18, 0x07, 0xF0, 0x20, 0x01, 0xF8, 0x20, 0x00, 0x78, 0x41, 0xDE, 0x7C,
	0x40, 0x58, 0x3C, 0x81, 0xDE, 0x3E, 0x81, 0x02, 0x1E, 0x81, 0xCE, 0x1E,
	0x81, 0xCC, 0x0C, 0x80, 0x00, 0x04, 0x80, 0x90, 0x04, 0x40, 0x20, 0x18,
	0x40, 0x40, 0x18, 0x20, 0x80, 0x20, 0x20, 0x00, 0x20, 0x18, 0x00, 0xC0,
	0x0C, 0x00, 0xC0, 0x03, 0x03, 0x00, 0x00, 0xFC, 0x00, 0x00, 0x00, 0x00,
};
static const uint8_t ICON_ACCEL[72] = {   /* accelerometer: x/y/z axes */
	0x00, 0x60, 0x00, 0x00, 0xF0, 0x00, 0x01, 0xF8, 0x00, 0x03, 0xFC, 0x00,
	0x00, 0x60, 0x00, 0x00, 0x60, 0x00, 0x00, 0x60, 0x00, 0x00, 0x60, 0x00,
	0x00, 0x60, 0x00, 0x00, 0x60, 0x00, 0x00, 0x60, 0x08, 0x00, 0x60, 0x0C,
	0x00, 0x60, 0x0E, 0x00, 0x7F, 0xFF, 0x00, 0x7F, 0xFF, 0x00, 0xC0, 0x0E,
	0x01, 0x80, 0x0C, 0x03, 0x00, 0x08, 0x06, 0x00, 0x00, 0x4C, 0x00, 0x00,
	0x78, 0x00, 0x00, 0x70, 0x00, 0x00, 0x78, 0x00, 0x00, 0x7C, 0x00, 0x00,
};
static const uint8_t ICON_GYRO[72] = {   /* gyroscope: rotation arrow */
	0x00, 0x00, 0x00, 0x01, 0xE3, 0xFC, 0x01, 0xC3, 0xFC, 0x06, 0x03, 0xF0,
	0x06, 0x03, 0xF0, 0x18, 0x03, 0xF0, 0x18, 0x03, 0xF0, 0x60, 0x03, 0x0C,
	0x60, 0x01, 0x0C, 0x60, 0x00, 0x0C, 0x60, 0x00, 0x0C, 0x60, 0x00, 0x0C,
	0x60, 0x00, 0x0C, 0x60, 0x00, 0x0C, 0x60, 0x00, 0x0C, 0x60, 0x00, 0x0C,
	0x18, 0x00, 0x30, 0x18, 0x00, 0x30, 0x06, 0x00, 0xC0, 0x06, 0x00, 0xC0,
	0x01, 0xFF, 0x00, 0x01, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
};
static const uint8_t ICON_MAG[72] = {   /* magnetometer: horseshoe magnet */
	0x00, 0x00, 0x00, 0x3F, 0x00, 0xFC, 0x3F, 0x00, 0xFC, 0x3F, 0x00, 0xFC,
	0x3F, 0x00, 0xFC, 0x3F, 0x00, 0xFC, 0x00, 0x00, 0x00, 0x33, 0x00, 0xCC,
	0x33, 0x00, 0xCC, 0x33, 0x00, 0xCC, 0x33, 0x00, 0xCC, 0x33, 0x00, 0xCC,
	0x31, 0x81, 0x8C, 0x31, 0x81, 0x8C, 0x18, 0xE7, 0x18, 0x18, 0x7E, 0x18,
	0x0C, 0x18, 0x30, 0x0E, 0x00, 0x70, 0x07, 0x81, 0xE0, 0x01, 0xFF, 0x80,
	0x00, 0x7E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
};
static const struct { const char *abbr, *unit; const uint8_t *icon; } SCR[NSENS] = {
	[S_T] = { "TEMP", GFX_DEG "C",  ICON_TEMP     },
	[S_P] = { "PRES", "hPa",        ICON_PRESSURE },
	[S_H] = { "HUMI", "%RH",        ICON_HUMIDITY },
	[S_A] = { "ACCL", "m/s" GFX_SQ, ICON_ACCEL    },
	[S_G] = { "GYRO", "dps",        ICON_GYRO     },
	[S_M] = { "MAGN", "gauss",      ICON_MAG      },
};

/* ---- state: button / laser events wait in a queue and end up in the status bar ---- */
enum { EV_BUTTON = 1, EV_CHARGED, EV_FIRED };
typedef struct { uint8_t type; int8_t val; } Item;

static Item     evq[16];
static uint8_t  ev_head, ev_tail;
static uint8_t  started, force_redraw, page, last_attacked, last_viol, last_led;
static uint32_t t_cost;                 /* ms the last redraw took: the next one waits at least 3x as long */
static UI_Mode  last_mode;
static int      energy_known;
static uint16_t shots;
static uint32_t t_frame;
static struct { uint8_t valid, count; uint32_t t; char l2[20]; } press;   /* status-bar message: "<count>x <l2>" */

/* ---- small helpers ---- */
static char *put_energy(char *p, int e) { return put_str(put_uint(p, (uint32_t)(e < 0 ? 0 : e)), "/10"); }

static int blink(uint32_t now, uint32_t half_period) { return ((now / half_period) & 1u) == 0; }

static int press_fresh(uint32_t now) { return press.valid && now - press.t < STATUS_MS; }

/* put a message in the status bar (count = presses to show as "2x ", 0 = none) and redraw */
static void set_status(const char *text, int count)
{
	press.valid = 1;
	press.count = (uint8_t)count;
	press.t     = HAL_GetTick();
	put_str(press.l2, text);
	force_redraw = 1;
}

/* the most decimals (up to 2) that still fit in maxw pixels */
static void fit_value(char *buf, float v, int maxw, int size)
{
	for (int d = 2; d >= 0; d--) {
		put_fixed(buf, v, d);
		if (gfx_text_w(buf, size) <= maxw) return;
	}
}

/* size-2 angle with a small degree sign, right edge at xr */
static void draw_angle(int xr, int y, float deg)
{
	char t[12];
	int v = (int)(deg + (deg >= 0 ? 0.5f : -0.5f));
	put_uint(put_str(t, v > 0 ? "+" : v < 0 ? "-" : ""), (uint32_t)abs(v));
	gfx_text_right(xr - 6, y, t, 2, W);
	gfx_text(xr - 4, y, GFX_DEG, 1, W);
}

/* 0 = in range, 1 = above, 2 = below (same test as report_telemetry) */
static uint8_t sensor_state(const UI_State *s, int i)
{
	if (!s->sensors_valid) return 0;
	return s->sensor[i] > SENS[i].hi ? 1 : s->sensor[i] < SENS[i].lo ? 2 : 0;
}

/* ---- events from the firmware ---- */
static void push(uint8_t type, int val)
{
	uint8_t n = (uint8_t)((ev_head + 1) & 15u);
	if (n == ev_tail) return;               /* full: drop it, the next redraw shows the true state */
	evq[ev_head].type = type;
	evq[ev_head].val  = (int8_t)val;
	ev_head = n;
}

void UI_Button(int presses) { if (presses >= 1 && presses <= 3) push(EV_BUTTON, presses); }
void UI_Charged(int e)      { push(EV_CHARGED, e); }
void UI_Fired(int e)        { push(EV_FIRED, e); }
void UI_NextPage(void)      { page = (uint8_t)((page + 1) % NPAGES); force_redraw = 1; }
void UI_Recentre(void)      { set_status("RECENTRING", 0); }

static void events_process(void)
{
	for (; ev_tail != ev_head; ev_tail = (uint8_t)((ev_tail + 1) & 15u)) {
		Item e = evq[ev_tail];
		char t[20];

		if (e.type == EV_BUTTON) {          /* what the press does, judged from the last frame */
			const char *r;
			if (last_mode == UI_STANDBY) r = e.val == 2 ? "-> BATTLE" : "IGNORED";
			else if (last_attacked)      r = e.val >= 2 ? "RESCUE!" : "IGNORED";
			else if (e.val == 1)         r = "+3 CHARGE";
			else if (e.val == 2)         r = "-> STANDBY";
			else                         r = last_mode == UI_AIM ? "-> AUTO FIRE" : "-> AIM MODE";
			set_status(r, e.val);
		} else if (e.type == EV_CHARGED) {   /* "1x +3 -> 7/10" */
			int d = e.val - energy_known;
			put_energy(d > 0 ? put_str(put_uint(put_str(t, "+"), (uint32_t)d), " -> ") : put_str(t, "FULL "), e.val);
			set_status(t, press_fresh(HAL_GetTick()) ? press.count : 0);
		} else {                             /* EV_FIRED */
			shots++;
			put_energy(put_str(t, "FIRED! "), e.val);
			set_status(t, 0);
		}
		if (e.type != EV_BUTTON) energy_known = e.val;
	}
}

/* ---- header ---- */
static void draw_header(const UI_State *s, int alarm, uint32_t now)
{
	static const struct { const char *t; uint8_t x, w; } TABS[3] = { { "Standby", 0, 45 }, { "Battle", 46, 39 }, { "Aim", 86, 21 } };
	const int cx = 119;

	for (int i = 0; i < 3; i++) {
		if (i == (int)s->mode) gfx_fill_round(TABS[i].x, 0, TABS[i].w, 11, W);
		gfx_text(TABS[i].x + 2, 2, TABS[i].t, 1, i == (int)s->mode ? B : W);
	}
	if (s->mode == UI_AIM) gfx_round_rect(TABS[1].x, 0, TABS[1].w, 11, W);   /* AIM is part of BATTLE */

	/* 13x11 warning triangle with "!": outline = fine, solid = alarm (blinks when attacked) */
	if (alarm && (!s->attacked || blink(now, 250))) {
		for (int y = 0; y < 11; y++) {
			int half = (y * 6 + 5) / 10;
			gfx_hline(cx - half, y, 2 * half + 1, W);
		}
		gfx_vline(cx, 4, 3, B);
		gfx_pixel(cx, 8, B);
	} else {
		gfx_line(cx, 0, cx - 6, 10, W);
		gfx_line(cx, 0, cx + 6, 10, W);
		gfx_hline(cx - 6, 10, 13, W);
		gfx_vline(cx, 4, 3, W);
		gfx_pixel(cx, 8, W);
	}
	gfx_hline(0, 12, 128, W);
}

/* status bar, bottom row: the latest result ("2x -> STANDBY", "FIRED! 2/10", ...) in white, or
 * the controls ('hint') when there is none */
static void draw_status(const char *hint, uint32_t now)
{
	char t[28];

	if (press_fresh(now)) {
		put_str(press.count ? put_str(put_uint(t, press.count), "x ") : t, press.l2);
		gfx_fill_round(0, 54, 128, 10, W);
		gfx_text_center(64, 56, t, 1, B);
	} else if (hint[0]) {
		gfx_round_rect(0, 54, 128, 10, W);
		gfx_text_center(64, 56, hint, 1, W);
	}
}

/* ---- STANDBY ---- */
static int gauge_x(float v, float mn, float mx, int x, int w)
{
	float f = (v - mn) / (mx - mn);
	return x + (int)((f < 0.0f ? 0.0f : f > 1.0f ? 1.0f : f) * (float)(w - 1) + 0.5f);
}

/* bar with hatched out-of-range zones, threshold ticks and a marker at the reading.
 * big = 1: the sensor cards (frame + hatching), 0: the summary page (thin line) */
static void draw_gauge(const UI_State *s, int i, int x, int y, int w, int h, int big, uint8_t fg)
{
	float span = SENS[i].hi - SENS[i].lo;
	if (span <= 0.0f) span = 1.0f;
	float mn = SENS[i].lo - 0.25f * span, mx = SENS[i].hi + 0.25f * span;
	if (i != S_T && mn < 0.0f) mn = 0.0f;                    /* magnitudes are never negative */

	int has_lo = SENS[i].lo > mn;
	int xl = gauge_x(SENS[i].lo, mn, mx, x, w), xh = gauge_x(SENS[i].hi, mn, mx, x, w);
	int tick = big ? 2 : 0;

	if (big) {
		gfx_rect(x, y, w, h, fg);
		if (has_lo && xl - x - 1 > 0) gfx_hatch(x + 1, y + 1, xl - x - 1, h - 2, fg);
		if (x + w - 2 - xh > 0)       gfx_hatch(xh + 1, y + 1, x + w - 2 - xh, h - 2, fg);
	} else {
		gfx_hline(x, y + h / 2, w, fg);
	}
	if (has_lo) gfx_vline(xl, y - tick, h + 1 + 3 * tick / 2, fg);
	gfx_vline(xh, y - tick, h + 1 + 3 * tick / 2, fg);

	if (s->sensors_valid) {                                    /* marker: black outline, fg core */
		int xv = gauge_x(s->sensor[i], mn, mx, x, w);
		gfx_fill(xv - 2, y - 2, 5, big ? h + 4 : h + 5, fg == W ? B : W);
		gfx_fill(xv - 1, y - 2, 3, big ? h + 4 : h + 5, fg);
	}
}

static void draw_card(const UI_State *s, int i, int y0, uint8_t bad)
{
	char v[16];

	if (bad) gfx_fill_round(0, y0, 28, 24, W);                /* out of range: only the icon goes white */
	gfx_bitmap(2, y0, SCR[i].icon, 24, 24, bad ? B : W);
	if (s->sensors_valid) fit_value(v, s->sensor[i], 89 - gfx_text_w(SCR[i].unit, 1), 2);
	else                  put_str(v, "--.--");
	gfx_text(gfx_text(30, y0 + 1, v, 2, W) + 1, y0 + 8, SCR[i].unit, 1, W);
	draw_gauge(s, i, 30, y0 + 19, 90, 4, 1, W);
}

static void draw_summary(const UI_State *s, const uint8_t *st)
{
	for (int i = 0; i < NSENS; i++) {
		int y = CY + i * 8, vr = 119 - gfx_text_w(SCR[i].unit, 1) - 3;
		char v[16];

		if (st[i]) gfx_fill(0, y, 27, 8, W);                  /* out of range: only the label goes white */
		gfx_text(2, y + 1, SCR[i].abbr, 1, st[i] ? B : W);
		draw_gauge(s, i, 28, y + 2, 30, 3, 0, W);
		if (s->sensors_valid) fit_value(v, s->sensor[i], vr - 62, 1);
		else                  put_str(v, "--.--");
		gfx_text_right(vr, y + 1, v, 1, W);
		gfx_text_right(119, y + 1, SCR[i].unit, 1, W);
	}
}

static void draw_standby(const UI_State *s, const uint8_t *st, uint8_t viol, uint32_t now)
{
	if (page < 3) {
		draw_card(s, page * 2,     CY,          st[page * 2]);
		draw_card(s, page * 2 + 1, CY + CARD_H, st[page * 2 + 1]);
	} else {
		draw_summary(s, st);
	}

	/* page pips on the right edge; a page hiding an out-of-range sensor blinks */
	for (int p = 0; p < NPAGES; p++) {
		int y = CY + 12 + p * 7;
		if (p == page || (p < 3 && (viol & (3u << (2 * p))) && blink(now, 250))) gfx_fill(123, y, 4, 4, W);
		else                                                                   gfx_rect(123, y, 4, 4, W);
	}

	if (press_fresh(now)) draw_status("", now);              /* "1x IGNORED", "2x -> BATTLE" */
}

/* ---- BATTLE ---- */
static void draw_led(int xr, int y, const UI_State *s, const char *rate)
{
	char t[12];
	put_str(put_str(t, "LED "), rate);
	gfx_text_right(xr - 10, y, t, 1, W);
	if (s->led_on) gfx_fill_circle(xr - 3, y + 3, 3, W);
	else           gfx_circle(xr - 3, y + 3, 3, W);
}

/* 10 charge cells, w x h, 'pitch' apart; 'underline' marks the empty cells */
static void draw_cells(int x, int y, int w, int h, int pitch, int underline, int energy)
{
	for (int k = 0; k < MAX_ENERGY; k++, x += pitch) {
		if (k < energy)     gfx_fill(x, y, w, h, W);
		else if (underline) gfx_hline(x, y + h - 1, w, W);
	}
}

static void draw_battle(const UI_State *s, uint32_t now)
{
	char t[12];

	/* battery: 2-pixel shell, nub, 10 cells; the fire point is marked between cell 5 and 6 */
	gfx_round_rect(2, CY, 116, 17, W);
	gfx_round_rect(3, CY + 1, 114, 15, W);
	gfx_fill(118, CY + 4, 4, 8, W);
	draw_cells(6, CY + 3, 9, 11, 11, 1, s->energy);
	gfx_pixel(60, CY + 17, W);
	gfx_hline(59, CY + 18, 3, W);

	/* charge, shots, LED mirror */
	put_energy(t, s->energy);
	gfx_text(2, CY + 22, t, 2, W);
	put_uint(put_str(t, "SHOTS "), shots);
	gfx_text_right(126, CY + 22, t, 1, W);
	draw_led(126, CY + 32, s, "");

	draw_status("1x +3 2x STBY 3x AIM", now);
}

/* ---- MANUAL AIM ---- */
static int map_lin(float v, float a, float b, int pa, int pb)
{
	if (b == a) return (pa + pb) / 2;
	float f = (v - a) / (b - a);
	f = f < 0.0f ? 0.0f : f > 1.0f ? 1.0f : f;
	return pa + (int)(f * (float)(pb - pa) + (pb >= pa ? 0.5f : -0.5f));
}

static void draw_aim(const UI_State *s, uint32_t now)
{
	char t[12];

	/* 50x50 aim window: where the turret points inside its calibrated range */
	gfx_round_rect(0, CY, 50, 50, W);
	gfx_dots_h(2, map_lin(0.0f, s->tilt_up, s->tilt_down, CY + 7, CY + 42), 46, 3, W);   /* centre cross */
	gfx_dots_v(map_lin(0.0f, s->pan_left, s->pan_right, 7, 42), CY + 2, 46, 3, W);
	int px = map_lin(s->pan_deg,  s->pan_left, s->pan_right, 7, 42);
	int py = map_lin(s->tilt_deg, s->tilt_up,  s->tilt_down, CY + 7, CY + 42);

	gfx_circle(px, py, 3, W);
	if (s->armed) {                                          /* reticle + stick direction */
		gfx_hline(px - 7, py, 3, W); gfx_hline(px + 5, py, 3, W);
		gfx_vline(px, py - 7, 3, W); gfx_vline(px, py + 5, 3, W);
		gfx_pixel(px, py, W);
		if (s->joy_x || s->joy_y) gfx_line(px, py, px + s->joy_x * 10 / 100, py - s->joy_y * 10 / 100, W);
	} else {
		gfx_fill_round(6, CY + 38, 38, 10, W);
		gfx_text(8, CY + 39, "LOCKED", 1, B);
	}

	gfx_text(54, CY + 4, "PAN", 1, W);
	draw_angle(126, CY, s->pan_deg);
	gfx_text(54, CY + 20, "TILT", 1, W);
	draw_angle(126, CY + 16, s->tilt_deg);

	/* status line: the latest result, otherwise the charge */
	if (press_fresh(now)) {
		gfx_text_center(90, 46, press.l2, 1, W);
	} else {
		gfx_text(54, 46, "LASER", 1, W);
		put_energy(t, s->energy);
		gfx_text_right(126, 46, t, 1, W);
	}

	/* laser bar, with a tick at the 5/10 needed to aim and fire */
	gfx_round_rect(54, 55, 73, 9, W);
	draw_cells(57, 57, 5, 5, 7, 0, s->energy);
	gfx_fill(90, 54, 2, 10, W);
}

/* ---- ATTACKED ("The Last of EE2028") ---- */
static void draw_attacked(const UI_State *s, uint32_t now)
{
	char t[24];
	uint32_t ms = s->rescue_ms_left > RESCUE_MS ? RESCUE_MS : s->rescue_ms_left;
	uint32_t tenths = (ms + 99u) / 100u;
	int on = blink(now, 250);

	if (on) gfx_fill_round(0, CY, 128, 17, W);
	else    gfx_round_rect(0, CY, 128, 17, W);
	gfx_text_center(64, CY + 1, "ATTACKED!", 2, on ? B : W);

	char *p = put_uint(t, tenths / 10u);                     /* countdown in tenths: "7.4s" */
	if (tenths < 100u) put_uint(put_str(p, "."), tenths % 10u);
	gfx_text(gfx_text(2, 33, t, 3, W) + 1, 40, "s", 2, W);

	gfx_text_right(126, 33, "2x PB", 1, W);
	gfx_text_right(126, 42, "= RESCUE", 1, W);
	if (press_fresh(now)) {
		put_str(put_str(put_uint(t, press.count), "x "), press.l2);
		gfx_text_right(126, 51, t, 1, W);
	} else {
		draw_led(126, 51, s, "2Hz");
	}

	gfx_rect(0, 59, 128, 5, W);
	gfx_fill(2, 60, (int)(124u * ms / RESCUE_MS), 3, W);
}

/* ---- public ---- */
int UI_Init(void)
{
	oled_init();
	gfx_clear();                            /* splash while the joystick centre is measured */
	gfx_rect(0, 0, 128, OLED_H, W);
	gfx_text_center(64, 5, "EE2028", 3, W);
	gfx_text_center(64, 29, "ATTACK DRONE", 1, W);
	gfx_hline(24, 39, 80, W);
	gfx_text_center(64, 43, "KEEP JOYSTICK", 1, W);
	gfx_text_center(64, 52, "CENTRED...", 1, W);
	oled_flush_all();
	return oled_present ? oled_addr : 0;
}

void UI_Task(const UI_State *s)
{
	uint32_t now = HAL_GetTick();
	uint8_t st[NSENS], viol = 0;

	if (!started) {
		started = 1;
		last_mode = s->mode;
		last_attacked = s->attacked;
		last_led = s->led_on;
		energy_known = s->energy;
		force_redraw = 1;
	}
	events_process();

	if (s->mode != last_mode || s->attacked != last_attacked || s->led_on != last_led) force_redraw = 1;
	if (last_attacked && !s->attacked && s->mode != UI_STANDBY) set_status("RESCUED!", 0);
	if (s->attacked && !last_attacked) press.valid = 0;      /* only show presses made while attacked */
	if (press.valid && now - press.t >= STATUS_MS) { press.valid = 0; force_redraw = 1; }   /* message expires */
	if (s->energy != energy_known && ev_head == ev_tail) energy_known = s->energy;   /* changed without an event: follow */

	for (int i = 0; i < NSENS; i++)
		if ((st[i] = sensor_state(s, i))) viol |= (uint8_t)(1u << i);
	if ((viol & ~last_viol) && s->mode == UI_STANDBY && page < 3) {   /* jump to a sensor that just went bad */
		for (int i = 0; i < NSENS; i++)
			if ((viol & ~last_viol) & (1u << i)) { page = (uint8_t)(i / 2); break; }
		force_redraw = 1;
	}
	last_viol = viol;
	last_mode = s->mode;
	last_attacked = s->attacked;
	last_led = s->led_on;

	uint32_t gap = s->attacked ? ATTACK_FRAME_MS : s->mode == UI_AIM ? AIM_FRAME_MS : IDLE_FRAME_MS;
	if (force_redraw || now - t_frame >= (gap > 3 * t_cost ? gap : 3 * t_cost)) {
		force_redraw = 0;
		t_frame = now;

		gfx_clear();
		draw_header(s, (s->mode == UI_STANDBY && viol) || s->attacked, now);
		if (s->mode == UI_STANDBY)     draw_standby(s, st, viol, now);
		else if (s->attacked)          draw_attacked(s, now);
		else if (s->mode == UI_BATTLE) draw_battle(s, now);
		else                           draw_aim(s, now);
		oled_commit();
		t_cost = HAL_GetTick() - now;
	}
	oled_flush();
}

void UI_ShowTerminated(void)
{
	gfx_clear();
	gfx_rect(0, 0, 128, OLED_H, W);
	gfx_text_center(64, 3, "SIGNAL", 2, W);
	gfx_text_center(64, 18, "LOST", 2, W);
	gfx_hline(16, 34, 96, W);
	gfx_text_center(64, 37, "NO RESCUE IN 10s", 1, W);
	gfx_text_center(64, 46, "DRONE TERMINATED", 1, W);
	gfx_text_center(64, 55, "COMMS CUT - LAB SAFE", 1, W);
	oled_flush_all();
}

void UI_Status(const char *text) { set_status(text, 0); }

#endif /* ENH_TELE_OLED */

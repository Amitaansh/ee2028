/******************************************************************************
 * oled_bus.c - OLED transport: hardware I2C first, software I2C as fallback
 ******************************************************************************/
#include "oled_bus.h"
#include "soft_i2c.h"
#include "app_config.h"
#include "main.h"
#include <stdio.h>
#include <string.h>

static I2C_HandleTypeDef hi2c;
static uint8_t addr7;                         /* 0 = no display */
static uint8_t use_soft;
static SoftI2C sbus;
static char where[64];
static char diag[256];

/* ---------------- hardware I2C ---------------- */
/* TIMINGR from the kernel clock: tLOW / tHIGH with margin for Fm (400k) or Sm (100k) */
static uint32_t i2c_timing(uint32_t fclk, uint32_t khz)
{
	uint32_t fast = (khz >= 400 && fclk >= 10000000UL);
	uint32_t tlow = fast ? 1400 : 5000, thigh = fast ? 700 : 4200;
	uint32_t tsetup = fast ? 500 : 1250, thold = fast ? 300 : 500;
	uint32_t presc = (fclk + 7999999UL) / 8000000UL;          /* aim for ~125 ns ticks */
	if (presc < 1) presc = 1;
	if (presc > 16) presc = 16;
	uint32_t tp = (uint32_t)(1000000000ULL * presc / fclk);    /* ns per tick */
	uint32_t scll = (tlow + tp - 1) / tp - 1, sclh = (thigh + tp - 1) / tp - 1;
	uint32_t scldel = tsetup / tp, sdadel = thold / tp;
	if (scll > 255) scll = 255;
	if (sclh > 255) sclh = 255;
	if (scldel > 15) scldel = 15;
	if (sdadel > 15) sdadel = 15;
	return ((presc - 1) << 28) | (scldel << 20) | (sdadel << 16) | (sclh << 8) | scll;
}

/* Is something external pulling this line up? (internal pull-DOWN, then read)
 * A connected, powered I2C module has its own pull-ups, so its lines read high. */
static int ext_pullup(GPIO_TypeDef *port, uint16_t pin)
{
	GPIO_InitTypeDef g = {0};
	g.Pin = pin; g.Mode = GPIO_MODE_INPUT; g.Pull = GPIO_PULLDOWN;
	HAL_GPIO_Init(port, &g);
	HAL_Delay(1);
	int hi = HAL_GPIO_ReadPin(port, pin) == GPIO_PIN_SET;
	HAL_GPIO_DeInit(port, pin);
	return hi;
}

static int try_hw(const char *name, I2C_TypeDef *inst, GPIO_TypeDef *port, uint16_t scl, uint16_t sda, uint8_t af)
{
	static const uint32_t khz[2] = { OLED_I2C_KHZ, 100 };
	GPIO_InitTypeDef g = {0};
	int pu_scl = ext_pullup(port, scl), pu_sda = ext_pullup(port, sda);

	g.Pin = scl | sda;
	g.Mode = GPIO_MODE_AF_OD;
	g.Pull = GPIO_PULLUP;                       /* module pull-ups do the real work, these are a backup */
	g.Speed = GPIO_SPEED_FREQ_VERY_HIGH;
	g.Alternate = af;
	HAL_GPIO_Init(port, &g);

	for (int k = 0; k < 2; k++) {
		hi2c.Instance = inst;
		hi2c.Init.Timing = i2c_timing(HAL_RCC_GetPCLK1Freq(), khz[k]);
		hi2c.Init.OwnAddress1 = 0;
		hi2c.Init.AddressingMode = I2C_ADDRESSINGMODE_7BIT;
		hi2c.Init.DualAddressMode = I2C_DUALADDRESS_DISABLE;
		hi2c.Init.OwnAddress2 = 0;
		hi2c.Init.GeneralCallMode = I2C_GENERALCALL_DISABLE;
		hi2c.Init.NoStretchMode = I2C_NOSTRETCH_DISABLE;
		if (HAL_I2C_Init(&hi2c) != HAL_OK) continue;
		HAL_I2CEx_ConfigAnalogFilter(&hi2c, I2C_ANALOGFILTER_ENABLE);
		for (uint8_t a = 0x3C; a <= 0x3D; a++) {
			if (HAL_I2C_IsDeviceReady(&hi2c, (uint16_t)(a << 1), 2, 10) == HAL_OK) {
				addr7 = a;
				sprintf(where, "%s hw I2C @0x%02X %ukHz", name, a, (unsigned)khz[k]);
				return 1;
			}
		}
		HAL_I2C_DeInit(&hi2c);
	}
	HAL_GPIO_DeInit(port, scl | sda);
	sprintf(diag + strlen(diag), "%s: no ACK, module pull-ups SCL %s SDA %s; ", name,
			pu_scl ? "yes" : "no", pu_sda ? "yes" : "no");
	return 0;
}

/* ---------------- software I2C on every other Grove port ---------------- */
typedef struct { const char *name; GPIO_TypeDef *cp; uint16_t c; GPIO_TypeDef *dp; uint16_t d; } Cand;

/* Grove cable: pin 1 (yellow) = first pin of the port, pin 2 (white) = second.
 * Ports D3 and D4 are skipped: they use D4 = PA3, the buzzer. */
static const Cand cands[] = {
	{ "Grove I2C",  GPIOB, GPIO_PIN_8,  GPIOB, GPIO_PIN_9  },   /* D15 / D14 */
	{ "A5/A4",      GPIOC, GPIO_PIN_0,  GPIOC, GPIO_PIN_1  },
	{ "Grove D2",   GPIOD, GPIO_PIN_14, GPIOB, GPIO_PIN_0  },   /* D2 / D3 */
	{ "Grove D5",   GPIOB, GPIO_PIN_4,  GPIOB, GPIO_PIN_1  },   /* D5 / D6 */
	{ "Grove D6",   GPIOB, GPIO_PIN_1,  GPIOA, GPIO_PIN_4  },   /* D6 / D7 */
	{ "Grove D7",   GPIOA, GPIO_PIN_4,  GPIOB, GPIO_PIN_2  },   /* D7 / D8 */
	{ "Grove D8",   GPIOB, GPIO_PIN_2,  GPIOA, GPIO_PIN_15 },   /* D8 / D9 */
	{ "Grove UART", GPIOA, GPIO_PIN_1,  GPIOA, GPIO_PIN_0  },   /* D0 / D1 */
	{ "Grove A0",   GPIOC, GPIO_PIN_5,  GPIOC, GPIO_PIN_4  },   /* A0 / A1 */
	{ "Grove A1",   GPIOC, GPIO_PIN_4,  GPIOC, GPIO_PIN_3  },   /* A1 / A2 */
	{ "Grove A2",   GPIOC, GPIO_PIN_3,  GPIOC, GPIO_PIN_2  },   /* A2 / A3 */
	{ "Grove A3",   GPIOC, GPIO_PIN_2,  GPIOC, GPIO_PIN_1  },   /* A3 / A4 */
};

static int try_soft(void)
{
	char *d = diag + strlen(diag);
	int any = 0;

	for (unsigned i = 0; i < sizeof(cands) / sizeof(cands[0]); i++) {
		const Cand *c = &cands[i];
		/* note every port that has I2C-style pull-ups on it: that's where a module is plugged */
		if (ext_pullup(c->cp, c->c) && ext_pullup(c->dp, c->d)) {
			d += sprintf(d, "%spull-ups on %s", any ? ", " : "", c->name);
			any = 1;
		}
		for (int swap = 0; swap < 2; swap++) {
			SoftI2C b;
			if (!swap) { b.scl_port = c->cp; b.scl_pin = c->c; b.sda_port = c->dp; b.sda_pin = c->d; }
			else       { b.scl_port = c->dp; b.scl_pin = c->d; b.sda_port = c->cp; b.sda_pin = c->c; }
			soft_i2c_init(&b);
			for (uint8_t a = 0x3C; a <= 0x3D; a++) {
				if (soft_i2c_probe(&b, a)) {
					sbus = b; use_soft = 1; addr7 = a;
					sprintf(where, "%s%s sw I2C @0x%02X", c->name, swap ? " (SDA/SCL SWAPPED)" : "", a);
					return 1;
				}
			}
			soft_i2c_release(&b);
		}
	}
	if (!any) sprintf(d, "no module pull-ups on any Grove port (OLED unpowered or unplugged?)");
	return 0;
}

int oled_bus_find(void)
{
	diag[0] = 0; where[0] = 0; addr7 = 0; use_soft = 0;

	__HAL_RCC_GPIOB_CLK_ENABLE();
	__HAL_RCC_I2C1_CLK_ENABLE();
	__HAL_RCC_I2C1_FORCE_RESET();
	__HAL_RCC_I2C1_RELEASE_RESET();
	if (try_hw("I2C1 D15/D14", I2C1, GPIOB, GPIO_PIN_8, GPIO_PIN_9, GPIO_AF4_I2C1)) return 1;

	__HAL_RCC_GPIOC_CLK_ENABLE();
	__HAL_RCC_I2C3_CLK_ENABLE();
	__HAL_RCC_I2C3_FORCE_RESET();
	__HAL_RCC_I2C3_RELEASE_RESET();
	if (try_hw("I2C3 A5/A4", I2C3, GPIOC, GPIO_PIN_0, GPIO_PIN_1, GPIO_AF4_I2C3)) return 1;

	return try_soft();
}

int oled_bus_write(uint8_t control, const uint8_t *data, uint16_t n)
{
	if (!addr7) return 0;
	if (use_soft) return soft_i2c_write(&sbus, addr7, control, data, n);
	return HAL_I2C_Mem_Write(&hi2c, (uint16_t)(addr7 << 1), control, I2C_MEMADD_SIZE_8BIT, (uint8_t *)data, n, 30) == HAL_OK;
}

uint8_t     oled_bus_address(void) { return addr7; }
const char *oled_bus_where(void)   { return where; }
const char *oled_bus_diag(void)    { return diag; }

/******************************************************************************
 * soft_i2c.c - bit-banged I2C (~100 kHz), timed with the DWT cycle counter
 *
 * Open-drain outputs: writing 1 releases the line (the pull-up makes it high),
 * writing 0 pulls it low, exactly like a real I2C peripheral. SCL clock
 * stretching is respected with a timeout.
 ******************************************************************************/
#include "soft_i2c.h"

static uint32_t half_cycles;                  /* CPU cycles per half SCL period */

static void delay_half(void)
{
	uint32_t t0 = DWT->CYCCNT;
	while ((DWT->CYCCNT - t0) < half_cycles) { }
}

static void clk_enable(GPIO_TypeDef *p)
{
	if (p == GPIOA) __HAL_RCC_GPIOA_CLK_ENABLE();
	else if (p == GPIOB) __HAL_RCC_GPIOB_CLK_ENABLE();
	else if (p == GPIOC) __HAL_RCC_GPIOC_CLK_ENABLE();
	else if (p == GPIOD) __HAL_RCC_GPIOD_CLK_ENABLE();
}

#define SCL(b, v) HAL_GPIO_WritePin((b)->scl_port, (b)->scl_pin, (v) ? GPIO_PIN_SET : GPIO_PIN_RESET)
#define SDA(b, v) HAL_GPIO_WritePin((b)->sda_port, (b)->sda_pin, (v) ? GPIO_PIN_SET : GPIO_PIN_RESET)
#define SDA_IN(b) (HAL_GPIO_ReadPin((b)->sda_port, (b)->sda_pin) == GPIO_PIN_SET)
#define SCL_IN(b) (HAL_GPIO_ReadPin((b)->scl_port, (b)->scl_pin) == GPIO_PIN_SET)

void soft_i2c_init(const SoftI2C *b)
{
	GPIO_InitTypeDef g = {0};

	CoreDebug->DEMCR |= CoreDebug_DEMCR_TRCENA_Msk;     /* start the cycle counter */
	DWT->CTRL |= DWT_CTRL_CYCCNTENA_Msk;
	half_cycles = SystemCoreClock / 200000U;            /* 5 us half period = 100 kHz (safe with weak pull-ups) */
	if (half_cycles < 8) half_cycles = 8;

	clk_enable(b->scl_port);
	clk_enable(b->sda_port);
	g.Mode = GPIO_MODE_OUTPUT_OD;
	g.Pull = GPIO_PULLUP;
	g.Speed = GPIO_SPEED_FREQ_LOW;
	g.Pin = b->scl_pin; HAL_GPIO_WritePin(b->scl_port, b->scl_pin, GPIO_PIN_SET); HAL_GPIO_Init(b->scl_port, &g);
	g.Pin = b->sda_pin; HAL_GPIO_WritePin(b->sda_port, b->sda_pin, GPIO_PIN_SET); HAL_GPIO_Init(b->sda_port, &g);
	delay_half();
}

void soft_i2c_release(const SoftI2C *b)
{
	HAL_GPIO_DeInit(b->scl_port, b->scl_pin);
	HAL_GPIO_DeInit(b->sda_port, b->sda_pin);
}

static void scl_high(const SoftI2C *b)
{
	uint32_t t0 = DWT->CYCCNT;
	SCL(b, 1);
	while (!SCL_IN(b) && (DWT->CYCCNT - t0) < half_cycles * 200) { }   /* clock stretching */
}

static void start(const SoftI2C *b)
{
	SDA(b, 1); scl_high(b); delay_half();
	SDA(b, 0); delay_half();
	SCL(b, 0); delay_half();
}

static void stop(const SoftI2C *b)
{
	SDA(b, 0); delay_half();
	scl_high(b); delay_half();
	SDA(b, 1); delay_half();
}

static int write_byte(const SoftI2C *b, uint8_t v)   /* returns 1 on ACK */
{
	for (int i = 7; i >= 0; i--) {
		SDA(b, (v >> i) & 1);
		delay_half();
		scl_high(b); delay_half();
		SCL(b, 0);
	}
	SDA(b, 1);                                       /* release SDA for the ACK bit */
	delay_half();
	scl_high(b); delay_half();
	int ack = !SDA_IN(b);
	SCL(b, 0);
	delay_half();
	return ack;
}

int soft_i2c_probe(const SoftI2C *b, uint8_t addr7)
{
	if (!SDA_IN(b) || !SCL_IN(b)) return 0;          /* a line held low: nothing usable here */
	start(b);
	int ack = write_byte(b, (uint8_t)(addr7 << 1));
	stop(b);
	return ack;
}

int soft_i2c_write(const SoftI2C *b, uint8_t addr7, uint8_t first, const uint8_t *data, uint16_t n)
{
	int ok;
	start(b);
	ok = write_byte(b, (uint8_t)(addr7 << 1)) && write_byte(b, first);
	for (uint16_t i = 0; ok && i < n; i++) ok = write_byte(b, data[i]);
	stop(b);
	return ok;
}

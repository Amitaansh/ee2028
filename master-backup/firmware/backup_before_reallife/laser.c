/******************************************************************************
 * laser.c - KY-008 laser: faint aiming glow + full-brightness shots
 *
 * The KY-008 "S" pin powers the laser diode, so brightness = how much of the
 * time the pin is HIGH. A laser diode does not dim smoothly with voltage (below
 * its threshold it just goes dark), so dimming is done by switching it fully on
 * and off very fast (PWM) and changing the ON fraction (duty cycle):
 *
 *     TIM7 interrupt every 50 us (20 kHz). A counter runs 0..LASER_PWM_STEPS-1
 *     (40 steps -> 2 ms period = 500 Hz, far above visible flicker).
 *     GLOW: pin HIGH while counter < glow_steps      (e.g. 10 % = 4 of 40)
 *     FULL: pin HIGH always                          (shot, E,LASER test)
 *     DARK: pin LOW always                           (attacked, flicker gaps)
 *
 * PD2 is not connected to any timer output channel, which is why a timer
 * INTERRUPT switches the pin instead of hardware PWM. The ISR is a few
 * instructions (~1.5 % CPU at 80 MHz) and runs at the lowest priority, so the
 * UART receive interrupt always goes first.
 *
 * Shot pattern (like the buzzer): on 40, off 40, on 40, off 40, on LASER_BEAM_MS.
 * Safety: full brightness is cut after LASER_MAX_ON_MS without a break.
 ******************************************************************************/
#include "laser.h"
#include "app_config.h"
#include "main.h"

#define MAX_STEPS 6
enum { M_DARK = 0, M_GLOW = 1, M_FULL = 2 };

static uint16_t seq[MAX_STEPS];
static uint8_t  seq_len, seq_idx, seq_active, glow_on, is_full;
static uint32_t seq_t0, full_since;

static volatile uint8_t mode = M_DARK;          /* read by the ISR */
static volatile uint8_t glow_steps;              /* ON steps out of LASER_PWM_STEPS */
static uint8_t  pwm_phase;

#define PIN_ON()  (LASER_PORT->BSRR = LASER_ACTIVE_HIGH ? (uint32_t)LASER_PIN : (uint32_t)LASER_PIN << 16)
#define PIN_OFF() (LASER_PORT->BSRR = LASER_ACTIVE_HIGH ? (uint32_t)LASER_PIN << 16 : (uint32_t)LASER_PIN)

#if ENH_LASER
void TIM7_IRQHandler(void)
{
	TIM7->SR = 0;                                    /* clear the update flag */
	if (++pwm_phase >= LASER_PWM_STEPS) pwm_phase = 0;
	uint8_t m = mode;
	if (m == M_FULL || (m == M_GLOW && pwm_phase < glow_steps)) PIN_ON();
	else PIN_OFF();
}
#endif

/* what the pin should do when no shot is playing */
static uint8_t rest_mode(void) { return (glow_on && glow_steps) ? M_GLOW : M_DARK; }

static void set_mode(uint8_t m)
{
	if (m == M_FULL && !is_full) full_since = HAL_GetTick();
	is_full = (m == M_FULL);
	mode = m;
#if ENH_LASER
	if (m == M_FULL) PIN_ON();                      /* react at once, don't wait for the ISR */
	else if (m == M_DARK) PIN_OFF();
#endif
}

void laser_set_glow_pct(int pct)
{
	if (pct < 0) pct = 0;
	if (pct > 100) pct = 100;
	glow_steps = (uint8_t)((pct * LASER_PWM_STEPS + 50) / 100);
	if (pct > 0 && glow_steps == 0) glow_steps = 1;  /* smallest visible step */
	if (!seq_active) set_mode(rest_mode());
}

int laser_glow_pct(void) { return (glow_steps * 100 + LASER_PWM_STEPS / 2) / LASER_PWM_STEPS; }

void laser_init(void)
{
#if ENH_LASER
	GPIO_InitTypeDef g = {0};
	LASER_CLK_ENABLE();
	PIN_OFF();                                       /* OFF level first, then make it an output */
	g.Pin = LASER_PIN;
	g.Mode = GPIO_MODE_OUTPUT_PP;
	g.Pull = GPIO_NOPULL;
	g.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LASER_PORT, &g);

	/* TIM7 (basic timer, APB1): 1 MHz count, update interrupt at LASER_PWM_TICK_HZ.
	   At the 4 MHz fallback clock the interrupt rate drops 5x to keep the CPU free. */
	uint32_t tclk = HAL_RCC_GetPCLK1Freq();
	if (RCC->CFGR & RCC_CFGR_PPRE1_2) tclk *= 2;     /* APB1 prescaler > 1: timer clock is x2 */
	uint32_t tick_hz = (HAL_RCC_GetSysClockFreq() >= 40000000UL) ? LASER_PWM_TICK_HZ : LASER_PWM_TICK_HZ / 5;
	__HAL_RCC_TIM7_CLK_ENABLE();
	TIM7->CR1 = 0;
	TIM7->PSC = (uint16_t)(tclk / 1000000UL - 1);    /* 1 us per count */
	TIM7->ARR = (uint16_t)(1000000UL / tick_hz - 1);
	TIM7->EGR = TIM_EGR_UG;                          /* load PSC now */
	TIM7->SR = 0;
	TIM7->DIER = TIM_DIER_UIE;
	HAL_NVIC_SetPriority(TIM7_IRQn, 15, 0);          /* lowest: UART RX (priority 5) always wins */
	HAL_NVIC_EnableIRQ(TIM7_IRQn);
	TIM7->CR1 = TIM_CR1_CEN;
#endif
	seq_active = 0;
	glow_on = 0;
	laser_set_glow_pct(LASER_IDLE_PCT);
	set_mode(M_DARK);
}

static void start(const uint16_t *ms, uint8_t n)
{
	if (n > MAX_STEPS) n = MAX_STEPS;
	for (uint8_t i = 0; i < n; i++) seq[i] = ms[i];
	seq_len = n;
	seq_idx = 0;
	seq_t0 = HAL_GetTick();
	seq_active = (n > 0);
	set_mode(seq_active ? M_FULL : rest_mode());
}

void laser_shot(void)
{
	const uint16_t shot[] = { 40, 40, 40, 40, LASER_BEAM_MS };
	start(shot, 5);
}

void laser_test(uint16_t ms) { start(&ms, 1); }

void laser_cancel(void)
{
	seq_active = 0;
	set_mode(rest_mode());
}

void laser_glow(int on)
{
	if (glow_on == (uint8_t)(on != 0)) return;
	glow_on = (uint8_t)(on != 0);
	if (!seq_active) set_mode(rest_mode());
}

void laser_kill(void)
{
	seq_active = 0;
	glow_on = 0;
	set_mode(M_DARK);
#if ENH_LASER
	HAL_NVIC_DisableIRQ(TIM7_IRQn);
	TIM7->CR1 = 0;
	PIN_OFF();
#endif
}

int laser_is_on(void) { return is_full; }

void laser_update(uint32_t now)
{
	if (seq_active && now - seq_t0 >= seq[seq_idx]) {
		seq_t0 = now;
		seq_idx++;
		if (seq_idx >= seq_len) { seq_active = 0; set_mode(rest_mode()); }
		else set_mode((seq_idx & 1) == 0 ? M_FULL : M_DARK);   /* even = full, odd = dark gap */
	}
	if (is_full && now - full_since >= LASER_MAX_ON_MS) laser_cancel();   /* safety cut-off */
}

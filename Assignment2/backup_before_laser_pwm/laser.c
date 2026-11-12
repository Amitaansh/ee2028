/******************************************************************************
 * laser.c - laser module state machine driven by HAL_GetTick(), never HAL_Delay
 *
 * KY-008: the S pin powers the laser diode, so pin HIGH (LASER_ACTIVE_HIGH 1) = beam on.
 * A shot is a pattern of on/off steps like the buzzer:
 *     on 40, off 40, on 40, off 40, on LASER_BEAM_MS        ("pew-pew, beam")
 * Safety: whatever happens, the beam is cut after LASER_MAX_ON_MS of
 * continuous on-time, and laser_off() is called on every mode change,
 * attack and termination.
 ******************************************************************************/
#include "laser.h"
#include "app_config.h"
#include "main.h"

#define MAX_STEPS 6

static uint16_t seq[MAX_STEPS];
static uint8_t  seq_len, seq_idx, seq_active, is_on;
static uint32_t seq_t0, on_since;

static void pin(int on)
{
#if ENH_LASER
	int level = LASER_ACTIVE_HIGH ? on : !on;
	HAL_GPIO_WritePin(LASER_PORT, LASER_PIN, level ? GPIO_PIN_SET : GPIO_PIN_RESET);
	if (on && !is_on) on_since = HAL_GetTick();
	is_on = (uint8_t)on;
#else
	(void)on;
#endif
}

void laser_init(void)
{
#if ENH_LASER
	GPIO_InitTypeDef g = {0};
	LASER_CLK_ENABLE();
	/* set the OFF level in the output register before the pin becomes an output,
	   so the beam never blinks while the pin is being configured */
	HAL_GPIO_WritePin(LASER_PORT, LASER_PIN, LASER_ACTIVE_HIGH ? GPIO_PIN_RESET : GPIO_PIN_SET);
	g.Pin = LASER_PIN;
	g.Mode = GPIO_MODE_OUTPUT_PP;
	g.Pull = GPIO_NOPULL;
	g.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(LASER_PORT, &g);
#endif
	seq_active = 0;
	pin(0);
}

static void start(const uint16_t *ms, uint8_t n)
{
	if (n > MAX_STEPS) n = MAX_STEPS;
	for (uint8_t i = 0; i < n; i++) seq[i] = ms[i];
	seq_len = n;
	seq_idx = 0;
	seq_t0 = HAL_GetTick();
	seq_active = (n > 0);
	pin(seq_active);
}

void laser_shot(void)
{
	const uint16_t shot[] = { 40, 40, 40, 40, LASER_BEAM_MS };
	start(shot, 5);
}

void laser_test(uint16_t ms)
{
	start(&ms, 1);
}

void laser_off(void)
{
	seq_active = 0;
	pin(0);
}

int laser_is_on(void) { return is_on; }

void laser_update(uint32_t now)
{
	if (seq_active && now - seq_t0 >= seq[seq_idx]) {
		seq_t0 = now;
		seq_idx++;
		if (seq_idx >= seq_len) { seq_active = 0; pin(0); }
		else pin((seq_idx & 1) == 0);             /* even steps = on, odd steps = off */
	}
	if (is_on && now - on_since >= LASER_MAX_ON_MS) laser_off();   /* safety cut-off */
}

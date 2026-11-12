/******************************************************************************
 * buzzer.c - buzzer state machine driven by HAL_GetTick(), never HAL_Delay
 * (except the single long tone at termination, after which nothing else runs).
 *
 * One-shot patterns (beeps, chirps) play over the attack alarm; the alarm
 * resumes when the pattern ends.
 ******************************************************************************/
#include "buzzer.h"
#include "app_config.h"
#include "main.h"

#define MAX_STEPS 8

static uint16_t seq[MAX_STEPS];
static uint8_t  seq_len, seq_idx, seq_active;
static uint32_t seq_t0;

static uint8_t  alarm_on;
static uint16_t alarm_period = 500, alarm_on_ms = 120;
static uint32_t alarm_t0;

static void pin(int on)
{
#if ENH_BUZZER
	HAL_GPIO_WritePin(BUZZER_PORT, BUZZER_PIN, on ? GPIO_PIN_SET : GPIO_PIN_RESET);
#else
	(void)on;
#endif
}

void buzzer_init(void)
{
#if ENH_BUZZER
	GPIO_InitTypeDef g = {0};
	BUZZER_CLK_ENABLE();
	g.Pin = BUZZER_PIN;
	g.Mode = GPIO_MODE_OUTPUT_PP;
	g.Pull = GPIO_NOPULL;
	g.Speed = GPIO_SPEED_FREQ_LOW;
	HAL_GPIO_Init(BUZZER_PORT, &g);
#endif
	pin(0);
}

void buzzer_pattern(const uint16_t *ms, uint8_t n)
{
	if (n > MAX_STEPS) n = MAX_STEPS;
	for (uint8_t i = 0; i < n; i++) seq[i] = ms[i];
	seq_len = n;
	seq_idx = 0;
	seq_t0 = HAL_GetTick();
	seq_active = (n > 0);
	pin(seq_active);
}

void buzzer_beep(uint16_t on_ms) { buzzer_pattern(&on_ms, 1); }

void buzzer_alarm(int on)
{
	alarm_on = (uint8_t)on;
	alarm_t0 = HAL_GetTick();
	if (!on && !seq_active) pin(0);
}

void buzzer_alarm_seconds_left(int secs)
{
	if (secs <= 1)      { alarm_period = 125; alarm_on_ms = 60;  }   /* 8 Hz */
	else if (secs <= 3) { alarm_period = 250; alarm_on_ms = 90;  }   /* 4 Hz */
	else                { alarm_period = 500; alarm_on_ms = 120; }   /* 2 Hz, same rate as the LED */
}

void buzzer_off(void)
{
	seq_active = 0;
	alarm_on = 0;
	pin(0);
}

void buzzer_update(uint32_t now)
{
	if (seq_active) {
		if (now - seq_t0 >= seq[seq_idx]) {
			seq_t0 = now;
			seq_idx++;
			if (seq_idx >= seq_len) { seq_active = 0; pin(0); }
			else pin((seq_idx & 1) == 0);         /* even steps = on, odd steps = off */
		}
		return;
	}
	if (alarm_on) pin(((now - alarm_t0) % alarm_period) < alarm_on_ms);
}

void buzzer_blocking_tone(uint16_t ms)
{
	pin(1);
	HAL_Delay(ms);
	pin(0);
}

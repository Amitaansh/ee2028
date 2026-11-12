/******************************************************************************
 * tof.c - "zombie hand" grab detector
 *
 * Raw VL53L0X samples (~30 Hz) are noisy: an odd sample can jump to a few cm
 * with nothing there, and a hand waved over the board is in the near zone for
 * only 0.1-0.4 s. So a grab has to get through four checks:
 *
 *   1. valid    : samples the sensor flags as bad count as "no target" (vl53l0x.c)
 *   2. median   : median of the last TOF_MEDIAN samples, so one spike can't move it
 *   3. arm      : filtered range further than TOF_FAR_MM for TOF_ARM_MS
 *                 ("nothing is touching the drone"), and not in the cooldown
 *   4. grab     : armed, then filtered range closer than TOF_NEAR_MM held without
 *                 a break for TOF_HOLD_MS while a grab is allowed
 *
 * After a grab it stays disarmed until the hand leaves, and after a rescue for
 * TOF_COOLDOWN_MS more, so one grab = one attack. tof_range_mm() returns the
 * filtered range, so the OLED and the game's hand graphic don't flicker either.
 *
 * The sensor ranges continuously; tof_update() only asks "is a new sample
 * ready?" (one short I2C read) every 10 ms, so it never blocks the loop.
 ******************************************************************************/
#include "tof.h"
#include "vl53l0x.h"
#include "app_config.h"
#include "main.h"
#include <stdio.h>

#if TOF_MEDIAN < 1 || TOF_MEDIAN > 9 || (TOF_MEDIAN % 2) == 0
#error "TOF_MEDIAN must be odd, 1..9"
#endif

static uint8_t  ok;
static uint16_t range = TOF_NO_TARGET;          /* filtered */
static uint16_t win[TOF_MEDIAN];
static uint8_t  win_n, win_i;

static uint8_t  armed, grab, in_far, in_near, could;
static uint32_t t_poll, t_far0, t_near0, t_can0, t_block;

int tof_init(void)
{
#if ENH_TOF
	ok = (uint8_t)vl53l0x_init();
#endif
	return ok;
}

int tof_ok(void) { return ok; }

/* add a sample to the window and return the median of the window */
static uint16_t median_push(uint16_t mm)
{
	uint16_t s[TOF_MEDIAN];
	win[win_i] = mm;
	win_i = (uint8_t)((win_i + 1) % TOF_MEDIAN);
	if (win_n < TOF_MEDIAN) win_n++;
	for (int i = 0; i < win_n; i++) {           /* insertion sort, n <= 9 */
		uint16_t v = win[i];
		int j = i;
		while (j > 0 && s[j - 1] > v) { s[j] = s[j - 1]; j--; }
		s[j] = v;
	}
	return s[win_n / 2];
}

static void detect(uint32_t now, int can_trigger)
{
	/* the hold only counts from the moment a grab became allowed */
	if (can_trigger && !could) t_can0 = now;
	could = (uint8_t)(can_trigger != 0);

	if (range > TOF_FAR_MM) {                    /* hand away: arm after TOF_ARM_MS */
		in_near = 0;
		if (!in_far) { in_far = 1; t_far0 = now; }
		if (now - t_far0 >= TOF_ARM_MS && (int32_t)(now - t_block) >= 0) armed = 1;
		return;
	}
	in_far = 0;
	if (range >= TOF_NEAR_MM) { in_near = 0; return; }   /* in between: nothing */

	if (!in_near) { in_near = 1; t_near0 = now; }
	uint32_t from = ((int32_t)(t_can0 - t_near0) > 0) ? t_can0 : t_near0;
	if (TOF_ATTACK && can_trigger && armed && now - from >= TOF_HOLD_MS) {
		grab  = 1;
		armed = 0;
	}
}

void tof_update(uint32_t now, int can_trigger)
{
	uint16_t mm;
	if (!ok || now - t_poll < 10) return;
	t_poll = now;
	if (vl53l0x_read_mm(&mm)) {
		range = median_push(mm);
		detect(now, can_trigger);
	}
}

uint16_t tof_range_mm(void) { return range; }
int  tof_take_grab(void)     { int g = grab; grab = 0; return g; }

void tof_disarm(void)
{
	armed = 0;
	in_near = 0;
	grab = 0;
	t_block = HAL_GetTick() + TOF_COOLDOWN_MS;
}

static const char *status_name(uint8_t st)
{
	switch (st) {
	case 11:         return "valid";
	case 8: case 10: return "too close";
	case 4:          return "weak signal";
	case 6: case 9:  return "phase fail";
	case 0:          return "no target";
	default:         return "invalid";
	}
}

int tof_debug(char *buf, int len)
{
	uint32_t now = HAL_GetTick();
	unsigned long near_ms = in_near ? (unsigned long)(now - t_near0) : 0UL;
	if (!ok) return snprintf(buf, (size_t)len, "[ZD] TOF not found\r\n");
	return snprintf(buf, (size_t)len,
			"[ZD] TOF raw %4u mm %-11s sig %5.2f | filtered %4u | %-8s | near %4lu/%d ms\r\n",
			vl53l0x_last_raw(), status_name(vl53l0x_last_status()), vl53l0x_last_signal(),
			range, armed ? "ARMED" : "disarmed", near_ms, TOF_HOLD_MS);
}

void tof_shutdown(void)
{
	if (ok) vl53l0x_shutdown();
}

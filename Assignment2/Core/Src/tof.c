/******************************************************************************
 * tof.c - "zombie hand" grab detector (reworked Fri 13 Nov 01:30)
 *
 * Every VL53L0X sample (~30 Hz) is sorted into one of four classes, using the
 * sensor's own status, the distance and the return signal strength:
 *
 *   NEAR    valid reading closer than TOF_NEAR_MM with at least TOF_MIN_SIGNAL
 *           of return signal, or "closer than the minimum range" (hand right on
 *           the sensor, TOF_COVERED_IS_NEAR)
 *   MID     valid reading between TOF_NEAR_MM and TOF_CLEAR_MM (hand hovering)
 *   CLEAR   valid reading beyond TOF_CLEAR_MM, nothing in range, or a weak signal
 *   UNSURE  phase fail / hardware fail: the sensor itself doesn't know. A hand
 *           pressed onto the sensor often gives these, so right after a NEAR
 *           sample (< 100 ms) it still counts as NEAR, otherwise it is ignored.
 *
 * Confidence score: NEAR +1, MID -2, CLEAR = 0. A grab is TOF_HIT_SAMPLES of
 * score (6 = ~0.2 s of a hand within 7 cm), while a grab is allowed and the
 * detector is ARMED. It arms after TOF_ARM_SAMPLES non-NEAR readings in a row,
 * so something resting on the sensor can never start an attack by itself, and
 * after a rescue the hand has to leave first (plus TOF_COOLDOWN_MS).
 *
 * The old detector needed > 15 cm of free space to arm and an unbroken 0.8 s
 * under 5 cm; wires above the board and phase-fail samples (counted as "nothing
 * there") stopped it from ever firing. tof_range_mm() is still the median of
 * the last TOF_MEDIAN samples, for the OLED and the game's hand graphic.
 ******************************************************************************/
#include "tof.h"
#include "vl53l0x.h"
#include "app_config.h"
#include "main.h"
#include <stdio.h>

#if TOF_MEDIAN < 1 || TOF_MEDIAN > 9 || (TOF_MEDIAN % 2) == 0
#error "TOF_MEDIAN must be odd, 1..9"
#endif

/* device range status (RESULT_RANGE_STATUS bits 6:3), as decoded by ST's API */
#define ST_VALID        11
#define ST_MIN_RANGE_A  8
#define ST_MIN_RANGE_B  10
#define ST_WEAK_SIGNAL  4
#define ST_NONE         0
#define UNSURE_KEEP_MS  100              /* UNSURE right after a NEAR still counts as NEAR */

enum { C_NONE, C_NEAR, C_MID, C_CLEAR, C_UNSURE };

static uint8_t  ok;
static uint16_t range = TOF_NO_TARGET;          /* median filtered, for display */
static uint16_t win[TOF_MEDIAN];
static uint8_t  win_n, win_i;

static uint8_t  armed, grab, cls, clear_n, score;
static uint16_t grab_mm;
static float    grab_sig;
static uint32_t t_poll, t_block, t_last_near;

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

static int classify(uint32_t now)
{
	uint8_t  st  = vl53l0x_last_status();
	uint16_t raw = vl53l0x_last_raw();
	float    sig = vl53l0x_last_signal();

	if (st == ST_VALID && raw < TOF_FLOOR_MM) return C_CLEAR;   /* 0 mm "valid" = cover / shield crosstalk, no hand */
	if (st == ST_VALID && raw < 2000) {
		if (raw < TOF_NEAR_MM) return sig >= TOF_MIN_SIGNAL ? C_NEAR : C_UNSURE;
		return raw < TOF_CLEAR_MM ? C_MID : C_CLEAR;
	}
	if (st == ST_MIN_RANGE_A || st == ST_MIN_RANGE_B) return TOF_COVERED_IS_NEAR ? C_NEAR : C_UNSURE;
	if (st == ST_VALID || st == ST_WEAK_SIGNAL || st == ST_NONE) return C_CLEAR;   /* out of range / nothing */
	/* phase fail, hardware fail: a hand pressed right onto the sensor does this */
	return (t_last_near && now - t_last_near < UNSURE_KEEP_MS) ? C_NEAR : C_UNSURE;
}

static uint8_t allowed;                          /* last can_trigger, for E,TOF */

static void detect(uint32_t now, int can_trigger)
{
	allowed = (uint8_t)(can_trigger != 0);
	cls = (uint8_t)classify(now);

	if (cls == C_NEAR) {
		t_last_near = now;
		clear_n = 0;
		if (score < 255) score++;
	} else if (cls == C_MID) {
		if (clear_n < 255) clear_n++;
		score = score > 2 ? (uint8_t)(score - 2) : 0;
	} else if (cls == C_CLEAR) {
		if (clear_n < 255) clear_n++;
		score = 0;
	}                                              /* C_UNSURE: no change */

	if (!armed && clear_n >= TOF_ARM_SAMPLES && (int32_t)(now - t_block) >= 0) armed = 1;

	if (!can_trigger) { score = 0; return; }       /* the hit only counts while a grab is allowed */
	if (TOF_ATTACK && armed && score >= TOF_HIT_SAMPLES) {
		grab     = 1;
		armed    = 0;
		clear_n  = 0;
		score    = 0;
		grab_mm  = vl53l0x_last_raw();
		grab_sig = vl53l0x_last_signal();
	}
}

void tof_update(uint32_t now, int can_trigger)
{
	uint16_t mm;
	if (!ok || now - t_poll < 10) return;
	t_poll = now;
	if (vl53l0x_read_mm(&mm)) {
		detect(now, can_trigger);
		if (cls == C_NEAR && mm >= TOF_NO_TARGET) mm = 20;    /* hand on the sensor: show it as touching */
		range = median_push(mm);
	}
}

uint16_t tof_range_mm(void) { return range; }
int  tof_take_grab(void)     { int g = grab; grab = 0; return g; }
int  tof_armed(void)         { return armed; }
int  tof_blocked(void)       { return ok && !armed && cls == C_NEAR && (int32_t)(HAL_GetTick() - t_block) >= 0; }

int tof_grab_info(char *buf, int len)
{
	return snprintf(buf, (size_t)len, "[ZD] ToF GRAB: hand at %u mm (signal %.1f MCPS) -> attacked\r\n",
			grab_mm >= TOF_NO_TARGET ? 0u : grab_mm, grab_sig);
}

void tof_disarm(void)
{
	armed = 0;
	grab = 0;
	score = 0;
	clear_n = 0;
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
	static const char *const CLS[] = { "-", "NEAR", "mid", "clear", "unsure" };
	if (!ok) return snprintf(buf, (size_t)len, "[ZD] TOF not found\r\n");
	return snprintf(buf, (size_t)len,
			"[ZD] TOF raw %4u mm %-11s sig %6.2f | %-6s | hit %2u/%d | %-8s | %s | filtered %4u\r\n",
			vl53l0x_last_raw(), status_name(vl53l0x_last_status()), vl53l0x_last_signal(),
			CLS[cls], score > 99 ? 99u : (unsigned)score, TOF_HIT_SAMPLES,
			armed ? "ARMED" : "disarmed",
			allowed ? "grab ON " : "grab off (STANDBY / grace / button)", range);
}

void tof_shutdown(void)
{
	if (ok) vl53l0x_shutdown();
}

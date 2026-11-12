/******************************************************************************
 * tilt.c - pitch / roll from gravity
 *
 * With +Z pointing to the ground when level (spec), gravity is the only steady
 * acceleration on a hand-held board, so:
 *     pitch = atan2(ax, sqrt(ay^2 + az^2))      roll = atan2(ay, az)
 * A first-order low-pass filter (TILT_ALPHA per 20 ms sample) removes hand
 * jitter before the angles are computed.
 ******************************************************************************/
#include "tilt.h"
#include "app_config.h"
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_accelero.h"
#include <math.h>

#define RAD2DEG 57.29578f

static float fx, fy, fz;             /* filtered acceleration, mg */
static float pitch, roll;
static uint8_t primed;

void tilt_reset(void) { primed = 0; }

void tilt_update(void)
{
	int16_t a[3];
	BSP_ACCELERO_AccGetXYZ(a);
	if (!primed) { fx = a[0]; fy = a[1]; fz = a[2]; primed = 1; }
	fx += TILT_ALPHA * (a[0] - fx);
	fy += TILT_ALPHA * (a[1] - fy);
	fz += TILT_ALPHA * (a[2] - fz);
	pitch = TILT_PITCH_SIGN * atan2f(fx, sqrtf(fy * fy + fz * fz)) * RAD2DEG;
	roll  = TILT_ROLL_SIGN  * atan2f(fy, fz) * RAD2DEG;
}

float tilt_pitch(void) { return pitch; }
float tilt_roll(void)  { return roll; }

/******************************************************************************
 * nav.c - barometric altitude and compass heading (HUD only, not control)
 *
 * Altitude: near sea level air pressure falls ~0.12 hPa per metre, so
 *   alt = (P_launch - P_now) * BARO_M_PER_HPA, smoothed.
 * Heading: atan2(My, Mx) on the hard/soft-iron corrected magnetometer from
 *   sensors.c. Not tilt-compensated, so it is only right with the board level.
 ******************************************************************************/
#include "nav.h"
#include "app_config.h"
#include "sensors.h"
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_psensor.h"
#include <math.h>

static float p0, alt, heading;
static uint8_t p0_set;

void nav_reset(void) { p0_set = 0; alt = 0; }

void nav_update(void)
{
	float p = BSP_PSENSOR_ReadPressure();          /* hPa */
	float m[3];

	if (p > 300.0f && p < 1100.0f) {
		if (!p0_set) { p0 = p; p0_set = 1; }
		alt += 0.3f * ((p0 - p) * BARO_M_PER_HPA - alt);
	}
	read_magneto_calibrated(m);
	heading = atan2f(m[1], m[0]) * 57.29578f;
	if (heading < 0) heading += 360.0f;
}

float nav_altitude(void) { return alt; }
float nav_heading(void)  { return heading; }

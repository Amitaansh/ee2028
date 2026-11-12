/******************************************************************************
 * habitat.c - habitability check from temperature, humidity and pressure
 *
 * Wet-bulb temperature Tw (Stull 2011, valid for 5-99 %RH and -20..50 degC):
 *   Tw = T*atan(0.151977*sqrt(RH + 8.313659)) + atan(T + RH) - atan(RH - 1.676331)
 *        + 0.00391838*RH^1.5*atan(0.023101*RH) - 4.686035
 * A wet-bulb of 35 degC is the theoretical limit of human survival; around
 * 31 degC sustained activity already becomes dangerous, so HAB_TW_MAX = 31.
 * Pressure must also be in the normal (breathable) band of the spec's P check.
 ******************************************************************************/
#include "habitat.h"
#include "app_config.h"
#include <math.h>

float habitat_wet_bulb(float t, float rh)
{
	if (rh < 5.0f) rh = 5.0f;
	if (rh > 99.0f) rh = 99.0f;
	return t * atanf(0.151977f * sqrtf(rh + 8.313659f)) + atanf(t + rh) - atanf(rh - 1.676331f)
	       + 0.00391838f * powf(rh, 1.5f) * atanf(0.023101f * rh) - 4.686035f;
}

int habitat_ok(float t, float rh, float p)
{
	return habitat_wet_bulb(t, rh) <= HAB_TW_MAX && t >= HAB_T_MIN && p >= P_LO && p <= P_HI;
}

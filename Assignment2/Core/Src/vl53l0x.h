/******************************************************************************
 * vl53l0x.h - minimal VL53L0X time-of-flight driver for the B-L4S5I-IOT01A
 *
 * The template BSP has no VL53L0X driver, so this is a compact C port of the
 * register sequence used by the Pololu VL53L0X Arduino library (MIT licence),
 * which itself follows ST's STSW-IMG005 API. See vl53l0x.c for credits.
 *
 * Hardware (on board): I2C2 (PB10/PB11, shared with the other sensors through
 * the BSP handle), address 0x52 (8-bit), XSHUT = PC6, GPIO1 = PC7 (unused).
 ******************************************************************************/
#ifndef VL53L0X_H
#define VL53L0X_H

#include "main.h"

/* Power the sensor up through XSHUT, run the init + reference calibration
 * and start continuous back-to-back ranging (~30 Hz). Returns 1 on success. */
int vl53l0x_init(void);

/* Non-blocking. Returns 1 and writes the distance (mm) when a new
 * measurement is ready, 0 otherwise. Samples the sensor itself flags as
 * invalid (no target, weak signal, phase fail) become TOF_NO_TARGET; with
 * TOF_COVERED_IS_NEAR, "target closer than the minimum range" becomes 20 mm. */
int vl53l0x_read_mm(uint16_t *mm);

/* The last sample before that check, for E,TOF. Status 11 = valid. */
uint16_t vl53l0x_last_raw(void);
uint8_t  vl53l0x_last_status(void);
float    vl53l0x_last_signal(void);      /* return signal rate, MCPS */

/* Stop ranging and hold the sensor in reset (used when the drone is terminated). */
void vl53l0x_shutdown(void);

#endif /* VL53L0X_H */

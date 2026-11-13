/******************************************************************************
 * sensors.h - all six on-board sensors
 * T temperature, P pressure, H humidity, A accel, G gyro, M magnetometer
 ******************************************************************************/
#ifndef SENSORS_H
#define SENSORS_H

#include "main.h"

/* latest readings (magnitudes). Globals so they can be overwritten in the debugger */
extern float T, P, H, A, G, M;

void    sensors_init(void);        /* init all six BSP sensors                    */
void    read_sensors(void);        /* refresh T, P, H, A, G, M                    */
int16_t read_accel_z_mg(void);     /* raw accelerometer Z in mg (flip detection)  */
void    read_magneto_calibrated(float out[3]);  /* hard/soft-iron corrected mgauss (nav.c heading) */

/* rotate-the-board magnetometer calibration; prints the values to paste
   into app_config.h. Returns 1 if accepted, 0 if the board wasn't rotated enough. */
int     sensors_calibrate_magneto(uint32_t duration_ms);

/* keep-the-board-still gyroscope bias calibration; prints the values to paste
   into app_config.h. Returns 1 if accepted, 0 if the board moved. */
int     sensors_calibrate_gyro(uint32_t duration_ms);

/* temperature offset calibration against a reference (degC). use_first = 1 uses
   the first reading after power-up as the reference. Prints the T_OFFSET line to
   paste into app_config.h. Returns 1 if accepted. Triggered by E,TCAL in Tera Term. */
int     sensors_calibrate_temp(float reference_c, int use_first);
float   sensors_temp_offset(void);
void    sensors_print_calibration(void);   /* all current values as #define lines (E,CAL) */
float   sensors_temp_first(void);

/* returns 1 and logs a line over UART if value is outside [lo, hi] */
int check(const char *name, float v, float lo, float hi, const char *unit);

#endif /* SENSORS_H */

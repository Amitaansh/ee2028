/******************************************************************************
 * sensors.h - all six on-board sensors
 * T temperature, P pressure, H humidity, A accel, G gyro, M magnetometer
 ******************************************************************************/
#ifndef SENSORS_H
#define SENSORS_H

#include "main.h"

/* latest sensor readings (magnitudes) - you can overwrite these in the debugger */
extern float T, P, H, A, G, M;

void    sensors_init(void);        /* init all six BSP sensors                    */
void    read_sensors(void);        /* refresh T, P, H, A, G, M                    */
int16_t read_accel_z_mg(void);     /* raw accelerometer Z in mg (flip detection)  */

/* rotate-the-board magnetometer calibration; prints the values to paste
   into app_config.h. Returns 1 if accepted, 0 if the board wasn't rotated enough. */
int     sensors_calibrate_magneto(uint32_t duration_ms);

/* keep-the-board-still gyroscope bias calibration; prints the values to paste
   into app_config.h. Returns 1 if accepted, 0 if the board moved. */
int     sensors_calibrate_gyro(uint32_t duration_ms);

/* returns 1 and logs a line over UART if value is outside [lo, hi] */
int check(const char *name, float v, float lo, float hi, const char *unit);

#endif /* SENSORS_H */

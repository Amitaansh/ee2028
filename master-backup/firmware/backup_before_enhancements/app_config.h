/******************************************************************************
 * app_config.h - every tunable number in one place
 * Change thresholds / timings here; no other file needs editing.
 ******************************************************************************/
#ifndef APP_CONFIG_H
#define APP_CONFIG_H

/* ---------------- sensor thresholds (tune by experiment) ---------------- */
#define T_LO   15.0f     /* degC  */
#define T_HI   35.0f
#define P_LO   950.0f    /* hPa   */
#define P_HI   1050.0f
#define H_LO   30.0f     /* %RH   */
#define H_HI   85.0f
#define A_LO   5.0f      /* m/s^2 : 0.5 g to 1.5 g, rest is ~9.8 */
#define A_HI   15.0f
#define G_LO   -1.0f     /* dps   : no lower limit */
#define G_HI   100.0f
#define M_LO   -1.0f     /* gauss : no lower limit */
#define M_HI   1.0f

/* ---------------- game / timing constants ---------------- */
#define FLIP_MG   (-500)   /* accel Z below -0.5 g = drone is upside down */
#define RESCUE_MS 10000    /* time allowed for a rescue after an attack    */
#define DOUBLE_MS 500      /* max gap between two presses = double press   */

/* ---------------- magnetometer calibration ----------------
 * The LIS3MDL also sees fields from magnetised parts near it (board components,
 * laptop, desk). Those move WITH the board, so they add a fixed offset per axis
 * ("hard-iron"). Rotating the board through all orientations makes each axis
 * swing between +|B_earth| and -|B_earth| around that offset, so
 *     offset = (max + min) / 2          scale = avg_span / axis_span
 * Run the calibration once, paste the printed values below, then set
 * MAG_CAL_ON_BOOT to 0 so the demo boots straight into STANDBY.        */
#define MAG_CAL_ON_BOOT  1        /* 1 = run the 10 s calibration at power-up */
#define MAG_CAL_MS       10000    /* how long to rotate the board for         */
#define MAG_CAL_MIN_SPAN 300.0f   /* mgauss: min swing per axis to accept cal */

#define MAG_OFF_X    -428.0f         /* hard-iron offsets, mgauss */
#define MAG_OFF_Y    -1680.5f
#define MAG_OFF_Z    -25.5f
#define MAG_SCALE_X  1.119f         /* soft-iron scale factors   */
#define MAG_SCALE_Y  0.941f
#define MAG_SCALE_Z  0.958f

/* ---------------- gyroscope calibration ----------------
 * A still gyro should read 0 dps, but every axis has a small constant
 * zero-rate offset (bias), which showed up as ~2.3 dps at rest. Averaging the
 * readings while the board sits still measures that bias; it is then
 * subtracted from every reading. (LSM6DSL at +-2000 dps, 70 mdps/LSB.)
 * Runs BEFORE the magnetometer calibration: keep the board still first.  */
#define GYRO_CAL_ON_BOOT   1        /* 1 = measure bias at power-up          */
#define GYRO_CAL_MS        2000     /* averaging window                      */
#define GYRO_CAL_MAX_SPAN  5000.0f  /* mdps: reject if the board was moved   */

#define GYRO_OFF_X   0.0f           /* zero-rate offsets, mdps */
#define GYRO_OFF_Y   0.0f
#define GYRO_OFF_Z   0.0f

#endif /* APP_CONFIG_H */

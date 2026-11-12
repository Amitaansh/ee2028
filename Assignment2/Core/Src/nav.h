/******************************************************************************
 * nav.h - drone "navigation" display values from the barometer and magnetometer
 ******************************************************************************/
#ifndef NAV_H
#define NAV_H

void  nav_reset(void);       /* altitude zero = where the drone launched */
void  nav_update(void);      /* read pressure + magnetometer */
float nav_altitude(void);    /* metres above the launch point (barometric) */
float nav_heading(void);     /* degrees 0..360 (calibrated magnetometer, not tilt compensated) */

#endif /* NAV_H */

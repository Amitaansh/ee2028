/******************************************************************************
 * tilt.h - the board as a tilt controller: pitch and roll from the accelerometer
 ******************************************************************************/
#ifndef TILT_H
#define TILT_H

void  tilt_reset(void);      /* restart the filter (on entering BATTLE_MODE) */
void  tilt_update(void);     /* read the LSM6DSL, low-pass filter, compute angles */
float tilt_pitch(void);      /* degrees, + = nose up = climb (with TILT_PITCH_SIGN -1) */
float tilt_roll(void);       /* degrees, + = roll right (see TILT_ROLL_SIGN) */

#endif /* TILT_H */

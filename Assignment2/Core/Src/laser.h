/******************************************************************************
 * laser.h - KY-008 laser module, non-blocking, with a dim "aiming" glow
 * S on the PMOD connector pin 7 = PD2, - on pin 11 = GND (see app_config.h, LASER_*).
 *
 * Idle: a faint glow (software PWM, LASER_IDLE_PCT % duty, ~500 Hz, no flicker).
 * Shot: a short double flicker, then full brightness for LASER_BEAM_MS.
 * PD2 has no timer output, so TIM7 interrupts at 20 kHz and switches the pin.
 ******************************************************************************/
#ifndef LASER_H
#define LASER_H

#include <stdint.h>

void laser_init(void);                  /* pin driven OFF, TIM7 started; call as early as possible */
void laser_update(uint32_t now);        /* every main-loop pass: runs the pattern, safety cut-off */
void laser_shot(void);                  /* one shot: flicker + full beam */
void laser_test(uint16_t ms);           /* full beam for ms (E,LASER) */
void laser_cancel(void);                /* stop a shot / test, back to the glow (if enabled) */
void laser_glow(int on);                /* faint idle glow on / off (off while attacked) */
void laser_set_glow_pct(int pct);       /* E,LASER,<pct>: change the glow level (until reset) */
int  laser_glow_pct(void);
void laser_kill(void);                  /* everything off, timer stopped (termination) */
int  laser_is_on(void);                 /* 1 while at full brightness */
void laser_inhibit(int on);             /* [ENH] real-life mode: a person near the line of fire = fully dark,
                                           no glow, no shots, until released */
void laser_dot(int on);                 /* [ENH] real-life calibration: full brightness while on (LASER_MAX_ON_MS
                                           cut-off; after a cut-off it stays off until laser_dot(0)) */

#endif /* LASER_H */

/******************************************************************************
 * laser.h - KY-008 laser module, non-blocking
 * S on the PMOD connector pin 7 = PD2, - on pin 11 = GND (see app_config.h, LASER_*).
 * Every "Laser fired!" from the game logic also fires the real laser:
 * a short double flicker, then a solid beam for LASER_BEAM_MS.
 ******************************************************************************/
#ifndef LASER_H
#define LASER_H

#include <stdint.h>

void laser_init(void);                  /* pin driven OFF; call as early as possible */
void laser_update(uint32_t now);        /* every main-loop pass: runs the pattern, safety cut-off */
void laser_shot(void);                  /* one shot: flicker + beam */
void laser_test(uint16_t ms);           /* steady beam for ms (E,LASER) */
void laser_off(void);                   /* stop at once (attack, mode change, termination) */
int  laser_is_on(void);

#endif /* LASER_H */

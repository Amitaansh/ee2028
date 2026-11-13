/******************************************************************************
 * enhancements.h - the only interface drone.c and main.c use for the extras
 *
 * drone.c (the minimum-spec game logic) calls these hooks wherever something
 * happens, and enhancements.c passes it on to the feature modules (game link,
 * buzzer, OLEDs, ToF, laser, turret). Take the hook calls out and drone.c is the
 * plain minimum specification again.
 ******************************************************************************/
#ifndef ENHANCEMENTS_H
#define ENHANCEMENTS_H

#include <stdint.h>

#define ENH_SRC_FLIP 0
#define ENH_SRC_TOF  1

void enh_init(void);                               /* main.c: after sensors + calibration */
void enh_update(uint32_t now, int battle, int attacked, int energy);   /* every loop pass */

/* drone.c event hooks */
void enh_on_mode(int battle);                      /* entered STANDBY (0) or BATTLE (1) */
int  enh_take_charge_request(void);                /* game: flew through a charging pylon */
int  enh_manual_fire(void);                        /* 1 = player fires by hand (GUI open, MANUAL AIM or real-life mode), no auto-fire */
int  enh_take_fire_request(void);                  /* game Space / click, or joystick click in MANUAL AIM */
void enh_on_fire_not_ready(void);
void enh_on_laser_fired(int energy_left);
void enh_on_charged(int energy_now);
int  enh_on_button(int ev, int battle, int attacked);   /* shows the press on the telemetry OLED;
                                                          returns the event drone.c should act on */
int  enh_take_tof_grab(void);                      /* 1 once when a hand grabs the drone */
void enh_on_attacked(int source, uint32_t now);
void enh_on_attack_tick(uint32_t now);             /* once per second while attacked */
void enh_on_rescued(void);
void enh_on_terminated(void);                      /* blocking: SIGNAL LOST + long tone */

#endif /* ENHANCEMENTS_H */

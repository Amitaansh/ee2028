/******************************************************************************
 * hud.h - what the HUD OLED shows: a primary flight display (attitude
 * indicator, heading tape, altitude tape, laser energy). Telemetry pages are
 * on the second OLED (tele_oled.c).
 * hud.c only draws; enhancements.c fills in a HudState snapshot every 100 ms.
 ******************************************************************************/
#ifndef HUD_H
#define HUD_H

#include <stdint.h>

typedef struct {
	uint32_t now, boot_ms;            /* boot_ms: tick at power-up (splash screen) */
	int      battle, attacked, attack_src_tof;
	uint32_t attack_t0, rescued_until;
	int      energy;
	float    pitch, roll, alt, heading;
	int      tof_ok;
	uint16_t range_mm;
	int      link;                     /* 1 = PC game connected */
	int      wipe_sec;                 /* >= 0 inside a horde zone (from the game) */
	int      zone_clear;               /* 1 = show "ZONE CLEAR" */
	int      score, habitats;          /* score < 0 = no game score yet */
	float    temp, press, hum;         /* STANDBY telemetry from sensors.c */
	int      pos_valid;                /* 1 = the game sent E,POS recently */
	float    pos_x, pos_z, speed, game_alt;
	uint32_t fired_until;              /* laser flash on the attitude window until then */
	int      manual_aim;               /* turret MANUAL AIM (triple press in BATTLE) */
	int      gui;                      /* 1 = GUI (PC game) active: joystick flies the drone */
} HudState;

void hud_draw(const HudState *s);      /* draw the right screen into the OLED frame buffer */
void hud_signal_lost(void);            /* final "SIGNAL LOST" screen, sent immediately */

#endif /* HUD_H */

/******************************************************************************
 * hud.h - what the OLED shows (the drone's head-up display)
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
} HudState;

void hud_draw(const HudState *s);      /* draw the right screen into the OLED frame buffer */
void hud_signal_lost(void);            /* final "SIGNAL LOST" screen, sent immediately */

#endif /* HUD_H */

/******************************************************************************
 * hud.c - drone HUD on the 1.3" OLED: a primary flight display (PFD) like the
 * one in an aircraft cockpit. 128x64, redrawn at 10 Hz by enhancements.c.
 *
 *   +--------------------------------------------------------------+
 *   | 330  ' ' N ' ' 030 [ 357 ] 060 ' ' 090      heading tape    |  y 0..9
 *   +-----+--------------------------------------------+-----------+
 *   | [=] |  roll scale  \ ' | ' /                      | -  15     |
 *   | [=] |  pitch ladder  ----  10  ----               | -         |
 *   | [=] |  -----==  v  ==----   aircraft symbol       |[ 12.4 ]   |  y 11..54
 *   | [=] |  ///// ground (dotted) /////  horizon       | -         |
 *   | [ ] |                                             | -  10     |
 *   +-----+--------------------------------------------+-----------+
 *   | status line: DANGER WIPE / HAND / FIRE! / position / score   |  y 56..63
 *   +--------------------------------------------------------------+
 *   left: laser energy battery (10 cells, notch at the 5/10 fire point)
 *   right: altitude tape (game altitude if the game sends E,POS, else barometric)
 *
 * Other screens: splash, ATTACKED (inverted, big countdown), RESCUED, SIGNAL LOST.
 * Pitch / roll come from tilt.c (accelerometer), heading and baro altitude from nav.c.
 ******************************************************************************/
#include "hud.h"
#include "oled.h"
#include "app_config.h"
#include "habitat.h"
#include <stdio.h>
#include <string.h>
#include <math.h>

/* attitude window */
#define AX0   20
#define AX1   103          /* inclusive */
#define AY0   11
#define AY1   54
#define ACX   61           /* aircraft symbol centre */
#define ACY   33
#define PITCH_PX_PER_DEG  0.9f
#define HDG_PX_PER_DEG    1.5f
#define ALT_PX_PER_M      3.0f

static void range_text(char *b, const HudState *s)
{
	if (s->range_mm >= TOF_NO_TARGET) strcpy(b, "---");
	else sprintf(b, "%dcm", s->range_mm / 10);
}

static void splash(const HudState *s)
{
	oled_text_centered(4, "THE LAST OF", 1, 1);
	oled_text_centered(16, "EE2028", 3, 1);
	oled_text_centered(46, "ZOMBIE DRONE", 1, 1);
	oled_text_centered(56, s->tof_ok ? "TOF OK" : "TOF --", 1, 1);
}

static void attacked(const HudState *s)
{
	char b[8];
	int32_t left_ms = RESCUE_MS - (int32_t)(s->now - s->attack_t0);
	if (left_ms < 0) left_ms = 0;
	oled_fill_rect(0, 0, 128, 64, 1);
	oled_text_centered(1, "!! ATTACKED !!", 1, 0);
	oled_text_centered(10, s->attack_src_tof ? "ZOMBIE HAND GRAB" : "DRONE FLIPPED", 1, 0);
	sprintf(b, "%d", (int)((left_ms + 999) / 1000));
	oled_text_centered(20, b, 4, 0);
	oled_text_centered(50, "DBL PRESS=RESCUE", 1, 0);
	oled_fill_rect(0, 60, (int)(128 * left_ms / RESCUE_MS), 4, 0);
}

/* ---------------- heading tape (y 0..9) ---------------- */
static void heading_tape(float hdg)
{
	static const char *const card[12] = { "N", "3", "6", "E", "12", "15", "S", "21", "24", "W", "30", "33" };
	char b[6];
	int base = (int)floorf(hdg / 5.0f) * 5;

	for (int d = base - 45; d <= base + 50; d += 5) {
		int x = 64 + (int)lroundf(((float)d - hdg) * HDG_PX_PER_DEG);
		int deg = ((d % 360) + 360) % 360;
		if (x < 0 || x > 127) continue;
		if (deg % 10 == 0) { oled_pixel(x, 8, 1); oled_pixel(x, 9, 1); }
		else                 oled_pixel(x, 9, 1);
		if (deg % 30 == 0 && (x < 46 || x > 82)) {          /* label, not under the readout box */
			const char *t = card[deg / 30];
			oled_text(x - (int)strlen(t) * 3 + 1, 0, t, 1, 1);
		}
	}
	/* readout box in the middle */
	oled_fill_rect(50, 0, 29, 9, 1);
	sprintf(b, "%03d", ((int)lroundf(hdg) % 360 + 360) % 360);
	oled_text(55, 1, b, 1, 0);
	oled_pixel(64, 9, 1); oled_pixel(63, 9, 1); oled_pixel(65, 9, 1);   /* pointer */
}

/* ---------------- attitude indicator ---------------- */
static void attitude(float pitch, float roll)
{
	float r = roll * 0.01745329f;
	float sn = sinf(r), cs = cosf(r);
	float d = pitch * PITCH_PX_PER_DEG;               /* nose up -> horizon moves down */

	for (int y = AY0 + 1; y < AY1; y++) {
		for (int x = AX0 + 1; x < AX1; x++) {
			float dx = (float)(x - ACX), dy = (float)(y - ACY);
			float v = dx * sn + dy * cs - d;          /* distance below the horizon, px */
			float u = dx * cs - dy * sn;              /* distance along the horizon, px */
			int on = 0;
			if (v > 0.5f) on = ((x + y) & 1) == 0 && (y & 1) == 0;   /* ground: 25 % dots */
			if (fabsf(v) <= 0.5f) on = 1;                            /* horizon line */
			/* pitch ladder every 10 deg: solid above the horizon, dashed below */
			for (int k = -3; k <= 3; k++) {
				if (!k) continue;
				float off = v + (float)k * 10.0f * PITCH_PX_PER_DEG;
				float half = (k == 1 || k == -1) ? 12.0f : 8.0f;
				if (fabsf(off) <= 0.5f && fabsf(u) <= half && fabsf(u) >= 3.0f) {
					on = k > 0 ? 1 : ((int)(fabsf(u)) & 2) == 0;
					if (fabsf(u) > half - 1.0f && fabsf(off) <= 0.5f) on = 1;
				}
			}
			if (on) oled_pixel(x, y, 1);
		}
	}

	/* roll scale: ticks at 0, 10, 20, 30, 45, 60 deg on a circle around the symbol */
	static const int ticks[] = { -60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60 };
	for (unsigned i = 0; i < sizeof ticks / sizeof ticks[0]; i++) {
		float a = (float)ticks[i] * 0.01745329f;
		int len = (ticks[i] % 30 == 0) ? 3 : 2;
		for (int k = 0; k < len; k++) {
			float R = 20.0f - (float)k;
			oled_pixel(ACX + (int)lroundf(R * sinf(a)), ACY - (int)lroundf(R * cosf(a)), 1);
		}
	}
	/* roll pointer: a small triangle that turns with the horizon */
	for (int k = 0; k < 3; k++) {
		float R = 16.0f - (float)k;
		float a = -r;
		int px = ACX + (int)lroundf(R * sinf(a)), py = ACY - (int)lroundf(R * cosf(a));
		for (int w = -k; w <= k; w++)
			oled_pixel(px + (int)lroundf((float)w * cosf(a)), py + (int)lroundf((float)w * sinf(a)), 1);
	}

	/* fixed aircraft symbol, with a black outline so it reads over the ground dots */
	oled_fill_rect(ACX - 20, ACY - 1, 14, 3, 0);  oled_fill_rect(ACX + 7, ACY - 1, 14, 3, 0);
	oled_fill_rect(ACX - 8, ACY - 1, 3, 5, 0);    oled_fill_rect(ACX + 6, ACY - 1, 3, 5, 0);
	oled_fill_rect(ACX - 2, ACY - 2, 5, 5, 0);
	oled_hline(ACX - 19, ACY, 12, 1);             oled_hline(ACX + 8, ACY, 12, 1);
	oled_fill_rect(ACX - 7, ACY, 1, 3, 1);        oled_fill_rect(ACX + 7, ACY, 1, 3, 1);
	oled_fill_rect(ACX - 1, ACY - 1, 3, 3, 1);

	oled_rect(AX0, AY0, AX1 - AX0 + 1, AY1 - AY0 + 1);
}

/* ---------------- altitude tape (x 104..127) ---------------- */
static void altitude_tape(float alt)
{
	char b[8];
	int base = (int)floorf(alt);

	for (int m = base - 8; m <= base + 8; m++) {
		int y = ACY - (int)lroundf(((float)m - alt) * ALT_PX_PER_M);
		if (y <= AY0 || y >= AY1) continue;
		if (m % 5 == 0) {
			oled_hline(105, y, 4, 1);
			sprintf(b, "%d", m);
			if (y - 3 > AY0 && y + 4 < AY1 && (y < ACY - 9 || y > ACY + 9)) oled_text(110, y - 3, b, 1, 1);
		} else {
			oled_hline(105, y, 2, 1);
		}
	}
	/* readout box */
	oled_fill_rect(104, ACY - 5, 24, 11, 0);
	oled_fill_rect(104, ACY - 4, 24, 9, 1);
	if (fabsf(alt) < 9.95f) sprintf(b, "%.1f", alt);
	else                    sprintf(b, "%d", (int)lroundf(alt));
	oled_text(127 - (int)strlen(b) * 6 + 1, ACY - 3, b, 1, 0);
}

/* ---------------- laser energy battery (x 0..19) ---------------- */
static void energy_bar(int e)
{
	if (e < 0) e = 0;
	if (e > 10) e = 10;
	oled_fill_rect(6, AY0, 8, 2, 1);                  /* battery cap */
	oled_rect(3, AY0 + 2, 14, AY1 - AY0 - 2);         /* y 13..53 */
	for (int i = 0; i < e; i++) {
		int y1 = AY1 - 2 - i * 4;                     /* cell i: 3 px tall, 1 px gap */
		oled_fill_rect(5, y1 - 2, 10, 3, 1);
	}
	int yf = AY1 - 2 - 5 * 4 + 1;                     /* 5/10 = fire threshold notch */
	oled_hline(0, yf, 3, 1);
	oled_hline(17, yf, 3, 1);
}

/* ---------------- status line (y 56..63) ---------------- */
static void status_line(const HudState *s)
{
	char b[28], r[8];
	int inv = 0;

	if (!s->battle) {
		if (((s->now / 2000) & 1) && s->press > 1.0f)
			sprintf(b, "%s Tw%.1f", habitat_ok(s->temp, s->hum, s->press) ? "HABITABLE" : "NOT HABITBL",
					habitat_wet_bulb(s->temp, s->hum));
		else
			strcpy(b, "STANDBY 2x=BATTLE");
	} else if (s->wipe_sec >= 0) {
		sprintf(b, "DANGER  WIPE %02d", s->wipe_sec);
		inv = 1;
	} else if (s->tof_ok && s->range_mm < TOF_FAR_MM) {
		range_text(r, s);
		sprintf(b, "%s %s", s->range_mm < TOF_NEAR_MM ? "GRAB!" : "HAND", r);
		inv = s->range_mm < TOF_NEAR_MM;
	} else if (s->now < s->fired_until) {
		sprintf(b, "LASER FIRED  %d/10", s->energy);
	} else if (s->zone_clear) {
		strcpy(b, "ZONE CLEAR");
	} else if (s->manual_aim) {
		sprintf(b, "MANUAL AIM %d/10", s->energy);
	} else if (s->pos_valid) {
		sprintf(b, "X%+04d Z%+04d %2dm/s", (int)lroundf(s->pos_x), (int)lroundf(s->pos_z), (int)lroundf(s->speed));
	} else if (s->score >= 0) {
		sprintf(b, "SCORE %d HAB %d/5", s->score, s->habitats);
	} else {
		sprintf(b, "EN %d/10 %s", s->energy, s->link ? "PC LINK" : "NO LINK");
	}
	b[21] = 0;
	if (inv) oled_fill_rect(0, 56, 128, 8, 1);
	oled_text_centered(56, b, 1, !inv);
}

static void pfd(const HudState *s)
{
	heading_tape(s->heading);
	attitude(s->pitch, s->roll);
	altitude_tape(s->pos_valid ? s->game_alt : s->alt);
	energy_bar(s->energy);
	if (s->now < s->fired_until && ((s->now / 80) & 1))     /* laser shot: window flashes */
		oled_invert_rect(AX0 + 1, AY0 + 1, AX1 - AX0 - 1, AY1 - AY0 - 1);
	status_line(s);
}

void hud_draw(const HudState *s)
{
	oled_clear();
	if (s->now - s->boot_ms < 1500)      splash(s);
	else if (s->attacked)                attacked(s);
	else if (s->now < s->rescued_until) {
		oled_text_centered(14, "RESCUED", 2, 1);
		oled_text_centered(38, "BACK TO BATTLE", 1, 1);
	}
	else                                 pfd(s);
}

void hud_signal_lost(void)
{
	oled_set_inverted(0);
	oled_clear();
	oled_text_centered(12, "SIGNAL", 2, 1);
	oled_text_centered(32, "LOST", 2, 1);
	oled_text_centered(54, "DRONE TERMINATED", 1, 1);
	oled_flush_all();
}

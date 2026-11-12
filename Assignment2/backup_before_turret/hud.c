/******************************************************************************
 * hud.c - OLED screens (128x64, 6x8 font = 21 columns x 8 rows)
 *
 *   splash    "THE LAST OF / EE2028 / ZOMBIE DRONE" for 1.5 s after boot
 *   STANDBY   T / H / P, ToF range, HABITABLE check, "DBL PRESS = BATTLE"
 *   BATTLE    energy bar, pitch / roll, altitude / heading, range,
 *             danger-zone WIPE countdown and score from the game
 *   ATTACKED  inverted screen, source, big 10..0 countdown, draining bar
 *   RESCUED   for 1 s
 ******************************************************************************/
#include "hud.h"
#include "oled.h"
#include "app_config.h"
#include "habitat.h"
#include <stdio.h>
#include <string.h>

static void title(const char *left, const char *right)
{
	oled_fill_rect(0, 0, 128, 9, 1);
	oled_text(2, 1, left, 1, 0);
	oled_text(126 - (int)strlen(right) * 6, 1, right, 1, 0);
}

static void range_line(int y, const HudState *s, int show_hand)
{
	char b[24];
	if (!s->tof_ok) return;
	if (s->range_mm >= TOF_NO_TARGET) strcpy(b, "RNG  ---");
	else sprintf(b, "RNG %3dcm%s", s->range_mm / 10,
	             !show_hand ? "" : s->range_mm < TOF_NEAR_MM ? " GRAB!" : s->range_mm < TOF_FAR_MM ? " HAND!" : "");
	oled_text(0, y, b, 1, 1);
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

static void standby(const HudState *s, const char *lnk)
{
	char b[24];
	title("STANDBY", lnk);
	if (s->press > 1.0f) {
		sprintf(b, "T %.1fC  H %.0f%%", s->temp, s->hum);  oled_text(0, 12, b, 1, 1);
		sprintf(b, "P %.1f hPa", s->press);                oled_text(0, 22, b, 1, 1);
		sprintf(b, "%s Tw%.1fC", habitat_ok(s->temp, s->hum, s->press) ? "HABITABLE" : "NOT HABITABLE",
				habitat_wet_bulb(s->temp, s->hum));
		oled_text(0, 42, b, 1, 1);
	} else {
		oled_text(0, 12, "READING SENSORS...", 1, 1);
	}
	range_line(32, s, 0);
	oled_hline(0, 53, 128, 1);
	oled_text(10, 56, "DBL PRESS = BATTLE", 1, 1);
}

static void battle(const HudState *s, const char *lnk)
{
	char b[24];
	title("BATTLE", lnk);
	oled_text(0, 11, "EN", 1, 1);
	oled_rect(14, 11, 72, 7);
	oled_fill_rect(16, 13, 68 * s->energy / 10, 3, 1);
	sprintf(b, "%d/10", s->energy);
	oled_text(92, 11, b, 1, 1);

	sprintf(b, "PIT%+4d ROL%+4d", (int)s->pitch, (int)s->roll);
	oled_text(0, 21, b, 1, 1);
	sprintf(b, "ALT%+5.1fm HDG %03d", s->alt, (int)s->heading);
	oled_text(0, 30, b, 1, 1);
	range_line(39, s, 1);

	if (s->wipe_sec >= 0) {
		oled_fill_rect(0, 48, 128, 9, 1);
		sprintf(b, "DANGER  WIPE %02d", s->wipe_sec);
		oled_text_centered(49, b, 1, 0);
	} else if (s->zone_clear) {
		oled_text_centered(49, "ZONE CLEAR", 1, 1);
	}

	if (s->score >= 0) {
		sprintf(b, "SCORE %d HAB %d/5", s->score, s->habitats);
		oled_text(0, 57, b, 1, 1);
	} else {
		oled_text(0, 57, "1x CHARGE 2x STBY", 1, 1);
	}
}

void hud_draw(const HudState *s)
{
	const char *lnk = s->link ? "PC" : "--";
	oled_clear();
	if (s->now - s->boot_ms < 1500)      splash(s);
	else if (s->attacked)                attacked(s);
	else if (s->now < s->rescued_until) {
		oled_text_centered(14, "RESCUED", 2, 1);
		oled_text_centered(38, "BACK TO BATTLE", 1, 1);
	}
	else if (!s->battle)                 standby(s, lnk);
	else                                 battle(s, lnk);
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

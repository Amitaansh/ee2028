/******************************************************************************
 * enhancements.c - glue between the minimum-spec game logic and the add-ons
 *
 * Owns the timing of the add-ons (50 Hz tilt stream, 2 Hz nav, 10 Hz HUD,
 * 100 Hz ToF poll) and decides the reaction to each event, e.g. an attack =
 * buzzer alarm + OLED countdown + "A," lines to the game.
 ******************************************************************************/
#include "enhancements.h"
#include "app_config.h"
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"
#include "comms.h"
#include "sensors.h"
#include "uart_rx.h"
#include "game_link.h"
#include "tilt.h"
#include "nav.h"
#include "buzzer.h"
#include "oled.h"
#include "hud.h"
#include "tof.h"
#include <stdio.h>

static uint8_t  oled_ok;
static int      cur_battle, cur_attacked, cur_energy;
static uint32_t t_boot, t_battle, t_tilt, t_nav, t_hud;
static uint8_t  fire_flag;

static uint8_t  attack_tof;
static uint32_t attack_t0, rescued_until;
static uint32_t hit_until;
static uint8_t  hit_shown;
static int      last_wipe = -1;
static uint32_t zone_clear_until;
static uint32_t t_button;                       /* last time the blue button was down */
static uint32_t tof_dbg_until, t_tofdbg;        /* E,TOF */

void enh_init(void)
{
	char b[200];
	t_boot = HAL_GetTick();

#if ENH_GAME_LINK
	game_link_init();
#endif
	buzzer_init();
#if ENH_OLED
	oled_ok = (uint8_t)oled_init();
#endif
	tof_init();

	/* buzzer self-test: three clear beeps at every boot */
	for (int i = 0; i < 3; i++) { buzzer_blocking_tone(120); HAL_Delay(100); }

	sprintf(b, "[ZD] Zombie Drone add-ons | build %s %s | CLK %luMHz\r\n", __DATE__, __TIME__,
			(unsigned long)(HAL_RCC_GetSysClockFreq() / 1000000UL));
	send(b);
	sprintf(b, "[ZD] OLED %s%s | TOF %s | BUZZER on PA3 (Grove D4): 3 beeps at boot\r\n",
			oled_ok ? "OK on " : "NOT FOUND", oled_ok ? oled_where() : "",
			tof_ok() ? "OK" : "NOT FOUND");
	send(b);
	if (!oled_ok) {
		send("[ZD] OLED search: ");
		send(oled_diag());
		send("\r\n");
	}
	sprintf(b, "[ZD] temperature offset %+.2f degC (T_OFFSET in app_config.h)\r\n", sensors_temp_offset());
	send(b);
	send("[ZD] Tera Term commands: E,TEST  E,GCAL  E,MCAL  E,TCAL[,degC]  E,CAL (in STANDBY)  E,TOF\r\n");
}

/* E,TEST: print what every add-on sees right now */
static void self_test(uint32_t now)
{
	char b[160];
	tilt_update();
	nav_update();
	sprintf(b, "[ZD] TEST pitch %.1f roll %.1f | range %u mm | alt %.1f m hdg %.0f | OLED %s | TOF %s | link %s\r\n",
			tilt_pitch(), tilt_roll(), tof_range_mm(), nav_altitude(), nav_heading(),
			oled_ok ? "OK" : "NOT FOUND", tof_ok() ? "OK" : "NOT FOUND",
			game_link_connected(now) ? "up" : "down");
	send(b);
	buzzer_beep(300);
	if (oled_ok) { hit_until = now + 600; oled_set_inverted(1); hit_shown = 1; }
}

/* ---------------- commands typed in Tera Term ---------------- */
static void run_command(uint32_t now)
{
	float arg;
	int c = game_link_take_command(&arg);
	if (!c) return;

	if (c == GL_CMD_TEST)     { self_test(now); return; }
	if (c == GL_CMD_CAL_SHOW) { sensors_print_calibration(); return; }
	if (c == GL_CMD_TOF_DEBUG) {
		char b[120];
		tof_dbg_until = now + TOF_DEBUG_MS;
		sprintf(b, "[ZD] ToF readings for %d s. Grab = closer than %d mm held %d ms (after > %d mm)\r\n",
				TOF_DEBUG_MS / 1000, TOF_NEAR_MM, TOF_HOLD_MS, TOF_FAR_MM);
		send(b);
		return;
	}

	/* the calibrations block for 2-10 s, so they are only allowed in STANDBY */
	if (cur_battle) { send("[ZD] calibrations only run in STANDBY mode (double press first)\r\n"); return; }
	buzzer_beep(80);
	if (c == GL_CMD_GCAL) sensors_calibrate_gyro(GYRO_CAL_MS);
	if (c == GL_CMD_MCAL) sensors_calibrate_magneto(MAG_CAL_MS);
	if (c == GL_CMD_TCAL) sensors_calibrate_temp(arg, arg < -999.0f);
	BSP_LED_On(LED2);                                  /* calibrations use the LED: STANDBY = LED on */
	buzzer_pattern((const uint16_t[]){ 60, 60, 60 }, 3);
	send("[ZD] done. Type E,CAL to print every value as one block for app_config.h\r\n");
}

/* ---------------- reactions to game events ---------------- */
static void game_events(uint32_t now)
{
	if (game_link_take_hit()) {                       /* crashed in the game: flash + beep */
		hit_until = now + 300;
		if (oled_ok && !hit_shown) { oled_set_inverted(1); hit_shown = 1; }
		if (!cur_attacked) buzzer_beep(60);
	}
	int w = game_link_wipe_sec();                     /* over a horde: tick in the last 3 s */
	if (w != last_wipe && w >= 0 && w <= 3 && !cur_attacked) buzzer_beep(30);
	last_wipe = w;
	if (game_link_take_zone_clear()) zone_clear_until = now + 2000;
	run_command(now);
}

static void draw_hud(uint32_t now)
{
	HudState s;
	s.now = now;                 s.boot_ms = t_boot;
	s.battle = cur_battle;       s.attacked = cur_attacked;   s.attack_src_tof = attack_tof;
	s.attack_t0 = attack_t0;     s.rescued_until = rescued_until;
	s.energy = cur_energy;
	s.pitch = tilt_pitch();      s.roll = tilt_roll();
	s.alt = nav_altitude();      s.heading = nav_heading();
	s.tof_ok = tof_ok();         s.range_mm = tof_range_mm();
	s.link = game_link_connected(now);
	s.wipe_sec = game_link_wipe_sec();
	s.zone_clear = now < zone_clear_until;
	s.score = game_link_score(); s.habitats = game_link_habitats();
	s.temp = T; s.press = P; s.hum = H;              /* updated every 1 s by sensors.c in STANDBY */
	hud_draw(&s);
}

void enh_update(uint32_t now, int battle, int attacked, int energy)
{
	cur_battle = battle; cur_attacked = attacked; cur_energy = energy;

#if ENH_GAME_LINK
	game_link_poll(now, battle, attacked, energy);
	game_events(now);
#endif
	buzzer_update(now);

	/* ToF: may only start an attack in BATTLE_MODE, not attacked, after the grace
	   period, and not while a finger is on the blue button (that's not a zombie) */
	if (BSP_PB_GetState(BUTTON_USER)) t_button = now;
	tof_update(now, battle && !attacked && (now - t_battle > TOF_GRACE_MS)
	                && (now - t_button > TOF_BUTTON_HOLDOFF_MS));
	if (tof_dbg_until) {
		if ((int32_t)(now - tof_dbg_until) >= 0) { tof_dbg_until = 0; send("[ZD] ToF readings off\r\n"); }
		else if (now - t_tofdbg >= 100) {
			char b[120];
			t_tofdbg = now;
			tof_debug(b, sizeof b);
			send(b);
		}
	}

	if (battle && now - t_tilt >= TILT_PERIOD_MS) {
		t_tilt += TILT_PERIOD_MS;
		if (now - t_tilt > 100) t_tilt = now;         /* fell behind: resync, don't burst */
		tilt_update();                                /* always: the HUD shows PIT / ROL */
#if ENH_GAME_LINK
		if (game_link_connected(now)) {
			game_link_send_tilt(tilt_pitch(), tilt_roll(), fire_flag, tof_range_mm(), energy);
			fire_flag = 0;
		}
#endif
	}
	if (battle && now - t_nav >= NAV_PERIOD_MS) {
		t_nav = now;
		nav_update();
#if ENH_GAME_LINK
		if (game_link_connected(now)) game_link_send_nav(nav_altitude(), nav_heading());
#endif
	}

	if (hit_shown && (int32_t)(now - hit_until) >= 0) { oled_set_inverted(0); hit_shown = 0; }
	if (oled_ok) {
		if (now - t_hud >= OLED_REFRESH_MS) { t_hud = now; draw_hud(now); }
		oled_flush_step();                            /* at most one 128-byte page (~3 ms) */
	}
}

/* ---------------- hooks called by drone.c ---------------- */
void enh_on_mode(int battle)
{
	uint32_t now = HAL_GetTick();
	cur_battle = battle;
	cur_attacked = 0;
	game_link_clear_events();
	if (battle) {
		t_battle = t_tilt = t_nav = now;
		tilt_reset();
		nav_reset();
		buzzer_beep(80);
	} else {
		static const uint16_t down[] = { 30, 50, 30, 50, 30 };
		buzzer_off();
		buzzer_pattern(down, 5);
	}
	t_hud = 0;                                        /* redraw now */
}

int enh_manual_fire(void)
{
#if ENH_GAME_LINK && ENH_MANUAL_FIRE
	return game_link_connected(HAL_GetTick());
#else
	return 0;
#endif
}

int enh_take_fire_request(void)
{
#if ENH_GAME_LINK
	return game_link_take_fire();
#else
	return 0;
#endif
}

void enh_on_fire_not_ready(void)
{
	buzzer_pattern((const uint16_t[]){ 40, 40, 40 }, 3);  /* "click click": not enough energy */
}

int enh_take_charge_request(void)
{
#if ENH_GAME_LINK
	if (game_link_take_charge() && cur_battle && !cur_attacked) {
		static const uint16_t chirp[] = { 25, 40, 25 };
		buzzer_pattern(chirp, 3);
		return 1;
	}
#endif
	return 0;
}

void enh_on_laser_fired(void)
{
	static const uint16_t zap[] = { 20, 30, 60 };
	fire_flag = 1;
	buzzer_pattern(zap, 3);
}

int enh_take_tof_grab(void)
{
	return tof_take_grab();
}

void enh_on_attacked(int source, uint32_t now)
{
	attack_tof = (source == ENH_SRC_TOF);
	attack_t0 = now;
	cur_attacked = 1;
	buzzer_alarm_seconds_left(10);
	buzzer_alarm(1);
#if ENH_GAME_LINK
	if (game_link_connected(now)) game_link_send_attack(10, attack_tof);
#endif
	t_hud = 0;
}

void enh_on_attack_tick(uint32_t now)
{
	int32_t left_ms = RESCUE_MS - (int32_t)(now - attack_t0);
	int secs = left_ms > 0 ? (int)((left_ms + 999) / 1000) : 0;
	buzzer_alarm_seconds_left(secs);
#if ENH_GAME_LINK
	if (game_link_connected(now)) game_link_send_attack(secs, attack_tof);
#endif
}

void enh_on_rescued(void)
{
	static const uint16_t two[] = { 70, 70, 70 };
	cur_attacked = 0;
	buzzer_alarm(0);
	buzzer_pattern(two, 3);
	rescued_until = HAL_GetTick() + 1000;
	tof_disarm();                                     /* the hand must leave before it can grab again */
	t_hud = 0;
}

void enh_on_terminated(void)
{
	buzzer_off();
	uart_rx_stop();
	if (oled_ok) hud_signal_lost();
	buzzer_blocking_tone(1500);                       /* one long tone, then silence */
	if (oled_ok) oled_power(0);
	tof_shutdown();
}

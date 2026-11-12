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
#include "laser.h"
#include "turret.h"
#include "tele_oled.h"
#include "button.h"
#include <stdio.h>

static uint8_t  oled_ok;
static int      cur_battle, cur_attacked, cur_energy;
static uint32_t t_boot, t_battle, t_tilt, t_nav, t_hud;
static uint8_t  fire_flag, fire_flag_req;

static uint8_t  attack_tof;
static uint32_t attack_t0, rescued_until;
static uint32_t hit_until;
static uint8_t  hit_shown;
static int      last_wipe = -1;
static uint32_t zone_clear_until;
static uint32_t t_button;                       /* last time the blue button was down */
static uint32_t tof_dbg_until, t_tofdbg;        /* E,TOF */
static uint32_t joy_dbg_until, t_joydbg;        /* E,JOY */
static uint8_t  tof_warned;                     /* "something is on the ToF" said once per BATTLE */
static uint8_t  tele_ok, turret_ok, aim_manual;  /* second OLED, turret, MANUAL AIM sub-mode */
static uint8_t  gui;                             /* GUI (PC game) active: joystick hold in BATTLE */
static uint8_t  rl, rl_fresh, rl_flags, rl_safe; /* REAL-LIFE mode (game tab), fresh E,AIM, its flags, SAFE latch */
static float    rl_pan, rl_tilt;                 /* aim from the PC (degrees) */
static uint32_t fired_until;
#if ENH_TURRET && TURRET_AIM_LOG_MS > 0
static uint32_t t_aimlog;
#endif
static UI_State ui;

void enh_init(void)
{
	char b[200];
	t_boot = HAL_GetTick();
	laser_init();                                     /* first: EN driven off before anything else */

#if ENH_GAME_LINK
	game_link_init();
#endif
	buzzer_init();
#if ENH_TELE_OLED
	tele_ok = (uint8_t)(UI_Init() != 0);              /* splash: "keep joystick centred" */
#endif
#if ENH_OLED
	oled_ok = (uint8_t)oled_init();                   /* HUD OLED, never on I2C1 or the turret pins */
#endif
	tof_init();
#if ENH_TURRET
	turret_ok = (uint8_t)turret_init();               /* measures the joystick centre: don't touch it */
	turret_limits(&ui.pan_left, &ui.pan_right, &ui.tilt_down, &ui.tilt_up);
#endif

	/* buzzer self-test: three clear beeps at every boot */
	for (int i = 0; i < 3; i++) { buzzer_blocking_tone(120); HAL_Delay(100); }
#if ENH_LASER && LASER_BOOT_BLIP_MS > 0
	laser_test(LASER_BOOT_BLIP_MS);                   /* short blip: laser wired correctly */
	HAL_Delay(LASER_BOOT_BLIP_MS + 10);
	laser_cancel();
#endif

	sprintf(b, "[ZD] Zombie Drone add-ons | build %s %s | CLK %luMHz\r\n", __DATE__, __TIME__,
			(unsigned long)(HAL_RCC_GetSysClockFreq() / 1000000UL));
	send(b);
	sprintf(b, "[ZD] HUD OLED %s%s | TOF %s | BUZZER on PA3 (Grove D4): 3 beeps at boot\r\n",
			oled_ok ? "OK on " : "NOT FOUND", oled_ok ? oled_where() : "",
			tof_ok() ? "OK" : "NOT FOUND");
	send(b);
#if ENH_LASER
	sprintf(b, "[ZD] LASER (KY-008) on PD2 = PMOD pin 7, glow %d%%, full brightness on every 'Laser fired!'\r\n", laser_glow_pct());
	send(b);
#endif
#if ENH_TELE_OLED
	sprintf(b, "[ZD] TELEMETRY OLED (SSD1306, I2C1 D15/D14) %s | joystick click = next page\r\n",
			tele_ok ? "OK" : "NOT FOUND (retrying every 3 s)");
	send(b);
#endif
#if ENH_TURRET
	sprintf(b, "[ZD] TURRET %s: pan D3 (PB0), tilt D6 (PB1), joystick A0/A1 + SW D2\r\n", turret_ok ? "OK" : "FAILED");
	send(b);
	send("[ZD] joystick: STANDBY click = next page, hold = recentre | BATTLE steers the turret, hold = open/close the GUI\r\n");
	send("[ZD] BATTLE: triple press = MANUAL AIM (joystick click fires) | GUI open: no auto-fire, joystick = forward/back + pan\r\n");
	if (turret_joy_fault()) {
#if ENH_TELE_OLED
		UI_Status("JOYSTICK WIRING?");
#endif
	}
#endif
#if ENH_TOF
	sprintf(b, "[ZD] ToF grab = hand within %d mm for %d readings (~%d ms). E,TOF shows it live\r\n",
			TOF_NEAR_MM, TOF_HIT_SAMPLES, TOF_HIT_SAMPLES * 33);
	send(b);
#endif
	if (!oled_ok) {
		send("[ZD] OLED search: ");
		send(oled_diag());
		send("\r\n");
	}
	sprintf(b, "[ZD] temperature offset %+.2f degC (T_OFFSET in app_config.h)\r\n", sensors_temp_offset());
	send(b);
	send("[ZD] Tera Term commands: E,TEST  E,GCAL  E,MCAL  E,TCAL[,degC]  E,CAL (in STANDBY)  E,TOF  E,JOY  E,JOYCAL  E,LASER[,glow%]\r\n");
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
		sprintf(b, "[ZD] ToF readings for %d s. Grab = %d NEAR readings (< %d mm, signal >= %.1f) once ARMED\r\n",
				TOF_DEBUG_MS / 1000, TOF_HIT_SAMPLES, TOF_NEAR_MM, (double)TOF_MIN_SIGNAL);
		send(b);
		return;
	}
	if (c == GL_CMD_JOY_DEBUG) {
		char b[120];
		joy_dbg_until = now + TOF_DEBUG_MS;
		sprintf(b, "[ZD] joystick readings for %d s: move the stick, press its button. Centred = ~2000 raw\r\n",
				TOF_DEBUG_MS / 1000);
		send(b);
		return;
	}
	if (c == GL_CMD_LASER) {
#if ENH_LASER
		char b[80];
		if (!cur_battle || cur_attacked) {            /* no laser in STANDBY (or while attacked) */
			send("[ZD] E,LASER only works in BATTLE MODE (double press first)\r\n");
			return;
		}
		sprintf(b, "[ZD] LASER on for %d ms (PD2 / PMOD pin 7)\r\n", LASER_TEST_MS);
		send(b);
		laser_test(LASER_TEST_MS);
#else
		send("[ZD] laser disabled (ENH_LASER 0 in app_config.h)\r\n");
#endif
		return;
	}
	if (c == GL_CMD_LASER_GLOW) {
		char b[100];
		laser_set_glow_pct((int)(arg + 0.5f));
		sprintf(b, "[ZD] laser glow %d%% (put this in LASER_IDLE_PCT to keep it)\r\n", laser_glow_pct());
		send(b);
		return;
	}

	/* the calibrations block for 2-10 s, so they are only allowed in STANDBY */
	if (cur_battle) { send("[ZD] calibrations only run in STANDBY mode (double press first)\r\n"); return; }
	buzzer_beep(80);
	if (c == GL_CMD_GCAL) sensors_calibrate_gyro(GYRO_CAL_MS);
	if (c == GL_CMD_MCAL) sensors_calibrate_magneto(MAG_CAL_MS);
	if (c == GL_CMD_JOY_CAL) turret_calibrate_dirs();
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

/* ---------------- REAL-LIFE mode (game tab "PLAY IN REAL LIFE") ---------------- */
static int rl_state(void)
{
	if (!rl) return RL_ST_OFF;
	if (rl_safe) return RL_ST_SAFE;
	if (!rl_fresh) return RL_ST_NO_AIM;
	if (rl_flags & RL_F_LOCK) return RL_ST_LOCK;
	if (rl_flags & RL_F_TARGET) return RL_ST_TRACK;
	return RL_ST_SEARCH;
}

static void set_rl(int on, const char *why)
{
#if ENH_GAME_LINK && ENH_REAL_LIFE
	char b[140];
	if (on == rl) { if (on) game_link_set_rl(1); return; }   /* E,RL,1 again: confirm (R,ON) */
	rl = (uint8_t)on;
	aim_manual = 0;                                   /* real-life mode replaces MANUAL AIM */
	fire_flag_req = 0;
	rl_fresh = rl_flags = rl_safe = 0;
	game_link_set_rl(on);
	sprintf(b, "[ZD] REAL-LIFE MODE %s%s\r\n", on ? "ON: webcam + YOLO aim the turret in BATTLE, the game fires on lock"
	                                             : "OFF: joystick steers the turret again", why);
	send(b);
	laser_inhibit(0);
	laser_dot(0);
	if (!on) turret_recentre();
#if ENH_TELE_OLED
	UI_Status(on ? "REAL LIFE ON" : "REAL LIFE OFF");
#endif
	buzzer_pattern((const uint16_t[]){ 30, 40, 30, 40, on ? 90 : 30 }, 5);
	t_hud = 0;
#else
	(void)on; (void)why;
#endif
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
	s.pos_valid = game_link_connected(now) && game_link_pos(now, &s.pos_x, &s.pos_z, &s.speed, &s.game_alt);
	s.fired_until = fired_until;
	s.manual_aim = aim_manual;
	s.gui = gui;
	s.rl_state = rl_state();
	hud_draw(&s);
}

/* ---------------- GUI on / off (joystick hold in BATTLE) ---------------- */
static void set_gui(int on, const char *why)
{
	char b[120];
	if (on == gui) return;
	if (on && rl) set_rl(0, " (GUI opened)");
	gui = (uint8_t)on;
	aim_manual = 0;                                   /* the GUI has its own fire controls */
	fire_flag_req = 0;
	game_link_set_gui(on);
	sprintf(b, "[ZD] GUI %s%s\r\n", on ? "OPEN: no auto-fire, joystick flies the drone (forward/back + pan)"
	                                    : "CLOSED: joystick steers the turret, laser auto-fires at >= 5/10", why);
	send(b);
	if (on) turret_recentre();                        /* the turret parks while the joystick flies */
#if ENH_TELE_OLED
	UI_Status(on ? "GUI OPEN" : "GUI CLOSED");
#endif
	buzzer_pattern((const uint16_t[]){ 30, 40, on ? 90 : 30 }, 3);
	t_hud = 0;
}

/* ---------------- turret (Yatin): joystick + pan/tilt servos ---------------- */
static void turret_task(uint32_t now)
{
#if ENH_TURRET
	if (!turret_ok) return;
	int mode = !cur_battle || cur_attacked ? TURRET_HOLD : gui ? TURRET_STICK_ONLY
	         : rl && rl_fresh ? TURRET_AIM : TURRET_STEER;
	if (mode == TURRET_AIM) turret_set_aim(rl_pan, rl_tilt);
	turret_update(now, mode);

	if (turret_take_hold()) {                         /* stick button held 0.5 s */
		if (!cur_battle) {
			turret_recentre();                        /* STANDBY: recentre the turret */
#if ENH_TELE_OLED
			UI_Recentre();
#endif
		} else if (!cur_attacked) {
#if ENH_GAME_LINK
			if (gui) set_gui(0, "");
			else if (game_link_connected(now)) set_gui(1, "");
			else {
				send("[ZD] GUI: the game is not connected (open it and click CONNECT first)\r\n");
				buzzer_pattern((const uint16_t[]){ 40, 40, 40 }, 3);
#if ENH_TELE_OLED
				UI_Status("NO GAME LINK");
#endif
			}
#endif
		}
	}
	if (turret_take_click()) {
		if (!cur_battle) {
#if ENH_TELE_OLED
			UI_NextPage();                            /* STANDBY: next telemetry page */
#endif
		} else if ((aim_manual || gui || rl) && !cur_attacked) {
			fire_flag_req = 1;                        /* MANUAL AIM, GUI or REAL LIFE: stick click fires */
		}
	}
#if TURRET_AIM_LOG_MS > 0
	if (cur_battle && !cur_attacked && !gui && turret_steering(now) && now - t_aimlog >= TURRET_AIM_LOG_MS) {
		char b[100];
		t_aimlog = now;
		sprintf(b, "Aim  X: %4d%%  Y: %4d%%  Dir: %-10s Pan: %+5.1f deg  Tilt: %+5.1f deg\r\n",
				turret_joy_x(), turret_joy_y(), turret_direction(), turret_pan_deg(), turret_tilt_deg());
		send(b);
	}
#endif
#endif
	(void)now;
}

/* ---------------- telemetry OLED (Yatin): snapshot + redraw ---------------- */
static void tele_task(uint32_t now)
{
#if ENH_TELE_OLED
	ui.mode = !cur_battle ? UI_STANDBY : (aim_manual || rl) ? UI_AIM : UI_BATTLE;
	ui.rl_state       = (uint8_t)rl_state();
	ui.sensor[S_T] = T; ui.sensor[S_P] = P; ui.sensor[S_H] = H;
	ui.sensor[S_A] = A; ui.sensor[S_G] = G; ui.sensor[S_M] = M;
	ui.sensors_valid  = P > 1.0f;                     /* after the first 1 s telemetry read */
	ui.energy         = cur_energy;
	ui.attacked       = (uint8_t)cur_attacked;
	ui.rescue_ms_left = cur_attacked && now - attack_t0 < RESCUE_MS ? RESCUE_MS - (now - attack_t0) : 0;
	ui.led_on         = HAL_GPIO_ReadPin(LED2_GPIO_PORT, LED2_PIN) == GPIO_PIN_SET;
	ui.armed          = aim_manual && !rl ? (cur_energy >= 5) : 1;
	ui.pan_deg        = turret_pan_deg();
	ui.tilt_deg       = turret_tilt_deg();
	ui.joy_x          = turret_joy_x();
	ui.joy_y          = turret_joy_y();
	UI_Task(&ui);                                     /* redraws when needed, sends a few rows (DMA) */
#endif
	(void)now;
}

void enh_update(uint32_t now, int battle, int attacked, int energy)
{
	cur_battle = battle; cur_attacked = attacked; cur_energy = energy;
#if ENH_GAME_LINK
	if (gui && !game_link_connected(now)) set_gui(0, " (PC link lost)");
	if (rl && !game_link_connected(now)) set_rl(0, " (PC link lost)");
#endif
	button_enable_triple(ENH_TRIPLE_AIM && ENH_TURRET && turret_ok && battle && !attacked && !gui && !rl);

#if ENH_GAME_LINK
	game_link_poll(now, battle, attacked, energy);
	game_events(now);
#if ENH_REAL_LIFE
	{
		int r = game_link_take_rl(), fl = 0;
		if (r >= 0) {
			if (r && gui) set_gui(0, " (real-life mode)");
			set_rl(r, "");
		}
		rl_fresh = (uint8_t)(rl && game_link_aim(now, &rl_pan, &rl_tilt, &fl));
		rl_flags = rl_fresh ? (uint8_t)fl : 0;
		if (rl_fresh) rl_safe = (uint8_t)((fl & RL_F_SAFE) != 0);   /* SAFE holds until the PC says clear */
		if (!rl) rl_safe = 0;
	}
#endif
#endif
	buzzer_update(now);
	laser_inhibit(rl && rl_safe);                     /* REAL LIFE: a person near the line of fire = dark */
	laser_dot(rl && rl_fresh && battle && !attacked && (rl_flags & RL_F_DOT));   /* calibration dot */
	laser_glow(!attacked && (battle || LASER_GLOW_STANDBY)    /* aiming glow, dark while attacked */
	           && !(rl && rl_fresh && (rl_flags & RL_F_DARK)));
	laser_update(now);

	/* ToF: may only start an attack in BATTLE_MODE, not attacked, after the grace
	   period, and not while a finger is on the blue button (that's not a zombie) */
	if (button_is_down()) t_button = now;           /* active low: pressed = PC13 LOW */
	tof_update(now, battle && !attacked && (now - t_battle > TOF_GRACE_MS)
	                && (now - t_button > TOF_BUTTON_HOLDOFF_MS));
	/* a cable or the shield resting on the ToF keeps it disarmed: say so once per BATTLE */
	if (battle && !attacked && !tof_warned && now - t_battle > 3000 && tof_blocked()) {
		char b[120];
		tof_warned = 1;
		sprintf(b, "[ZD] ToF: something is within %d mm of the sensor - hand grab off until it is clear (E,TOF)\r\n",
				TOF_NEAR_MM);
		send(b);
	}
	if (joy_dbg_until) {
		if ((int32_t)(now - joy_dbg_until) >= 0) { joy_dbg_until = 0; send("[ZD] joystick readings off\r\n"); }
		else if (now - t_joydbg >= 100) {
			char b[200];
			t_joydbg = now;
			turret_debug(b, sizeof b);
			send(b);
		}
	}
	if (tof_dbg_until) {
		if ((int32_t)(now - tof_dbg_until) >= 0) { tof_dbg_until = 0; send("[ZD] ToF readings off\r\n"); }
		else if (now - t_tofdbg >= 100) {
			char b[200];
			t_tofdbg = now;
			tof_debug(b, sizeof b);
			send(b);
		}
	}

	if (now - t_tilt >= TILT_PERIOD_MS) {             /* tilt in every mode: the HUD shows the attitude */
		t_tilt += TILT_PERIOD_MS;
		if (now - t_tilt > 100) t_tilt = now;         /* fell behind: resync, don't burst */
		tilt_update();
#if ENH_GAME_LINK
		if (battle && game_link_connected(now)) {     /* the stream to the game: BATTLE only */
			game_link_send_tilt(tilt_pitch(), tilt_roll(), fire_flag, tof_range_mm(), energy,
			                    gui && !attacked ? turret_joy_x() : 0, gui && !attacked ? turret_joy_y() : 0);
			fire_flag = 0;
		}
#endif
	}
	if (now - t_nav >= NAV_PERIOD_MS) {               /* heading + baro altitude for the HUD in every mode */
		t_nav = now;
		nav_update();
#if ENH_GAME_LINK
		if (battle && game_link_connected(now)) game_link_send_nav(nav_altitude(), nav_heading());
#endif
	}

	turret_task(now);
	tele_task(now);

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
	aim_manual = 0;                                   /* every mode change starts in AUTO FIRE */
	laser_dot(0);
	fire_flag_req = 0;
	game_link_clear_events();
	(void)tof_take_grab();                            /* a grab from before the mode change doesn't count */
	laser_cancel();
	if (battle) {
		t_battle = t_tilt = t_nav = now;
		tof_warned = 0;
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

/* 1 = the player fires by hand (no auto-fire): MANUAL AIM, or the GUI is open */
int enh_manual_fire(void)
{
	if (aim_manual || rl) return 1;                   /* REAL LIFE: the game fires on lock, no auto-fire */
#if ENH_GAME_LINK && ENH_MANUAL_FIRE
	return gui;
#else
	return 0;
#endif
}

int enh_take_fire_request(void)
{
	int f = fire_flag_req;                            /* joystick click (MANUAL AIM or GUI) */
	fire_flag_req = 0;
#if ENH_GAME_LINK
	if (game_link_take_fire() && (gui || rl)) f = 1;  /* Space / click in the game, or a YOLO lock */
#endif
	if (f && rl && rl_safe) {                         /* REAL LIFE: never at a person */
		f = 0;
		send("[ZD] REAL LIFE: not firing, a person is near the line of fire\r\n");
		buzzer_pattern((const uint16_t[]){ 40, 40, 40 }, 3);
	}
	return f;
}

/* every button event passes through here first: it is shown on the telemetry OLED,
 * and a triple press in BATTLE toggles MANUAL AIM (Yatin's sub-mode) */
int enh_on_button(int ev, int battle, int attacked)
{
	if (ev == BTN_NONE) return ev;
	if (ev == BTN_TRIPLE) {
		if (battle && !attacked && !gui && turret_ok) {
			aim_manual = !aim_manual;
			fire_flag_req = 0;
			send(aim_manual ? "Entering MANUAL AIM MODE\r\n" : "Leaving MANUAL AIM MODE (auto fire)\r\n");
#if ENH_TELE_OLED
			UI_Button(3);                             /* "3x -> AIM MODE" / "3x -> AUTO FIRE" */
#endif
			buzzer_pattern((const uint16_t[]){ 30, 30, 30, 30, 30 }, 5);
			t_hud = 0;
		}
		return BTN_NONE;                              /* drone.c never sees a triple press */
	}
#if ENH_TELE_OLED
	UI_Button(ev == BTN_DOUBLE ? 2 : 1);              /* a long press counts as a single press */
#endif
	(void)battle; (void)attacked;
	return ev;
}

void enh_on_charged(int energy_now)
{
#if ENH_TELE_OLED
	UI_Charged(energy_now);
#endif
	(void)energy_now;
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

void enh_on_laser_fired(int energy_left)
{
	static const uint16_t zap[] = { 20, 30, 60 };
	fire_flag = 1;
	fired_until = HAL_GetTick() + 600;                /* HUD: window flash + "LASER FIRED" */
#if ENH_TELE_OLED
	UI_Fired(energy_left);
#endif
	(void)energy_left;
	buzzer_pattern(zap, 3);
	laser_shot();                                     /* the real laser fires too */
}

int enh_take_tof_grab(void)
{
	if (!tof_take_grab()) return 0;
	char b[100];
	tof_grab_info(b, sizeof b);
	send(b);
	return 1;
}

void enh_on_attacked(int source, uint32_t now)
{
	attack_tof = (source == ENH_SRC_TOF);
	attack_t0 = now;
	cur_attacked = 1;
	laser_cancel();                                   /* grabbed / flipped: the weapon drops */
	laser_glow(0);
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
	laser_kill();
	buzzer_off();
	uart_rx_stop();
	if (oled_ok) hud_signal_lost();
#if ENH_TELE_OLED
	UI_ShowTerminated();                              /* telemetry OLED: SIGNAL LOST too */
#endif
	buzzer_blocking_tone(1500);                       /* one long tone, then silence */
	if (oled_ok) oled_power(0);
	tof_shutdown();
}

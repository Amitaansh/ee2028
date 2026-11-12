/******************************************************************************
 * drone.c - the game logic
 *
 *   STANDBY_MODE : LED on, telemetry every 1 s, double press -> BATTLE
 *   BATTLE_MODE  : LED blinks 1 Hz, single press charges the laser,
 *                  double press -> STANDBY, flipping the board = attacked
 *   attacked     : "The Last of EE2028" - LED blinks 2 Hz, double press
 *                  within RESCUE_MS rescues the drone, else it is terminated
 *
 * Enhancements: the calls marked [ENH] report events to enhancements.c
 * (OLED HUD, buzzer, tilt stream to the PC game, ToF hand grab). The ToF grab
 * is a second way to get attacked, next to flipping the board.
 ******************************************************************************/
#include "drone.h"
#include "app_config.h"
#include "button.h"
#include "comms.h"
#include "sensors.h"
#include "enhancements.h"
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"
#include <stdio.h>

/* ---------------- game state ---------------- */
static Mode     mode = STANDBY_MODE;
static uint8_t  attacked = 0;          /* 1 = "The Last of EE2028" */
static int      energy = 0;            /* laser energy in tenths (0..10) */
static uint32_t t_tel, t_led, t_acc, t_att, t_attack_start;

/* ---------------- mode transitions ---------------- */
static void enter_standby(void)
{
	mode = STANDBY_MODE;
	attacked = 0;
	BSP_LED_On(LED2);
	t_tel = HAL_GetTick();
	send("Entering STANDBY MODE\r\n");
	enh_on_mode(0);                                          /* [ENH] */
}

static void enter_battle(void)
{
	mode = BATTLE_MODE;
	attacked = 0;
	BSP_LED_Off(LED2);
	t_led = t_acc = HAL_GetTick();
	send("Entering BATTLE MODE\r\n");
	enh_on_mode(1);                                          /* [ENH] */
}

/* the drone is attacked: "The Last of EE2028" starts */
static void start_attack(uint32_t now, int source)
{
	attacked = 1;
	t_attack_start = now;
	t_att = now;
	t_led = now;
	send("Drone Was Attacked! \r\n");
	enh_on_attacked(source, now);                            /* [ENH] alarm, OLED countdown */
}

/* ---------------- STANDBY ---------------- */
static void standby_update(uint32_t now, int ev)
{
	char buf[160];

	if (ev == BTN_DOUBLE) {                      /* double press -> BATTLE */
		enter_battle();
		return;
	}
	if (now - t_tel >= 1000) {                   /* every 1 s */
		t_tel = now;
		read_sensors();

		int v = 0;
		v |= check("T", T, T_LO, T_HI, "degC");
		v |= check("P", P, P_LO, P_HI, "hPa");
		v |= check("H", H, H_LO, H_HI, "%RH");
		v |= check("A", A, A_LO, A_HI, "m/s^2");
		v |= check("G", G, G_LO, G_HI, "dps");
		v |= check("M", M, M_LO, M_HI, "gauss");

		if (!v) {                                /* all normal -> telemetry */
			sprintf(buf, "T: %.2f degC, P: %.2f hPa, H: %.2f %%RH, A: %.2f m/s^2, G: %.2f dps, M: %.2f gauss\r\n",
					T, P, H, A, G, M);
			send(buf);
		}
	}
}

/* ---------------- BATTLE: normal fighting ---------------- */
static void battle_fighting(uint32_t now, int ev)
{
	char buf[160];

	if (ev == BTN_DOUBLE) {                      /* double press -> STANDBY */
		enter_standby();
		return;
	}
	int manual = enh_manual_fire();             /* [ENH] 1 = PC game connected: the player fires */

	/* single press -> charge 3/10 ([ENH] also a game charging pylon; a long press
	   counts as a single press unless the game is connected) */
	if (ev == BTN_SINGLE || (ev == BTN_LONG && !manual) || enh_take_charge_request()) {
		energy += 3;
		if (energy > 10) energy = 10;
		sprintf(buf, "Laser charging: %d/10\r\n", energy);
		send(buf);
	}
	if (!manual) {
		while (energy >= 5) {                    /* auto fire, costs 5/10 (spec) */
			energy -= 5;
			sprintf(buf, "Laser fired! Charge left: %d/10\r\n", energy);
			send(buf);
			enh_on_laser_fired();                            /* [ENH] */
		}
	} else if (ev == BTN_LONG || enh_take_fire_request()) {   /* [ENH] game mode: fire on demand */
		if (energy >= 5) {
			energy -= 5;
			sprintf(buf, "Laser fired! Charge left: %d/10\r\n", energy);
			send(buf);
			enh_on_laser_fired();
		} else {
			sprintf(buf, "Laser not ready: %d/10 (needs 5/10)\r\n", energy);
			send(buf);
			enh_on_fire_not_ready();
		}
	}

	/* upside-down check (accelerometer Z, +Z points to ground when level) */
	if (now - t_acc >= 100) {
		t_acc = now;
		if (read_accel_z_mg() < FLIP_MG) {
			start_attack(now, ENH_SRC_FLIP);
			return;
		}
	}

	/* [ENH] second trigger: a "zombie hand" grabs the drone (ToF range < ~8 cm) */
	if (enh_take_tof_grab()) start_attack(now, ENH_SRC_TOF);
}

/* ---------------- BATTLE: "The Last of EE2028" ---------------- */
static void battle_attacked(uint32_t now, int ev)
{
	if (ev == BTN_DOUBLE) {                                  /* rescue */
		attacked = 0;
		send("Rescued! Back to BATTLE MODE\r\n");
		enh_on_rescued();                                    /* [ENH] */
	}
	else if (now - t_attack_start >= RESCUE_MS) {            /* no rescue in 10 s */
		send("Drone terminated. Communication cut off.\r\n");
		enh_on_terminated();                                 /* [ENH] SIGNAL LOST + long tone */
		comms_shutdown();
		BSP_LED_Off(LED2);
		__disable_irq();
		while (1) { }
	}
	else if (now - t_att >= 1000) {
		t_att = now;
		send("Drone Was Attacked! \r\n");
		enh_on_attack_tick(now);                             /* [ENH] A,<sec> line, faster alarm */
	}
}

static void battle_update(uint32_t now, int ev)
{
	/* LED: 1 Hz normally, 2 Hz when attacked */
	if (now - t_led >= (attacked ? 250u : 500u)) {
		t_led = now;
		BSP_LED_Toggle(LED2);
	}

	if (!attacked) battle_fighting(now, ev);
	else           battle_attacked(now, ev);
}

/* ---------------- public ---------------- */
void drone_start(void)
{
	enter_standby();
}

void drone_update(uint32_t now, int button_ev)
{
	enh_update(now, mode == BATTLE_MODE, attacked, energy);  /* [ENH] stream, HUD, buzzer, ToF */

	if (mode == STANDBY_MODE) standby_update(now, button_ev);
	else                      battle_update(now, button_ev);
}

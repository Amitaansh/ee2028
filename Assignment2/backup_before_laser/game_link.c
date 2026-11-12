/******************************************************************************
 * game_link.c - protocol with the PC game (see game_link.h for the messages)
 ******************************************************************************/
#include "game_link.h"
#include "app_config.h"
#include "comms.h"
#include "uart_rx.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

static uint32_t last_rx;                   /* tick of the last line from the PC, 0 = never */
static uint8_t  hit, charge, fire, zone_clear, was_connected;
static uint8_t  command;                   /* GL_CMD_* typed in Tera Term, 0 = none */
static float    command_arg;
static int      wipe = -1, score = -1, habitats = 0;

void game_link_init(void)
{
	uart_rx_init(&huart1);
}

int game_link_connected(uint32_t now)
{
	return last_rx && (now - last_rx) < LINK_TIMEOUT_MS;
}

static void handle(const char *s, uint32_t now, int battle, int attacked, int energy)
{
	if (!game_link_connected(now)) send("[ZD] PC link up (receiving from the PC)\r\n");
	last_rx = now ? now : 1;
	was_connected = 1;
	if (strncmp(s, "E,", 2) != 0) return;
	s += 2;

	if (strcmp(s, "PING") == 0) {
		char b[48];
		sprintf(b, "Z,STATUS,%s,%d,%d\r\n", battle ? "BATTLE" : "STANDBY", attacked, energy);
		send(b);
	} else if (strcmp(s, "TEST") == 0) {           /* commands typed in Tera Term */
		command = GL_CMD_TEST;
	} else if (strncmp(s, "TCAL", 4) == 0) {       /* E,TCAL[,<reference degC>] */
		command = GL_CMD_TCAL;
		command_arg = (s[4] == ',') ? (float)atof(s + 5) : -1000.0f;   /* -1000 = use the power-up reading */
	} else if (strcmp(s, "GCAL") == 0) {
		command = GL_CMD_GCAL;
	} else if (strcmp(s, "MCAL") == 0) {
		command = GL_CMD_MCAL;
	} else if (strcmp(s, "CAL") == 0) {
		command = GL_CMD_CAL_SHOW;
	} else if (strcmp(s, "TOF") == 0) {
		command = GL_CMD_TOF_DEBUG;
	} else if (strcmp(s, "HIT") == 0) {
		hit = 1;
	} else if (strcmp(s, "CHARGE") == 0) {
		charge = 1;
	} else if (strcmp(s, "FIRE") == 0) {             /* Space / click in the game */
		fire = 1;
	} else if (strncmp(s, "WIPE,", 5) == 0) {
		wipe = atoi(s + 5);
	} else if (strcmp(s, "SAFE") == 0) {
		if (wipe >= 0) zone_clear = 1;
		wipe = -1;
	} else if (strncmp(s, "SCORE,", 6) == 0) {
		const char *c = strchr(s + 6, ',');
		score = atoi(s + 6);
		if (c) habitats = atoi(c + 1);
	}
}

void game_link_poll(uint32_t now, int battle, int attacked, int energy)
{
	char l[64];
	while (uart_rx_read_line(l, sizeof(l))) handle(l, now, battle, attacked, energy);
	if (was_connected && !game_link_connected(now)) {
		was_connected = 0;
		send("[ZD] PC link lost (no E,PING for 3 s)\r\n");
	}
}

void game_link_send_tilt(float pitch, float roll, int fire, uint16_t range_mm, int energy)
{
	char b[64];
	sprintf(b, "C,%.1f,%.1f,%d,%u,%d\r\n", pitch, roll, fire, range_mm, energy);
	send(b);
}

void game_link_send_nav(float alt_m, float heading)
{
	char b[40];
	sprintf(b, "N,%.1f,%.0f\r\n", alt_m, heading);
	send(b);
}

void game_link_send_attack(int secs_left, int source_tof)
{
	char b[32];
	sprintf(b, "A,%d,%s\r\n", secs_left, source_tof ? "TOF" : "FLIP");
	send(b);
}

int game_link_take_hit(void)       { int r = hit;        hit = 0;        return r; }
int game_link_take_charge(void)    { int r = charge;     charge = 0;     return r; }
int game_link_take_fire(void)      { int r = fire;       fire = 0;       return r; }
int game_link_take_zone_clear(void){ int r = zone_clear; zone_clear = 0; return r; }
int game_link_take_command(float *arg)
{
	int c = command;
	command = 0;
	if (arg) *arg = command_arg;
	return c;
}
int game_link_wipe_sec(void)       { return wipe; }
int game_link_score(void)          { return score; }
int game_link_habitats(void)       { return habitats; }

void game_link_clear_events(void)
{
	hit = charge = fire = zone_clear = 0;
	wipe = -1;
}

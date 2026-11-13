/******************************************************************************
 * game_link.h - ASCII protocol between the board and the PC game
 *
 * Board -> PC (only while the game is connected, so Tera Term stays clean):
 *   C,<pitch_deg>,<roll_deg>,<fire>,<range_mm>,<energy>   50 Hz in BATTLE_MODE
 *   N,<baro_alt_m>,<heading_deg>                          2 Hz in BATTLE_MODE
 *   A,<sec_left>,<FLIP|TOF>                               1 Hz while attacked
 *   Z,STATUS,<STANDBY|BATTLE>,<attacked>,<energy>         reply to E,PING
 * PC -> board:
 *   E,PING  E,HIT  E,CHARGE  E,FIRE  E,WIPE,<sec>  E,SAFE  E,SCORE,<score>,<habitats>
 * Commands typed in Tera Term (STANDBY mode for the calibrations):
 *   E,TEST           print tilt / range / devices, beep, flash the OLED
 *   E,GCAL           gyroscope bias (keep the board still, 2 s)
 *   E,MCAL           magnetometer (rotate the board in all directions, 10 s)
 *   E,TCAL[,<degC>]  temperature offset (reference from a thermometer, or the power-up reading)
 *   E,CAL            print every calibration value as one block to paste into app_config.h
 *   E,TOF            print the ToF readings 10x a second for 15 s (any mode), to tune TOF_*
 *   E,LASER          laser module on for LASER_TEST_MS (any mode), to check the wiring
 * The game sends E,PING every 2 s; that is how the board knows it is there.
 ******************************************************************************/
#ifndef GAME_LINK_H
#define GAME_LINK_H

#include <stdint.h>

void game_link_init(void);

/* read and act on every complete line from the PC; answers E,PING */
void game_link_poll(uint32_t now, int battle, int attacked, int energy);
int  game_link_connected(uint32_t now);        /* 1 if the game pinged recently */

/* board -> PC */
void game_link_send_tilt(float pitch, float roll, int fire, uint16_t range_mm, int energy);
void game_link_send_nav(float alt_m, float heading);
void game_link_send_attack(int secs_left, int source_tof);

/* PC -> board events (take_* functions return 1 once per event) */
int  game_link_take_hit(void);                 /* drone crashed in the game */
int  game_link_take_charge(void);              /* flew through a charging pylon */
int  game_link_take_fire(void);                /* player pressed fire in the game */
int  game_link_wipe_sec(void);                 /* >= 0 while over a zombie horde, -1 otherwise */
int  game_link_take_zone_clear(void);          /* just left a horde zone */
#define GL_CMD_TEST      1
#define GL_CMD_TCAL      2                     /* arg = reference degC, -1000 = power-up reading */
#define GL_CMD_GCAL      3
#define GL_CMD_MCAL      4
#define GL_CMD_CAL_SHOW  5
#define GL_CMD_TOF_DEBUG 6                     /* E,TOF: stream ToF readings for TOF_DEBUG_MS */
#define GL_CMD_LASER     7                     /* E,LASER: laser module test */
int  game_link_take_command(float *arg);       /* GL_CMD_* once per typed command, 0 = none */
int  game_link_score(void);                    /* -1 until the game sends a score */
int  game_link_habitats(void);
void game_link_clear_events(void);             /* forget pending events (mode change) */

#endif /* GAME_LINK_H */

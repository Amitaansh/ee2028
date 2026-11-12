/******************************************************************************
 * tele_oled.h - second OLED: the telemetry display (written by Yatin)
 *
 * 0.96" SSD1306 128x64 on hardware I2C1: SCL D15 (PB8), SDA D14 (PB9), 0x3C.
 * Driven by DMA one 8-row band at a time, so the main loop never waits for it.
 *   STANDBY   4 pages of sensor cards with threshold gauges (joystick click = next page)
 *   BATTLE    laser battery, charge, shots fired, LED mirror
 *   AIM       turret window with pan / tilt angles (while the joystick steers)
 *   ATTACKED  banner + 10 s rescue countdown
 * The drone HUD (attitude, heading, altitude) is on the other OLED (hud.c).
 ******************************************************************************/
#ifndef TELE_OLED_H
#define TELE_OLED_H

#include <stdint.h>

enum { S_T, S_P, S_H, S_A, S_G, S_M, NSENS };
typedef enum { UI_STANDBY, UI_BATTLE, UI_AIM } UI_Mode;

typedef struct {
	UI_Mode  mode;
	float    sensor[NSENS];             /* same values and units as the UART telemetry */
	uint8_t  sensors_valid;
	int      energy;                    /* laser energy in tenths, 0..10               */
	uint8_t  attacked;                  /* "The Last of EE2028" is active              */
	uint32_t rescue_ms_left;
	uint8_t  led_on;                    /* LED2, so the on-screen LED blinks in sync   */
	uint8_t  armed;                     /* AIM: joystick moves the turret              */
	float    pan_deg, tilt_deg;         /* mount angles, + = right / up                */
	float    pan_left, pan_right;       /* angles at the calibrated ends               */
	float    tilt_down, tilt_up;
	int      joy_x, joy_y;              /* stick, -100..+100 %                         */
} UI_State;

int  UI_Init(void);                     /* splash screen; returns the OLED I2C address, 0 = not found */
void UI_Task(const UI_State *s);        /* redraws when needed, sends a few changed rows; never blocks long */
void UI_Button(int presses);            /* 1 / 2 = single / double press               */
void UI_Charged(int energy_now);
void UI_Fired(int energy_now);
void UI_NextPage(void);                 /* next STANDBY telemetry page                 */
void UI_ShowTerminated(void);           /* last screen, sent at once                   */
void UI_Recentre(void);                 /* "mount recentring" notice                   */
void UI_Status(const char *text);       /* short message in the status bar (1.5 s)     */

#endif /* TELE_OLED_H */

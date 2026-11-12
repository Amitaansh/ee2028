/******************************************************************************
 * turret.h - pan / tilt laser turret steered by an analog joystick (Yatin)
 *
 *   Servos    PAN  D3 (PB0, TIM3_CH3), TILT D6 (PB1, TIM3_CH4), 50 Hz, red 5V, brown GND
 *   Joystick  VRx A0 (PC5, ADC1_IN14), VRy A1 (PC4, ADC1_IN13), SW D2 (PD14), VCC 3V3
 *
 * The stick sets the turning SPEED; the speed eases in (no jerks) and the pulse
 * never leaves the calibrated ends of this mount. The KY-008 laser sits on the
 * turret, so it fires wherever the turret points.
 *   STANDBY            stick click = next page on the telemetry OLED
 *   BATTLE             stick steers the turret (laser auto-fires at >= 5/10, spec)
 *   any mode           stick held 0.5 s = recentre pan and tilt to 0,0
 *   TURRET_MANUAL_AIM  1: a LONG blue-button press in BATTLE toggles MANUAL AIM
 *                      (no auto-fire, stick click fires). Off by default because the
 *                      checklist requires auto-fire at >= 5/10.
 ******************************************************************************/
#ifndef TURRET_H
#define TURRET_H

#include <stdint.h>

int   turret_init(void);                    /* joystick centre (keep it still!) + servos; 1 = OK */
void  turret_update(uint32_t now, int battle, int attacked);   /* every loop pass */
int   turret_take_click(void);              /* 1 once per short stick click (not consumed by turret) */
int   turret_take_recentre(void);           /* 1 once when a recentre starts */
int   turret_steering(uint32_t now);        /* 1 if the stick moved the turret in the last few s */
float turret_pan_deg(void);
float turret_tilt_deg(void);
void  turret_limits(float *pan_left, float *pan_right, float *tilt_down, float *tilt_up);
int   turret_joy_x(void);
int   turret_joy_y(void);
const char *turret_direction(void);         /* 8-way name of the stick, for the UART log */

#endif /* TURRET_H */

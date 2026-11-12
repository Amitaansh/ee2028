/******************************************************************************
 * turret.h - pan / tilt laser turret steered by an analog joystick (Yatin)
 *
 *   Servos    PAN  D3 (PB0, TIM3_CH3), TILT D6 (PB1, TIM3_CH4), 50 Hz, red 5V, brown GND
 *   Joystick  VRx A0 (PC5, ADC1_IN14), VRy A1 (PC4, ADC1_IN13), SW D2 (PD14), VCC 3V3
 *
 * The stick sets the turning SPEED; the speed eases in (no jerks) and the pulse
 * never leaves the calibrated ends of this mount. The KY-008 laser sits on the
 * turret, so it fires wherever the turret points. What the stick does in each
 * mode is decided in enhancements.c (see the "controls" block in app_config.h).
 ******************************************************************************/
#ifndef TURRET_H
#define TURRET_H

#include <stdint.h>

#define TURRET_HOLD        0                /* servos hold still, stick ignored */
#define TURRET_STEER       1                /* stick steers pan / tilt */
#define TURRET_STICK_ONLY  2                /* stick read (GUI flight controls), servos hold */
#define TURRET_AIM         3                /* [ENH] servos follow turret_set_aim() (real-life mode, the PC's YOLO);
                                               moving the stick takes over for RL_STICK_OVERRIDE_MS */

int   turret_init(void);                    /* joystick centre (keep it still!) + servos; 1 = OK */
void  turret_update(uint32_t now, int mode);   /* every loop pass */
void  turret_recentre(void);                /* pan and tilt glide back to 0, 0 */
void  turret_set_aim(float pan_deg, float tilt_deg);   /* [ENH] TURRET_AIM target, degrees from the centre, + = right / up */
int   turret_take_click(void);              /* 1 once per short stick click */
int   turret_take_hold(void);               /* 1 once when the stick button is held 0.5 s */
int   turret_steering(uint32_t now);        /* 1 if the stick moved the turret in the last few s */
float turret_pan_deg(void);
float turret_tilt_deg(void);
void  turret_limits(float *pan_left, float *pan_right, float *tilt_down, float *tilt_up);
int   turret_joy_x(void);
int   turret_joy_y(void);
const char *turret_direction(void);         /* 8-way name of the stick, for the UART log */
int   turret_joy_fault(void);               /* 1 = the stick rests near a rail: wiring fault, stick ignored */
int   turret_debug(char *buf, int len);     /* E,JOY: raw X/Y, centre, %, button, pan/tilt */

#endif /* TURRET_H */

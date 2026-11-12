/******************************************************************************
 * turret.c - joystick + pan / tilt servos (Yatin's sections 4 and 5, unchanged
 * apart from the wrapper at the bottom). See turret.h for wiring and controls.
 ******************************************************************************/
#include "turret.h"
#include "app_config.h"
#include "comms.h"
#include "main.h"
#include <string.h>
#include <stdlib.h>
#include <math.h>

#if ENH_TURRET

static int turret_ok;
static void fatal(const char *msg) { send(msg); turret_ok = 0; }

/* =============================================================================
 * 4. JOYSTICK - two pots on ADC1 + a push switch
 * ============================================================================= */
#define JOY_SW_PORT      GPIOD          /* D2 = PD14 */
#define JOY_SW_PIN       GPIO_PIN_14
#define JOY_INVERT_X     1              /* 1 = reverse left/right */
#define JOY_INVERT_Y     1              /* 1 = reverse up/down    */
#define JOY_DEADZONE     10             /* % of travel ignored around the centre */
#define JOY_DIR_PCT      30             /* push further than this before a direction is named */
#define JOY_DEBOUNCE_MS  20
#define JOY_HOLD_MS     500             /* hold the stick button this long = recentre the mount */

static ADC_HandleTypeDef hadc1;
static const uint32_t JOY_CHANNEL[2] = { ADC_CHANNEL_14, ADC_CHANNEL_13 };   /* X = A0 (PC5), Y = A1 (PC4) */
static const uint8_t  JOY_INVERT[2]  = { JOY_INVERT_X, JOY_INVERT_Y };
static uint16_t joy_rest[2];            /* raw reading with the stick released (follows slow drift) */
static uint16_t joy_last[2];            /* previous raw reading */
static uint8_t  joy_still[2];           /* consecutive steady readings */
static int      joy_pct[2];             /* last position, -100..+100 % (also drawn on the OLED) */

static void joystick_init(void)
{
	GPIO_InitTypeDef g = {0};

	__HAL_RCC_GPIOC_CLK_ENABLE();
	__HAL_RCC_GPIOD_CLK_ENABLE();
	__HAL_RCC_ADC_CLK_ENABLE();

	g.Pin  = GPIO_PIN_5 | GPIO_PIN_4;                     /* VRx, VRy */
	g.Mode = GPIO_MODE_ANALOG_ADC_CONTROL;
	HAL_GPIO_Init(GPIOC, &g);

	g.Pin  = JOY_SW_PIN;                                  /* SW: pull-up, pressed = LOW */
	g.Mode = GPIO_MODE_INPUT;
	g.Pull = GPIO_PULLUP;
	HAL_GPIO_Init(JOY_SW_PORT, &g);

	/* 12-bit single conversions. The ADC averages 16 samples in hardware
	 * (oversampling), so one start/poll gives a smooth reading. */
	hadc1.Instance                    = ADC1;
	hadc1.Init.ClockPrescaler         = SystemCoreClock > 8000000u ? ADC_CLOCK_SYNC_PCLK_DIV4 : ADC_CLOCK_SYNC_PCLK_DIV2;   /* 20 / 2 MHz */
	hadc1.Init.Resolution             = ADC_RESOLUTION_12B;
	hadc1.Init.DataAlign              = ADC_DATAALIGN_RIGHT;
	hadc1.Init.ScanConvMode           = ADC_SCAN_DISABLE;
	hadc1.Init.EOCSelection           = ADC_EOC_SINGLE_CONV;
	hadc1.Init.NbrOfConversion        = 1;
	hadc1.Init.ExternalTrigConv       = ADC_SOFTWARE_START;
	hadc1.Init.Overrun                = ADC_OVR_DATA_OVERWRITTEN;
	hadc1.Init.OversamplingMode       = ENABLE;
	hadc1.Init.Oversampling.Ratio                 = ADC_OVERSAMPLING_RATIO_16;
	hadc1.Init.Oversampling.RightBitShift         = ADC_RIGHTBITSHIFT_4;          /* sum / 16 */
	hadc1.Init.Oversampling.TriggeredMode         = ADC_TRIGGEREDMODE_SINGLE_TRIGGER;
	hadc1.Init.Oversampling.OversamplingStopReset = ADC_REGOVERSAMPLING_CONTINUED_MODE;
	if (HAL_ADC_Init(&hadc1) != HAL_OK || HAL_ADCEx_Calibration_Start(&hadc1, ADC_SINGLE_ENDED) != HAL_OK)
	{ fatal("[ZD] TURRET: joystick ADC init failed (is HAL_ADC_MODULE_ENABLED defined?)\r\n"); return; }
}

/* one axis, 0..4095 */
static uint16_t adc_read(uint32_t channel)
{
	ADC_ChannelConfTypeDef c = {0};
	uint16_t v = 2048;                                    /* centre if anything fails */

	c.Channel      = channel;
	c.Rank         = ADC_REGULAR_RANK_1;
	c.SamplingTime = SystemCoreClock > 8000000u ? ADC_SAMPLETIME_247CYCLES_5 : ADC_SAMPLETIME_47CYCLES_5;   /* ~12 us: plenty for a 10k pot */
	c.SingleDiff   = ADC_SINGLE_ENDED;
	c.OffsetNumber = ADC_OFFSET_NONE;
	if (HAL_ADC_ConfigChannel(&hadc1, &c) == HAL_OK && HAL_ADC_Start(&hadc1) == HAL_OK
	    && HAL_ADC_PollForConversion(&hadc1, 10) == HAL_OK)
		v = (uint16_t)HAL_ADC_GetValue(&hadc1);
	HAL_ADC_Stop(&hadc1);
	return v;
}

/* measure the rest position (~0.3 s, the stick must not be touched) */
static void joystick_calibrate(void)
{
	uint32_t sum[2] = {0, 0};
	for (int i = 0; i < 16; i++) {
		sum[0] += adc_read(JOY_CHANNEL[0]);
		sum[1] += adc_read(JOY_CHANNEL[1]);
		HAL_Delay(20);
	}
	joy_rest[0] = (uint16_t)(sum[0] / 16);
	joy_rest[1] = (uint16_t)(sum[1] / 16);
}

/* The rest position wanders: the spring seldom returns to exactly the same point, and the supply
 * dips when the servos draw current. An offset past the dead zone would keep the mount creeping
 * (the stick sets a speed), so a stick that sits steady near the centre for 1 s becomes the new
 * centre. Called every 20 ms per axis. */
#define JOY_RECENTRE_TICKS  50
#define JOY_RECENTRE_RANGE  600         /* raw counts (~15 % of travel) */
#define JOY_STEADY          24          /* raw counts */

/* stick position of one axis (0 = X, 1 = Y) in % of travel, -100..+100, dead zone removed */
static int joystick_read(int axis)
{
	int raw  = adc_read(JOY_CHANNEL[axis]);
	int rest = joy_rest[axis];

	if (abs(raw - joy_last[axis]) < JOY_STEADY && abs(raw - rest) < JOY_RECENTRE_RANGE) {
		if (++joy_still[axis] >= JOY_RECENTRE_TICKS) rest = joy_rest[axis] = (uint16_t)raw;
	} else {
		joy_still[axis] = 0;
	}
	joy_last[axis] = (uint16_t)raw;

	int d    = raw - rest;
	int span = d >= 0 ? 4095 - rest : rest;
	int p    = d * 100 / (span < 1 ? 1 : span);
	int a    = abs(p > 100 ? 100 : p < -100 ? -100 : p);

	a = a <= JOY_DEADZONE ? 0 : (a - JOY_DEADZONE) * 100 / (100 - JOY_DEADZONE);
	p = (p < 0) != JOY_INVERT[axis] ? -a : a;
	return joy_pct[axis] = p;
}

/* 8-way direction name, for the UART aim log */
static const char *joystick_direction(int x, int y)
{
	static const char *const NAME[3][3] = {
		{ "DOWN-LEFT", "DOWN",   "DOWN-RIGHT" },
		{ "LEFT",      "CENTER", "RIGHT"      },
		{ "UP-LEFT",   "UP",     "UP-RIGHT"   },
	};
	int h = (x > JOY_DIR_PCT) - (x < -JOY_DIR_PCT);
	int v = (y > JOY_DIR_PCT) - (y < -JOY_DIR_PCT);
	return NAME[v + 1][h + 1];
}

/* Stick button, debounced: 1 = short click (reported on the release), 2 = held for JOY_HOLD_MS
 * (reported once, while still held; the release after it reports nothing). */
static int joystick_click(uint32_t now)
{
	static uint32_t t_sample, t_down;
	static uint8_t  last_raw, stable, held;

	if (now - t_sample < JOY_DEBOUNCE_MS) return 0;
	t_sample = now;

	uint8_t raw = HAL_GPIO_ReadPin(JOY_SW_PORT, JOY_SW_PIN) == GPIO_PIN_RESET;
	if (raw == last_raw && raw != stable) {               /* same level twice in a row = real change */
		stable = raw;
		if (raw) { t_down = now; held = 0; }
		else if (!held) return 1;
	}
	last_raw = raw;
	if (stable && !held && now - t_down >= JOY_HOLD_MS) { held = 1; return 2; }
	return 0;
}

/* =============================================================================
 * 5. SERVOS - PAN and TILT on TIM3, 50 Hz PWM with 1 us resolution
 * ============================================================================= */
/* Calibration: pulse width (us) at each end of this mount's travel */
#define PAN_LEFT_US        2500.0f
#define PAN_CENTER_US      1760.0f
#define PAN_RIGHT_US        780.0f
#define TILT_DOWN_US        830.0f
#define TILT_CENTER_US     1690.0f
#define TILT_UP_US         2090.0f
#define SERVO_US_PER_DEG     10.0f      /* approximate; only used for the angle readout */
#define SERVO_SPEED_US_S    250.0f      /* full stick moves the pulse this much per second */
#define SERVO_SMOOTH_MS     300.0f      /* speed eases towards the stick with this time constant */
#define SERVO_TICK_MS        20         /* update rate = PWM period */
#define SERVO_START_GAP_MS  300         /* start the two servos apart so they don't surge together */

typedef struct {
	uint32_t channel;                   /* TIM3 channel                                    */
	float    neg_end, center, pos_end;  /* pulse at stick -100 % (left/down), rest, +100 % */
	float    pulse;                     /* pulse being output now (us)                     */
	float    speed;                     /* smoothed speed (us/s)                           */
} Servo;

enum { PAN, TILT };
static Servo servo[2] = {
	[PAN]  = { TIM_CHANNEL_3, PAN_LEFT_US,  PAN_CENTER_US,  PAN_RIGHT_US, PAN_CENTER_US,  0.0f },  /* D3 = PB0 */
	[TILT] = { TIM_CHANNEL_4, TILT_DOWN_US, TILT_CENTER_US, TILT_UP_US,   TILT_CENTER_US, 0.0f },  /* D6 = PB1 */
};
static TIM_HandleTypeDef htim3;

static float servo_dir(const Servo *s) { return s->pos_end >= s->neg_end ? 1.0f : -1.0f; }

/* degrees from the centre position, + = right / up */
static float servo_angle(const Servo *s, float pulse)
{
	return (pulse - s->center) * servo_dir(s) / SERVO_US_PER_DEG;
}

static void servo_write(Servo *s, float us)
{
	s->pulse = us;
	__HAL_TIM_SET_COMPARE(&htim3, s->channel, (uint32_t)(us + 0.5f));
}

/* RECENTRE: both servos go back to their centre pulse (pan 0, tilt 0) at a gentle fixed speed.
 * Returns 1 once both are there. */
#define SERVO_HOME_US_S  600.0f
static int servo_recentre(float dt)
{
	int done = 1;

	for (int i = 0; i < 2; i++) {
		Servo *s = &servo[i];
		float err = s->center - s->pulse, step = SERVO_HOME_US_S * dt;

		s->speed = 0.0f;
		if (fabsf(err) > step) { servo_write(s, s->pulse + (err > 0 ? step : -step)); done = 0; }
		else                   servo_write(s, s->center);
	}
	return done;
}

/* both servos start at their centre pulse */
static void servo_init(void)
{
	GPIO_InitTypeDef   g  = {0};
	TIM_OC_InitTypeDef oc = {0};
	uint32_t clk = HAL_RCC_GetPCLK1Freq();

	if (RCC->CFGR & RCC_CFGR_PPRE1_2) clk *= 2;           /* APB1 prescaler > 1: timers run at 2 x PCLK1 */

	__HAL_RCC_GPIOB_CLK_ENABLE();
	__HAL_RCC_TIM3_CLK_ENABLE();
	g.Pin       = GPIO_PIN_0 | GPIO_PIN_1;
	g.Mode      = GPIO_MODE_AF_PP;
	g.Alternate = GPIO_AF2_TIM3;
	HAL_GPIO_Init(GPIOB, &g);

	htim3.Instance               = TIM3;
	htim3.Init.Prescaler         = clk / 1000000u - 1u;   /* 1 tick = 1 us  */
	htim3.Init.Period            = 20000u - 1u;           /* 20 ms = 50 Hz  */
	htim3.Init.CounterMode       = TIM_COUNTERMODE_UP;
	htim3.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_ENABLE;
	oc.OCMode = TIM_OCMODE_PWM1;
	if (clk < 1000000u || HAL_TIM_PWM_Init(&htim3) != HAL_OK)
	{ fatal("[ZD] TURRET: servo timer TIM3 init failed\r\n"); return; }

	for (int i = 0; i < 2; i++) {
		oc.Pulse = (uint32_t)(servo[i].pulse + 0.5f);
		if (i) HAL_Delay(SERVO_START_GAP_MS);
		if (HAL_TIM_PWM_ConfigChannel(&htim3, &oc, servo[i].channel) != HAL_OK
		    || HAL_TIM_PWM_Start(&htim3, servo[i].channel) != HAL_OK)
		{ fatal("[ZD] TURRET: servo PWM start failed\r\n"); return; }
	}
}

/* MANUAL AIM, every SERVO_TICK_MS: the stick sets a target speed and the real speed
 * eases towards it, so the mount never jerks. The pulse stays inside the calibrated ends. */
static void servo_follow_stick(Servo *s, int pct, float dt)
{
	float lo = fminf(s->neg_end, s->pos_end), hi = fmaxf(s->neg_end, s->pos_end);
	float target = ((float)pct / 100.0f) * SERVO_SPEED_US_S * servo_dir(s);
	float k = dt * 1000.0f / SERVO_SMOOTH_MS;
	float to;

	s->speed += (target - s->speed) * (k > 1.0f ? 1.0f : k);
	to = s->pulse + s->speed * dt;
	servo_write(s, to < lo ? lo : to > hi ? hi : to);
}


/* =============================================================================
 * Wrapper used by enhancements.c (replaces Yatin's aim_task / main-loop servo code)
 * ============================================================================= */
static uint32_t t_servo, t_steer;
static uint8_t  homing, click_flag, hold_flag;

int turret_init(void)
{
	turret_ok = 1;
	joystick_init();
	if (!turret_ok) return 0;
	joystick_calibrate();                     /* ~0.3 s: the stick must be left alone */
	servo_init();
	t_servo = HAL_GetTick();
	return turret_ok;
}

/* mode: TURRET_HOLD (servos still), TURRET_STEER (stick moves the servos),
 *       TURRET_STICK_ONLY (stick read for the GUI flight controls, servos still) */
void turret_update(uint32_t now, int mode)
{
	if (!turret_ok) return;

	int c = joystick_click(now);
	if (c == 2) hold_flag = 1;                /* held 0.5 s */
	else if (c == 1) click_flag = 1;

	if (now - t_servo >= SERVO_TICK_MS) {     /* 50 Hz, in step with the PWM */
		float dt = fminf((float)(now - t_servo) / 1000.0f, 0.1f);
		t_servo = now;
		if (homing) {
			if (servo_recentre(dt)) homing = 0;
			if (mode == TURRET_STICK_ONLY) { joystick_read(0); joystick_read(1); }
		} else if (mode == TURRET_STEER) {
			for (int i = 0; i < 2; i++) {
				int p = joystick_read(i);
				if (p) t_steer = now;
				servo_follow_stick(&servo[i], p, dt);
			}
		} else if (mode == TURRET_STICK_ONLY) {
			servo[PAN].speed = servo[TILT].speed = 0.0f;
			joystick_read(0);
			joystick_read(1);
		} else {
			servo[PAN].speed = servo[TILT].speed = 0.0f;
			joy_pct[0] = joy_pct[1] = 0;
		}
	}
}

void turret_recentre(void)     { if (turret_ok) homing = 1; }
int turret_take_click(void)    { int c = click_flag; click_flag = 0; return c; }
int turret_take_hold(void)     { int c = hold_flag;  hold_flag = 0;  return c; }
int turret_steering(uint32_t now) { return turret_ok && t_steer && now - t_steer < 3000u; }
float turret_pan_deg(void)     { return servo_angle(&servo[PAN],  servo[PAN].pulse); }
float turret_tilt_deg(void)    { return servo_angle(&servo[TILT], servo[TILT].pulse); }
int   turret_joy_x(void)       { return joy_pct[0]; }
int   turret_joy_y(void)       { return joy_pct[1]; }
const char *turret_direction(void) { return joystick_direction(joy_pct[0], joy_pct[1]); }

void turret_limits(float *pl, float *pr, float *td, float *tu)
{
	*pl = servo_angle(&servo[PAN],  servo[PAN].neg_end);
	*pr = servo_angle(&servo[PAN],  servo[PAN].pos_end);
	*td = servo_angle(&servo[TILT], servo[TILT].neg_end);
	*tu = servo_angle(&servo[TILT], servo[TILT].pos_end);
}

#else   /* ENH_TURRET 0: stubs */
int   turret_init(void) { return 0; }
void  turret_update(uint32_t now, int mode) { (void)now; (void)mode; }
void  turret_recentre(void) { }
int   turret_take_click(void) { return 0; }
int   turret_take_hold(void) { return 0; }
int   turret_steering(uint32_t now) { (void)now; return 0; }
float turret_pan_deg(void) { return 0; }
float turret_tilt_deg(void) { return 0; }
int   turret_joy_x(void) { return 0; }
int   turret_joy_y(void) { return 0; }
const char *turret_direction(void) { return "CENTER"; }
void  turret_limits(float *pl, float *pr, float *td, float *tu) { *pl = *pr = *td = *tu = 0; }
#endif

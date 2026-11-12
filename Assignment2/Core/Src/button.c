/******************************************************************************
 * button.c - button interrupt + single / double (/ triple / long) press decoding
 *
 * Hardware: the blue user button B2 on PC13 is ACTIVE LOW (UM2708 6.12): PC13 is
 * pulled up to 3V3, pressing shorts it to GND. Released = HIGH, pressed = LOW.
 * The board has a 1 k / 100 nF RC filter next to the button.
 *
 * The EXTI line triggers on BOTH edges [ENH, Fri 13 Nov]:
 *   falling edge (pin LOW)  = pressed  -> only the press time is stored
 *   rising edge  (pin HIGH) = released -> this is the "press" event used below,
 *                                         exactly as before (the BSP's rising edge)
 * Spec: double press = a 2nd release within DOUBLE_MS (0.5 s) of the 1st.
 * [ENH] Long press: held >= LONG_MS before the release, with no press pending.
 *   Reported at the release as BTN_LONG; drone.c treats it as a single press
 *   unless the player fires by hand (GUI open / MANUAL AIM), so the spec is unchanged.
 * [ENH] Triple press (Yatin's MANUAL AIM toggle): a 3rd press within TRIPLE_MS
 * of the 2nd. Only while drone.c allows it (BATTLE, not attacked): then a double
 * press is reported TRIPLE_MS after the 2nd press, once no 3rd press came.
 * In STANDBY and during a rescue the double press is reported at once, as before.
 ******************************************************************************/
#include "button.h"
#include "app_config.h"
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"

/* button state, written by the ISR */
static volatile uint32_t press_tick, second_tick, last_edge, down_tick;
static volatile uint8_t  pending_single, double_press, wait_third, triple_press, long_press;
static volatile uint8_t  is_down;
static volatile uint8_t  triple_on;

void button_init(void)
{
	GPIO_InitTypeDef g = {0};

	BSP_PB_Init(BUTTON_USER, BUTTON_MODE_EXTI);      /* clock, pull-up, EXTI13, NVIC (priority 15) */

	/* [ENH] re-configure EXTI13 for both edges (BSP sets the rising edge only):
	   HAL_GPIO_Init sets both EXTI_RTSR1 and EXTI_FTSR1 bit 13 */
	g.Pin   = USER_BUTTON_PIN;
	g.Mode  = GPIO_MODE_IT_RISING_FALLING;
	g.Pull  = GPIO_PULLUP;
	g.Speed = GPIO_SPEED_FREQ_VERY_HIGH;
	HAL_GPIO_Init(USER_BUTTON_GPIO_PORT, &g);
}

void button_enable_triple(int on) { triple_on = (uint8_t)(on != 0); }

/* 1 = the button is held down right now (pin LOW: active low) */
int button_is_down(void)
{
	return BSP_PB_GetState(BUTTON_USER) == GPIO_PIN_RESET;
}

/* 0 = nothing, 1 = single, 2 = double, 3 = long press, 4 = triple press */
int get_button_event(void)
{
	int e = BTN_NONE;
	uint32_t now = HAL_GetTick();
	__disable_irq();                         /* critical section: the ISR writes these flags */
	if (triple_press) {
		triple_press = 0;
		e = BTN_TRIPLE;
	} else if (double_press) {
		double_press = 0;
		e = BTN_DOUBLE;
	} else if (long_press) {
		long_press = 0;
		e = BTN_LONG;
	} else if (wait_third && (now - second_tick) >= TRIPLE_MS) {
		wait_third = 0;                      /* no 3rd press: it was a double press */
		e = BTN_DOUBLE;
	} else if (pending_single && (now - press_tick) >= DOUBLE_MS) {
		pending_single = 0;                  /* no 2nd press within 0.5 s: single press */
		e = BTN_SINGLE;
	}
	__enable_irq();
	return e;
}

/* button interrupt, both edges. The button is ACTIVE LOW: LOW = pressed. */
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
	if (GPIO_Pin != USER_BUTTON_PIN) return;

	uint32_t now = HAL_GetTick();

	if (HAL_GPIO_ReadPin(USER_BUTTON_GPIO_PORT, USER_BUTTON_PIN) == GPIO_PIN_RESET) {
		down_tick = now;                     /* falling edge: pressed. Just remember when */
		is_down = 1;
		return;
	}

	/* rising edge: released. This is the press event, as before. */
	if (now - last_edge < 50) return;        /* debounce: ignore releases < 50 ms apart */
	last_edge = now;
	uint32_t held = is_down ? now - down_tick : 0;
	is_down = 0;

	if (wait_third && (now - second_tick) < TRIPLE_MS) {
		wait_third = 0;                      /* third press: triple */
		triple_press = 1;
	} else if (pending_single && (now - press_tick) < DOUBLE_MS) {
		pending_single = 0;                  /* second press inside 0.5 s */
		if (triple_on) { wait_third = 1; second_tick = now; }
		else           double_press = 1;
	} else if (!wait_third && held >= LONG_MS) {
		long_press = 1;                      /* [ENH] held >= LONG_MS on its own: long press */
	} else {
		pending_single = 1;                  /* first press, wait to see if a 2nd comes */
		press_tick = now;
	}
}

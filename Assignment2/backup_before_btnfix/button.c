/******************************************************************************
 * button.c - button interrupt + single / double (/ triple) press decoding
 *
 * Spec: double press = a 2nd press within DOUBLE_MS (0.5 s) of the 1st.
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
static volatile uint32_t press_tick, second_tick, last_edge;
static volatile uint8_t  pending_single, double_press, wait_third, triple_press;
static volatile uint8_t  triple_on;

void button_init(void)
{
	BSP_PB_Init(BUTTON_USER, BUTTON_MODE_EXTI);
}

void button_enable_triple(int on) { triple_on = (uint8_t)(on != 0); }

/* 0 = nothing, 1 = single, 2 = double, 3 = long press, 4 = triple press */
int get_button_event(void)
{
	int e = BTN_NONE;
	uint32_t now = HAL_GetTick();
	__disable_irq();
	if (triple_press) {
		triple_press = 0;
		e = BTN_TRIPLE;
	} else if (double_press) {
		double_press = 0;
		e = BTN_DOUBLE;
	} else if (wait_third && (now - second_tick) >= TRIPLE_MS) {
		wait_third = 0;                      /* no 3rd press: it was a double press */
		e = BTN_DOUBLE;
	} else if (pending_single && (now - press_tick) >= DOUBLE_MS) {
		pending_single = 0;
		/* [ENH] still held down after DOUBLE_MS = long press (drone.c treats it as a
		   single press unless the player fires by hand, so the spec is unchanged) */
		e = BSP_PB_GetState(BUTTON_USER) ? BTN_LONG : BTN_SINGLE;
	}
	__enable_irq();
	return e;
}

/* button interrupt: the board button is active high, so we trigger on the rising edge */
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
	if (GPIO_Pin != USER_BUTTON_PIN) return;

	uint32_t now = HAL_GetTick();
	if (now - last_edge < 50) return;        /* debounce */
	last_edge = now;

	if (wait_third && (now - second_tick) < TRIPLE_MS) {
		wait_third = 0;                      /* third press: triple */
		triple_press = 1;
	} else if (pending_single && (now - press_tick) < DOUBLE_MS) {
		pending_single = 0;                  /* second press inside 0.5 s */
		if (triple_on) { wait_third = 1; second_tick = now; }
		else           double_press = 1;
	} else {
		pending_single = 1;                  /* first press, wait to see if a 2nd comes */
		press_tick = now;
	}
}

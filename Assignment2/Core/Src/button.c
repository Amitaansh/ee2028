/******************************************************************************
 * button.c - button interrupt and press decoding
 *
 * The blue button B2 on PC13 is active low (UM2708 section 6.12): PC13 is pulled
 * up to 3V3 and pressing the button shorts it to GND. The board also has a
 * 1k / 100nF RC filter on it.
 *
 * EXTI13 triggers on both edges:
 *   falling edge (pin LOW)  = pressed, we only note the time
 *   rising edge  (pin HIGH) = released, this is what counts as a "press" below
 *
 * double press = second release within DOUBLE_MS (0.5 s) of the first (spec)
 * long press   = [ENH] held for at least LONG_MS, with nothing else pending.
 *                drone.c treats it as a single press unless the player fires by
 *                hand (GUI open or MANUAL AIM), so the spec behaviour is the same.
 * triple press = [ENH] third press within TRIPLE_MS of the second, toggles
 *                MANUAL AIM. Only enabled in BATTLE when not attacked; then a
 *                double press is reported TRIPLE_MS after the second press if no
 *                third one came. In STANDBY and during a rescue a double press is
 *                reported straight away.
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

	/* the BSP only sets the rising edge, so set EXTI13 up again for both edges
	   (HAL_GPIO_Init sets bit 13 in both EXTI_RTSR1 and EXTI_FTSR1) */
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

/* button interrupt, both edges. Active low: LOW = pressed */
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
	if (GPIO_Pin != USER_BUTTON_PIN) return;

	uint32_t now = HAL_GetTick();

	if (HAL_GPIO_ReadPin(USER_BUTTON_GPIO_PORT, USER_BUTTON_PIN) == GPIO_PIN_RESET) {
		down_tick = now;                     /* falling edge: pressed, just remember when */
		is_down = 1;
		return;
	}

	/* rising edge: released, this is the press event */
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
		long_press = 1;                      /* held long enough on its own: long press */
	} else {
		pending_single = 1;                  /* first press, wait to see if a 2nd comes */
		press_tick = now;
	}
}

/******************************************************************************
 * button.c - button interrupt + single/double press decoding
 ******************************************************************************/
#include "button.h"
#include "app_config.h"
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"

/* button state, written by the ISR */
static volatile uint32_t press_tick, last_edge;
static volatile uint8_t  pending_single, double_press;

void button_init(void)
{
	BSP_PB_Init(BUTTON_USER, BUTTON_MODE_EXTI);
}

/* 0 = nothing, 1 = single press, 2 = double press, 3 = long press */
int get_button_event(void)
{
	int e = BTN_NONE;
	__disable_irq();
	if (double_press) {
		double_press = 0;
		e = BTN_DOUBLE;
	} else if (pending_single && (HAL_GetTick() - press_tick) >= DOUBLE_MS) {
		pending_single = 0;
		/* [ENH] still held down after DOUBLE_MS = long press (drone.c treats it as a
		   single press unless the PC game is connected, so the spec is unchanged) */
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

	if (pending_single && (now - press_tick) < DOUBLE_MS) {
		pending_single = 0;                  /* second press inside 0.5 s */
		double_press = 1;
	} else {
		pending_single = 1;                  /* first press, wait to see if a 2nd comes */
		press_tick = now;
	}
}

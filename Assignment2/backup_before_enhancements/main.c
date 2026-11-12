/******************************************************************************
 * EE2028 Assignment 2 - "The Last of EE2028" - MINIMUM REQUIREMENTS ONLY
 * main.c - board bring-up and the super-loop. All real work lives in modules:
 *
 *   app_config.h       thresholds and timing constants (tune here)
 *   comms.c / .h       UART1 to the PC terminal: comms_init(), send()
 *   sensors.c / .h     six sensors: read_sensors(), check(), read_accel_z_mg(),
 *                      sensors_calibrate_gyro(), sensors_calibrate_magneto()
 *   button.c / .h      EXTI button ISR + single/double press: get_button_event()
 *   drone.c / .h       game logic: STANDBY / BATTLE / attacked state machine
 *
 * UART: USART1 (PB6 TX / PB7 RX) -> ST-LINK virtual COM port -> PC terminal
 *       115200 baud, 8 data bits, no parity, 1 stop bit, no flow control.
 * LED : LED2 (PB14).   PB: user button (PC13) read through EXTI interrupt.
 ******************************************************************************/
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"
#include "comms.h"
#include "sensors.h"
#include "button.h"
#include "drone.h"
#include "app_config.h"

int main(void)
{
	HAL_Init();

	BSP_LED_Init(LED2);
	button_init();
	comms_init();
	sensors_init();

#if GYRO_CAL_ON_BOOT
	sensors_calibrate_gyro(GYRO_CAL_MS);     /* keep still: see app_config.h */
#endif
#if MAG_CAL_ON_BOOT
	sensors_calibrate_magneto(MAG_CAL_MS);   /* see app_config.h */
#endif

	drone_start();                   /* boots into STANDBY mode */

	while (1)
	{
		uint32_t now = HAL_GetTick();
		int ev = get_button_event();

		drone_update(now, ev);
	}
}

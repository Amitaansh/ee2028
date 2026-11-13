/******************************************************************************
 * EE2028 Assignment 2 - "The Last of EE2028"
 * main.c - board setup and the main loop. The real work is split into modules:
 *
 *   app_config.h       all thresholds, timings, pins and feature switches
 *   comms.c / .h       UART1 to the PC terminal: comms_init(), send()
 *   sensors.c / .h     the six sensors: read_sensors(), check(), read_accel_z_mg(),
 *                      plus the gyro / magnetometer / temperature calibrations
 *   button.c / .h      button interrupt and single / double press: get_button_event()
 *   drone.c / .h       game logic: STANDBY / BATTLE / attacked state machine
 *
 * Enhancements (each one can be switched off in app_config.h):
 *   clock.c            80 MHz system clock
 *   enhancements.c     everything extra (game link, OLEDs, buzzer, ToF, laser,
 *                      turret). drone.c only talks to this file.
 *
 * UART: USART1 (PB6 TX / PB7 RX) -> ST-LINK virtual COM port -> PC terminal,
 *       115200 baud, 8 data bits, no parity, 1 stop bit, no flow control.
 * LED : LED2 (PB14).   PB: user button (PC13), read with an EXTI interrupt.
 ******************************************************************************/
#include "main.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"
#include "comms.h"
#include "sensors.h"
#include "button.h"
#include "drone.h"
#include "app_config.h"
#include "clock.h"
#include "enhancements.h"

int main(void)
{
	HAL_Init();
	clock_init();                    /* [ENH] 80 MHz, has to be done before the UART is set up */

	BSP_LED_Init(LED2);
	button_init();
	comms_init();
	sensors_init();

#if GYRO_CAL_ON_BOOT
	sensors_calibrate_gyro(GYRO_CAL_MS);     /* keep the board still, see app_config.h */
#endif
#if MAG_CAL_ON_BOOT
	sensors_calibrate_magneto(MAG_CAL_MS);   /* see app_config.h */
#endif

	enh_init();                      /* [ENH] OLEDs, buzzer, ToF, laser, UART receive */
	drone_start();                   /* boots into STANDBY mode */

	while (1)
	{
		uint32_t now = HAL_GetTick();
		int ev = get_button_event();

		drone_update(now, ev);
	}
}

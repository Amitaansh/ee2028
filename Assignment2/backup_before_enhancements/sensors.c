/******************************************************************************
 * sensors.c - reading and threshold-checking the six on-board sensors
 ******************************************************************************/
#include "sensors.h"
#include "comms.h"
#include "app_config.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_tsensor.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_psensor.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_hsensor.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_accelero.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_gyro.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01_magneto.h"
#include <stdio.h>
#include <math.h>

float T, P, H, A, G, M;

/* magnetometer correction: hard-iron offsets (mgauss) and soft-iron scale */
static float mag_off[3]   = { MAG_OFF_X,   MAG_OFF_Y,   MAG_OFF_Z   };
static float mag_scale[3] = { MAG_SCALE_X, MAG_SCALE_Y, MAG_SCALE_Z };

/* gyroscope correction: zero-rate offsets (mdps) */
static float gyro_off[3]  = { GYRO_OFF_X,  GYRO_OFF_Y,  GYRO_OFF_Z  };

void sensors_init(void)
{
	BSP_TSENSOR_Init();
	BSP_PSENSOR_Init();
	BSP_HSENSOR_Init();
	BSP_ACCELERO_Init();
	BSP_GYRO_Init();
	BSP_MAGNETO_Init();
}

void read_sensors(void)
{
	int16_t a[3], m[3];
	float g[3];

	T = BSP_TSENSOR_ReadTemp();
	P = BSP_PSENSOR_ReadPressure();
	H = BSP_HSENSOR_ReadHumidity();

	BSP_ACCELERO_AccGetXYZ(a);                                   /* mg */
	A = sqrtf((float)a[0]*a[0] + (float)a[1]*a[1] + (float)a[2]*a[2]) * 9.8f / 1000.0f;

	BSP_GYRO_GetXYZ(g);                                          /* mdps */
	for (int i = 0; i < 3; i++) g[i] -= gyro_off[i];             /* remove bias */
	G = sqrtf(g[0]*g[0] + g[1]*g[1] + g[2]*g[2]) / 1000.0f;

	BSP_MAGNETO_GetXYZ(m);                                       /* mgauss */
	float mx = ((float)m[0] - mag_off[0]) * mag_scale[0];       /* calibrated */
	float my = ((float)m[1] - mag_off[1]) * mag_scale[1];
	float mz = ((float)m[2] - mag_off[2]) * mag_scale[2];
	M = sqrtf(mx*mx + my*my + mz*mz) / 1000.0f;
}

int16_t read_accel_z_mg(void)
{
	int16_t a[3];
	BSP_ACCELERO_AccGetXYZ(a);
	return a[2];
}

int sensors_calibrate_magneto(uint32_t duration_ms)
{
	char buf[160];
	int16_t m[3];
	float mn[3] = {  1e9f,  1e9f,  1e9f };
	float mx[3] = { -1e9f, -1e9f, -1e9f };

	send("Magnetometer calibration: slowly rotate the board in ALL directions "
	     "(figure-8, flip it over) until the LED stops blinking...\r\n");

	uint32_t start = HAL_GetTick(), t_led = start;
	while (HAL_GetTick() - start < duration_ms) {
		BSP_MAGNETO_GetXYZ(m);                   /* sensor runs at 40 Hz */
		for (int i = 0; i < 3; i++) {
			if (m[i] < mn[i]) mn[i] = m[i];
			if (m[i] > mx[i]) mx[i] = m[i];
		}
		if (HAL_GetTick() - t_led >= 100) {      /* fast blink = calibrating */
			t_led = HAL_GetTick();
			BSP_LED_Toggle(LED2);
		}
		HAL_Delay(25);
	}

	float span[3], avg = 0.0f;
	for (int i = 0; i < 3; i++) {
		span[i] = mx[i] - mn[i];
		avg += span[i] / 3.0f;
	}

	sprintf(buf, "Span (mgauss)  X: %.0f  Y: %.0f  Z: %.0f\r\n", span[0], span[1], span[2]);
	send(buf);

	if (span[0] < MAG_CAL_MIN_SPAN || span[1] < MAG_CAL_MIN_SPAN || span[2] < MAG_CAL_MIN_SPAN) {
		send("Calibration REJECTED: board not rotated enough. Keeping stored values.\r\n");
		return 0;
	}

	for (int i = 0; i < 3; i++) {
		mag_off[i]   = (mx[i] + mn[i]) / 2.0f;
		mag_scale[i] = avg / span[i];
	}

	sprintf(buf, "Calibration OK. Earth field ~ %.2f gauss. Paste into app_config.h:\r\n", avg / 2000.0f);
	send(buf);
	sprintf(buf, "#define MAG_OFF_X    %.1ff\r\n#define MAG_OFF_Y    %.1ff\r\n#define MAG_OFF_Z    %.1ff\r\n",
			mag_off[0], mag_off[1], mag_off[2]);
	send(buf);
	sprintf(buf, "#define MAG_SCALE_X  %.3ff\r\n#define MAG_SCALE_Y  %.3ff\r\n#define MAG_SCALE_Z  %.3ff\r\n",
			mag_scale[0], mag_scale[1], mag_scale[2]);
	send(buf);
	return 1;
}

int sensors_calibrate_gyro(uint32_t duration_ms)
{
	char buf[160];
	float g[3], sum[3] = { 0 }, mn[3], mx[3];
	uint32_t n = 0;

	send("Gyroscope calibration: keep the board STILL on the table...\r\n");
	BSP_LED_On(LED2);                            /* solid LED = hold still */

	uint32_t start = HAL_GetTick();
	while (HAL_GetTick() - start < duration_ms) {
		BSP_GYRO_GetXYZ(g);                      /* mdps */
		for (int i = 0; i < 3; i++) {
			if (n == 0 || g[i] < mn[i]) mn[i] = g[i];
			if (n == 0 || g[i] > mx[i]) mx[i] = g[i];
			sum[i] += g[i];
		}
		n++;
		HAL_Delay(10);
	}
	BSP_LED_Off(LED2);

	for (int i = 0; i < 3; i++) {
		if (mx[i] - mn[i] > GYRO_CAL_MAX_SPAN) {
			send("Gyro calibration REJECTED: board moved. Keeping stored values.\r\n");
			return 0;
		}
	}
	for (int i = 0; i < 3; i++) gyro_off[i] = sum[i] / (float)n;

	sprintf(buf, "Gyro calibration OK (%lu samples). Bias = %.2f dps. Paste into app_config.h:\r\n",
			(unsigned long)n,
			sqrtf(gyro_off[0]*gyro_off[0] + gyro_off[1]*gyro_off[1] + gyro_off[2]*gyro_off[2]) / 1000.0f);
	send(buf);
	sprintf(buf, "#define GYRO_OFF_X   %.1ff\r\n#define GYRO_OFF_Y   %.1ff\r\n#define GYRO_OFF_Z   %.1ff\r\n",
			gyro_off[0], gyro_off[1], gyro_off[2]);
	send(buf);
	return 1;
}

int check(const char *name, float v, float lo, float hi, const char *unit)
{
	char buf[100];
	if (v > hi) {
		sprintf(buf, "%s: %.2f %s, exceeds threshold of %.2f %s.\r\n", name, v, unit, hi, unit);
		send(buf);
		return 1;
	}
	if (v < lo) {
		sprintf(buf, "%s: %.2f %s, below threshold of %.2f %s.\r\n", name, v, unit, lo, unit);
		send(buf);
		return 1;
	}
	return 0;
}

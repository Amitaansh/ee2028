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

/* temperature correction: offset added to the HTS221 reading (degC) */
static float t_off = T_OFFSET;
static float t_first_raw;                 /* first raw reading after power-up (~room temperature) */
static uint8_t t_first_set;

#if H_SELF_HEAT_FIX
/* saturation vapour pressure over water, Magnus formula (hPa) */
static float sat_vp(float t_c)
{
	return 6.112f * expf(17.62f * t_c / (243.12f + t_c));
}
#endif

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

	float t_raw = BSP_TSENSOR_ReadTemp();
	if (!t_first_set) { t_first_raw = t_raw; t_first_set = 1; }
	T = t_raw + t_off;                                           /* calibrated */
	P = BSP_PSENSOR_ReadPressure();
	H = BSP_HSENSOR_ReadHumidity();
#if H_SELF_HEAT_FIX
	H = H * sat_vp(t_raw) / sat_vp(T);                           /* RH at room temperature */
	if (H > 100.0f) H = 100.0f;
#endif

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

/* calibrated magnetometer vector, used by nav.c for the compass heading */
void read_magneto_calibrated(float out[3])
{
	int16_t m[3];
	BSP_MAGNETO_GetXYZ(m);
	for (int i = 0; i < 3; i++) out[i] = ((float)m[i] - mag_off[i]) * mag_scale[i];
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

int sensors_calibrate_temp(float reference_c, int use_first)
{
	char buf[200];
	float sum = 0.0f;
	const int n = 8;

	if (use_first) {
		if (!t_first_set) { send("Temperature calibration: no reading yet, wait for STANDBY telemetry.\r\n"); return 0; }
		reference_c = t_first_raw;
	}
	if (reference_c < -10.0f || reference_c > 60.0f) {
		send("Temperature calibration REJECTED: reference must be between -10 and 60 degC.\r\n");
		return 0;
	}
	send("Temperature calibration: averaging the HTS221 for 2 s...\r\n");
	for (int i = 0; i < n; i++) { sum += BSP_TSENSOR_ReadTemp(); HAL_Delay(250); }
	float raw = sum / (float)n;
	t_off = reference_c - raw;

	sprintf(buf, "Temperature calibration OK: sensor %.2f degC, reference %.2f degC%s -> offset %+.2f degC.\r\n"
	             "Paste into app_config.h:\r\n#define T_OFFSET         %.2ff\r\n",
			raw, reference_c, use_first ? " (first reading after power-up)" : "", t_off, t_off);
	send(buf);
	return 1;
}

float sensors_temp_offset(void) { return t_off; }

void sensors_print_calibration(void)
{
	char buf[200];
	send("---- calibration block: paste over the matching lines in app_config.h ----\r\n");
	sprintf(buf, "#define MAG_OFF_X    %.1ff\r\n#define MAG_OFF_Y    %.1ff\r\n#define MAG_OFF_Z    %.1ff\r\n",
			mag_off[0], mag_off[1], mag_off[2]);
	send(buf);
	sprintf(buf, "#define MAG_SCALE_X  %.3ff\r\n#define MAG_SCALE_Y  %.3ff\r\n#define MAG_SCALE_Z  %.3ff\r\n",
			mag_scale[0], mag_scale[1], mag_scale[2]);
	send(buf);
	sprintf(buf, "#define GYRO_OFF_X   %.1ff\r\n#define GYRO_OFF_Y   %.1ff\r\n#define GYRO_OFF_Z   %.1ff\r\n",
			gyro_off[0], gyro_off[1], gyro_off[2]);
	send(buf);
	sprintf(buf, "#define T_OFFSET         %.2ff\r\n", t_off);
	send(buf);
	send("---- end of block ----\r\n");
}
float sensors_temp_first(void)  { return t_first_set ? t_first_raw : 0.0f; }

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

/******************************************************************************
 * comms.c - UART link to the PC terminal
 ******************************************************************************/
#include "comms.h"
#include "../../Drivers/BSP/B-L4S5I-IOT01/stm32l4s5i_iot01.h"
#include <string.h>

UART_HandleTypeDef huart1;

void comms_init(void)
{
	huart1.Init.BaudRate     = 115200;
	huart1.Init.WordLength   = UART_WORDLENGTH_8B;
	huart1.Init.StopBits     = UART_STOPBITS_1;
	huart1.Init.Parity       = UART_PARITY_NONE;
	huart1.Init.Mode         = UART_MODE_TX_RX;
	huart1.Init.HwFlowCtl    = UART_HWCONTROL_NONE;
	huart1.Init.OverSampling = UART_OVERSAMPLING_16;
	BSP_COM_Init(COM1, &huart1);
}

void send(const char *s)
{
	HAL_UART_Transmit(&huart1, (uint8_t *)s, strlen(s), HAL_MAX_DELAY);
}

void comms_shutdown(void)
{
	BSP_COM_DeInit(COM1, &huart1);
}

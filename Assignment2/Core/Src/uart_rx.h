/******************************************************************************
 * uart_rx.h - interrupt-driven receive on USART1 (lines sent by the PC game)
 * Transmit stays blocking in comms.c; only receive is added here.
 ******************************************************************************/
#ifndef UART_RX_H
#define UART_RX_H

#include "main.h"

void uart_rx_init(UART_HandleTypeDef *huart);  /* enable the RXNE interrupt (after comms_init) */
int  uart_rx_read_line(char *out, int max);    /* 1 = a complete line was copied into out */
void uart_rx_stop(void);                       /* disable the interrupt (communication cut) */

#endif /* UART_RX_H */

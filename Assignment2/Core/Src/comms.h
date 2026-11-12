/******************************************************************************
 * comms.h - UART link to the PC terminal
 * USART1 (PB6 TX / PB7 RX) -> ST-LINK virtual COM port
 * 115200 baud, 8 data bits, no parity, 1 stop bit, no flow control.
 ******************************************************************************/
#ifndef COMMS_H
#define COMMS_H

#include "main.h"

extern UART_HandleTypeDef huart1;

void comms_init(void);           /* configure and start USART1        */
void send(const char *s);        /* blocking transmit of a C string   */
void comms_shutdown(void);       /* de-init USART1 (communication cut) */

#endif /* COMMS_H */

/******************************************************************************
 * uart_rx.c - USART1 receive interrupt -> 256-byte ring buffer -> text lines
 *
 * The ISR only copies bytes into the ring buffer. uart_rx_read_line() runs in
 * the main loop and assembles them into lines ending in \n or \r, so nothing
 * here ever blocks the super-loop.
 ******************************************************************************/
#include "uart_rx.h"
#include <string.h>

#define RX_SIZE   256
#define LINE_MAX  64

static UART_HandleTypeDef *uh;
static volatile uint8_t  ring[RX_SIZE];
static volatile uint16_t head, tail;           /* ISR writes head, main loop reads tail */
static char    line[LINE_MAX];
static uint8_t line_len;

void uart_rx_init(UART_HandleTypeDef *huart)
{
	uh = huart;
	__HAL_UART_CLEAR_FLAG(uh, UART_CLEAR_OREF | UART_CLEAR_FEF | UART_CLEAR_NEF | UART_CLEAR_PEF);
	__HAL_UART_ENABLE_IT(uh, UART_IT_RXNE);
	HAL_NVIC_SetPriority(USART1_IRQn, 5, 0);
	HAL_NVIC_EnableIRQ(USART1_IRQn);
}

void uart_rx_stop(void)
{
	HAL_NVIC_DisableIRQ(USART1_IRQn);
}

/* overrides the weak handler in the startup file */
void USART1_IRQHandler(void)
{
	if (!uh) return;
	if (__HAL_UART_GET_FLAG(uh, UART_FLAG_ORE) || __HAL_UART_GET_FLAG(uh, UART_FLAG_FE) ||
	    __HAL_UART_GET_FLAG(uh, UART_FLAG_NE)  || __HAL_UART_GET_FLAG(uh, UART_FLAG_PE))
		__HAL_UART_CLEAR_FLAG(uh, UART_CLEAR_OREF | UART_CLEAR_FEF | UART_CLEAR_NEF | UART_CLEAR_PEF);

	while (__HAL_UART_GET_FLAG(uh, UART_FLAG_RXNE)) {
		uint8_t b = (uint8_t)(uh->Instance->RDR & 0xFF);
		uint16_t n = (uint16_t)((head + 1) % RX_SIZE);
		if (n != tail) { ring[head] = b; head = n; }   /* buffer full: drop the byte */
	}
}

int uart_rx_read_line(char *out, int max)
{
	while (tail != head) {
		char c = (char)ring[tail];
		tail = (uint16_t)((tail + 1) % RX_SIZE);
		if (c == '\n' || c == '\r') {
			if (line_len) {
				line[line_len] = 0;
				strncpy(out, line, (size_t)max - 1);
				out[max - 1] = 0;
				line_len = 0;
				return 1;
			}
		} else if (line_len < LINE_MAX - 1) {
			line[line_len++] = c;
		} else {
			line_len = 0;                          /* too long = garbage, start again */
		}
	}
	return 0;
}

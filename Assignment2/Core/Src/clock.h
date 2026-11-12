/******************************************************************************
 * clock.h - system clock
 * The template never configures the clock, so the board runs on the 4 MHz MSI
 * reset clock. The BSP's sensor I2C timing (0x00702681) is designed for 80 MHz
 * (~400 kHz bus); at 4 MHz the bus only runs at ~23 kHz.
 ******************************************************************************/
#ifndef CLOCK_H
#define CLOCK_H

/* Switch to 80 MHz (MSI 4 MHz -> PLL x40 / 2). Call right after HAL_Init(),
 * before comms_init(). Returns 1 on success; on failure the board simply keeps
 * running at 4 MHz. Does nothing if ENH_FAST_CLOCK is 0. */
int clock_init(void);

#endif /* CLOCK_H */

/******************************************************************************
 * oled_bus.h - finds the OLED and moves bytes to it
 *
 * Search order at boot:
 *   1. hardware I2C1 on the Grove I2C ports (D15 = PB8 SCL, D14 = PB9 SDA)
 *   2. hardware I2C3 on A5 = PC0 SCL, A4 = PC1 SDA
 *   3. software (bit-banged) I2C on every other Grove port and on the I2C pins
 *      with SDA/SCL swapped, so a wrongly plugged OLED still works and the
 *      boot line says where it was found.
 ******************************************************************************/
#ifndef OLED_BUS_H
#define OLED_BUS_H

#include <stdint.h>

int         oled_bus_find(void);           /* 1 if a display answered at 0x3C or 0x3D */
int         oled_bus_write(uint8_t control, const uint8_t *data, uint16_t n);  /* 0x00 = commands, 0x40 = pixels */
uint8_t     oled_bus_address(void);        /* 7-bit address, 0 if none */
const char *oled_bus_where(void);          /* where it was found (for the [ZD] boot line) */
const char *oled_bus_diag(void);           /* what the search saw when nothing was found */

#endif /* OLED_BUS_H */

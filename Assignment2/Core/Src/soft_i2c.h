/******************************************************************************
 * soft_i2c.h - bit-banged I2C master on any two GPIO pins (open drain)
 * Used by oled.c to find an OLED plugged into the wrong Grove port or with
 * SDA/SCL swapped, and to drive it there if no hardware I2C is wired to it.
 ******************************************************************************/
#ifndef SOFT_I2C_H
#define SOFT_I2C_H

#include "main.h"

typedef struct {
	GPIO_TypeDef *scl_port; uint16_t scl_pin;
	GPIO_TypeDef *sda_port; uint16_t sda_pin;
} SoftI2C;

void soft_i2c_init(const SoftI2C *b);                       /* pins -> open drain, released (high) */
void soft_i2c_release(const SoftI2C *b);                    /* pins back to analog (unused) */
int  soft_i2c_probe(const SoftI2C *b, uint8_t addr7);       /* 1 if a device ACKs its address */
int  soft_i2c_write(const SoftI2C *b, uint8_t addr7, uint8_t first, const uint8_t *data, uint16_t n);

#endif /* SOFT_I2C_H */

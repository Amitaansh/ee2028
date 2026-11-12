/******************************************************************************
 * oled.h - 128x64 monochrome I2C OLED driver (SH1106 / SSD1306)
 * Meant for the Seeed Base Shield Grove I2C port (D15 = PB8 SCL, D14 = PB9 SDA,
 * I2C1, separate from the sensor bus); oled_bus.c also finds it elsewhere.
 ******************************************************************************/
#ifndef OLED_DRIVER_H
#define OLED_DRIVER_H

#include "main.h"

#define OLED_W 128
#define OLED_H 64

int  oled_init(void);                      /* finds the display (oled_bus.c) and initialises it; 1 = OK */
int  oled_present(void);
const char *oled_where(void);              /* where it was found, e.g. "I2C1 D15/D14 hw I2C @0x3C" */
const char *oled_diag(void);               /* what the search saw when no display was found */
void oled_clear(void);
void oled_pixel(int x, int y, int on);
void oled_fill_rect(int x, int y, int w, int h, int on);
void oled_rect(int x, int y, int w, int h);
void oled_hline(int x, int y, int w, int on);
void oled_text(int x, int y, const char *s, int scale, int on);   /* 6x8 cell per char at scale 1 */
void oled_text_centered(int y, const char *s, int scale, int on);
void oled_invert_rect(int x, int y, int w, int h);
int  oled_flush_step(void);                 /* sends at most ONE changed page (~3 ms); returns pages still dirty */
void oled_flush_all(void);                  /* blocking full refresh (~25 ms) */
void oled_set_inverted(int inv);            /* hardware invert (instant, used for HIT flash) */
void oled_power(int on);

#endif /* OLED_DRIVER_H */

/******************************************************************************
 * buzzer.h - non-blocking patterns for an ACTIVE buzzer (on/off only)
 * Grove buzzer on the Seeed Base Shield port D4 -> PA3. HIGH = sound.
 ******************************************************************************/
#ifndef BUZZER_H
#define BUZZER_H

#include <stdint.h>

void buzzer_init(void);
void buzzer_update(uint32_t now);                     /* call every main-loop pass */
void buzzer_beep(uint16_t on_ms);                     /* one beep */
void buzzer_pattern(const uint16_t *ms, uint8_t n);   /* on, off, on, off... in ms */
void buzzer_alarm(int on);                            /* attack alarm on / off */
void buzzer_alarm_seconds_left(int secs);             /* 2 Hz -> 4 Hz (last 3 s) -> 8 Hz (last 1 s) */
void buzzer_off(void);
void buzzer_blocking_tone(uint16_t ms);               /* long tone, blocks (termination only) */

#endif /* BUZZER_H */

/******************************************************************************
 * tof.h - "zombie hand" grab detector on the on-board VL53L0X
 * A grab = TOF_HIT_SAMPLES confident readings closer than TOF_NEAR_MM (~0.2 s)
 * after the detector armed (hand away). Thresholds are in app_config.h.
 ******************************************************************************/
#ifndef TOF_H
#define TOF_H

#include <stdint.h>

int      tof_init(void);                         /* 1 if the sensor answered and started ranging */
int      tof_ok(void);
void     tof_update(uint32_t now, int can_trigger); /* poll the sensor and run the detector */
uint16_t tof_range_mm(void);                     /* filtered distance, TOF_NO_TARGET if nothing */
int      tof_take_grab(void);                    /* 1 once per detected grab */
void     tof_disarm(void);                       /* hand must move away, plus TOF_COOLDOWN_MS */
int      tof_debug(char *buf, int len);          /* one line: raw, status, class, score, state (E,TOF) */
int      tof_grab_info(char *buf, int len);      /* one line about the last grab (distance, signal) */
int      tof_armed(void);                        /* 1 = a hand can grab now */
int      tof_blocked(void);                      /* 1 = something sits right on the sensor, not armed */
void     tof_shutdown(void);

#endif /* TOF_H */

/******************************************************************************
 * tof.h - "zombie hand" grab detector on the on-board VL53L0X
 * A grab = the hand was away (> TOF_FAR_MM), then is held closer than
 * TOF_NEAR_MM for TOF_HOLD_MS. Thresholds are in app_config.h.
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
int      tof_debug(char *buf, int len);          /* one line: raw, status, filtered, state (E,TOF) */
void     tof_shutdown(void);

#endif /* TOF_H */

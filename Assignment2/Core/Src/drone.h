/******************************************************************************
 * drone.h - the game logic: STANDBY / BATTLE modes and the attack sequence
 ******************************************************************************/
#ifndef DRONE_H
#define DRONE_H

#include <stdint.h>

typedef enum { STANDBY_MODE, BATTLE_MODE } Mode;

void drone_start(void);                          /* boot into STANDBY mode        */
void drone_update(uint32_t now, int button_ev);  /* call once per main-loop pass  */

#endif /* DRONE_H */

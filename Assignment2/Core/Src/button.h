/******************************************************************************
 * button.h - user button B2 (PC13, active low): single / double / long / triple press
 * Both edges go through an EXTI interrupt; the main loop asks for events.
 ******************************************************************************/
#ifndef BUTTON_H
#define BUTTON_H

#define BTN_NONE    0
#define BTN_SINGLE  1
#define BTN_DOUBLE  2
#define BTN_LONG    3            /* [ENH] held >= LONG_MS before release (fires when firing by hand) */
#define BTN_TRIPLE  4            /* [ENH] three presses: MANUAL AIM on / off (BATTLE only) */

void button_init(void);          /* configure PC13 as EXTI input              */
int  get_button_event(void);     /* 0 = nothing, 1 = single, 2 = double, 3 = long, 4 = triple */
void button_enable_triple(int on);   /* [ENH] 1 = after a double press, wait TRIPLE_MS for a third one */
int  button_is_down(void);          /* 1 = held down right now (active low: pressed = PC13 LOW) */

#endif /* BUTTON_H */

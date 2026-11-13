/******************************************************************************
 * button.h - user push button (PC13) with single / double press detection
 * The press is caught by an EXTI interrupt; the main loop polls for events.
 ******************************************************************************/
#ifndef BUTTON_H
#define BUTTON_H

#define BTN_NONE    0
#define BTN_SINGLE  1
#define BTN_DOUBLE  2
#define BTN_LONG    3            /* [ENH] held for >= DOUBLE_MS (fires the laser while the GUI is open) */
#define BTN_TRIPLE  4            /* [ENH] three presses: MANUAL AIM on / off (BATTLE only) */

void button_init(void);          /* configure PC13 as EXTI input              */
int  get_button_event(void);     /* 0 = nothing, 1 = single, 2 = double, 3 = long, 4 = triple */
void button_enable_triple(int on);   /* [ENH] 1 = wait TRIPLE_MS after a double press for a 3rd */

#endif /* BUTTON_H */

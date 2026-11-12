/******************************************************************************
 * habitat.h - "find new human habitats": can people live here?
 *
 * Uses the wet-bulb temperature, which combines heat AND humidity the way the
 * human body feels them (sweat stops cooling us when the air is too humid).
 ******************************************************************************/
#ifndef HABITAT_H
#define HABITAT_H

float habitat_wet_bulb(float t_c, float rh);          /* degC, Stull (2011) approximation */
int   habitat_ok(float t_c, float rh, float p_hpa);   /* 1 = habitable */

#endif /* HABITAT_H */

/******************************************************************************
 * app_config.h - every tunable number in one place
 * Change thresholds / timings here; no other file needs editing.
 ******************************************************************************/
#ifndef APP_CONFIG_H
#define APP_CONFIG_H

/* ---------------- sensor thresholds (tune by experiment) ---------------- */
#define T_LO   15.0f     /* degC  */
#define T_HI   35.0f
#define P_LO   950.0f    /* hPa   */
#define P_HI   1050.0f
#define H_LO   30.0f     /* %RH   */
#define H_HI   85.0f
#define A_LO   5.0f      /* m/s^2 : 0.5 g to 1.5 g, rest is ~9.8 */
#define A_HI   15.0f
#define G_LO   -1.0f     /* dps   : no lower limit */
#define G_HI   100.0f
#define M_LO   -1.0f     /* gauss : no lower limit */
#define M_HI   1.0f

/* ---------------- game / timing constants ---------------- */
#define FLIP_MG   (-500)   /* accel Z below -0.5 g = drone is upside down */
#define RESCUE_MS 10000    /* time allowed for a rescue after an attack    */
#define DOUBLE_MS 500      /* max gap between two presses = double press   */

/* ---------------- magnetometer calibration ----------------
 * The LIS3MDL also sees fields from magnetised parts near it (board components,
 * laptop, desk). Those move WITH the board, so they add a fixed offset per axis
 * ("hard-iron"). Rotating the board through all orientations makes each axis
 * swing between +|B_earth| and -|B_earth| around that offset, so
 *     offset = (max + min) / 2          scale = avg_span / axis_span
 * Run the calibration once, paste the printed values below, then set
 * MAG_CAL_ON_BOOT to 0 so the demo boots straight into STANDBY.        */
#define MAG_CAL_ON_BOOT  0        /* 1 = run the 10 s calibration at power-up (or type E,MCAL in STANDBY) */
#define MAG_CAL_MS       10000    /* how long to rotate the board for         */
#define MAG_CAL_MIN_SPAN 300.0f   /* mgauss: min swing per axis to accept cal */

#define MAG_OFF_X    -428.0f         /* hard-iron offsets, mgauss */
#define MAG_OFF_Y    -1680.5f
#define MAG_OFF_Z    -25.5f
#define MAG_SCALE_X  1.119f         /* soft-iron scale factors   */
#define MAG_SCALE_Y  0.941f
#define MAG_SCALE_Z  0.958f

/* ---------------- gyroscope calibration ----------------
 * A still gyro should read 0 dps, but every axis has a small constant
 * zero-rate offset (bias), which showed up as ~2.3 dps at rest. Averaging the
 * readings while the board sits still measures that bias; it is then
 * subtracted from every reading. (LSM6DSL at +-2000 dps, 70 mdps/LSB.)
 * Runs BEFORE the magnetometer calibration: keep the board still first.  */
#define GYRO_CAL_ON_BOOT   0        /* 1 = measure bias at power-up (or type E,GCAL in STANDBY) */
#define GYRO_CAL_MS        2000     /* averaging window                      */
#define GYRO_CAL_MAX_SPAN  5000.0f  /* mdps: reject if the board was moved   */

#define GYRO_OFF_X   578.5f          /* zero-rate offsets, mdps */
#define GYRO_OFF_Y   -2112.3f
#define GYRO_OFF_Z   473.5f

/* ---------------- temperature calibration ----------------
 * The HTS221 sits on the same PCB as the MCU, ST-LINK and Wi-Fi module, so it
 * reads warmer than the room ("self-heating", a few degC after warm-up).
 * T_OFFSET is added to every reading. Measure it with E,TCAL (type in Tera Term):
 *   E,TCAL,27.5   reference = 27.5 degC from a thermometer
 *   E,TCAL        reference = the first reading after power-up (the board was
 *                 still at room temperature then, if it had been off ~15 min)
 * Let the board warm up ~10 min in STANDBY first, then paste the printed value. */
#define T_OFFSET         -0.95f      /* degC added to every temperature reading */

/* Humidity: a warmer sensor sees LOWER relative humidity than the room air.
 * 1 = correct H for the temperature offset with the Magnus formula
 * (same water content, RH scales with the saturation pressure ratio).   */
#define H_SELF_HEAT_FIX  0

/* ============================================================================
 * ENHANCEMENTS ("Zombie Drone")
 * Everything below is additive. Set a switch to 0 to compile that feature out;
 * the minimum specification then behaves exactly as before.
 *
 *   clock.c                 80 MHz system clock
 *   uart_rx.c               interrupt-driven UART receive (lines from the PC)
 *   game_link.c             protocol with the PC game (C/N/A/Z out, E,... in)
 *   tilt.c                  pitch / roll from the accelerometer
 *   nav.c                   barometric altitude + compass heading
 *   buzzer.c                active buzzer patterns (non-blocking)
 *   oled.c                  SH1106/SSD1306 128x64 I2C OLED driver
 *   hud.c                   what the OLED shows in each mode
 *   vl53l0x.c               VL53L0X time-of-flight driver
 *   tof.c                   "zombie hand" grab detector on top of the ToF
 *   laser.c                 physical laser module, fires with every "Laser fired!"
 *   enhancements.c          glue: the only file drone.c / main.c talk to
 * ==========================================================================*/
#define ENH_FAST_CLOCK   1      /* 80 MHz PLL instead of 4 MHz MSI (sensor I2C at its designed 400 kHz) */
#define ENH_GAME_LINK    1      /* tilt stream to the PC game + game events back to the board */
#define ENH_OLED         1      /* 1.3" I2C OLED HUD on the Base Shield Grove I2C port */
#define ENH_BUZZER       1      /* active-high buzzer on Grove port D4 */
#define ENH_TOF          1      /* VL53L0X hand grab = second way into "The Last of EE2028" */
#define ENH_LASER        1      /* KY-008 laser on PMOD pin 7 (PD2) fires with the in-game laser */

/* ---------------- tilt stream to the game ---------------- */
#define TILT_PERIOD_MS   20         /* 50 Hz */
#define TILT_ALPHA       0.35f      /* low-pass weight of a new accel sample (0..1) */
#define TILT_PITCH_SIGN  (-1)       /* -1: tilting the board's nose UP makes the drone climb (checked on the board 12 Nov) */
#define TILT_ROLL_SIGN   (+1)       /* flip to -1 if rolling right shows the wrong sign */
#define LINK_TIMEOUT_MS  3000       /* game counts as connected if it pinged within this */
#define NAV_PERIOD_MS    500        /* baro altitude + heading update */
#define BARO_M_PER_HPA   8.4f       /* near sea level pressure drops ~0.12 hPa per metre */

/* ---------------- OLED (Grove I2C port -> D15/D14 = PB8/PB9 = I2C1) ---------------- */
#define OLED_COL_OFFSET  2          /* SH1106 = 2, SSD1306 = 0 (2 px shift at worst) */
#define OLED_REFRESH_MS  100        /* HUD redraw at most 10 Hz */
#define OLED_I2C_KHZ     400

/* ---------------- buzzer (Grove port D4 -> Arduino D4 -> PA3), HIGH = sound ---------------- */
#define BUZZER_PORT          GPIOA
#define BUZZER_PIN           GPIO_PIN_3
#define BUZZER_CLK_ENABLE()  __HAL_RCC_GPIOA_CLK_ENABLE()

/* ---------------- laser module (laser.c): KY-008, 650 nm ----------------
 * KY-008 pins: S, middle, -. "S" feeds the laser diode itself (through the
 * module's resistor), so the GPIO pin powers it directly: HIGH = beam on.
 * The middle pin is not used. Wired straight to the board, not the shield:
 *   S -> PMOD connector CN10 pin 7  = PD2  (3.3 V, ~10-15 mA, under the 20 mA pin limit)
 *   - -> PMOD connector CN10 pin 11 = GND
 * Test with E,LASER in Tera Term.                                           */
#define LASER_PORT           GPIOD
#define LASER_PIN            GPIO_PIN_2
#define LASER_CLK_ENABLE()   __HAL_RCC_GPIOD_CLK_ENABLE()
#define LASER_ACTIVE_HIGH    1      /* 1: pin high = beam on */
#define LASER_BEAM_MS        400    /* solid beam after the double flicker of each shot */
#define LASER_TEST_MS        1000   /* E,LASER: steady beam for this long */
#define LASER_BOOT_BLIP_MS   120    /* short blip with the first boot beep (0 = none) */
#define LASER_MAX_ON_MS      2000   /* safety: never at full brightness longer than this without a break */
/* Faint "aiming" glow between shots (software PWM on TIM7). Tune live with
 * E,LASER,<percent> in Tera Term, then put the value you like here.       */
#define LASER_IDLE_PCT       10     /* glow brightness, % of full (0 = no glow) */
#define LASER_GLOW_STANDBY   1      /* 1 = glow in STANDBY too, 0 = only in BATTLE */
#define LASER_PWM_STEPS      40     /* duty resolution: 2.5 % per step */
#define LASER_PWM_TICK_HZ    20000  /* TIM7 interrupt rate -> 20000 / 40 = 500 Hz PWM */

/* ---------------- ToF "zombie hand" grab (tof.c). Tune with E,TOF in Tera Term ----------------
 * Raw readings are checked (sensor's own valid flag) and median filtered first.
 * A grab = a hand held closer than TOF_NEAR_MM, without a break, for TOF_HOLD_MS.
 * A hand waved over the board (0.1-0.4 s in the near zone) never counts.        */
#define TOF_ATTACK            1     /* 0 = the ToF never starts an attack (range still shown) */
#define TOF_NEAR_MM           50    /* hand closer than this = grabbing the drone */
#define TOF_FAR_MM            150   /* must have been further than this first (arming) */
#define TOF_ARM_MS            300   /* ...for at least this long */
#define TOF_HOLD_MS           800   /* near for this long without a break = grab */
#define TOF_MEDIAN            5     /* median of the last N samples (odd, 1..9, ~33 ms each) */
#define TOF_COVERED_IS_NEAR   1     /* "closer than the minimum range" status = hand on the sensor */
#define TOF_COOLDOWN_MS       3000  /* no new grab for this long after a rescue */
#define TOF_BUTTON_HOLDOFF_MS 1000  /* ignore the ToF while / just after the blue button is pressed */
#define TOF_GRACE_MS          1500  /* ignore the ToF right after entering BATTLE_MODE */
#define TOF_DEBUG_MS          15000 /* E,TOF prints raw + filtered readings for this long */
#define TOF_NO_TARGET         8190  /* value reported when nothing is in range */

/* ---------------- "find new human habitats" (habitat.c, OLED + game) ----------------
 * Habitable = wet-bulb temperature <= HAB_TW_MAX (heat + humidity together),
 * temperature >= HAB_T_MIN, and pressure inside the spec's P_LO..P_HI band.  */
#define HAB_TW_MAX       31.0f      /* degC wet-bulb: above this, sustained activity is dangerous */
#define HAB_T_MIN        10.0f      /* degC: too cold below this */

/* ---------------- laser firing while the PC game is connected ----------------
 * The spec says the laser fires automatically at >= 5/10. That is kept whenever
 * the game is NOT connected (Tera Term demo). With the game connected and
 * ENH_MANUAL_FIRE = 1 the player fires instead: HOLD the blue button for
 * >= 0.5 s (a normal tap still charges +3/10), or press Space / click in the game. */
#define ENH_MANUAL_FIRE  1

#endif /* APP_CONFIG_H */

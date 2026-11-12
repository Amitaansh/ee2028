# Zombie Drone enhancements (EE2028 Assignment 2, Group 47)

This is your own project (`D:\assignment2-2028\Assignment2`) with the enhancements added as separate modules in `Core/Src`. Your minimum-spec modules (`comms`, `sensors`, `button`, `drone`) keep their logic:

* `drone.c` only gained hook calls marked `[ENH]` and a small `start_attack()` helper, so the flip trigger and the new ToF trigger share one code path.
* `main.c` gained two calls: `clock_init()` and `enh_init()`.
* `sensors.c` gained `read_magneto_calibrated()` and the temperature calibration (`T_OFFSET`, `sensors_calibrate_temp()`).

Every add-on can be switched off in `app_config.h` (`ENH_*`). With all switches at 0 the board behaves exactly like the minimum spec.

## Module map

| File | Job |
|---|---|
| `app_config.h` | All settings, with a new **ENHANCEMENTS** section at the bottom |
| `enhancements.c/.h` | Glue: the only module `drone.c` and `main.c` call. It sets the add-on timing (50 Hz tilt, 2 Hz nav, 10 Hz HUD, ToF poll) and decides how each event is shown |
| `clock.c/.h` | 80 MHz system clock (falls back to 4 MHz if it fails) |
| `uart_rx.c/.h` | USART1 receive interrupt → 256-byte ring buffer → text lines |
| `game_link.c/.h` | Protocol with the PC game (`C/N/A/Z` out, `E,...` in) |
| `tilt.c/.h` | Pitch and roll from the accelerometer, low-pass filtered |
| `nav.c/.h` | Barometric altitude and compass heading (uses your magnetometer calibration) |
| `buzzer.c/.h` | Active buzzer: non-blocking beeps and the attack alarm |
| `oled.c/.h` | SH1106/SSD1306 128x64 OLED driver (frame buffer, page-by-page refresh) |
| `oled_bus.c/.h` | Finds the OLED: hardware I2C1 (Grove I2C), then I2C3 (A5/A4), then software I2C on every Grove port in both wire orientations; reports where |
| `soft_i2c.c/.h` | Bit-banged I2C (~100 kHz) used by `oled_bus.c` when the OLED is not on a hardware I2C pin pair |
| `hud.c/.h` | What the OLED shows in each mode |
| `vl53l0x.c/.h` | VL53L0X time-of-flight driver (not in the template BSP) |
| `tof.c/.h` | "Zombie hand" grab detector on top of the ToF readings |
| `laser.c/.h` | KY-008 laser on PMOD pin 7 (PD2). Faint aiming glow (`LASER_IDLE_PCT`, software PWM from a TIM7 interrupt at 20 kHz = 500 Hz PWM, because PD2 has no timer output), full brightness on every `Laser fired!` (double flicker + 400 ms beam), dark while attacked, 2 s safety cut-off. `E,LASER` = full-brightness test, `E,LASER,<pct>` = set the glow live |
| `habitat.c/.h` | Habitability check: wet-bulb temperature (Stull 2011) ≤ 31 °C, T ≥ 10 °C, P within the spec band |
| `game/` | The Three.js PC game (Web Serial), not compiled by CubeIDE |
| `docs/wiring.png` | Wiring diagram |

## Wiring

See `docs/wiring.png`.

* Base Shield switch on **3V3**.
* OLED → Grove **I2C** port. That is D15/D14 = PB8/PB9 (I2C1); the firmware also tries A5/A4.
* Buzzer → Grove **D4** = PA3 (HIGH = sound).
* KY-008 laser → straight to the board's **PMOD connector CN10**, not the shield: **S → pin 7 (PD2)**, **− → pin 11 (GND)**, middle pin unused. The pin powers the laser (3.3 V, about 10 to 15 mA), HIGH = beam.
* ToF is on the board; keep its window uncovered.

## Run it

1. **Build and flash.** In STM32CubeIDE, select `Assignment2`, Build (hammer), then Run. New files in `Core/Src` are picked up automatically.
2. **Boot.** Your calibrations run first, unless you set them to 0 in `app_config.h`: 2 s gyro (keep still), then 10 s magnetometer (rotate). After that, Tera Term (115200 8N1) shows:
   `[ZD] Zombie Drone add-ons | CLK 80MHz | OLED OK (I2C1 D14/D15) | TOF OK | BUZZER PA3(D4)`
   followed by `Entering STANDBY MODE`. The OLED shows the splash, then the STANDBY screen.
3. **Check the spec in Tera Term.** Run your normal minimum-spec checks. The 50 Hz `C,` lines are only sent while the game is connected, so Tera Term shows only the spec messages.
4. **Game.**
   1. Close Tera Term.
   2. Double-click `game\start_game.bat` (it opens Chrome at `http://localhost:8028`).
   3. Click **CONNECT DRONE**, then pick *STMicroelectronics STLink Virtual COM Port*.
   4. Hold the board level and press **C**.
   5. Double-press the blue button to launch.
   6. If a tilt direction feels wrong, press **Esc** in the game, or change `TILT_PITCH_SIGN` / `TILT_ROLL_SIGN`.

## Tera Term commands (type, then Enter; your typing is not echoed)

| Command | Does |
|---|---|
| `E,TEST` | Prints live pitch, roll, ToF range, altitude, heading and what was found; beeps; flashes the OLED |
| `E,GCAL` | Gyroscope bias: keep the board still on the table for 2 s |
| `E,MCAL` | Magnetometer: rotate the whole assembly in all directions for 10 s |
| `E,TCAL,27.5` | Temperature calibration against a thermometer reading of 27.5 °C |
| `E,TCAL` | Temperature calibration against the first reading after power-up |
| `E,CAL` | Prints every calibration value as one block to paste into `app_config.h` |
| `E,TOF` | Prints the ToF readings 10× a second for 15 s, in any mode: raw mm, the sensor's own status, signal, filtered mm, ARMED or not, and how long the hand has been near |

The calibrations only run in STANDBY. Boot calibration is off (`GYRO_CAL_ON_BOOT 0`, `MAG_CAL_ON_BOOT 0`), so the board starts straight in STANDBY with the values stored in `app_config.h`.

**Calibration session (do it once, and again in the lab):**

1. Put everything in its demo position: shield, OLED, buzzer and cables. The buzzer has a magnet in it, so the magnetometer offsets must be measured with it attached.
2. In STANDBY, type `E,GCAL` with the board still, then `E,MCAL` while rotating everything as one unit.
3. After about 10 minutes of warm-up, type `E,TCAL,<reference>`.
4. Type `E,CAL` and paste the printed block over the matching lines in `app_config.h`. Rebuild and flash.

**Temperature calibration.** The HTS221 shares the PCB with the MCU, ST-LINK and Wi-Fi module, so it reads a few °C above the room once the board warms up (self-heating). The fix is a constant offset.

1. Leave the board in STANDBY for about 10 minutes so it reaches its steady temperature.
2. Get a reference temperature:
   * from a thermometer next to the board; or
   * without a thermometer: unplug the board for about 15 minutes, plug it in, and note the first `T:` value after the calibrations. That is roughly room temperature, because the board had not warmed up yet. `E,TCAL` alone uses that first reading automatically.
3. Type `E,TCAL,<reference>` or `E,TCAL`. The offset applies immediately.
4. Paste the printed `#define T_OFFSET ...` line into `app_config.h` so it survives a reset.

`H_SELF_HEAT_FIX 1` also corrects humidity. A warmer sensor sees lower relative humidity for the same water content, so H is scaled by the ratio of saturation vapour pressures (Magnus formula).

## Hardware checklist

| Do | Expect |
|---|---|
| Double press | `Entering BATTLE MODE`, beep, OLED BATTLE screen, PIT/ROL follow the tilt |
| Single press ×2 | `Laser charging` 3, 6, `Laser fired!`, zap on the buzzer |
| Flip the board | OLED inverted countdown 10..0, buzzer 2 Hz → 4 Hz (last 3 s) → 8 Hz (last 1 s) |
| Double press during the countdown | `Rescued!`, two beeps |
| Hand away (>15 cm), then palm held <5 cm over the ToF for 0.8 s | Attack with "ZOMBIE HAND GRAB" on the OLED. A quick wave over the board does nothing |
| No rescue for 10 s | `Drone terminated...`, OLED "SIGNAL LOST", long tone, then the OLED goes off |

## Laser in game mode

The spec says the laser fires automatically at ≥ 5/10, and the board does exactly that whenever the game is **not** connected (the Tera Term demo).

While the game **is** connected (and `ENH_MANUAL_FIRE` is 1), the player fires instead:
* **Tap** the blue button to charge +3/10 (unchanged).
* **Hold** the blue button for ≥ 0.5 s to fire.
* You can also press Space or click in the game.

If the laser has less than 5/10, the board prints `Laser not ready: n/10` and clicks the buzzer twice. A hold is detected in `button.c` (button still down when the 0.5 s double-press window ends) and is treated as a normal single press outside game mode.

The black button on the board is RESET. It is wired straight to the MCU reset pin, so software can't read it.

## Protocol

| Direction | Line | When |
|---|---|---|
| Board → PC | `C,<pitch>,<roll>,<fire>,<range_mm>,<energy>` | 50 Hz in BATTLE_MODE, game connected |
| Board → PC | `N,<baro_alt_m>,<heading>` | 2 Hz in BATTLE_MODE, game connected |
| Board → PC | `A,<sec_left>,<FLIP\|TOF>` | 1 Hz while attacked, game connected |
| Board → PC | `Z,STATUS,<mode>,<attacked>,<energy>` | reply to `E,PING` |
| PC → Board | `E,PING` (every 2 s), `E,HIT`, `E,CHARGE`, `E,WIPE,<s>`, `E,SAFE`, `E,SCORE,<score>,<habitats>` | game events |

`E,CHARGE` (flying through a pylon) charges the laser exactly like a single press.

## Troubleshooting

* **OLED "not found":** check the 3V3 switch and that the cable is in an I2C port. If the image is shifted by 2 px, set `OLED_COL_OFFSET 0`.
* **TOF "not found", or the range never changes:** the shield may cover the sensor. The flip trigger still works.
* **ToF too sensitive / not sensitive enough:** type `E,TOF` and watch the readings, then tune the ToF block in `app_config.h`: `TOF_NEAR_MM` (how close), `TOF_HOLD_MS` (how long), `TOF_FAR_MM` (how far the hand must go first), `TOF_MEDIAN` (smoothing). If the raw status keeps saying "too close" with nothing there (a cable over the sensor, say), set `TOF_COVERED_IS_NEAR 0`. `TOF_ATTACK 0` turns the ToF attack off altogether.

### How the ToF grab is filtered (tof.c)
1. Samples the VL53L0X itself flags as invalid (no target, weak signal, phase fail) count as "no target".
2. Median of the last 5 samples (~165 ms), so a single wild sample can't move the range.
3. Arms only after the hand has been further than `TOF_FAR_MM` for `TOF_ARM_MS`.
4. Grabs only if the filtered range stays under `TOF_NEAR_MM` without a break for `TOF_HOLD_MS` (0.8 s), while a grab is allowed: BATTLE mode, not already attacked, 1.5 s after entering BATTLE, and 1 s after the blue button was last touched (pressing it puts your hand near the sensor).
5. After a rescue: disarmed until the hand leaves, plus a 3 s cooldown.
* **Anything odd after the clock change:** set `ENH_FAST_CLOCK 0`.
* **Buzzer on another port:** change `BUZZER_PORT` / `BUZZER_PIN` (D2 = PD14, D3 = PB0, D5 = PB4, D6 = PB1, D7 = PA4, D8 = PB2).

Credits for third-party code are in `THIRD_PARTY_NOTICES.md`.

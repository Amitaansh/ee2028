# Zombie Drone: enhancements (EE2028 Assignment 2, Group 47)

The minimum specification lives in `comms`, `sensors`, `button` and `drone` (all in `Core/Src`). Every enhancement is its own module, and `drone.c` / `main.c` reach them only through `enhancements.c`:

* `drone.c` has hook calls marked `[ENH]` and a `start_attack()` helper, so the flip trigger and the ToF trigger share one code path.
* `main.c` calls `clock_init()` and `enh_init()`.
* `sensors.c` has the calibrations (gyro bias, magnetometer hard/soft iron, temperature offset) and `read_magneto_calibrated()` for the compass.

Each enhancement can be switched off in `app_config.h` (`ENH_*`). With all switches at 0 the board behaves like the plain minimum specification.

## Module map

| File | Job |
|---|---|
| `app_config.h` | Every threshold, timing, pin and switch, with an ENHANCEMENTS section at the bottom |
| `enhancements.c/.h` | Glue: timing of the extras (50 Hz tilt, 2 Hz nav, 10 Hz HUD, ToF polling) and how each event is shown |
| `clock.c/.h` | 80 MHz system clock (MSI 4 MHz -> PLL), falls back to 4 MHz if it fails |
| `uart_rx.c/.h` | USART1 receive interrupt -> 256-byte ring buffer -> text lines |
| `game_link.c/.h` | Protocol with the PC game (`C/N/A/Z/G/R` out, `E,...` in) and the Tera Term commands |
| `tilt.c/.h` | Pitch and roll from the accelerometer, low-pass filtered |
| `nav.c/.h` | Barometric altitude and compass heading |
| `habitat.c/.h` | Habitability: wet-bulb temperature (Stull 2011) <= 31 degC, T >= 10 degC, P inside the spec band |
| `buzzer.c/.h` | Active buzzer: non-blocking beeps and the attack alarm |
| `laser.c/.h` | KY-008 laser: faint aiming glow (software PWM from TIM7), full brightness on every `Laser fired!`, dark while attacked, 2 s safety cut-off |
| `vl53l0x.c/.h` | VL53L0X time-of-flight driver (not in the course BSP; ported from Pololu's library) |
| `tof.c/.h` | "Zombie hand" grab detector on top of the ToF readings |
| `oled.c/.h`, `oled_bus.c/.h`, `soft_i2c.c/.h` | 1.3" SH1106 HUD OLED: driver, bus search, bit-banged I2C |
| `hud.c/.h` | HUD screens: flight display (attitude, heading, altitude, laser energy), attacked countdown, SIGNAL LOST |
| `turret.c/.h` | Joystick (ADC1) and pan/tilt servos (TIM3 PWM), by Yatin |
| `tele_oled.c/.h` | 0.96" SSD1306 telemetry OLED on I2C1 with DMA, by Yatin |
| `game/` | The PC game (Three.js + Web Serial), not compiled by CubeIDE |
| `docs/` | Wiring diagram and game screenshots |

## Wiring

Board: B-L4S5I-IOT01A with the Seeed Base Shield V2, shield switch on **3V3**. See also `docs/wiring.png`.

| Component | Device pin | Board pin | MCU pin | Peripheral |
|---|---|---|---|---|
| HUD OLED 1.3" SH1106 | SCL / SDA | Grove **D7** socket (D7 / D8) | PA4 / PB2 | software I2C |
| Telemetry OLED 0.96" SSD1306 | SCL / SDA | Grove **I2C** socket (D15 / D14) | PB8 / PB9 | I2C1 + DMA1 ch6, 0x3C |
| Pan servo | signal | **D3** | PB0 | TIM3_CH3, 50 Hz |
| Tilt servo | signal | **D6** | PB1 | TIM3_CH4, 50 Hz |
| Both servos | red / brown | **5V** / GND | | |
| Joystick | VRx / VRy / SW | **A0 / A1 / D2** | PC5 / PC4 / PD14 | ADC1_IN14 / IN13 / GPIO pull-up |
| Joystick | VCC / GND | **3V3** (not 5V) / GND | | |
| Laser KY-008 | S / - (middle unused) | PMOD CN10 **pin 7 / pin 11** | PD2 / GND | GPIO + TIM7 software PWM |
| Buzzer | SIG | Grove **D4** | PA3 | GPIO, HIGH = sound |
| ToF, T/P/H, IMU, magnetometer | on board | | I2C2 PB10 / PB11 | BSP |
| LED2 / blue button | on board | | PB14 / PC13 | GPIO / EXTI13 (both edges, active low) |
| UART to the PC | ST-LINK USB | | PB6 / PB7 | USART1, 115200 8N1 |

Keep the ToF window clear of cables. If the board resets when the servos move, power them from a separate 5 V supply with a common GND.

## Running it

1. **Build and flash** in STM32CubeIDE (Build, then Run).
2. **Boot.** Three beeps, then `[ZD] ...` lines listing what was found, then `Entering STANDBY MODE`. The laser stays off in STANDBY.
3. **Spec demo in Tera Term** (115200 8N1). The machine lines for the game (`C,`, `N,`, `A,`) are only sent while the game is connected, so Tera Term shows only the spec messages.
4. **Game.** Close Tera Term, double-click `game\start_game.bat` (opens Chrome at `http://localhost:8028`), click **CONNECT DRONE** and pick the STLink Virtual COM Port. Hold the board level and press **C** to zero the tilt. If a direction feels wrong, press **Esc** in the game or change `TILT_PITCH_SIGN` / `TILT_ROLL_SIGN`. The keyboard "simulated board" works without hardware.

## Controls

| Situation | Blue button | Joystick | Laser |
|---|---|---|---|
| STANDBY | double = BATTLE | click = next telemetry page, hold 0.5 s = recentre the turret | off |
| BATTLE, GUI closed (Tera Term / spec demo) | single = +3/10, double = STANDBY, triple = MANUAL AIM on/off | steers the turret; hold 0.5 s = open the GUI | glow; **auto-fires at >= 5/10** (spec). MANUAL AIM: joystick click fires |
| BATTLE, GUI open | single = +3/10, double = STANDBY, long press (>= 0.5 s, fires on release) = fire | forward / back + pan of the game drone, click = fire, hold = close the GUI | glow; no auto-fire, also Space / click in the game |
| Attacked | double = rescue | ignored | dark |

The GUI needs the game connected (it sends `E,PING` every 2 s). Opening it sends `G,ON`; closing it, or losing the link, sends `G,OFF`. A game pylon (`E,CHARGE`) charges the laser exactly like a single press. If the laser has less than 5/10 when fired by hand, the board prints `Laser not ready: n/10` and the buzzer clicks twice.

The blue button is active low. EXTI13 triggers on both edges: the falling edge (press) only stores the time, the rising edge (release) is the press event. A double press is two releases within 0.5 s; a long press is held for at least 0.5 s on its own. The black button is the MCU's hardware reset and can't be read by software.

## Tera Term commands (type, then Enter; typing is not echoed)

| Command | Does |
|---|---|
| `E,TEST` | Prints pitch, roll, ToF range, altitude, heading and what was found; beeps; flashes the OLED |
| `E,GCAL` | Gyroscope bias: keep the board still for 2 s (STANDBY) |
| `E,MCAL` | Magnetometer: rotate everything in all directions for 10 s (STANDBY) |
| `E,TCAL,27.5` | Temperature offset against a thermometer reading of 27.5 degC (STANDBY) |
| `E,TCAL` | Temperature offset against the first reading after power-up (STANDBY) |
| `E,CAL` | Prints every calibration value as one block to paste into `app_config.h` |
| `E,TOF` | ToF readings 10x a second for 15 s: raw mm, sensor status, signal (MCPS), class, hit score, ARMED or not, whether a grab is allowed, filtered mm |
| `E,JOY` | Joystick 10x a second for 15 s: raw X / Y (centred ~2000), centre, stick %, direction, button, pan / tilt, `ok` or `WIRING FAULT` |
| `E,JOYCAL` | Joystick directions: push RIGHT, then UP when asked; prints `JOY_SWAP_XY` / `JOY_INVERT_X` / `JOY_INVERT_Y` (STANDBY) |
| `E,LASER` | Laser at full brightness for 1 s, to check the wiring (BATTLE only) |
| `E,LASER,<pct>` | Sets the aiming glow brightness until reset (then put it in `LASER_IDLE_PCT`) |

Calibration at boot is off (`GYRO_CAL_ON_BOOT 0`, `MAG_CAL_ON_BOOT 0`); the stored values in `app_config.h` are used. To redo them: put everything in its demo position (the buzzer magnet affects the magnetometer), type `E,GCAL` with the board still, `E,MCAL` while rotating everything as one unit, `E,TCAL,<reference>` after about 10 minutes of warm-up, then `E,CAL` and paste the block into `app_config.h`.

The HTS221 shares the PCB with the MCU, ST-LINK and Wi-Fi module, so it reads warmer than the room once the board warms up. `T_OFFSET` corrects that. `H_SELF_HEAT_FIX 1` would also correct humidity (Magnus formula); it is off.

## Attack triggers

* **Flip** (spec): accelerometer Z below -0.5 g, checked every 100 ms in BATTLE.
* **ToF hand grab:** a hand held within 7 cm of the sensor for about 0.2 s. Each reading is classed from the sensor's status, the distance and the return signal:
  * **NEAR**: valid and closer than `TOF_NEAR_MM` with at least `TOF_MIN_SIGNAL`, or "closer than the minimum range".
  * **mid**: up to `TOF_CLEAR_MM`.
  * **clear**: further, nothing in range, weak signal, or a "valid" reading under `TOF_FLOOR_MM`. Our sensor reads 0 mm when nothing is there, because it sees the shield.
  * **unsure**: phase fail. It counts as NEAR within 100 ms of a NEAR reading, otherwise it is ignored.

  Score: NEAR +1, mid -2, clear resets it. A grab needs `TOF_HIT_SAMPLES` (6) while the detector is armed and a grab is allowed: BATTLE, not attacked, 1 s after entering BATTLE, 0.7 s after the blue button was last held. It arms only after 6 readings with no hand, so a cable resting on the sensor can't attack. After a rescue the hand has to leave first, plus a 3 s cooldown.

Both triggers lead to the same spec sequence: `Drone Was Attacked!` every second, LED at 2 Hz, 10 s to rescue with a double press, otherwise `Drone terminated. Communication cut off.` The extras add a buzzer alarm that speeds up (2 / 4 / 8 Hz), an OLED countdown, the game overlay, and the laser going dark.

## Protocol

| Direction | Line | When |
|---|---|---|
| Board -> PC | `C,<pitch>,<roll>,<fire>,<range_mm>,<energy>,<joy_x>,<joy_y>` | 50 Hz in BATTLE, game connected |
| Board -> PC | `N,<baro_alt_m>,<heading>` | 2 Hz in BATTLE, game connected |
| Board -> PC | `A,<sec_left>,<FLIP\|TOF>` | 1 Hz while attacked, game connected |
| Board -> PC | `Z,STATUS,<mode>,<attacked>,<energy>,<gui>,<rl>` | reply to `E,PING` |
| Board -> PC | `G,ON` / `G,OFF`, `R,ON` / `R,OFF` | GUI / real-life mode on or off |
| PC -> Board | `E,PING` (every 2 s), `E,HIT`, `E,CHARGE`, `E,FIRE`, `E,WIPE,<s>`, `E,SAFE`, `E,SCORE,<score>,<habitats>`, `E,POS,<x>,<z>,<speed>,<alt>` | game events |
| PC -> Board | `E,RL,<0\|1>`, `E,AIM,<pan x10>,<tilt x10>,<flags>` (25 Hz) | real-life tab (flags: 1 target, 2 lock, 4 SAFE, 8 DOT, 16 DARK) |

## PLAY IN REAL LIFE (webcam + YOLO aim the turret)

After **CONNECT DRONE** the waiting screen has two tabs: **FLY THE DRONE** and **PLAY IN REAL LIFE**. The real-life tab opens the laptop webcam and runs **YOLOv8n** (COCO) in the browser with onnxruntime-web (WebGPU, with a WebAssembly fallback). The game keeps the USB link and streams the aim to the board; nothing else is installed. Start it with `start_game.bat` (the model and runtime load from the local server); `index.html?rl=cpu` forces the CPU path.

| Step | What happens |
|---|---|
| Open the tab | game sends `E,RL,1`, board answers `R,ON`, both OLEDs show REAL LIFE |
| Board in BATTLE | turret follows `E,AIM` at 25 Hz, at most `RL_SLEW_DPS` (90 deg/s), eases in, ignores changes under 0.4 deg |
| Target found | the picked class (soft toy, ball, bottle, cup, phone, or any) is tracked; the crosshair shows where the turret points |
| Lock | turret on target for 0.45 s. With auto-fire on lock and charge >= 5/10 the game sends `E,FIRE`; the board fires through the normal spec path and the real laser shoots |
| Person near the line of fire | SAFE flag: the board keeps the laser fully dark and refuses to fire |
| Joystick | moving it takes over the turret for 1.5 s; click fires |
| Leave the tab, open the GUI, or lose the link | real-life mode ends, the turret recentres |

There is no auto-fire in real-life mode; the spec auto-fire still applies whenever the GUI and the real-life tab are closed. **Calibrate (C)** once per set-up against a light wall with nobody in view: the turret visits a 3x3 grid, the laser dot is found at each point, and a least-squares fit maps picture position to pan / tilt. Arrow keys trim it, R resets the trim, clicking the picture aims there, X centres. `ENH_REAL_LIFE 0` removes the firmware side.

## Troubleshooting

* **HUD OLED not found:** check the shield's 3V3 switch and that it is in Grove D7. If the image is shifted by 2 px, set `OLED_COL_OFFSET 0`.
* **ToF grab never triggers:** be in BATTLE, type `E,TOF`, and check that it says ARMED and `grab ON` with nothing over the sensor. `[ZD] ToF: something is within 70 mm of the sensor` means a cable or the shield sits over it.
* **ToF too touchy:** raise `TOF_HIT_SAMPLES` (9 to 12). `TOF_ATTACK 0` turns the ToF attack off.
* **Joystick works only while its button is pressed:** the module's GND isn't reaching the board (GND and SW swapped, or GND loose). The firmware detects this at boot (`JOYSTICK WIRING FAULT`) and ignores the stick until it rests mid-scale for 1 s.
* **Joystick directions wrong:** VRx / VRy swapped on the module, or use `E,JOYCAL`.
* **Tilt wrong after mounting the board:** set `TILT_MOUNT_DEG` in `app_config.h` to how the board is turned on its mount, seen from above (90 = turned left, -90 = turned right, 180 = turned around). If pitch and roll both come out reversed, use the opposite sign.
* **Anything odd after the clock change:** set `ENH_FAST_CLOCK 0`.

Credits for third-party code and assets are in `THIRD_PARTY_NOTICES.md`.

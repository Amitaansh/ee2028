// protocol.js - board <-> game link for "The Last of EE2028"
//
// Board -> PC (ASCII lines, \r\n):
//   spec text   "Entering STANDBY MODE", "Entering BATTLE MODE", "T: ...", "Laser charging: n/10",
//               "Laser fired! Charge left: n/10", "Drone Was Attacked! ", "Rescued! ...", "Drone terminated ..."
//   C,<pitch>,<roll>,<fire>,<range_mm>,<energy>   50 Hz in BATTLE_MODE (tilt controller)
//   N,<alt_m>,<heading>                           2 Hz in BATTLE_MODE (barometer + magnetometer)
//   A,<sec_left>,<FLIP|TOF>                       1 Hz while attacked
//   Z,STATUS,<STANDBY|BATTLE>,<attacked>,<energy> reply to E,PING
// PC -> board:  E,PING  E,HIT  E,CHARGE  E,FIRE  E,WIPE,<sec>  E,SAFE  E,SCORE,<score>,<habitats>
// While the game is connected the board does NOT auto-fire: the player fires
// (hold the blue button >= 0.5 s, or E,FIRE from Space / click).

export function parseLine(line) {
  let m;
  if (line.startsWith('C,')) {
    const p = line.split(',');
    if (p.length >= 5) {
      return { type: 'tilt', pitch: +p[1], roll: +p[2], fire: p[3] === '1', range: +p[4],
               energy: p.length > 5 ? +p[5] : undefined };
    }
    return { type: 'junk', line };
  }
  if (line.startsWith('N,')) {
    const p = line.split(',');
    return { type: 'nav', alt: +p[1], hdg: +p[2] };
  }
  if ((m = /^A,(\d+),(\w+)/.exec(line))) return { type: 'attackTick', secs: +m[1], src: m[2] };
  if ((m = /^Z,STATUS,(\w+),(\d),(\d+)/.exec(line))) {
    return { type: 'status', mode: m[1], attacked: m[2] === '1', energy: +m[3] };
  }
  if (line.includes('Entering STANDBY MODE')) return { type: 'mode', mode: 'STANDBY', text: line };
  if (line.includes('Entering BATTLE MODE')) return { type: 'mode', mode: 'BATTLE', text: line };
  if ((m = /Laser fired! Charge left: (\d+)\/10/.exec(line))) return { type: 'fired', energy: +m[1], text: line };
  if ((m = /Laser charging: (\d+)\/10/.exec(line))) return { type: 'charging', energy: +m[1], text: line };
  if ((m = /Laser not ready: (\d+)\/10/.exec(line))) return { type: 'notready', energy: +m[1], text: line };
  if (line.includes('Drone Was Attacked')) return { type: 'attacked', text: line };
  if (line.includes('Rescued')) return { type: 'rescued', text: line };
  if (/terminated/i.test(line)) return { type: 'terminated', text: line };
  if ((m = /^T:\s*([-\d.]+).*?P:\s*([-\d.]+).*?H:\s*([-\d.]+)/.exec(line))) {
    return { type: 'telemetry', T: +m[1], P: +m[2], H: +m[3], text: line };
  }
  if (/threshold/.test(line)) return { type: 'warning', text: line };
  if (line.startsWith('[ZD]')) return { type: 'diag', text: line };
  return { type: 'text', text: line };
}

// ---------------------------------------------------------------- Web Serial
export class SerialLink {
  constructor(onLine, onStatus) {
    this.onLine = onLine;
    this.onStatus = onStatus || (() => {});
    this.enc = new TextEncoder();
    this.port = null;
    this.writer = null;
    this.reader = null;
    this.kind = 'usb';
  }

  static supported() { return typeof navigator !== 'undefined' && 'serial' in navigator; }

  async connect(baud = 115200, anyPort = false) {
    const opts = anyPort ? {} : { filters: [{ usbVendorId: 0x0483 }] };   // 0x0483 = STMicroelectronics ST-LINK
    this.port = await navigator.serial.requestPort(opts);
    await this.port.open({ baudRate: baud, bufferSize: 8192 });
    this.writer = this.port.writable.getWriter();
    this.onStatus('connected');
    this._readLoop();
  }

  async _readLoop() {
    const decoder = new TextDecoderStream();
    this._pipe = this.port.readable.pipeTo(decoder.writable).catch(() => {});
    this.reader = decoder.readable.getReader();
    let buf = '';
    try {
      for (;;) {
        const { value, done } = await this.reader.read();
        if (done) break;
        buf += value;
        let i;
        while ((i = buf.indexOf('\n')) >= 0) {
          const line = buf.slice(0, i).replace(/\r/g, '');
          buf = buf.slice(i + 1);
          if (line.length) this.onLine(line);
        }
        if (buf.length > 4096) buf = '';
      }
    } catch (e) {
      // device unplugged / port lost
    }
    this.onStatus('lost');
  }

  send(line) {
    if (!this.writer) return;
    this.writer.write(this.enc.encode(line + '\n')).catch(() => {});
  }

  async disconnect() {
    try { if (this.reader) await this.reader.cancel(); } catch (e) { /* ignore */ }
    try { if (this.writer) this.writer.releaseLock(); } catch (e) { /* ignore */ }
    try { if (this.port) await this.port.close(); } catch (e) { /* ignore */ }
    this.port = this.writer = this.reader = null;
    this.onStatus('closed');
  }
}

// ---------------------------------------------------------------- Simulated board
// Mirrors main.c + zombie_drone.c so the game is fully playable (and testable)
// without the STM32: the same text lines go through the same parser.
export class BoardSim {
  constructor(onLine) {
    this.onLine = onLine;
    this.kind = 'sim';
    this.mode = 'STANDBY';
    this.attacked = false;
    this.energy = 0;
    this.pitch = 0; this.roll = 0;          // degrees, driven by the keyboard
    this.targetPitch = 0; this.targetRoll = 0;
    this.range = 8190;
    this.flipped = false;
    this.terminated = false;
    this.t = 0;
    this.tTel = 0; this.tStream = 0; this.tNav = 0; this.tAtt = 0; this.tAttack0 = 0;
    this.pendingSingle = false; this.pressT = 0; this.lastEdge = -1;
    this.fireFlag = 0;
    this.src = 'FLIP';
    this.alt = 0;
  }

  emit(s) { if (!this.terminated) setTimeout(() => this.onLine(s), 0); }

  start() {
    this.emit('[ZD] Zombie Drone add-ons | SIMULATED BOARD (keyboard) | OLED - | TOF - | BUZZER -');
    this.emit('Entering STANDBY MODE');
  }

  // user button (Space): tap = single, two taps = double, hold >= 0.5 s = long (fire)
  press() {
    if (this.terminated) return;
    const now = performance.now() / 1000;
    this.t = now;
    this.held = true;
    if (now - this.lastEdge < 0.05) return;
    this.lastEdge = now;
    if (this.pendingSingle && now - this.pressT < 0.5) { this.pendingSingle = false; this._double(); }
    else { this.pendingSingle = true; this.pressT = now; }
  }

  release() { this.held = false; }

  _single() {
    if (this.mode === 'BATTLE' && !this.attacked) this._charge();
  }

  _long() {
    if (this.mode === 'BATTLE' && !this.attacked) this._fire();
  }

  // game mode: charging never fires by itself
  _charge() {
    this.energy = Math.min(10, this.energy + 3);
    this.emit(`Laser charging: ${this.energy}/10`);
  }

  _fire() {
    if (this.energy >= 5) {
      this.energy -= 5;
      this.emit(`Laser fired! Charge left: ${this.energy}/10`);
      this.fireFlag = 1;
    } else {
      this.emit(`Laser not ready: ${this.energy}/10 (needs 5/10)`);
    }
  }

  _double() {
    if (this.mode === 'STANDBY') { this.mode = 'BATTLE'; this.attacked = false; this.emit('Entering BATTLE MODE'); this.tBattle = this.t; }
    else if (!this.attacked) { this.mode = 'STANDBY'; this.emit('Entering STANDBY MODE'); this.tTel = this.t; }
    else { this.attacked = false; this.emit('Rescued! Back to BATTLE MODE'); }
  }

  _attack(src) {
    if (this.mode !== 'BATTLE' || this.attacked) return;
    this.attacked = true; this.src = src;
    this.tAttack0 = this.tAtt = this.t;
    this.emit('Drone Was Attacked! ');
    this.emit(`A,10,${src}`);
  }

  setFlipped(on) { this.flipped = on; }
  grab() { this.t = performance.now() / 1000; this.range = 40; this._grabUntil = this.t + 0.4; if (this.mode === 'BATTLE' && this.t - (this.tBattle || 0) > 1.5) this._attack('TOF'); }

  receive(line) {
    if (this.terminated) return;
    if (line === 'E,PING') this.emit(`Z,STATUS,${this.mode},${this.attacked ? 1 : 0},${this.energy}`);
    else if (line === 'E,CHARGE' && this.mode === 'BATTLE' && !this.attacked) this._charge();
    else if (line === 'E,FIRE' && this.mode === 'BATTLE' && !this.attacked) this._fire();
  }

  send(line) { this.receive(line); }

  update(dt) {
    if (this.terminated) return;
    this.t = performance.now() / 1000;          // real time, like the board's HAL_GetTick()
    const t = this.t;
    if (this.pendingSingle && t - this.pressT >= 0.5) { this.pendingSingle = false; if (this.held) this._long(); else this._single(); }
    if (this._grabUntil && t > this._grabUntil) { this.range = 8190; this._grabUntil = 0; }

    // keyboard tilt is smoothed like the firmware's low-pass filter
    const k = Math.min(1, dt * 6);
    this.pitch += (this.targetPitch - this.pitch) * k;
    this.roll += (this.targetRoll - this.roll) * k;

    if (this.mode === 'STANDBY') {
      if (t - this.tTel >= 1) {
        this.tTel = t;
        const T = 29.5 + Math.sin(t / 20) * 0.6, P = 1008.4 + Math.sin(t / 30) * 0.3, H = 63 + Math.sin(t / 15) * 3;
        this.emit(`T: ${T.toFixed(2)} degC, P: ${P.toFixed(2)} hPa, H: ${H.toFixed(2)} %RH, A: 9.79 m/s^2, G: 0.61 dps, M: 0.43 gauss`);
      }
      return;
    }
    if (this.mode !== 'BATTLE') return;
    // BATTLE
    if (this.flipped && !this.attacked) this._attack('FLIP');
    if (t - this.tStream >= 0.02) {
      this.tStream = t;
      const roll = this.flipped ? 178 : this.roll;
      this.emit(`C,${this.pitch.toFixed(1)},${roll.toFixed(1)},${this.fireFlag},${this.range},${this.energy}`);
      this.fireFlag = 0;
    }
    if (t - this.tNav >= 0.5) { this.tNav = t; this.emit(`N,${this.alt.toFixed(1)},0`); }
    if (this.attacked) {
      if (t - this.tAttack0 >= 10) {
        this.emit('Drone terminated. Communication cut off.');
        this.attacked = false; this.mode = 'DEAD';
        setTimeout(() => { this.terminated = true; }, 5);
      } else if (t - this.tAtt >= 1) {
        this.tAtt = t;
        const left = Math.ceil(10 - (t - this.tAttack0));
        this.emit('Drone Was Attacked! ');
        this.emit(`A,${left},${this.src}`);
      }
    }
  }

  reset() {
    const cb = this.onLine;
    Object.assign(this, new BoardSim(cb));
    this.start();
  }
}

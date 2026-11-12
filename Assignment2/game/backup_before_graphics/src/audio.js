// audio.js - all sounds are synthesised with WebAudio (no audio files needed)
export class Sfx {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) { return; }
    const c = this.ctx;
    this.master = c.createGain(); this.master.gain.value = 0.5; this.master.connect(c.destination);
    // rotor hum
    this.hum = c.createOscillator(); this.hum.type = 'sawtooth'; this.hum.frequency.value = 80;
    this.hum2 = c.createOscillator(); this.hum2.type = 'triangle'; this.hum2.frequency.value = 161;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
    this.humGain = c.createGain(); this.humGain.gain.value = 0;
    this.hum.connect(lp); this.hum2.connect(lp); lp.connect(this.humGain); this.humGain.connect(this.master);
    this.hum.start(); this.hum2.start();
    // noise buffer
    const len = c.sampleRate;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }

  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.5; }

  rotor(level, speed) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.humGain.gain.setTargetAtTime(level * 0.12, t, 0.2);
    this.hum.frequency.setTargetAtTime(70 + speed * 2.2, t, 0.2);
    this.hum2.frequency.setTargetAtTime(141 + speed * 4.4, t, 0.2);
  }

  _tone(type, f0, f1, dur, vol = 0.3, delay = 0) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime + delay;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  }

  _noise(dur, freq, vol = 0.4, delay = 0) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime + delay;
    const s = c.createBufferSource(); s.buffer = this.noise;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq;
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.master); s.start(t); s.stop(t + dur + 0.02);
  }

  laser() { this._tone('square', 1800, 180, 0.35, 0.22); this._tone('sawtooth', 900, 90, 0.4, 0.15, 0.03); this._noise(0.3, 3000, 0.12); }
  zap() { this._noise(0.25, 1200, 0.25); this._tone('triangle', 300, 60, 0.25, 0.2); }
  hit() { this._noise(0.4, 600, 0.6); this._tone('sine', 120, 40, 0.35, 0.5); }
  charge() { this._tone('sine', 400, 1200, 0.25, 0.25); this._tone('sine', 600, 1800, 0.25, 0.18, 0.12); }
  habitat() { [523, 659, 784, 1046].forEach((f, i) => this._tone('triangle', f, f, 0.3, 0.2, i * 0.12)); }
  tick() { this._tone('square', 1400, 1400, 0.06, 0.12); }
  alarm(fast) { this._tone('square', 880, 880, fast ? 0.08 : 0.14, 0.18); this._tone('square', 660, 660, fast ? 0.08 : 0.14, 0.18, fast ? 0.1 : 0.18); }
  rescued() { this._tone('triangle', 660, 660, 0.12, 0.25); this._tone('triangle', 990, 990, 0.18, 0.25, 0.15); }
  lost() { this._tone('sawtooth', 440, 55, 1.6, 0.35); this._noise(1.8, 5000, 0.25); }
  mode() { this._tone('sine', 520, 780, 0.15, 0.2); }
  win() { [523, 659, 784, 1046, 1318].forEach((f, i) => this._tone('triangle', f, f, 0.45, 0.22, i * 0.15)); }
}

// reallife.js: "PLAY IN REAL LIFE" mode.
//
// The webcam looks at the room in front of the turret. YOLOv8n (COCO, run in
// the browser by onnxruntime-web 1.22: WebGPU on the RTX 4060, WASM fallback;
// model, runtime set-up, decoding and tracking re-used from the L.I.G.H.T
// live-vision pipeline, which already runs on this laptop) finds
// the "zombie" (a toy, ball, bottle, cup or phone; never a person), the game
// turns its position in the picture into pan / tilt angles and streams them to
// the board as `E,AIM,<pan x10>,<tilt x10>,<flags>`. On a steady lock with
// enough charge it sends `E,FIRE`, so the board fires the real laser through
// the normal spec path (`Laser fired! Charge left: n/10`).
//
// Safety: a person near the aim point or the target sets the SAFE flag: the
// board keeps the laser fully dark and refuses to fire, and so does this page.
//
// Needs the page served over http (start_game.bat), because the model and the
// runtime are separate files: vendor/ort/*, models/yolov8n-dynamic.onnx.

// ---- protocol (keep in step with game_link.c / reallife.c) ----
export const AIM_TARGET = 1;   // a target is tracked
export const AIM_LOCK = 2;     // locked on (board shows LOCK)
export const AIM_SAFE = 4;     // person in the line of fire: laser dark, no fire
export const AIM_DOT = 8;      // calibration: laser full on (board cuts after 2 s)
export const AIM_DARK = 16;    // calibration: laser dark (no "human" meaning)

const PERSON = 0;
const NAMES = { 0: 'HUMAN', 32: 'BALL', 39: 'BOTTLE', 41: 'CUP', 67: 'PHONE', 77: 'TOY' };
export const TARGETS = [
  { key: 'toy', label: 'Soft toy', cls: [77] },
  { key: 'ball', label: 'Ball', cls: [32] },
  { key: 'bottle', label: 'Bottle', cls: [39] },
  { key: 'cup', label: 'Cup / mug', cls: [41] },
  { key: 'phone', label: 'Phone (zombie on screen)', cls: [67] },
  { key: 'any', label: 'Any of these', cls: [77, 32, 39, 41, 67] },
];
const ALL_CLS = [0, 32, 39, 41, 67, 77];

export const RL = {
  sendHz: 25,            // E,AIM lines per second
  confTarget: 0.35,      // detection thresholds
  confPerson: 0.30,      // lower for people on purpose (safer)
  nmsIou: 0.45,
  trackIou: 0.2,         // detection-to-track matching
  trackTtlMs: 600,       // track forgotten after this long unseen
  lockMs: 450,           // turret on target this long = LOCK
  lockErrDeg: 2.5,       // "on target" = simulated turret within this of the aim
  fireCooldownMs: 1500,
  neutralisedMs: 4000,   // a hit target is ignored this long, then "respawns"
  slewDps: 90,           // turret speed (must match RL_SLEW_DPS in app_config.h)
  personMargin: 0.15,    // person boxes grown by this fraction for the safety test
  personBigFrac: 0.30,   // a person covering this much of the frame = always SAFE
  calSpanPan: 15,        // calibration grid: +-deg around the current centre
  calSpanTilt: 9,
  calSettleMs: 700,
  calDotMs: 350,
  panLimit: 80,
  tiltLimit: 60,
  manualHoldMs: 3000,    // click-to-aim overrides tracking this long
};

const CFG_KEY = 'zd_reallife_v1';
const DEFAULT_MAP = { p: [0, 35, 0], t: [0, 0, -20], calibrated: false, rms: 0, n: 0 };

function loadCfg() {
  let c = null;
  try { c = JSON.parse(localStorage.getItem(CFG_KEY) || 'null'); } catch (e) { c = null; }
  c = c || {};
  return {
    target: TARGETS.some((t) => t.key === c.target) ? c.target : 'any',
    autofire: c.autofire !== false,
    cameraId: c.cameraId || '',
    map: c.map && Array.isArray(c.map.p) && Array.isArray(c.map.t) ? c.map : { ...DEFAULT_MAP },
    trim: Array.isArray(c.trim) ? c.trim : [0, 0],
  };
}
function saveCfg(c) {
  try { localStorage.setItem(CFG_KEY, JSON.stringify(c)); } catch (e) { /* storage off */ }
}

const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
const now = () => performance.now();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function iou(a, b) {
  const x1 = Math.max(a[0], b[0]), y1 = Math.max(a[1], b[1]);
  const x2 = Math.min(a[2], b[2]), y2 = Math.min(a[3], b[3]);
  const w = x2 - x1, h = y2 - y1;
  if (w <= 0 || h <= 0) return 0;
  const i = w * h;
  return i / ((a[2] - a[0]) * (a[3] - a[1]) + (b[2] - b[0]) * (b[3] - b[1]) - i);
}

// ---------------------------------------------------------------------------
// Detector: onnxruntime-web session + letterbox pre-processing + decode / NMS
// ---------------------------------------------------------------------------
function loadScript(src) {
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => res();
    s.onerror = () => rej(new Error('could not load ' + src));
    document.head.appendChild(s);
  });
}

async function fetchBytes(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(url + ': HTTP ' + r.status);
  return new Uint8Array(await r.arrayBuffer());
}

export class Detector {
  constructor(base = '') {
    this.base = base;
    this.session = null;
    this.size = 640;
    this.backend = '';
    this.canvas = document.createElement('canvas');
    this.ctx = null;
    this.input = null;
  }

  async init(onStatus = () => {}) {
    if (location.protocol === 'file:') {
      throw new Error('Real-life mode needs the local server.\nClose this page and start the game with start_game.bat.');
    }
    onStatus('Loading AI runtime…');
    if (!window.ort) await loadScript(this.base + 'vendor/ort/ort.webgpu.min.js');
    const ort = window.ort;
    if (!ort) throw new Error('AI runtime did not load');
    this.ort = ort;
    // As in L.I.G.H.T: read the runtime's module and .wasm ourselves and hand them
    // over as blob URLs, so the server's MIME types (Python's http.server on
    // Windows) cannot break the dynamic import or the WebAssembly compile.
    const dir = this.base + 'vendor/ort/';
    const [mjs, wasm] = await Promise.all([
      fetchBytes(dir + 'ort-wasm-simd-threaded.jsep.mjs'),
      fetchBytes(dir + 'ort-wasm-simd-threaded.jsep.wasm'),
    ]);
    ort.env.wasm.wasmPaths = {
      mjs: URL.createObjectURL(new Blob([mjs], { type: 'text/javascript' })),
      wasm: URL.createObjectURL(new Blob([wasm], { type: 'application/wasm' })),
    };
    ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 2) : 1;
    ort.env.wasm.proxy = false;
    ort.env.logLevel = 'error';
    try { ort.env.webgpu.powerPreference = 'high-performance'; } catch (e) { /* older runtime */ }

    onStatus('Loading YOLOv8n…');
    this.modelBytes = await fetchBytes(this.base + 'models/yolov8n-dynamic.onnx');
    let lastErr = null;
    const tries = [];
    // ?rl=cpu in the address forces the CPU path (if the GPU path ever misbehaves)
    if (navigator.gpu && !/[?&]rl=cpu\b/.test(location.search)) tries.push({ ep: 'webgpu', size: 640 });
    tries.push({ ep: 'wasm', size: 416 });
    for (const t of tries) {
      try {
        onStatus(`Starting YOLOv8n on the ${t.ep === 'webgpu' ? 'GPU (WebGPU)' : 'CPU (WebAssembly)'}…`);
        // a GPU that hangs while compiling must not hang the tab: give up after 25 s
        await Promise.race([
          this._open(t.ep, t.size),
          sleep(t.ep === 'webgpu' ? 25000 : 120000).then(() => { throw new Error(t.ep + ' start-up timed out'); }),
        ]);
        break;
      } catch (e) {
        lastErr = e;
        console.warn('[RL] ' + t.ep + ' failed:', e);
      }
    }
    if (!this.session) throw new Error('Could not start YOLO: ' + (lastErr && lastErr.message ? lastErr.message : lastErr));
  }

  async _open(ep, size) {
    const session = await this.ort.InferenceSession.create(this.modelBytes, {
      executionProviders: [ep],
      graphOptimizationLevel: 'all',
      logSeverityLevel: 3,
    });
    const old = this.session;
    this.session = session;
    this.size = size;
    this.backend = ep === 'webgpu' ? 'WebGPU' : 'WASM';
    this.inName = session.inputNames[0];
    this.outName = session.outputNames[0];
    this.canvas.width = size;
    this.canvas.height = size;
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.input = new Float32Array(3 * size * size);
    this.ctx.fillStyle = 'rgb(114,114,114)';
    this.ctx.fillRect(0, 0, size, size);
    await this._run(this.ctx.getImageData(0, 0, size, size));     // warm-up (shader compile)
    if (old) { try { await old.release(); } catch (e) { /* gone */ } }
    this.latency = 0;
    this.slow = 0;
  }

  // L.I.G.H.T's ladder, shortened: GPU failing or too slow -> CPU 416 -> CPU 320
  async degrade() {
    if (this.backend === 'WebGPU') await this._open('wasm', 416);
    else if (this.size > 320) await this._open('wasm', 320);
  }

  async _run(img) {
    const S = this.size, d = img.data, inp = this.input, plane = S * S;
    for (let i = 0, p = 0; i < plane; i++, p += 4) {
      inp[i] = d[p] / 255;
      inp[i + plane] = d[p + 1] / 255;
      inp[i + 2 * plane] = d[p + 2] / 255;
    }
    const tensor = new this.ort.Tensor('float32', inp, [1, 3, S, S]);
    let out;
    try {
      out = await this.session.run({ [this.inName]: tensor });
      const o = out[this.outName];
      if (o.dims.length !== 3 || o.dims[1] !== 84) throw new Error('unexpected YOLO output ' + o.dims.join('x'));
      return { data: Float32Array.from(o.data), n: o.dims[2] };
    } finally {
      try { tensor.dispose(); } catch (e) { /* cpu tensor */ }
      if (out) for (const v of Object.values(out)) { try { v.dispose(); } catch (e) { /* ignore */ } }
    }
  }

  // source: video / image / canvas, w x h its pixel size.
  // Returns [{cls, score, box:[x1,y1,x2,y2]}] in source pixels.
  async detect(source, w, h, classes = ALL_CLS) {
    const t0 = performance.now();
    let r;
    try {
      r = await this._detect(source, w, h, classes);
    } catch (e) {
      console.warn('[RL] inference failed, falling back:', e);
      await this.degrade();
      return this._detect(source, w, h, classes);
    }
    const ms = performance.now() - t0;
    this.latency = this.latency ? this.latency * 0.8 + ms * 0.2 : ms;
    this.slow = this.latency > 150 ? this.slow + 1 : 0;
    if (this.slow >= 10 && !(this.backend === 'WASM' && this.size <= 320)) {
      this.slow = 0;
      this.degrade().catch(() => {});
    }
    return r;
  }

  async _detect(source, w, h, classes) {
    const S = this.size;
    const scale = Math.min(S / w, S / h);
    const nw = Math.round(w * scale), nh = Math.round(h * scale);
    const px = Math.floor((S - nw) / 2), py = Math.floor((S - nh) / 2);
    const ctx = this.ctx;
    ctx.fillStyle = 'rgb(114,114,114)';
    ctx.fillRect(0, 0, S, S);
    ctx.drawImage(source, 0, 0, w, h, px, py, nw, nh);
    const { data, n } = await this._run(ctx.getImageData(0, 0, S, S));
    return decode(data, n, classes, scale, px, py, w, h);
  }
}

// YOLOv8 head: [1, 84, n] = cx, cy, w, h, 80 class scores (already sigmoid).
// A target must be the best of all 80 classes (as in L.I.G.H.T's decodeYolo, so
// a chair that looks a bit like a teddy bear is not a target). A person counts
// on its own score even when another class wins: for safety, see people early.
export function decode(data, n, classes, scale, px, py, w, h) {
  const want = new Set(classes);
  const wantPerson = want.has(PERSON);
  const cand = [];
  for (let i = 0; i < n; i++) {
    let best = 0, bs = 0;
    for (let c = 0; c < 80; c++) {
      const v = data[(4 + c) * n + i];
      if (v > bs) { bs = v; best = c; }
    }
    const ps = data[4 * n + i];
    const isPerson = wantPerson && ps >= RL.confPerson && Number.isFinite(ps);
    const isTarget = best !== PERSON && want.has(best) && bs >= RL.confTarget && Number.isFinite(bs);
    if (!isPerson && !isTarget) continue;
    const cx = data[i], cy = data[n + i], bw = data[2 * n + i], bh = data[3 * n + i];
    const x1 = clamp((cx - bw / 2 - px) / scale, 0, w);
    const y1 = clamp((cy - bh / 2 - py) / scale, 0, h);
    const x2 = clamp((cx + bw / 2 - px) / scale, 0, w);
    const y2 = clamp((cy + bh / 2 - py) / scale, 0, h);
    if (!(x2 - x1 >= 2 && y2 - y1 >= 2)) continue;
    // one anchor can be both: a toy held by someone is still a toy, and the person still blocks the shot
    if (isPerson) cand.push({ cls: PERSON, score: ps, box: [x1, y1, x2, y2] });
    if (isTarget) cand.push({ cls: best, score: bs, box: [x1, y1, x2, y2] });
  }
  cand.sort((a, b) => b.score - a.score);
  const keep = [];
  for (const c of cand) {
    let ok = true;
    for (const k of keep) if (k.cls === c.cls && iou(k.box, c.box) > RL.nmsIou) { ok = false; break; }
    if (ok) keep.push(c);
    if (keep.length >= 30) break;
  }
  return keep;
}

// ---------------------------------------------------------------------------
// Aim map: pixel (u, v in -1..1) -> turret angles, affine, fitted by calibration
// ---------------------------------------------------------------------------
export function mapToAngles(map, trim, u, v) {
  return [
    map.p[0] + map.p[1] * u + map.p[2] * v + trim[0],
    map.t[0] + map.t[1] * u + map.t[2] * v + trim[1],
  ];
}
export function anglesToMap(map, trim, pan, tilt) {
  const a = map.p[1], b = map.p[2], c = map.t[1], d = map.t[2];
  const det = a * d - b * c;
  if (Math.abs(det) < 1e-6) return [0, 0];
  const x = pan - map.p[0] - trim[0], y = tilt - map.t[0] - trim[1];
  return [(d * x - b * y) / det, (-c * x + a * y) / det];
}
// Least squares fit of z = k0 + k1*u + k2*v.
export function fitAffine(pts, key) {
  const A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], B = [0, 0, 0];
  for (const q of pts) {
    const r = [1, q.u, q.v];
    for (let i = 0; i < 3; i++) {
      B[i] += r[i] * q[key];
      for (let j = 0; j < 3; j++) A[i][j] += r[i] * r[j];
    }
  }
  // Gaussian elimination
  const M = A.map((row, i) => [...row, B[i]]);
  for (let i = 0; i < 3; i++) {
    let p = i;
    for (let r = i + 1; r < 3; r++) if (Math.abs(M[r][i]) > Math.abs(M[p][i])) p = r;
    if (Math.abs(M[p][i]) < 1e-9) return null;
    [M[i], M[p]] = [M[p], M[i]];
    for (let r = 0; r < 3; r++) {
      if (r === i) continue;
      const f = M[r][i] / M[i][i];
      for (let c = i; c < 4; c++) M[r][c] -= f * M[i][c];
    }
  }
  return [M[0][3] / M[0][0], M[1][3] / M[1][1], M[2][3] / M[2][2]];
}

// Laser dot = the brightest red increase between a laser-off and a laser-on
// frame (both RGBA ImageData of the same size). Returns {x, y, peak} or null.
export function findDot(off, on) {
  const w = on.width, h = on.height, a = off.data, b = on.data;
  const diff = new Float32Array(w * h);
  for (let i = 0, p = 0; i < w * h; i++, p += 4) {
    const dr = b[p] - a[p], dg = b[p + 1] - a[p + 1], db = b[p + 2] - a[p + 2];
    // a red dot raises R most; a saturated dot raises everything a bit
    diff[i] = Math.max(0, dr) + 0.35 * Math.max(0, Math.min(dg, db));
  }
  // remove global brightness changes (auto exposure)
  const sample = [];
  for (let i = 0; i < diff.length; i += 97) sample.push(diff[i]);
  sample.sort((x, y) => x - y);
  const base = sample[Math.floor(sample.length * 0.9)] || 0;
  let best = -1, bi = -1;
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const s = diff[i] + diff[i - 1] + diff[i + 1] + diff[i - w] + diff[i + w];
      if (s > best) { best = s; bi = i; }
    }
  }
  const peak = best / 5 - base;
  if (bi < 0 || peak < 28) return null;
  const bx = bi % w, by = (bi / w) | 0;
  // uniqueness: nothing else nearly as strong away from the peak
  let second = 0;
  for (let y = 1; y < h - 1; y += 2) {
    for (let x = 1; x < w - 1; x += 2) {
      if (Math.abs(x - bx) < 14 && Math.abs(y - by) < 14) continue;
      const i = y * w + x;
      const s = (diff[i] + diff[i - 1] + diff[i + 1] + diff[i - w] + diff[i + w]) / 5 - base;
      if (s > second) second = s;
    }
  }
  if (second > 0.6 * peak) return null;
  // centroid around the peak
  let sx = 0, sy = 0, sw = 0;
  for (let y = Math.max(0, by - 6); y <= Math.min(h - 1, by + 6); y++) {
    for (let x = Math.max(0, bx - 6); x <= Math.min(w - 1, bx + 6); x++) {
      const v = Math.max(0, diff[y * w + x] - base - 0.3 * peak);
      sx += v * x; sy += v * y; sw += v;
    }
  }
  if (sw <= 0) return { x: bx, y: by, peak };
  return { x: sx / sw, y: sy / sw, peak };
}

// ---------------------------------------------------------------------------
// Tracker: greedy IoU matching, stable ids, short memory
// ---------------------------------------------------------------------------
class Tracker {
  constructor() { this.tracks = []; this.nextId = 1; }
  update(dets, t, W, H, ttl = RL.trackTtlMs) {
    const diag = Math.hypot(W, H) || 1;
    this.tracks = this.tracks.filter((tr) => t - tr.lastSeen < ttl);
    // as in L.I.G.H.T's VisionTracker: pair on overlap or a small move, best pairs first
    const pairs = [];
    dets.forEach((d, di) => {
      const dcx = (d.box[0] + d.box[2]) / 2, dcy = (d.box[1] + d.box[3]) / 2;
      for (const tr of this.tracks) {
        if (tr.cls !== d.cls) continue;
        const ov = iou(tr.box, d.box);
        const disp = Math.hypot(tr.cx - dcx, tr.cy - dcy) / diag;
        if (ov > 0.12 || disp < 0.12) pairs.push({ tr, di, score: ov + Math.max(0, 0.15 - disp) });
      }
    });
    pairs.sort((a, b) => b.score - a.score);
    const usedT = new Set(), usedD = new Set();
    for (const p of pairs) {
      if (usedT.has(p.tr) || usedD.has(p.di)) continue;
      usedT.add(p.tr); usedD.add(p.di);
      const d = dets[p.di], tr = p.tr;
      tr.box = tr.box.map((v, i) => v * 0.3 + d.box[i] * 0.7);
      tr.cx = (tr.box[0] + tr.box[2]) / 2;
      tr.cy = (tr.box[1] + tr.box[3]) / 2;
      tr.score = d.score;
      tr.lastSeen = t;
      tr.hits++;
    }
    dets.forEach((d, di) => {
      if (usedD.has(di)) return;
      this.tracks.push({
        id: this.nextId++, cls: d.cls, box: d.box.slice(), score: d.score,
        cx: (d.box[0] + d.box[2]) / 2, cy: (d.box[1] + d.box[3]) / 2,
        firstSeen: t, lastSeen: t, hits: 1, deadUntil: 0,
      });
    });
  }
  get(id) { return this.tracks.find((tr) => tr.id === id) || null; }
}

// ---------------------------------------------------------------------------
// UI + control loop
// ---------------------------------------------------------------------------
const STYLE = `
#rl{position:fixed;inset:0;z-index:60;display:flex;background:radial-gradient(ellipse at 40% 30%,#0b1622 0%,#03070c 70%);color:#cfe9ff;font-family:inherit}
#rl.hidden{display:none}
#rl .rl-tabs{position:absolute;top:14px;left:50%;transform:translateX(-50%);z-index:3}
#title:not(.waiting) #zdTabs{display:none}
#zdTabs{margin:0 0 20px}
.zd-tabs{display:flex;gap:6px;padding:4px;border:1px solid rgba(120,210,255,.28);background:rgba(6,16,26,.72);backdrop-filter:blur(6px);border-radius:4px}
.zd-tabs button{all:unset;cursor:pointer;padding:8px 18px;font:600 12px/1 inherit;letter-spacing:.18em;text-transform:uppercase;color:#8fb9d6;border:1px solid transparent;border-radius:3px}
.zd-tabs button:hover{color:#e6f6ff;border-color:rgba(120,210,255,.35)}
.zd-tabs button.on{color:#06121c;background:linear-gradient(180deg,#7fe3ff,#33b6ff);box-shadow:0 0 18px rgba(80,200,255,.45)}
.zd-tabs button.rl.on{background:linear-gradient(180deg,#ff8a7a,#ff3b2f);box-shadow:0 0 18px rgba(255,80,60,.5);color:#1a0503}
#rl .rl-stage{position:relative;flex:1;min-width:0;margin:64px 0 18px 18px}
#rl video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000}
#rl canvas.rl-ov{position:absolute;inset:0;width:100%;height:100%;cursor:crosshair}
#rl .rl-msg{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);max-width:70%;text-align:center;font-size:15px;letter-spacing:.06em;color:#bfe6ff;text-shadow:0 0 10px rgba(80,190,255,.6);white-space:pre-line}
#rl .rl-banner{position:absolute;left:50%;top:14px;transform:translateX(-50%);font:700 20px/1 inherit;letter-spacing:.3em;padding:8px 16px;border-radius:3px;pointer-events:none}
#rl .rl-banner.lock{color:#ff4b3a;text-shadow:0 0 14px rgba(255,60,40,.9);border:1px solid rgba(255,80,60,.6);background:rgba(40,4,2,.45)}
#rl .rl-banner.safe{color:#ffc23a;text-shadow:0 0 14px rgba(255,190,40,.8);border:1px solid rgba(255,190,60,.6);background:rgba(40,28,2,.55)}
#rl .rl-banner.track{color:#7fe3ff;border:1px solid rgba(120,210,255,.4);background:rgba(4,20,32,.45)}
#rl .rl-banner.warn{color:#ff8a7a;border:1px solid rgba(255,120,100,.45);background:rgba(40,8,6,.5)}
#rl .rl-panel{width:300px;margin:64px 18px 18px 14px;padding:14px 16px;border:1px solid rgba(120,210,255,.25);background:rgba(6,16,26,.72);backdrop-filter:blur(6px);border-radius:4px;display:flex;flex-direction:column;gap:10px;overflow:auto;font-size:12px}
#rl .rl-h{font:700 15px/1.1 inherit;letter-spacing:.22em;color:#ff5a48;text-shadow:0 0 12px rgba(255,70,50,.55)}
#rl .rl-h small{display:block;margin-top:4px;font-size:10px;letter-spacing:.3em;color:#7fb6d8;text-shadow:none}
#rl .rl-row{display:flex;justify-content:space-between;gap:8px;border-bottom:1px solid rgba(120,210,255,.1);padding-bottom:5px}
#rl .rl-row span:first-child{color:#6f9ab8;letter-spacing:.14em;text-transform:uppercase;font-size:10px;padding-top:2px}
#rl .rl-row b{font-weight:600;color:#e6f6ff;text-align:right}
#rl .rl-cells{display:flex;gap:3px}
#rl .rl-cells i{width:16px;height:10px;transform:skewX(-18deg);background:rgba(120,210,255,.12);border:1px solid rgba(120,210,255,.25)}
#rl .rl-cells i.on{background:#39c2ff;box-shadow:0 0 6px rgba(60,190,255,.8)}
#rl .rl-cells.ready i.on{background:#ff4b3a;box-shadow:0 0 6px rgba(255,70,50,.9);border-color:rgba(255,90,70,.7)}
#rl label{display:flex;flex-direction:column;gap:4px;color:#6f9ab8;letter-spacing:.14em;text-transform:uppercase;font-size:10px}
#rl label.chk{flex-direction:row;align-items:center;gap:8px;color:#cfe9ff;letter-spacing:.06em;text-transform:none;font-size:12px}
#rl select{background:#08141f;color:#e6f6ff;border:1px solid rgba(120,210,255,.3);padding:6px;font:inherit;font-size:12px;border-radius:3px}
#rl .rl-btns{display:grid;grid-template-columns:1fr 1fr;gap:6px}
#rl .rl-btns button{cursor:pointer;padding:9px 6px;font:600 11px/1 inherit;letter-spacing:.14em;text-transform:uppercase;color:#cfe9ff;background:rgba(20,50,72,.55);border:1px solid rgba(120,210,255,.35);border-radius:3px}
#rl .rl-btns button:hover{background:rgba(40,90,125,.7)}
#rl .rl-btns button.fire{color:#ffd9d4;background:rgba(110,16,10,.6);border-color:rgba(255,90,70,.6)}
#rl .rl-btns button.wide{grid-column:1/3}
#rl .rl-btns button:disabled{opacity:.4;cursor:default}
#rl .rl-help{color:#7fa3bd;line-height:1.5;font-size:11px}
#rl .rl-log{font-family:ui-monospace,Consolas,monospace;font-size:10.5px;color:#9ec7e3;line-height:1.45;max-height:110px;overflow:hidden;border-top:1px solid rgba(120,210,255,.12);padding-top:6px}
#rl .rl-kill{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) scale(.9);font:800 34px/1 inherit;letter-spacing:.24em;color:#ff4b3a;text-shadow:0 0 22px rgba(255,60,40,.95);opacity:0;pointer-events:none;transition:opacity .15s,transform .35s}
#rl .rl-kill.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
`;

export class RealLife {
  // opts.send(line)      write one line to the board (without \r\n)
  // opts.connected()     true while the board link is up (USB, not the sim)
  // opts.onBack()        user asked to go back to the drone tab
  // opts.onKill(n)       a real target was hit (n = total this session)
  // opts.onShot()        laser fired (for sound)
  constructor(opts = {}) {
    this.opts = opts;
    this.cfg = loadCfg();
    this.det = new Detector(opts.base || '');
    this.tracker = new Tracker();
    this.isOpen = false;
    this.ready = false;
    this.loading = null;
    this.stream = null;
    this.board = { mode: '', attacked: false, energy: 0, rl: false, lastLine: 0 };
    this.dets = [];
    this.lockId = 0;
    this.lockSince = 0;
    this.state = 'IDLE';
    this.safe = false;
    this.aim = [0, 0];          // commanded angles
    this.turret = [0, 0];       // simulated turret position (slew-limited)
    this.manual = null;         // {u, v, until}
    this.calib = null;          // running calibration
    this.forceFlags = 0;
    this.lastFire = 0;
    this.pendingFire = 0;
    this.kills = 0;
    this.fps = 0;
    this.logLines = [];
    this.fx = [];
    this._sendTimer = null;
    this._raf = 0;
    this._busy = false;
    this._buildDom();
  }

  // ---- DOM ----
  _buildDom() {
    if (!document.getElementById('rl-style')) {
      const st = document.createElement('style');
      st.id = 'rl-style';
      st.textContent = STYLE;
      document.head.appendChild(st);
    }
    const el = document.createElement('div');
    el.id = 'rl';
    el.className = 'hidden';
    el.innerHTML = `
      <div class="rl-tabs zd-tabs"><button data-tab="fly">Fly the drone</button><button class="rl on" data-tab="rl">Play in real life</button></div>
      <div class="rl-stage">
        <video playsinline muted></video>
        <canvas class="rl-ov"></canvas>
        <div class="rl-banner"></div>
        <div class="rl-kill">ZOMBIE NEUTRALISED</div>
        <div class="rl-msg"></div>
      </div>
      <aside class="rl-panel">
        <div class="rl-h">REAL-LIFE MODE<small>YOLO LOCK-ON · LASER TURRET</small></div>
        <div class="rl-row"><span>Board</span><b data-k="board">–</b></div>
        <div class="rl-row"><span>Laser charge</span><div class="rl-cells" data-k="cells"></div></div>
        <div class="rl-row"><span>State</span><b data-k="state">–</b></div>
        <div class="rl-row"><span>Target</span><b data-k="target">–</b></div>
        <div class="rl-row"><span>Aim (pan / tilt)</span><b data-k="aim">–</b></div>
        <div class="rl-row"><span>Zombies hit</span><b data-k="kills">0</b></div>
        <div class="rl-row"><span>Vision</span><b data-k="model">–</b></div>
        <div class="rl-row"><span>Calibration</span><b data-k="cal">–</b></div>
        <label>Zombie is a<select data-k="selTarget"></select></label>
        <label>Camera<select data-k="selCam"><option value="">Default camera</option></select></label>
        <label class="chk"><input type="checkbox" data-k="auto"> Fire automatically on lock</label>
        <div class="rl-btns">
          <button class="fire wide" data-k="fire">Fire (Space)</button>
          <button data-k="cal">Calibrate (C)</button>
          <button data-k="centre">Centre (X)</button>
          <button class="wide" data-k="back">Back to the drone (Esc)</button>
        </div>
        <div class="rl-help">Board in BATTLE (double press). Tap blue to charge: fires at 5/10.<br>Click the picture to aim there. Arrows trim the aim, R resets the trim.<br>Calibrate with a light wall behind the zombie and nobody in view.</div>
        <div class="rl-log" data-k="log"></div>
      </aside>`;
    document.body.appendChild(el);
    this.el = el;
    const q = (k) => el.querySelector(`[data-k="${k}"]`);
    this.ui = {
      board: q('board'), cells: q('cells'), state: q('state'), target: q('target'), aim: q('aim'),
      kills: q('kills'), model: q('model'), cal: el.querySelector('.rl-row [data-k="cal"]'),
      selTarget: q('selTarget'), selCam: q('selCam'), auto: q('auto'), log: q('log'),
      btnFire: el.querySelector('button[data-k="fire"]'), btnCal: el.querySelector('button[data-k="cal"]'),
      btnCentre: q('centre'), btnBack: q('back'),
      video: el.querySelector('video'), canvas: el.querySelector('canvas'),
      msg: el.querySelector('.rl-msg'), banner: el.querySelector('.rl-banner'), kill: el.querySelector('.rl-kill'),
    };
    for (let i = 0; i < 10; i++) this.ui.cells.appendChild(document.createElement('i'));
    for (const t of TARGETS) {
      const o = document.createElement('option');
      o.value = t.key; o.textContent = t.label;
      this.ui.selTarget.appendChild(o);
    }
    this.ui.selTarget.value = this.cfg.target;
    this.ui.auto.checked = this.cfg.autofire;
    this.ui.selTarget.onchange = () => { this.cfg.target = this.ui.selTarget.value; this.lockId = 0; saveCfg(this.cfg); };
    this.ui.auto.onchange = () => { this.cfg.autofire = this.ui.auto.checked; saveCfg(this.cfg); };
    this.ui.selCam.onchange = () => { this.cfg.cameraId = this.ui.selCam.value; saveCfg(this.cfg); this._startCamera(); };
    this.ui.btnFire.onclick = () => this.fire('button');
    this.ui.btnCal.onclick = () => this.calibrate();
    this.ui.btnCentre.onclick = () => this.centre();
    this.ui.btnBack.onclick = () => this.opts.onBack && this.opts.onBack();
    el.querySelector('.rl-tabs [data-tab="fly"]').onclick = () => this.opts.onBack && this.opts.onBack();
    this.ui.canvas.addEventListener('click', (e) => this._clickAim(e));
    this._onKey = (e) => this._key(e);
    this.ctx = this.ui.canvas.getContext('2d');
  }

  _log(s) {
    const t = new Date();
    const ts = `${String(t.getMinutes()).padStart(2, '0')}:${String(t.getSeconds()).padStart(2, '0')}`;
    this.logLines.push(`${ts} ${s}`);
    if (this.logLines.length > 7) this.logLines.shift();
    this.ui.log.textContent = this.logLines.join('\n');
    this.ui.log.style.whiteSpace = 'pre-line';
  }

  // ---- open / close ----
  async open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.el.classList.remove('hidden');
    window.addEventListener('keydown', this._onKey, true);
    this.lockId = 0;
    this.manual = null;
    this._sendRl(true);
    this._sendTimer = setInterval(() => this._tickSend(), 1000 / RL.sendHz);
    this._raf = requestAnimationFrame(() => this._frame());
    this._msg('');
    try {
      if (!this.ready) {
        if (!this.loading) this.loading = this.det.init((s) => this._msg(s));
        await this.loading;
        this.ready = true;
      }
      this.ui.model.textContent = `YOLOv8n ${this.det.size} · ${this.det.backend}`;
      if (!this.isOpen) return;
      await this._startCamera();
    } catch (e) {
      this.loading = null;
      this._msg(String(e && e.message ? e.message : e));
      console.error('[RL]', e);
    }
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.calib = null;
    this.el.classList.add('hidden');
    window.removeEventListener('keydown', this._onKey, true);
    clearInterval(this._sendTimer);
    cancelAnimationFrame(this._raf);
    this._sendRl(false);
    this._stopCamera();
  }

  _sendRl(on) {
    this.board.rl = false;
    if (this.opts.connected && this.opts.connected()) this._send(on ? 'E,RL,1' : 'E,RL,0');
  }

  _send(line) { try { this.opts.send && this.opts.send(line); } catch (e) { console.warn('[RL] send', e); } }

  _msg(s) { this.ui.msg.textContent = s || ''; }

  async _startCamera() {
    this._stopCamera();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this._msg('No camera API in this browser. Use Chrome or Edge.');
      return;
    }
    this._msg('Starting camera…');
    const video = { width: { ideal: 1280 }, height: { ideal: 720 }, frameRate: { ideal: 30 } };
    if (this.cfg.cameraId) video.deviceId = { exact: this.cfg.cameraId };
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video, audio: false });
    } catch (e) {
      if (this.cfg.cameraId) {
        this.cfg.cameraId = '';
        saveCfg(this.cfg);
        return this._startCamera();
      }
      this._msg('Camera blocked or not found.\nAllow the camera for this page (icon at the right of the address bar), then reopen the tab.');
      return;
    }
    if (!this.isOpen) { this._stopCamera(); return; }
    const v = this.ui.video;
    v.srcObject = this.stream;
    await v.play().catch(() => {});
    this._msg('');
    this._fillCameras();
    this._loop();
  }

  _stopCamera() {
    if (this.stream) for (const t of this.stream.getTracks()) t.stop();
    this.stream = null;
    this.ui.video.srcObject = null;
  }

  async _fillCameras() {
    try {
      const devs = (await navigator.mediaDevices.enumerateDevices()).filter((d) => d.kind === 'videoinput');
      const sel = this.ui.selCam;
      const cur = (this.stream && this.stream.getVideoTracks()[0] && this.stream.getVideoTracks()[0].getSettings().deviceId) || '';
      sel.innerHTML = '';
      devs.forEach((d, i) => {
        const o = document.createElement('option');
        o.value = d.deviceId;
        o.textContent = d.label || `Camera ${i + 1}`;
        sel.appendChild(o);
      });
      sel.value = cur;
    } catch (e) { /* not important */ }
  }

  // ---- board lines (called by the game for every line from the board) ----
  onLine(line) {
    const b = this.board;
    b.lastLine = now();
    if (line.startsWith('C,')) {
      const f = line.split(',');
      const e = parseInt(f[5], 10);
      if (!Number.isNaN(e)) b.energy = e;
      b.mode = 'BATTLE';
    } else if (line.startsWith('Z,STATUS,')) {
      const f = line.split(',');
      b.mode = f[2] || b.mode;
      b.attacked = f[3] === '1';
      const e = parseInt(f[4], 10);
      if (!Number.isNaN(e)) b.energy = e;
      if (f.length > 6) b.rl = f[6] === '1';
    } else if (line.startsWith('A,')) {
      b.attacked = true;
      b.attackedAt = now();
      b.attackSecs = parseInt(line.split(',')[1], 10) || 0;
    } else if (line.startsWith('R,ON')) {
      b.rl = true;
      if (this.isOpen) this._log('Board: real-life mode on');
    } else if (line.startsWith('R,OFF')) {
      b.rl = false;
    } else if (line.startsWith('Entering BATTLE')) {
      b.mode = 'BATTLE';
      if (this.isOpen) { this._log('BATTLE mode'); this._sendRl(true); }
    } else if (line.startsWith('Entering STANDBY')) {
      b.mode = 'STANDBY';
      b.attacked = false;
      if (this.isOpen) this._log('STANDBY mode');
    } else if (line.includes('Rescue') || line.includes('rescued') || line.includes('RESCUED')) {
      b.attacked = false;
    } else if (line.startsWith('Laser fired!')) {
      const m = line.match(/left:\s*(\d+)/);
      if (m) b.energy = parseInt(m[1], 10);
      if (this.isOpen) this._onShot();
    } else if (line.startsWith('Laser not ready')) {
      if (this.isOpen) this._log(line.trim());
    } else if (line.startsWith('Laser charging')) {
      const m = line.match(/(\d+)\s*\/\s*10/);
      if (m) b.energy = parseInt(m[1], 10);
    } else if (line.startsWith('[ZD] PC link lost')) {
      b.rl = false;
    }
    if (b.attacked && b.attackedAt && now() - b.attackedAt > 1600 && !line.startsWith('A,')) {
      // A lines come every second while attacked; quiet for 1.6 s = over
      b.attacked = false;
    }
  }

  _onShot() {
    this.opts.onShot && this.opts.onShot();
    const t = now();
    const tr = this.lockId ? this.tracker.get(this.lockId) : null;
    if (tr && t - this.pendingFire < 1500) {
      tr.deadUntil = t + RL.neutralisedMs;
      this.kills++;
      this.ui.kills.textContent = String(this.kills);
      this.opts.onKill && this.opts.onKill(this.kills);
      this._log(`HIT: ${NAMES[tr.cls] || 'target'} #${tr.id}`);
      this.fx.push({ t, box: tr.box.slice() });
      this.ui.kill.classList.add('show');
      setTimeout(() => this.ui.kill.classList.remove('show'), 900);
      this.lockId = 0;
    } else {
      this._log('Laser fired');
    }
    this.pendingFire = 0;
    this.fx.push({ t, shot: true, aim: this.turret.slice() });
  }

  // ---- detection loop ----
  async _loop() {
    if (this._busy) return;
    this._busy = true;
    const v = this.ui.video;
    let last = now();
    try {
      while (this.isOpen && this.stream) {
        if (v.readyState < 2 || !v.videoWidth) { await sleep(50); continue; }
        if (this.calib) { await sleep(50); continue; }
        const cls = this._classes();
        let dets;
        try {
          dets = await this.det.detect(v, v.videoWidth, v.videoHeight, cls);
        } catch (e) {
          console.error('[RL] detect', e);
          this._msg('Vision error: ' + (e.message || e));
          await sleep(500);
          continue;
        }
        const t = now();
        this.fps = this.fps * 0.85 + 0.15 * (1000 / Math.max(1, t - last));
        this.frameMs = this.frameMs ? this.frameMs * 0.8 + 0.2 * (t - last) : t - last;
        last = t;
        this.dets = dets;
        this._update(dets, t, v.videoWidth, v.videoHeight);
        // keep the GPU free for the rest of the page: ~30 Hz is plenty
        const spare = 33 - (now() - t);
        await sleep(spare > 0 ? spare : 0);
      }
    } finally {
      this._busy = false;
    }
  }

  // a slow (CPU) detector must not forget a target between two frames
  _ttl() { return Math.max(RL.trackTtlMs, 3 * (this.frameMs || 0)); }

  _classes() {
    const t = TARGETS.find((x) => x.key === this.cfg.target) || TARGETS[TARGETS.length - 1];
    return [PERSON, ...t.cls];
  }

  _update(dets, t, W, H) {
    const targets = dets.filter((d) => d.cls !== PERSON);
    const people = dets.filter((d) => d.cls === PERSON);
    this.tracker.update(targets, t, W, H, this._ttl());
    this.W = W; this.H = H;

    // pick / keep the lock
    let tr = this.lockId ? this.tracker.get(this.lockId) : null;
    if (tr && (tr.deadUntil > t || t - tr.lastSeen > this._ttl())) tr = null;
    if (!tr) {
      const [cu, cv] = anglesToMap(this.cfg.map, this.cfg.trim, this.turret[0], this.turret[1]);
      const ax = (cu + 1) / 2 * W, ay = (cv + 1) / 2 * H;
      let best = null, bs = -1e9;
      for (const c of this.tracker.tracks) {
        if (c.deadUntil > t || t - c.lastSeen > 150 || c.hits < 2) continue;
        const dist = Math.hypot(c.cx - ax, c.cy - ay) / Math.hypot(W, H);
        const s = c.score - 0.8 * dist;
        if (s > bs) { bs = s; best = c; }
      }
      tr = best;
      if (tr) { this.lockId = tr.id; this.lockSince = 0; this._log(`Target: ${NAMES[tr.cls]} #${tr.id}`); }
      else this.lockId = 0;
    }
    this.target = tr;

    // where to aim
    let u = null, v = null;
    if (this.manual && t < this.manual.until) { u = this.manual.u; v = this.manual.v; }
    else if (tr) { this.manual = null; u = tr.cx / W * 2 - 1; v = tr.cy / H * 2 - 1; }
    if (u !== null) {
      const a = mapToAngles(this.cfg.map, this.cfg.trim, u, v);
      this.aim = [clamp(a[0], -RL.panLimit, RL.panLimit), clamp(a[1], -RL.tiltLimit, RL.tiltLimit)];
    }

    // safety: any person near the aim point or the target
    const [au, av] = anglesToMap(this.cfg.map, this.cfg.trim, this.aim[0], this.aim[1]);
    const ax = (au + 1) / 2 * W, ay = (av + 1) / 2 * H;
    const [tu, tv] = anglesToMap(this.cfg.map, this.cfg.trim, this.turret[0], this.turret[1]);
    const tx = (tu + 1) / 2 * W, ty = (tv + 1) / 2 * H;
    let safe = false;
    for (const p of people) {
      const [x1, y1, x2, y2] = p.box;
      const mx = (x2 - x1) * RL.personMargin, my = (y2 - y1) * RL.personMargin;
      const g = [x1 - mx, y1 - my, x2 + mx, y2 + my];
      const inside = (x, y) => x >= g[0] && x <= g[2] && y >= g[1] && y <= g[3];
      if ((x2 - x1) * (y2 - y1) > RL.personBigFrac * W * H) safe = true;
      if (inside(ax, ay) || inside(tx, ty)) safe = true;
      if (tr && iou(g, tr.box) > 0) safe = true;
    }
    if (safe && !this.safe) this._log('Human in line of fire: weapon safe');
    this.safe = safe;
  }

  // ---- 25 Hz: simulate the turret, send E,AIM, decide on firing ----
  _tickSend() {
    const t = now();
    const dt = 1 / RL.sendHz;
    const step = RL.slewDps * dt;
    for (let i = 0; i < 2; i++) this.turret[i] += clamp(this.aim[i] - this.turret[i], -step, step);
    const b = this.board;
    const tr = this.target;
    const onTarget = tr && Math.hypot(this.aim[0] - this.turret[0], this.aim[1] - this.turret[1]) < RL.lockErrDeg;
    if (tr && onTarget && !this.manual) { if (!this.lockSince) this.lockSince = t; }
    else this.lockSince = 0;
    const locked = !!(tr && this.lockSince && t - this.lockSince > RL.lockMs && !this.safe);

    let state;
    if (this.calib) state = 'CALIBRATING';
    else if (!this.stream) state = 'NO CAMERA';
    else if (b.attacked) state = 'ATTACKED';
    else if (this.safe) state = 'SAFE';
    else if (this.manual && t < this.manual.until) state = 'MANUAL AIM';
    else if (locked) state = 'LOCKED';
    else if (tr) state = 'TRACKING';
    else state = 'SEARCHING';
    this.state = state;

    let flags = 0;
    if (tr) flags |= AIM_TARGET;
    if (locked) flags |= AIM_LOCK;
    if (this.safe) flags |= AIM_SAFE;
    if (this.calib) flags = this.forceFlags;
    const conn = this.opts.connected && this.opts.connected();
    if (conn && this.stream) {
      this._send(`E,AIM,${Math.round(this.aim[0] * 10)},${Math.round(this.aim[1] * 10)},${flags}`);
    }
    // keep asking for real-life mode until the board confirms it
    if (conn && !b.rl && (!this._rlAsk || t - this._rlAsk > 1000)) { this._rlAsk = t; this._send('E,RL,1'); }

    // fire on lock
    if (locked && this.cfg.autofire && !this.calib && b.mode === 'BATTLE' && !b.attacked
        && b.energy >= 5 && t - this.lastFire > RL.fireCooldownMs) {
      this.fire('lock');
    }
  }

  fire(why) {
    const t = now();
    if (this.safe) { this._log('Not firing: human in line of fire'); return; }
    if (this.calib) return;
    if (t - this.lastFire < 400) return;
    this.lastFire = t;
    this.pendingFire = t;
    if (this.opts.connected && this.opts.connected()) {
      this._send('E,FIRE');
      if (why === 'lock') this._log('Locked: firing');
    } else {
      this._log('No board: simulated shot');
      this._onShot();
    }
  }

  centre() {
    this.manual = { u: 0, v: 0, until: now() + RL.manualHoldMs };
    const [u, v] = anglesToMap(this.cfg.map, this.cfg.trim, 0, 0);
    this.manual.u = u; this.manual.v = v;
    this.aim = [0, 0];
    this._log('Turret to centre');
  }

  _clickAim(e) {
    if (!this.W || this.calib) return;
    const r = this._videoRect();
    const x = (e.clientX - r.x) / r.w, y = (e.clientY - r.y) / r.h;
    if (x < 0 || x > 1 || y < 0 || y > 1) return;
    const u = x * 2 - 1, v = y * 2 - 1;
    this.manual = { u, v, until: now() + RL.manualHoldMs };
    const a = mapToAngles(this.cfg.map, this.cfg.trim, u, v);
    this.aim = [clamp(a[0], -RL.panLimit, RL.panLimit), clamp(a[1], -RL.tiltLimit, RL.tiltLimit)];
  }

  _key(e) {
    if (!this.isOpen) return;
    const k = e.key;
    let used = true;
    const st = e.shiftKey ? 2 : 0.5;
    if (k === 'Escape') this.opts.onBack && this.opts.onBack();
    else if (k === ' ' || k === 'Spacebar') this.fire('key');
    else if (k === 'c' || k === 'C') this.calibrate();
    else if (k === 'x' || k === 'X') this.centre();
    else if (k === 'r' || k === 'R') { this.cfg.trim = [0, 0]; saveCfg(this.cfg); this._log('Trim reset'); }
    else if (k === 'ArrowLeft') this._trim(-st, 0);
    else if (k === 'ArrowRight') this._trim(st, 0);
    else if (k === 'ArrowUp') this._trim(0, st);
    else if (k === 'ArrowDown') this._trim(0, -st);
    else used = false;
    if (used) { e.preventDefault(); e.stopPropagation(); }
  }

  _trim(dp, dt) {
    this.cfg.trim = [this.cfg.trim[0] + dp, this.cfg.trim[1] + dt];
    saveCfg(this.cfg);
  }

  // ---- calibration: point the turret on a grid, find the laser dot ----
  async calibrate() {
    if (this.calib || !this.stream) return;
    const conn = this.opts.connected && this.opts.connected();
    if (!conn) { this._log('Calibration needs the board'); return; }
    if (this.board.mode !== 'BATTLE') { this._log('Calibration: put the board in BATTLE first'); return; }
    if (this.safe || this.dets.some((d) => d.cls === PERSON)) {
      this._log('Calibration: nobody may be in view');
      this._banner('NOBODY IN VIEW FOR CALIBRATION', 'warn', 2500);
      return;
    }
    const v = this.ui.video;
    const W = 320, H = Math.round(320 * v.videoHeight / v.videoWidth);
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const cx = cv.getContext('2d', { willReadFrequently: true });
    const grab = () => { cx.drawImage(v, 0, 0, W, H); return cx.getImageData(0, 0, W, H); };
    const avg = (a, b) => { const o = new ImageData(W, H); for (let i = 0; i < a.data.length; i++) o.data[i] = (a.data[i] + b.data[i]) >> 1; return o; };
    const centre = this.aim.slice();
    const pts = [];
    this.calib = { step: 0, total: 9 };
    this._log('Calibrating: keep clear of the beam');
    try {
      const grid = [];
      for (const ty of [1, 0, -1]) for (const px of [-1, 0, 1]) grid.push([centre[0] + px * RL.calSpanPan, centre[1] + ty * RL.calSpanTilt]);
      for (let i = 0; i < grid.length; i++) {
        if (!this.isOpen || !this.calib) throw new Error('stopped');
        this.calib.step = i + 1;
        this.aim = grid[i].slice();
        this.forceFlags = AIM_DARK;
        await sleep(RL.calSettleMs);
        const off = avg(grab(), (await sleep(60), grab()));
        this.forceFlags = AIM_DOT;
        await sleep(RL.calDotMs);
        const on = avg(grab(), (await sleep(40), grab()));
        this.forceFlags = AIM_DARK;
        const dot = findDot(off, on);
        if (dot) {
          pts.push({ u: dot.x / W * 2 - 1, v: dot.y / H * 2 - 1, pan: grid[i][0], tilt: grid[i][1] });
          this.calib.last = { x: dot.x / W, y: dot.y / H };
        }
        this.calib.found = pts.length;
      }
      this.forceFlags = AIM_DARK;
      if (pts.length < 4) throw new Error(`saw the dot only ${pts.length}/9 times. Use a light wall, dim the room, try again.`);
      const p = fitAffine(pts, 'pan'), q = fitAffine(pts, 'tilt');
      if (!p || !q) throw new Error('dot positions were in a line, try again');
      let se = 0;
      for (const s of pts) {
        const a = [p[0] + p[1] * s.u + p[2] * s.v, q[0] + q[1] * s.u + q[2] * s.v];
        se += (a[0] - s.pan) ** 2 + (a[1] - s.tilt) ** 2;
      }
      const rms = Math.sqrt(se / pts.length);
      this.cfg.map = { p, t: q, calibrated: true, rms: Math.round(rms * 10) / 10, n: pts.length };
      this.cfg.trim = [0, 0];
      saveCfg(this.cfg);
      this._log(`Calibrated: ${pts.length}/9 points, error ${rms.toFixed(1)}°`);
      this._banner('CALIBRATED', 'track', 1500);
    } catch (e) {
      if (String(e.message) !== 'stopped') { this._log('Calibration failed: ' + e.message); this._banner('CALIBRATION FAILED', 'warn', 2500); }
    } finally {
      this.calib = null;
      this.forceFlags = 0;
      this.aim = centre;
    }
  }

  _banner(text, cls, ms) {
    this._bannerHold = { text, cls, until: now() + ms };
  }

  // ---- drawing ----
  _videoRect() {
    const c = this.ui.canvas, v = this.ui.video;
    const cw = c.clientWidth, ch = c.clientHeight;
    const vw = v.videoWidth || 16, vh = v.videoHeight || 9;
    const s = Math.min(cw / vw, ch / vh);
    const w = vw * s, h = vh * s;
    const rect = c.getBoundingClientRect();
    return { x: rect.left + (cw - w) / 2, y: rect.top + (ch - h) / 2, ox: (cw - w) / 2, oy: (ch - h) / 2, w, h, s };
  }

  _frame() {
    if (!this.isOpen) return;
    this._raf = requestAnimationFrame(() => this._frame());
    const c = this.ui.canvas, ctx = this.ctx;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cw = c.clientWidth, ch = c.clientHeight;
    if (c.width !== Math.round(cw * dpr) || c.height !== Math.round(ch * dpr)) {
      c.width = Math.round(cw * dpr); c.height = Math.round(ch * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);
    this._panel();
    if (!this.stream || !this.W) return;
    const r = this._videoRect();
    const sx = r.w / this.W, sy = r.h / this.H;
    const X = (x) => r.ox + x * sx, Y = (y) => r.oy + y * sy;
    const t = now();

    // scanlines + frame
    ctx.strokeStyle = 'rgba(120,210,255,.35)';
    ctx.lineWidth = 1;
    ctx.strokeRect(r.ox + 0.5, r.oy + 0.5, r.w - 1, r.h - 1);

    // detections
    ctx.font = '600 12px system-ui, sans-serif';
    for (const d of this.dets) {
      const [x1, y1, x2, y2] = d.box;
      if (d.cls === PERSON) {
        ctx.strokeStyle = 'rgba(255,194,58,.9)';
        ctx.setLineDash([6, 4]);
        ctx.lineWidth = 2;
        ctx.strokeRect(X(x1), Y(y1), X(x2) - X(x1), Y(y2) - Y(y1));
        ctx.setLineDash([]);
        this._tag(ctx, X(x1), Y(y1), `HUMAN ${Math.round(d.score * 100)}% · NO FIRE`, '#ffc23a', 'rgba(40,28,2,.75)');
      }
    }
    const stale = Math.max(250, 2.5 * (this.frameMs || 0));
    for (const tr of this.tracker.tracks) {
      if (t - tr.lastSeen > stale) continue;
      const [x1, y1, x2, y2] = tr.box;
      const isLock = tr.id === this.lockId;
      const dead = tr.deadUntil > t;
      const col = dead ? 'rgba(140,140,140,.8)' : isLock ? (this.state === 'LOCKED' ? '#ff4b3a' : '#7fe3ff') : 'rgba(127,227,255,.55)';
      this._brackets(ctx, X(x1), Y(y1), X(x2), Y(y2), col, isLock ? 3 : 2);
      const label = dead ? `${NAMES[tr.cls]} #${tr.id} · DOWN` : `ZOMBIE · ${NAMES[tr.cls]} #${tr.id} ${Math.round(tr.score * 100)}%`;
      this._tag(ctx, X(x1), Y(y1), label, col, 'rgba(4,14,22,.75)');
      if (isLock && !dead) {
        // lock ring closing in
        const cx = X(tr.cx), cy = Y(tr.cy);
        const k = this.lockSince ? clamp((t - this.lockSince) / RL.lockMs, 0, 1) : 0;
        const rad = Math.max(X(x2) - X(x1), Y(y2) - Y(y1)) * (0.9 - 0.3 * k) + 10;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t / 600);
        ctx.strokeStyle = col;
        ctx.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, rad, i * Math.PI / 2 + 0.25, i * Math.PI / 2 + 1.2);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // where the laser is pointing (simulated turret) and where it is going
    const [au, av] = anglesToMap(this.cfg.map, this.cfg.trim, this.aim[0], this.aim[1]);
    const [tu, tv] = anglesToMap(this.cfg.map, this.cfg.trim, this.turret[0], this.turret[1]);
    const ax = r.ox + (au + 1) / 2 * r.w, ay = r.oy + (av + 1) / 2 * r.h;
    const tx = r.ox + (tu + 1) / 2 * r.w, ty = r.oy + (tv + 1) / 2 * r.h;
    ctx.strokeStyle = 'rgba(127,227,255,.35)';
    ctx.setLineDash([3, 5]);
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(ax, ay); ctx.stroke();
    ctx.setLineDash([]);
    const hot = this.safe ? '#ffc23a' : this.state === 'LOCKED' ? '#ff4b3a' : '#7fe3ff';
    ctx.strokeStyle = hot;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(tx, ty, 9, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tx - 20, ty); ctx.lineTo(tx - 12, ty); ctx.moveTo(tx + 12, ty); ctx.lineTo(tx + 20, ty);
    ctx.moveTo(tx, ty - 20); ctx.lineTo(tx, ty - 12); ctx.moveTo(tx, ty + 12); ctx.lineTo(tx, ty + 20);
    ctx.stroke();
    ctx.fillStyle = this.safe ? 'rgba(0,0,0,0)' : 'rgba(255,60,40,.9)';
    ctx.beginPath(); ctx.arc(tx, ty, 2.2, 0, Math.PI * 2); ctx.fill();

    // effects: shot flash and hit burst
    this.fx = this.fx.filter((f) => t - f.t < 1000);
    for (const f of this.fx) {
      const k = (t - f.t) / 1000;
      if (f.shot) {
        ctx.fillStyle = `rgba(255,70,50,${0.35 * (1 - k) * (1 - k)})`;
        ctx.fillRect(r.ox, r.oy, r.w, r.h);
      } else if (f.box) {
        const [x1, y1, x2, y2] = f.box;
        const cx = X((x1 + x2) / 2), cy = Y((y1 + y2) / 2);
        const R = (Math.max(X(x2) - X(x1), Y(y2) - Y(y1)) * 0.5 + 10) * (1 + 1.5 * k);
        ctx.strokeStyle = `rgba(255,${Math.round(160 - 120 * k)},60,${1 - k})`;
        ctx.lineWidth = 4 * (1 - k) + 1;
        ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
        for (let i = 0; i < 14; i++) {
          const ang = i * 2.399 + f.t;
          const d0 = R * 0.6, d1 = R * (0.9 + 0.3 * Math.sin(i));
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(ang) * d0, cy + Math.sin(ang) * d0);
          ctx.lineTo(cx + Math.cos(ang) * d1, cy + Math.sin(ang) * d1);
          ctx.stroke();
        }
      }
    }

    // calibration marker
    if (this.calib && this.calib.last) {
      const x = r.ox + this.calib.last.x * r.w, y = r.oy + this.calib.last.y * r.h;
      ctx.strokeStyle = '#7dff9a';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
    }
  }

  _tag(ctx, x, y, text, fg, bg) {
    const w = ctx.measureText(text).width + 10;
    const yy = Math.max(0, y - 18);
    ctx.fillStyle = bg;
    ctx.fillRect(x, yy, w, 17);
    ctx.fillStyle = fg;
    ctx.fillText(text, x + 5, yy + 13);
  }

  _brackets(ctx, x1, y1, x2, y2, col, lw) {
    const L = Math.min(18, (x2 - x1) / 3, (y2 - y1) / 3);
    ctx.strokeStyle = col;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(x1, y1 + L); ctx.lineTo(x1, y1); ctx.lineTo(x1 + L, y1);
    ctx.moveTo(x2 - L, y1); ctx.lineTo(x2, y1); ctx.lineTo(x2, y1 + L);
    ctx.moveTo(x2, y2 - L); ctx.lineTo(x2, y2); ctx.lineTo(x2 - L, y2);
    ctx.moveTo(x1 + L, y2); ctx.lineTo(x1, y2); ctx.lineTo(x1, y2 - L);
    ctx.stroke();
  }

  _panel() {
    const t = now();
    const b = this.board;
    const conn = this.opts.connected && this.opts.connected();
    let boardTxt;
    if (!conn) boardTxt = 'NOT CONNECTED (no turret)';
    else if (!b.mode) boardTxt = 'CONNECTED';
    else boardTxt = b.mode + (b.attacked ? ' · ATTACKED' : '') + (b.rl ? ' · RL' : '');
    this.ui.board.textContent = boardTxt;
    const cells = this.ui.cells.children;
    for (let i = 0; i < 10; i++) cells[i].classList.toggle('on', i < b.energy);
    this.ui.cells.classList.toggle('ready', b.energy >= 5);
    this.ui.state.textContent = this.calib ? `CALIBRATING ${this.calib.step}/9 (dot ${this.calib.found || 0})` : this.state;
    const tr = this.target;
    this.ui.target.textContent = tr ? `${NAMES[tr.cls]} #${tr.id} · ${Math.round(tr.score * 100)}%` : '–';
    this.ui.aim.textContent = `${this.aim[0].toFixed(1)}° / ${this.aim[1].toFixed(1)}°`;
    if (this.ready) this.ui.model.textContent = `YOLOv8n ${this.det.size} · ${this.det.backend} · ${Math.round(this.fps)} fps`;
    const m = this.cfg.map;
    const trim = this.cfg.trim;
    this.ui.cal.textContent = (m.calibrated ? `${m.n}/9 pts · ±${m.rms}°` : 'not calibrated') + (trim[0] || trim[1] ? ` · trim ${trim[0].toFixed(1)}/${trim[1].toFixed(1)}` : '');
    this.ui.btnCal.disabled = !!this.calib;

    // banner
    let text = '', cls = '';
    if (this._bannerHold && t < this._bannerHold.until) { text = this._bannerHold.text; cls = this._bannerHold.cls; }
    else if (this.calib) { text = 'CALIBRATING · KEEP CLEAR OF THE BEAM'; cls = 'warn'; }
    else if (!this.stream) { text = ''; }
    else if (b.attacked) { text = `DRONE UNDER ATTACK · DOUBLE PRESS · ${b.attackSecs || 0} s`; cls = 'warn'; }
    else if (this.safe) { text = 'HUMAN IN LINE OF FIRE · WEAPON SAFE'; cls = 'safe'; }
    else if (conn && b.mode === 'STANDBY') { text = 'STANDBY · DOUBLE PRESS FOR BATTLE'; cls = 'warn'; }
    else if (this.state === 'LOCKED') { text = b.energy >= 5 || !conn ? 'TARGET LOCKED' : 'LOCKED · CHARGE THE LASER'; cls = 'lock'; }
    else if (this.state === 'TRACKING') { text = 'TRACKING'; cls = 'track'; }
    else if (this.state === 'SEARCHING') { text = 'SEARCHING FOR ZOMBIES'; cls = 'track'; }
    else if (this.state === 'MANUAL AIM') { text = 'MANUAL AIM'; cls = 'track'; }
    this.ui.banner.textContent = text;
    this.ui.banner.className = 'rl-banner ' + cls;
    this.ui.banner.style.display = text ? '' : 'none';
  }
}

// Tab bar for the drone side (waiting screen). Returns the element.
export function makeTabs(onRealLife) {
  const d = document.createElement('div');
  d.className = 'zd-tabs';
  d.id = 'zdTabs';
  d.innerHTML = '<button class="on" data-tab="fly">Fly the drone</button><button class="rl" data-tab="rl">Play in real life</button>';
  d.querySelector('[data-tab="rl"]').onclick = onRealLife;
  return d;
}

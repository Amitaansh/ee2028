// main.js - "The Last of EE2028" game: wiring between the STM32 board link,
// the 3D world, the drone and the HUD.
import * as THREE from 'three';
import { Gfx } from './gfx.js';
import { World, HALF, roadLine } from './world.js';
import { Drone, ChaseCam } from './drone.js';
import { parseLine, SerialLink, BoardSim } from './protocol.js';
import { Sfx } from './audio.js';

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ------------------------------------------------------------ settings (remembered per browser)
const DEFAULTS = { invertPitch: false, invertRoll: false, swap: false, sens: 1.0, maxTilt: 35, bloom: true, deadzone: 3, gfx: 'auto' };
let settings = { ...DEFAULTS };
try { Object.assign(settings, JSON.parse(localStorage.getItem('zd-settings') || '{}')); } catch (e) { /* storage blocked */ }
function saveSettings() { try { localStorage.setItem('zd-settings', JSON.stringify(settings)); } catch (e) { /* ignore */ } }

// ------------------------------------------------------------ renderer, scene, post
// Post-processing and quality presets live in gfx.js (MSAA + GTAO + bloom + grade on High,
// SMAA + bloom on Low). Graphics: Auto starts on High and drops to Low if the frame rate stays low.
const renderer = new THREE.WebGLRenderer({ canvas: $('c'), antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(66, window.innerWidth / window.innerHeight, 0.5, 6000);
const gfx = new Gfx(renderer, scene, camera);

const world = new World(scene, renderer);
const drone = new Drone(scene);
const chase = new ChaseCam(camera);
const sfx = new Sfx();
let autoLow = false;
function gfxLevel() { return settings.gfx === 'low' || (settings.gfx === 'auto' && autoLow) ? 'low' : 'high'; }
function applyGfx() { const q = gfxLevel(); gfx.setQuality(q); world.setQuality(q); }
applyGfx();
world.lightning.onThunder = (delay, strength) => sfx.thunder(delay, strength);

// ------------------------------------------------------------ game state
const G = {
  link: null, linkKind: 'none', linkOk: false,
  boardMode: 'UNKNOWN', attacked: false, attackSecs: 10, attackSrc: 'FLIP', attackT0: 0, terminated: false,
  energy: 0, raw: { pitch: 0, roll: 0 }, range: 8190, baroAlt: null, boardHdg: null,
  calib: { pitch: 0, roll: 0 },
  score: 0, kills: 0, hordesCleared: 0, habitatsFound: 0, hull: 100,
  missionT: 0, running: false, over: false,
  wipeActive: false, wipeT: 6, wipeSent: -1,
  lastTilt: 0, cCount: 0, cRate: 0, lastLine: 0, fwSeen: false, tConnect: 0, fwWarned: false,
  T: null, P: null, H: null,
  lastScoreMsg: '', tScore: 0, tPing: 0, tRate: 0,
  gui: false, joy: { x: 0, y: 0 },         // USB: GUI opened by holding the joystick button on the board (G,ON)
};
// USB play only runs while the board says the GUI is active; the keyboard simulation always runs
const guiLive = () => G.linkKind !== 'usb' || G.gui;
window.__zd = { G, world, drone, settings, gfx, chase, camera };    // handy in the DevTools console

// ------------------------------------------------------------ command centre log
const logEl = $('loglines');
function log(text, cls = '') {
  const d = document.createElement('div');
  const t = new Date();
  d.textContent = `${t.toTimeString().slice(0, 8)}  ${text}`;
  if (cls) d.className = cls;
  logEl.appendChild(d);
  while (logEl.children.length > 11) logEl.removeChild(logEl.firstChild);
}

function toast(title, sub = '', cls = '', ms = 2600) {
  const d = document.createElement('div');
  d.className = `toast ${cls}`;
  d.innerHTML = `${title}${sub ? `<small>${sub}</small>` : ''}`;
  $('toasts').appendChild(d);
  while ($('toasts').children.length > 4) $('toasts').removeChild($('toasts').firstChild);
  setTimeout(() => d.remove(), ms);
}

function send(line) {
  if (!G.link || G.terminated) return;
  G.link.send(line);
  if (!line.startsWith('E,PING') && !line.startsWith('E,SCORE')) log(`PC → ${line}`, 'l-pc');
}

// ------------------------------------------------------------ board lines
function onLine(line) {
  G.lastLine = performance.now();
  const ev = parseLine(line);
  switch (ev.type) {
    case 'tilt':
      G.fwSeen = true;
      G.raw.pitch = ev.pitch; G.raw.roll = ev.roll; G.range = ev.range;
      G.joy.x = ev.jx || 0; G.joy.y = ev.jy || 0;
      if (ev.energy !== undefined) G.energy = ev.energy;
      G.lastTilt = performance.now(); G.cCount++;
      if (G.boardMode !== 'BATTLE' && !G.terminated) setMode('BATTLE', true);
      break;
    case 'nav': G.baroAlt = ev.alt; G.boardHdg = ev.hdg; break;
    case 'attackTick':
      if (!G.attacked) startAttack(ev.src);
      G.attackSecs = ev.secs; G.attackSrc = ev.src; G.attackT0 = performance.now() - (10 - ev.secs) * 1000;
      sfx.alarm(ev.secs <= 3);
      break;
    case 'status':
      G.fwSeen = true;
      if (ev.mode !== G.boardMode) setMode(ev.mode, true);
      if (ev.gui !== undefined && ev.gui !== G.gui) setGui(ev.gui);
      G.energy = ev.energy;
      if (ev.attacked && !G.attacked) startAttack(G.attackSrc);
      break;
    case 'mode':
      log(ev.text, 'l-ok');
      if (G.terminated) recoverFromLost();
      setMode(ev.mode);
      break;
    case 'gui': setGui(ev.on); break;
    case 'charging': G.energy = ev.energy; log(ev.text); break;
    case 'notready':
      G.energy = ev.energy; log(ev.text, 'l-warn');
      toast('LASER NOT READY', `${ev.energy}/10 · charge to 5/10 first (blue button or a cyan pylon)`, 'amb', 1800);
      break;
    case 'fired': G.energy = ev.energy; log(ev.text, 'l-ok'); fireLaser(); break;
    case 'attacked':
      log(ev.text, 'l-red');
      if (!G.attacked) startAttack(G.attackSrc);
      break;
    case 'rescued': log(ev.text, 'l-ok'); endAttack(); break;
    case 'terminated': log(ev.text, 'l-red'); signalLost(); break;
    case 'telemetry':
      G.T = ev.T; G.P = ev.P; G.H = ev.H; log(ev.text, 'l-dim');
      if (G.terminated) recoverFromLost();
      break;
    case 'warning': log(ev.text, 'l-warn'); break;
    case 'diag':
      log(ev.text, 'l-diag');
      if (G.terminated) recoverFromLost();
      break;
    default: log(ev.text || line);
  }
}

function onLinkStatus(s) {
  if (s === 'connected') { G.linkOk = true; log('USB serial connected (115200 8N1)', 'l-diag'); }
  if (s === 'lost') { G.linkOk = false; log('USB serial lost', 'l-red'); toast('LINK LOST', 'USB cable unplugged or port closed', 'red', 4000); }
}

function setMode(m, silent = false) {
  if (m === G.boardMode) return;
  G.boardMode = m;
  if (m === 'BATTLE') {
    G.attacked = false;
    $('standby').classList.add('hidden');
    if (guiLive()) {
      if (!G.running && !G.over) { G.running = true; G.missionT = 0; toast('BATTLE MODE', 'drone launching · tilt the board to fly', 'grn'); }
      drone.takeoff();
    }
    if (!silent) sfx.mode();
  } else if (m === 'STANDBY') {
    G.attacked = false;
    $('attack').classList.add('hidden');
    if (drone.state !== 'parked') drone.state = drone.pos.y < 3 ? 'parked' : 'hover';
    $('standby').classList.remove('hidden');
    if (G.wipeActive) { G.wipeActive = false; $('wipe').classList.add('hidden'); }
    if (!silent) sfx.mode();
  }
}

// GUI opened / closed on the board (joystick held 0.5 s in BATTLE_MODE)
function setGui(on) {
  if (G.linkKind !== 'usb') return;
  G.gui = on;
  showGuiWait(!on);
  if (on) {
    log('GUI ACTIVE: joystick = forward / back + pan, tilt = climb / bank, no auto-fire', 'l-ok');
    if (G.boardMode === 'BATTLE' && !G.terminated) {
      if (!G.running && !G.over) { G.running = true; G.missionT = 0; }
      drone.takeoff();
      toast('GUI ACTIVE · BATTLE MODE', 'joystick: push = forward, pull = back, left / right = pan · tilt = climb / bank', 'grn', 4500);
    } else {
      toast('GUI ACTIVE', 'double-press the blue button for BATTLE MODE', 'grn', 3500);
    }
    sfx.mode();
  } else {
    log('GUI closed on the board: joystick back on the turret, laser auto-fires', 'l-diag');
    if (drone.state !== 'parked' && drone.state !== 'down') drone.state = drone.pos.y < 3 ? 'parked' : 'hover';
    G.joy.x = G.joy.y = 0;
  }
}

// USB connected but the GUI is not open: the title screen stays up as a waiting screen
function showGuiWait(on) {
  const t = $('title');
  t.classList.toggle('hidden', !on);
  t.classList.toggle('waiting', on);
  $('hud').classList.toggle('hidden', on);     // the flight HUD only shows while the GUI is open
  if (on) {
    $('serialNote').innerHTML = '<b style="color:#5dff8a">DRONE CONNECTED</b> · GUI inactive (the board runs on its own: joystick = turret, laser auto-fires).<br>'
      + 'To open the GUI: double-press the blue button for <b>BATTLE MODE</b>, then <b>hold the joystick button</b> for 0.5 s.';
  }
}

function startAttack(src) {
  G.attacked = true; G.attackSrc = src || 'FLIP'; G.attackSecs = 10; G.attackT0 = performance.now();
  if (drone.state !== 'down') drone.state = 'attacked';
  $('attack').classList.remove('hidden');
  chase.shake = 1.2;
  sfx.alarm(false);
}

function endAttack() {
  if (!G.attacked) return;
  G.attacked = false;
  $('attack').classList.add('hidden');
  if (G.boardMode === 'BATTLE' && !G.over) drone.state = 'flying';
  sfx.rescued();
  toast('RESCUED', 'back to BATTLE MODE', 'grn');
}

function signalLost() {
  G.terminated = true; G.attacked = false; G.over = true;
  $('attack').classList.add('hidden');
  $('wipe').classList.add('hidden');
  drone.state = 'down';
  sfx.lost();
  setTimeout(() => $('lost').classList.remove('hidden'), 900);
}

function recoverFromLost() {
  G.terminated = false;
  $('lost').classList.add('hidden');
  resetMission();
  G.boardMode = 'UNKNOWN';
  toast('NEW DRONE ONLINE', 'board reset detected', 'grn');
}

// ------------------------------------------------------------ mission
function resetMission() {
  Object.assign(G, { score: 0, kills: 0, hordesCleared: 0, habitatsFound: 0, hull: 100, missionT: 0, running: false, over: false, wipeActive: false, wipeT: 6, attacked: false });
  for (const h of world.habitats) h.found = false;
  for (const h of world.hordes) {
    h.alive = h.total; h.cleared = false;
    for (const z of h.zombies) { z.dead = false; z.deadT = 0; z.x = z.hx; z.z = z.hz; }
  }
  for (const p of world.pylons) p.cooldown = 0;
  drone.reset();
  ['attack', 'end', 'wipe'].forEach((id) => $(id).classList.add('hidden'));
  if (G.boardMode === 'BATTLE' && guiLive()) { G.running = true; drone.takeoff(); }
}

function finish(title, color) {
  G.over = true; G.running = false;
  $('endtitle').textContent = title;
  $('endtitle').style.color = color;
  const m = Math.floor(G.missionT / 60), s = Math.floor(G.missionT % 60);
  $('endstats').innerHTML = `SCORE ${G.score}<br>HABITATS ${G.habitatsFound}/5 · ZOMBIES ${G.kills} · HORDES ${G.hordesCleared}<br>TIME ${m}:${String(s).padStart(2, '0')}`;
  $('end').classList.remove('hidden');
}

function fireLaser() {
  sfx.laser();
  const from = drone.pos;
  const f = drone.getForward(new THREE.Vector3());
  const cands = [];
  for (const z of world.zombies) {
    if (z.dead) continue;
    const dx = z.x - from.x, dz = z.z - from.z, dy = 1.5 - from.y;
    const d = Math.hypot(dx, dy, dz);
    if (d > 190) continue;
    const front = (dx * f.x + dz * f.z) / Math.max(1, Math.hypot(dx, dz));
    cands.push({ z, score: d - front * 60 });
  }
  cands.sort((a, b) => a.score - b.score);
  const targets = cands.slice(0, 8);
  if (!targets.length) {
    drone.fireBeam(new THREE.Vector3().copy(from).addScaledVector(f, 160).add(new THREE.Vector3(0, -10, 0)));
    toast('LASER FIRED', 'no zombies in range', 'amb', 1800);
    return;
  }
  for (const { z } of targets) {
    drone.fireBeam(new THREE.Vector3(z.x, 1.2 * z.scale, z.z));
    world.burst(z.x, 1.2 * z.scale, z.z);
    z.dead = true; z.deadT = 0;
    z.horde.alive--;
    G.kills++; G.score += 10;
    if (z.horde.alive <= 0 && !z.horde.cleared) {
      z.horde.cleared = true; G.hordesCleared++; G.score += 100;
      toast('HORDE CLEARED', '+100 · zone is safe now', 'grn');
    }
  }
  setTimeout(() => sfx.zap(), 120);
  toast(`LASER FIRED · ${targets.length} ZOMBIES DOWN`, `+${targets.length * 10}`, 'red', 1800);
}

let lastHit = 0;
function onHit(kind) {
  const now = performance.now();
  if (kind !== 'wipe' && now - lastHit < 900) return;      // one crash per wall contact, not one per frame
  lastHit = now;
  G.hull = Math.max(0, G.hull - (kind === 'wipe' ? 40 : 12));
  send('E,HIT');
  sfx.hit();
  chase.shake = 1.5;
  $('hitflash').style.background = 'rgba(255,40,40,.35)';
  setTimeout(() => { $('hitflash').style.background = 'rgba(255,40,40,0)'; }, 160);
  if (G.hull <= 0 && !G.over) {
    drone.state = 'down';
    toast('DRONE DOWN', 'hull integrity 0%', 'red', 4000);
    setTimeout(() => finish('DRONE DOWN', '#ff4a4a'), 1500);
  }
}

// ------------------------------------------------------------ input
const keys = new Set();
window.addEventListener('keydown', (e) => {
  if (e.repeat) { if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault(); return; }
  keys.add(e.code);
  const sim = G.linkKind === 'sim' ? G.link : null;
  if (e.code === 'Space') { e.preventDefault(); if (sim) sim.press(); else requestFire(); }
  if (e.code === 'KeyF' && sim) sim.setFlipped(true);
  if (e.code === 'KeyG' && sim) sim.grab();
  if (e.code === 'KeyC') calibrate();
  if (e.code === 'KeyL') $('log').classList.toggle('hidden');
  if (e.code === 'KeyM') { sfx.setMuted(!sfx.muted); toast(sfx.muted ? 'SOUND OFF' : 'SOUND ON', '', '', 1200); }
  if (e.code === 'Escape') toggleSettings();
  if (e.code === 'KeyR') {
    if (G.terminated && sim) { sim.reset(); return; }
    resetMission();
    toast('MISSION RESTARTED', '', '', 1500);
  }
});
window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (e.code === 'Space' && G.linkKind === 'sim') G.link.release();
  if (e.code === 'KeyF' && G.linkKind === 'sim') G.link.setFlipped(false);
});

// USB mode: fire from the PC (the board decides if there is enough energy)
function requestFire() {
  if (G.linkKind !== 'usb' || !G.gui || G.boardMode !== 'BATTLE' || G.attacked || G.terminated) return;
  send('E,FIRE');
}
$('c').addEventListener('mousedown', (e) => { if (e.button === 0) requestFire(); });

// wet-bulb temperature (Stull 2011), same as habitat.c on the board
function wetBulb(t, rh) {
  rh = Math.min(99, Math.max(5, rh));
  return t * Math.atan(0.151977 * Math.sqrt(rh + 8.313659)) + Math.atan(t + rh) - Math.atan(rh - 1.676331)
    + 0.00391838 * Math.pow(rh, 1.5) * Math.atan(0.023101 * rh) - 4.686035;
}

function calibrate() {
  G.calib.pitch = G.raw.pitch; G.calib.roll = G.raw.roll;
  toast('TILT LEVELLED', `zero = pitch ${G.raw.pitch.toFixed(1)}°, roll ${G.raw.roll.toFixed(1)}°`, '', 2000);
}

function keyTilt() {
  let p = 0, r = 0;
  if (keys.has('KeyS') || keys.has('ArrowDown')) p += 26;      // nose down = dive
  if (keys.has('KeyW') || keys.has('ArrowUp')) p -= 26;        // nose up = climb
  if (keys.has('KeyD') || keys.has('ArrowRight')) r += 30;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) r -= 30;
  return { p, r };
}

// USB mode without tilt lines (old firmware, or the board is not answering): fly with the keyboard
function keyboardFallback() {
  return G.linkKind === 'usb' && performance.now() - G.lastTilt > 1000;
}

function controlInput() {
  let p = G.raw.pitch - G.calib.pitch, r = G.raw.roll - G.calib.roll;
  if (keyboardFallback()) {
    const k = keyTilt();
    const sm = G.kbSmooth || (G.kbSmooth = { p: 0, r: 0 });
    sm.p += (k.p - sm.p) * 0.15; sm.r += (k.r - sm.r) * 0.15;
    const kk = 1 / 35;
    return { pitch: clamp(sm.p * kk, -1, 1), roll: clamp(sm.r * kk, -1, 1), dp: sm.p, dr: sm.r };
  }
  if (Math.abs(G.raw.roll) > 120) r = 0;                       // upside down: no control
  if (settings.swap) [p, r] = [r, p];
  if (settings.invertPitch) p = -p;
  if (settings.invertRoll) r = -r;
  const dz = (v) => Math.sign(v) * Math.max(0, Math.abs(v) - settings.deadzone);
  const k = settings.sens / settings.maxTilt;
  const out = { pitch: clamp(dz(p) * k, -1, 1), roll: clamp(dz(r) * k, -1, 1), dp: p, dr: r };
  if (G.linkKind === 'usb' && G.gui) {           // board joystick: forward / back + pan (the board already removes its dead zone)
    out.jx = clamp(G.joy.x / 100, -1, 1);
    out.jy = clamp(G.joy.y / 100, -1, 1);
  }
  return out;
}

function simKeys() {
  const sim = G.link;
  const { p, r } = keyTilt();
  sim.targetPitch = p; sim.targetRoll = r;
  sim.alt = drone.altitude || 0;
}

// ------------------------------------------------------------ settings panel
function toggleSettings() {
  const el = $('settings');
  const show = el.classList.contains('hidden');
  if (show) {
    $('sInvP').checked = settings.invertPitch; $('sInvR').checked = settings.invertRoll; $('sSwap').checked = settings.swap;
    $('sSens').value = settings.sens; $('sMax').value = settings.maxTilt; $('sBloom').checked = settings.bloom;
    $('sGfx').value = settings.gfx;
  }
  el.classList.toggle('hidden');
}
for (const [id, key, kind] of [['sInvP', 'invertPitch', 'b'], ['sInvR', 'invertRoll', 'b'], ['sSwap', 'swap', 'b'], ['sSens', 'sens', 'n'], ['sMax', 'maxTilt', 'n'], ['sBloom', 'bloom', 'b'], ['sGfx', 'gfx', 's']]) {
  $(id).addEventListener('input', (e) => {
    settings[key] = kind === 'b' ? e.target.checked : kind === 's' ? e.target.value : +e.target.value;
    saveSettings();
    if (key === 'gfx') { autoLow = false; applyGfx(); }
  });
}
$('calBtn').onclick = () => calibrate();
$('closeSet').onclick = () => toggleSettings();
$('againBtn').onclick = () => { resetMission(); };

// ------------------------------------------------------------ title screen
if (!SerialLink.supported()) {
  $('connectBtn').disabled = true;
  $('serialNote').innerHTML = 'Web Serial is not available here. Open this page in <b>Google Chrome or Microsoft Edge</b> (use <b>start_game.bat</b>, which serves it from http://localhost). Keyboard mode works everywhere.';
} else {
  $('serialNote').innerHTML = 'Plug the B-L4S5I-IOT01A into USB (ST-LINK), click connect and pick <b>STMicroelectronics STLink Virtual COM Port</b>. 115200 baud. Close Tera Term first: only one program can own the COM port. <a href="#" id="anyPort" style="color:#8fe">Port not listed?</a>';
}

function startHud(kind) {
  $('title').classList.add('hidden');
  $('hud').classList.remove('hidden');
  G.linkKind = kind;
  const l = $('link');
  l.textContent = kind === 'usb' ? 'USB · STM32' : 'KEYBOARD SIM';
  l.style.color = kind === 'usb' ? '#5dff8a' : '#ffb340';
}

async function connectUsb(anyPort) {
  sfx.unlock();
  try {
    const link = new SerialLink(onLine, onLinkStatus);
    await link.connect(115200, anyPort);
    G.link = link;
    startHud('usb');
    showGuiWait(!G.gui);                    // waiting screen until the board opens the GUI (G,ON)
    G.tConnect = performance.now();
    send('E,PING');
    setTimeout(() => {
      if (performance.now() - G.lastLine > 1800) toast('WAITING FOR THE BOARD…', 'press the black RESET button on the STM32 board', 'amb', 5000);
    }, 2000);
  } catch (e) {
    if (e && e.name !== 'NotFoundError') toast('COULD NOT OPEN PORT', String(e.message || e), 'red', 5000);
  }
}
$('connectBtn').onclick = () => connectUsb(false);
document.addEventListener('click', (e) => { if (e.target && e.target.id === 'anyPort') { e.preventDefault(); connectUsb(true); } });
$('simBtn').onclick = () => {
  sfx.unlock();
  const sim = new BoardSim(onLine);
  G.link = sim;
  startHud('sim');
  sim.start();
  toast('KEYBOARD SIMULATION', 'double-tap SPACE to launch · WASD to fly', 'amb', 4500);
};

// ------------------------------------------------------------ HUD drawing
const energyEl = $('energy');
for (let i = 0; i < 10; i++) energyEl.appendChild(document.createElement('div'));
const hctx = $('horizon').getContext('2d');
const mctx = $('minimap').getContext('2d');
const MAP = 220, MS = MAP / (2 * HALF + 140);
const toMap = (x, z) => [MAP / 2 + x * MS, MAP / 2 + z * MS];
const mapBase = document.createElement('canvas'); mapBase.width = mapBase.height = MAP;
{
  const g = mapBase.getContext('2d');
  g.fillStyle = 'rgba(30,40,50,.6)';
  const [a, b] = toMap(-HALF, -HALF); g.fillRect(a, b, 2 * HALF * MS, 2 * HALF * MS);
  g.fillStyle = 'rgba(140,160,180,.55)';
  for (const bd of world.buildings) { const [x, y] = toMap(bd.minX, bd.minZ); g.fillRect(x, y, Math.max(1, (bd.maxX - bd.minX) * MS), Math.max(1, (bd.maxZ - bd.minZ) * MS)); }
}

const compass = $('compassStrip');
{
  const names = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
  for (let d = -360; d <= 720; d += 15) {
    const s = document.createElement('span');
    const n = ((d % 360) + 360) % 360;
    s.textContent = names[n] || (n % 45 === 0 ? n : '·');
    if (names[n]) s.style.color = n === 0 ? '#ff5a5a' : '#fff';
    s.style.left = `${d * 4}px`;
    s.dataset.d = d;
    compass.appendChild(s);
  }
}

let hudT = 0;
function drawHud(dt, ci) {
  hudT += dt;
  if (hudT < 1 / 20) return;
  hudT = 0;
  const heading = ((Math.atan2(Math.sin(drone.yaw), -Math.cos(drone.yaw)) * 180 / Math.PI) + 360) % 360;
  compass.style.transform = `translateX(${210 - heading * 4}px)`;

  const mode = $('mode');
  const mtxt = G.terminated ? 'TERMINATED' : G.attacked ? 'ATTACKED' : G.boardMode;
  mode.textContent = mtxt;
  mode.style.color = G.terminated || G.attacked ? '#ff4a4a' : G.boardMode === 'BATTLE' ? '#5dff8a' : G.boardMode === 'STANDBY' ? '#3ae6ff' : '#888';
  $('rate').textContent = `${G.cRate} Hz`;

  $('score').textContent = G.score;
  $('habs').textContent = `${G.habitatsFound}/5`;
  $('kills').textContent = G.kills;
  $('hordes').textContent = `${G.hordesCleared}/${world.hordes.length}`;
  const m = Math.floor(G.missionT / 60), s = Math.floor(G.missionT % 60);
  $('mtime').textContent = `${m}:${String(s).padStart(2, '0')}`;
  $('alt').textContent = Math.round(drone.altitude || 0);
  $('spd').textContent = Math.round(drone.speed);
  $('baro').textContent = G.baroAlt === null ? '--' : `${G.baroAlt >= 0 ? '+' : ''}${G.baroAlt.toFixed(1)} m`;
  $('bhdg').textContent = G.boardHdg === null ? '--' : `${Math.round(G.boardHdg)}°`;
  $('pit').textContent = `${ci.dp >= 0 ? '+' : ''}${ci.dp.toFixed(0)}`;
  $('rol').textContent = `${ci.dr >= 0 ? '+' : ''}${ci.dr.toFixed(0)}`;
  [...energyEl.children].forEach((d, i) => d.classList.toggle('on', i < G.energy));
  $('hull').style.width = `${G.hull}%`;

  // ToF: the board already sends a median-filtered range (tof.c), so this doesn't flicker.
  // TOF_NEAR / TOF_FAR mirror TOF_NEAR_MM / TOF_FAR_MM in app_config.h; the grab itself is
  // decided on the board (near for TOF_HOLD_MS), the game only shows it.
  const TOF_NEAR = 50, TOF_FAR = 150, TOF_HAND_FROM = 250;
  const r = G.range;
  const close = r < 600 ? 1 - r / 600 : 0;
  $('tofbar').style.width = `${close * 100}%`;
  $('tofbar').style.background = r < TOF_NEAR ? '#ff3b3b' : r < TOF_FAR ? '#ffb340' : '#3ae6ff';
  $('tof').textContent = r >= 8190 ? 'no target' : `${r} mm${r < TOF_NEAR ? '  HOLD = GRAB' : ''}`;
  const hand = $('hand');
  const hc = r < TOF_HAND_FROM ? 1 - r / TOF_HAND_FROM : 0;
  hand.style.opacity = hc > 0 ? Math.min(1, hc * 2) : 0;
  hand.style.transform = `translateX(-50%) translateY(${(1 - hc) * 60}%) scale(${0.6 + hc * 0.9})`;

  // artificial horizon showing the board tilt
  const W = 140;
  hctx.clearRect(0, 0, W, W);
  hctx.save();
  hctx.beginPath(); hctx.arc(W / 2, W / 2, 64, 0, Math.PI * 2); hctx.clip();
  hctx.translate(W / 2, W / 2);
  hctx.rotate(-ci.dr * Math.PI / 180);
  const off = clamp(ci.dp, -60, 60) * 1.2;
  hctx.fillStyle = '#1b4a6a'; hctx.fillRect(-100, -200 + off, 200, 200);
  hctx.fillStyle = '#4a3420'; hctx.fillRect(-100, off, 200, 200);
  hctx.strokeStyle = '#fff'; hctx.lineWidth = 2; hctx.beginPath(); hctx.moveTo(-100, off); hctx.lineTo(100, off); hctx.stroke();
  hctx.restore();
  hctx.strokeStyle = '#3ae6ff'; hctx.lineWidth = 2;
  hctx.beginPath(); hctx.arc(W / 2, W / 2, 64, 0, Math.PI * 2); hctx.stroke();
  hctx.strokeStyle = '#ffd23b'; hctx.lineWidth = 3;
  hctx.beginPath(); hctx.moveTo(W / 2 - 30, W / 2); hctx.lineTo(W / 2 - 10, W / 2); hctx.moveTo(W / 2 + 10, W / 2); hctx.lineTo(W / 2 + 30, W / 2); hctx.stroke();

  // minimap
  mctx.clearRect(0, 0, MAP, MAP);
  mctx.drawImage(mapBase, 0, 0);
  for (const h of world.hordes) {
    const [x, y] = toMap(h.x, h.z);
    mctx.beginPath(); mctx.arc(x, y, Math.max(3, h.radius * MS), 0, Math.PI * 2);
    mctx.fillStyle = h.cleared ? 'rgba(90,255,140,.35)' : 'rgba(255,50,40,.55)'; mctx.fill();
  }
  for (const p of world.pylons) {
    const [x, y] = toMap(p.x, p.z);
    mctx.fillStyle = p.cooldown > 0 ? 'rgba(58,230,255,.3)' : '#3ae6ff';
    mctx.beginPath(); mctx.arc(x, y, 3, 0, Math.PI * 2); mctx.fill();
  }
  for (const h of world.habitats) {
    const [x, y] = toMap(h.x, h.z);
    mctx.fillStyle = h.found ? '#5dff8a' : '#9fd0ff';
    mctx.fillRect(x - 4, y - 4, 8, 8);
    if (!h.found) { mctx.strokeStyle = 'rgba(159,208,255,.6)'; mctx.strokeRect(x - 6, y - 6, 12, 12); }
  }
  {
    const [x, y] = toMap(drone.pos.x, drone.pos.z);
    mctx.save(); mctx.translate(x, y); mctx.rotate(-drone.yaw + Math.PI);
    mctx.fillStyle = '#fff'; mctx.beginPath(); mctx.moveTo(0, -7); mctx.lineTo(5, 5); mctx.lineTo(0, 2); mctx.lineTo(-5, 5); mctx.closePath(); mctx.fill();
    mctx.restore();
  }

  // standby panel
  if (G.boardMode === 'STANDBY') {
    $('sbtel').textContent = G.T === null ? 'waiting for telemetry…' : `T ${G.T.toFixed(1)} °C   P ${G.P.toFixed(1)} hPa   H ${G.H.toFixed(1)} %RH`;
    if (G.H !== null) {
      const tw = wetBulb(G.T, G.H);
      const ok = tw <= 31 && G.T >= 10 && G.P >= 950 && G.P <= 1050;
      $('sbhab').innerHTML = ok
        ? `<span style="color:#5dff8a">HABITABLE · wet-bulb ${tw.toFixed(1)} °C (limit 31 °C)</span>`
        : `<span style="color:#ffb340">NOT HABITABLE · wet-bulb ${tw.toFixed(1)} °C (limit 31 °C)</span>`;
    }
  }

  if (G.attacked) {
    const left = Math.max(0, Math.ceil(10 - (performance.now() - G.attackT0) / 1000));
    $('atkcount').textContent = Math.min(left, G.attackSecs);
    $('atksrc').textContent = G.attackSrc === 'TOF' ? 'A ZOMBIE HAND GRABBED THE DRONE' : 'DRONE FLIPPED UPSIDE DOWN';
  }

  let hint = '';
  if (G.linkKind === 'sim' && G.boardMode === 'STANDBY') hint = 'double-tap SPACE to launch (board double-press)';
  else if (G.boardMode === 'BATTLE' && !G.attacked) {
    hint = G.habitatsFound < 5 ? 'find the blue habitat beacons · fly through cyan rings to charge the laser' : '';
    if (G.energy >= 5) hint = G.linkKind === 'sim' ? '🔴 LASER READY · hold SPACE to fire' : '🔴 LASER READY · hold the blue button (or Space / click) to fire';
    if (keyboardFallback()) hint = G.fwSeen ? '⚠ no tilt data from the board · flying with WASD / arrow keys'
      : '⚠ board is not answering E,PING (enhanced firmware not running?) · flying with WASD / arrow keys';
  }
  $('hint').textContent = hint;
  $('oob').classList.toggle('hidden', !drone.outOfBounds);
}

// ------------------------------------------------------------ static noise for SIGNAL LOST
const sctx = $('static').getContext('2d');
function drawStatic() {
  if ($('lost').classList.contains('hidden')) return;
  const img = sctx.createImageData(320, 180);
  for (let i = 0; i < img.data.length; i += 4) { const v = Math.random() * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; }
  sctx.putImageData(img, 0, 0);
}

// ------------------------------------------------------------ main loop
const clock = new THREE.Clock();
let orbit = 0;
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  const t = clock.elapsedTime;

  if (G.linkKind === 'sim' && G.link) { simKeys(); G.link.update(dt); }

  const ci = controlInput();
  const flying = G.boardMode === 'BATTLE' && !G.terminated && !G.over && guiLive();
  const hit = drone.update(dt, flying && !G.attacked ? ci : { pitch: 0, roll: 0 }, world);
  if (hit && flying && !G.attacked) onHit(hit);

  if (flying && G.running) {
    if (!G.attacked) G.missionT += dt;
    // charging pylons (safe zones)
    for (const p of world.pylons) {
      if (p.cooldown > 0) continue;
      const d = Math.hypot(drone.pos.x - p.x, drone.pos.y - p.y, drone.pos.z - p.z);
      if (d < 12) {
        p.cooldown = 8;
        G.score += 5;
        send('E,CHARGE');
        sfx.charge();
        toast('CHARGING PYLON', 'laser +3/10 (board charges like a single press)', '', 2200);
      }
    }
    // habitats
    for (const h of world.habitats) {
      if (h.found) continue;
      if (Math.hypot(drone.pos.x - h.x, drone.pos.z - h.z) < 32 && drone.pos.y < 80) {
        h.found = true; G.habitatsFound++; G.score += 250;
        sfx.habitat();
        const hum = G.H !== null ? G.H : 55 + Math.random() * 10;
        toast(`${h.name} FOUND · ${G.habitatsFound}/5`, `${h.survivors} survivors · humidity ${hum.toFixed(0)} %RH (comfortable) · +250`, 'grn', 4000);
        if (G.habitatsFound >= 5) setTimeout(() => { sfx.win(); finish('MISSION COMPLETE', '#5dff8a'); }, 1200);
      }
    }
    // zombie hordes (danger zones)
    let inZone = null;
    if (!G.attacked) {
      for (const h of world.hordes) {
        if (h.cleared) continue;
        if (Math.hypot(drone.pos.x - h.x, drone.pos.z - h.z) < h.radius && drone.pos.y < 35) { inZone = h; break; }
      }
    }
    if (inZone) {
      if (!G.wipeActive) { G.wipeActive = true; G.wipeT = 6; G.wipeSent = -1; $('wipe').classList.remove('hidden'); }
      G.wipeT -= dt;
      const sec = Math.max(0, Math.ceil(G.wipeT));
      if (sec !== G.wipeSent) { G.wipeSent = sec; send(`E,WIPE,${sec}`); sfx.tick(); }
      $('wipesec').textContent = sec;
      if (G.wipeT <= 0) {
        toast('MEMORY WIPE', 'the horde got its hands on the drone · hull -40%', 'red', 3000);
        onHit('wipe');
        drone.vy = 22;
        G.wipeT = 6; G.wipeSent = -1;
      }
    } else if (G.wipeActive) {
      G.wipeActive = false; $('wipe').classList.add('hidden'); send('E,SAFE');
    }
  }

  // periodic messages to the board
  const now = performance.now();
  if (G.link && !G.terminated) {
    if (now - G.tPing > 2000) { G.tPing = now; G.link.send('E,PING'); }
    const msg = `E,SCORE,${G.score},${G.habitatsFound}`;
    if (msg !== G.lastScoreMsg && now - G.tScore > 1000) { G.tScore = now; G.lastScoreMsg = msg; G.link.send(msg); }
  }
  if (now - G.tRate > 1000) { G.cRate = G.cCount; G.cCount = 0; G.tRate = now; }
  if (G.linkKind === 'usb' && !G.fwSeen && !G.fwWarned && G.lastLine && now - G.tConnect > 5000) {
    G.fwWarned = true;
    log('No reply to E,PING: the board is not running the enhanced firmware, or it cannot hear the PC', 'l-red');
    toast('BOARD NOT ANSWERING', 'reset the board: Tera Term should show "[ZD] ... build <date>" lines', 'red', 8000);
  }
  {
    const l = $('link');
    if (G.linkKind === 'usb') { l.textContent = G.fwSeen ? 'USB · STM32' : 'USB · NO REPLY'; l.style.color = G.fwSeen ? '#5dff8a' : '#ff4a4a'; }
  }

  world.update(dt, t, drone, camera);
  if (!$('title').classList.contains('hidden')) titleFlyover(dt, t);
  else if (drone.state === 'parked') {
    if (titleFlyover.active) { titleFlyover.active = false; camera.position.set(Math.sin(orbit) * 34, 14, Math.cos(orbit) * 34); }
    orbit += dt * 0.15;
    const target = new THREE.Vector3(Math.sin(orbit) * 34, 14, Math.cos(orbit) * 34);
    camera.position.lerp(target, 1 - Math.exp(-dt * 1.5));
    camera.lookAt(0, 3, 0);
    chase.pos.copy(camera.position);
  } else {
    chase.update(dt, drone, world);
  }
  sfx.rotor(drone.state === 'parked' ? 0.15 : drone.state === 'down' ? 0 : 1, drone.speed);
  drawHud(dt, ci);
  drawStatic();

  if (chase.shake > lastShake + 0.4) gfx.hit = 1;          // red edge flash on hits and attacks
  lastShake = chase.shake;
  if (settings.gfx === 'auto' && !autoLow && t > 5 && gfx.shouldDropToLow(dt)) {
    autoLow = true; applyGfx();
    toast('GRAPHICS SET TO LOW', 'the frame rate was low on High · Esc to change', 'amb', 3500);
  }
  gfx.render(dt, t, { flash: world.flash, shake: chase.shake, attack: G.attacked, lost: G.terminated, bloom: settings.bloom });
  drawPerf(dt);
}

// ------------------------------------------------------------ P = performance readout, H = hide HUD (screenshots)
const perfEl = $('perf');
let perfN = 0, perfT = 0;
window.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.code === 'KeyP') perfEl.classList.toggle('hidden');
  if (e.code === 'KeyH') document.body.classList.toggle('nohud');
});
function drawPerf(dt) {
  if (perfEl.classList.contains('hidden')) return;
  perfN++; perfT += dt;
  if (perfT < 0.5) return;
  const i = renderer.info.render;
  perfEl.textContent = `${Math.round(perfN / perfT)} fps · ${gfx.quality.toUpperCase()}${settings.gfx === 'auto' ? ' (auto)' : ''} · ${renderer.domElement.width}×${renderer.domElement.height} · ${i.calls} draws`;
  perfN = 0; perfT = 0;
}

// ------------------------------------------------------------ title screen: cinematic flyover down the avenues
let lastShake = 0;
const flyPath = (() => {
  const L = roadLine;
  const corners = [[L(7), L(9)], [L(7), L(2)], [L(11), L(2)], [L(11), L(11)], [L(3), L(11)], [L(3), L(5)], [L(7), L(5)]];
  const pts = [];
  for (let i = 0; i < corners.length; i++) {
    const [x0, z0] = corners[(i + corners.length - 1) % corners.length], [x1, z1] = corners[i], [x2, z2] = corners[(i + 1) % corners.length];
    const a = Math.hypot(x1 - x0, z1 - z0), b = Math.hypot(x2 - x1, z2 - z1), rr = 30;
    pts.push(new THREE.Vector3(x1 + (x0 - x1) / a * rr, 0, z1 + (z0 - z1) / a * rr), new THREE.Vector3(x1 + (x2 - x1) / b * rr, 0, z1 + (z2 - z1) / b * rr));
  }
  const base = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
  const n = 600, samp = base.getSpacedPoints(n);
  samp.pop();
  // altitude: cruise low between the towers, climb over anything in the way, smoothed
  const h = samp.map((p, i) => 34 + 22 * Math.sin(i / n * Math.PI * 6));
  const need = samp.map((p) => world.heightAt(p.x, p.z) + 14);
  for (let i = 0; i < samp.length; i++) h[i] = Math.max(h[i], need[i]);
  for (let pass = 0; pass < 3; pass++) {
    const out = h.slice();
    for (let i = 0; i < h.length; i++) {
      let m = 0, w = 0;
      for (let k = -12; k <= 12; k++) { const v = h[(i + k + h.length) % h.length]; m = Math.max(m, need[(i + k + h.length) % h.length]); w += v; }
      out[i] = Math.max(w / 25, m);
    }
    for (let i = 0; i < h.length; i++) h[i] = out[i];
  }
  samp.forEach((p, i) => { p.y = h[i]; });
  return new THREE.CatmullRomCurve3(samp, true);
})();
const flyLen = flyPath.getLength();
let flyU = 0;
function titleFlyover(dt) {
  flyU = (flyU + dt * 26 / flyLen) % 1;
  const p = flyPath.getPointAt(flyU), ahead = flyPath.getPointAt((flyU + 45 / flyLen) % 1);
  ahead.y -= 12;
  if (!titleFlyover.look) { titleFlyover.look = ahead.clone(); camera.position.copy(p); }
  titleFlyover.active = true;
  camera.position.lerp(p, Math.min(1, dt * 3));
  titleFlyover.look.lerp(ahead, Math.min(1, dt * 2));
  camera.lookAt(titleFlyover.look);
  if (Math.abs(camera.fov - 62) > 0.1) { camera.fov = 62; camera.updateProjectionMatrix(); }
  chase.pos.copy(camera.position);
}
frame();

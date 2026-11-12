// world.js - post-apocalyptic city at night in the rain: storm sky, wet streets,
// lit towers, street life, zombie hordes, charging pylons (safe zones),
// human habitats, fires, smoke and lightning.
//
// Gameplay geometry (building boxes, horde / pylon / habitat positions) comes from
// rngFrom(2028) in exactly the same call order as the original version, so the city
// layout and collisions are unchanged. All decoration uses a separate generator.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { fx } from './fx.js';
import { Street } from './street.js';
import { Rain, Lightning } from './atmos.js';

export const N = 14;            // city cells per side
export const CELL = 90;         // metres per cell (block + road)
export const BLOCK = 62;        // building block size
export const HALF = (N * CELL) / 2;   // 630 m

export function rngFrom(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function cellCenter(i) { return (i - N / 2 + 0.5) * CELL; }
export function roadLine(k) { return (k - N / 2) * CELL; }  // road centre lines between cells

export function radialTexture(inner, outer, size = 128) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, inner);
  grd.addColorStop(0.35, inner);
  grd.addColorStop(1, outer);
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// shared GLSL noise
export const NOISE_GLSL = /* glsl */`
  float zdH2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float zdN2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(zdH2(i), zdH2(i + vec2(1, 0)), f.x), mix(zdH2(i + vec2(0, 1)), zdH2(i + vec2(1, 1)), f.x), f.y); }
  float zdH3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float zdN3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(zdH3(i), zdH3(i + vec3(1,0,0)), f.x), mix(zdH3(i + vec3(0,1,0)), zdH3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(zdH3(i + vec3(0,0,1)), zdH3(i + vec3(1,0,1)), f.x), mix(zdH3(i + vec3(0,1,1)), zdH3(i + vec3(1,1,1)), f.x), f.y), f.z); }
`;

// soft volumetric-looking beam (open cylinder, brightest along its axis)
export function beamMaterial(color, opacity = 0.25) {
  return new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity }, uTime: { value: 0 } },
    vertexShader: `varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity, uTime; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){
        float facing = abs(dot(normalize(vN), normalize(vV)));
        float core = pow(facing, 2.5);
        float fade = smoothstep(0.0, 0.04, vUv.y) * (1.0 - smoothstep(0.35, 1.0, vUv.y));
        float flow = 0.72 + 0.28 * sin(vUv.y * 90.0 - uTime * 5.0) * sin(vUv.y * 23.0 - uTime * 2.1);
        gl_FragColor = vec4(uColor * core * fade * flow * uOpacity * 2.6, 1.0);
        #include <colorspace_fragment>
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
}

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.rng = rngFrom(2028);       // gameplay layout: do not change the call order
    this.rng2 = rngFrom(90417);     // decoration only
    this.time = 0;
    this.flash = 0;
    this.quality = 'high';
    this.buildings = [];             // {minX,maxX,minZ,maxZ,h}
    this.grid = new Map();           // cell key -> building list
    this.cellType = [];
    this.hordes = [];
    this.pylons = [];
    this.habitats = [];
    this.zombies = [];
    this.fires = [];
    this.beacons = [];
    this.anim = [];                  // objects with update(dt, t, camera)
    fx.init(scene);
    this._layout();
    this._sky();
    this._ground();
    this._buildings();
    this._base();
    this._hordes();
    this._pylons();
    this._habitats();
    this._fires();
    this._ash();
    this._env();
    this.street = new Street(this);
    this.rain = new Rain(scene);
    this.lightning = new Lightning(this);
    this._fogColor = scene.fog.color.clone();
    this._fogDensity = scene.fog.density;
  }

  // ------------------------------------------------------------ layout
  _layout() {
    const r = this.rng;
    for (let i = 0; i < N; i++) {
      this.cellType[i] = [];
      for (let j = 0; j < N; j++) {
        let t;
        if ((i === 6 || i === 7) && (j === 6 || j === 7)) t = 'plaza';
        else { const v = r(); t = v < 0.70 ? 'city' : v < 0.88 ? 'lot' : 'ruin'; }
        this.cellType[i][j] = t;
      }
    }
    // guarantee enough open lots far from the base for habitats and hordes
    const force = [[1, 2], [2, 11], [11, 1], [12, 10], [4, 7], [9, 4], [10, 12], [3, 4], [7, 1], [6, 12], [12, 6], [1, 8]];
    for (const [i, j] of force) this.cellType[i][j] = 'lot';
  }

  key(i, j) { return i * 100 + j; }

  // ------------------------------------------------------------ sky, clouds, lights
  _sky() {
    const geo = new THREE.SphereGeometry(2400, 48, 24);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { uTime: { value: 0 }, uFlash: { value: 0 }, uFlashDir: { value: new THREE.Vector3(1, 0.2, 0) } },
      vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec3 vDir; uniform float uTime, uFlash; uniform vec3 uFlashDir;
        ${NOISE_GLSL}
        float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * zdN3(p); p *= 2.03; a *= 0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 zen = vec3(0.010,0.012,0.032);
          vec3 mid = vec3(0.06,0.03,0.075);
          vec3 hor = vec3(0.46,0.14,0.055);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.22, h));
          c = mix(c, zen, smoothstep(0.22, 0.85, h));
          float burn = 0.07 * sin(atan(d.z, d.x) * 9.0 + uTime * 0.7) * (1.0 - smoothstep(0.0, 0.12, h));
          c += vec3(burn, burn * 0.3, 0.0);
          vec3 md = normalize(vec3(-0.45, 0.32, -0.83));
          float mdot = dot(d, md);
          float m = smoothstep(0.99875, 0.9993, mdot);
          c += vec3(1.0, 0.92, 0.8) * m * 1.8;
          c += vec3(0.25, 0.22, 0.32) * pow(max(mdot, 0.0), 60.0);
          // storm clouds, lit from below by the burning city and by lightning
          vec2 cp = d.xz / (max(h, 0.0) + 0.16);
          float cl = fbm(vec3(cp * 0.75 + vec2(uTime * 0.012, uTime * 0.004), uTime * 0.004));
          float cov = smoothstep(0.40, 0.78, cl) * smoothstep(-0.02, 0.2, h);
          vec3 under = mix(vec3(0.42, 0.13, 0.05), vec3(0.045, 0.035, 0.06), smoothstep(0.0, 0.3, h));
          vec3 ccol = under * (0.55 + 0.6 * (1.0 - cl));
          ccol += vec3(0.18, 0.16, 0.24) * pow(max(mdot, 0.0), 12.0) * (1.0 - cl);   // moon silver lining
          float fl = uFlash * (0.35 + 0.65 * pow(max(dot(d, normalize(uFlashDir)), 0.0), 3.0));
          ccol += vec3(0.7, 0.75, 1.0) * fl * (0.6 + cl);
          c = mix(c, ccol, cov * 0.92);
          c += vec3(0.55, 0.6, 0.85) * fl * 0.12;
          if (h < 0.0) c = hor * 0.3;
          gl_FragColor = vec4(c, 1.0);
        }`,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.userData.noAO = true;
    this.sky.renderOrder = -10;
    this.scene.add(this.sky);

    // stars
    const n = 1400, pos = new Float32Array(n * 3), r = this.rng;
    for (let k = 0; k < n; k++) {
      const th = r() * Math.PI * 2, ph = Math.acos(0.15 + r() * 0.85);
      pos[k * 3] = Math.sin(ph) * Math.cos(th) * 2200;
      pos[k * 3 + 1] = Math.cos(ph) * 2200;
      pos[k * 3 + 2] = Math.sin(ph) * Math.sin(th) * 2200;
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xb8c4ff, size: 1.4, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.55 }));
    this.scene.add(this.stars);

    this.scene.fog = new THREE.FogExp2(0x1a0c12, 0.00155);
    this.hemi = new THREE.HemisphereLight(0x5a5088, 0x2a1810, 0.55);
    this.scene.add(this.hemi);
    this.moonDir = new THREE.Vector3(-450, 400, -800).normalize();
    this.moon = new THREE.DirectionalLight(0xa8b8ff, 1.15);
    this.moon.position.copy(this.moonDir).multiplyScalar(900);
    this.moon.castShadow = true;
    const sc = this.moon.shadow.camera;
    sc.left = -230; sc.right = 230; sc.top = 230; sc.bottom = -230; sc.near = 10; sc.far = 2200;
    this.moon.shadow.mapSize.set(2048, 2048);
    this.moon.shadow.bias = -0.0004;
    this.moon.shadow.normalBias = 0.5;
    this.scene.add(this.moon, this.moon.target);
    const glow = new THREE.DirectionalLight(0xff6a2a, 0.6);   // fire glow from the burning horizon
    glow.position.set(600, 80, 500);
    this.scene.add(glow);
    this.flashLight = new THREE.DirectionalLight(0xc8d4ff, 0);   // lightning
    this.flashLight.position.set(300, 600, 200);
    this.scene.add(this.flashLight);
  }

  // image-based light: a small procedural night sky so wet roads and glass reflect something
  _env() {
    const envScene = new THREE.Scene();
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = d.y;
          vec3 c = mix(vec3(0.9, 0.3, 0.1), vec3(0.08, 0.05, 0.12), smoothstep(-0.05, 0.25, h));
          c = mix(c, vec3(0.02, 0.025, 0.06), smoothstep(0.25, 0.9, h));
          c += vec3(0.6, 0.6, 0.8) * pow(max(dot(d, normalize(vec3(-0.45, 0.32, -0.83))), 0.0), 40.0);
          if (h < 0.0) c = vec3(0.05, 0.04, 0.05);
          gl_FragColor = vec4(c, 1.0); }`,
    });
    envScene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), m));
    // a ring of warm and cold city-light patches near the horizon
    const r = this.rng2;
    for (let k = 0; k < 40; k++) {
      const a = r() * Math.PI * 2, y = 2 + r() * 10;
      const p = new THREE.Mesh(new THREE.PlaneGeometry(6 + r() * 10, 2 + r() * 3), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(r() < 0.7 ? 0.08 : 0.55, 0.7, 0.5 + r() * 0.3), side: THREE.DoubleSide }));
      p.position.set(Math.cos(a) * 80, y, Math.sin(a) * 80); p.lookAt(0, y, 0);
      envScene.add(p);
    }
    const pm = new THREE.PMREMGenerator(this.renderer);
    this.envTex = pm.fromScene(envScene, 0.02, 0.1, 500).texture;
    pm.dispose();
    this.scene.environment = this.envTex;
    this.scene.environmentIntensity = 0.42;
  }

  // ------------------------------------------------------------ ground: wet asphalt, sidewalks, markings, puddles
  _ground() {
    const size = 2000, px = 4096, s = px / size;
    const c = document.createElement('canvas');
    c.width = c.height = px;
    const g = c.getContext('2d');
    const r = this.rng, r2 = this.rng2;
    const toPx = (x) => (x + size / 2) * s;

    // roughness / wetness map (lower = wetter)
    const rpx = 2048, rs = rpx / size;
    const rc = document.createElement('canvas'); rc.width = rc.height = rpx;
    const rg = rc.getContext('2d');
    const toR = (x) => (x + size / 2) * rs;
    rg.fillStyle = 'rgb(225,225,225)'; rg.fillRect(0, 0, rpx, rpx);
    rg.fillStyle = 'rgb(92,92,92)'; rg.fillRect(toR(-HALF - 14), toR(-HALF - 14), (2 * HALF + 28) * rs, (2 * HALF + 28) * rs);

    g.fillStyle = '#15120f'; g.fillRect(0, 0, px, px);
    g.fillStyle = '#17181c'; g.fillRect(toPx(-HALF - 14), toPx(-HALF - 14), (2 * HALF + 28) * s, (2 * HALF + 28) * s);
    // asphalt mottling
    for (let k = 0; k < 9000; k++) {
      const v = 18 + r2() * 14;
      g.fillStyle = `rgba(${v},${v},${v + 3},0.35)`;
      g.fillRect(r2() * px, r2() * px, 6 + r2() * 30, 6 + r2() * 30);
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const cx = cellCenter(i), cz = cellCenter(j), t = this.cellType[i][j];
        const b = t === 'plaza' ? CELL / 2 : BLOCK / 2;
        // sidewalk with kerb
        if (t !== 'plaza') {
          g.fillStyle = '#34343a'; g.fillRect(toPx(cx - b - 5), toPx(cz - b - 5), (2 * b + 10) * s, (2 * b + 10) * s);
          g.strokeStyle = '#4a4a50'; g.lineWidth = 1.2 * s; g.strokeRect(toPx(cx - b - 5), toPx(cz - b - 5), (2 * b + 10) * s, (2 * b + 10) * s);
          rg.fillStyle = 'rgb(150,150,150)'; rg.fillRect(toR(cx - b - 5), toR(cz - b - 5), (2 * b + 10) * rs, (2 * b + 10) * rs);
        }
        g.fillStyle = t === 'lot' ? '#1e2018' : t === 'plaza' ? '#25262b' : '#29292d';
        g.fillRect(toPx(cx - b - 2), toPx(cz - b - 2), (2 * b + 4) * s, (2 * b + 4) * s);
        rg.fillStyle = t === 'plaza' ? 'rgb(110,110,110)' : 'rgb(215,215,215)';
        rg.fillRect(toR(cx - b - 2), toR(cz - b - 2), (2 * b + 4) * rs, (2 * b + 4) * rs);
        if (t === 'plaza') {      // wet paving tiles
          g.strokeStyle = 'rgba(0,0,0,0.25)'; g.lineWidth = 1;
          for (let q = -b; q <= b; q += 4) {
            g.beginPath(); g.moveTo(toPx(cx + q), toPx(cz - b)); g.lineTo(toPx(cx + q), toPx(cz + b)); g.stroke();
            g.beginPath(); g.moveTo(toPx(cx - b), toPx(cz + q)); g.lineTo(toPx(cx + b), toPx(cz + q)); g.stroke();
          }
        }
        if (t === 'lot') {   // overgrown lot (same random calls as the original)
          for (let k = 0; k < 40; k++) {
            g.fillStyle = `rgba(${40 + r() * 30},${55 + r() * 30},${30 + r() * 20},0.5)`;
            const x0 = toPx(cx - b + r() * 2 * b), z0 = toPx(cz - b + r() * 2 * b);
            const w = (4 + r() * 10) * 2, h = (4 + r() * 10) * 2;
            g.fillRect(x0, z0, w, h);
          }
        }
      }
    }
    // lane markings: dashed yellow centre lines, white edge lines, zebra crossings
    g.setLineDash([6 * s, 8 * s]);
    g.strokeStyle = 'rgba(210,175,60,0.6)'; g.lineWidth = 0.35 * s;
    for (let k = 0; k <= N; k++) {
      const v = toPx(roadLine(k));
      g.beginPath(); g.moveTo(v, toPx(-HALF)); g.lineTo(v, toPx(HALF)); g.stroke();
      g.beginPath(); g.moveTo(toPx(-HALF), v); g.lineTo(toPx(HALF), v); g.stroke();
    }
    g.setLineDash([]);
    g.strokeStyle = 'rgba(200,200,200,0.28)'; g.lineWidth = 0.25 * s;
    for (let k = 0; k <= N; k++) {
      for (const o of [-9.5, 9.5]) {
        const v = toPx(roadLine(k) + o);
        g.beginPath(); g.moveTo(v, toPx(-HALF)); g.lineTo(v, toPx(HALF)); g.stroke();
        g.beginPath(); g.moveTo(toPx(-HALF), v); g.lineTo(toPx(HALF), v); g.stroke();
      }
    }
    g.fillStyle = 'rgba(210,210,210,0.32)';
    for (let a = 0; a <= N; a++) for (let b2 = 0; b2 <= N; b2++) {
      const x = roadLine(a), z = roadLine(b2);
      for (let q = -8; q <= 8; q += 2.2) {
        g.fillRect(toPx(x + q), toPx(z - 17), 1.1 * s, 4 * s); g.fillRect(toPx(x + q), toPx(z + 13), 1.1 * s, 4 * s);
        g.fillRect(toPx(x - 17), toPx(z + q), 4 * s, 1.1 * s); g.fillRect(toPx(x + 13), toPx(z + q), 4 * s, 1.1 * s);
      }
    }
    // cracks and debris (same random calls as the original)
    for (let k = 0; k < 2500; k++) {
      g.fillStyle = `rgba(0,0,0,${0.15 + r() * 0.3})`;
      g.fillRect(r() * px, r() * px, (1 + r() * 3) * 2, (1 + r() * 3) * 2);
    }
    // long cracks, oil stains, manholes, puddles
    g.lineCap = 'round';
    for (let k = 0; k < 700; k++) {
      let x = (r2() - 0.5) * 2 * HALF, z = (r2() - 0.5) * 2 * HALF;
      g.strokeStyle = `rgba(0,0,0,${0.3 + r2() * 0.3})`; g.lineWidth = 0.6 + r2();
      g.beginPath(); g.moveTo(toPx(x), toPx(z));
      for (let q = 0; q < 6; q++) { x += (r2() - 0.5) * 5; z += (r2() - 0.5) * 5; g.lineTo(toPx(x), toPx(z)); }
      g.stroke();
    }
    const roadPoint = () => {
      const along = (r2() - 0.5) * 2 * HALF, k = Math.floor(r2() * (N + 1)), off = (r2() - 0.5) * 22;
      return r2() < 0.5 ? [roadLine(k) + off, along] : [along, roadLine(k) + off];
    };
    for (let k = 0; k < 500; k++) {
      const [x, z] = roadPoint(), rad = 1 + r2() * 3;
      const grd = g.createRadialGradient(toPx(x), toPx(z), 0, toPx(x), toPx(z), rad * s);
      grd.addColorStop(0, 'rgba(5,5,8,0.55)'); grd.addColorStop(1, 'rgba(5,5,8,0)');
      g.fillStyle = grd; g.beginPath(); g.arc(toPx(x), toPx(z), rad * s, 0, Math.PI * 2); g.fill();
    }
    for (let k = 0; k < 160; k++) {
      const [x, z] = roadPoint();
      g.fillStyle = '#26262a'; g.beginPath(); g.arc(toPx(x), toPx(z), 0.9 * s, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#121214'; g.lineWidth = 2; g.stroke();
    }
    for (let k = 0; k < 900; k++) {          // puddles: darker albedo, mirror-smooth
      const [x, z] = roadPoint(), w = 2 + r2() * 7, h = 1.5 + r2() * 4, rot = r2() * Math.PI;
      g.save(); g.translate(toPx(x), toPx(z)); g.rotate(rot); g.fillStyle = 'rgba(6,7,10,0.5)';
      g.beginPath(); g.ellipse(0, 0, w * s, h * s, 0, 0, Math.PI * 2); g.fill(); g.restore();
      rg.save(); rg.translate(toR(x), toR(z)); rg.rotate(rot);
      const pr = rg.createRadialGradient(0, 0, 0, 0, 0, w * rs * 1.3);
      pr.addColorStop(0, 'rgba(8,8,8,1)'); pr.addColorStop(0.7, 'rgba(8,8,8,0.9)'); pr.addColorStop(1, 'rgba(8,8,8,0)');
      rg.fillStyle = pr; rg.scale(1, h / w); rg.beginPath(); rg.arc(0, 0, w * rs * 1.3, 0, Math.PI * 2); rg.fill(); rg.restore();
    }
    // helipad
    const hp = toPx(0);
    g.fillStyle = '#2c3038'; g.beginPath(); g.arc(hp, hp, 16 * s, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#ffd24a'; g.lineWidth = 0.6 * s; g.beginPath(); g.arc(hp, hp, 14 * s, 0, Math.PI * 2); g.stroke();
    g.setLineDash([2 * s, 2 * s]); g.beginPath(); g.arc(hp, hp, 15.3 * s, 0, Math.PI * 2); g.stroke(); g.setLineDash([]);
    g.fillStyle = '#ffd24a'; g.font = `bold ${Math.round(18 * s)}px sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('H', hp, hp + 1);
    rg.fillStyle = 'rgb(70,70,70)'; rg.beginPath(); rg.arc(toR(0), toR(0), 16 * rs, 0, Math.PI * 2); rg.fill();

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const rtex = new THREE.CanvasTexture(rc);
    rtex.anisotropy = tex.anisotropy;
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughnessMap: rtex, roughness: 1, metalness: 0, envMapIntensity: 1.6 });
    mat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vGW;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvGW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vGW;\n${NOISE_GLSL}`)
        .replace('#include <map_fragment>', `#include <map_fragment>
          float zdG = zdN2(vGW.xz * 0.55) * 0.55 + zdN2(vGW.xz * 2.7) * 0.3 + zdN2(vGW.xz * 11.0) * 0.15;
          diffuseColor.rgb *= 0.78 + 0.42 * zdG;`)
        .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
          roughnessFactor = clamp(roughnessFactor + (zdG - 0.5) * 0.3, 0.04, 1.0);`);
    };
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.ground = ground;
    this.scene.add(ground);
  }

  // ------------------------------------------------------------ buildings
  _buildings() {
    const r = this.rng, r2 = this.rng2;
    const list = [];
    const add = (x, z, w, d, h, kind) => {
      const b = { minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h, kind, x, z, w, d };
      list.push(b);
      const i = Math.floor((x + HALF) / CELL), j = Math.floor((z + HALF) / CELL);
      const k = this.key(i, j);
      if (!this.grid.has(k)) this.grid.set(k, []);
      this.grid.get(k).push(b);
    };
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const t = this.cellType[i][j], cx = cellCenter(i), cz = cellCenter(j);
        const dist = Math.hypot(cx, cz);
        const tall = 0.35 + 0.65 * Math.min(1, dist / 450);
        const H = () => 14 + Math.pow(r(), 2.1) * 130 * tall;
        if (t === 'city') {
          const v = r();
          if (v < 0.3) add(cx, cz, 50 + r() * 8, 50 + r() * 8, H() * 1.15, 'city');
          else if (v < 0.6) {
            add(cx - 15.5, cz, 27, 52 + r() * 6, H(), 'city');
            add(cx + 15.5, cz, 27, 52 + r() * 6, H(), 'city');
          } else {
            for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
              const w = 22 + r() * 6, d = 22 + r() * 6;
              add(cx + sx * 15.5, cz + sz * 15.5, w, d, H() * 0.85, 'city');
            }
          }
        } else if (t === 'ruin') {
          for (let k = 0; k < 3; k++) add(cx + (r() - 0.5) * 34, cz + (r() - 0.5) * 34, 10 + r() * 14, 10 + r() * 14, 3 + r() * 9, 'ruin');
        }
      }
    }
    this.buildings = list;

    // facade style per building: 0 office, 1 glass tower, 2 residential, 3 burnt-out
    for (const b of list) {
      const q = r2();
      if (b.kind === 'ruin') b.style = 3;
      else if (b.h > 75) b.style = q < 0.45 ? 1 : q < 0.88 ? 0 : 3;
      else if (b.h > 30) b.style = q < 0.38 ? 0 : q < 0.82 ? 2 : q < 0.9 ? 1 : 3;
      else b.style = q < 0.65 ? 2 : q < 0.85 ? 0 : 3;
      b.seed = r2();
      b.dark = r2() < 0.22;          // power cut: almost no lit windows
    }

    const geo = new THREE.BoxGeometry(1, 1, 1);
    geo.translate(0, 0.5, 0);
    const bgeo = geo.clone();
    const aStyle = new Float32Array(list.length * 3);
    list.forEach((b, k) => { aStyle[k * 3] = b.style; aStyle[k * 3 + 1] = b.seed; aStyle[k * 3 + 2] = b.dark ? 1 : 0; });
    bgeo.setAttribute('aStyle', new THREE.InstancedBufferAttribute(aStyle, 3));

    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.86, metalness: 0.06 });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nattribute vec3 aStyle; varying vec3 vZdWorld; varying vec3 vZdNormal; varying vec3 vZdStyle; varying vec3 vZdLocal; varying vec3 vZdSize;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          vec4 zdW = vec4(transformed, 1.0);
          vec3 zdN = normal;
          vZdSize = vec3(1.0);
          #ifdef USE_INSTANCING
            zdW = instanceMatrix * zdW;
            zdN = mat3(instanceMatrix) * zdN;
            vZdSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          #endif
          zdW = modelMatrix * zdW;
          vZdWorld = zdW.xyz;
          vZdNormal = normalize(mat3(modelMatrix) * zdN);
          vZdStyle = aStyle;
          vZdLocal = position;`);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>
          varying vec3 vZdWorld; varying vec3 vZdNormal; varying vec3 vZdStyle; varying vec3 vZdLocal; varying vec3 vZdSize; uniform float uTime;
          ${NOISE_GLSL}`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          vec3 zn = normalize(vZdNormal);
          float zWall = 1.0 - step(0.5, abs(zn.y));
          // varyings that are constant per building still arrive with rounding noise: snap them,
          // otherwise the hashes below turn that noise into speckled windows
          float zStyle = floor(vZdStyle.x + 0.5), zSeed = floor(vZdStyle.y * 997.0 + 0.5) / 997.0, zDark = step(0.5, vZdStyle.z);
          vec2 zp = abs(zn.x) > 0.5 ? vZdWorld.zy : vZdWorld.xy;
          float zAlong = abs(zn.x) > 0.5 ? vZdLocal.z : vZdLocal.x;          // -0.5..0.5 across the facade
          float zWidth = abs(zn.x) > 0.5 ? vZdSize.z : vZdSize.x;
          float zEdge = (0.5 - abs(zAlong)) * zWidth;                       // metres to the building corner
          float zTopDist = vZdSize.y - vZdWorld.y;                          // metres below the roof line
          vec2 zcs = zStyle < 0.5 ? vec2(3.3, 3.5) : zStyle < 1.5 ? vec2(1.7, 3.6) : zStyle < 2.5 ? vec2(2.7, 3.0) : vec2(3.3, 3.5);
          vec2 zcell = zp / zcs; vec2 zf = fract(zcell); vec2 zid = floor(zcell);
          vec2 zface = floor(zn.xz * 2.0 + 2.5);          // +0.5: stable for exactly axis-aligned normals
          float zh = zdH2(zid + zface * 57.3 + zSeed * 91.0);
          float zfloor = zdH2(vec2(zid.y, zSeed * 33.0 + zface.x * 2.0 + zface.y * 3.0));
          vec4 zr = zStyle < 0.5 ? vec4(0.18, 0.82, 0.26, 0.82) : zStyle < 1.5 ? vec4(0.04, 0.96, 0.08, 0.94) : zStyle < 2.5 ? vec4(0.25, 0.75, 0.3, 0.78) : vec4(0.2, 0.8, 0.28, 0.8);
          float zWin = zWall * step(zr.x, zf.x) * step(zf.x, zr.y) * step(zr.z, zf.y) * step(zf.y, zr.w) * step(5.0, vZdWorld.y) * step(1.4, zEdge) * step(1.2, zTopDist);
          float zShop = zWall * step(vZdWorld.y, 4.4) * step(0.6, vZdWorld.y) * step(2.0, zEdge) * step(zStyle, 2.5);
          // facade base colour
          float zgrime = zdN2(zp * vec2(0.6, 0.12) + zSeed * 20.0);
          diffuseColor.rgb *= mix(0.72, 1.08, zgrime);
          diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.0, 14.0, vZdWorld.y));          // street grime / contact shadow
          diffuseColor.rgb *= mix(0.6, 1.0, smoothstep(0.0, 1.6, zEdge));                 // corner shading
          diffuseColor.rgb *= 1.0 - 0.18 * zWall * (1.0 - step(0.12, fract(zp.y / zcs.y)));  // floor slab lines
          if (zStyle > 0.5 && zStyle < 1.5) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.2, 0.27), 0.65 * zWall);
          if (zStyle > 1.5 && zStyle < 2.5) diffuseColor.rgb *= 1.0 - 0.25 * zWall * step(0.86, fract(zp.y / zcs.y));  // balconies
          float zSoot = 0.0;
          if (zStyle > 2.5) { zSoot = smoothstep(0.25, 0.75, zdN2(zp * 0.08 + zSeed * 7.0) + (vZdWorld.y / max(vZdSize.y, 1.0)) * 0.5); diffuseColor.rgb *= 1.0 - 0.75 * zSoot; }
          diffuseColor.rgb *= 1.0 - 0.6 * zWin;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.05, 0.06), zShop * 0.6 * step(0.5, fract(vZdWorld.y * 2.4)));
          if (zn.y > 0.5) diffuseColor.rgb *= 0.55 + 0.25 * zdN2(vZdWorld.xz * 0.4);`)
        .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, zStyle > 0.5 && zStyle < 1.5 ? 0.08 : 0.18, zWin);
          if (zStyle > 0.5 && zStyle < 1.5) roughnessFactor = mix(roughnessFactor, 0.25, zWall);`)
        .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
          metalnessFactor = mix(metalnessFactor, 0.55, zWin);`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          {
            float litRate = zStyle > 2.5 ? 0.06 : zStyle > 0.5 && zStyle < 1.5 ? 0.22 : 0.3;
            litRate *= 1.0 - 0.85 * zDark;
            float lit = step(1.0 - litRate, zh) + step(0.9, zfloor) * step(0.35, zh) * step(zStyle, 1.5) * (1.0 - zDark);
            lit = min(lit, 1.0);
            vec3 wc = mix(vec3(1.0, 0.58, 0.26), vec3(0.55, 0.74, 1.0), step(0.66, fract(zh * 13.7)));
            if (fract(zh * 7.3) > 0.9) wc = vec3(0.35, 0.45, 1.0) * (0.5 + 0.5 * zdH2(vec2(floor(uTime * 6.0 + zh * 50.0), zh)));  // TV flicker
            float flick = 0.82 + 0.18 * sin(uTime * (2.0 + zh * 9.0) + zh * 40.0);
            float glowIn = 0.75 + 0.25 * zf.y;
            totalEmissiveRadiance += zWin * lit * wc * 1.45 * flick * glowIn;
            // burnt buildings: embers glowing in a few lower windows
            if (zStyle > 2.5) totalEmissiveRadiance += zWin * step(0.9, zh) * step(vZdWorld.y, 30.0) * vec3(1.0, 0.32, 0.06) * (0.8 + 0.6 * sin(uTime * 7.0 + zh * 30.0));
            // a few shops still running on generators
            float shop = step(0.86, zdH2(vec2(floor(zp.x / 9.0), zSeed * 17.0 + zface.x * 3.0 + zface.y * 5.0))) * (1.0 - zDark);
            vec3 sc = mix(vec3(0.2, 0.9, 1.0), vec3(1.0, 0.25, 0.7), step(0.5, fract(zSeed * 9.1 + zp.x * 0.01)));
            totalEmissiveRadiance += zShop * shop * step(1.2, vZdWorld.y) * sc * 0.9;
            // lit crown band on some towers
            float crown = step(60.0, vZdSize.y) * step(0.55, zSeed) * zWall * step(zTopDist, 2.2) * step(0.6, zTopDist) * (1.0 - zDark);
            totalEmissiveRadiance += crown * mix(vec3(0.3, 0.85, 1.0), vec3(1.0, 0.85, 0.6), step(0.8, zSeed)) * 1.6;
          }`);
      mat.userData.shader = shader;
    };
    this.buildingMat = mat;
    const mesh = new THREE.InstancedMesh(bgeo, mat, list.length);
    const m = new THREE.Matrix4(), col = new THREE.Color();
    const palette = [0x5a5c66, 0x4d4f57, 0x63605a, 0x575049, 0x484d55, 0x6b6a70, 0x3f4148];
    list.forEach((b, k) => {
      m.compose(new THREE.Vector3(b.x, 0, b.z), new THREE.Quaternion(), new THREE.Vector3(b.w, b.h, b.d));
      mesh.setMatrixAt(k, m);
      col.setHex(b.kind === 'ruin' ? 0x3b3633 : palette[Math.floor(r() * palette.length)]);
      if (b.style === 2) col.lerp(new THREE.Color(0x7a5a48), 0.35);    // brick-ish residential
      mesh.setColorAt(k, col);
    });
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.buildingMesh = mesh;
    this.scene.add(mesh);

    // parapets around city roofs (visual only, 1.2 m: the drone skims roofs at +2.6 m)
    const rims = [];
    for (const b of list) {
      if (b.kind !== 'city') continue;
      const t = 0.5, hh = 1.2;
      rims.push([b.x, b.h, b.minZ + t / 2, b.w, hh, t], [b.x, b.h, b.maxZ - t / 2, b.w, hh, t], [b.minX + t / 2, b.h, b.z, t, hh, b.d], [b.maxX - t / 2, b.h, b.z, t, hh, b.d]);
    }
    const rimMesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x3c3d44, roughness: 0.9 }), rims.length);
    rims.forEach(([x, y, z, w, h, d], k) => { m.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion(), new THREE.Vector3(w, h, d)); rimMesh.setMatrixAt(k, m); });
    rimMesh.castShadow = true; rimMesh.receiveShadow = true;
    this.scene.add(rimMesh);

    // rooftop clutter (AC units) and aviation lights on towers (same random calls as the original)
    const boxes = [];
    for (const b of list) {
      if (b.kind !== 'city') continue;
      const n = 1 + Math.floor(r() * 3);
      for (let k = 0; k < n; k++) {
        boxes.push({ x: b.x + (r() - 0.5) * b.w * 0.6, z: b.z + (r() - 0.5) * b.d * 0.6, y: b.h, w: 3 + r() * 5, h: 1.5 + r() * 3.5, d: 3 + r() * 5 });
      }
      if (b.h > 85) this.beacons.push(new THREE.Vector3(b.x, b.h + 6, b.z));
    }
    const clutter = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x3a3c42, roughness: 0.7, metalness: 0.3 }), boxes.length);
    boxes.forEach((c, k) => {
      m.compose(new THREE.Vector3(c.x, c.y, c.z), new THREE.Quaternion(), new THREE.Vector3(c.w, Math.min(c.h, 2.4), c.d));
      clutter.setMatrixAt(k, m);
    });
    clutter.castShadow = true; clutter.receiveShadow = true;
    this.scene.add(clutter);

    const mastGeo = new THREE.CylinderGeometry(0.2, 0.35, 6, 6); mastGeo.translate(0, 3, 0);
    const masts = new THREE.InstancedMesh(mastGeo, new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.6, roughness: 0.4 }), this.beacons.length);
    this.beacons.forEach((p, k) => { m.makeTranslation(p.x, p.y - 6, p.z); masts.setMatrixAt(k, m); });
    this.scene.add(masts);
    const redTex = radialTexture('rgba(255,60,40,1)', 'rgba(255,0,0,0)');
    this.beaconSprites = this.beacons.map((p, k) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: redTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.position.copy(p); s.scale.setScalar(7);
      s.userData.ph = k * 0.37;
      this.scene.add(s);
      return s;
    });
  }

  // ------------------------------------------------------------ base (lab + helipad)
  _base() {
    const lab = { x: -48, z: -52, w: 40, d: 26, h: 22, kind: 'lab' };
    Object.assign(lab, { minX: lab.x - lab.w / 2, maxX: lab.x + lab.w / 2, minZ: lab.z - lab.d / 2, maxZ: lab.z + lab.d / 2 });
    this.buildings.push(lab);
    const i = Math.floor((lab.x + HALF) / CELL), j = Math.floor((lab.z + HALF) / CELL);
    if (!this.grid.has(this.key(i, j))) this.grid.set(this.key(i, j), []);
    this.grid.get(this.key(i, j)).push(lab);

    // lab facade: lit lab windows, cyan trim
    const fc = document.createElement('canvas'); fc.width = 512; fc.height = 256;
    const fg = fc.getContext('2d');
    fg.fillStyle = '#4e5560'; fg.fillRect(0, 0, 512, 256);
    for (let y = 0; y < 3; y++) for (let x = 0; x < 9; x++) {
      const lit = (x * 7 + y * 3) % 5 !== 0;
      fg.fillStyle = lit ? '#bfeaff' : '#111820';
      fg.fillRect(14 + x * 55, 30 + y * 72, 40, 40);
    }
    fg.fillStyle = '#3ae6ff'; fg.fillRect(0, 0, 512, 6); fg.fillRect(0, 250, 512, 6);
    const ftex = new THREE.CanvasTexture(fc); ftex.colorSpace = THREE.SRGBColorSpace;
    const ec = document.createElement('canvas'); ec.width = 512; ec.height = 256;
    const eg = ec.getContext('2d'); eg.drawImage(fc, 0, 0); eg.globalCompositeOperation = 'multiply'; eg.fillStyle = '#000'; eg.fillRect(0, 0, 512, 256);
    eg.globalCompositeOperation = 'source-over';
    for (let y = 0; y < 3; y++) for (let x = 0; x < 9; x++) { if ((x * 7 + y * 3) % 5 !== 0) { eg.fillStyle = '#7fd8ff'; eg.fillRect(14 + x * 55, 30 + y * 72, 40, 40); } }
    eg.fillStyle = '#3ae6ff'; eg.fillRect(0, 0, 512, 6); eg.fillRect(0, 250, 512, 6);
    const etex = new THREE.CanvasTexture(ec); etex.colorSpace = THREE.SRGBColorSpace;
    const side = new THREE.MeshStandardMaterial({ map: ftex, emissiveMap: etex, emissive: 0xffffff, emissiveIntensity: 0.75, roughness: 0.5, metalness: 0.2 });
    const roof = new THREE.MeshStandardMaterial({ color: 0x3a3f48, roughness: 0.8 });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(lab.w, lab.h, lab.d), [side, side, roof, roof, side, side]);
    mesh.position.set(lab.x, lab.h / 2, lab.z);
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);
    // rooftop dish and antenna
    const dish = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 8, 0, Math.PI * 2, 0, Math.PI / 3), new THREE.MeshStandardMaterial({ color: 0xd0d4dc, metalness: 0.4, roughness: 0.35, side: THREE.DoubleSide }));
    dish.position.set(lab.x + 10, lab.h + 3.5, lab.z); dish.rotation.set(-0.9, 0.6, 0);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.25, 12, 6), new THREE.MeshStandardMaterial({ color: 0x9aa0aa, metalness: 0.7, roughness: 0.3 }));
    ant.position.set(lab.x - 12, lab.h + 6, lab.z + 4);
    this.scene.add(dish, ant);

    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const g = c.getContext('2d');
    g.fillStyle = '#000'; g.fillRect(0, 0, 512, 128);
    g.shadowColor = '#42e8ff'; g.shadowBlur = 18;
    g.fillStyle = '#9ff4ff'; g.font = 'bold 64px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('E4-03-07 LAB', 256, 66);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(30, 7.5), new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    sign.position.set(lab.x, lab.h + 5, lab.z + lab.d / 2 - 2);
    this.scene.add(sign);

    // helipad lights (chasing)
    const ringTex = radialTexture('rgba(255,210,80,1)', 'rgba(255,160,0,0)');
    this.padLights = [];
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.position.set(Math.cos(a) * 17, 0.5, Math.sin(a) * 17); s.scale.setScalar(1.6);
      this.scene.add(s);
      this.padLights.push(s);
    }
  }

  // ------------------------------------------------------------ zombie hordes (danger zones)
  // Zombie mesh: parts tagged with aPart so the vertex shader can swing arms and legs.
  // 0 torso, 1 head, 2 left arm, 3 right arm, 4 left leg, 5 right leg, 7 eyes
  _zombieGeometry() {
    const parts = [];
    const box = (w, h, d, x, y, z, part, skin, col, rx = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rx) g.rotateX(rx);
      g.translate(x, y, z);
      const n = g.attributes.position.count;
      g.setAttribute('aPart', new THREE.Float32BufferAttribute(new Array(n).fill(part), 1));
      g.setAttribute('aSkin', new THREE.Float32BufferAttribute(new Array(n).fill(skin), 1));
      const c = new THREE.Color(col), arr = [];
      for (let i = 0; i < n; i++) arr.push(c.r, c.g, c.b);
      g.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3));
      parts.push(g);
    };
    // legs (hang from the hip at y = 0.86)
    box(0.2, 0.46, 0.22, -0.13, 0.63, 0, 4, 0, 0x404650);
    box(0.17, 0.42, 0.18, -0.13, 0.22, 0.02, 4, 1, 0xcfcfcf);
    box(0.2, 0.08, 0.3, -0.13, 0.04, 0.06, 4, 0, 0x222222);
    box(0.2, 0.46, 0.22, 0.13, 0.63, 0, 5, 0, 0x404650);
    box(0.17, 0.42, 0.18, 0.13, 0.22, 0.02, 5, 1, 0xcfcfcf);
    box(0.2, 0.08, 0.3, 0.13, 0.04, 0.06, 5, 0, 0x222222);
    // torso, hunched
    box(0.42, 0.22, 0.24, 0, 0.92, 0, 0, 0, 0x3a3f4a);
    box(0.5, 0.6, 0.28, 0, 1.28, 0.03, 0, 0, 0x5a4a3a, 0.2);
    box(0.36, 0.12, 0.22, 0, 1.52, 0.08, 0, 1, 0xd0d0d0, 0.2);   // exposed collar
    // head (slightly forward), jaw
    box(0.3, 0.3, 0.3, 0, 1.72, 0.14, 1, 1, 0xffffff);
    box(0.24, 0.08, 0.2, 0, 1.55, 0.2, 1, 1, 0xb0b0b0);
    // eyes
    box(0.07, 0.045, 0.03, -0.075, 1.76, 0.295, 7, 0, 0xffffff);
    box(0.07, 0.045, 0.03, 0.075, 1.76, 0.295, 7, 0, 0xffffff);
    // arms (hang from the shoulders at y = 1.48, raised forward by the shader)
    box(0.14, 0.34, 0.15, -0.34, 1.3, 0.04, 2, 0, 0x5a4a3a);
    box(0.12, 0.36, 0.12, -0.34, 0.96, 0.04, 2, 1, 0xd8d8d8);
    box(0.13, 0.12, 0.08, -0.34, 0.74, 0.04, 2, 1, 0xc0c0c0);
    box(0.14, 0.34, 0.15, 0.34, 1.3, 0.04, 3, 0, 0x5a4a3a);
    box(0.12, 0.36, 0.12, 0.34, 0.96, 0.04, 3, 1, 0xd8d8d8);
    box(0.13, 0.12, 0.08, 0.34, 0.74, 0.04, 3, 1, 0xc0c0c0);
    return mergeGeometries(parts);
  }

  _zombieMaterial() {
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.92, emissive: 0x0c1a08 });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = { value: 0 };
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
          attribute float aPart; attribute float aSkin; attribute vec4 aAnim;
          varying float vPart; varying float vBurn; varying vec3 vLoc;
          mat3 zdRotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
          mat3 zdRotZ(float a){ float c = cos(a), s = sin(a); return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0); }`)
        .replace('#include <beginnormal_vertex>', `
          float zph = aAnim.x, zwalk = aAnim.y, zreach = aAnim.z;
          mat3 zR = mat3(1.0); vec3 zPiv = vec3(0.0);
          if (aPart > 1.5 && aPart < 3.5) {
            float side = aPart < 2.5 ? 1.0 : -1.0;
            zPiv = vec3(-0.34 * side, 1.48, 0.04);
            float a = -1.2 + 0.16 * sin(zph * 0.5 + side) - zreach * (0.55 + 0.45 * sin(zph * 2.3 + side * 1.7));
            zR = zdRotZ(side * 0.08 * sin(zph * 0.7)) * zdRotX(a);
          } else if (aPart > 3.5 && aPart < 5.5) {
            float side = aPart < 4.5 ? 1.0 : -1.0;
            zPiv = vec3(0.0, 0.86, 0.0);
            zR = zdRotX(sin(zph + (side > 0.0 ? 0.0 : 3.14159)) * 0.5 * zwalk);
          } else if (aPart > 0.5 && aPart < 1.5 || aPart > 6.5) {
            zPiv = vec3(0.0, 1.56, 0.08);
            zR = zdRotZ(0.22 * sin(zph * 0.37)) * zdRotX(0.15 * sin(zph * 0.5));
          }
          vec3 objectNormal = zR * vec3(normal);
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif`)
        .replace('#include <begin_vertex>', `vec3 transformed = zR * (vec3(position) - zPiv) + zPiv;
          vPart = aPart; vBurn = aAnim.w; vLoc = position;`)
        .replace('#include <color_vertex>', `
          #if defined( USE_COLOR )
            float zhs = fract(sin(dot(instanceColor, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
            vec3 zcloth = mix(vec3(0.75, 0.8, 0.9), vec3(1.15, 0.9, 0.75), zhs);
            vColor = color * mix(zcloth, instanceColor * 1.15, aSkin);
          #endif`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform float uTime; varying float vPart; varying float vBurn; varying vec3 vLoc;
          ${NOISE_GLSL}`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          float zrag = zdN3(vLoc * 9.0);
          diffuseColor.rgb *= 0.7 + 0.45 * zrag;
          diffuseColor.rgb *= 1.0 - 0.88 * smoothstep(0.0, 0.6, vBurn);`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          if (vPart > 6.5) totalEmissiveRadiance += vec3(1.0, 0.12, 0.04) * 6.0 * (1.0 - vBurn);
          if (vBurn > 0.0) {
            float cr = zdN3(vLoc * 14.0 + vec3(0.0, -uTime * 2.0, 0.0));
            float glow = smoothstep(0.45, 0.8, cr) * (1.0 - smoothstep(0.7, 1.0, vBurn)) * smoothstep(0.0, 0.15, vBurn);
            totalEmissiveRadiance += vec3(1.0, 0.36, 0.06) * glow * 5.0;
          }`);
      mat.userData.shader = sh;
    };
    return mat;
  }

  _hordes() {
    const r = this.rng, r2 = this.rng2;
    const spots = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const x = cellCenter(i), z = cellCenter(j);
      if (this.cellType[i][j] === 'lot' && Math.hypot(x, z) > 180) spots.push({ x, z });
    }
    // shuffle and pick; habitats will use some of the other lots
    for (let k = spots.length - 1; k > 0; k--) { const q = Math.floor(r() * (k + 1)); [spots[k], spots[q]] = [spots[q], spots[k]]; }
    this.freeLots = spots;
    const hordeSpots = [];
    // also put hordes at a few road intersections
    for (let k = 0; k < 4; k++) {
      const x = roadLine(2 + Math.floor(r() * (N - 3))), z = roadLine(2 + Math.floor(r() * (N - 3)));
      if (Math.hypot(x, z) > 200) hordeSpots.push({ x, z });
    }
    while (hordeSpots.length < 10 && spots.length > 6) hordeSpots.push(spots.pop());

    const g = this._zombieGeometry();
    const perHorde = 22;
    const total = hordeSpots.length * perHorde;
    this.zAnim = new THREE.InstancedBufferAttribute(new Float32Array(total * 4), 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('aAnim', this.zAnim);
    this.zMat = this._zombieMaterial();
    this.zMesh = new THREE.InstancedMesh(g, this.zMat, total);
    this.zMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.zMesh.frustumCulled = false;
    const skins = [0x6f8f5a, 0x5d7a52, 0x7b8a6a, 0x58664c, 0x8a9a6a, 0x4f6a4a];
    const col = new THREE.Color();
    const ringGeo = new THREE.RingGeometry(0.92, 1, 96);
    ringGeo.rotateX(-Math.PI / 2);
    const glowTex = radialTexture('rgba(255,40,30,0.5)', 'rgba(255,0,0,0)');
    // rotating dashed hazard ring
    const dc = document.createElement('canvas'); dc.width = 1024; dc.height = 16;
    const dg = dc.getContext('2d');
    for (let k = 0; k < 48; k++) { dg.fillStyle = k % 2 ? 'rgba(255,60,40,0.0)' : 'rgba(255,80,50,1)'; dg.fillRect(k * (1024 / 48), 0, 1024 / 48, 16); }
    const dashTex = new THREE.CanvasTexture(dc); dashTex.wrapS = THREE.RepeatWrapping; dashTex.colorSpace = THREE.SRGBColorSpace;
    const dashGeo = new THREE.RingGeometry(1.03, 1.07, 128, 1);
    { // map u around the ring
      const p = dashGeo.attributes.position, uv = dashGeo.attributes.uv;
      for (let k = 0; k < p.count; k++) { const a = Math.atan2(p.getY(k), p.getX(k)); uv.setXY(k, (a / (Math.PI * 2) + 0.5), Math.hypot(p.getX(k), p.getY(k)) > 1.05 ? 1 : 0); }
    }
    dashGeo.rotateX(-Math.PI / 2);

    hordeSpots.forEach((s, hi) => {
      const radius = 34 + r() * 10;
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xff2a1a, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
      ring.scale.setScalar(radius); ring.position.set(s.x, 0.3, s.z);
      this.scene.add(ring);
      const dash = new THREE.Mesh(dashGeo, new THREE.MeshBasicMaterial({ map: dashTex, color: 0xff3a2a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
      dash.scale.setScalar(radius); dash.position.set(s.x, 0.32, s.z);
      this.scene.add(dash);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2.4, radius * 2.4), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.rotation.x = -Math.PI / 2; glow.position.set(s.x, 0.2, s.z);
      this.scene.add(glow);
      const horde = { x: s.x, z: s.z, radius, ring, glow, dash, alive: perHorde, total: perHorde, cleared: false, zombies: [] };
      for (let k = 0; k < perHorde; k++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r()) * radius * 0.85;
        const z = {
          idx: hi * perHorde + k, horde, x: s.x + Math.cos(a) * d, z: s.z + Math.sin(a) * d,
          hx: s.x + Math.cos(a) * d, hz: s.z + Math.sin(a) * d, yaw: r() * Math.PI * 2,
          phase: r() * 10, speed: 0.6 + r() * 0.5, scale: 2.1 + r() * 0.6, dead: false, deadT: 0,
          walk: r2() * 10, fallDir: r2() < 0.5 ? -1 : 1,
        };
        horde.zombies.push(z);
        this.zombies.push(z);
        col.setHex(skins[Math.floor(r() * skins.length)]);
        this.zMesh.setColorAt(z.idx, col);
      }
      this.hordes.push(horde);
    });
    this.scene.add(this.zMesh);
  }

  // ------------------------------------------------------------ charging pylons (safe zones)
  _pylons() {
    const r = this.rng;
    const beamTex = radialTexture('rgba(80,240,255,0.9)', 'rgba(0,200,255,0)');
    const spots = [[0, 0]];
    const want = 8;
    let guard = 0;
    while (spots.length < want + 1 && guard++ < 500) {
      const x = roadLine(1 + Math.floor(r() * (N - 1))), z = roadLine(1 + Math.floor(r() * (N - 1)));
      if (spots.every(([a, b]) => Math.hypot(a - x, b - z) > 260)) spots.push([x, z]);
    }
    spots.shift();
    const metal = new THREE.MeshStandardMaterial({ color: 0x2a3540, metalness: 0.8, roughness: 0.35 });
    const poolTex = radialTexture('rgba(60,220,255,0.55)', 'rgba(0,160,255,0)');
    const membraneMat = () => new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uOn: { value: 1 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform float uTime, uOn; varying vec2 vUv;
        void main(){ vec2 p = vUv - 0.5; float r = length(p) * 2.0; float a = atan(p.y, p.x);
          float swirl = 0.5 + 0.5 * sin(a * 6.0 + r * 14.0 - uTime * 4.0);
          float rim = smoothstep(0.55, 1.0, r) * (1.0 - smoothstep(0.96, 1.0, r));
          float v = (0.12 + 0.4 * swirl * r + rim * 0.9) * (1.0 - smoothstep(0.97, 1.0, r));
          gl_FragColor = vec4(vec3(0.2, 0.85, 1.0) * v * uOn, 1.0);
          #include <colorspace_fragment>
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    for (const [x, z] of spots) {
      const y = 26 + r() * 14;
      const grp = new THREE.Group();
      grp.position.set(x, 0, z);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 300, 16, 1, true), beamMaterial(0x3ae6ff, 0.3));
      beam.position.y = 150;
      beam.userData.noAO = true;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(10, 0.7, 12, 64),
        new THREE.MeshStandardMaterial({ color: 0x0a3a44, emissive: 0x30e0ff, emissiveIntensity: 2.2, metalness: 0.6, roughness: 0.3 }));
      ring.position.y = y;
      const membrane = new THREE.Mesh(new THREE.CircleGeometry(9.4, 48), membraneMat());
      membrane.userData.noAO = true;
      ring.add(membrane);
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: beamTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 }));
      halo.position.y = y; halo.scale.setScalar(26);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(3, 4, 2, 16), new THREE.MeshStandardMaterial({ color: 0x223038, emissive: 0x1090a0, emissiveIntensity: 0.8, metalness: 0.6, roughness: 0.4 }));
      base.position.y = 1;
      base.castShadow = true;
      // mast up to the ring's lower edge, with a cradle
      const mastH = y - 10.6;
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.9, mastH, 8), metal);
      mast.position.y = mastH / 2; mast.castShadow = true;
      const cradle = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.25, 6, 16, Math.PI), metal);
      cradle.rotation.z = Math.PI; cradle.position.y = mastH + 0.2;
      const lights = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, mastH * 0.9, 8, 1, true), new THREE.MeshBasicMaterial({ color: 0x3ae6ff, wireframe: true, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }));
      lights.position.y = mastH / 2;
      const pool = new THREE.Mesh(new THREE.PlaneGeometry(26, 26), new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      pool.rotation.x = -Math.PI / 2; pool.position.y = 0.12;
      grp.add(beam, ring, halo, base, mast, cradle, lights, pool);
      this.scene.add(grp);
      this.pylons.push({ x, z, y, ring, beam, halo, membrane, pool, cooldown: 0 });
    }
  }

  // ------------------------------------------------------------ human habitats
  _habitats() {
    const r = this.rng, r2 = this.rng2;
    const lots = this.freeLots.filter((s) => Math.hypot(s.x, s.z) > 230);
    const chosen = [];
    for (const s of lots) {
      if (chosen.every((c) => Math.hypot(c.x - s.x, c.z - s.z) > 300)) chosen.push(s);
      if (chosen.length === 5) break;
    }
    // fallback if the random city did not leave enough far-apart lots
    const fallback = [[-520, -430], [480, -470], [520, 420], [-470, 500], [60, 560]];
    while (chosen.length < 5) { const [x, z] = fallback[chosen.length]; chosen.push({ x, z }); }

    const domeGeo = new THREE.SphereGeometry(18, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const warm = radialTexture('rgba(255,200,120,1)', 'rgba(255,140,40,0)');
    const poolTex = radialTexture('rgba(255,190,110,0.5)', 'rgba(255,120,40,0)');
    const tentMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 0.95 });
    const contMat = [0x7a3a2a, 0x2a4a6a, 0x5a6a3a].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.7, metalness: 0.4 }));
    const tentGeo = new THREE.ConeGeometry(2.4, 2.4, 4); tentGeo.rotateY(Math.PI / 4); tentGeo.translate(0, 1.2, 0);
    const contGeo = new THREE.BoxGeometry(6, 2.6, 2.4); contGeo.translate(0, 1.3, 0);
    chosen.forEach((s, k) => {
      const grp = new THREE.Group();
      grp.position.set(s.x, 0, s.z);
      const dome = new THREE.Mesh(domeGeo, new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x7fd0ff) }, uFound: { value: 0 } },
        vertexShader: `varying vec3 vN; varying vec3 vV; varying vec3 vP;
          void main(){ vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }`,
        fragmentShader: `uniform float uTime, uFound; uniform vec3 uColor; varying vec3 vN; varying vec3 vV; varying vec3 vP;
          void main(){
            float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
            float fres = pow(f, 2.2);
            // hexagon-ish lattice from the sphere coordinates
            float a = atan(vP.z, vP.x) * 12.0; float e = vP.y * 0.9;
            vec2 q = vec2(a, e + 0.5 * floor(a));
            vec2 g = abs(fract(q) - 0.5);
            float hexl = 1.0 - smoothstep(0.0, 0.06, min(g.x, g.y));
            float wave = 0.5 + 0.5 * sin(vP.y * 0.8 - uTime * 2.0);
            vec3 col = mix(uColor, vec3(0.4, 1.0, 0.55), uFound);
            float v = fres * 0.9 + hexl * (0.12 + 0.25 * wave) + 0.03;
            gl_FragColor = vec4(col * v, 1.0);
            #include <colorspace_fragment>
          }`,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      }));
      dome.userData.noAO = true;
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.2, 460, 16, 1, true), beamMaterial(0x9fd0ff, 0.12));
      beam.position.y = 230;
      beam.userData.noAO = true;
      const pool = new THREE.Mesh(new THREE.PlaneGeometry(46, 46), new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      pool.rotation.x = -Math.PI / 2; pool.position.y = 0.15;
      grp.add(dome, beam, pool);
      for (let q = 0; q < 6; q++) {        // camp lights inside the dome (same random calls as the original)
        const l = new THREE.Sprite(new THREE.SpriteMaterial({ map: warm, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
        l.position.set((r() - 0.5) * 20, 1.5 + r() * 2, (r() - 0.5) * 20); l.scale.setScalar(4 + r() * 3);
        grp.add(l);
      }
      // tents and containers inside
      for (let q = 0; q < 7; q++) {
        const a = r2() * Math.PI * 2, d = 4 + r2() * 9;
        const t = r2() < 0.6 ? new THREE.Mesh(tentGeo, tentMat) : new THREE.Mesh(contGeo, contMat[q % 3]);
        t.position.set(Math.cos(a) * d, 0, Math.sin(a) * d); t.rotation.y = r2() * Math.PI;
        t.castShadow = true; t.receiveShadow = true;
        grp.add(t);
      }
      this.scene.add(grp);
      this.habitats.push({ x: s.x, z: s.z, found: false, dome, beam, survivors: 6 + Math.floor(r() * 30), name: `HABITAT ${String.fromCharCode(65 + k)}` });
    });
  }

  // ------------------------------------------------------------ fires + ash
  _fires() {
    const r = this.rng;
    const fireTex = radialTexture('rgba(255,170,60,1)', 'rgba(255,60,0,0)');
    const cands = this.buildings.filter((b) => b.kind === 'city' && b.h < 70);
    for (let k = 0; k < 16 && cands.length; k++) {
      const b = cands[Math.floor(r() * cands.length)];
      const grp = [];
      for (let q = 0; q < 3; q++) {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: fireTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.55 }));
        s.position.set(b.x + (r() - 0.5) * b.w * 0.5, b.h + 3 + q * 3, b.z + (r() - 0.5) * b.d * 0.5);
        s.scale.setScalar(10 + r() * 6);
        this.scene.add(s);
        grp.push({ s, base: s.scale.x, ph: r() * 10 });
      }
      grp.roof = b.h;
      this.fires.push(grp);
    }
  }

  _ash() {
    const n = 2500, pos = new Float32Array(n * 3), r = this.rng;
    for (let k = 0; k < n; k++) { pos[k * 3] = (r() - 0.5) * 300; pos[k * 3 + 1] = r() * 160; pos[k * 3 + 2] = (r() - 0.5) * 300; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.ash = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffa060, size: 0.18, map: radialTexture('rgba(255,220,190,1)', 'rgba(255,200,160,0)', 32), transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.ash.geometry.setDrawRange(0, 900);
    this.scene.add(this.ash);
  }

  // ------------------------------------------------------------ effects
  burst(x, y, z, color = 0xff3a6a) {
    fx.impact(x, y, z, new THREE.Color(color));
    fx.scorch(x, z, 5 + Math.random() * 3);
  }

  setQuality(q) {
    this.quality = q;
    const hi = q !== 'low';
    this.moon.castShadow = hi;
    const sz = hi ? 2048 : 1024;
    if (this.moon.shadow.mapSize.x !== sz) {
      this.moon.shadow.mapSize.set(sz, sz);
      if (this.moon.shadow.map) { this.moon.shadow.map.dispose(); this.moon.shadow.map = null; }
    }
    fx.setQuality(q);
    this.rain.setQuality(q);
    this.street.setQuality(q);
    this.ash.geometry.setDrawRange(0, hi ? 900 : 400);
  }

  // ------------------------------------------------------------ queries
  buildingsNear(x, z) {
    const i = Math.floor((x + HALF) / CELL), j = Math.floor((z + HALF) / CELL);
    const out = [];
    for (let a = i - 1; a <= i + 1; a++) for (let b = j - 1; b <= j + 1; b++) {
      const l = this.grid.get(this.key(a, b));
      if (l) out.push(...l);
    }
    return out;
  }

  heightAt(x, z) {
    let h = 0;
    for (const b of this.buildingsNear(x, z)) {
      if (x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ) h = Math.max(h, b.h);
    }
    return h;
  }

  // shadow frustum follows the view and snaps to shadow-map texels (no shimmering)
  _updateShadow(camera) {
    const f = new THREE.Vector3(); camera.getWorldDirection(f); f.y = 0;
    if (f.lengthSq() < 1e-4) f.set(0, 0, -1);
    f.normalize();
    const focus = this._focus || (this._focus = new THREE.Vector3());
    focus.copy(camera.position).addScaledVector(f, 110); focus.y = 0;
    const d = this.moonDir;
    const up = Math.abs(d.y) > 0.99 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(0, 1, 0);
    const ax = new THREE.Vector3().crossVectors(up, d).normalize();
    const ay = new THREE.Vector3().crossVectors(d, ax);
    const texel = (this.moon.shadow.camera.right - this.moon.shadow.camera.left) / this.moon.shadow.mapSize.x;
    const fx0 = focus.dot(ax), fy0 = focus.dot(ay);
    focus.addScaledVector(ax, Math.round(fx0 / texel) * texel - fx0).addScaledVector(ay, Math.round(fy0 / texel) * texel - fy0);
    this.moon.target.position.copy(focus);
    this.moon.position.copy(focus).addScaledVector(d, 900);
    this.moon.target.updateMatrixWorld();
  }

  // ------------------------------------------------------------ per-frame animation
  update(dt, t, drone, camera) {
    this.time = t;
    if (this.buildingMat.userData.shader) this.buildingMat.userData.shader.uniforms.uTime.value = t;
    if (this.zMat.userData.shader) this.zMat.userData.shader.uniforms.uTime.value = t;
    this.sky.material.uniforms.uTime.value = t;
    this.sky.position.copy(camera.position);
    this.stars.position.copy(camera.position);
    if (this.moon.castShadow) this._updateShadow(camera);

    // lightning
    this.flash = this.lightning.update(dt, t, camera);
    this.sky.material.uniforms.uFlash.value = this.flash;
    this.hemi.intensity = 0.55 + this.flash * 1.6;
    this.flashLight.intensity = this.flash * 3.5;
    this.scene.environmentIntensity = 0.42 + this.flash * 0.6;
    this.stars.material.opacity = 0.55 * (1 - Math.min(1, this.flash * 2));

    for (const s of this.beaconSprites) s.material.opacity = (Math.sin(t * 3 + s.userData.ph) > 0.6) ? 1 : 0.12;
    this.padLights.forEach((s, k) => { const a = ((t * 2 - k / 16) % 1 + 1) % 1; s.material.opacity = 0.25 + 0.75 * Math.pow(1 - a, 4); });

    // fires: glow sprites flicker, particles make flames and smoke plumes
    const q = this.quality === 'low' ? 0.4 : 1;
    for (const grp of this.fires) {
      for (const f of grp) {
        const k = 0.75 + 0.25 * Math.sin(t * 9 + f.ph) * Math.sin(t * 5.3 + f.ph * 2);
        f.s.scale.setScalar(f.base * k);
      }
      const f0 = grp[0].s.position;
      if (Math.hypot(f0.x - camera.position.x, f0.z - camera.position.z) < 700) {
        grp.acc = (grp.acc || 0) + dt * 22 * q;
        while (grp.acc >= 1) {
          grp.acc -= 1;
          const p = grp[Math.floor(Math.random() * grp.length)].s.position;
          fx.flame(p.x, grp.roof + 0.5, p.z, 5 + Math.random() * 3, 1.1);
        }
        grp.sacc = (grp.sacc || 0) + dt * 2.6 * q;
        while (grp.sacc >= 1) { grp.sacc -= 1; fx.smokePuff(f0.x, grp.roof + 8, f0.z, 12, 0.16, 9, 6, 2.2); }
      }
    }

    const camNear = (x, z) => Math.min(1, Math.max(0, (Math.hypot(camera.position.x - x, camera.position.z - z) - 6) / 30));
    for (const p of this.pylons) {
      p.ring.rotation.y += dt * 0.8;
      const ready = p.cooldown <= 0;
      p.cooldown = Math.max(0, p.cooldown - dt);
      p.ring.material.emissiveIntensity = ready ? 2.0 + Math.sin(t * 4) * 0.6 : 0.3;
      p.beam.material.uniforms.uOpacity.value = (ready ? 0.17 : 0.05) * camNear(p.x, p.z);
      p.beam.material.uniforms.uTime.value = t;
      p.halo.material.opacity = ready ? 0.22 : 0.05;
      p.membrane.material.uniforms.uTime.value = t;
      p.membrane.material.uniforms.uOn.value = ready ? 1 : 0.15;
      p.pool.material.opacity = ready ? 1 : 0.3;
    }
    for (const h of this.habitats) {
      const u = h.beam.material.uniforms;
      u.uColor.value.setHex(h.found ? 0x6aff8a : 0x9fd0ff);
      u.uOpacity.value = (0.12 + 0.04 * Math.sin(t * 2 + h.x)) * camNear(h.x, h.z);
      u.uTime.value = t;
      h.dome.material.uniforms.uTime.value = t;
      h.dome.material.uniforms.uFound.value += ((h.found ? 1 : 0) - h.dome.material.uniforms.uFound.value) * Math.min(1, dt * 2);
    }
    for (const h of this.hordes) {
      const pulse = 0.55 + 0.35 * Math.sin(t * 3 + h.x);
      h.ring.material.opacity = h.cleared ? 0.25 : pulse;
      h.ring.material.color.setHex(h.cleared ? 0x3aff6a : 0xff2a1a);
      h.glow.material.opacity = h.cleared ? 0.0 : pulse * 0.5;
      h.dash.rotation.y += dt * (h.cleared ? 0.05 : 0.25);
      h.dash.material.color.setHex(h.cleared ? 0x3aff6a : 0xff3a2a);
      h.dash.material.opacity = h.cleared ? 0.3 : 0.8;
      // low red haze over live hordes
      if (!h.cleared && Math.random() < dt * 1.5 * q && Math.hypot(h.x - camera.position.x, h.z - camera.position.z) < 500) {
        const a = Math.random() * 6.28, d = Math.random() * h.radius;
        const s = fx.smokePuff(h.x + Math.cos(a) * d, 1, h.z + Math.sin(a) * d, 14, 0.2, 6, 0.4, 0.6);
        if (s) { s.r = 0.22; s.g = 0.05; s.b = 0.05; s.a = 0.22; }
      }
    }

    // ash / embers follow the camera, wrapping around
    const ap = this.ash.geometry.attributes.position;
    const cx = camera.position.x, cz = camera.position.z;
    for (let k = 0; k < ap.count; k++) {
      let y = ap.getY(k) - dt * 1.6, x = ap.getX(k), z = ap.getZ(k);
      if (y < 0) y += 160;
      if (x - cx > 150) x -= 300; else if (x - cx < -150) x += 300;
      if (z - cz > 150) z -= 300; else if (z - cz < -150) z += 300;
      ap.setXYZ(k, x + Math.sin(this.time * 0.5 + k) * dt * 0.6, y, z);
    }
    ap.needsUpdate = true;

    // rotor downwash: dust and spray under the drone when flying low
    if (drone && drone.state !== 'parked' && drone.state !== 'down' && drone.altitude !== undefined && drone.altitude < 16) {
      const k = 1 - drone.altitude / 16;
      this._dustAcc = (this._dustAcc || 0) + dt * 40 * k * q;
      const gh = drone.pos.y - drone.altitude;
      while (this._dustAcc >= 1) { this._dustAcc -= 1; fx.dust(drone.pos.x, gh, drone.pos.z, k); }
    }

    this.street.update(dt, t, camera);
    this.rain.update(dt, t, camera, drone, this.flash);
    this._animateZombies(dt, t, drone);
    fx.update(dt, camera, this.scene.fog);
  }

  _animateZombies(dt, t, drone) {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const dx = drone ? drone.pos.x : 1e9, dz = drone ? drone.pos.z : 1e9, dy = drone ? drone.pos.y : 1e9;
    const A = this.zAnim.array;
    const qual = this.quality === 'low' ? 0.4 : 1;
    for (const z of this.zombies) {
      const i4 = z.idx * 4;
      if (z.dead) {
        if (z.deadT === 0) { z.scorched = false; }
        z.deadT += dt;
        // knocked back, burns, crumbles into the ground
        const fall = Math.min(1, z.deadT / 0.35);
        const burn = Math.min(1, z.deadT / 1.6);
        const sink = Math.max(0, z.deadT - 1.2) * 1.1;
        const shrink = Math.max(0, 1 - Math.max(0, z.deadT - 1.4) / 0.8);
        p.set(z.x, -sink, z.z);
        e.set(-fall * 1.35, z.yaw, fall * 0.25 * z.fallDir); q.setFromEuler(e); s.setScalar(z.scale * Math.max(0.0001, shrink));
        m.compose(p, q, s);
        this.zMesh.setMatrixAt(z.idx, m);
        A[i4] = z.walk; A[i4 + 1] = 0; A[i4 + 2] = 0; A[i4 + 3] = Math.min(1, burn * 1.1);
        if (z.deadT < 1.9 && shrink > 0) {
          z.facc = (z.facc || 0) + dt * 16 * qual;
          while (z.facc >= 1) { z.facc -= 1; fx.flame(z.x + (Math.random() - 0.5) * 2, 0.3, z.z + (Math.random() - 0.5) * 2, 2.2 + Math.random() * 1.5, 0.8); }
          if (Math.random() < dt * 6 * qual) fx.embers(z.x, 1, z.z, 2);
          if (Math.random() < dt * 2.5 * qual) fx.smokePuff(z.x, 1.5, z.z, 4, 0.12, 4, 2.5, 1);
        }
        z.wasDead = true;
        continue;
      }
      if (z.wasDead) { z.wasDead = false; z.facc = 0; }
      const h = z.horde;
      const near = Math.hypot(dx - h.x, dz - h.z) < h.radius * 1.7 && dy < 60;
      let tx, tz, sp;
      if (near) { tx = dx + Math.sin(z.phase) * 6; tz = dz + Math.cos(z.phase) * 6; sp = 2.6 * z.speed + 1.2; }
      else { tx = z.hx + Math.sin(t * 0.3 + z.phase) * 4; tz = z.hz + Math.cos(t * 0.27 + z.phase) * 4; sp = z.speed; }
      const vx = tx - z.x, vz = tz - z.z, d = Math.hypot(vx, vz);
      let moving = 0;
      if (d > 0.5) {
        const want = Math.atan2(vx, vz);
        let dyaw = want - z.yaw; dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw));
        z.yaw += dyaw * Math.min(1, dt * 3);
        z.x += Math.sin(z.yaw) * sp * dt; z.z += Math.cos(z.yaw) * sp * dt;
        moving = 1;
      }
      // keep the horde roughly inside its zone
      const ox = z.x - h.x, oz = z.z - h.z, od = Math.hypot(ox, oz), lim = h.radius * 1.15;
      if (od > lim) { z.x = h.x + ox / od * lim; z.z = h.z + oz / od * lim; }
      z.walk += dt * (moving ? sp * 2.4 + 0.6 : 0.6);
      const reach = near && dy < 40 ? 1 : 0;
      z.reach = (z.reach || 0) + (reach - (z.reach || 0)) * Math.min(1, dt * 4);
      p.set(z.x, Math.abs(Math.sin(z.walk)) * 0.06 * moving + z.reach * Math.abs(Math.sin(t * 7 + z.phase)) * 0.5, z.z);
      e.set(near ? -0.3 : 0.12, z.yaw, Math.sin(z.walk * 0.5 + z.phase) * 0.1);
      q.setFromEuler(e); s.setScalar(z.scale);
      m.compose(p, q, s);
      this.zMesh.setMatrixAt(z.idx, m);
      A[i4] = z.walk; A[i4 + 1] = moving ? Math.min(1, 0.4 + sp * 0.3) : 0.1; A[i4 + 2] = z.reach; A[i4 + 3] = 0;
    }
    this.zMesh.instanceMatrix.needsUpdate = true;
    this.zAnim.needsUpdate = true;
  }
}

// world.js - post-apocalyptic city: sky, ground, buildings, zombie hordes,
// charging pylons (safe zones), human habitats, fires and falling ash.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

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

function cellCenter(i) { return (i - N / 2 + 0.5) * CELL; }
function roadLine(k) { return (k - N / 2) * CELL; }  // road centre lines between cells

function radialTexture(inner, outer, size = 128) {
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

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.rng = rngFrom(2028);
    this.time = 0;
    this.buildings = [];             // {minX,maxX,minZ,maxZ,h}
    this.grid = new Map();           // cell key -> building list
    this.cellType = [];
    this.hordes = [];
    this.pylons = [];
    this.habitats = [];
    this.zombies = [];
    this.fires = [];
    this.beacons = [];
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

  // ------------------------------------------------------------ sky
  _sky() {
    const geo = new THREE.SphereGeometry(2400, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec3 vDir; uniform float uTime;
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 zen = vec3(0.012,0.014,0.04);
          vec3 mid = vec3(0.07,0.035,0.09);
          vec3 hor = vec3(0.42,0.13,0.06);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.22, h));
          c = mix(c, zen, smoothstep(0.22, 0.85, h));
          // burning horizon flicker
          float burn = 0.06 * sin(atan(d.z, d.x) * 9.0 + uTime * 0.7) * (1.0 - smoothstep(0.0, 0.12, h));
          c += vec3(burn, burn * 0.3, 0.0);
          vec3 md = normalize(vec3(-0.45, 0.32, -0.83));
          float m = smoothstep(0.99875, 0.9993, dot(d, md));
          c += vec3(1.0, 0.92, 0.8) * m * 1.6;
          c += vec3(0.25, 0.22, 0.32) * pow(max(dot(d, md), 0.0), 60.0);
          if (h < 0.0) c = hor * 0.35;
          gl_FragColor = vec4(c, 1.0);
        }`,
    });
    this.sky = new THREE.Mesh(geo, mat);
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
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xb8c4ff, size: 1.6, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.8 }));
    this.scene.add(this.stars);

    this.scene.fog = new THREE.FogExp2(0x1d0d12, 0.00145);
    this.scene.add(new THREE.HemisphereLight(0x6a5a9a, 0x2a1a10, 0.9));
    const moon = new THREE.DirectionalLight(0xaab8ff, 1.1);
    moon.position.set(-450, 400, -800);
    this.scene.add(moon);
    const glow = new THREE.DirectionalLight(0xff6a2a, 0.55);   // fire glow from the burning horizon
    glow.position.set(600, 80, 500);
    this.scene.add(glow);
  }

  // ------------------------------------------------------------ ground
  _ground() {
    const size = 2000, px = 2048, s = px / size;
    const c = document.createElement('canvas');
    c.width = c.height = px;
    const g = c.getContext('2d');
    const r = this.rng;
    const toPx = (x) => (x + size / 2) * s;

    g.fillStyle = '#17130f'; g.fillRect(0, 0, px, px);
    g.fillStyle = '#1b1c21'; g.fillRect(toPx(-HALF - 14), toPx(-HALF - 14), (2 * HALF + 28) * s, (2 * HALF + 28) * s);
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const cx = cellCenter(i), cz = cellCenter(j), t = this.cellType[i][j];
        const b = t === 'plaza' ? CELL / 2 : BLOCK / 2;
        g.fillStyle = t === 'lot' ? '#1f2119' : t === 'plaza' ? '#26272c' : '#2a2a2e';
        g.fillRect(toPx(cx - b - 2), toPx(cz - b - 2), (2 * b + 4) * s, (2 * b + 4) * s);
        if (t === 'lot') {   // overgrown lot
          for (let k = 0; k < 40; k++) {
            g.fillStyle = `rgba(${40 + r() * 30},${55 + r() * 30},${30 + r() * 20},0.5)`;
            g.fillRect(toPx(cx - b + r() * 2 * b), toPx(cz - b + r() * 2 * b), 4 + r() * 10, 4 + r() * 10);
          }
        }
      }
    }
    // dashed centre lines
    g.strokeStyle = 'rgba(200,170,60,0.55)'; g.lineWidth = 1.2; g.setLineDash([6, 8]);
    for (let k = 0; k <= N; k++) {
      const v = toPx(roadLine(k));
      g.beginPath(); g.moveTo(v, toPx(-HALF)); g.lineTo(v, toPx(HALF)); g.stroke();
      g.beginPath(); g.moveTo(toPx(-HALF), v); g.lineTo(toPx(HALF), v); g.stroke();
    }
    g.setLineDash([]);
    // cracks and debris
    for (let k = 0; k < 2500; k++) {
      g.fillStyle = `rgba(0,0,0,${0.15 + r() * 0.3})`;
      g.fillRect(r() * px, r() * px, 1 + r() * 3, 1 + r() * 3);
    }
    // helipad
    const hp = toPx(0);
    g.fillStyle = '#30343c'; g.beginPath(); g.arc(hp, hp, 16 * s, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#ffd24a'; g.lineWidth = 2; g.beginPath(); g.arc(hp, hp, 14 * s, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#ffd24a'; g.font = `bold ${Math.round(18 * s)}px sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('H', hp, hp + 1);

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(size, size),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, metalness: 0.0 }));
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);
  }

  // ------------------------------------------------------------ buildings
  _buildings() {
    const r = this.rng;
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

    const geo = new THREE.BoxGeometry(1, 1, 1);
    geo.translate(0, 0.5, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0.08 });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vZdWorld; varying vec3 vZdNormal;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          vec4 zdW = vec4(transformed, 1.0);
          vec3 zdN = normal;
          #ifdef USE_INSTANCING
            zdW = instanceMatrix * zdW;
            zdN = mat3(instanceMatrix) * zdN;
          #endif
          zdW = modelMatrix * zdW;
          vZdWorld = zdW.xyz;
          vZdNormal = normalize(mat3(modelMatrix) * zdN);`);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>
          varying vec3 vZdWorld; varying vec3 vZdNormal; uniform float uTime;
          float zdHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float zdWin(out float h){
            vec3 n = normalize(vZdNormal);
            float wall = 1.0 - step(0.5, abs(n.y));
            vec2 p = abs(n.x) > 0.5 ? vZdWorld.zy : vZdWorld.xy;
            vec2 cell = p / vec2(3.3, 3.5);
            vec2 f = fract(cell); vec2 id = floor(cell);
            h = zdHash(id + floor(n.xz * 2.0 + 2.0) * 57.3);
            return wall * step(0.2, f.x) * step(f.x, 0.8) * step(0.28, f.y) * step(f.y, 0.8) * step(5.0, vZdWorld.y);
          }`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          { float hh; float w = zdWin(hh); diffuseColor.rgb *= 1.0 - 0.55 * w;
            if (normalize(vZdNormal).y > 0.5) diffuseColor.rgb *= 0.62; }`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          { float h; float w = zdWin(h);
            float lit = step(0.84, h);
            vec3 wc = mix(vec3(1.0, 0.6, 0.28), vec3(0.5, 0.72, 1.0), step(0.62, fract(h * 13.7)));
            float flick = 0.8 + 0.2 * sin(uTime * (2.0 + h * 9.0) + h * 40.0);
            totalEmissiveRadiance += w * lit * wc * 1.35 * flick; }`);
      mat.userData.shader = shader;
    };
    this.buildingMat = mat;
    const mesh = new THREE.InstancedMesh(geo, mat, list.length);
    const m = new THREE.Matrix4(), col = new THREE.Color();
    const palette = [0x5a5c66, 0x4d4f57, 0x63605a, 0x575049, 0x484d55, 0x6b6a70, 0x3f4148];
    list.forEach((b, k) => {
      m.compose(new THREE.Vector3(b.x, 0, b.z), new THREE.Quaternion(), new THREE.Vector3(b.w, b.h, b.d));
      mesh.setMatrixAt(k, m);
      col.setHex(b.kind === 'ruin' ? 0x3b3633 : palette[Math.floor(r() * palette.length)]);
      mesh.setColorAt(k, col);
    });
    this.scene.add(mesh);

    // rooftop clutter (AC units, water tanks) and aviation lights on towers
    const boxes = [];
    for (const b of list) {
      if (b.kind !== 'city') continue;
      const n = 1 + Math.floor(r() * 3);
      for (let k = 0; k < n; k++) {
        boxes.push({ x: b.x + (r() - 0.5) * b.w * 0.6, z: b.z + (r() - 0.5) * b.d * 0.6, y: b.h, w: 3 + r() * 5, h: 1.5 + r() * 3.5, d: 3 + r() * 5 });
      }
      if (b.h > 85) this.beacons.push(new THREE.Vector3(b.x, b.h + 6, b.z));
    }
    const clutter = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x3a3c42, roughness: 0.8 }), boxes.length);
    boxes.forEach((c, k) => {
      m.compose(new THREE.Vector3(c.x, c.y, c.z), new THREE.Quaternion(), new THREE.Vector3(c.w, c.h, c.d));
      clutter.setMatrixAt(k, m);
    });
    this.scene.add(clutter);

    const mastGeo = new THREE.CylinderGeometry(0.25, 0.35, 6, 6); mastGeo.translate(0, 3, 0);
    const masts = new THREE.InstancedMesh(mastGeo, new THREE.MeshStandardMaterial({ color: 0x777777 }), this.beacons.length);
    this.beacons.forEach((p, k) => { m.makeTranslation(p.x, p.y - 6, p.z); masts.setMatrixAt(k, m); });
    this.scene.add(masts);
    const redTex = radialTexture('rgba(255,60,40,1)', 'rgba(255,0,0,0)');
    this.beaconSprites = this.beacons.map((p) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: redTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.position.copy(p); s.scale.setScalar(7);
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
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(lab.w, lab.h, lab.d), new THREE.MeshStandardMaterial({ color: 0x6d7380, roughness: 0.7 }));
    mesh.position.set(lab.x, lab.h / 2, lab.z);
    this.scene.add(mesh);

    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const g = c.getContext('2d');
    g.fillStyle = '#000'; g.fillRect(0, 0, 512, 128);
    g.fillStyle = '#42e8ff'; g.font = 'bold 64px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('E4-03-07 LAB', 256, 66);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(30, 7.5), new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    sign.position.set(lab.x, lab.h + 5, lab.z + lab.d / 2 - 2);
    this.scene.add(sign);

    // helipad lights
    const ringTex = radialTexture('rgba(255,210,80,1)', 'rgba(255,160,0,0)');
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.position.set(Math.cos(a) * 17, 0.5, Math.sin(a) * 17); s.scale.setScalar(1.4);
      this.scene.add(s);
    }
  }

  // ------------------------------------------------------------ zombie hordes (danger zones)
  _zombieGeometry() {
    const parts = [];
    const box = (w, h, d, x, y, z, rx = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rx) g.rotateX(rx);
      g.translate(x, y, z);
      return g;
    };
    parts.push(box(0.22, 0.85, 0.24, -0.14, 0.43, 0));     // legs
    parts.push(box(0.22, 0.85, 0.24, 0.14, 0.43, 0.05));
    parts.push(box(0.55, 0.7, 0.3, 0, 1.2, 0, 0.18));       // torso, hunched
    parts.push(box(0.32, 0.34, 0.32, 0, 1.72, 0.12));      // head
    parts.push(box(0.14, 0.14, 0.7, -0.33, 1.42, 0.38));   // arms reaching forward
    parts.push(box(0.14, 0.14, 0.7, 0.33, 1.38, 0.36));
    const g = mergeGeometries(parts);
    const eyes = mergeGeometries([box(0.07, 0.05, 0.03, -0.08, 1.76, 0.29), box(0.07, 0.05, 0.03, 0.08, 1.76, 0.29)]);
    return { g, eyes };
  }

  _hordes() {
    const r = this.rng;
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

    const { g, eyes } = this._zombieGeometry();
    const perHorde = 22;
    const total = hordeSpots.length * perHorde;
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, emissive: 0x1a3a14 });
    this.zMesh = new THREE.InstancedMesh(g, mat, total);
    this.zEyes = new THREE.InstancedMesh(eyes, new THREE.MeshBasicMaterial({ color: 0xff2a10 }), total);
    this.zMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.zEyes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    const skins = [0x6f8f5a, 0x5d7a52, 0x7b8a6a, 0x58664c, 0x8a9a6a, 0x4f6a4a];
    const col = new THREE.Color();
    const ringGeo = new THREE.RingGeometry(0.92, 1, 64);
    ringGeo.rotateX(-Math.PI / 2);
    const glowTex = radialTexture('rgba(255,40,30,0.55)', 'rgba(255,0,0,0)');

    hordeSpots.forEach((s, hi) => {
      const radius = 34 + r() * 10;
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xff2a1a, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
      ring.scale.setScalar(radius); ring.position.set(s.x, 0.3, s.z);
      this.scene.add(ring);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2.4, radius * 2.4), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.rotation.x = -Math.PI / 2; glow.position.set(s.x, 0.2, s.z);
      this.scene.add(glow);
      const horde = { x: s.x, z: s.z, radius, ring, glow, alive: perHorde, total: perHorde, cleared: false, zombies: [] };
      for (let k = 0; k < perHorde; k++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r()) * radius * 0.85;
        const z = {
          idx: hi * perHorde + k, horde, x: s.x + Math.cos(a) * d, z: s.z + Math.sin(a) * d,
          hx: s.x + Math.cos(a) * d, hz: s.z + Math.sin(a) * d, yaw: r() * Math.PI * 2,
          phase: r() * 10, speed: 0.6 + r() * 0.5, scale: 2.1 + r() * 0.6, dead: false, deadT: 0,
        };
        horde.zombies.push(z);
        this.zombies.push(z);
        col.setHex(skins[Math.floor(r() * skins.length)]);
        this.zMesh.setColorAt(z.idx, col);
      }
      this.hordes.push(horde);
    });
    this.scene.add(this.zMesh, this.zEyes);
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
    for (const [x, z] of spots) {
      const y = 26 + r() * 14;
      const grp = new THREE.Group();
      grp.position.set(x, 0, z);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 260, 12, 1, true),
        new THREE.MeshBasicMaterial({ color: 0x3ae6ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      beam.position.y = 130;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(10, 0.7, 10, 48),
        new THREE.MeshStandardMaterial({ color: 0x0a3a44, emissive: 0x30e0ff, emissiveIntensity: 2.2 }));
      ring.position.y = y;
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: beamTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 }));
      halo.position.y = y; halo.scale.setScalar(34);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(3, 4, 2, 12), new THREE.MeshStandardMaterial({ color: 0x223038, emissive: 0x1090a0, emissiveIntensity: 0.8 }));
      base.position.y = 1;
      grp.add(beam, ring, halo, base);
      this.scene.add(grp);
      this.pylons.push({ x, z, y, ring, beam, halo, cooldown: 0 });
    }
  }

  // ------------------------------------------------------------ human habitats
  _habitats() {
    const r = this.rng;
    const lots = this.freeLots.filter((s) => Math.hypot(s.x, s.z) > 230);
    const chosen = [];
    for (const s of lots) {
      if (chosen.every((c) => Math.hypot(c.x - s.x, c.z - s.z) > 300)) chosen.push(s);
      if (chosen.length === 5) break;
    }
    // fallback if the random city did not leave enough far-apart lots
    const fallback = [[-520, -430], [480, -470], [520, 420], [-470, 500], [60, 560]];
    while (chosen.length < 5) { const [x, z] = fallback[chosen.length]; chosen.push({ x, z }); }

    const domeGeo = new THREE.SphereGeometry(18, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const warm = radialTexture('rgba(255,200,120,1)', 'rgba(255,140,40,0)');
    chosen.forEach((s, k) => {
      const grp = new THREE.Group();
      grp.position.set(s.x, 0, s.z);
      const dome = new THREE.Mesh(domeGeo, new THREE.MeshStandardMaterial({ color: 0x9fd8ff, transparent: true, opacity: 0.32, emissive: 0x2a6aa0, emissiveIntensity: 0.6, roughness: 0.1, metalness: 0.3, depthWrite: false }));
      const frame = new THREE.Mesh(domeGeo, new THREE.MeshBasicMaterial({ color: 0x7fd0ff, wireframe: true, transparent: true, opacity: 0.25 }));
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 2.5, 420, 10, 1, true),
        new THREE.MeshBasicMaterial({ color: 0x9fd0ff, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      beam.position.y = 210;
      grp.add(dome, frame, beam);
      for (let q = 0; q < 6; q++) {        // camp lights inside the dome
        const l = new THREE.Sprite(new THREE.SpriteMaterial({ map: warm, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
        l.position.set((r() - 0.5) * 20, 1.5 + r() * 2, (r() - 0.5) * 20); l.scale.setScalar(4 + r() * 3);
        grp.add(l);
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
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: fireTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
        s.position.set(b.x + (r() - 0.5) * b.w * 0.5, b.h + 3 + q * 3, b.z + (r() - 0.5) * b.d * 0.5);
        s.scale.setScalar(10 + r() * 6);
        this.scene.add(s);
        grp.push({ s, base: s.scale.x, ph: r() * 10 });
      }
      this.fires.push(grp);
    }
  }

  _ash() {
    const n = 2500, pos = new Float32Array(n * 3), r = this.rng;
    for (let k = 0; k < n; k++) { pos[k * 3] = (r() - 0.5) * 300; pos[k * 3 + 1] = r() * 160; pos[k * 3 + 2] = (r() - 0.5) * 300; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.ash = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xd0a080, size: 0.22, map: radialTexture('rgba(255,220,190,1)', 'rgba(255,200,160,0)', 32), transparent: true, opacity: 0.75, depthWrite: false }));
    this.scene.add(this.ash);
  }

  // ------------------------------------------------------------ effects
  burst(x, y, z, color = 0xff3a6a) {
    if (!this._burstTex) this._burstTex = radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)');
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this._burstTex, color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    s.position.set(x, y, z); s.scale.setScalar(2);
    this.scene.add(s);
    (this.bursts || (this.bursts = [])).push({ s, t: 0 });
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

  // ------------------------------------------------------------ per-frame animation
  update(dt, t, drone, camera) {
    this.time = t;
    if (this.buildingMat.userData.shader) this.buildingMat.userData.shader.uniforms.uTime.value = t;
    this.sky.material.uniforms.uTime.value = t;
    this.sky.position.copy(camera.position);
    this.stars.position.copy(camera.position);

    const blink = (Math.sin(t * 3) > 0.6) ? 1 : 0.15;
    for (const s of this.beaconSprites) s.material.opacity = blink;
    for (const grp of this.fires) for (const f of grp) {
      const k = 0.75 + 0.25 * Math.sin(t * 9 + f.ph) * Math.sin(t * 5.3 + f.ph * 2);
      f.s.scale.setScalar(f.base * k);
    }
    const camNear = (x, z) => Math.min(1, Math.max(0, (Math.hypot(camera.position.x - x, camera.position.z - z) - 6) / 30));
    for (const p of this.pylons) {
      p.ring.rotation.y += dt * 0.8;
      const ready = p.cooldown <= 0;
      p.cooldown = Math.max(0, p.cooldown - dt);
      p.ring.material.emissiveIntensity = ready ? 2.0 + Math.sin(t * 4) * 0.6 : 0.3;
      p.beam.material.opacity = (ready ? 0.22 : 0.06) * camNear(p.x, p.z);
      p.halo.material.opacity = ready ? 0.6 : 0.1;
    }
    for (const h of this.habitats) {
      h.beam.material.color.setHex(h.found ? 0x6aff8a : 0x9fd0ff);
      h.beam.material.opacity = (0.16 + 0.06 * Math.sin(t * 2 + h.x)) * camNear(h.x, h.z);
    }
    for (const h of this.hordes) {
      const pulse = 0.55 + 0.35 * Math.sin(t * 3 + h.x);
      h.ring.material.opacity = h.cleared ? 0.25 : pulse;
      h.ring.material.color.setHex(h.cleared ? 0x3aff6a : 0xff2a1a);
      h.glow.material.opacity = h.cleared ? 0.0 : pulse;
    }

    // ash follows the camera, wrapping around
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

    if (this.bursts) {
      for (let i = this.bursts.length - 1; i >= 0; i--) {
        const b = this.bursts[i];
        b.t += dt;
        b.s.scale.setScalar(2 + b.t * 22);
        b.s.material.opacity = Math.max(0, 1 - b.t / 0.7);
        if (b.t > 0.7) { this.scene.remove(b.s); b.s.material.dispose(); this.bursts.splice(i, 1); }
      }
    }
    this._animateZombies(dt, t, drone);
  }

  _animateZombies(dt, t, drone) {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const dx = drone ? drone.pos.x : 1e9, dz = drone ? drone.pos.z : 1e9, dy = drone ? drone.pos.y : 1e9;
    for (const z of this.zombies) {
      if (z.dead) {
        z.deadT += dt;
        const k = Math.max(0, 1 - z.deadT / 0.6);
        p.set(z.x, z.deadT * 4, z.z); e.set(z.deadT * 3, z.yaw, 0); q.setFromEuler(e); s.setScalar(z.scale * k);
        m.compose(p, q, s);
        this.zMesh.setMatrixAt(z.idx, m); this.zEyes.setMatrixAt(z.idx, m);
        continue;
      }
      const h = z.horde;
      const near = Math.hypot(dx - h.x, dz - h.z) < h.radius * 1.7 && dy < 60;
      let tx, tz, sp;
      if (near) { tx = dx + Math.sin(z.phase) * 6; tz = dz + Math.cos(z.phase) * 6; sp = 2.6 * z.speed + 1.2; }
      else { tx = z.hx + Math.sin(t * 0.3 + z.phase) * 4; tz = z.hz + Math.cos(t * 0.27 + z.phase) * 4; sp = z.speed; }
      const vx = tx - z.x, vz = tz - z.z, d = Math.hypot(vx, vz);
      if (d > 0.5) {
        const want = Math.atan2(vx, vz);
        let dyaw = want - z.yaw; dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw));
        z.yaw += dyaw * Math.min(1, dt * 3);
        z.x += Math.sin(z.yaw) * sp * dt; z.z += Math.cos(z.yaw) * sp * dt;
      }
      // keep the horde roughly inside its zone
      const ox = z.x - h.x, oz = z.z - h.z, od = Math.hypot(ox, oz), lim = h.radius * 1.15;
      if (od > lim) { z.x = h.x + ox / od * lim; z.z = h.z + oz / od * lim; }
      const reach = near && dy < 40 ? Math.abs(Math.sin(t * 7 + z.phase)) * 0.9 : 0;
      p.set(z.x, Math.abs(Math.sin(t * 5 + z.phase)) * 0.12 + reach, z.z);
      e.set(near ? -0.35 : 0.08, z.yaw, Math.sin(t * 2.5 + z.phase) * 0.12);
      q.setFromEuler(e); s.setScalar(z.scale);
      m.compose(p, q, s);
      this.zMesh.setMatrixAt(z.idx, m); this.zEyes.setMatrixAt(z.idx, m);
    }
    this.zMesh.instanceMatrix.needsUpdate = true;
    this.zEyes.instanceMatrix.needsUpdate = true;
  }
}

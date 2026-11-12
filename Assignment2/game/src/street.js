// street.js - street life (visual only, no collision): street lamps with light pools and
// wet-road reflections, neon signs, abandoned / burning cars and buses, barricades,
// tank traps, sandbags, rubble, rooftop tanks / housings / antennas, and the lab plaza.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { N, CELL, BLOCK, HALF, rngFrom, cellCenter, roadLine, beamMaterial } from './world.js';
import { fx } from './fx.js';
import { loadProps, propMaterial } from './props.js';

const UP = new THREE.Vector3(0, 1, 0);

// colour every vertex of a geometry (for merged multi-part props)
function tint(g, hex) {
  const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return g;
}
function bx(w, h, d, x, y, z, hex) { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); return tint(g, hex); }
function cyl(rt, rb, h, x, y, z, hex, seg = 10, rotZ = 0, rotX = 0) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg); if (rotZ) g.rotateZ(rotZ); if (rotX) g.rotateX(rotX); g.translate(x, y, z); return tint(g, hex);
}
function strip(g) { // keep only position, normal, color so merged parts match
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
  return g.index ? g.toNonIndexed() : g;
}
function merge(list) { return mergeGeometries(list.map(strip)); }

// ------------------------------------------------------------ instanced additive helpers
const FOG_GLSL = `uniform float uFogDensity; varying float vFog;`;

class GlowBillboards {      // camera-facing glows with per-instance colour, size and flicker
  constructor(scene, items, map, { renderOrder = 8 } = {}) {
    const base = new THREE.PlaneGeometry(1, 1);
    const g = new THREE.InstancedBufferGeometry();
    g.index = base.index; g.setAttribute('position', base.attributes.position); g.setAttribute('uv', base.attributes.uv);
    const P = new Float32Array(items.length * 3), C = new Float32Array(items.length * 3), S = new Float32Array(items.length * 3);
    items.forEach((it, i) => { P.set([it.x, it.y, it.z], i * 3); C.set([it.c.r, it.c.g, it.c.b], i * 3); S.set([it.size, it.seed, it.flick || 0], i * 3); });
    g.setAttribute('iPos', new THREE.InstancedBufferAttribute(P, 3));
    g.setAttribute('iCol', new THREE.InstancedBufferAttribute(C, 3));
    g.setAttribute('iS', new THREE.InstancedBufferAttribute(S, 3));
    g.instanceCount = items.length;
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e7);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: map }, uTime: { value: 0 }, uFogDensity: { value: 0.0015 } },
      vertexShader: `attribute vec3 iPos, iCol, iS; uniform float uTime; ${FOG_GLSL} varying vec2 vUv; varying vec3 vCol;
        float fl(float s, float amt){ float a = fract(sin(floor(uTime * 12.0 + s * 91.0) * 12.9898 + s) * 43758.5453);
          float b = sin(uTime * (1.5 + s * 3.0) + s * 20.0); return mix(1.0, step(0.35, a) * (0.8 + 0.2 * b), amt); }
        void main(){ vUv = uv; vCol = iCol * fl(iS.y, iS.z);
          vec3 r = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 u = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          vec4 mv = viewMatrix * vec4(iPos + (r * position.x + u * position.y) * iS.x, 1.0);
          float d = -mv.z; vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D uMap; varying vec2 vUv; varying vec3 vCol; varying float vFog;
        void main(){ vec4 t = texture2D(uMap, vUv); gl_FragColor = vec4(vCol * t.rgb * t.a * (1.0 - vFog), 1.0);
          #include <colorspace_fragment>
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = renderOrder; this.mesh.userData.noAO = true;
    scene.add(this.mesh);
  }
  update(t, fog) { this.mat.uniforms.uTime.value = t; this.mat.uniforms.uFogDensity.value = fog.density; }
}

class GroundLights {        // light pools on the ground + wet-road reflection streaks toward the camera
  constructor(scene, items, map, streaks) {
    const base = new THREE.PlaneGeometry(1, 1);
    const mk = (streak) => {
      const g = new THREE.InstancedBufferGeometry();
      g.index = base.index; g.setAttribute('position', base.attributes.position); g.setAttribute('uv', base.attributes.uv);
      const P = new Float32Array(items.length * 3), C = new Float32Array(items.length * 3), S = new Float32Array(items.length * 3);
      items.forEach((it, i) => { P.set([it.x, 0.1 + (streak ? 0.02 : 0), it.z], i * 3); C.set([it.c.r, it.c.g, it.c.b], i * 3); S.set([streak ? it.h || 8 : it.r, it.seed, it.flick || 0], i * 3); });
      g.setAttribute('iPos', new THREE.InstancedBufferAttribute(P, 3));
      g.setAttribute('iCol', new THREE.InstancedBufferAttribute(C, 3));
      g.setAttribute('iS', new THREE.InstancedBufferAttribute(S, 3));
      g.instanceCount = items.length;
      g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e7);
      const mat = new THREE.ShaderMaterial({
        uniforms: { uMap: { value: map }, uTime: { value: 0 }, uFogDensity: { value: 0.0015 }, uGain: { value: streak ? 0.5 : 0.24 } },
        vertexShader: `attribute vec3 iPos, iCol, iS; uniform float uTime; ${FOG_GLSL} varying vec2 vUv; varying vec3 vCol; varying float vK;
          float fl(float s, float amt){ float a = fract(sin(floor(uTime * 12.0 + s * 91.0) * 12.9898 + s) * 43758.5453);
            float b = sin(uTime * (1.5 + s * 3.0) + s * 20.0); return mix(1.0, step(0.35, a) * (0.8 + 0.2 * b), amt); }
          void main(){ vUv = uv; vCol = iCol * fl(iS.y, iS.z); vec3 wp;
            ${streak ? `
            vec2 toC = cameraPosition.xz - iPos.xz; float dist = length(toC); vec2 f = toC / max(dist, 0.001); vec2 sd = vec2(-f.y, f.x);
            float camH = max(cameraPosition.y, 0.5);
            float L = clamp(dist * iS.x / (iS.x + camH), 2.0, 40.0);        // mirror-point distance of a light at height h
            wp = vec3(iPos.x, iPos.y, iPos.z) + vec3(sd.x, 0.0, sd.y) * position.x * 1.6 + vec3(f.x, 0.0, f.y) * (position.y + 0.5) * L * 1.6;
            vK = (1.0 - smoothstep(0.08, 0.7, camH / max(dist, 1.0))) * (1.0 - smoothstep(120.0, 260.0, dist));` : `
            wp = iPos + vec3(position.x, 0.0, -position.y) * iS.x * 2.0; vK = 1.0;`}
            vec4 mv = viewMatrix * vec4(wp, 1.0); float d = -mv.z; vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
            gl_Position = projectionMatrix * mv; }`,
        fragmentShader: `uniform sampler2D uMap; uniform float uGain; varying vec2 vUv; varying vec3 vCol; varying float vK; varying float vFog;
          void main(){ ${streak ? `float a = (1.0 - abs(vUv.x - 0.5) * 2.0); a = a * a * (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y);` : `float a = texture2D(uMap, vUv).a;`}
            gl_FragColor = vec4(vCol * a * vK * uGain * (1.0 - vFog), 1.0);
            #include <colorspace_fragment>
          }`,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
      });
      const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 3; m.userData.noAO = true;
      scene.add(m);
      return mat;
    };
    this.mats = [mk(false)];
    if (streaks) this.mats.push(mk(true));
  }
  update(t, fog) { for (const m of this.mats) { m.uniforms.uTime.value = t; m.uniforms.uFogDensity.value = fog.density; } }
}

function softTex(size = 64) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.2, 'rgba(255,255,255,0.7)'); grd.addColorStop(0.5, 'rgba(255,255,255,0.18)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// ------------------------------------------------------------ neon sign atlas
const SIGNS = [
  ['HOTEL', '#ff3b8a'], ['OPEN 24H', '#3affd0'], ['PHARMACY', '#4aff6a'], ['NOODLES', '#ffb03a'],
  ['ARCADE', '#b45aff'], ['BAR', '#ff3a3a'], ['CLINIC', '#3ad0ff'], ['KARAOKE', '#ff5ad8'],
  ['RAMEN', '#ff7a2a'], ['MOTEL', '#ffd23a'], ['CAFE', '#5affe0'], ['EXIT', '#3aff5a'],
  ['LAUNDRY', '#7ab4ff'], ['GARAGE', '#ff9a3a'], ['SUPPLY', '#e0ff3a'], ['E4 RAMEN', '#ff4a6a'],
];
function signAtlas() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 1024;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 1024, 1024);
  SIGNS.forEach(([txt, col], i) => {
    const x = (i % 2) * 512, y = Math.floor(i / 2) * 128;
    g.save(); g.beginPath(); g.rect(x, y, 512, 128); g.clip();
    g.strokeStyle = col; g.lineWidth = 4; g.shadowColor = col; g.shadowBlur = 16;
    g.strokeRect(x + 10, y + 12, 492, 104);
    g.font = `bold ${txt.length > 7 ? 64 : 78}px "Arial Black", Impact, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = col; g.shadowBlur = 22; g.fillText(txt, x + 256, y + 66);
    g.shadowBlur = 0; g.fillStyle = 'rgba(255,255,255,0.85)'; g.fillText(txt, x + 256, y + 66);
    g.restore();
  });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export class Street {
  constructor(world) {
    this.world = world;
    this.scene = world.scene;
    this.r = rngFrom(31337);
    this.soft = softTex();
    this.burning = [];
    this.glows = [];
    this.pools = [];
    this.updaters = [];
    this._lamps();
    this._cars();
    this._barricades();
    this._debris();
    this._rooftops();
    this._signs();
    this._plaza();
    // all glows / pools in two draw calls
    this.glowSet = new GlowBillboards(this.scene, this.glows, this.soft);
    this.poolSet = new GroundLights(this.scene, this.pools, this.soft, true);
  }

  inPlaza(x, z, m = 0) { return Math.abs(x) < 80 + m && Math.abs(z) < 80 + m; }

  // cells / buildings near a point (for keeping props off building footprints)
  blocked(x, z, pad = 1) {
    if (Math.abs(x) > HALF || Math.abs(z) > HALF) return true;
    for (const b of this.world.buildingsNear(x, z)) if (x > b.minX - pad && x < b.maxX + pad && z > b.minZ - pad && z < b.maxZ + pad) return true;
    return false;
  }

  // ------------------------------------------------------------ street lamps
  _lamps() {
    const r = this.r;
    const metal = 0x2c3036;
    const lampGeo = merge([
      cyl(0.13, 0.2, 9, 0, 4.5, 0, metal, 8),
      cyl(0.09, 0.09, 2.6, 1.2, 8.85, 0, metal, 6, Math.PI / 2),
      bx(1.1, 0.22, 0.45, 2.45, 8.8, 0, 0x3a3e46),
      bx(0.9, 0.06, 0.32, 2.45, 8.66, 0, 0xfff2cc),
    ]);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.6, roughness: 0.45 });
    const items = [];
    const place = (x, z, yaw) => {
      if (this.inPlaza(x, z)) return;
      if (this.blocked(x, z, 0.5)) return;
      items.push({ x, z, yaw });
    };
    for (let k = 0; k <= N; k++) {
      for (let m = 0; m < N; m++) {
        const a = roadLine(m), c = roadLine(k);
        for (const [f, side] of [[0.25, 1], [0.75, -1]]) {
          const along = a + CELL * f;
          place(c + side * 12.5, along, side > 0 ? Math.PI : 0);          // road along z: arm points to the road centre
          place(along, c + side * 12.5, side > 0 ? Math.PI / 2 : -Math.PI / 2);
        }
      }
    }
    const mesh = new THREE.InstancedMesh(lampGeo, mat, items.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion();
    const warm = new THREE.Color(1.0, 0.55, 0.2), cool = new THREE.Color(0.65, 0.8, 1.0);
    items.forEach((it, i) => {
      q.setFromAxisAngle(UP, it.yaw);
      m4.compose(new THREE.Vector3(it.x, 0, it.z), q, new THREE.Vector3(1, 1, 1));
      mesh.setMatrixAt(i, m4);
      const v = r();
      if (v < 0.28) return;                       // broken lamp
      const flick = v < 0.36 ? 1 : 0;
      const c = (r() < 0.7 ? warm : cool).clone().multiplyScalar(2.2);
      const hx = it.x + Math.cos(-it.yaw) * 2.45, hz = it.z + Math.sin(-it.yaw) * 2.45;
      const seed = r();
      this.glows.push({ x: hx, y: 8.55, z: hz, c, size: 3.2, seed, flick });
      this.glows.push({ x: hx, y: 8.5, z: hz, c: c.clone().multiplyScalar(0.18), size: 8, seed, flick });
      this.pools.push({ x: hx, z: hz, c: c.clone().multiplyScalar(0.85), r: 8.5, h: 8.6, seed, flick });
    });
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  // ------------------------------------------------------------ cars, buses, burning wrecks
  _carGeo() {
    const glass = 0x101820, tyre = 0x111111, light = 0xdddddd, red = 0x801010;
    const car = merge([
      bx(1.85, 0.7, 4.3, 0, 0.6, 0, 0xffffff),
      bx(1.65, 0.55, 2.2, 0, 1.22, -0.2, glass),
      bx(1.55, 0.06, 2.0, 0, 1.52, -0.2, 0xffffff),
      ...[[-0.9, 1.35], [0.9, 1.35], [-0.9, -1.35], [0.9, -1.35]].map(([x, z]) => cyl(0.36, 0.36, 0.28, x, 0.36, z, tyre, 12, Math.PI / 2)),
      bx(0.4, 0.14, 0.05, -0.6, 0.72, 2.16, light), bx(0.4, 0.14, 0.05, 0.6, 0.72, 2.16, light),
      bx(0.4, 0.12, 0.05, -0.6, 0.78, -2.16, red), bx(0.4, 0.12, 0.05, 0.6, 0.78, -2.16, red),
    ]);
    const bus = merge([
      bx(2.55, 2.6, 11.5, 0, 1.75, 0, 0xffffff),
      bx(2.6, 0.9, 10.6, 0, 2.15, -0.2, glass),
      bx(2.4, 1.1, 0.05, 0, 2.1, 5.76, glass),
      ...[[-1.15, 3.8], [1.15, 3.8], [-1.15, -3.6], [1.15, -3.6]].map(([x, z]) => cyl(0.5, 0.5, 0.35, x, 0.5, z, tyre, 12, Math.PI / 2)),
    ]);
    const truck = merge([
      bx(2.3, 1.6, 2.2, 0, 1.4, 2.6, 0xffffff),
      bx(2.1, 0.7, 0.05, 0, 1.75, 3.71, glass),
      bx(2.4, 2.4, 5.0, 0, 1.85, -1.2, 0x5a6048),
      ...[[-1.05, 2.6], [1.05, 2.6], [-1.05, -0.4], [1.05, -0.4], [-1.05, -2.6], [1.05, -2.6]].map(([x, z]) => cyl(0.48, 0.48, 0.38, x, 0.48, z, tyre, 12, Math.PI / 2)),
    ]);
    return { car, bus, truck };
  }

  _cars() {
    const r = this.r;
    const { truck } = this._carGeo();
    let P = null;
    try { P = loadProps(); } catch (e) { console.warn('[ZD] vehicle models unavailable, using boxes:', e); }
    const boxMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.45, roughness: 0.38 });
    const paints = [0x8a1c1c, 0x1c3a6a, 0xb0b0b0, 0x202226, 0x6a6a20, 0xd0d0d0, 0x2a5a3a, 0x7a4a1a, 0x4a2a5a, 0x5a6a7a];
    const lists = {};
    const add = (k, v) => (lists[k] || (lists[k] = [])).push(v);
    const pylons = this.world.pylons;
    let nCars = 0;
    for (let n = 0; n < 900 && nCars < 210; n++) {
      const alongZ = r() < 0.5, k = Math.floor(r() * (N + 1)), m = Math.floor(r() * N);
      const along = roadLine(m) + 16 + r() * (CELL - 32);
      const lane = (r() < 0.5 ? -1 : 1) * (3 + r() * 4.5);
      const x = alongZ ? roadLine(k) + lane : along, z = alongZ ? along : roadLine(k) + lane;
      if (this.inPlaza(x, z, 6) || this.blocked(x, z, 2)) continue;
      if (pylons.some((p) => Math.hypot(p.x - x, p.z - z) < 18)) continue;
      const v = r();
      let kind = v < 0.07 ? (r() < 0.6 ? 'bus' : 'schoolbus') : v < 0.12 ? 'truck' : v < 0.15 ? 'cop' : v < 0.17 ? 'ambulance' : ['car1', 'car2', 'suv', 'sports'][Math.floor(r() * 4)];
      if (!P && kind !== 'truck') kind = kind.includes('bus') ? 'bus' : 'car1';
      const crashed = r() < 0.25;
      const yaw = (alongZ ? 0 : Math.PI / 2) + (r() < 0.5 ? 0 : Math.PI) + (crashed ? (r() - 0.5) * 2.2 : (r() - 0.5) * 0.25);
      const burning = r() < 0.08, burnt = burning || r() < 0.12;
      const flipped = crashed && !kind.includes('bus') && kind !== 'truck' && r() < 0.15;
      const col = new THREE.Color(burnt ? 0x16120f : paints[Math.floor(r() * paints.length)]);
      add(kind, { x, z, yaw, col, burning, burnt, flipped, crashed, hazard: !burnt && r() < 0.12 });
      nCars++;
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    this.vehicleMats = [];
    this.cones = [];
    for (const [kind, l] of Object.entries(lists)) {
      const model = P && P[kind];
      const geo = model ? model.geometry : kind === 'truck' ? truck : this._carGeo().car;
      const mat = model ? propMaterial(model) : boxMat;
      if (model) this.vehicleMats.push(mat);
      const mesh = new THREE.InstancedMesh(geo, mat, l.length);
      const height = model ? model.size[1] : 1.6, len = model ? model.size[2] / 2 : kind === 'truck' ? 3.6 : 2.1;
      l.forEach((c, i) => {
        e.set(c.flipped ? 0 : (r() - 0.5) * 0.04, c.yaw, c.flipped ? Math.PI : (r() - 0.5) * 0.04);
        q.setFromEuler(e);
        m4.compose(new THREE.Vector3(c.x, c.flipped ? height : 0, c.z), q, new THREE.Vector3(1, 1, 1));
        mesh.setMatrixAt(i, m4);
        mesh.setColorAt(i, c.burnt ? c.col : (model && model.flags.includes(1) ? c.col : new THREE.Color(1, 1, 1)));
        if (c.burning) {
          const big = len > 3;
          this.burning.push({ x: c.x, z: c.z, size: big ? 4 : 2.6, acc: 0, sacc: 0 });
          this.pools.push({ x: c.x, z: c.z, c: new THREE.Color(1.0, 0.42, 0.1).multiplyScalar(1.6), r: big ? 14 : 10, h: 3, seed: r(), flick: 0.4 });
          this.glows.push({ x: c.x, y: 2.5, z: c.z, c: new THREE.Color(1, 0.4, 0.1).multiplyScalar(0.5), size: 16, seed: r(), flick: 0.3 });
        }
        if (c.crashed && r() < 0.6) for (let k = 0; k < 3; k++) this.cones.push({ x: c.x + (r() - 0.5) * 9, z: c.z + (r() - 0.5) * 9, yaw: r() * 6, down: r() < 0.3 });
        if (c.hazard) {
          const fx0 = Math.sin(c.yaw), fz0 = Math.cos(c.yaw), sx = Math.cos(c.yaw), sz = -Math.sin(c.yaw);
          for (const [a, s] of [[len, 1], [len, -1], [-len, 1], [-len, -1]]) {
            this.glows.push({ x: c.x + fx0 * a + sx * s * 0.75, y: 0.75, z: c.z + fz0 * a + sz * s * 0.75, c: new THREE.Color(1.6, 0.75, 0.1), size: 1.6, seed: 0.5, flick: 0, hazard: true });
          }
        }
      });
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.scene.add(mesh);
    }
    // hazard blink: a separate glow set so it can blink in sync
    const hz = this.glows.filter((g) => g.hazard);
    this.glows = this.glows.filter((g) => !g.hazard);
    if (hz.length) {
      this.hazard = new GlowBillboards(this.scene, hz, this.soft);
      this.updaters.push((t) => { this.hazard.mesh.visible = Math.sin(t * 5) > 0; });
    }
    if (P) this._trafficLightsAndCones(P);
  }

  // dead traffic signals blinking amber at the intersections, cones around the wrecks
  _trafficLightsAndCones(P) {
    const r = this.r;
    const L = [];
    for (let a = 1; a < N; a++) for (let b = 1; b < N; b++) {
      const x = roadLine(a), z = roadLine(b);
      if (this.inPlaza(x, z, 14)) continue;
      for (const [sx, sz] of [[1, 1], [-1, -1]]) {
        const px = x + sx * 11.5, pz = z + sz * 11.5;
        if (this.blocked(px, pz, 0.5)) continue;
        L.push({ x: px, z: pz, yaw: Math.atan2(x - px, z - pz) + (r() - 0.5) * 0.2, tilt: r() < 0.08 ? 0.35 : 0 });
        if (r() < 0.6) this.glows.push({ x: px, y: 5.0, z: pz, c: new THREE.Color(1.4, 0.8, 0.1).multiplyScalar(0.5), size: 3.5, seed: r(), flick: 0, amber: true });
      }
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    const tl = P.trafficlight, tm = propMaterial(tl, { roughness: 0.6, metalness: 0.5 });
    this.vehicleMats.push(tm);
    const lm = new THREE.InstancedMesh(tl.geometry, tm, L.length);
    L.forEach((l, i) => { e.set(l.tilt, l.yaw, 0); q.setFromEuler(e); m4.compose(new THREE.Vector3(l.x, 0, l.z), q, new THREE.Vector3(1, 1, 1)); lm.setMatrixAt(i, m4); });
    lm.castShadow = true;
    this.scene.add(lm);
    const am = this.glows.filter((g) => g.amber);
    this.glows = this.glows.filter((g) => !g.amber);
    if (am.length) {
      this.amber = new GlowBillboards(this.scene, am, this.soft);
      this.updaters.push((t) => { this.amber.mesh.visible = (t % 1.4) < 0.7; });
    }
    const cone = P.cone, cm = new THREE.InstancedMesh(cone.geometry, propMaterial(cone, { roughness: 0.7, metalness: 0 }), this.cones.length);
    this.cones.forEach((c, i) => {
      e.set(c.down ? Math.PI / 2 : 0, c.yaw, 0); q.setFromEuler(e);
      m4.compose(new THREE.Vector3(c.x, c.down ? 0.3 : 0, c.z), q, new THREE.Vector3(1, 1, 1)); cm.setMatrixAt(i, m4);
    });
    cm.castShadow = true;
    this.scene.add(cm);
  }

  // ------------------------------------------------------------ barricades, sandbags, tank traps
  _barricades() {
    const r = this.r;
    const prof = new THREE.Shape();
    prof.moveTo(-0.35, 0); prof.lineTo(0.35, 0); prof.lineTo(0.15, 0.25); prof.lineTo(0.09, 0.85); prof.lineTo(-0.09, 0.85); prof.lineTo(-0.15, 0.25); prof.closePath();
    const jersey = new THREE.ExtrudeGeometry(prof, { depth: 3, bevelEnabled: false });
    jersey.translate(0, 0, -1.5);
    const jerseyMat = new THREE.MeshStandardMaterial({ color: 0x8a8880, roughness: 0.85 });
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xff6a1a, roughness: 0.6, emissive: 0x200800 });
    const bag = new THREE.CapsuleGeometry(0.28, 0.7, 2, 6); bag.rotateZ(Math.PI / 2); bag.scale(1, 0.6, 1);
    const bagMat = new THREE.MeshStandardMaterial({ color: 0x6a5c40, roughness: 1 });
    const hh = merge([bx(0.18, 0.18, 2.6, 0, 0.9, 0, 0x2a2a2a), cyl(0.09, 0.09, 2.6, 0, 0.9, 0, 0x2a2a2a, 6, Math.PI / 4, Math.PI / 2), cyl(0.09, 0.09, 2.6, 0, 0.9, 0, 0x2a2a2a, 6, -Math.PI / 4, Math.PI / 2)]);
    const hhMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.7, roughness: 0.5 });

    const J = [], B = [], T = [];
    const lineOf = (x0, z0, x1, z1, gapEvery = 0) => {
      const len = Math.hypot(x1 - x0, z1 - z0), n = Math.floor(len / 3.1), yaw = Math.atan2(x1 - x0, z1 - z0);
      for (let i = 0; i < n; i++) {
        if (gapEvery && i % gapEvery === gapEvery - 1) continue;
        const f = (i + 0.5) / n;
        J.push({ x: x0 + (x1 - x0) * f, z: z0 + (z1 - z0) * f, yaw: yaw + (r() - 0.5) * 0.08 });
      }
    };
    // lab plaza perimeter with entries on the main roads
    const E = 84;
    for (const s of [-1, 1]) {
      lineOf(-E, s * E, -14, s * E); lineOf(14, s * E, E, s * E);
      lineOf(s * E, -E, s * E, -14); lineOf(s * E, 14, s * E, E);
    }
    // rings around habitats
    for (const h of this.world.habitats) {
      const R = 24, n = 44;
      for (let i = 0; i < n; i++) {
        if (i % 11 === 0) continue;
        const a = (i / n) * Math.PI * 2;
        J.push({ x: h.x + Math.cos(a) * R, z: h.z + Math.sin(a) * R, yaw: -a });
        if (i % 3 === 0) for (let l = 0; l < 2; l++) B.push({ x: h.x + Math.cos(a) * (R + 1.2), y: 0.17 + l * 0.32, z: h.z + Math.sin(a) * (R + 1.2), yaw: -a + Math.PI / 2 });
      }
      for (let i = 0; i < 10; i++) { const a = r() * Math.PI * 2; T.push({ x: h.x + Math.cos(a) * (R + 5 + r() * 4), z: h.z + Math.sin(a) * (R + 5 + r() * 4), yaw: r() * 6 }); }
    }
    // checkpoints near hordes (across the nearest road)
    for (const h of this.world.hordes) {
      const k = Math.round(h.x / CELL + N / 2), x = roadLine(k);
      if (Math.abs(x - h.x) > 60) continue;
      const z = h.z + (h.z > 0 ? -1 : 1) * (h.radius + 10);
      if (this.inPlaza(x, z, 10)) continue;
      lineOf(x - 12, z, x + 12, z, 4);
      for (let i = 0; i < 4; i++) T.push({ x: x + (r() - 0.5) * 20, z: z + (r() - 0.5) * 8 + 4, yaw: r() * 6 });
    }
    // tank traps around the plaza
    for (let i = 0; i < 26; i++) {
      const s = r() < 0.5 ? -1 : 1, along = (r() - 0.5) * 2 * E;
      const x = r() < 0.5 ? along : s * (E + 5 + r() * 3), z = x === along ? s * (E + 5 + r() * 3) : along;
      if (Math.abs(x) < 14 || Math.abs(z) < 14) continue;
      T.push({ x, z, yaw: r() * 6 });
    }
    // sandbag walls at the plaza corners
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      for (let i = 0; i < 9; i++) for (let l = 0; l < 3; l++) {
        const a = (i / 8) * Math.PI / 2;
        B.push({ x: sx * (E - 8) + sx * Math.cos(a) * -6, y: 0.17 + l * 0.32, z: sz * (E - 8) + sz * Math.sin(a) * -6, yaw: a * sx * sz + (l % 2) * 0.3 });
      }
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1);
    const jm = new THREE.InstancedMesh(jersey, jerseyMat, J.length);
    const stripe = new THREE.BoxGeometry(0.2, 0.12, 2.6); stripe.translate(0, 0.55, 0);
    const sm = new THREE.InstancedMesh(stripe, stripeMat, J.length);
    J.forEach((j, i) => { q.setFromAxisAngle(UP, j.yaw); m4.compose(new THREE.Vector3(j.x, 0, j.z), q, one); jm.setMatrixAt(i, m4); sm.setMatrixAt(i, m4); });
    const bm = new THREE.InstancedMesh(bag, bagMat, B.length);
    B.forEach((b, i) => { q.setFromAxisAngle(UP, b.yaw); m4.compose(new THREE.Vector3(b.x, b.y, b.z), q, one); bm.setMatrixAt(i, m4); });
    const tm = new THREE.InstancedMesh(hh, hhMat, T.length);
    T.forEach((t, i) => { q.setFromAxisAngle(UP, t.yaw); m4.compose(new THREE.Vector3(t.x, 0, t.z), q, one); tm.setMatrixAt(i, m4); });
    for (const m of [jm, sm, bm, tm]) { m.castShadow = true; m.receiveShadow = true; this.scene.add(m); }
  }

  // ------------------------------------------------------------ rubble and litter
  _debris() {
    const r = this.r;
    const rock = new THREE.DodecahedronGeometry(1, 0);
    const P = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const t = this.world.cellType[i][j], cx = cellCenter(i), cz = cellCenter(j);
      const n = t === 'ruin' ? 60 : t === 'lot' ? 6 : 0;
      for (let k = 0; k < n; k++) P.push({ x: cx + (r() - 0.5) * BLOCK, z: cz + (r() - 0.5) * BLOCK, s: 0.3 + Math.pow(r(), 2) * 2.2 });
    }
    for (let k = 0; k < 500; k++) {   // along the kerbs
      const alongZ = r() < 0.5, kk = Math.floor(r() * (N + 1)), along = (r() - 0.5) * 2 * HALF, off = (r() < 0.5 ? -1 : 1) * (11 + r() * 3);
      const x = alongZ ? roadLine(kk) + off : along, z = alongZ ? along : roadLine(kk) + off;
      if (this.inPlaza(x, z) || this.blocked(x, z, 0.3)) continue;
      P.push({ x, z, s: 0.15 + r() * 0.5 });
    }
    const mesh = new THREE.InstancedMesh(rock, new THREE.MeshStandardMaterial({ color: 0x55524c, roughness: 0.95, flatShading: true }), P.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), col = new THREE.Color();
    P.forEach((p, i) => {
      e.set(r() * 6, r() * 6, r() * 6); q.setFromEuler(e);
      m4.compose(new THREE.Vector3(p.x, p.s * 0.3, p.z), q, new THREE.Vector3(p.s * (0.8 + r() * 0.6), p.s * (0.5 + r() * 0.4), p.s * (0.8 + r() * 0.6)));
      mesh.setMatrixAt(i, m4);
      col.setHSL(0.08, 0.08 + r() * 0.1, 0.25 + r() * 0.2); mesh.setColorAt(i, col);
    });
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  // ------------------------------------------------------------ rooftops
  _rooftops() {
    const r = this.r;
    const tank = merge([
      cyl(2.2, 2.2, 3.2, 0, 3.6, 0, 0x6a5040, 14),
      (() => { const g = new THREE.ConeGeometry(2.3, 1.0, 14); g.translate(0, 5.7, 0); return tint(g, 0x4a3a30); })(),
      ...[[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]].map(([x, z]) => bx(0.2, 2.0, 0.2, x, 1.0, z, 0x2a2a2a)),
    ]);
    const housing = merge([bx(4, 2.6, 4.5, 0, 1.3, 0, 0x55575e), bx(1.2, 2.0, 0.05, 0, 1.0, 2.26, 0x1a1a1a)]);
    const mast = merge([cyl(0.12, 0.2, 10, 0, 5, 0, 0x8a8e96, 6), bx(1.8, 0.08, 0.08, 0, 7.5, 0, 0x8a8e96), bx(1.2, 0.08, 0.08, 0, 9, 0, 0x8a8e96)]);
    const dish = new THREE.SphereGeometry(1.4, 12, 6, 0, Math.PI * 2, 0, Math.PI / 3); dish.rotateX(-1.0); dish.translate(0, 1.4, 0);
    const T = [], H = [], M = [], D = [];
    const red = new THREE.Color(2.2, 0.15, 0.08);
    for (const b of this.world.buildings) {
      if (b.kind !== 'city' || b.h < 12) continue;
      const spot = (pad) => [b.x + (r() - 0.5) * Math.max(0, b.w - pad * 2), b.z + (r() - 0.5) * Math.max(0, b.d - pad * 2)];
      if (b.style === 2 || (b.style === 0 && b.h < 70)) { if (r() < 0.45) { const [x, z] = spot(4); T.push({ x, y: b.h, z, yaw: r() * 6 }); } }
      if (r() < 0.5) { const [x, z] = spot(4); H.push({ x, y: b.h, z, yaw: Math.floor(r() * 4) * Math.PI / 2 }); }
      if (r() < 0.22) {
        const [x, z] = spot(2); M.push({ x, y: b.h, z, yaw: r() * 6 });
        this.glows.push({ x, y: b.h + 10.3, z, c: red, size: 2.2, seed: r(), flick: 0, beacon: true });
      }
      if (r() < 0.25) { const [x, z] = spot(3); D.push({ x, y: b.h, z, yaw: r() * 6 }); }
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1);
    const vmat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0.35 });
    for (const [geo, list] of [[tank, T], [housing, H], [mast, M], [dish, D]]) {
      if (!list.length) continue;
      const mesh = new THREE.InstancedMesh(geo, geo === dish ? new THREE.MeshStandardMaterial({ color: 0xcfd2d8, roughness: 0.4, metalness: 0.3, side: THREE.DoubleSide }) : vmat, list.length);
      list.forEach((o, i) => { q.setFromAxisAngle(UP, o.yaw); m4.compose(new THREE.Vector3(o.x, o.y, o.z), q, one); mesh.setMatrixAt(i, m4); });
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.scene.add(mesh);
    }
    const bk = this.glows.filter((g) => g.beacon);
    this.glows = this.glows.filter((g) => !g.beacon);
    if (bk.length) {
      this.roofBeacons = new GlowBillboards(this.scene, bk, this.soft);
      this.updaters.push((t) => { this.roofBeacons.mesh.visible = (t % 1.6) < 0.5; });
    }
  }

  // ------------------------------------------------------------ neon signs (one draw call)
  _signs() {
    const r = this.r;
    const items = [];
    for (const b of this.world.buildings) {
      if (b.kind !== 'city' || b.h < 14 || b.style === 3) continue;
      const i = Math.floor((b.x + HALF) / CELL), j = Math.floor((b.z + HALF) / CELL);
      const cx = cellCenter(i), cz = cellCenter(j);
      const faces = [];
      if (b.maxX > cx + BLOCK / 2 - 8) faces.push([1, 0]);
      if (b.minX < cx - BLOCK / 2 + 8) faces.push([-1, 0]);
      if (b.maxZ > cz + BLOCK / 2 - 8) faces.push([0, 1]);
      if (b.minZ < cz - BLOCK / 2 + 8) faces.push([0, -1]);
      for (const [nx, nz] of faces) {
        if (r() > 0.32) continue;
        const width = nx ? b.d : b.w;
        const along = (r() - 0.5) * (width - 12);
        const blade = r() < 0.4;
        const w = blade ? 5 + r() * 2 : 7 + r() * 6, h = w / 4;
        const y = 5.5 + r() * Math.min(14, b.h - 9);
        const fx0 = nx ? (nx > 0 ? b.maxX : b.minX) : b.x + along, fz0 = nz ? (nz > 0 ? b.maxZ : b.minZ) : b.z + along;
        let px, pz, rx, rz;
        if (blade) { px = fx0 + nx * (w / 2 + 0.4); pz = fz0 + nz * (w / 2 + 0.4); rx = nx; rz = nz; }
        else { px = fx0 + nx * 0.25; pz = fz0 + nz * 0.25; rx = nz; rz = -nx; }      // reads left-to-right from the street
        const idx = Math.floor(r() * SIGNS.length);
        items.push({ px, py: y, pz, rx, rz, w, h, u: (idx % 2) * 0.5, v: 1 - (Math.floor(idx / 2) + 1) / 8, seed: r(), flick: r() < 0.25 ? 1 : 0 });
        if (y < 12) {     // reflection on the wet street
          const col = new THREE.Color(SIGNS[idx][1]).multiplyScalar(0.9);
          this.pools.push({ x: px + nx * 6, z: pz + nz * 6, c: col.clone().multiplyScalar(0.5), r: 6, h: y, seed: items[items.length - 1].seed, flick: items[items.length - 1].flick });
        }
      }
    }
    const base = new THREE.PlaneGeometry(1, 1);
    const g = new THREE.InstancedBufferGeometry();
    g.index = base.index; g.setAttribute('position', base.attributes.position); g.setAttribute('uv', base.attributes.uv);
    const A = (n, f) => { const a = new Float32Array(items.length * n); items.forEach((it, i) => a.set(f(it), i * n)); return new THREE.InstancedBufferAttribute(a, n); };
    g.setAttribute('iPos', A(3, (it) => [it.px, it.py, it.pz]));
    g.setAttribute('iRight', A(3, (it) => [it.rx, 0, it.rz]));
    g.setAttribute('iSize', A(4, (it) => [it.w, it.h, it.u, it.v]));
    g.setAttribute('iF', A(2, (it) => [it.seed, it.flick]));
    g.instanceCount = items.length;
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e7);
    this.signMat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: signAtlas() }, uTime: { value: 0 }, uFogDensity: { value: 0.0015 } },
      vertexShader: `attribute vec3 iPos, iRight; attribute vec4 iSize; attribute vec2 iF; uniform float uTime; ${FOG_GLSL}
        varying vec2 vUv; varying float vOn;
        void main(){
          vUv = vec2(iSize.z + uv.x * 0.5, iSize.w + uv.y * 0.125);
          float a = fract(sin(floor(uTime * 9.0 + iF.x * 77.0) * 12.9898 + iF.x) * 43758.5453);
          vOn = mix(1.0, step(0.3, a), iF.y) * (0.9 + 0.1 * sin(uTime * 50.0 + iF.x * 10.0));
          vec3 wp = iPos + iRight * position.x * iSize.x + vec3(0.0, 1.0, 0.0) * position.y * iSize.y;
          vec4 mv = viewMatrix * vec4(wp, 1.0); float d = -mv.z; vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D uMap; varying vec2 vUv; varying float vOn; varying float vFog;
        void main(){ vec3 c = texture2D(uMap, vUv).rgb; gl_FragColor = vec4(c * 2.2 * vOn * (1.0 - vFog), 1.0);
          #include <colorspace_fragment>
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(g, this.signMat);
    mesh.frustumCulled = false; mesh.renderOrder = 6; mesh.userData.noAO = true;
    this.scene.add(mesh);
  }

  // ------------------------------------------------------------ lab plaza: floodlights, trucks, generator, tents
  _plaza() {
    const r = this.r;
    const metal = new THREE.MeshStandardMaterial({ color: 0x3a3e46, metalness: 0.7, roughness: 0.4 });
    const head = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xfff4dd, emissiveIntensity: 2.5 });
    const coneMat = () => beamMaterial(0xfff0d0, 0.03);
    this.floods = [];
    for (const [x, z] of [[-70, -30], [70, -70], [70, 60], [-62, 66]]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 16, 8), metal);
      pole.position.set(x, 8, z); pole.castShadow = true;
      const bar = new THREE.Group(); bar.position.set(x, 16, z);
      bar.lookAt(0, 0, 0);
      const box = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.2, 0.6), metal);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.9, 0.1), head); lamp.position.z = 0.33;
      const len = Math.hypot(x, 16, z) * 0.9;
      const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 9, len, 20, 1, true), coneMat());
      cone.geometry.translate(0, -len / 2, 0); cone.geometry.rotateX(-Math.PI / 2);   // points along +z of the bar
      cone.userData.noAO = true;
      bar.add(box, lamp, cone);
      this.scene.add(pole, bar);
      this.glows.push({ x, y: 16, z, c: new THREE.Color(1.6, 1.5, 1.3), size: 7, seed: r(), flick: 0 });
      this.pools.push({ x: x * 0.45, z: z * 0.45, c: new THREE.Color(1, 0.95, 0.85).multiplyScalar(0.3), r: 14, h: 16, seed: r(), flick: 0 });
      this.floods.push(cone);
    }
    // army trucks and a generator by the lab
    const { truck } = this._carGeo();
    const vmat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.3, roughness: 0.6 });
    const tm = new THREE.InstancedMesh(truck, vmat, 3);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1);
    [[-20, -66, 1.57], [-8, -70, 1.4], [30, -40, 0.4]].forEach(([x, z, y], i) => { q.setFromAxisAngle(UP, y); m4.compose(new THREE.Vector3(x, 0, z), q, one); tm.setMatrixAt(i, m4); tm.setColorAt(i, new THREE.Color(0x4a5236)); });
    tm.castShadow = true; tm.receiveShadow = true;
    this.scene.add(tm);
    const gen = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 2), new THREE.MeshStandardMaterial({ color: 0xb08a20, roughness: 0.6, metalness: 0.4 }));
    gen.position.set(-30, 1, -30); gen.castShadow = true;
    this.scene.add(gen);
    this.genLight = { x: -30, y: 2.2, z: -30 };
    this.glows.push({ x: -30, y: 2.3, z: -30, c: new THREE.Color(0.2, 2, 0.4), size: 0.9, seed: 0.2, flick: 1 });
    // command tents
    const tent = new THREE.CylinderGeometry(0.01, 4, 3, 4, 1); tent.rotateY(Math.PI / 4); tent.translate(0, 1.5, 0);
    const tmat = new THREE.MeshStandardMaterial({ color: 0x4e5a3c, roughness: 1 });
    for (const [x, z] of [[40, 30], [52, 18], [-40, 40]]) {
      const t = new THREE.Mesh(tent, tmat); t.position.set(x, 0, z); t.scale.set(1.4, 1, 2); t.castShadow = true; t.receiveShadow = true;
      this.scene.add(t);
      this.pools.push({ x, z, c: new THREE.Color(1, 0.6, 0.25).multiplyScalar(0.6), r: 7, h: 3, seed: r(), flick: 0 });
    }
  }

  setQuality(q) { this.q = q === 'low' ? 0.4 : 1; }

  update(dt, t, camera) {
    const fog = this.scene.fog;
    this.glowSet.update(t, fog);
    this.poolSet.update(t, fog);
    if (this.hazard) this.hazard.update(t, fog);
    if (this.amber) this.amber.update(t, fog);
    for (const m of this.vehicleMats || []) if (m.userData.shader) m.userData.shader.uniforms.uTime.value = t;
    if (this.roofBeacons) this.roofBeacons.update(t, fog);
    this.signMat.uniforms.uTime.value = t; this.signMat.uniforms.uFogDensity.value = fog.density;
    for (const u of this.updaters) u(t);
    for (const c of this.floods) c.material.uniforms.uTime.value = t;
    const q = this.q || 1;
    for (const b of this.burning) {
      if (Math.hypot(b.x - camera.position.x, b.z - camera.position.z) > 450) continue;
      b.acc += dt * 18 * q;
      while (b.acc >= 1) { b.acc -= 1; fx.flame(b.x + (Math.random() - 0.5) * b.size, 0.8, b.z + (Math.random() - 0.5) * b.size, b.size * 1.3, 0.9); }
      b.sacc += dt * 2.2 * q;
      while (b.sacc >= 1) { b.sacc -= 1; fx.smokePuff(b.x, 3, b.z, 7, 0.14, 7, 4, 1.8); }
    }
  }
}

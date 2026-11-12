// details.js - facade and rooftop geometry that breaks up the box silhouettes (visual only,
// collision boxes unchanged): cornices, floor ledges, fire escapes, awnings, window AC units,
// rooftop billboards. Everything is instanced (one draw call per kind).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rngFrom, CELL, BLOCK, HALF, cellCenter } from './world.js';

const UP = new THREE.Vector3(0, 1, 0);
// window grid per facade style (must match the building shader)
const CS = [[3.3, 3.5], [1.7, 3.6], [2.7, 3.0], [3.3, 3.5]];
const ZR = [[0.18, 0.82, 0.26, 0.82], [0.04, 0.96, 0.08, 0.94], [0.25, 0.75, 0.3, 0.78], [0.2, 0.8, 0.28, 0.8]];

function box(w, h, d, x = 0, y = 0, z = 0, rz = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  g.deleteAttribute('uv');
  return g.toNonIndexed();
}

export class Details {
  constructor(world) {
    this.world = world;
    this.scene = world.scene;
    this.r = rngFrom(777);
    this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion();
    this._bands();
    this._fireEscapes();
    this._awningsAndAC();
    this._billboards();
  }

  // facades of a building that face a street (not the neighbour in the same block)
  streetFaces(b) {
    const i = Math.floor((b.x + HALF) / CELL), j = Math.floor((b.z + HALF) / CELL);
    const cx = cellCenter(i), cz = cellCenter(j);
    const f = [];
    if (b.maxX > cx + BLOCK / 2 - 8) f.push([1, 0]);
    if (b.minX < cx - BLOCK / 2 + 8) f.push([-1, 0]);
    if (b.maxZ > cz + BLOCK / 2 - 8) f.push([0, 1]);
    if (b.minZ < cz - BLOCK / 2 + 8) f.push([0, -1]);
    return f;
  }

  // point on a facade: along = coordinate along the facade axis (world z for ±x faces, world x for ±z faces)
  facePoint(b, nx, nz, along, y, out) {
    if (nx) return out.set(nx > 0 ? b.maxX : b.minX, y, along);
    return out.set(along, y, nz > 0 ? b.maxZ : b.minZ);
  }

  _bands() {
    const r = this.r;
    const C = [], L = [];
    for (const b of this.world.buildings) {
      if (b.kind !== 'city') continue;
      const c = new THREE.Color(0x4a4b52).lerp(new THREE.Color(0x6a6560), r());
      C.push({ b, c });
      const st = b.style;
      if (st === 3 && r() < 0.6) continue;
      const step = st === 1 ? 7.2 : st === 2 ? 9 : 14;
      for (let y = step; y < b.h - 4; y += step) L.push({ b, y, st, c });
    }
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, metalness: 0.15 });
    const cm = new THREE.InstancedMesh(geo, mat, C.length);
    C.forEach(({ b, c }, k) => { this.m.compose(new THREE.Vector3(b.x, b.h - 0.45, b.z), this.q.identity(), new THREE.Vector3(b.w + 0.9, 0.9, b.d + 0.9)); cm.setMatrixAt(k, this.m); cm.setColorAt(k, c); });
    const lm = new THREE.InstancedMesh(geo, mat, L.length);
    L.forEach(({ b, y, st, c }, k) => {
      const o = st === 1 ? 0.25 : 0.5, t = st === 1 ? 0.18 : 0.32;
      this.m.compose(new THREE.Vector3(b.x, y, b.z), this.q.identity(), new THREE.Vector3(b.w + o, t, b.d + o));
      lm.setMatrixAt(k, this.m); lm.setColorAt(k, st === 1 ? new THREE.Color(0x8a9098) : c);
    });
    for (const m of [cm, lm]) { m.castShadow = true; m.receiveShadow = true; this.scene.add(m); }
  }

  _fireEscapes() {
    const r = this.r;
    // one storey of fire escape, local frame: x along the wall, y up, z out of the wall
    const metal = [];
    const W = 3.4, Dp = 1.2, H = 3.0;
    metal.push(box(W, 0.07, Dp, 0, 0, Dp / 2));                          // platform grating
    metal.push(box(W, 0.05, 0.05, 0, 1.0, Dp));                          // top rail
    metal.push(box(W, 0.04, 0.04, 0, 0.5, Dp));                          // mid rail
    for (const x of [-W / 2, -W / 6, W / 6, W / 2]) metal.push(box(0.05, 1.0, 0.05, x, 0.5, Dp));
    metal.push(box(0.05, 1.0, Dp, -W / 2, 0.5, Dp / 2), box(0.05, 1.0, Dp, W / 2, 0.5, Dp / 2));
    const len = Math.hypot(W * 0.7, H), ang = Math.atan2(H, W * 0.7);
    metal.push(box(len, 0.06, 0.5, 0, H / 2, Dp * 0.55, ang));           // stair flight to the next platform
    metal.push(box(len, 0.04, 0.04, 0, H / 2 + 0.85, Dp * 0.8, ang));    // stair hand rail
    metal.push(box(0.05, H, 0.05, -W / 2, H / 2, Dp), box(0.05, H, 0.05, W / 2, H / 2, Dp));   // hangers
    const geo = mergeGeometries(metal);
    const items = [];
    for (const b of this.world.buildings) {
      if (b.kind !== 'city' || b.style !== 2 || b.h < 14 || b.h > 90 || r() > 0.55) continue;
      const faces = this.streetFaces(b);
      if (!faces.length) continue;
      const [nx, nz] = faces[Math.floor(r() * faces.length)];
      const width = nx ? b.d : b.w;
      if (width < 12) continue;
      const along = (nx ? b.z : b.x) + (r() - 0.5) * (width - 9);
      for (let y = 6.2, k = 0; y < b.h - 3; y += H, k++) items.push({ b, nx, nz, along, y, flip: k % 2 });
    }
    const mesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x18191c, roughness: 0.55, metalness: 0.75, side: THREE.DoubleSide }), items.length);
    const p = new THREE.Vector3(), s = new THREE.Vector3();
    items.forEach((it, k) => {
      this.facePoint(it.b, it.nx, it.nz, it.along, it.y, p);
      // local +z (out of the wall) must point along the face normal
      const yaw = Math.atan2(it.nx, it.nz);
      this.q.setFromAxisAngle(UP, yaw);
      s.set(it.flip ? -1 : 1, 1, 1);
      this.m.compose(p, this.q, s);
      mesh.setMatrixAt(k, this.m);
    });
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  _awningsAndAC() {
    const r = this.r;
    const awn = [], ac = [];
    const awnCols = [0x7a1e1e, 0x1e4a2a, 0x1e2e5a, 0x6a5a1e, 0x4a1e4a, 0x2a2a2a];
    for (const b of this.world.buildings) {
      if (b.kind !== 'city') continue;
      for (const [nx, nz] of this.streetFaces(b)) {
        const width = nx ? b.d : b.w, base = nx ? b.z : b.x;
        // awnings over shopfronts
        if (b.style !== 1 && r() < 0.55) {
          const n = 1 + Math.floor(r() * 2);
          for (let i = 0; i < n; i++) awn.push({ b, nx, nz, along: base + (r() - 0.5) * (width - 10), w: 4 + r() * 4, c: awnCols[Math.floor(r() * awnCols.length)], torn: r() < 0.3 });
        }
        // AC units under windows (residential and office)
        if (b.style === 0 || b.style === 2) {
          const [cx, cy] = CS[b.style], zr = ZR[b.style];
          const nC = Math.floor(width / cx), nF = Math.floor((b.h - 6) / cy);
          const want = Math.min(40, Math.floor(nC * nF * 0.035));
          for (let i = 0; i < want; i++) {
            const col = Math.floor(r() * nC), fl = 2 + Math.floor(r() * Math.max(1, nF - 2));
            const along = (Math.floor(((nx ? b.minZ : b.minX)) / cx) + col + 0.5) * cx;
            const y = fl * cy + zr[2] * cy - 0.38;
            if (y < 5.5 || y > b.h - 2 || along < (nx ? b.minZ : b.minX) + 1.6 || along > (nx ? b.maxZ : b.maxX) - 1.6) continue;
            ac.push({ b, nx, nz, along, y });
          }
        }
      }
    }
    const p = new THREE.Vector3(), s = new THREE.Vector3();
    // awning: slanted panel with side flaps
    const ag = mergeGeometries([box(1, 0.08, 1.8, 0, 0, 0.9), box(1, 0.5, 0.06, 0, -0.25, 1.8)]);
    ag.translate(0, 0, 0); ag.rotateX(0.32);
    const am = new THREE.InstancedMesh(ag, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }), awn.length);
    awn.forEach((a, k) => {
      this.facePoint(a.b, a.nx, a.nz, a.along, 4.7, p);
      this.q.setFromAxisAngle(UP, Math.atan2(a.nx, a.nz));
      s.set(a.w, 1, a.torn ? 0.6 : 1);
      this.m.compose(p, this.q, s); am.setMatrixAt(k, this.m);
      am.setColorAt(k, new THREE.Color(a.c));
    });
    const acg = mergeGeometries([box(0.95, 0.62, 0.6, 0, 0, 0.3), box(0.7, 0.05, 0.55, 0, -0.33, 0.27), box(0.5, 0.5, 0.02, -0.12, 0, 0.61)]);
    const acm = new THREE.InstancedMesh(acg, new THREE.MeshStandardMaterial({ color: 0x9a9890, roughness: 0.6, metalness: 0.4 }), ac.length);
    ac.forEach((a, k) => {
      this.facePoint(a.b, a.nx, a.nz, a.along, a.y, p);
      this.q.setFromAxisAngle(UP, Math.atan2(a.nx, a.nz));
      this.m.compose(p, this.q, s.set(1, 1, 1)); acm.setMatrixAt(k, this.m);
      acm.setColorAt(k, new THREE.Color().setHSL(0.1, 0.05, 0.35 + r() * 0.25));
    });
    for (const m of [am, acm]) { m.castShadow = true; m.receiveShadow = true; this.scene.add(m); }
  }

  _billboards() {
    const r = this.r;
    const ADS = [
      ['STAY INSIDE', 'CURFEW 18:00 · BY ORDER', '#ff3a3a', '#1a0000'],
      ['EE2028', 'THE LAST LAB STANDING', '#3ae6ff', '#001a22'],
      ['NEO RAMEN', '24H · DELIVERY BY DRONE', '#ffb03a', '#1a0d00'],
      ['EVACUATE', 'ZONE 4 → HABITAT A', '#ffe23a', '#1a1600'],
      ['STM32', 'CONTROL THE SKIES', '#5aff8a', '#001a08'],
      ['VOLT COLA', 'STAY CHARGED', '#ff4ad8', '#1a0016'],
      ['DO NOT', 'APPROACH THE INFECTED', '#ff6a2a', '#1a0800'],
      ['CYBER INS.', 'COVERS ZOMBIE BITES*', '#8a7aff', '#08001a'],
    ];
    const c = document.createElement('canvas'); c.width = 1024; c.height = 1024;
    const g = c.getContext('2d');
    ADS.forEach(([a, b, col, bg], i) => {
      const x = (i % 2) * 512, y = Math.floor(i / 2) * 256;
      const grd = g.createLinearGradient(x, y, x, y + 256); grd.addColorStop(0, bg); grd.addColorStop(1, '#000');
      g.fillStyle = grd; g.fillRect(x, y, 512, 256);
      g.strokeStyle = col; g.lineWidth = 6; g.shadowColor = col; g.shadowBlur = 20; g.strokeRect(x + 14, y + 14, 484, 228);
      g.fillStyle = col; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = 'bold 92px "Arial Black", Impact, sans-serif'; g.fillText(a, x + 256, y + 108);
      g.shadowBlur = 8; g.font = 'bold 30px Arial, sans-serif'; g.fillStyle = '#fff'; g.fillText(b, x + 256, y + 192);
      g.shadowBlur = 0;
    });
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    const cands = this.world.buildings.filter((b) => b.kind === 'city' && b.h > 18 && b.h < 60 && Math.min(b.w, b.d) > 20);
    const n = Math.min(16, cands.length);
    const frames = [], panels = [];
    for (let i = 0; i < n; i++) {
      const b = cands.splice(Math.floor(r() * cands.length), 1)[0];
      const faces = this.streetFaces(b); if (!faces.length) continue;
      const [nx, nz] = faces[Math.floor(r() * faces.length)];
      // stand near the street edge of the roof, facing the street
      const inset = 3;
      const x = nx ? (nx > 0 ? b.maxX - inset : b.minX + inset) : b.x, z = nz ? (nz > 0 ? b.maxZ - inset : b.minZ + inset) : b.z;
      frames.push({ x, y: b.h, z, yaw: Math.atan2(nx, nz) });
      panels.push({ x: x + nx * 0.35, y: b.h + 9, z: z + nz * 0.35, yaw: Math.atan2(nx, nz), ad: i % ADS.length });
    }
    const fg = mergeGeometries([box(0.4, 7, 0.4, -6, 3.5, -0.6), box(0.4, 7, 0.4, 6, 3.5, -0.6), box(0.3, 6, 0.3, 0, 3, -1.6, 0), box(14.4, 6.6, 0.4, 0, 9, -0.1), box(14, 0.15, 1.2, 0, 5.6, 0.3)]);
    const fm = new THREE.InstancedMesh(fg, new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: 0.6, metalness: 0.7 }), frames.length);
    frames.forEach((f, k) => { this.q.setFromAxisAngle(UP, f.yaw); this.m.compose(new THREE.Vector3(f.x, f.y, f.z), this.q, new THREE.Vector3(1, 1, 1)); fm.setMatrixAt(k, this.m); });
    fm.castShadow = true;
    this.scene.add(fm);
    // panels: plane with UVs into the atlas, emissive so the ads read at night
    this.boards = [];
    for (const p of panels) {
      const pg = new THREE.PlaneGeometry(13.6, 6.0);
      const uv = pg.attributes.uv, u0 = (p.ad % 2) * 0.5, v0 = 1 - (Math.floor(p.ad / 2) + 1) * 0.25;
      for (let k = 0; k < uv.count; k++) uv.setXY(k, u0 + uv.getX(k) * 0.5, v0 + uv.getY(k) * 0.25);
      const m = new THREE.Mesh(pg, new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1.3, roughness: 0.4 }));
      m.position.set(p.x, p.y, p.z); m.rotation.y = p.yaw;
      m.userData.ph = r() * 10; m.userData.broken = r() < 0.25;
      this.scene.add(m);
      this.boards.push(m);
    }
  }

  update(dt, t) {
    for (const b of this.boards) {
      const f = b.userData.broken ? (Math.sin(t * 13 + b.userData.ph) > 0.2 && Math.sin(t * 3.1 + b.userData.ph) > -0.6 ? 1.3 : 0.08) : 1.3;
      b.material.emissiveIntensity = f;
    }
  }
}

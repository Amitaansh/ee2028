// fx.js - shared combat / environment effects: sparks, embers, flames, smoke,
// dust, muzzle and impact flashes, flash lights and scorch decals.
// One instance (fx) is initialised by World and used by World and Drone.
import * as THREE from 'three';
import { ParticlePool, glowTex, smokeTex, flameTex, streakTex } from './particles.js';

function scorchTexture() {
  const s = 128, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grd.addColorStop(0, 'rgba(0,0,0,0.95)'); grd.addColorStop(0.45, 'rgba(10,6,4,0.75)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, s, s);
  let a = 11; const r = () => { a = (a * 16807) % 2147483647; return a / 2147483647; };
  for (let k = 0; k < 18; k++) {          // splatter streaks
    const ang = r() * Math.PI * 2, len = s * (0.25 + r() * 0.22);
    g.strokeStyle = `rgba(0,0,0,${0.35 + r() * 0.3})`; g.lineWidth = 2 + r() * 4;
    g.beginPath(); g.moveTo(s / 2, s / 2); g.lineTo(s / 2 + Math.cos(ang) * len, s / 2 + Math.sin(ang) * len); g.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

class Fx {
  constructor() { this.ready = false; this.q = 1; }

  init(scene) {
    if (this.ready) return;
    this.scene = scene;
    this.glow = new ParticlePool(scene, { max: 400, map: glowTex('rgba(255,255,255,1)', 0.18), additive: true, renderOrder: 12 });
    this.spark = new ParticlePool(scene, { max: 900, map: streakTex(), additive: true, renderOrder: 13 });
    this.fire = new ParticlePool(scene, { max: 1400, map: flameTex(), additive: true, renderOrder: 11 });
    this.smoke = new ParticlePool(scene, { max: 900, map: smokeTex(), additive: false, renderOrder: 9 });
    this.pools = [this.smoke, this.fire, this.glow, this.spark];

    // scorch decals (ring buffer)
    this.decalMax = 200; this.decalN = 0;
    const dg = new THREE.PlaneGeometry(1, 1); dg.rotateX(-Math.PI / 2);
    this.decals = new THREE.InstancedMesh(dg, new THREE.MeshBasicMaterial({ map: scorchTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }), this.decalMax);
    this.decals.count = 0; this.decals.renderOrder = 2; this.decals.frustumCulled = false;
    this.decals.userData.noAO = true;
    scene.add(this.decals);

    // two reusable flash lights (always in the scene so the light count never changes)
    this.lights = [0, 1].map(() => { const l = new THREE.PointLight(0xff4060, 0, 60, 1.6); l.position.set(0, -500, 0); scene.add(l); return { l, t: 0, dur: 1, i0: 0 }; });
    this.lightIdx = 0;
    this.ready = true;
  }

  setQuality(q) { this.q = q === 'low' ? 0.4 : 1; }
  n(k) { return Math.max(1, Math.round(k * this.q)); }

  flashLight(x, y, z, color, intensity = 300, dur = 0.25, dist = 70) {
    const s = this.lights[this.lightIdx]; this.lightIdx = (this.lightIdx + 1) % this.lights.length;
    s.l.position.set(x, y, z); s.l.color.set(color); s.l.distance = dist; s.t = 0; s.dur = dur; s.i0 = intensity;
    s.l.intensity = intensity;
  }

  scorch(x, z, size = 6) {
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, 0.06, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6.28), new THREE.Vector3(size, 1, size));
    const i = this.decalN % this.decalMax;
    this.decals.setMatrixAt(i, m);
    this.decalN++;
    this.decals.count = Math.min(this.decalN, this.decalMax);
    this.decals.instanceMatrix.needsUpdate = true;
  }

  muzzle(pos, color = new THREE.Color(1, 0.25, 0.45)) {
    this.glow.spawn({ x: pos.x, y: pos.y, z: pos.z, life: 0.12, size: 4, size1: 9, r: 1, g: 0.9, b: 0.95, a: 1, a1: 0 });
    this.glow.spawn({ x: pos.x, y: pos.y, z: pos.z, life: 0.35, size: 7, size1: 3, r: color.r, g: color.g, b: color.b, a: 0.9, a1: 0 });
    for (let k = 0; k < this.n(10); k++) {
      const v = 18 + Math.random() * 20;
      const d = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).normalize();
      this.spark.spawn({ x: pos.x, y: pos.y, z: pos.z, vx: d.x * v, vy: d.y * v, vz: d.z * v, life: 0.2 + Math.random() * 0.2, size: 0.5, r: 1, g: 0.7, b: 0.8, a: 1, a1: 0, stretch: 5, vstretch: true, drag: 3 });
    }
    this.flashLight(pos.x, pos.y, pos.z, color, 260, 0.18, 50);
  }

  impact(x, y, z, color = new THREE.Color(1, 0.25, 0.45)) {
    this.glow.spawn({ x, y, z, life: 0.25, size: 3, size1: 16, r: 1, g: 0.95, b: 0.9, a: 1, a1: 0 });
    this.glow.spawn({ x, y, z, life: 0.6, size: 10, size1: 4, r: color.r, g: color.g, b: color.b, a: 0.8, a1: 0 });
    for (let k = 0; k < this.n(26); k++) {
      const v = 10 + Math.random() * 26;
      const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2;
      this.spark.spawn({ x, y, z, vx: Math.cos(a) * Math.cos(e) * v, vy: Math.sin(e) * v + 4, vz: Math.sin(a) * Math.cos(e) * v,
        life: 0.4 + Math.random() * 0.6, size: 0.35 + Math.random() * 0.3, r: 1, g: 0.75 + Math.random() * 0.2, b: 0.4, a: 1, a1: 0, stretch: 6, vstretch: true, drag: 1.2, grav: 22 });
    }
    this.embers(x, y, z, 10);
    this.smokePuff(x, y - 0.5, z, 5, 0.35);
    this.flashLight(x, y + 2, z, 0xff7040, 200, 0.35, 45);
  }

  embers(x, y, z, n = 8) {
    for (let k = 0; k < this.n(n); k++) {
      this.spark.spawn({ x: x + (Math.random() - 0.5) * 2, y: y + Math.random() * 2, z: z + (Math.random() - 0.5) * 2,
        vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 5, vz: (Math.random() - 0.5) * 3,
        life: 1 + Math.random() * 1.6, size: 0.25 + Math.random() * 0.25, r: 1, g: 0.5 + Math.random() * 0.3, b: 0.1, a: 1, a1: 0, stretch: 1.6, vstretch: true, drag: 0.6, grav: -1.5 });
    }
  }

  flame(x, y, z, size = 3, life = 0.9) {
    this.fire.spawn({ x: x + (Math.random() - 0.5) * size * 0.5, y, z: z + (Math.random() - 0.5) * size * 0.5,
      vx: (Math.random() - 0.5) * 1.2, vy: size * (1.1 + Math.random() * 0.8), vz: (Math.random() - 0.5) * 1.2,
      life: life * (0.6 + Math.random() * 0.6), size: size * (0.9 + Math.random() * 0.5), size1: size * 0.25,
      r: 1, g: 0.55 + Math.random() * 0.25, b: 0.25, a: 0.95, a1: 0, rot: (Math.random() - 0.5) * 0.6, vrot: (Math.random() - 0.5) * 1.5, fadeIn: 0.08, drag: 0.8 });
  }

  smokePuff(x, y, z, size = 6, dark = 0.25, life = 4, rise = 3, wind = 1.5) {
    const v = dark * (0.8 + Math.random() * 0.4);
    return this.smoke.spawn({ x: x + (Math.random() - 0.5) * size * 0.3, y, z: z + (Math.random() - 0.5) * size * 0.3,
      vx: wind + (Math.random() - 0.5), vy: rise * (0.7 + Math.random() * 0.6), vz: wind * 0.4 + (Math.random() - 0.5),
      life: life * (0.7 + Math.random() * 0.6), size: size * 0.6, size1: size * 2.6, r: v, g: v * 0.95, b: v * 0.92,
      a: 0.55, a1: 0, rot: Math.random() * 6.28, vrot: (Math.random() - 0.5) * 0.4, fadeIn: 0.6, drag: 0.15 });
  }

  dust(x, y, z, strength = 1) {
    const a = Math.random() * Math.PI * 2, v = 6 + Math.random() * 8;
    this.smoke.spawn({ x: x + Math.cos(a) * 2, y: y + 0.4, z: z + Math.sin(a) * 2,
      vx: Math.cos(a) * v, vy: 0.6 + Math.random(), vz: Math.sin(a) * v,
      life: 1.2 + Math.random() * 0.8, size: 2, size1: 7, r: 0.42, g: 0.38, b: 0.34,
      a: 0.45 * strength, a1: 0, rot: Math.random() * 6.28, vrot: (Math.random() - 0.5), fadeIn: 0.15, drag: 1.4 });
  }

  update(dt, camera, fog) {
    if (!this.ready) return;
    for (const p of this.pools) p.update(dt, fog, camera);
    for (const s of this.lights) {
      if (s.l.intensity <= 0) continue;
      s.t += dt;
      s.l.intensity = s.t >= s.dur ? 0 : s.i0 * (1 - s.t / s.dur);
    }
  }

  clear() { if (this.ready) for (const p of this.pools) p.clear(); }
}

export const fx = new Fx();

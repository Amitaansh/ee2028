// atmos.js - rain (GPU-animated streaks around the camera) and lightning
// (sky flash, scene light flash, forked bolt, thunder callback).
import * as THREE from 'three';

export class Rain {
  constructor(scene, count = 9000) {
    this.max = count;
    const seed = new Float32Array(count * 2 * 3), end = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const x = Math.random(), y = Math.random(), z = Math.random();
      for (let k = 0; k < 2; k++) { seed.set([x, y, z], (i * 2 + k) * 3); end[i * 2 + k] = k; }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(seed, 3));
    g.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e7);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uCam: { value: new THREE.Vector3() }, uTime: { value: 0 }, uBox: { value: 130 }, uVel: { value: new THREE.Vector3() }, uFlash: { value: 0 } },
      vertexShader: `
        attribute float aEnd; uniform vec3 uCam, uVel; uniform float uTime, uBox; varying float vA;
        void main(){
          vec3 s = position * uBox;
          vec3 p;
          p.x = uCam.x - uBox * 0.5 + mod(s.x - uCam.x, uBox);
          p.z = uCam.z - uBox * 0.5 + mod(s.z - uCam.z, uBox);
          p.y = uCam.y - uBox * 0.5 + mod(s.y - uTime * 34.0 - uCam.y, uBox);
          vec3 dir = normalize(vec3(2.5, -34.0, 1.2) - uVel * 0.9);
          p += dir * aEnd * 1.7;
          float d = length(p - uCam);
          vA = smoothstep(3.0, 9.0, d) * (1.0 - smoothstep(uBox * 0.25, uBox * 0.5, d)) * step(0.0, p.y) * (0.6 + 0.4 * aEnd);
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `uniform float uFlash; varying float vA;
        void main(){ gl_FragColor = vec4(vec3(0.62, 0.68, 0.8) * (1.0 + uFlash * 3.0), vA * 0.2); }`,
      transparent: true, depthWrite: false,
    });
    this.lines = new THREE.LineSegments(g, this.mat);
    this.lines.frustumCulled = false;
    this.lines.renderOrder = 14;
    scene.add(this.lines);
    this.vel = new THREE.Vector3();
    this.prev = null;
  }

  setQuality(q) { this.lines.geometry.setDrawRange(0, Math.floor(this.max * (q === 'low' ? 0.35 : 1)) * 2); }

  update(dt, t, camera, drone, flash = 0) {
    const u = this.mat.uniforms;
    u.uCam.value.copy(camera.position);
    u.uTime.value = t;
    if (this.prev && dt > 0) {
      const v = new THREE.Vector3().subVectors(camera.position, this.prev).divideScalar(dt);
      if (v.length() < 200) this.vel.lerp(v, Math.min(1, dt * 4));
    }
    this.prev = (this.prev || new THREE.Vector3()).copy(camera.position);
    u.uVel.value.copy(this.vel);
    u.uFlash.value = flash;
  }
}

export class Lightning {
  constructor(world) {
    this.world = world;
    this.next = 6 + Math.random() * 8;
    this.t = 0;
    this.flashes = [];       // scheduled {at, k}
    this.flash = 0;
    this.dir = new THREE.Vector3(1, 0.3, 0);
    const mat = new THREE.LineBasicMaterial({ color: 0xdfe6ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    this.bolt = new THREE.LineSegments(new THREE.BufferGeometry(), mat);
    this.bolt.frustumCulled = false;
    world.scene.add(this.bolt);
    this.glowMat = new THREE.MeshBasicMaterial({ color: 0x9fb4ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    this.boltGlow = new THREE.Mesh(new THREE.BufferGeometry(), this.glowMat);
    this.boltGlow.frustumCulled = false;
    world.scene.add(this.boltGlow);
    this.onThunder = null;
  }

  _makeBolt(camera) {
    const a = Math.random() * Math.PI * 2, dist = 700 + Math.random() * 600;
    const bx = camera.position.x + Math.cos(a) * dist, bz = camera.position.z + Math.sin(a) * dist;
    this.dir.set(Math.cos(a), 0.25, Math.sin(a)).normalize();
    const segs = [], quads = [];
    const branch = (x, y, z, len, depth) => {
      let px = x, py = y, pz = z;
      const steps = Math.floor(len / 22);
      for (let i = 0; i < steps && py > 0; i++) {
        const nx = px + (Math.random() - 0.5) * 38, ny = py - (14 + Math.random() * 20), nz = pz + (Math.random() - 0.5) * 38;
        segs.push(px, py, pz, nx, ny, nz);
        const w = depth === 0 ? 3.5 : 1.6;
        // camera-facing ribbon for the glow
        const dx = nx - px, dy = ny - py, dz = nz - pz;
        const vx = (px + nx) / 2 - camera.position.x, vy = (py + ny) / 2 - camera.position.y, vz = (pz + nz) / 2 - camera.position.z;
        let sx = dy * vz - dz * vy, sy = dz * vx - dx * vz, sz = dx * vy - dy * vx;
        const sl = Math.hypot(sx, sy, sz) || 1; sx = sx / sl * w; sy = sy / sl * w; sz = sz / sl * w;
        quads.push(px - sx, py - sy, pz - sz, px + sx, py + sy, pz + sz, nx + sx, ny + sy, nz + sz,
          px - sx, py - sy, pz - sz, nx + sx, ny + sy, nz + sz, nx - sx, ny - sy, nz - sz);
        if (depth < 2 && Math.random() < 0.18) branch(nx, ny, nz, len * 0.35, depth + 1);
        px = nx; py = ny; pz = nz;
      }
    };
    branch(bx, 520 + Math.random() * 200, bz, 900, 0);
    this.bolt.geometry.dispose();
    this.bolt.geometry = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(segs, 3));
    this.boltGlow.geometry.dispose();
    this.boltGlow.geometry = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(quads, 3));
    return dist;
  }

  strike(camera) {
    const dist = this._makeBolt(camera);
    const t = this.t;
    const n = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) this.flashes.push({ at: t + i * (0.06 + Math.random() * 0.12), k: i === 0 ? 1 : 0.5 + Math.random() * 0.5 });
    this.boltT = 0.35;
    if (this.onThunder) this.onThunder(dist / 340, Math.max(0.3, 1.4 - dist / 1300));
  }

  update(dt, t, camera) {
    this.t = t;
    this.next -= dt;
    if (this.next <= 0) { this.strike(camera); this.next = 9 + Math.random() * 16; }
    let f = 0;
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      const e = this.flashes[i], age = t - e.at;
      if (age < 0) continue;
      if (age > 0.5) { this.flashes.splice(i, 1); continue; }
      f = Math.max(f, e.k * Math.exp(-age * 9));
    }
    this.flash = f;
    if (this.boltT > 0) this.boltT -= dt;
    const vis = this.boltT > 0 ? Math.min(1, f * 1.6 + 0.15) : 0;
    this.bolt.material.opacity = vis;
    this.glowMat.opacity = vis * 0.35;
    return f;
  }
}

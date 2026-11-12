// drone.js - the attack drone: model, tilt-controlled flight, collisions, laser.
import * as THREE from 'three';
import { HALF } from './world.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function glowTexture(color) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, color); grd.addColorStop(0.3, color); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Drone {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.body = new THREE.Group();
    this.group.add(this.body);
    this._model();
    scene.add(this.group);

    this.pos = new THREE.Vector3(0, 0.9, 0);
    this.yaw = Math.PI;              // facing -Z: out of the plaza, away from the lab sign
    this.speed = 0;
    this.vy = 0;
    this.bank = 0; this.pitchVis = 0;
    this.state = 'parked';           // parked | takeoff | flying | hover | attacked | down
    this.shake = 0;
    this.beams = [];
    this.forward = new THREE.Vector3();

    const shadowTex = glowTexture('rgba(0,0,0,0.85)');
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2;
    scene.add(this.shadow);

    this.light = new THREE.PointLight(0x7ae8ff, 60, 70, 1.6);
    this.light.position.set(0, -1.5, 0);
    this.group.add(this.light);
  }

  _model() {
    const dark = new THREE.MeshStandardMaterial({ color: 0x2a2e36, metalness: 0.6, roughness: 0.35 });
    const accent = new THREE.MeshStandardMaterial({ color: 0xd9dde5, metalness: 0.3, roughness: 0.4 });
    const glow = new THREE.MeshStandardMaterial({ color: 0x0a2830, emissive: 0x30e8ff, emissiveIntensity: 3 });
    const S = 1.6;
    const b = this.body;
    b.scale.setScalar(S);

    const core = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.45, 2.1), dark);
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.3, 1.4), accent);
    top.position.set(0, 0.35, -0.1);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.08), glow);
    visor.position.set(0, 0.15, 1.06);
    b.add(core, top, visor);

    this.rotors = [];
    const armGeo = new THREE.CylinderGeometry(0.07, 0.07, 1.9, 8); armGeo.rotateZ(Math.PI / 2);
    const rotorGeo = new THREE.CircleGeometry(0.85, 24); rotorGeo.rotateX(-Math.PI / 2);
    const rotorMat = new THREE.MeshBasicMaterial({ color: 0xa0d8ff, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false });
    const bladeGeo = new THREE.BoxGeometry(1.6, 0.02, 0.12);
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const arm = new THREE.Mesh(armGeo, dark);
      arm.position.set(sx * 0.75, 0.05, sz * 0.75);
      arm.rotation.y = Math.atan2(sz, sx) * -1;
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.3, 12), dark);
      pod.position.set(sx * 1.45, 0.12, sz * 1.45);
      const disc = new THREE.Mesh(rotorGeo, rotorMat);
      disc.position.set(sx * 1.45, 0.3, sz * 1.45);
      const blade = new THREE.Mesh(bladeGeo, accent);
      blade.position.copy(disc.position);
      b.add(arm, pod, disc, blade);
      this.rotors.push(blade);
    }
    // nav lights: cyan front, red back
    const cyan = glowTexture('rgba(80,240,255,1)'), red = glowTexture('rgba(255,50,40,1)');
    for (const [x, z, t] of [[0.6, 1.05, cyan], [-0.6, 1.05, cyan], [0.6, -1.05, red], [-0.6, -1.05, red]]) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.position.set(x, 0, z); s.scale.setScalar(0.9);
      b.add(s);
    }
    // laser turret under the nose
    const turret = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.9, 10), dark);
    turret.rotation.x = Math.PI / 2; turret.position.set(0, -0.35, 1.0);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), new THREE.MeshStandardMaterial({ color: 0x300808, emissive: 0xff2040, emissiveIntensity: 4 }));
    tip.position.set(0, -0.35, 1.48);
    b.add(turret, tip);
    this.muzzle = tip;
  }

  reset() {
    this.pos.set(0, 0.9, 0);
    this.yaw = Math.PI; this.speed = 0; this.vy = 0; this.bank = 0; this.pitchVis = 0;
    this.state = 'parked';
  }

  takeoff() { if (this.state === 'parked' || this.state === 'hover') this.state = this.pos.y < 18 ? 'takeoff' : 'flying'; }

  getForward(v = this.forward) { return v.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }

  // input: { pitch, roll } normalised -1..1 (pitch + = nose down = dive, roll + = bank right)
  update(dt, input, world) {
    const f = this.getForward();
    let hit = null;
    let yawRate = 0, targetVy = 0, targetSpeed = 0;

    switch (this.state) {
      case 'parked':
        targetSpeed = 0; targetVy = 0; break;
      case 'takeoff':
        targetSpeed = 6; targetVy = 9;
        yawRate = -input.roll * 0.6;
        if (this.pos.y > 22) this.state = 'flying';
        break;
      case 'flying': {
        yawRate = -input.roll * 1.3;
        targetVy = -input.pitch * 17;
        targetSpeed = clamp(22 + input.pitch * 11, 12, 34);
        break;
      }
      case 'hover':
        targetSpeed = 0; targetVy = Math.sin(performance.now() / 600) * 0.4; break;
      case 'attacked':
        targetSpeed = 4; targetVy = -2.2; yawRate = 1.6;
        this.shake = 1;
        break;
      case 'down':
        targetSpeed = 0; targetVy = -14; yawRate = 2.5; break;
      default: break;
    }

    // operation area boundary: steer back towards the city
    const lim = HALF + 40;
    if ((Math.abs(this.pos.x) > lim || Math.abs(this.pos.z) > lim) && this.state === 'flying') {
      const want = Math.atan2(-this.pos.x, -this.pos.z);
      let d = want - this.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
      yawRate = clamp(d * 2, -1.5, 1.5);
      this.outOfBounds = true;
    } else this.outOfBounds = false;

    const k = 1 - Math.exp(-dt * 2.5);
    this.speed += (targetSpeed - this.speed) * k;
    this.vy += (targetVy - this.vy) * (1 - Math.exp(-dt * 3));
    this.yaw += yawRate * dt;
    this.pos.addScaledVector(f, this.speed * dt);
    this.pos.y += this.vy * dt;

    // ground and ceiling
    const minY = this.state === 'parked' ? 0.9 : 2.0;
    if (this.pos.y < minY) {
      if (this.vy < -9 && this.state === 'flying') hit = 'ground';
      this.pos.y = minY; this.vy = Math.max(0, this.vy);
    }
    if (this.pos.y > 230) { this.pos.y = 230; this.vy = Math.min(0, this.vy); }

    // buildings (axis-aligned boxes, drone radius R)
    const R = 2.6;
    for (const b of world.buildingsNear(this.pos.x, this.pos.z)) {
      if (this.pos.x < b.minX - R || this.pos.x > b.maxX + R || this.pos.z < b.minZ - R || this.pos.z > b.maxZ + R || this.pos.y > b.h + R) continue;
      const pxl = this.pos.x - (b.minX - R), pxr = (b.maxX + R) - this.pos.x;
      const pzl = this.pos.z - (b.minZ - R), pzr = (b.maxZ + R) - this.pos.z;
      const pyt = (b.h + R) - this.pos.y;
      const m = Math.min(pxl, pxr, pzl, pzr, pyt);
      if (m === pyt) {                       // came from above: skim the roof
        this.pos.y = b.h + R; this.vy = Math.max(0, this.vy);
        continue;
      }
      if (m === pxl) this.pos.x = b.minX - R; else if (m === pxr) this.pos.x = b.maxX + R;
      else if (m === pzl) this.pos.z = b.minZ - R; else this.pos.z = b.maxZ + R;
      // bounce: reflect heading on the wall we hit
      let fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
      if (m === pxl || m === pxr) fx = -fx; else fz = -fz;
      this.yaw = Math.atan2(fx, fz);
      this.speed *= 0.35;
      hit = 'building';
    }

    // visuals
    const wantBank = this.state === 'flying' || this.state === 'takeoff' ? input.roll * 0.65 : 0;
    const wantPitch = this.state === 'flying' ? input.pitch * 0.45 + this.speed * 0.006 : 0;
    this.bank += (wantBank - this.bank) * (1 - Math.exp(-dt * 6));
    this.pitchVis += (wantPitch - this.pitchVis) * (1 - Math.exp(-dt * 6));
    this.group.position.copy(this.pos);
    this.group.rotation.set(0, this.yaw, 0);
    const sh = this.shake * 0.12;
    this.body.rotation.set(this.pitchVis + (Math.random() - 0.5) * sh, 0, this.bank + (Math.random() - 0.5) * sh);   // +z = right side down (right is -X when facing +Z)
    this.shake = Math.max(0, this.shake - dt * 2);
    const spin = this.state === 'parked' ? 4 : 40;
    this.rotors.forEach((r, i) => { r.rotation.y += dt * spin * (i % 2 ? 1 : -1); });

    const gh = world.heightAt(this.pos.x, this.pos.z);
    const above = Math.max(0.5, this.pos.y - gh);
    this.shadow.position.set(this.pos.x, gh + 0.25, this.pos.z);
    this.shadow.scale.setScalar(6 + above * 0.08);
    this.shadow.material.opacity = clamp(1.2 - above / 90, 0.08, 0.9);
    this.altitude = above;

    // laser beams fade out
    for (let i = this.beams.length - 1; i >= 0; i--) {
      const bm = this.beams[i];
      bm.t -= dt;
      bm.mesh.material.opacity = Math.max(0, bm.t / bm.life);
      if (bm.t <= 0) { this.scene.remove(bm.mesh); bm.mesh.geometry.dispose(); bm.mesh.material.dispose(); this.beams.splice(i, 1); }
    }
    return hit;
  }

  muzzleWorld(v = new THREE.Vector3()) { return this.muzzle.getWorldPosition(v); }

  fireBeam(to, color = 0xff2a6a) {
    const from = this.muzzleWorld();
    const dir = new THREE.Vector3().subVectors(to, from);
    const len = dir.length();
    const geo = new THREE.CylinderGeometry(0.35, 0.35, len, 6, 1, true);
    geo.translate(0, len / 2, 0); geo.rotateX(Math.PI / 2);
    const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
    mesh.position.copy(from);
    mesh.lookAt(to);
    this.scene.add(mesh);
    this.beams.push({ mesh, t: 0.8, life: 0.8 });
  }
}

// chase camera that avoids ending up inside buildings
export class ChaseCam {
  constructor(camera) {
    this.camera = camera;
    this.pos = new THREE.Vector3(0, 8, 18);
    this.look = new THREE.Vector3();
    this.shake = 0;
  }

  update(dt, drone, world) {
    const f = drone.getForward(new THREE.Vector3());
    const dist = drone.state === 'parked' ? 14 : 15 + drone.speed * 0.12;
    const want = new THREE.Vector3().copy(drone.pos).addScaledVector(f, -dist);
    want.y += drone.state === 'parked' ? 5 : 5.5;
    // pull in if the camera would be inside a building
    for (let i = 0; i < 6; i++) {
      const h = world.heightAt(want.x, want.z);
      if (want.y > h + 1.5) break;
      want.lerp(drone.pos, 0.3); want.y = Math.max(want.y, drone.pos.y + 2);
    }
    want.y = Math.max(want.y, 1.5);
    const k = 1 - Math.exp(-dt * 4.5);
    this.pos.lerp(want, k);
    const look = new THREE.Vector3().copy(drone.pos).addScaledVector(f, 12);
    look.y += 1.2;
    this.look.lerp(look, 1 - Math.exp(-dt * 8));
    this.camera.position.copy(this.pos);
    if (this.shake > 0) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake;
      this.camera.position.y += (Math.random() - 0.5) * this.shake;
      this.shake = Math.max(0, this.shake - dt * 3);
    }
    this.camera.lookAt(this.look);
    const fov = 66 + drone.speed * 0.25;
    if (Math.abs(this.camera.fov - fov) > 0.1) { this.camera.fov += (fov - this.camera.fov) * k; this.camera.updateProjectionMatrix(); }
  }
}

// drone.js - the attack drone: model, tilt-controlled flight, collisions, laser.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { HALF, beamMaterial } from './world.js';
import { fx } from './fx.js';

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

// laser glow: brightest along the axis, scrolling energy, fades with uLife
function laserGlowMaterial(color) {
  return new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uLife: { value: 1 }, uTime: { value: 0 } },
    vertexShader: `varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uLife, uTime; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){
        float f = pow(abs(dot(normalize(vN), normalize(vV))), 3.0);
        float e = 0.75 + 0.25 * sin(vUv.y * 60.0 - uTime * 80.0);
        gl_FragColor = vec4(uColor * f * e * uLife * 2.4, 1.0);
        #include <colorspace_fragment>
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
}

function rotorBlurMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uSpin: { value: 0 }, uAmt: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform float uSpin, uAmt; varying vec2 vUv;
      void main(){
        vec2 p = vUv - 0.5; float r = length(p) * 2.0; float a = atan(p.y, p.x);
        float blades = pow(abs(cos(a - uSpin)), 14.0) + pow(abs(cos(a - uSpin - 0.35)), 30.0) * 0.5;
        float disc = smoothstep(1.0, 0.94, r) * smoothstep(0.12, 0.22, r);
        float tip = smoothstep(1.0, 0.96, r) * smoothstep(0.9, 0.95, r);
        float alpha = (disc * (0.07 + 0.3 * blades) + tip * 0.35) * uAmt;
        gl_FragColor = vec4(vec3(0.72, 0.8, 0.88), alpha);
      }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
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
    this.t = 0;

    const shadowTex = glowTexture('rgba(0,0,0,0.85)');
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.userData.noAO = true;
    scene.add(this.shadow);

    this.light = new THREE.PointLight(0x7ae8ff, 40, 50, 1.6);
    this.light.position.set(0, -1.5, 0);
    this.group.add(this.light);

    // searchlight: real spot light + a faint visible cone, sweeping ahead of the drone
    this.spot = new THREE.SpotLight(0xf0f4ff, 0, 170, 0.3, 0.6, 1.5);
    this.spot.position.set(0, -1.1, 0.9);
    this.spotTarget = new THREE.Object3D();
    this.spotTarget.position.set(0, -30, 40);
    this.group.add(this.spot, this.spotTarget);
    this.spot.target = this.spotTarget;
    const len = 70;
    const cg = new THREE.CylinderGeometry(len * Math.tan(0.3), 0.25, len, 24, 1, true);
    cg.translate(0, len / 2, 0); cg.rotateX(Math.PI / 2);
    this.cone = new THREE.Mesh(cg, beamMaterial(0xdcefff, 0.05));
    this.cone.userData.noAO = true;
    scene.add(this.cone);
  }

  _model() {
    const carbon = new THREE.MeshStandardMaterial({ color: 0x1c2026, metalness: 0.55, roughness: 0.32 });
    const shell = new THREE.MeshStandardMaterial({ color: 0xd4d8e0, metalness: 0.35, roughness: 0.28 });
    const accentOr = new THREE.MeshStandardMaterial({ color: 0xff6a1a, metalness: 0.3, roughness: 0.4 });
    const glow = new THREE.MeshStandardMaterial({ color: 0x0a2830, emissive: 0x30e8ff, emissiveIntensity: 3 });
    const S = 1.6;
    const b = this.body;
    b.scale.setScalar(S);
    const cast = (m) => { m.castShadow = true; return m; };

    // fuselage, top shell, battery, sensor visor
    const core = cast(new THREE.Mesh(new RoundedBoxGeometry(1.4, 0.42, 2.0, 3, 0.14), carbon));
    const top = cast(new THREE.Mesh(new RoundedBoxGeometry(1.1, 0.26, 1.45, 3, 0.1), shell));
    top.position.set(0, 0.3, -0.05);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.27, 1.3), accentOr);
    stripe.position.set(0.32, 0.31, -0.05);
    const batt = cast(new THREE.Mesh(new RoundedBoxGeometry(0.7, 0.18, 0.7, 2, 0.05), carbon));
    batt.position.set(0, 0.5, -0.35);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.08), glow);
    visor.position.set(0, 0.12, 1.0);
    b.add(core, top, stripe, batt, visor);
    // battery LEDs
    this.battLeds = [];
    for (let i = 0; i < 4; i++) {
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.03, 0.06), new THREE.MeshBasicMaterial({ color: 0x40ff70 }));
      l.position.set(-0.2 + i * 0.13, 0.6, -0.05);
      b.add(l); this.battLeds.push(l);
    }

    // arms, motors, props, LED strips
    this.rotors = []; this.blurs = []; this.ledMats = [];
    const armGeo = new THREE.BoxGeometry(0.16, 0.1, 1.55);
    const bellGeo = new THREE.CylinderGeometry(0.22, 0.25, 0.26, 16);
    const ringGeo = new THREE.TorusGeometry(0.26, 0.025, 6, 24); ringGeo.rotateX(Math.PI / 2);
    const bladeGeo = new THREE.BoxGeometry(1.7, 0.02, 0.13);
    const discGeo = new THREE.CircleGeometry(0.88, 32); discGeo.rotateX(-Math.PI / 2);
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const front = sz > 0;
      const arm = cast(new THREE.Mesh(armGeo, carbon));
      arm.position.set(sx * 0.72, 0.05, sz * 0.72);
      arm.rotation.y = Math.atan2(sx, sz);
      const ledMat = new THREE.MeshBasicMaterial({ color: front ? 0x30e8ff : 0xff2a30 });
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 1.2), ledMat);
      led.position.set(sx * 0.72, -0.01, sz * 0.72); led.rotation.y = arm.rotation.y;
      this.ledMats.push({ m: ledMat, base: new THREE.Color(front ? 0x30e8ff : 0xff2a30), k: this.ledMats.length });
      const bell = cast(new THREE.Mesh(bellGeo, carbon));
      bell.position.set(sx * 1.45, 0.14, sz * 1.45);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshStandardMaterial({ color: 0x111111, emissive: front ? 0x30e8ff : 0xff2a30, emissiveIntensity: 2.5 }));
      ring.position.set(sx * 1.45, 0.06, sz * 1.45);
      const prop = new THREE.Group();
      prop.position.set(sx * 1.45, 0.31, sz * 1.45);
      const blade = new THREE.Mesh(bladeGeo, shell);
      blade.rotation.x = 0.12;
      prop.add(blade);
      const disc = new THREE.Mesh(discGeo, rotorBlurMaterial());
      disc.position.set(sx * 1.45, 0.31, sz * 1.45);
      disc.userData.noAO = true;
      b.add(arm, led, bell, ring, prop, disc);
      this.rotors.push(prop); this.blurs.push(disc);
    }
    // landing skids
    for (const sx of [-1, 1]) {
      const rail = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.8, 6), carbon));
      rail.rotation.x = Math.PI / 2; rail.position.set(sx * 0.55, -0.48, 0);
      b.add(rail);
      for (const sz of [-0.5, 0.5]) {
        const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.34, 6), carbon);
        strut.position.set(sx * 0.5, -0.32, sz); strut.rotation.z = sx * 0.3;
        b.add(strut);
      }
    }
    // antennas
    for (const sx of [-0.4, 0.4]) {
      const a = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.02, 0.6, 5), carbon);
      a.position.set(sx, 0.55, -0.85); a.rotation.x = -0.35;
      b.add(a);
    }
    // nav lights: cyan front, red back
    const cyan = glowTexture('rgba(80,240,255,1)'), red = glowTexture('rgba(255,50,40,1)'), white = glowTexture('rgba(255,255,255,1)');
    for (const [x, z, t] of [[0.6, 1.0, cyan], [-0.6, 1.0, cyan], [0.6, -1.0, red], [-0.6, -1.0, red]]) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.position.set(x, 0, z); s.scale.setScalar(0.9);
      b.add(s);
    }
    this.strobe = new THREE.Sprite(new THREE.SpriteMaterial({ map: white, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    this.strobe.position.set(0, 0.62, -0.8); this.strobe.scale.setScalar(1.6);
    b.add(this.strobe);

    // gimbal camera under the body
    const yoke = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.08), carbon);
    yoke.position.set(0, -0.32, 0.5);
    this.gimbal = new THREE.Group(); this.gimbal.position.set(0, -0.45, 0.5);
    const ball = cast(new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), shell));
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.1, 16), new THREE.MeshStandardMaterial({ color: 0x050608, metalness: 0.9, roughness: 0.05 }));
    lens.rotation.x = Math.PI / 2; lens.position.z = 0.15;
    const rec = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 4), new THREE.MeshBasicMaterial({ color: 0xff2020 }));
    rec.position.set(0.11, 0.07, 0.12);
    this.rec = rec;
    this.gimbal.add(ball, lens, rec);
    b.add(yoke, this.gimbal);

    // laser turret under the nose
    const turret = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 0.9, 12), carbon));
    turret.rotation.x = Math.PI / 2; turret.position.set(0, -0.32, 1.0);
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 6, 16), new THREE.MeshStandardMaterial({ color: 0x300808, emissive: 0xff2040, emissiveIntensity: 2 }));
    coil.position.set(0, -0.32, 1.25);
    this.coil = coil;
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), new THREE.MeshStandardMaterial({ color: 0x300808, emissive: 0xff2040, emissiveIntensity: 4 }));
    tip.position.set(0, -0.32, 1.48);
    b.add(turret, coil, tip);
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
    this.t += dt;

    switch (this.state) {
      case 'parked':
        targetSpeed = 0; targetVy = 0; break;
      case 'takeoff':
        targetSpeed = 6; targetVy = 9;
        yawRate = -input.roll * 0.6 - (input.jx || 0) * 0.8;
        if (this.pos.y > 22) this.state = 'flying';
        break;
      case 'flying': {
        yawRate = -input.roll * 1.3;
        targetVy = -input.pitch * 17;
        if (input.jy !== undefined) {
          // board joystick (GUI active): push = forward, pull = backward, centre = hover in place;
          // left / right = pan (yaw on the spot). Tilt still climbs / dives and banks.
          yawRate -= input.jx * 1.4;
          targetSpeed = input.jy >= 0 ? input.jy * 34 : input.jy * 14;
        } else {
          targetSpeed = clamp(22 + input.pitch * 11, 12, 34);
        }
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
      let fx0 = Math.sin(this.yaw), fz0 = Math.cos(this.yaw);
      if (m === pxl || m === pxr) fx0 = -fx0; else fz0 = -fz0;
      this.yaw = Math.atan2(fx0, fz0);
      this.speed *= 0.35;
      hit = 'building';
      if (this.t - (this._lastImpact || -9) > 0.9) { this._lastImpact = this.t; fx.impact(this.pos.x, this.pos.y, this.pos.z, new THREE.Color(1, 0.7, 0.3)); }
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
    this._animate(dt);

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
      const life = Math.max(0, bm.t / bm.life);
      const flick = 0.75 + 0.25 * Math.sin(this.t * 90 + i);
      bm.core.material.opacity = Math.min(1, life * 1.6) * flick;
      bm.glow.material.uniforms.uLife.value = life * flick;
      bm.glow.material.uniforms.uTime.value = this.t;
      const w = 0.4 + 0.6 * life;
      bm.core.scale.set(w, w, 1); bm.glow.scale.set(0.6 + life * 0.6, 0.6 + life * 0.6, 1);
      if (bm.t <= 0) {
        this.scene.remove(bm.grp);
        bm.core.geometry.dispose(); bm.core.material.dispose(); bm.glow.geometry.dispose(); bm.glow.material.dispose();
        this.beams.splice(i, 1);
      }
    }
    return hit;
  }

  _animate(dt) {
    const t = this.t;
    const flying = this.state !== 'parked' && this.state !== 'down';
    const spin = this.state === 'parked' ? 5 : this.state === 'down' ? 3 : 55;
    const blur = clamp((spin - 10) / 30, 0, 1);
    this.rotors.forEach((r, i) => { r.rotation.y += dt * spin * (i % 2 ? 1 : -1); r.visible = blur < 0.9; });
    this.blurs.forEach((d, i) => { d.material.uniforms.uSpin.value += dt * 9 * (i % 2 ? 1 : -1); d.material.uniforms.uAmt.value = blur; });
    // LED chase along the arms; red pulse when attacked
    const attacked = this.state === 'attacked';
    for (const l of this.ledMats) {
      const k = attacked ? (Math.sin(t * 16) > 0 ? 2.5 : 0.2) : 0.7 + 0.9 * Math.max(0, Math.sin(t * 4 - l.k * 1.2));
      l.m.color.copy(attacked ? new THREE.Color(0xff2020) : l.base).multiplyScalar(k);
    }
    this.strobe.material.opacity = (t % 1.2) < 0.06 ? 1 : 0;
    this.rec.visible = (t % 1) < 0.5;
    this.battLeds.forEach((l, i) => { l.visible = i < 3 || (t % 0.8) < 0.4; });
    this.coil.material.emissiveIntensity = 1.5 + Math.sin(t * 6) * 0.8;
    this.gimbal.rotation.set(-0.25 + Math.sin(t * 0.7) * 0.08, Math.sin(t * 0.5) * 0.4, 0);

    // searchlight sweeps ahead; dimmer on the pad, flickers when attacked, off when down
    const sweep = Math.sin(t * 0.6) * 0.45;
    this.spotTarget.position.set(Math.sin(sweep) * 40, this.state === 'parked' ? -40 : -26, Math.cos(sweep) * 40);
    let inten = this.state === 'parked' ? 260 : flying ? 750 : 0;
    if (attacked) inten *= Math.random() < 0.35 ? 0.1 : 1;
    this.spot.intensity = inten;
    this.group.updateMatrixWorld();
    const from = this.spot.getWorldPosition(new THREE.Vector3());
    const to = this.spotTarget.getWorldPosition(new THREE.Vector3());
    this.cone.position.copy(from);
    this.cone.lookAt(to);
    this.cone.material.uniforms.uOpacity.value = inten / 750 * 0.05;
    this.cone.material.uniforms.uTime.value = t;
    this.light.intensity = flying ? 40 : 15;
  }

  muzzleWorld(v = new THREE.Vector3()) { return this.muzzle.getWorldPosition(v); }

  fireBeam(to, color = 0xff2a6a) {
    const from = this.muzzleWorld();
    const dir = new THREE.Vector3().subVectors(to, from);
    const len = dir.length();
    const grp = new THREE.Group();
    const cg = new THREE.CylinderGeometry(0.13, 0.13, len, 8, 1, true);
    cg.translate(0, len / 2, 0); cg.rotateX(Math.PI / 2);
    const core = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.7).multiplyScalar(3), transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
    const gg = new THREE.CylinderGeometry(0.9, 0.9, len, 16, 1, true);
    gg.translate(0, len / 2, 0); gg.rotateX(Math.PI / 2);
    const glow = new THREE.Mesh(gg, laserGlowMaterial(color));
    core.userData.noAO = glow.userData.noAO = true;
    grp.add(core, glow);
    grp.position.copy(from);
    grp.lookAt(to);
    this.scene.add(grp);
    this.beams.push({ grp, core, glow, t: 0.6, life: 0.6 });
    if (this.beams.filter((b) => b.t > 0.55).length <= 1) fx.muzzle(from, new THREE.Color(color));
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

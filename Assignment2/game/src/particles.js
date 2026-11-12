// particles.js - GPU billboard particle pools (one draw call per pool) and
// procedural sprite textures. Used for sparks, embers, fire, smoke, dust and flashes.
import * as THREE from 'three';

// ------------------------------------------------------------ procedural textures
function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function glowTex(inner = 'rgba(255,255,255,1)', mid = 0.25, size = 64) {
  return canvasTex(size, (g, s) => {
    const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grd.addColorStop(0, inner);
    grd.addColorStop(mid, inner.replace(/[\d.]+\)$/, '0.55)'));
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, s, s);
  });
}

// soft puff with lumpy noise, white so it can be tinted
export function smokeTex(size = 128, seed = 7) {
  let a = seed;
  const rnd = () => { a = (a * 16807) % 2147483647; return a / 2147483647; };
  return canvasTex(size, (g, s) => {
    g.clearRect(0, 0, s, s);
    for (let k = 0; k < 26; k++) {
      const r = s * (0.12 + rnd() * 0.18);
      const ang = rnd() * Math.PI * 2, d = rnd() * s * 0.22;
      const x = s / 2 + Math.cos(ang) * d, y = s / 2 + Math.sin(ang) * d;
      const grd = g.createRadialGradient(x, y, 0, x, y, r);
      grd.addColorStop(0, 'rgba(255,255,255,0.22)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
  });
}

// flame tongue: hot core, soft edges, taller than wide
export function flameTex(size = 128) {
  return canvasTex(size, (g, s) => {
    const grd = g.createRadialGradient(s / 2, s * 0.62, 0, s / 2, s * 0.55, s * 0.48);
    grd.addColorStop(0, 'rgba(255,250,220,1)');
    grd.addColorStop(0.25, 'rgba(255,190,80,0.9)');
    grd.addColorStop(0.6, 'rgba(255,80,10,0.35)');
    grd.addColorStop(1, 'rgba(120,0,0,0)');
    g.fillStyle = grd;
    g.beginPath(); g.ellipse(s / 2, s * 0.55, s * 0.34, s * 0.46, 0, 0, Math.PI * 2); g.fill();
  });
}

// thin bright streak (sparks, rain splashes)
export function streakTex(size = 64) {
  return canvasTex(size, (g, s) => {
    const grd = g.createLinearGradient(0, 0, s, 0);
    grd.addColorStop(0, 'rgba(255,255,255,0)');
    grd.addColorStop(0.5, 'rgba(255,255,255,1)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, s * 0.42, s, s * 0.16);
    const v = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s * 0.5);
    v.addColorStop(0, 'rgba(255,255,255,0.6)'); v.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = v; g.fillRect(0, 0, s, s);
  });
}

// ------------------------------------------------------------ particle pool
const VERT = /* glsl */`
  attribute vec3 iPos; attribute vec4 iCol; attribute vec3 iSR;   // size, rotation, stretch
  uniform float uFogDensity;
  varying vec2 vUv; varying vec4 vCol; varying float vFog;
  void main(){
    vUv = uv; vCol = iCol;
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    float c = cos(iSR.y), s = sin(iSR.y);
    vec2 q = vec2(position.x * iSR.z, position.y);
    vec2 p = vec2(c * q.x - s * q.y, s * q.x + c * q.y) * iSR.x;
    vec4 mv = viewMatrix * vec4(iPos + right * p.x + up * p.y, 1.0);
    gl_Position = projectionMatrix * mv;
    float d = -mv.z;
    vFog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  }`;
const FRAG = /* glsl */`
  uniform sampler2D uMap; uniform vec3 uFogColor; uniform float uAdditive;
  varying vec2 vUv; varying vec4 vCol; varying float vFog;
  void main(){
    vec4 t = texture2D(uMap, vUv);
    vec4 c = t * vCol;
    if (c.a < 0.003) discard;
    if (uAdditive > 0.5) { c.rgb *= c.a * (1.0 - vFog); gl_FragColor = vec4(c.rgb, 1.0); }
    else { c.rgb = mix(c.rgb, uFogColor, vFog); gl_FragColor = c; }
    #include <colorspace_fragment>
  }`;

export class ParticlePool {
  constructor(scene, { max = 512, map, additive = true, renderOrder = 10 } = {}) {
    this.max = max;
    this.list = [];
    this.free = [];
    const base = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = base.index;
    geo.setAttribute('position', base.attributes.position);
    geo.setAttribute('uv', base.attributes.uv);
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aSR = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('iPos', this.aPos); geo.setAttribute('iCol', this.aCol); geo.setAttribute('iSR', this.aSR);
    geo.instanceCount = 0;
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e7);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: map }, uFogDensity: { value: 0 }, uFogColor: { value: new THREE.Color() }, uAdditive: { value: additive ? 1 : 0 } },
      vertexShader: VERT, fragmentShader: FRAG,
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = renderOrder;
    this.mesh.userData.noAO = true;
    this.geo = geo;
    scene.add(this.mesh);
    this.scale = 1;            // quality multiplier on spawn counts
  }

  // p: {x,y,z, vx,vy,vz, life, size, size1, r,g,b, a, a1, rot, vrot, drag, grav, stretch, fadeIn}
  spawn(p) {
    if (this.list.length >= this.max) return null;
    const q = this.free.pop() || {};
    q.x = p.x; q.y = p.y; q.z = p.z;
    q.vx = p.vx || 0; q.vy = p.vy || 0; q.vz = p.vz || 0;
    q.life = p.life || 1; q.age = 0;
    q.size = p.size || 1; q.size1 = p.size1 !== undefined ? p.size1 : q.size;
    q.r = p.r !== undefined ? p.r : 1; q.g = p.g !== undefined ? p.g : 1; q.b = p.b !== undefined ? p.b : 1;
    q.a = p.a !== undefined ? p.a : 1; q.a1 = p.a1 !== undefined ? p.a1 : 0;
    q.rot = p.rot || 0; q.vrot = p.vrot || 0;
    q.drag = p.drag || 0; q.grav = p.grav || 0; q.stretch = p.stretch || 1;
    q.fadeIn = p.fadeIn || 0; q.vstretch = !!p.vstretch;
    this.list.push(q);
    return q;
  }

  update(dt, fog, camera) {
    let rx = 1, ry = 0, rz = 0, ux = 0, uy = 1, uz = 0;
    if (camera) { const e = camera.matrixWorld.elements; rx = e[0]; ry = e[1]; rz = e[2]; ux = e[4]; uy = e[5]; uz = e[6]; }
    if (fog) { this.mat.uniforms.uFogDensity.value = fog.density; this.mat.uniforms.uFogColor.value.copy(fog.color); }
    const P = this.aPos.array, C = this.aCol.array, S = this.aSR.array;
    let n = 0;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const q = this.list[i];
      q.age += dt;
      if (q.age >= q.life) { this.list[i] = this.list[this.list.length - 1]; this.list.pop(); this.free.push(q); continue; }
      const k = Math.exp(-q.drag * dt);
      q.vx *= k; q.vy = q.vy * k - q.grav * dt; q.vz *= k;
      q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt;
      q.rot += q.vrot * dt;
      if (q.vstretch) q.rot = Math.atan2(q.vx * ux + q.vy * uy + q.vz * uz, q.vx * rx + q.vy * ry + q.vz * rz);
    }
    for (let i = 0; i < this.list.length; i++) {
      const q = this.list[i];
      const f = q.age / q.life;
      let a = q.a + (q.a1 - q.a) * f;
      if (q.fadeIn > 0 && q.age < q.fadeIn) a *= q.age / q.fadeIn;
      P[n * 3] = q.x; P[n * 3 + 1] = q.y; P[n * 3 + 2] = q.z;
      C[n * 4] = q.r; C[n * 4 + 1] = q.g; C[n * 4 + 2] = q.b; C[n * 4 + 3] = a;
      S[n * 3] = q.size + (q.size1 - q.size) * f; S[n * 3 + 1] = q.rot; S[n * 3 + 2] = q.stretch;
      n++;
    }
    this.geo.instanceCount = n;
    this.aPos.needsUpdate = this.aCol.needsUpdate = this.aSR.needsUpdate = true;
    if (n > 0) { this.aPos.addUpdateRange(0, n * 3); this.aCol.addUpdateRange(0, n * 4); this.aSR.addUpdateRange(0, n * 3); }
  }

  clear() { while (this.list.length) this.free.push(this.list.pop()); this.geo.instanceCount = 0; }
}

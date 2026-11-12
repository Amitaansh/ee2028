// characters.js - GPU-instanced skinned characters (Quaternius, CC0).
// Animations are pre-baked by tools/bake-characters.mjs into a float texture of bone
// matrices (frames x bones x 3 rows). Every character of one model is one draw call:
// the vertex shader picks two frames per instance, blends them and skins the vertex.
import * as THREE from 'three';
import { NOISE_GLSL } from './world.js';

export function decodeCharacter(u8) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  const hl = dv.getUint32(0, true);
  const header = JSON.parse(new TextDecoder().decode(u8.subarray(4, 4 + hl)));
  let off = u8.byteOffset + 4 + ((hl + 3) & ~3);
  const buf = u8.buffer;
  const take = (Type, n) => { const a = new Type(buf.slice(off, off + n * Type.BYTES_PER_ELEMENT)); off += (n * Type.BYTES_PER_ELEMENT + 3) & ~3; return a; };
  const nV = header.vertices;
  const pos = take(Float32Array, nV * 3), nor = take(Float32Array, nV * 3);
  const si = take(Uint8Array, nV * 4), sw = take(Uint8Array, nV * 4), mat = take(Uint8Array, nV);
  const ind = take(header.index32 ? Uint32Array : Uint16Array, header.indices);
  const bones = take(Float32Array, header.frames * header.bones * 12);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4, true));
  g.setAttribute('aMat', new THREE.BufferAttribute(mat, 1));
  g.setIndex(new THREE.BufferAttribute(ind, 1));
  // 3 texels (rows) per bone, one texture row per frame
  const tex = new THREE.DataTexture(bones, header.bones * 3, header.frames, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return { header, geometry: g, boneTex: tex };
}

// mats: { glow: [names that glow red], tint: [names tinted per instance], skin: [names] }
export class Crowd {
  constructor(scene, model, count, { glow = [], tint = [], glowColor = 0xff2010, glowStrength = 4, roughness = 0.82 } = {}) {
    this.model = model;
    this.h = model.header;
    this.count = count;
    const geo = model.geometry.clone();
    this.aAnim = new THREE.InstancedBufferAttribute(new Float32Array(count * 4), 4).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aAnim', this.aAnim);
    const names = this.h.materials;
    const pal = names.map((_, i) => new THREE.Vector3(...this.h.palette[i]));
    while (pal.length < 8) pal.push(new THREE.Vector3(1, 1, 1));
    const flags = names.map((n) => new THREE.Vector2(tint.includes(n) ? 1 : 0, glow.includes(n) ? 1 : 0));
    while (flags.length < 8) flags.push(new THREE.Vector2());
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness, metalness: 0.0 });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uBones = { value: model.boneTex };
      sh.uniforms.uPal = { value: pal };
      sh.uniforms.uFlags = { value: flags };
      sh.uniforms.uTime = { value: 0 };
      sh.uniforms.uGlow = { value: new THREE.Color(glowColor).multiplyScalar(glowStrength) };
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
          attribute vec4 skinIndex; attribute vec4 skinWeight; attribute float aMat; attribute vec4 aAnim;
          uniform highp sampler2D uBones; uniform vec3 uPal[8]; uniform vec2 uFlags[8];
          varying vec3 vCCol; varying float vCGlow; varying float vCBurn; varying vec3 vCLoc;
          mat4 cBone(int f, float b){ int x = int(b) * 3;
            vec4 r0 = texelFetch(uBones, ivec2(x, f), 0), r1 = texelFetch(uBones, ivec2(x + 1, f), 0), r2 = texelFetch(uBones, ivec2(x + 2, f), 0);
            return mat4(r0.x, r1.x, r2.x, 0.0, r0.y, r1.y, r2.y, 0.0, r0.z, r1.z, r2.z, 0.0, r0.w, r1.w, r2.w, 1.0); }
          mat4 cSkin(int f){ return cBone(f, skinIndex.x) * skinWeight.x + cBone(f, skinIndex.y) * skinWeight.y + cBone(f, skinIndex.z) * skinWeight.z + cBone(f, skinIndex.w) * skinWeight.w; }`)
        .replace('#include <beginnormal_vertex>', `
          mat4 cS = cSkin(int(aAnim.x)) * (1.0 - fract(aAnim.z)) + cSkin(int(aAnim.y)) * fract(aAnim.z);
          vec3 objectNormal = normalize(mat3(cS) * normal);
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif`)
        .replace('#include <begin_vertex>', `vec3 transformed = (cS * vec4(position, 1.0)).xyz;
          int cm = int(aMat + 0.5);
          vCCol = uPal[cm];
          #ifdef USE_INSTANCING_COLOR
            vCCol = mix(vCCol, vCCol * instanceColor * 2.2, uFlags[cm].x);
          #endif
          vCGlow = uFlags[cm].y; vCBurn = aAnim.w; vCLoc = transformed;`)
        .replace('#include <color_vertex>', '');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform float uTime; uniform vec3 uGlow; varying vec3 vCCol; varying float vCGlow; varying float vCBurn; varying vec3 vCLoc;
          ${NOISE_GLSL}`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          diffuseColor.rgb = vCCol * (0.85 + 0.3 * zdN3(vCLoc * 7.0));
          diffuseColor.rgb *= 1.0 - 0.9 * smoothstep(0.0, 0.6, vCBurn);`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          totalEmissiveRadiance += uGlow * vCGlow * (1.0 - vCBurn) * (0.75 + 0.25 * sin(uTime * 3.0 + vCLoc.x * 5.0));
          if (vCBurn > 0.0) {
            float cr = zdN3(vCLoc * 9.0 + vec3(0.0, -uTime * 2.0, 0.0));
            float g = smoothstep(0.45, 0.8, cr) * (1.0 - smoothstep(0.7, 1.0, vCBurn)) * smoothstep(0.0, 0.15, vCBurn);
            totalEmissiveRadiance += vec3(1.0, 0.36, 0.06) * g * 5.0;
          }`);
      this.shader = sh;
    };
    this.mesh = new THREE.InstancedMesh(geo, mat, count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    scene.add(this.mesh);
  }

  clip(name) { return this.h.clips[name]; }

  // clip: name, t: seconds into the clip, loop: wrap or hold the last frame, burn 0..1
  setAnim(i, name, t, loop = true, burn = 0) {
    const c = this.h.clips[name];
    let f = t * this.h.fps;
    if (loop) f = ((f % (c.count - 1)) + (c.count - 1)) % (c.count - 1);
    else f = Math.min(f, c.count - 1.001);
    const a = Math.floor(f), b = loop ? (a + 1) % (c.count - 1) : Math.min(a + 1, c.count - 1);
    const A = this.aAnim.array;
    A[i * 4] = c.start + a; A[i * 4 + 1] = c.start + b; A[i * 4 + 2] = f - a; A[i * 4 + 3] = burn;
  }

  setMatrix(i, m) { this.mesh.setMatrixAt(i, m); }
  setTint(i, c) { this.mesh.setColorAt(i, c); }

  commit(t) {
    this.mesh.instanceMatrix.needsUpdate = true;
    this.aAnim.needsUpdate = true;
    if (this.shader) this.shader.uniforms.uTime.value = t;
  }
}

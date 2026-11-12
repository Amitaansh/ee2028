// props.js - Quaternius vehicles and street props (CC0), baked by tools/bake-props.mjs.
// Material flags per palette entry: 0 plain, 1 paint (tinted per instance), 2 glass, 3 light, 4 blinking light.
import * as THREE from 'three';
import propsBin from '../assets/props.bin';

let cache = null;
export function loadProps() {
  if (cache) return cache;
  const u8 = propsBin;
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  const hl = dv.getUint32(0, true);
  const header = JSON.parse(new TextDecoder().decode(u8.subarray(4, 4 + hl)));
  const base = 4 + ((hl + 3) & ~3);
  const view = (Type, off, n) => new Type(u8.buffer.slice(u8.byteOffset + base + off, u8.byteOffset + base + off + n * Type.BYTES_PER_ELEMENT));
  cache = {};
  for (const m of header.models) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(view(Float32Array, m.pos, m.vertices * 3), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(view(Int8Array, m.nor, m.vertices * 3), 3, true));
    g.setAttribute('aMat', new THREE.BufferAttribute(view(Uint8Array, m.mat, m.vertices), 1));
    g.setIndex(new THREE.BufferAttribute(view(m.index32 ? Uint32Array : Uint16Array, m.idx, m.indices), 1));
    g.computeBoundingSphere();
    cache[m.name] = { ...m, geometry: g };
  }
  return cache;
}

export function propMaterial(model, { roughness = 0.5, metalness = 0.35 } = {}) {
  const pal = model.palette.map((c) => new THREE.Vector3(...c));
  while (pal.length < 8) pal.push(new THREE.Vector3(1, 1, 1));
  const fl = model.flags.slice(); while (fl.length < 8) fl.push(0);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness, metalness });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uPal = { value: pal };
    sh.uniforms.uFl = { value: fl };
    sh.uniforms.uTime = { value: 0 };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float aMat; uniform vec3 uPal[8]; uniform float uFl[8];
        varying vec3 vPCol; varying float vPFl; varying vec3 vPLoc; varying float vPSeed; varying float vPBurnt;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        int pm = int(aMat + 0.5);
        vPCol = uPal[pm]; vPFl = uFl[pm]; vPLoc = position; vPSeed = 0.0; vPBurnt = 0.0;
        #ifdef USE_INSTANCING_COLOR
          if (vPFl > 0.5 && vPFl < 1.5) vPCol = instanceColor;
          vPBurnt = step(dot(instanceColor, vec3(0.333)), 0.03);
        #endif
        #ifdef USE_INSTANCING
          vPSeed = fract(instanceMatrix[3].x * 0.137 + instanceMatrix[3].z * 0.311);
        #endif`)
      .replace('#include <color_vertex>', '');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uTime; varying vec3 vPCol; varying float vPFl; varying vec3 vPLoc; varying float vPSeed; varying float vPBurnt;`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        diffuseColor.rgb = vPCol;
        if (vPBurnt > 0.5) diffuseColor.rgb = mix(vec3(0.03, 0.025, 0.02), vec3(0.12, 0.05, 0.02), step(0.6, fract(sin(dot(floor(vPLoc * 3.0), vec3(12.9, 78.2, 37.7))) * 43758.5)));`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        if (vPFl > 1.5 && vPFl < 2.5) roughnessFactor = 0.06;
        if (vPFl > 0.5 && vPFl < 1.5) roughnessFactor = 0.32;
        if (vPBurnt > 0.5) roughnessFactor = 0.95;`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        if (vPFl > 1.5 && vPFl < 2.5) metalnessFactor = 0.7;
        if (vPBurnt > 0.5) metalnessFactor = 0.1;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        if (vPBurnt < 0.5) {
          if (vPFl > 2.5 && vPFl < 3.5) totalEmissiveRadiance += vPCol * 0.35;
          if (vPFl > 3.5) {
            // blinking: police bar alternates left / right, others pulse
            float ph = uTime * 6.0 + vPSeed * 40.0;
            float on = step(0.0, sin(ph + (vPLoc.x > 0.0 ? 3.1416 : 0.0)));
            totalEmissiveRadiance += vPCol * 7.0 * on;
          }
        }`);
    mat.userData.shader = sh;
  };
  return mat;
}

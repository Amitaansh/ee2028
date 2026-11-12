// textures.js - embedded CC0 texture sets (Poly Haven), decoded at start-up.
// Facades: one vertical strip of 4 layers (brick, concrete, plaster, shutter) -> a texture array.
// Normal maps are packed as RG = normal XY (OpenGL convention), B = roughness.
import * as THREE from 'three';
import facAlbUrl from '../assets/facades_albedo.jpg';
import facNrmUrl from '../assets/facades_nrm_rough.jpg';
import aspAlbUrl from '../assets/asphalt_albedo.jpg';
import aspNrmUrl from '../assets/asphalt_nrm_rough.jpg';

export const FACADE_LAYERS = { brick: 0, concrete: 1, plaster: 2, shutter: 3 };

function loadImage(url) {
  return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
}

function placeholderArray(layers, rgb) {
  const d = new Uint8Array(4 * layers);
  for (let i = 0; i < layers; i++) d.set([...rgb, 255], i * 4);
  const t = new THREE.DataArrayTexture(d, 1, 1, layers);
  t.needsUpdate = true;
  return t;
}

// returns a uniform whose value switches from a flat placeholder to the real texture once decoded
function arrayTexture(url, layers, srgb, renderer) {
  const u = { value: placeholderArray(layers, srgb ? [140, 140, 140] : [128, 128, 200]) };
  loadImage(url).then((img) => {
    const w = img.width, h = img.height / layers;
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(img, 0, 0);
    const data = new Uint8Array(g.getImageData(0, 0, c.width, c.height).data.buffer);
    const t = new THREE.DataArrayTexture(data, w, h, layers);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter;
    t.generateMipmaps = true;
    t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.needsUpdate = true;
    u.value = t;
  }).catch((e) => console.warn('[ZD] facade textures not loaded, using flat walls:', e));
  return u;
}

function texture2D(url, srgb, renderer, fallback) {
  const u = { value: fallback };
  new THREE.TextureLoader().load(url, (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    u.value = t;
  }, undefined, (e) => console.warn('[ZD] asphalt texture not loaded:', e));
  return u;
}

export function facadeTextures(renderer) {
  return { alb: arrayTexture(facAlbUrl, 4, true, renderer), nrm: arrayTexture(facNrmUrl, 4, false, renderer) };
}

export function asphaltTextures(renderer) {
  const flat = (rgb) => { const t = new THREE.DataTexture(new Uint8Array([...rgb, 255]), 1, 1); t.needsUpdate = true; return t; };
  return { alb: texture2D(aspAlbUrl, true, renderer, flat([128, 128, 128])), nrm: texture2D(aspNrmUrl, false, renderer, flat([128, 128, 160])) };
}

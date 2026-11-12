// gfx.js - renderer quality presets and the post-processing chain:
// RenderPass (MSAA on High) -> bloom -> tone mapping
// -> final grade (vignette, film grain, chromatic aberration, hit / attack / lightning tint) -> SMAA (Low)
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
// (Screen-space AO was tried and removed: GTAO left a dotted noise pattern on lit windows.
//  Corner / street-level darkening is done in the building shader instead.)

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) },
    uGrain: { value: 0.035 }, uAberr: { value: 0 }, uFlash: { value: 0 }, uAttack: { value: 0 }, uLost: { value: 0 }, uHit: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uGrain, uAberr, uFlash, uAttack, uLost, uHit; uniform vec2 uRes;
    varying vec2 vUv;
    float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }
    void main(){
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      float ab = (0.0018 + uAberr * 0.02) * r2 * 2.2;
      vec3 col = vec3(texture2D(tDiffuse, vUv + d * ab).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - d * ab).b);
      // lightning: cold lift of the whole frame
      col += uFlash * (0.08 + col * 0.6) * vec3(0.75, 0.82, 1.0);
      // attacked: pulsing red grade
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      float pulse = 0.65 + 0.35 * sin(uTime * 8.0);
      col = mix(col, vec3(lum) * vec3(1.35, 0.42, 0.38), uAttack * 0.5 * pulse);
      col = mix(col, vec3(lum * 0.8), uLost);
      // vignette (also darkens corners for the HUD panels)
      col *= mix(1.0, 0.42, smoothstep(0.08, 0.62, r2 * 1.35));
      // red edges on hit / while attacked
      float edge = smoothstep(0.12, 0.5, r2);
      col += vec3(0.9, 0.04, 0.03) * edge * (uHit + uAttack * 0.35 * pulse);
      // film grain
      float n = hash(vUv * uRes + fract(uTime * 7.13) * 91.7) - 0.5;
      col += n * uGrain * (0.5 + 0.5 * min(lum, 1.0));
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

export const QUALITY = {
  high: { label: 'HIGH', ratioMax: 1.5, msaa: 4, smaa: false, shadows: true, shadowSize: 2048, particles: 1, rain: 1 },
  low: { label: 'LOW', ratioMax: 1, msaa: 0, smaa: true, shadows: false, shadowSize: 1024, particles: 0.4, rain: 0.35 },
};

export class Gfx {
  constructor(renderer, scene, camera) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const w = window.innerWidth, h = window.innerHeight;
    const rt = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(renderer, rt);
    this.renderPass = new RenderPass(scene, camera);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.8, 0.55, 0.78);
    this.output = new OutputPass();
    this.final = new ShaderPass(FinalShader);
    this.smaa = new SMAAPass(w, h);
    for (const p of [this.renderPass, this.bloom, this.output, this.final, this.smaa]) this.composer.addPass(p);

    this.hit = 0; this.flashT = 0;
    this.quality = null;
    this.fpsAcc = 0; this.fpsN = 0; this.lowStreak = 0;
    window.addEventListener('resize', () => this.resize());
  }

  setQuality(name) {
    const q = QUALITY[name] || QUALITY.high;
    this.quality = name in QUALITY ? name : 'high';
    this.q = q;
    const ratio = Math.min(window.devicePixelRatio || 1, q.ratioMax);
    this.renderer.setPixelRatio(ratio);
    this.composer.setPixelRatio(ratio);
    for (const rt of [this.composer.renderTarget1, this.composer.renderTarget2]) {
      if (rt.samples !== q.msaa) { rt.samples = q.msaa; rt.dispose(); }
    }
    this.smaa.enabled = q.smaa;
    this.resize();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    const pr = this.renderer.getPixelRatio();
    this.final.uniforms.uRes.value.set(w * pr, h * pr);
  }

  // feed per-frame state, returns 'low' once if Auto should step down
  render(dt, t, s) {
    const u = this.final.uniforms;
    u.uTime.value = t;
    u.uFlash.value = s.flash || 0;
    u.uAberr.value = Math.min(1, (s.shake || 0) * 0.6);
    u.uAttack.value += ((s.attack ? 1 : 0) - u.uAttack.value) * Math.min(1, dt * 4);
    u.uLost.value += ((s.lost ? 1 : 0) - u.uLost.value) * Math.min(1, dt * 2);
    this.hit = Math.max(0, this.hit - dt * 3.5);
    u.uHit.value = this.hit;
    this.bloom.enabled = s.bloom !== false;
    this.composer.render(dt);
  }

  // Auto quality: true when the frame rate stayed low for ~3 s on High
  shouldDropToLow(dt) {
    if (this.quality !== 'high' || dt <= 0) return false;
    this.fpsAcc += dt; this.fpsN++;
    if (this.fpsAcc < 1) return false;
    const fps = this.fpsN / this.fpsAcc;
    this.fpsAcc = 0; this.fpsN = 0;
    this.lowStreak = fps < 42 ? this.lowStreak + 1 : 0;
    return this.lowStreak >= 3;
  }
}

// Bake Quaternius animated characters (CC0) into compact binaries for GPU-instanced skinning.
//   node tools/bake-characters.mjs
// Input : assets_src/quaternius/<Name>.gltf  (Ultimate Animated Character Pack, glTF)
// Output: assets/<name>.bin  = [u32 headerLen][header JSON][padding to 4][arrays...]
// Each frame stores, per bone, the first 3 rows of one matrix that already folds in the
// bind matrix, the mesh's world transform and a normalisation to a fixed height, so the
// shader only does  p = sum(w_i * M_i) * position.
import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// three's FileLoader (used for the embedded base64 buffers) expects these browser globals
globalThis.ProgressEvent ??= class ProgressEvent extends Event { constructor(t, o = {}) { super(t); Object.assign(this, o); } };
globalThis.self ??= globalThis;

const FPS = 30;
const TARGET_HEIGHT = 1.87;        // same height as the old procedural zombie (game scales it 2.1 to 2.7)

const JOBS = [
  { src: 'Zombie_Male', out: 'zombie_male', clips: ['Idle', 'Walk', 'Run', 'Punch', 'Death', 'RecieveHit'] },
  { src: 'Zombie_Female', out: 'zombie_female', clips: ['Idle', 'Walk', 'Run', 'Punch', 'Death', 'RecieveHit'] },
  { src: 'Worker_Male', out: 'survivor_worker', clips: ['Idle', 'Victory', 'SitDown'] },
  { src: 'Soldier_Male', out: 'survivor_soldier', clips: ['Idle', 'Victory', 'Shoot_OneHanded'] },
];

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

function parse(file) {
  const text = fs.readFileSync(file, 'utf8');
  return new Promise((res, rej) => new GLTFLoader().parse(text, '', res, rej));
}

for (const job of JOBS) {
  const gltf = await parse(path.join(root, 'assets_src/quaternius', job.src + '.gltf'));
  const scene = gltf.scene;
  scene.updateMatrixWorld(true);
  const meshes = [];
  scene.traverse((o) => { if (o.isSkinnedMesh) meshes.push(o); });
  const skeleton = meshes[0].skeleton;
  const mesh0 = meshes[0];
  // all primitives share one skeleton and one bind matrix
  for (const m of meshes) if (m.skeleton !== skeleton) throw new Error('skeleton mismatch in ' + job.src);

  // merged geometry with a material index per vertex
  const palette = [], matNames = [];
  const geos = meshes.map((m) => {
    const g = m.geometry.clone();
    let mi = matNames.indexOf(m.material.name);
    if (mi < 0) { mi = matNames.length; matNames.push(m.material.name); palette.push(m.material.color.toArray()); }
    const n = g.attributes.position.count;
    g.setAttribute('aMat', new THREE.BufferAttribute(new Uint8Array(n).fill(mi), 1));
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'skinIndex', 'skinWeight', 'aMat'].includes(k)) g.deleteAttribute(k);
    return g;
  });
  const geo = mergeGeometries(geos);
  const nV = geo.attributes.position.count, idx = geo.index.array;

  // per-bone static part: meshWorld * bindMatrixInverse * (bone.matrixWorld * boneInverse) * bindMatrix
  const meshWorld = mesh0.matrixWorld.clone();
  const bindM = mesh0.bindMatrix.clone(), bindI = mesh0.bindMatrixInverse.clone();
  const nB = skeleton.bones.length;

  const mixer = new THREE.AnimationMixer(scene);
  const frames = [];   // Float32Array(nB*12) per frame
  const clipInfo = {};
  const tmp = new THREE.Matrix4(), M = new THREE.Matrix4();
  const sample = () => {
    scene.updateMatrixWorld(true);
    const out = new Float32Array(nB * 12);
    for (let b = 0; b < nB; b++) {
      tmp.multiplyMatrices(skeleton.bones[b].matrixWorld, skeleton.boneInverses[b]);
      M.copy(meshWorld).multiply(bindI).multiply(tmp).multiply(bindM);
      const e = M.elements;     // column-major
      // rows 0..2
      out.set([e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14]], b * 12);
    }
    return out;
  };
  for (const name of job.clips) {
    const clip = gltf.animations.find((c) => c.name === name);
    if (!clip) throw new Error(`${job.src}: no clip ${name}`);
    mixer.stopAllAction();
    const act = mixer.clipAction(clip); act.reset(); act.play();
    const count = Math.max(2, Math.round(clip.duration * FPS) + 1);
    const start = frames.length;
    for (let f = 0; f < count; f++) { mixer.setTime(Math.min(clip.duration, f / FPS)); frames.push(sample()); }
    act.stop();
    clipInfo[name] = { start, count, duration: clip.duration };
  }

  // normalise height (feet on the ground) using the first Idle frame
  const f0 = frames[clipInfo[job.clips[0]].start];
  const P = geo.attributes.position, SI = geo.attributes.skinIndex, SW = geo.attributes.skinWeight;
  let minY = Infinity, maxY = -Infinity;
  const v = new THREE.Vector3();
  for (let i = 0; i < nV; i++) {
    let y = 0;
    for (let k = 0; k < 4; k++) {
      const w = SW.getComponent(i, k); if (!w) continue;
      const b = SI.getComponent(i, k), o = b * 12;
      v.fromBufferAttribute(P, i);
      y += w * (f0[o + 4] * v.x + f0[o + 5] * v.y + f0[o + 6] * v.z + f0[o + 7]);
    }
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  }
  const s = TARGET_HEIGHT / (maxY - minY);
  for (const fr of frames) for (let b = 0; b < nB; b++) {
    const o = b * 12;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) fr[o + r * 4 + c] *= s;
    fr[o + 7] -= minY * s;           // row 1, translation
  }

  // pack
  const header = { name: job.out, source: `Quaternius Ultimate Animated Character Pack: ${job.src} (CC0)`, fps: FPS, vertices: nV, indices: idx.length, bones: nB, frames: frames.length, clips: clipInfo, palette, materials: matNames };
  const parts = [];
  const pos = new Float32Array(P.array), nor = new Float32Array(geo.attributes.normal.array);
  const si = new Uint8Array(nV * 4), sw = new Uint8Array(nV * 4);
  for (let i = 0; i < nV; i++) for (let k = 0; k < 4; k++) { si[i * 4 + k] = SI.getComponent(i, k); sw[i * 4 + k] = Math.round(SW.getComponent(i, k) * 255); }
  const mat = new Uint8Array(geo.attributes.aMat.array);
  const ind = nV < 65536 ? new Uint16Array(idx) : new Uint32Array(idx);
  header.index32 = !(ind instanceof Uint16Array);
  const bones = new Float32Array(frames.length * nB * 12);
  frames.forEach((fr, i) => bones.set(fr, i * nB * 12));
  parts.push(pos, nor, si, sw, mat, ind, bones);
  header.layout = ['position f32x3', 'normal f32x3', 'skinIndex u8x4', 'skinWeight u8x4', 'aMat u8', header.index32 ? 'index u32' : 'index u16', 'bones f32 (frames x bones x 12)'];

  const hj = Buffer.from(JSON.stringify(header));
  const chunks = [];
  const align = (n) => (n + 3) & ~3;
  let size = 4 + align(hj.length);
  for (const p of parts) size += align(p.byteLength);
  const buf = Buffer.alloc(size);
  buf.writeUInt32LE(hj.length, 0); hj.copy(buf, 4);
  let off = 4 + align(hj.length);
  for (const p of parts) { Buffer.from(p.buffer, p.byteOffset, p.byteLength).copy(buf, off); off += align(p.byteLength); }
  fs.writeFileSync(path.join(root, 'assets', job.out + '.bin'), buf);
  console.log(`${job.out}: ${nV} verts, ${idx.length / 3} tris, ${nB} bones, ${frames.length} frames, ${(size / 1024).toFixed(0)} KB, materials ${matNames.join('/')}`);
}

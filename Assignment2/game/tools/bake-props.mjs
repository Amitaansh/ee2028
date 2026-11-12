// Bake Quaternius vehicle / street props (CC0, OBJ + MTL) into one compact binary.
//   node tools/bake-props.mjs   ->  assets/props.bin
// Every model is re-oriented (long axis = +Z), put on the ground, centred and scaled to a
// real size. Each vertex keeps a material index; the palette has a flag per material:
// 0 plain, 1 paint (tinted per instance), 2 glass, 3 light, 4 blinking light.
import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const src = path.join(root, 'assets_src/quaternius_props');

// colours for the transport pack (its MTL files leave every Kd at 0.64) and flags by name
const NAMED = {
  Bumper: [0.06, 0.06, 0.065], Bottom: [0.04, 0.04, 0.045], Details: [0.03, 0.03, 0.035], Wheel: [0.02, 0.02, 0.02],
  Material: [0.55, 0.55, 0.55], Top: [0.6, 0.6, 0.6], Yellow: [0.75, 0.5, 0.03], Red: [0.6, 0.04, 0.03],
  Orange: [0.85, 0.22, 0.02], TrafficLight: [0.05, 0.05, 0.055], Green: [0.04, 0.6, 0.12],
  Lights: [0.9, 0.8, 0.6],
};
const PAINT = new Set(['Blue', 'White', 'Orange', 'DarkOrange', 'LightBlue', 'Material.007', 'Material', 'Top']);
const GLASS = new Set(['Windows']);
const LIGHT = new Set(['Headlights', 'TailLights', 'Lights', 'WhiteLights']);
const BLINK = new Set(['BlueLights']);

// name, file, target length (m) along the long axis, or height for upright props, paint allowed
const MODELS = [
  { name: 'car1', file: 'NormalCar1', len: 4.4 },
  { name: 'car2', file: 'NormalCar2', len: 4.1 },
  { name: 'suv', file: 'SUV', len: 4.7 },
  { name: 'sports', file: 'SportsCar', len: 4.4 },
  { name: 'cop', file: 'Cop', len: 4.6, noPaint: true },
  { name: 'ambulance', file: 'Ambulance', len: 5.6, noPaint: true, blink: ['Red'] },
  { name: 'bus', file: 'Bus', len: 8.6 },
  { name: 'schoolbus', file: 'SchoolBus', len: 9.0, noPaint: true },
  { name: 'trafficlight', file: 'TrafficLight', height: 5.8, upright: true, noPaint: true, blink: ['Yellow'], dark: ['Red', 'Green'] },
  { name: 'cone', file: 'TrafficCone', height: 0.85, upright: true, noPaint: true },
];

function readMtl(file) {
  const out = {}; let cur = null;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const p = line.trim().split(/\s+/);
    if (p[0] === 'newmtl') cur = p[1];
    else if (p[0] === 'Kd' && cur) out[cur] = p.slice(1, 4).map(Number);
  }
  return out;
}

const header = { source: 'Quaternius Cars Pack + Public Transport Pack (CC0)', models: [] };
const blobs = [];
let offset = 0;
const push = (arr) => { const b = Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength); const pad = (4 - (b.length % 4)) % 4; blobs.push(b, Buffer.alloc(pad)); const o = offset; offset += b.length + pad; return o; };

for (const M of MODELS) {
  const kd = readMtl(path.join(src, M.file + '.mtl'));
  const obj = new OBJLoader().parse(fs.readFileSync(path.join(src, M.file + '.obj'), 'utf8'));
  const names = [], palette = [], flags = [];
  const pos = [], nor = [], mat = [];
  obj.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    const groups = g.groups.length ? g.groups : [{ start: 0, count: g.attributes.position.count, materialIndex: 0 }];
    for (const gr of groups) {
      const mn = mats[gr.materialIndex].name;
      let mi = names.indexOf(mn);
      if (mi < 0) {
        mi = names.length; names.push(mn);
        let c = kd[mn] || [0.6, 0.6, 0.6];
        if (Math.abs(c[0] - 0.64) < 0.002 && Math.abs(c[1] - 0.64) < 0.002) c = NAMED[mn] || (mn === 'White' ? [0.7, 0.7, 0.7] : mn === 'Windows' ? [0.02, 0.025, 0.03] : mn === 'Grey' ? [0.22, 0.22, 0.23] : c);
        let f = 0;
        if (PAINT.has(mn) && !M.noPaint) f = 1;
        if (GLASS.has(mn)) f = 2;
        if (LIGHT.has(mn)) f = 3;
        if (BLINK.has(mn) || (M.blink || []).includes(mn)) f = 4;
        if ((M.dark || []).includes(mn)) { c = c.map((v) => v * 0.25); f = 0; }
        palette.push(c); flags.push(f);
      }
      for (let i = gr.start; i < gr.start + gr.count; i++) {
        pos.push(g.attributes.position.getX(i), g.attributes.position.getY(i), g.attributes.position.getZ(i));
        nor.push(g.attributes.normal.getX(i), g.attributes.normal.getY(i), g.attributes.normal.getZ(i));
        mat.push(mi);
      }
    }
  });
  let geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('aMat', new THREE.Float32BufferAttribute(mat, 1));
  geo.computeBoundingBox();
  let bb = geo.boundingBox, size = new THREE.Vector3(); bb.getSize(size);
  if (!M.upright && size.x > size.z) { geo.rotateY(Math.PI / 2); geo.computeBoundingBox(); bb = geo.boundingBox; bb.getSize(size); }
  const s = M.upright ? M.height / size.y : M.len / size.z;
  const c = new THREE.Vector3(); bb.getCenter(c);
  geo.translate(-c.x, -bb.min.y, -c.z);
  geo.scale(s, s, s);
  geo = mergeVertices(geo, 1e-4);
  geo.computeBoundingBox(); geo.boundingBox.getSize(size);
  const P = new Float32Array(geo.attributes.position.array), Nn = new Int8Array(geo.attributes.normal.count * 3);
  for (let i = 0; i < Nn.length; i++) Nn[i] = Math.round(Math.max(-1, Math.min(1, geo.attributes.normal.array[i])) * 127);
  const A = new Uint8Array(geo.attributes.aMat.array);
  const I = geo.attributes.position.count < 65536 ? new Uint16Array(geo.index.array) : new Uint32Array(geo.index.array);
  const entry = { name: M.name, vertices: P.length / 3, indices: I.length, index32: !(I instanceof Uint16Array), size: size.toArray().map((v) => +v.toFixed(3)), materials: names, palette, flags };
  entry.pos = push(P); entry.nor = push(Nn); entry.mat = push(A); entry.idx = push(I);
  header.models.push(entry);
  console.log(`${M.name}: ${entry.vertices} verts, ${I.length / 3} tris, size ${entry.size.join(' x ')} m, mats ${names.map((n, i) => n + ':' + flags[i]).join(' ')}`);
}
const hj = Buffer.from(JSON.stringify(header));
const hpad = (4 - (hj.length % 4)) % 4;
const head = Buffer.alloc(4); head.writeUInt32LE(hj.length, 0);
const out = Buffer.concat([head, hj, Buffer.alloc(hpad), ...blobs]);
fs.writeFileSync(path.join(root, 'assets/props.bin'), out);
console.log(`props.bin ${(out.length / 1024).toFixed(0)} KB`);

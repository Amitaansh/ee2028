// Rebuild dist/game.js from src/ (needs Node.js):  npm install  then  node build.mjs
import { build } from 'esbuild';
await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  minify: true,
  sourcemap: false,
  target: ['chrome110'],
  outfile: 'dist/game.js',
  legalComments: 'eof',
  loader: { '.bin': 'binary', '.jpg': 'dataurl' },        // baked CC0 character data (tools/bake-characters.mjs) embedded in the bundle
});
console.log('built dist/game.js');

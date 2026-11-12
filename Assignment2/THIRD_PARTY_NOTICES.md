# Third-party code used in this project

## Core/Src/vl53l0x.c: register sequence ported from the Pololu VL53L0X Arduino library
https://github.com/pololu/vl53l0x-arduino

```
Copyright (c) 2017-2022 Pololu Corporation.  For more information, see

https://www.pololu.com/
https://forum.pololu.com/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

=================================================================

Most of the functionality of this library is based on the VL53L0X
API provided by ST (STSW-IMG005), and some of the explanatory
comments are quoted or paraphrased from the API source code, API
user manual (UM2039), and the VL53L0X datasheet.

The following applies to source code reproduced or derived from
the API:

-----------------------------------------------------------------

Copyright © 2016, STMicroelectronics International N.V.  All
rights reserved.

Redistribution and use in source and binary forms, with or
without modification, are permitted provided that the following
conditions are met:
* Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following
disclaimer in the documentation and/or other materials provided
with the distribution.
* Neither the name of STMicroelectronics nor the
names of its contributors may be used to endorse or promote
products derived from this software without specific prior
written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS ARE DISCLAIMED.
IN NO EVENT SHALL STMICROELECTRONICS INTERNATIONAL N.V. BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.

-----------------------------------------------------------------
```

## Core/Src/oled.c: 5x7 font table from the Adafruit GFX Library (glcdfont.c)
https://github.com/adafruit/Adafruit-GFX-Library

```
Software License Agreement (BSD License)

Copyright (c) 2012 Adafruit Industries.  All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
```

## game/dist/game.js: bundles three.js r170 (MIT, Copyright 2010-2024 Three.js Authors)
https://github.com/mrdoob/three.js

## game/assets: 3D models and textures (all CC0 1.0, public domain; credit not required)
CC0 1.0 Universal: https://creativecommons.org/publicdomain/zero/1.0/
Baked into compact binaries by `game/tools/bake-characters.mjs` and `game/tools/bake-props.mjs`; the source files are in `game/assets_src/`.

- Characters by Quaternius, Ultimate Animated Character Pack: Zombie_Male, Zombie_Female, Worker_Male, Soldier_Male (glTF, with animations).
  https://quaternius.com/packs/ultimatedanimatedcharacter.html
- Vehicles and street props by Quaternius, Cars Pack (NormalCar1, NormalCar2, SUV, SportsCar, Cop) and Public Transport Pack (Ambulance, Bus, SchoolBus, TrafficLight, TrafficCone) (OBJ + MTL).
  https://quaternius.com/packs/cars.html
  https://quaternius.com/packs/publictransport.html
- Textures from Poly Haven (resized to 512 / 1024 px and repacked):
  red_brick_03 (Rob Tuytel), concrete_wall_003 (Dimitrios Savva, Rico Cilliers), grey_plaster (Rob Tuytel),
  rusted_shutter (Dimitrios Savva), asphalt_02 (Rob Tuytel).
  https://polyhaven.com/license

## Real-life mode (PLAY IN REAL LIFE tab, Fri 13 Nov)

- **onnxruntime-web 1.22.0** (Microsoft, MIT licence): `game/vendor/ort/ort.webgpu.min.js`, `ort-wasm-simd-threaded.jsep.mjs`, `ort-wasm-simd-threaded.jsep.wasm`. Runs the detector in the browser (WebGPU, WebAssembly fallback). Copied unchanged from our L.I.G.H.T project.
- **YOLOv8n** (Ultralytics, AGPL-3.0, COCO-trained), exported to ONNX with dynamic input size: `game/models/yolov8n-dynamic.onnx`, provenance and hashes in `game/models/yolov8n-export.json`. Copied unchanged from our L.I.G.H.T project.
- The pre-processing, box decoding, non-maximum suppression and tracker matching in `game/src/reallife.js` follow our own L.I.G.H.T live-vision code (`inference.ts`, `tracker.ts`).

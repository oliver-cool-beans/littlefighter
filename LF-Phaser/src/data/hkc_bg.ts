/**
 * hkc_bg.ts — HK Coliseum background data.
 * Ported from LF2_19/bg/hkc/bg.js.
 */

import type { BackgroundData } from '../types/index.js'

export default {
  name: 'HK Coliseum',
  width: 794,
  zboundary: [316, 442] as [number, number],
  shadow: 'bg/hkc/s.png',
  shadowsize: [37, 9] as [number, number],
  layer: [
    { pic: 'bg/hkc/back1.png',  transparency: 0, width: 794, x: 0, y: 128 },
    { pic: 'bg/hkc/back2.png',  transparency: 0, width: 794, x: 0, y: 237, cc: 16, c1: 0,  c2: 7  },
    { pic: 'bg/hkc/back22.png', transparency: 0, width: 794, x: 0, y: 237, cc: 16, c1: 8,  c2: 15 },
    { pic: 'bg/hkc/s.png', rect: 40179, width: 794, x: 0, y: 327, height: 119 },
    { pic: 'bg/hkc/s.png', rect: 40179, width: 794, x: 0, y: 448, height: 10  },
    { pic: 'bg/hkc/s.png', rect: 40179, width: 794, x: 0, y: 460, height: 9   },
    { pic: 'bg/hkc/s.png', rect: 29582, width: 794, x: 0, y: 469, height: 3   },
    { pic: 'bg/hkc/s.png', rect: 25356, width: 794, x: 0, y: 472, height: 42  },
    { pic: 'bg/hkc/s.png', rect: 37773, width: 794, x: 0, y: 446, height: 1   },
    { pic: 'bg/hkc/s.png', rect: 33580, width: 794, x: 0, y: 447, height: 1   },
    { pic: 'bg/hkc/s.png', rect: 37773, width: 794, x: 0, y: 458, height: 1   },
    { pic: 'bg/hkc/s.png', rect: 33580, width: 794, x: 0, y: 459, height: 1   },
  ],
} satisfies BackgroundData

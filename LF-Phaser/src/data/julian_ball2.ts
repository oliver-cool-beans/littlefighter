import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-7)": "sprite/julian_ball2.png", w: 109, h: 99, row: 4, col: 2
      },
      {
        "file(8-11)": "sprite/julian_col.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(12-15)": "sprite/julian_col2.png", w: 159, h: 404, row: 4, col: 1
      },
      {
        "file(16-30)": "sprite/julian_exp.png", w: 159, h: 159, row: 5, col: 3
      },
      {
        "file(31-34)": "sprite/bandit_col.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(35-38)": "sprite/bandit_col2.png", w: 159, h: 404, row: 4, col: 1
      }
    ],
    name: 'julian_ball2',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 1, dvx: 18, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 12, hit_d: 2, hit_j: 0,
    itr: {
      kind: 0, x: -16, y: 8, w: 122, h: 85, dvx: 30, fall: 70, vrest: 15, bdefend: 6, injury: 30
    },
    bdy: {
      kind: 0, x: -16, y: 8, w: 122, h: 85
    }
  },
  1: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 999, dvx: 18, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 12, hit_d: 3, hit_j: 0,
    itr: {
      kind: 0, x: -16, y: 8, w: 122, h: 85, dvx: 30, fall: 70, vrest: 15, bdefend: 6, injury: 30
    },
    bdy: {
      kind: 0, x: -16, y: 8, w: 122, h: 85
    }
  },
  2: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 3, dvx: 18, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 25, hit_d: 2, hit_j: 0,
    itr: {
      kind: 0, x: -16, y: 8, w: 122, h: 85, dvx: 30, fall: 70, vrest: 15, bdefend: 6, injury: 30
    },
    bdy: {
      kind: 0, x: -16, y: 8, w: 122, h: 85
    }
  },
  3: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 18, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 25, hit_d: 3, hit_j: 0,
    itr: {
      kind: 0, x: -16, y: 8, w: 122, h: 85, dvx: 30, fall: 70, vrest: 15, bdefend: 6, injury: 30
    },
    bdy: {
      kind: 0, x: -16, y: 8, w: 122, h: 85
    }
  },
  10: { name: "explosion",
    sound: "1/089",
    pic: 16, state: 15, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "explosion",
    sound: "1/089",
    pic: 16, state: 15, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "explosion",
    sound: "1/089",
    pic: 16, state: 15, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "col",
    pic: 8, state: 15, wait: 3, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  41: { name: "col",
    pic: 9, state: 15, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  42: { name: "col",
    pic: 10, state: 15, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  43: { name: "col",
    pic: 9, state: 15, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  44: { name: "col",
    pic: 10, state: 15, wait: 0, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  45: { name: "col",
    pic: 11, state: 15, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  46: { name: "col",
    pic: 10, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  47: { name: "col",
    pic: 11, state: 15, wait: 0, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 12, zwidth: 37, effect: 23
    }
  },
  48: { name: "col",
    pic: 12, state: 15, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "col",
    pic: 13, state: 15, wait: 0, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "col",
    pic: 14, state: 15, wait: 0, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "col",
    pic: 15, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "explosion",
    sound: "1/089",
    pic: 16, state: 15, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  111: { name: "explosion",
    sound: "1/071",
    pic: 17, state: 15, wait: 1, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 16, w: 122, h: 135, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  112: { name: "explosion",
    pic: 18, state: 15, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 18, w: 127, h: 131, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  113: { name: "explosion",
    pic: 19, state: 15, wait: 1, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 16, w: 146, h: 132, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  114: { name: "explosion",
    pic: 20, state: 15, wait: 1, next: 115, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 13, w: 137, h: 132, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  115: { name: "explosion",
    pic: 21, state: 15, wait: 1, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 14, w: 145, h: 117, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  116: { name: "explosion",
    pic: 22, state: 15, wait: 1, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  117: { name: "explosion",
    pic: 23, state: 15, wait: 1, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 30, zwidth: 37, effect: 23
    }
  },
  118: { name: "explosion",
    pic: 24, state: 18, wait: 1, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 126, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "explosion",
    pic: 25, state: 18, wait: 1, next: 120, dvx: 0, dvy: 0, dvz: 0, centerx: 78, centery: 132, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "explosion",
    pic: 26, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 76, centery: 127, hit_a: 0, hit_d: 0, hit_j: 0
  },
  140: { name: "col",
    pic: 31, state: 15, wait: 3, next: 141, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  141: { name: "col",
    pic: 32, state: 15, wait: 1, next: 142, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  142: { name: "col",
    pic: 33, state: 15, wait: 0, next: 143, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  143: { name: "col",
    pic: 32, state: 15, wait: 1, next: 144, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  144: { name: "col",
    pic: 33, state: 15, wait: 0, next: 145, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  145: { name: "col",
    pic: 34, state: 15, wait: 0, next: 146, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  146: { name: "col",
    pic: 33, state: 15, wait: 1, next: 147, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  147: { name: "col",
    pic: 34, state: 15, wait: 0, next: 148, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -8, dvy: -25, fall: 70, vrest: 30, bdefend: 70, injury: 45, zwidth: 37, effect: 23
    }
  },
  148: { name: "col",
    pic: 35, state: 15, wait: 1, next: 149, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  149: { name: "col",
    pic: 36, state: 15, wait: 0, next: 150, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "col",
    pic: 37, state: 15, wait: 0, next: 151, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "col",
    pic: 38, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "column_mother",
    pic: 2, state: 3000, wait: 0, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  201: { name: "column_mother",
    pic: 2, state: 3006, wait: 3, next: 202, dvx: 12, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 50, action: 10, dvx: 0, dvy: -3, oid: 229, facing: 0
    }
  },
  202: { name: "column_mother",
    pic: 2, state: 3006, wait: 0, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  210: { name: "column_mother",
    pic: 2, state: 3000, wait: 0, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  211: { name: "column_mother",
    pic: 2, state: 3006, wait: 3, next: 212, dvx: -12, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 50, action: 10, dvx: 0, dvy: -3, oid: 229, facing: 0
    }
  },
  212: { name: "column_mother",
    pic: 2, state: 3006, wait: 0, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  220: { name: "column_mother",
    pic: 2, state: 3000, wait: 0, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 47
  },
  221: { name: "column_mother",
    pic: 2, state: 3006, wait: 3, next: 222, dvx: 12, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 47,
    opoint: {
      kind: 1, x: 40, y: 50, action: 10, dvx: 0, dvy: -3, oid: 229, facing: 0
    }
  },
  222: { name: "column_mother",
    pic: 2, state: 3006, wait: 0, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 47
  },
  230: { name: "column_mother",
    pic: 2, state: 3000, wait: 0, next: 231, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 47
  },
  231: { name: "column_mother",
    pic: 2, state: 3006, wait: 3, next: 232, dvx: -12, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 47,
    opoint: {
      kind: 1, x: 40, y: 50, action: 10, dvx: 0, dvy: -3, oid: 229, facing: 0
    }
  },
  232: { name: "column_mother",
    pic: 2, state: 3006, wait: 0, next: 231, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 47
  },
  240: { name: "column_mother",
    pic: 2, state: 3000, wait: 0, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 53
  },
  241: { name: "column_mother",
    pic: 2, state: 3006, wait: 3, next: 242, dvx: 12, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 53,
    opoint: {
      kind: 1, x: 40, y: 50, action: 10, dvx: 0, dvy: -3, oid: 229, facing: 0
    }
  },
  242: { name: "column_mother",
    pic: 2, state: 3006, wait: 0, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 53
  },
  250: { name: "column_mother",
    pic: 2, state: 3000, wait: 0, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 53
  },
  251: { name: "column_mother",
    pic: 2, state: 3006, wait: 3, next: 252, dvx: -12, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 53,
    opoint: {
      kind: 1, x: 40, y: 50, action: 10, dvx: 0, dvy: -3, oid: 229, facing: 0
    }
  },
  252: { name: "column_mother",
    pic: 2, state: 3006, wait: 0, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 53
  }
  }

}

export default data

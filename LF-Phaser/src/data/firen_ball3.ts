import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/firen_ball2.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-13)": "sprite/firen_col2.png", w: 199, h: 404, row: 6, col: 1
      }
    ],
    name: 'firen_ball3',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 1, dvx: 15, dvy: 0, centerx: 40, centery: 41, hit_a: 215, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 14, fall: 70, vrest: 10, bdefend: 16, injury: 5, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 2, dvx: 15, dvy: 0, centerx: 35, centery: 41, hit_a: 215, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 14, fall: 70, vrest: 10, bdefend: 16, injury: 5, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 3, dvx: 15, dvy: 0, centerx: 36, centery: 41, hit_a: 215, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 14, fall: 70, vrest: 10, bdefend: 16, injury: 5, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  3: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 4, dvx: 15, dvy: 0, centerx: 37, centery: 41, hit_a: 215, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 14, fall: 70, vrest: 10, bdefend: 16, injury: 5, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  4: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 5, dvx: 15, dvy: 0, centerx: 40, centery: 41, hit_a: 215, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 14, fall: 70, vrest: 10, bdefend: 16, injury: 5, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  5: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 999, dvx: 15, dvy: 0, centerx: 40, centery: 41, hit_a: 215, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 14, fall: 70, vrest: 10, bdefend: 16, injury: 5, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 38, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 33, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 39, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 31, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 38, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappearing",
    pic: 4, state: 3004, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 5, state: 3004, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 6, state: 3004, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "disappearing",
    pic: 7, state: 3004, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "col",
    pic: 8, state: 15, wait: 0, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -1, dvy: 0, fall: 70, vrest: 5, bdefend: 100, injury: 6, zwidth: 37, effect: 2
    }
  },
  51: { name: "col",
    pic: 9, state: 15, wait: 0, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -1, dvy: 0, fall: 70, vrest: 5, bdefend: 100, injury: 8, zwidth: 37, effect: 2
    },
    opoint: {
      kind: 1, x: 20, y: 390, action: 40, dvx: 0, dvy: -8, oid: 221, facing: 0
    }
  },
  52: { name: "col",
    pic: 8, state: 15, wait: 0, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -1, dvy: 0, fall: 70, vrest: 5, bdefend: 100, injury: 6, zwidth: 37, effect: 2
    },
    opoint: {
      kind: 1, x: 60, y: 390, action: 40, dvx: 0, dvy: -8, oid: 221, facing: 0
    }
  },
  53: { name: "col",
    pic: 9, state: 15, wait: 0, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -1, dvy: 0, fall: 70, vrest: 5, bdefend: 100, injury: 8, zwidth: 37, effect: 2
    },
    opoint: {
      kind: 1, x: 100, y: 390, action: 40, dvx: 0, dvy: -8, oid: 221, facing: 0
    }
  },
  54: { name: "col",
    pic: 8, state: 15, wait: 0, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: 1, dvy: 1, fall: 70, vrest: 5, bdefend: 100, injury: 6, zwidth: 37, effect: 2
    },
    opoint: {
      kind: 1, x: 140, y: 390, action: 40, dvx: 0, dvy: -8, oid: 221, facing: 0
    }
  },
  55: { name: "col",
    pic: 9, state: 15, wait: 0, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: 1, dvy: 1, fall: 70, vrest: 5, bdefend: 100, injury: 8, zwidth: 37, effect: 2
    },
    opoint: {
      kind: 1, x: 180, y: 390, action: 40, dvx: 0, dvy: -8, oid: 221, facing: 0
    }
  },
  56: { name: "col",
    pic: 10, state: 15, wait: 3, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "col",
    pic: 11, state: 15, wait: 3, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  58: { name: "col",
    pic: 12, state: 15, wait: 3, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "col",
    pic: 13, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "col",
    pic: 8, state: 15, wait: 0, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: 1, dvy: 1, fall: 70, vrest: 5, bdefend: 100, injury: 6, zwidth: 37, effect: 2
    }
  },
  61: { name: "col",
    pic: 9, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: 1, dvy: 1, fall: 70, vrest: 5, bdefend: 100, injury: 8, zwidth: 37, effect: 2
    }
  }
  }
}

export default data

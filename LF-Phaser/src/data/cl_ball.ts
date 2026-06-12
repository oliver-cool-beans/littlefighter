import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-23)": "sprite/cl_ball.png", w: 122, h: 123, row: 4, col: 6
      }
    ],
    name: 'cl_ball',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 0, next: 1, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 20, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 3
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 2, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 20, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 3
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 3, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 20, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 3
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 0, next: 4, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 20, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 3
    }
  },
  4: { name: "flying",
    pic: 8, state: 3000, wait: 0, next: 5, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 20, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 3
    }
  },
  5: { name: "flying",
    pic: 9, state: 3000, wait: 0, next: 50, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 20, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 3
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 16, state: 3001, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 61, y: 62, action: 58, dvx: 0, dvy: 0, oid: 221, facing: 30
    }
  },
  12: { name: "hiting",
    pic: 5, state: 3001, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 17, state: 3001, wait: 0, next: 14, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "hiting",
    pic: 6, state: 3001, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "hiting",
    pic: 18, state: 3001, wait: 0, next: 16, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  16: { name: "hiting",
    pic: 7, state: 3001, wait: 0, next: 17, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  17: { name: "hiting",
    pic: 19, state: 3001, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 0, next: 21, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 16, state: 3002, wait: 0, next: 22, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 61, y: 62, action: 58, dvx: 0, dvy: 0, oid: 221, facing: 30
    }
  },
  22: { name: "hit",
    pic: 5, state: 3002, wait: 0, next: 23, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 17, state: 3002, wait: 0, next: 24, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  24: { name: "hit",
    pic: 6, state: 3002, wait: 0, next: 25, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  25: { name: "hit",
    pic: 18, state: 3002, wait: 0, next: 26, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  26: { name: "hit",
    pic: 7, state: 3002, wait: 0, next: 27, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "hit",
    pic: 19, state: 3002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 16, state: 3003, wait: 0, next: 32, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 61, y: 62, action: 58, dvx: 0, dvy: 0, oid: 221, facing: 30
    }
  },
  32: { name: "rebounding",
    pic: 5, state: 3003, wait: 0, next: 33, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 17, state: 3003, wait: 0, next: 34, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  34: { name: "rebounding",
    pic: 6, state: 3003, wait: 0, next: 35, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  35: { name: "rebounding",
    pic: 18, state: 3003, wait: 0, next: 36, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  36: { name: "rebounding",
    pic: 7, state: 3003, wait: 0, next: 37, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  37: { name: "rebounding",
    pic: 19, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "rebounding",
    pic: 4, state: 3003, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "rebounding",
    pic: 16, state: 3003, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 61, y: 62, action: 58, dvx: 0, dvy: 0, oid: 221, facing: 30
    }
  },
  42: { name: "rebounding",
    pic: 5, state: 3003, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "rebounding",
    pic: 17, state: 3003, wait: 0, next: 44, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "rebounding",
    pic: 4, state: 3003, wait: 0, next: 45, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "rebounding",
    pic: 16, state: 3003, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "flying",
    pic: 12, state: 3000, wait: 0, next: 51, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 70, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 2
    }
  },
  51: { name: "flying",
    pic: 13, state: 3000, wait: 0, next: 52, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 70, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 2
    }
  },
  52: { name: "flying",
    pic: 14, state: 3000, wait: 0, next: 53, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 70, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 2
    }
  },
  53: { name: "flying",
    pic: 15, state: 3000, wait: 0, next: 54, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 70, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 2
    }
  },
  54: { name: "flying",
    pic: 20, state: 3000, wait: 0, next: 55, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 70, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 2
    }
  },
  55: { name: "flying",
    pic: 21, state: 3000, wait: 0, next: 999, dvx: 15, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 33, w: 86, h: 53, dvx: 0, dvy: -12, fall: 70, vrest: 10, bdefend: 16, injury: 12, zwidth: 20, effect: 2
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 61, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }

}

export default data

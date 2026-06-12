import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-7)": "sprite/louisEX_ball.png", w: 81, h: 41, row: 4, col: 2
      }
    ],
    name: 'louisex_ball',
    weapon_hp: 10000,
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 37, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 37, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 38, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 33, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 39, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 41, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 37, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 31, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 38, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 37, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappearing",
    pic: 4, state: 3004, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 37, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 5, state: 3004, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 37, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 6, state: 3004, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 37, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "disappearing",
    pic: 7, state: 3004, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "flying_n",
    pic: 0, state: 3006, wait: 1, next: 51, dvx: 35, dvy: 0, centerx: 40, centery: 21, hit_a: 100, hit_d: 40, hit_j: 0,
    sound: "1/069",
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 60, vrest: 6, bdefend: 16, injury: 10, effect: 1
    }
  },
  51: { name: "flying_n",
    pic: 1, state: 3006, wait: 1, next: 52, dvx: 35, dvy: 0, centerx: 35, centery: 21, hit_a: 100, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 6, w: 55, h: 29, dvx: 10, dvy: -7, fall: 60, vrest: 6, bdefend: 16, injury: 10, effect: 1
    }
  },
  52: { name: "flying_n",
    pic: 2, state: 3006, wait: 1, next: 53, dvx: 35, dvy: 0, centerx: 36, centery: 21, hit_a: 100, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 60, vrest: 6, bdefend: 16, injury: 10, effect: 1
    }
  },
  53: { name: "flying_n",
    pic: 3, state: 3006, wait: 1, next: 50, dvx: 35, dvy: 0, centerx: 37, centery: 21, hit_a: 100, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 60, vrest: 6, bdefend: 16, injury: 10, effect: 1
    }
  },
  55: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 56, dvx: 45, dvy: 0, centerx: 40, centery: 21, hit_a: 40, hit_d: 40, hit_j: 30,
    sound: "1/069",
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  56: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 57, dvx: 45, dvy: 0, centerx: 35, centery: 21, hit_a: 40, hit_d: 40, hit_j: 30,
    itr: {
      kind: 0, x: 22, y: 6, w: 55, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  57: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 58, dvx: 45, dvy: 0, centerx: 36, centery: 21, hit_a: 40, hit_d: 40, hit_j: 30,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  58: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 55, dvx: 45, dvy: 0, centerx: 37, centery: 21, hit_a: 40, hit_d: 40, hit_j: 30,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  60: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 61, dvx: 45, dvy: 0, centerx: 40, centery: 21, hit_a: 40, hit_d: 40, hit_j: 40,
    sound: "1/069",
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  61: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 62, dvx: 45, dvy: 0, centerx: 35, centery: 21, hit_a: 40, hit_d: 40, hit_j: 40,
    itr: {
      kind: 0, x: 22, y: 6, w: 55, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  62: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 63, dvx: 45, dvy: 0, centerx: 36, centery: 21, hit_a: 40, hit_d: 40, hit_j: 40,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  63: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 60, dvx: 45, dvy: 0, centerx: 37, centery: 21, hit_a: 40, hit_d: 40, hit_j: 40,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  100: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 101, dvx: 45, dvy: 0, centerx: 40, centery: 21, hit_a: 40, hit_d: 40, hit_j: 0,
    sound: "1/069",
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  101: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 102, dvx: 45, dvy: 0, centerx: 35, centery: 21, hit_a: 40, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 6, w: 55, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  102: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 103, dvx: 45, dvy: 0, centerx: 36, centery: 21, hit_a: 40, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  103: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 100, dvx: 45, dvy: 0, centerx: 37, centery: 21, hit_a: 40, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  105: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 106, dvx: 45, dvy: 0, centerx: 40, centery: 21, hit_a: 40, hit_d: 40, hit_j: 60,
    sound: "1/069",
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  106: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 107, dvx: 45, dvy: 0, centerx: 35, centery: 21, hit_a: 40, hit_d: 40, hit_j: 60,
    itr: {
      kind: 0, x: 22, y: 6, w: 55, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  107: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 108, dvx: 45, dvy: 0, centerx: 36, centery: 21, hit_a: 40, hit_d: 40, hit_j: 60,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  108: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 105, dvx: 45, dvy: 0, centerx: 37, centery: 21, hit_a: 40, hit_d: 40, hit_j: 60,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  110: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 111, dvx: 45, dvy: 0, centerx: 40, centery: 21, hit_a: 40, hit_d: 40, hit_j: 70,
    sound: "1/069",
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  111: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 112, dvx: 45, dvy: 0, centerx: 35, centery: 21, hit_a: 40, hit_d: 40, hit_j: 70,
    itr: {
      kind: 0, x: 22, y: 6, w: 55, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  112: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 113, dvx: 45, dvy: 0, centerx: 36, centery: 21, hit_a: 40, hit_d: 40, hit_j: 70,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  },
  113: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 110, dvx: 45, dvy: 0, centerx: 37, centery: 21, hit_a: 40, hit_d: 40, hit_j: 70,
    itr: {
      kind: 0, x: 22, y: 6, w: 57, h: 29, dvx: 10, dvy: -7, fall: 70, vrest: 5, bdefend: 16, injury: 19, effect: 1
    }
  }
  }

}

export default data

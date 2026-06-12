import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-7)": "sprite/bat_chase.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-15)": "sprite/bat_ball2.png", w: 81, h: 82, row: 4, col: 2
      }
    ],
    name: 'bat_ball2',
    weapon_hit_sound: "1/088",
    weapon_drop_sound: "1/088",
    weapon_broken_sound: "1/088"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3006, wait: 0, next: 1, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 0, state: 3006, wait: 0, next: 2, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 40, action: 50, dvx: 1, dvy: 0, oid: 316, facing: 0
    }
  },
  2: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 3, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "flying",
    sound: "1/087",
    pic: 1, state: 3006, wait: 1, next: 4, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 5, dvx: -5, dvy: 0, centerx: 45, centery: 44, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 6, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 7, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 8, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "flying",
    pic: 9, state: 3006, wait: 1, next: 9, dvx: 55, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 80, h: 38, dvy: -6, dvx: 1, fall: 60, vrest: 8, bdefend: 16, injury: 5, effect: 1, zwidth: 30
    }
  },
  9: { name: "flying",
    pic: 9, state: 3006, wait: 1, next: 8, dvx: 55, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 22, w: 80, h: 38, dvy: -6, dvx: 1, fall: 60, vrest: 8, bdefend: 16, injury: 5, effect: 1, zwidth: 30
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
  50: { name: "flying",
    pic: 0, state: 3006, wait: 0, next: 51, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 49
  },
  51: { name: "flying",
    pic: 0, state: 3006, wait: 0, next: 52, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 49,
    opoint: {
      kind: 1, x: 40, y: 40, action: 70, dvx: 1, dvy: 0, oid: 316, facing: 0
    }
  },
  52: { name: "flying",
    sound: "1/087",
    pic: 1, state: 3006, wait: 1, next: 53, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 49
  },
  53: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 54, dvx: -5, dvy: 0, centerx: 45, centery: 44, hit_a: 0, hit_d: 0, hit_j: 49
  },
  54: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 55, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 49
  },
  55: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 56, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 49
  },
  56: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 57, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 49
  },
  57: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 58, dvx: -5, dvy: 0, centerx: 45, centery: 44, hit_a: 0, hit_d: 0, hit_j: 49
  },
  58: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 59, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 49
  },
  59: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 60, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 49
  },
  60: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 8, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 49
  },
  70: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 71, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 51
  },
  71: { name: "flying",
    sound: "1/087",
    pic: 1, state: 3006, wait: 1, next: 72, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 51
  },
  72: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 73, dvx: -5, dvy: 0, centerx: 45, centery: 44, hit_a: 0, hit_d: 0, hit_j: 51
  },
  73: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 74, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 51
  },
  74: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 75, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 51
  },
  75: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 76, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 51
  },
  76: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 77, dvx: -5, dvy: 0, centerx: 45, centery: 44, hit_a: 0, hit_d: 0, hit_j: 51
  },
  77: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 78, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 51
  },
  78: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 79, dvx: -5, dvy: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 51
  },
  79: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 8, dvx: -5, dvy: 0, centerx: 47, centery: 43, hit_a: 0, hit_d: 0, hit_j: 51
  }
  }

}

export default data

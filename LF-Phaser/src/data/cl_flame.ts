import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-17)": "sprite/cl_flame.png", w: 59, h: 63, row: 6, col: 3
      }
    ],
    name: 'cl_flame',
    weapon_hit_sound: "1/068",
    weapon_drop_sound: "1/068",
    weapon_broken_sound: "1/068"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 15, wait: 0, next: 1, dvx: 1, dvy: 0, centerx: 6, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 15, wait: 0, next: 2, dvx: 0, dvy: 0, centerx: 1, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  2: { name: "flying",
    pic: 2, state: 15, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  3: { name: "flying",
    pic: 3, state: 15, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 32, w: 37, h: 23, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  4: { name: "flying",
    pic: 4, state: 15, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 28, w: 40, h: 29, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  5: { name: "flying",
    pic: 5, state: 15, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 19, w: 44, h: 38, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  6: { name: "flying",
    pic: 6, state: 15, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 44, h: 42, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  7: { name: "flying",
    pic: 7, state: 15, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 43, h: 39, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  8: { name: "flying",
    pic: 8, state: 15, wait: 0, next: 9, dvx: 0, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 46, h: 46, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  9: { name: "flying",
    pic: 9, state: 15, wait: 0, next: 100, dvx: 0, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 8, w: 44, h: 49, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  10: { name: "hiting",
    pic: 15, state: 15, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 15, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 15, state: 15, wait: 0, next: 21, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 15, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 15, state: 15, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 15, state: 3003, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "flying",
    pic: 10, state: 15, wait: 0, next: 101, dvx: 0, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  101: { name: "flying",
    pic: 11, state: 15, wait: 0, next: 102, dvx: 0, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  102: { name: "flying",
    pic: 12, state: 15, wait: 0, next: 103, dvx: 0, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  103: { name: "flying",
    pic: 13, state: 15, wait: 0, next: 104, dvx: 0, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  104: { name: "flying",
    pic: 14, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 33, effect: 25
    }
  },
  131: { name: "flying",
    pic: 1, state: 15, wait: 0, next: 132, dvx: 0, dvy: 0, centerx: 1, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  132: { name: "flying",
    pic: 2, state: 15, wait: 0, next: 133, dvx: 0, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  133: { name: "flying",
    pic: 3, state: 15, wait: 0, next: 134, dvx: 0, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 32, w: 37, h: 23, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  134: { name: "flying",
    pic: 4, state: 15, wait: 0, next: 135, dvx: 0, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 28, w: 40, h: 29, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  135: { name: "flying",
    pic: 5, state: 15, wait: 0, next: 136, dvx: 0, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 19, w: 44, h: 38, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  136: { name: "flying",
    pic: 6, state: 15, wait: 0, next: 137, dvx: 0, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 44, h: 42, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  137: { name: "flying",
    pic: 7, state: 15, wait: 0, next: 138, dvx: 0, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 43, h: 39, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  138: { name: "flying",
    pic: 8, state: 15, wait: 0, next: 139, dvx: 0, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 46, h: 46, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  139: { name: "flying",
    pic: 9, state: 15, wait: 0, next: 150, dvx: 0, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 8, w: 44, h: 49, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  150: { name: "flying",
    pic: 10, state: 15, wait: 0, next: 151, dvx: 0, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  151: { name: "flying",
    pic: 11, state: 15, wait: 0, next: 152, dvx: 0, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  152: { name: "flying",
    pic: 12, state: 15, wait: 0, next: 153, dvx: 0, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  153: { name: "flying",
    pic: 13, state: 15, wait: 0, next: 154, dvx: 0, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  },
  154: { name: "flying",
    pic: 14, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 0, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 12, effect: 25
    }
  }
  }

}

export default data

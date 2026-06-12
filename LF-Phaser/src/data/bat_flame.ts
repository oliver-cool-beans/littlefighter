import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-17)": "sprite/firen_flame.png", w: 59, h: 63, row: 6, col: 3
      }
    ],
    name: 'bat_flame',
    weapon_hit_sound: "1/068",
    weapon_drop_sound: "1/068",
    weapon_broken_sound: "1/068"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 3, dvy: 0, centerx: 6, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 18, wait: 1, next: 2, dvx: 3, dvy: 0, centerx: 1, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  2: { name: "flying",
    pic: 2, state: 18, wait: 1, next: 3, dvx: 2, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  3: { name: "flying",
    pic: 3, state: 18, wait: 1, next: 4, dvx: 2, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 32, w: 37, h: 23, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  4: { name: "flying",
    pic: 4, state: 18, wait: 1, next: 5, dvx: 2, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 28, w: 40, h: 29, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  5: { name: "flying",
    pic: 5, state: 18, wait: 1, next: 6, dvx: 3, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 19, w: 44, h: 38, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  6: { name: "flying",
    pic: 6, state: 18, wait: 1, next: 7, dvx: 4, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 44, h: 42, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  7: { name: "flying",
    pic: 7, state: 18, wait: 1, next: 8, dvx: 4, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 43, h: 39, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  8: { name: "flying",
    pic: 8, state: 18, wait: 1, next: 9, dvx: 4, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 46, h: 46, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  9: { name: "flying",
    pic: 9, state: 18, wait: 1, next: 100, dvx: 3, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 8, w: 44, h: 49, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  10: { name: "hiting",
    pic: 15, state: 18, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 15, state: 18, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 15, state: 18, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "flying",
    pic: 10, state: 18, wait: 1, next: 101, dvx: 3, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  101: { name: "flying",
    pic: 11, state: 18, wait: 1, next: 102, dvx: 2, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  102: { name: "flying",
    pic: 12, state: 18, wait: 1, next: 103, dvx: 2, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  103: { name: "flying",
    pic: 13, state: 18, wait: 1, next: 104, dvx: 2, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  104: { name: "flying",
    pic: 14, state: 18, wait: 1, next: 1000, dvx: 2, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  130: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 131, dvx: 0, dvy: 0, centerx: 6, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "flying",
    pic: 1, state: 18, wait: 1, next: 132, dvx: 0, dvy: 0, centerx: 1, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  132: { name: "flying",
    pic: 2, state: 18, wait: 1, next: 133, dvx: 0, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  133: { name: "flying",
    pic: 3, state: 18, wait: 1, next: 134, dvx: 0, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 32, w: 37, h: 23, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  134: { name: "flying",
    pic: 4, state: 18, wait: 1, next: 135, dvx: 0, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 28, w: 40, h: 29, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  135: { name: "flying",
    pic: 5, state: 18, wait: 1, next: 136, dvx: 0, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 19, w: 44, h: 38, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  136: { name: "flying",
    pic: 6, state: 18, wait: 1, next: 137, dvx: 0, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 44, h: 42, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  137: { name: "flying",
    pic: 7, state: 18, wait: 1, next: 138, dvx: 0, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 43, h: 39, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  138: { name: "flying",
    pic: 8, state: 18, wait: 1, next: 139, dvx: 0, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 46, h: 46, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  139: { name: "flying",
    pic: 9, state: 18, wait: 1, next: 150, dvx: 0, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 8, w: 44, h: 49, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  150: { name: "flying",
    pic: 10, state: 18, wait: 1, next: 151, dvx: 0, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  151: { name: "flying",
    pic: 11, state: 18, wait: 1, next: 152, dvx: 0, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  152: { name: "flying",
    pic: 12, state: 18, wait: 1, next: 153, dvx: 0, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  153: { name: "flying",
    pic: 13, state: 18, wait: 1, next: 154, dvx: 0, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  },
  154: { name: "flying",
    pic: 14, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 6, effect: 21
    }
  }
  }

}

export default data

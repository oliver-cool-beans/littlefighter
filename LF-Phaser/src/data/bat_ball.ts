import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-7)": "sprite/bat_ball.png", w: 129, h: 34, row: 4, col: 2
      },
      {
        "file(8-12)": "sprite/monk_ball.png", w: 71, h: 99, row: 5, col: 1
      },
      {
        "file(13-18)": "sprite/jack_col.png", w: 199, h: 404, row: 6, col: 1
      },
      {
        "file(19-24)": "sprite/jack_col2.png", w: 199, h: 404, row: 6, col: 1
      }
    ],
    name: 'bat_ball',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 10
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 10
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 3, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 4
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  3: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 2, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 4
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding                                                                                                       ",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 51, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 9
    }
  },
  51: { name: "flying",
    pic: 1, state: 3006, wait: 51, next: 999, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 9
    }
  },
  52: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 53, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 3
    }
  },
  53: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 52, dvx: 45, dvy: 0, dvz: 0, centerx: 85, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -10, y: 4, w: 137, h: 24, dvx: 15, dvy: 10, vrest: 30, bdefend: 16, injury: 3
    }
  },
  75: { name: "ep",
    pic: 999, state: 15, wait: 1, next: 76, dvx: 15, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 15, hit_d: 85, hit_j: 0
  },
  76: { name: "ep",
    pic: 999, state: 15, wait: 1, next: 75, dvx: 15, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 15, hit_d: 85, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 80, dvx: 0, dvy: 0, oid: 224, facing: 0
    }
  },
  80: { name: "ep",
    pic: 8, state: 15, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/069",
    itr: {
      kind: 0, x: 12, y: 24, w: 52, h: 52, dvx: 20, dvy: -8, fall: 100, vrest: 10, bdefend: 70, injury: 24, effect: 25, zwidth: 25
    }
  },
  81: { name: "ep",
    pic: 9, state: 15, wait: 1, next: 82, dvx: -1, dvy: 0, dvz: 0, centerx: 36, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "ep",
    pic: 10, state: 15, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "ep",
    pic: 11, state: 15, wait: 1, next: 84, dvx: -2, dvy: 0, dvz: 0, centerx: 36, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "ep",
    pic: 12, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "j_col",
    pic: 13, state: 15, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "j_col",
    pic: 14, state: 15, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 387, action: 10, dvx: 0, dvy: -15, oid: 216, facing: 50
    }
  },
  92: { name: "j_col",
    pic: 15, state: 15, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 12, hit_d: 94, hit_j: 0,
    sound: "1/116",
    itr: {
      kind: 0, x: 50, y: 0, w: 100, h: 394, dvx: 2, dvy: -8, fall: 100, vrest: 4, bdefend: 100, effect: 25, injury: 3, zwidth: 35
    },
    opoint: {
      kind: 1, x: 100, y: 387, action: 10, dvx: 5, dvy: -10, oid: 216, facing: 20
    }
  },
  93: { name: "j_col",
    pic: 16, state: 15, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 12, hit_d: 94, hit_j: 0,
    itr: {
      kind: 0, x: 60, y: 0, w: 80, h: 394, dvx: 2, dvy: -8, fall: 100, vrest: 4, bdefend: 100, effect: 25, injury: 3, zwidth: 35
    },
    opoint: {
      kind: 1, x: 100, y: 387, action: 10, dvx: 5, dvy: -10, oid: 216, facing: 21
    }
  },
  94: { name: "j_col",
    pic: 17, state: 15, wait: 0, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 12, hit_d: 0, hit_j: 0
  },
  95: { name: "j_col",
    pic: 18, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "j_col",
    pic: 19, state: 15, wait: 0, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "j_col",
    pic: 20, state: 15, wait: 0, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 100, y: 387, action: 10, dvx: 0, dvy: -25, oid: 216, facing: 90
    }
  },
  102: { name: "j_col",
    pic: 21, state: 15, wait: 0, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 6, hit_d: 104, hit_j: 0,
    sound: "1/116",
    itr: {
      kind: 0, x: 13, y: 0, w: 176, h: 394, dvx: 2, dvy: -8, fall: 100, vrest: 4, bdefend: 100, effect: 25, injury: 3, zwidth: 55
    },
    opoint: {
      kind: 1, x: 100, y: 387, action: 10, dvx: 9, dvy: -20, oid: 216, facing: 40
    }
  },
  103: { name: "j_col",
    pic: 22, state: 15, wait: 0, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 6, hit_d: 104, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 0, w: 176, h: 394, dvx: 2, dvy: -8, fall: 100, vrest: 3, bdefend: 100, effect: 25, injury: 3, zwidth: 55
    },
    opoint: {
      kind: 1, x: 100, y: 387, action: 10, dvx: 9, dvy: -20, oid: 216, facing: 41
    }
  },
  104: { name: "j_col",
    pic: 23, state: 15, wait: 0, next: 105, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 0, hit_d: 0, hit_j: 0
  },
  105: { name: "j_col",
    pic: 24, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 387, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }

}

export default data

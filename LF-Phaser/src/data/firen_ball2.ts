import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/firen_ball.png", w: 81, h: 82, row: 4, col: 3
      },
      {
        "file(12-20)": "sprite/firen_col.png", w: 181, h: 187, row: 3, col: 3
      }
    ],
    name: 'firen_ball2',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 0, next: 1, dvx: 40, dvy: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    opoint: {
      kind: 1, x: 42, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 2, dvy: -20, fall: 70, vrest: 10, bdefend: 16, injury: 13, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 0, next: 2, dvx: 40, dvy: 0, centerx: 53, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 42, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 2, dvy: -20, fall: 70, vrest: 10, bdefend: 16, injury: 13, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 3, dvx: 40, dvy: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 42, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 2, dvy: -20, fall: 70, vrest: 10, bdefend: 16, injury: 13, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 0, next: 4, dvx: 40, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 42, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 2, dvy: -20, fall: 70, vrest: 10, bdefend: 16, injury: 13, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  4: { name: "flying",
    pic: 4, state: 3000, wait: 0, next: 5, dvx: 40, dvy: 0, centerx: 55, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 42, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 2, dvy: -20, fall: 70, vrest: 10, bdefend: 16, injury: 13, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  5: { name: "flying",
    pic: 5, state: 3000, wait: 0, next: 999, dvx: 40, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 42, y: 41, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 2, dvy: -20, fall: 70, vrest: 10, bdefend: 16, injury: 13, effect: 2
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 8, state: 3001, wait: 3, next: 11, dvx: 0, dvy: 0, centerx: 40, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 8, state: 3001, wait: 6, next: 12, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 48, y: 81, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  12: { name: "hiting",
    pic: 9, state: 3001, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 148, y: 81, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  13: { name: "hiting",
    pic: 9, state: 3001, wait: 0, next: 14, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -68, y: 81, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  14: { name: "hiting",
    pic: 10, state: 3001, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 48, y: 81, action: 121, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  15: { name: "hiting",
    pic: 10, state: 3001, wait: 6, next: 16, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 81, action: 122, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  16: { name: "hiting",
    pic: 11, state: 3001, wait: 0, next: 17, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 228, y: 81, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  17: { name: "hiting",
    pic: 11, state: 3001, wait: 0, next: 18, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -148, y: 81, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  18: { name: "hiting",
    pic: 11, state: 3001, wait: 0, next: 19, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 48, y: 81, action: 123, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  19: { name: "hiting",
    pic: 11, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 81, action: 124, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  20: { name: "hit",
    pic: 8, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 44, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 9, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 41, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 10, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 11, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 8, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 43, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 9, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 10, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 46, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 11, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 52, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "column",
    pic: 21, state: 15, wait: 0, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "column",
    pic: 21, state: 15, wait: 0, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "column",
    pic: 21, state: 15, wait: 0, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "column",
    pic: 12, state: 15, wait: 5, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 158, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "column",
    pic: 13, state: 15, wait: 0, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 140, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "column",
    pic: 14, state: 15, wait: 0, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 130, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  126: { name: "column",
    pic: 15, state: 15, wait: 0, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 113, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "column",
    pic: 16, state: 15, wait: 0, next: 128, dvx: 0, dvy: 0, dvz: 0, centerx: 103, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "column",
    pic: 17, state: 15, wait: 20, next: 129, dvx: 0, dvy: 0, dvz: 0, centerx: 86, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/067",
    itr: {
      kind: 0, x: 31, y: 68, w: 103, h: 106, dvx: 0, dvy: 0, fall: 70, vrest: 5, bdefend: 16, injury: 5, zwidth: 25, effect: 2
    }
  },
  129: { name: "column",
    pic: 18, state: 15, wait: 2, next: 130, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  130: { name: "column",
    pic: 19, state: 15, wait: 1, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/070"
  },
  131: { name: "column",
    pic: 20, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 60, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "column",
    pic: 21, state: 15, wait: 0, next: 136, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  136: { name: "column",
    pic: 21, state: 15, wait: 5, next: 137, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 75, y: 188, action: 140, dvx: 0, dvy: 0, oid: 310, facing: 0
    }
  },
  137: { name: "column",
    pic: 21, state: 15, wait: 5, next: 138, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 75, y: 188, action: 143, dvx: 0, dvy: 0, oid: 310, facing: 0
    }
  },
  138: { name: "column",
    pic: 21, state: 15, wait: 5, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 75, y: 188, action: 146, dvx: 0, dvy: 0, oid: 310, facing: 0
    }
  },
  140: { name: "column",
    pic: 21, state: 15, wait: 0, next: 141, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "column",
    pic: 21, state: 400, wait: 1, next: 142, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "column",
    pic: 21, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 170, y: 188, action: 120, dvx: 0, dvy: 0, oid: 310, facing: 0
    }
  },
  143: { name: "column",
    pic: 21, state: 15, wait: 0, next: 144, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  144: { name: "column",
    pic: 21, state: 400, wait: 1, next: 145, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  145: { name: "column",
    pic: 21, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 200, y: 125, action: 121, dvx: 0, dvy: 0, oid: 310, facing: 0
    }
  },
  146: { name: "column",
    pic: 21, state: 15, wait: 0, next: 147, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  147: { name: "column",
    pic: 21, state: 400, wait: 1, next: 148, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0
  },
  148: { name: "column",
    pic: 21, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 75, centery: 188, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 230, y: 155, action: 122, dvx: 0, dvy: 0, oid: 310, facing: 0
    }
  }
  }
}

export default data

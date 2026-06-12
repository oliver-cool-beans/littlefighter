import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-3)": "sprite/cl_col.png", w: 199, h: 404, row: 4, col: 1
      },
      {
        "file(4-7)": "sprite/cl_col2.png", w: 159, h: 404, row: 4, col: 1
      },
      {
        "file(8-15)": "sprite/richter_ball.png", w: 49, h: 49, row: 4, col: 2
      }
    ],
    name: 'cl_col',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 8, state: 1006, wait: 0, next: 1, dvx: 13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: 2, fall: 1, vrest: 7, bdefend: 60, injury: 19, zwidth: 20, effect: 23
    }
  },
  1: { name: "flying",
    pic: 8, state: 1006, wait: 0, next: 2, dvx: 13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 15, hit_d: 5, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: 2, fall: 1, vrest: 7, bdefend: 60, injury: 19, zwidth: 20, effect: 23
    },
    opoint: {
      kind: 1, x: 14, y: 34, action: 60, dvx: 0, dvy: 0, oid: 334, facing: 0
    }
  },
  2: { name: "flying",
    pic: 9, state: 1006, wait: 0, next: 3, dvx: 13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 15, hit_d: 5, hit_j: 0,
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: 2, fall: 1, vrest: 7, bdefend: 60, injury: 19, zwidth: 20, effect: 23
    }
  },
  3: { name: "flying",
    pic: 10, state: 1006, wait: 0, next: 4, dvx: 13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 15, hit_d: 5, hit_j: 0,
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: 2, fall: 1, vrest: 7, bdefend: 60, injury: 19, zwidth: 20, effect: 23
    },
    opoint: {
      kind: 1, x: 14, y: 34, action: 60, dvx: 0, dvy: 0, oid: 334, facing: 0
    }
  },
  4: { name: "flying",
    pic: 11, state: 1006, wait: 0, next: 1, dvx: 13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 15, hit_d: 5, hit_j: 0,
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: 2, fall: 1, vrest: 7, bdefend: 60, injury: 19, zwidth: 20, effect: 23
    }
  },
  5: { name: "flying",
    pic: 8, state: 1006, wait: 0, next: 6, dvx: -13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: -2, fall: 1, vrest: 7, bdefend: 60, injury: 13, zwidth: 20, effect: 23
    },
    opoint: {
      kind: 1, x: 14, y: 34, action: 60, dvx: 0, dvy: 0, oid: 334, facing: 1
    }
  },
  6: { name: "flying",
    pic: 9, state: 1006, wait: 0, next: 7, dvx: -13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: -2, fall: 1, vrest: 7, bdefend: 60, injury: 13, zwidth: 20, effect: 23
    }
  },
  7: { name: "flying",
    pic: 10, state: 1006, wait: 0, next: 8, dvx: -13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: -2, fall: 1, vrest: 7, bdefend: 60, injury: 13, zwidth: 20, effect: 23
    },
    opoint: {
      kind: 1, x: 14, y: 34, action: 60, dvx: 0, dvy: 0, oid: 334, facing: 1
    }
  },
  8: { name: "flying",
    pic: 11, state: 1006, wait: 0, next: 5, dvx: -13, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 9, x: 5, y: 5, w: 40, h: 40, dvx: -2, fall: 1, vrest: 7, bdefend: 60, injury: 13, zwidth: 20, effect: 23
    }
  },
  40: { name: "col",
    pic: 0, state: 15, wait: 3, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/089",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  41: { name: "col",
    pic: 1, state: 15, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/071",
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  42: { name: "col",
    pic: 2, state: 15, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  43: { name: "col",
    pic: 1, state: 15, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  44: { name: "col",
    pic: 2, state: 15, wait: 0, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  45: { name: "col",
    pic: 3, state: 15, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  46: { name: "col",
    pic: 2, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  47: { name: "col",
    pic: 3, state: 15, wait: 0, next: 48, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 0, w: 180, h: 405, dvx: -10, dvy: -35, fall: 70, vrest: 30, bdefend: 100, injury: 27, zwidth: 37, effect: 23
    }
  },
  48: { name: "col",
    pic: 4, state: 15, wait: 1, next: 49, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  49: { name: "col",
    pic: 5, state: 15, wait: 0, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "col",
    pic: 6, state: 15, wait: 0, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "col",
    pic: 7, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 80, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "flying",
    pic: 12, state: 1006, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "flying",
    pic: 13, state: 1006, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "flying",
    pic: 14, state: 1006, wait: 1, next: 63, dvx: 0, dvy: 1, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "flying",
    pic: 15, state: 1006, wait: 1, next: 1000, dvx: 0, dvy: 1, dvz: 0, centerx: 24, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "column_mother",
    pic: 16, state: 3000, wait: 0, next: 101, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "column_mother",
    pic: 16, state: 3006, wait: 0, next: 102, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "column_mother",
    pic: 16, state: 3006, wait: 0, next: 100, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 99, action: 40, dvx: 0, dvy: 0, oid: 334, facing: 0
    }
  }
  }

}

export default data

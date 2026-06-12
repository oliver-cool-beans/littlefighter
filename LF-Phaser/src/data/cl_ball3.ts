import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-11)": "sprite/julian_ball.png", w: 81, h: 82, row: 4, col: 3
      },
      {
        "file(12-15)": "sprite/cl_star.png", w: 81, h: 81, row: 4, col: 1
      }
    ],
    name: 'cl_ball3',
    weapon_hit_sound: "1/090",
    weapon_drop_sound: "1/090",
    weapon_broken_sound: "1/090"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 2, next: 1, dvx: 20, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 50, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 18, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 18, y: 19, w: 56, h: 51
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 2, dvx: 20, dvy: 0, dvz: 0, centerx: 32, centery: 42, hit_a: 50, hit_d: 1, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 10, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 10, y: 19, w: 56, h: 51
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 3, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 50, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 18, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 18, y: 19, w: 56, h: 51
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 2, next: 4, dvx: 20, dvy: 0, dvz: 0, centerx: 33, centery: 41, hit_a: 50, hit_d: 3, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 10, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 10, y: 19, w: 56, h: 51
    }
  },
  4: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 5, dvx: 20, dvy: 0, dvz: 0, centerx: 38, centery: 42, hit_a: 50, hit_d: 4, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 18, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 18, y: 19, w: 56, h: 51
    }
  },
  5: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 999, dvx: 20, dvy: 0, dvz: 0, centerx: 31, centery: 41, hit_a: 50, hit_d: 5, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 10, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 10, y: 19, w: 56, h: 51
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 2, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 2, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 2, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappearing",
    pic: 5, state: 3004, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 6, state: 3004, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 7, state: 3004, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "flying",
    pic: 0, state: 3000, wait: 2, next: 51, dvx: 10, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 18, y: 19, w: 56, h: 51
    }
  },
  51: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 52, dvx: 20, dvy: 0, dvz: 0, centerx: 32, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 10, y: 19, w: 56, h: 51
    }
  },
  52: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 53, dvx: 20, dvy: 0, dvz: 0, centerx: 39, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 18, y: 19, w: 56, h: 51
    }
  },
  53: { name: "flying",
    pic: 3, state: 3000, wait: 2, next: 54, dvx: 20, dvy: 0, dvz: 0, centerx: 33, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 10, y: 19, w: 56, h: 51
    }
  },
  54: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 55, dvx: 20, dvy: 0, dvz: 0, centerx: 38, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 18, y: 19, w: 56, h: 51
    }
  },
  55: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 1, dvx: 20, dvy: 0, dvz: 0, centerx: 31, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 19, w: 56, h: 51, dvx: 10, fall: 20, vrest: 10, bdefend: 10, injury: 12
    },
    bdy: {
      kind: 0, x: 10, y: 19, w: 56, h: 51
    }
  },
  100: { name: "down_star",
    pic: 12, state: 1000, wait: 1, next: 101, dvx: 0, dvy: 1, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "down_star",
    pic: 13, state: 1000, wait: 1, next: 102, dvx: 0, dvy: 2, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "down_star",
    pic: 14, state: 1000, wait: 1, next: 103, dvx: 0, dvy: 3, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "down_star",
    pic: 15, state: 1000, wait: 1, next: 1000, dvx: 0, dvy: 4, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }

}

export default data

import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-7)": "sprite/jack_b.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-9)": "sprite/jack_b2.png", w: 131, h: 89, row: 2, col: 1
      }
    ],
    name: 'jack_ball',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 20, dvy: 0, centerx: 40, centery: 41, hit_a: 15, hit_d: 10, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 27, w: 59, h: 27, dvx: 6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 17
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 20, dvy: 0, centerx: 40, centery: 41, hit_a: 15, hit_d: 10, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 27, w: 59, h: 27, dvx: 6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 17
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 20, dvy: 0, centerx: 40, centery: 41, hit_a: 15, hit_d: 10, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 27, w: 59, h: 27, dvx: 6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 17
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "flying",
    pic: 8, state: 3006, wait: 1, next: 41, dvx: 50, dvy: 0, centerx: 61, centery: 45, hit_a: 40, hit_d: 42, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 5, w: 123, h: 80, dvx: 24, dvy: -18, fall: 70, vrest: 30, bdefend: 60, injury: 82, zwidth: 25
    },
    opoint: {
      kind: 1, x: 101, y: 45, action: 10, dvx: 5, dvy: 0, oid: 216, facing: 0
    },
    bdy: {
      kind: 0, x: 8, y: 5, w: 123, h: 80
    }
  },
  41: { name: "flying",
    pic: 9, state: 3006, wait: 1, next: 40, dvx: 50, dvy: 0, centerx: 61, centery: 45, hit_a: 40, hit_d: 42, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 5, w: 123, h: 80, dvx: 24, dvy: -18, fall: 70, vrest: 30, bdefend: 60, injury: 82, zwidth: 25
    },
    opoint: {
      kind: 1, x: 101, y: 45, action: 10, dvx: 5, dvy: 0, oid: 216, facing: 20
    },
    bdy: {
      kind: 0, x: 8, y: 5, w: 123, h: 80
    }
  },
  42: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 43, dvx: 50, dvy: 0, centerx: 61, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 5, w: 123, h: 80, dvx: 24, dvy: -18, fall: 70, vrest: 30, bdefend: 60, injury: 62, zwidth: 25
    },
    opoint: {
      kind: 1, x: 101, y: 45, action: 10, dvx: 5, dvy: 0, oid: 216, facing: 0
    },
    bdy: {
      kind: 0, x: 8, y: 5, w: 123, h: 80
    }
  },
  43: { name: "flying",
    pic: 9, state: 3000, wait: 1, next: 42, dvx: 50, dvy: 0, centerx: 61, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 5, w: 123, h: 80, dvx: 24, dvy: -18, fall: 70, vrest: 30, bdefend: 60, injury: 62, zwidth: 25
    },
    opoint: {
      kind: 1, x: 101, y: 45, action: 10, dvx: 5, dvy: 0, oid: 216, facing: 20
    },
    bdy: {
      kind: 0, x: 8, y: 5, w: 123, h: 80
    }
  }
  }

}

export default data

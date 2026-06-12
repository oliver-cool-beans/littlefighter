import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-5)": "sprite/louis_ball.png", w: 81, h: 31, row: 6, col: 1
      }
    ],
    name: 'louis_ball',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 1, dvx: 5, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  1: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 2, dvx: 8, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  2: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 3, dvx: 13, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  3: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 4, dvx: 20, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  4: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 5, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 6, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  5: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 999, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 7, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  6: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 7, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 6, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 21
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  7: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 6, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 7, hit_j: 0,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 21
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  10: { name: "hiting",
    pic: 2, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 55, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 3, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 52, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 46, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 2, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 58, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 3, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 54, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 51, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 2, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 56, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 3, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 51, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 52, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappearing",
    pic: 2, state: 3004, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 54, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 3, state: 3004, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 56, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 4, state: 3004, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 46, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "dflying",
    pic: 0, state: 3006, wait: 1, next: 51, dvx: 5, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  51: { name: "dflying",
    pic: 1, state: 3006, wait: 1, next: 52, dvx: 8, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  52: { name: "dflying",
    pic: 0, state: 3006, wait: 1, next: 53, dvx: 13, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  53: { name: "dflying",
    pic: 1, state: 3006, wait: 1, next: 54, dvx: 20, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  54: { name: "dflying",
    pic: 0, state: 3006, wait: 1, next: 55, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 56, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  55: { name: "dflying",
    pic: 1, state: 3006, wait: 1, next: 999, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 57, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  56: { name: "dflying",
    pic: 0, state: 3000, wait: 1, next: 57, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 56, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 21
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  57: { name: "dflying",
    pic: 1, state: 3000, wait: 1, next: 56, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 57, hit_j: 47,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 21
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  60: { name: "uflying",
    pic: 0, state: 3006, wait: 1, next: 61, dvx: 5, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  61: { name: "uflying",
    pic: 1, state: 3006, wait: 1, next: 62, dvx: 8, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  62: { name: "uflying",
    pic: 0, state: 3006, wait: 1, next: 63, dvx: 13, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  63: { name: "uflying",
    pic: 1, state: 3006, wait: 1, next: 64, dvx: 20, dvy: 0, centerx: 70, centery: 16, hit_a: 0, hit_d: 0, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  64: { name: "uflying",
    pic: 0, state: 3006, wait: 1, next: 65, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 66, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  65: { name: "uflying",
    pic: 1, state: 3006, wait: 1, next: 999, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 67, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 28
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  66: { name: "uflying",
    pic: 0, state: 3000, wait: 1, next: 67, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 66, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 21
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  },
  67: { name: "uflying",
    pic: 1, state: 3000, wait: 1, next: 66, dvx: 25, dvy: 0, centerx: 70, centery: 16, hit_a: 75, hit_d: 67, hit_j: 53,
    itr: {
      kind: 0, x: 25, y: 2, w: 56, h: 28, dvx: 17, fall: 70, vrest: 15, bdefend: 10, injury: 21
    },
    bdy: {
      kind: 0, x: 25, y: 2, w: 56, h: 28
    }
  }
  }
}

export default data

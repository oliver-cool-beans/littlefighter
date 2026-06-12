import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-3)": "sprite/cl_ball2.png", w: 89, h: 89, row: 4, col: 1
      },
      {
        "file(4-10)": "sprite/cl_col4.png", w: 1919, h: 59, row: 1, col: 7
      }
    ],
    name: 'cl_ball2',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 1, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  3: { name: "flying",
    pic: 1, state: 3000, wait: 5, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 3, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  4: { name: "flying",
    pic: 0, state: 3000, wait: 5, next: 5, dvx: 14, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 4, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  5: { name: "flying",
    pic: 1, state: 3000, wait: 5, next: 6, dvx: 16, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 5, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  6: { name: "flying",
    pic: 2, state: 3000, wait: 5, next: 7, dvx: 18, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 6, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  7: { name: "flying",
    pic: 3, state: 3000, wait: 5, next: 50, dvx: -1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 7, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  10: { name: "hiting",
    pic: 3, state: 3001, wait: 0, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 3, state: 3001, wait: 0, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 3, state: 3001, wait: 0, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 3, state: 3001, wait: 0, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "flying",
    sound: "1/109",
    pic: 0, state: 3000, wait: 1, next: 51, dvx: 1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  51: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 52, dvx: -1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  52: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 53, dvx: 1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  53: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 54, dvx: -1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  54: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 55, dvx: 1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  55: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 56, dvx: -1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  56: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 57, dvx: 1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  57: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 58, dvx: -1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  58: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 59, dvx: 1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  59: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 60, dvx: -1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  60: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 61, dvx: 1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  61: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 1, dvx: -1, dvy: 0, dvz: 0, centerx: 45, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 80, h: 80, dvx: 18, dvy: -11, fall: 70, vrest: 10, bdefend: 100, injury: 19, zwidth: 22
    }
  },
  80: { name: "explosion",
    sound: "1/110",
    pic: 4, state: 15, wait: 1, next: 81, dvx: 0, dvy: -1, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 28, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 111, zwidth: 22
      },
      {
        kind: 0, x: 932, y: 10, w: 28, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 111, zwidth: 22
      }
    ]
  },
  81: { name: "explosion",
    pic: 5, state: 15, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 188, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 105, zwidth: 22
      },
      {
        kind: 0, x: 772, y: 10, w: 188, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 105, zwidth: 22
      }
    ]
  },
  82: { name: "explosion",
    pic: 6, state: 15, wait: 1, next: 83, dvx: 0, dvy: -1, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 378, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 99, zwidth: 22
      },
      {
        kind: 0, x: 582, y: 10, w: 378, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 99, zwidth: 22
      }
    ]
  },
  83: { name: "explosion",
    pic: 7, state: 15, wait: 1, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 568, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 93, zwidth: 22
      },
      {
        kind: 0, x: 392, y: 10, w: 568, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 93, zwidth: 22
      }
    ]
  },
  84: { name: "explosion",
    pic: 8, state: 15, wait: 1, next: 85, dvx: 0, dvy: -1, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 758, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 87, zwidth: 22
      },
      {
        kind: 0, x: 202, y: 10, w: 758, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 87, zwidth: 22
      }
    ]
  },
  85: { name: "explosion",
    pic: 9, state: 15, wait: 0, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  86: { name: "explosion",
    pic: 10, state: 15, wait: 0, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  87: { name: "explosion",
    pic: 9, state: 15, wait: 0, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  88: { name: "explosion",
    pic: 10, state: 15, wait: 0, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  89: { name: "explosion",
    pic: 9, state: 15, wait: 0, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  90: { name: "explosion",
    pic: 10, state: 15, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  91: { name: "explosion",
    pic: 9, state: 15, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  92: { name: "explosion",
    pic: 10, state: 15, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  93: { name: "explosion",
    pic: 9, state: 15, wait: 0, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  },
  94: { name: "explosion",
    pic: 10, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 960, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 960, y: 10, w: 958, h: 40, dvx: 36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      },
      {
        kind: 0, x: 2, y: 10, w: 958, h: 40, dvx: -36, dvy: -12, fall: 70, vrest: 15, bdefend: 100, injury: 81, zwidth: 22
      }
    ]
  }
  }

}

export default data

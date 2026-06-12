import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-17)": "sprite/bandit_flame.png", w: 59, h: 63, row: 6, col: 3
      },
      {
        "file(18)": "sprite/bandit_shadow.png", w: 79, h: 79, row: 1, col: 1
      },
      {
        "file(19-38)": "sprite/sflash.png", w: 79, h: 79, row: 10, col: 2
      },
      {
        "file(39-52)": "sprite/richter_ball2.png", w: 192, h: 284, row: 7, col: 2
      },
      {
        "file(53-55)": "sprite/monk_golden.png", w: 79, h: 99, row: 3, col: 1
      },
      {
        "file(56-59)": "sprite/monk_col.png", w: 399, h: 159, row: 1, col: 4
      },
      {
        "file(60-61)": "sprite/monk_col2.png", w: 399, h: 479, row: 2, col: 1
      }
    ],
    name: 'bandit_flame',
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
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  2: { name: "flying",
    pic: 2, state: 15, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  3: { name: "flying",
    pic: 3, state: 15, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 32, w: 37, h: 23, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  4: { name: "flying",
    pic: 4, state: 15, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 28, w: 40, h: 29, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  5: { name: "flying",
    pic: 5, state: 15, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 19, w: 44, h: 38, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  6: { name: "flying",
    pic: 6, state: 15, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 44, h: 42, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  7: { name: "flying",
    pic: 7, state: 15, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 43, h: 39, dvx: 10, dvy: -10, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  8: { name: "flying",
    pic: 8, state: 15, wait: 0, next: 9, dvx: 0, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 46, h: 46, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
    }
  },
  9: { name: "flying",
    pic: 9, state: 15, wait: 0, next: 100, dvx: 0, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 8, w: 44, h: 49, dvx: 4, fall: 16, vrest: 300, bdefend: 10, injury: 7, effect: 25
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
  50: { name: "flying",
    pic: 18, state: 15, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "flying",
    pic: 18, state: 15, wait: 100, next: 50, dvx: 0, dvy: 0, centerx: 39, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -40, y: -100, w: 160, h: 180, dvx: 0, dvy: -9, fall: 70, vrest: 20, bdefend: 100, injury: 8, zwidth: 200, effect: 0
    },
    opoint: {
      kind: 1, x: 55, y: 41, action: 0, dvx: 50, dvy: 0, oid: 311, facing: 0
    }
  },
  60: { name: "cross",
    pic: 39, state: 15, wait: 0, next: 61, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: [
      {
        kind: 0, x: 0, y: 252, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 252, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  61: { name: "cross",
    pic: 40, state: 15, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 210, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 210, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  62: { name: "cross",
    pic: 41, state: 15, wait: 0, next: 63, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 168, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 168, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  63: { name: "cross",
    pic: 42, state: 15, wait: 0, next: 64, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 126, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 126, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  64: { name: "cross",
    pic: 43, state: 15, wait: 0, next: 65, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 84, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 84, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  65: { name: "cross",
    pic: 44, state: 15, wait: 0, next: 66, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 42, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 42, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  66: { name: "cross",
    pic: 45, state: 15, wait: 0, next: 67, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 0, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  67: { name: "cross",
    pic: 45, state: 15, wait: 30, next: 77, dvx: 0, dvy: -18, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 91, h: 284, dvx: 5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: 0, w: 91, h: 284, dvx: -5, dvy: -6, fall: 70, vrest: 6, bdefend: 100, injury: 16, effect: -1, zwidth: 125
      }
    ]
  },
  70: { name: "cross",
    pic: 39, state: 15, wait: 0, next: 71, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: [
      {
        kind: 0, x: 0, y: -10000, w: 91, h: 10500, dvx: 5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: -10000, w: 91, h: 10500, dvx: -5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      }
    ]
  },
  71: { name: "cross",
    pic: 40, state: 15, wait: 0, next: 72, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: -10000, w: 91, h: 10500, dvx: 5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: -10000, w: 91, h: 10500, dvx: -5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      }
    ]
  },
  72: { name: "cross",
    pic: 41, state: 15, wait: 0, next: 73, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: -10000, w: 91, h: 10500, dvx: 5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: -10000, w: 91, h: 10500, dvx: -5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      }
    ]
  },
  73: { name: "cross",
    pic: 42, state: 15, wait: 0, next: 74, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: -10000, w: 91, h: 10500, dvx: 5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: -10000, w: 91, h: 10500, dvx: -5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      }
    ]
  },
  74: { name: "cross",
    pic: 43, state: 15, wait: 0, next: 75, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: -10000, w: 91, h: 10500, dvx: 5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: -10000, w: 91, h: 10500, dvx: -5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      }
    ]
  },
  75: { name: "cross",
    pic: 44, state: 15, wait: 0, next: 76, dvx: 0, dvy: 0, centerx: 96, centery: 284, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: -10000, w: 91, h: 10500, dvx: 5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: -10000, w: 91, h: 10500, dvx: -5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      }
    ]
  },
  76: { name: "cross",
    pic: 45, state: 15, wait: 30, next: 77, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: -10000, w: 91, h: 10500, dvx: 5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      },
      {
        kind: 0, x: 91, y: -10000, w: 91, h: 10500, dvx: -5, dvy: 0, fall: 70, vrest: 3, bdefend: 100, injury: 11, effect: -1, zwidth: 125
      }
    ]
  },
  77: { name: "cross",
    pic: 46, state: 15, wait: 0, next: 78, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "cross",
    pic: 47, state: 15, wait: 0, next: 79, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "cross",
    pic: 48, state: 15, wait: 0, next: 80, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "cross",
    pic: 49, state: 15, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "cross",
    pic: 50, state: 15, wait: 0, next: 82, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "cross",
    pic: 51, state: 15, wait: 0, next: 83, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "cross",
    pic: 52, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 96, centery: 294, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "monk",
    pic: 53, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/053"
  },
  91: { name: "monk",
    pic: 54, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "monk",
    pic: 55, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "monk",
    pic: 999, state: 15, wait: 5, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 15, x: 0, y: -5, w: 800, h: 10, dvx: -20, dvy: -1, fall: 70, vrest: 5, bdefend: 100, injury: 10, zwidth: 200
      },
      {
        kind: 15, x: -800, y: -5, w: 800, h: 10, dvx: 20, dvy: -1, fall: 70, vrest: 5, bdefend: 100, injury: 10, zwidth: 200
      }
    ]
  },
  100: { name: "flying",
    pic: 10, state: 15, wait: 0, next: 101, dvx: 0, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 10, dvy: -10, fall: 16, vrest: 300, bdefend: 16, injury: 7, effect: 25
    }
  },
  101: { name: "flying",
    pic: 11, state: 15, wait: 0, next: 102, dvx: 0, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 7, effect: 25
    }
  },
  102: { name: "flying",
    pic: 12, state: 15, wait: 0, next: 103, dvx: 0, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 7, effect: 25
    }
  },
  103: { name: "flying",
    pic: 13, state: 15, wait: 0, next: 104, dvx: 0, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 7, effect: 25
    }
  },
  104: { name: "flying",
    pic: 14, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 7, effect: 25
    }
  },
  110: { name: "nx",
    pic: 56, state: 15, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/114"
  },
  111: { name: "nx",
    pic: 57, state: 15, wait: 1, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "nx",
    pic: 58, state: 15, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "nx",
    pic: 59, state: 15, wait: 1, next: 115, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/116"
  },
  115: { name: "nx",
    pic: 60, state: 15, wait: 0, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 400, hit_a: 4, hit_d: 117, hit_j: 0,
    itr: [
      {
        kind: 0, x: 200, y: -10500, w: 180, h: 11000, dvx: -1, dvy: -25, fall: 70, vrest: 2, bdefend: 100, injury: 2, zwidth: 90, effect: -1
      },
      {
        kind: 0, x: 20, y: -10500, w: 180, h: 11000, dvx: 1, dvy: -25, fall: 70, vrest: 2, bdefend: 100, injury: 2, zwidth: 90, effect: -1
      }
    ]
  },
  116: { name: "nx",
    pic: 61, state: 15, wait: 0, next: 115, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 400, hit_a: 4, hit_d: 117, hit_j: 0,
    itr: [
      {
        kind: 0, x: 200, y: -10500, w: 180, h: 11000, dvx: -1, dvy: -25, fall: 70, vrest: 2, bdefend: 100, injury: 2, zwidth: 90, effect: -1
      },
      {
        kind: 0, x: 20, y: -10500, w: 180, h: 11000, dvx: 1, dvy: -25, fall: 70, vrest: 2, bdefend: 100, injury: 2, zwidth: 90, effect: -1
      }
    ]
  },
  117: { name: "nx",
    pic: 60, state: 15, wait: 1, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 200, y: -10500, w: 180, h: 11000, dvx: 20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      },
      {
        kind: 0, x: 20, y: -10500, w: 180, h: 11000, dvx: -20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      }
    ]
  },
  118: { name: "nx",
    pic: 61, state: 15, wait: 1, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 200, y: -10500, w: 180, h: 11000, dvx: 20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      },
      {
        kind: 0, x: 20, y: -10500, w: 180, h: 11000, dvx: -20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      }
    ]
  },
  119: { name: "nx",
    pic: 60, state: 15, wait: 1, next: 120, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 200, y: -10500, w: 180, h: 11000, dvx: 20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      },
      {
        kind: 0, x: 20, y: -10500, w: 180, h: 11000, dvx: -20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      }
    ]
  },
  120: { name: "nx",
    pic: 61, state: 15, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 400, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 200, y: -10500, w: 180, h: 11000, dvx: 20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      },
      {
        kind: 0, x: 20, y: -10500, w: 180, h: 11000, dvx: -20, dvy: -25, fall: 70, vrest: 4, bdefend: 100, injury: 50, zwidth: 90, effect: -1
      }
    ]
  },
  121: { name: "nx",
    pic: 59, state: 15, wait: 1, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/052"
  },
  122: { name: "nx",
    pic: 58, state: 15, wait: 1, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "nx",
    pic: 57, state: 15, wait: 1, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "nx",
    pic: 56, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "flying",
    pic: 1, state: 15, wait: 0, next: 132, dvx: 0, dvy: 0, centerx: 1, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  132: { name: "flying",
    pic: 2, state: 15, wait: 0, next: 133, dvx: 0, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  133: { name: "flying",
    pic: 3, state: 15, wait: 0, next: 134, dvx: 0, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 32, w: 37, h: 23, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  134: { name: "flying",
    pic: 4, state: 15, wait: 0, next: 135, dvx: 0, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 28, w: 40, h: 29, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  135: { name: "flying",
    pic: 5, state: 15, wait: 0, next: 136, dvx: 0, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 19, w: 44, h: 38, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  136: { name: "flying",
    pic: 6, state: 15, wait: 0, next: 137, dvx: 0, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 44, h: 42, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  137: { name: "flying",
    pic: 7, state: 15, wait: 0, next: 138, dvx: 0, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 43, h: 39, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  138: { name: "flying",
    pic: 8, state: 15, wait: 0, next: 139, dvx: 0, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 46, h: 46, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  139: { name: "flying",
    pic: 9, state: 15, wait: 0, next: 150, dvx: 0, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 8, w: 44, h: 49, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  150: { name: "flying",
    pic: 10, state: 15, wait: 0, next: 151, dvx: 0, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  151: { name: "flying",
    pic: 11, state: 15, wait: 0, next: 152, dvx: 0, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  152: { name: "flying",
    pic: 12, state: 15, wait: 0, next: 153, dvx: 0, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  153: { name: "flying",
    pic: 13, state: 15, wait: 0, next: 154, dvx: 0, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  154: { name: "flying",
    pic: 14, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 4, fall: 16, vrest: 300, bdefend: 16, injury: 6, effect: 25
    }
  },
  155: { name: "flying",
    pic: 19, state: 15, wait: 0, next: 156, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  156: { name: "flying",
    pic: 20, state: 15, wait: 0, next: 157, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "flying",
    pic: 21, state: 15, wait: 0, next: 158, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  158: { name: "flying",
    pic: 22, state: 15, wait: 0, next: 159, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  159: { name: "flying",
    pic: 23, state: 15, wait: 0, next: 160, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "flying",
    pic: 24, state: 15, wait: 0, next: 161, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  161: { name: "flying",
    pic: 25, state: 15, wait: 0, next: 162, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  162: { name: "flying",
    pic: 26, state: 15, wait: 0, next: 163, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  163: { name: "flying",
    pic: 27, state: 15, wait: 0, next: 164, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  164: { name: "flying",
    pic: 28, state: 15, wait: 0, next: 165, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  165: { name: "flying",
    pic: 29, state: 15, wait: 0, next: 166, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "flying",
    pic: 30, state: 15, wait: 0, next: 167, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "flying",
    pic: 31, state: 15, wait: 0, next: 168, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  168: { name: "flying",
    pic: 32, state: 15, wait: 0, next: 169, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  169: { name: "flying",
    pic: 33, state: 15, wait: 0, next: 170, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "flying",
    pic: 34, state: 15, wait: 0, next: 171, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "flying",
    pic: 35, state: 15, wait: 0, next: 172, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  172: { name: "flying",
    pic: 36, state: 15, wait: 0, next: 173, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  173: { name: "flying",
    pic: 37, state: 15, wait: 0, next: 174, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  174: { name: "flying",
    pic: 38, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
}

export default data

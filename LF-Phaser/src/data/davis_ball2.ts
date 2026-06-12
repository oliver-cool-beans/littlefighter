import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-2)": "sprite/davis_ball2.png", w: 95, h: 95, row: 3, col: 1
      },
      {
        "file(3-10)": "sprite/davis_col.png", w: 79, h: 439, row: 8, col: 1
      }
    ],
    name: 'davis_ball2',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "col",
    pic: 3, state: 15, wait: 0, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 325, w: 60, h: 101, dvx: 0, dvy: -36, fall: 70, vrest: 30, bdefend: 100, injury: 9, zwidth: 30
    }
  },
  1: { name: "col",
    pic: 4, state: 15, wait: 0, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/115",
    itr: {
      kind: 0, x: 5, y: 275, w: 60, h: 151, dvx: 0, dvy: -36, fall: 70, vrest: 30, bdefend: 100, injury: 9, zwidth: 30
    },
    opoint: {
      kind: 1, x: 40, y: 410, action: 10, dvx: 0, dvy: -5, oid: 207, facing: 0
    }
  },
  2: { name: "col",
    pic: 5, state: 15, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 195, w: 60, h: 231, dvx: 0, dvy: -36, fall: 70, vrest: 30, bdefend: 100, injury: 9, zwidth: 30
    },
    opoint: {
      kind: 1, x: 40, y: 410, action: 10, dvx: 0, dvy: -5, oid: 207, facing: 0
    }
  },
  3: { name: "col",
    pic: 6, state: 15, wait: 0, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 75, w: 60, h: 351, dvx: 0, dvy: -36, fall: 70, vrest: 30, bdefend: 100, injury: 9, zwidth: 30
    },
    opoint: {
      kind: 1, x: 40, y: 410, action: 10, dvx: 0, dvy: -5, oid: 207, facing: 0
    }
  },
  4: { name: "col",
    pic: 7, state: 15, wait: 0, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 15, w: 60, h: 411, dvx: 0, dvy: -36, fall: 70, vrest: 30, bdefend: 100, injury: 9, zwidth: 30
    },
    opoint: {
      kind: 1, x: 40, y: 410, action: 10, dvx: 0, dvy: -5, oid: 207, facing: 0
    }
  },
  5: { name: "col",
    pic: 8, state: 15, wait: 0, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 15, w: 60, h: 411, dvx: 0, dvy: -36, fall: 70, vrest: 30, bdefend: 100, injury: 9, zwidth: 30
    },
    opoint: {
      kind: 1, x: 40, y: 410, action: 10, dvx: 0, dvy: -5, oid: 207, facing: 0
    }
  },
  6: { name: "col",
    pic: 9, state: 15, wait: 0, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "col",
    pic: 10, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "col2",
    pic: 9, state: 15, wait: 2, next: 9, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "col2",
    pic: 10, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "ball",
    pic: 2, state: 9, wait: 1, next: 51, dvx: 4, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/114",
    itr: [
      {
        kind: 3, x: 12, y: 12, w: 72, h: 72, vrest: 7,
        catchingact: [55, NaN], caughtact: [132, NaN]
      },
      {
        kind: 0, x: 12, y: 12, w: 72, h: 72, bdefend: 100, zwidth: 30, effect: 4
      }
    ]
  },
  51: { name: "ball",
    pic: 1, state: 9, wait: 1, next: 52, dvx: 4, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 3, x: 12, y: 12, w: 72, h: 72, vrest: 7,
        catchingact: [55, NaN], caughtact: [132, NaN]
      },
      {
        kind: 0, x: 12, y: 12, w: 72, h: 72, bdefend: 100, zwidth: 30, effect: 4
      }
    ]
  },
  52: { name: "ball",
    pic: 0, state: 9, wait: 1, next: 53, dvx: 4, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 7, hit_d: 54, hit_j: 0,
    sound: "1/051",
    itr: [
      {
        kind: 3, x: 12, y: 12, w: 72, h: 72, vrest: 7,
        catchingact: [55, NaN], caughtact: [132, NaN]
      },
      {
        kind: 0, x: 12, y: 12, w: 72, h: 72, bdefend: 100, zwidth: 30, effect: 4
      }
    ]
  },
  53: { name: "ball",
    pic: 1, state: 9, wait: 1, next: 52, dvx: 4, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 7, hit_d: 54, hit_j: 0,
    itr: [
      {
        kind: 3, x: 12, y: 12, w: 72, h: 72, vrest: 7,
        catchingact: [55, NaN], caughtact: [132, NaN]
      },
      {
        kind: 0, x: 12, y: 12, w: 72, h: 72, bdefend: 100, zwidth: 30, effect: 4
      }
    ]
  },
  54: { name: "ball",
    pic: 2, state: 9, wait: 1, next: 1000, dvx: 4, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 3, x: 12, y: 12, w: 72, h: 72, vrest: 7,
        catchingact: [55, NaN], caughtact: [132, NaN]
      },
      {
        kind: 0, x: 12, y: 12, w: 72, h: 72, bdefend: 100, zwidth: 30, effect: 4
      }
    ]
  },
  55: { name: "ball",
    pic: 0, state: 9, wait: 1, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/076",
    cpoint: {
      kind: 1, x: 45, y: 35, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -4
    },
    itr: {
      kind: 0, x: 12, y: 12, w: 72, h: 72, dvx: 26, dvy: -6, fall: 70, vrest: 15, bdefend: 100, injury: 78, zwidth: 30
    }
  },
  56: { name: "ball",
    pic: 1, state: 9, wait: 1, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 45, y: 35, injury: 13, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -4
    },
    itr: {
      kind: 0, x: 12, y: 12, w: 72, h: 72, dvx: 26, dvy: -6, fall: 70, vrest: 15, bdefend: 100, injury: 78, zwidth: 30
    },
    opoint: {
      kind: 1, x: 48, y: 48, action: 52, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  57: { name: "ball",
    pic: 0, state: 9, wait: 2, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/076",
    cpoint: {
      kind: 1, x: 45, y: 35, injury: 2, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -4
    },
    itr: {
      kind: 0, x: 12, y: 12, w: 72, h: 72, dvx: 26, dvy: -6, fall: 70, vrest: 15, bdefend: 100, injury: 78, zwidth: 30
    }
  },
  58: { name: "ball",
    pic: 1, state: 9, wait: 2, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 45, y: 35, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -4
    },
    itr: {
      kind: 0, x: 12, y: 12, w: 72, h: 72, dvx: 26, dvy: -6, fall: 70, vrest: 15, bdefend: 100, injury: 78, zwidth: 30
    }
  },
  60: { name: "col_m",
    pic: 11, state: 15, wait: 0, next: 61, dvx: 5, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 28, hit_d: 62, hit_j: 0
  },
  61: { name: "col_m",
    pic: 11, state: 15, wait: 5, next: 60, dvx: 5, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 28, hit_d: 62, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 0, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  62: { name: "col_m",
    pic: 11, state: 15, wait: 0, next: 1000, dvx: 5, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  66: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 77, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  67: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 87, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  68: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 96, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  69: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 115, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  70: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 122, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  71: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 128, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  72: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 133, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  73: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 137, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  74: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 75, dvx: 85, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 76, dvx: 85, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  76: { name: "col_m50",
    pic: 11, state: 15, wait: 0, next: 75, dvx: 85, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 0,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  77: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 85, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 86, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 40,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  86: { name: "col_m40",
    pic: 11, state: 15, wait: 0, next: 85, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 40,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  87: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  88: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  91: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  92: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  93: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 94, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  94: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 95, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 60,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  95: { name: "col_m60",
    pic: 11, state: 15, wait: 0, next: 94, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 60,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  96: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 97, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  97: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 98, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  98: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 99, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  99: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "col2",
    pic: 3, state: 15, wait: 0, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -15, y: 325, w: 100, h: 101, dvx: 0, dvy: -28, fall: 70, vrest: 7, bdefend: 100, injury: 3, zwidth: 50
    }
  },
  101: { name: "col2",
    pic: 4, state: 15, wait: 0, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/115",
    itr: {
      kind: 0, x: -15, y: 275, w: 100, h: 151, dvx: 0, dvy: -28, fall: 70, vrest: 7, bdefend: 100, injury: 4, zwidth: 50
    }
  },
  102: { name: "col2",
    pic: 5, state: 15, wait: 0, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -15, y: 195, w: 100, h: 231, dvx: 0, dvy: -28, fall: 70, vrest: 7, bdefend: 100, injury: 3, zwidth: 50
    }
  },
  103: { name: "col2",
    pic: 6, state: 15, wait: 0, next: 104, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -15, y: 75, w: 100, h: 351, dvx: 0, dvy: -28, fall: 70, vrest: 7, bdefend: 100, injury: 4, zwidth: 50
    }
  },
  104: { name: "col2",
    pic: 7, state: 15, wait: 2, next: 105, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 15, hit_d: 8, hit_j: 0,
    itr: {
      kind: 0, x: -15, y: 15, w: 100, h: 411, dvx: 0, dvy: -28, fall: 70, vrest: 7, bdefend: 100, injury: 3, zwidth: 50
    }
  },
  105: { name: "col2",
    pic: 8, state: 15, wait: 2, next: 104, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 390, hit_a: 15, hit_d: 8, hit_j: 0,
    itr: {
      kind: 0, x: -15, y: 15, w: 100, h: 411, dvx: 0, dvy: -28, fall: 70, vrest: 7, bdefend: 100, injury: 4, zwidth: 50
    }
  },
  110: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  111: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 112, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 113, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 30,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  113: { name: "col_m30",
    pic: 11, state: 15, wait: 0, next: 112, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 30,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  115: { name: "col_m70",
    pic: 11, state: 15, wait: 0, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "col_m70",
    pic: 11, state: 15, wait: 0, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "col_m70",
    pic: 11, state: 15, wait: 0, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "col_m70",
    pic: 11, state: 15, wait: 0, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "col_m70",
    pic: 11, state: 15, wait: 0, next: 120, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "col_m70",
    pic: 11, state: 15, wait: 0, next: 121, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 70,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  121: { name: "col_m70",
    pic: 11, state: 15, wait: 0, next: 120, dvx: 80, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 70,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  122: { name: "col_m20",
    pic: 11, state: 15, wait: 0, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "col_m20",
    pic: 11, state: 15, wait: 0, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  124: { name: "col_m20",
    pic: 11, state: 15, wait: 0, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "col_m20",
    pic: 11, state: 15, wait: 0, next: 126, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  126: { name: "col_m20",
    pic: 11, state: 15, wait: 0, next: 127, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 20,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  127: { name: "col_m20",
    pic: 11, state: 15, wait: 0, next: 126, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 20,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  128: { name: "col_m80",
    pic: 11, state: 15, wait: 0, next: 129, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  129: { name: "col_m80",
    pic: 11, state: 15, wait: 0, next: 130, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "col_m80",
    pic: 11, state: 15, wait: 0, next: 131, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "col_m80",
    pic: 11, state: 15, wait: 0, next: 132, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 80,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  132: { name: "col_m80",
    pic: 11, state: 15, wait: 0, next: 131, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 80,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  133: { name: "col_m10",
    pic: 11, state: 15, wait: 0, next: 134, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  134: { name: "col_m10",
    pic: 11, state: 15, wait: 0, next: 135, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "col_m10",
    pic: 11, state: 15, wait: 0, next: 136, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 10,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  136: { name: "col_m10",
    pic: 11, state: 15, wait: 0, next: 135, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 10,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  137: { name: "col_m90",
    pic: 11, state: 15, wait: 0, next: 138, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  138: { name: "col_m90",
    pic: 11, state: 15, wait: 0, next: 139, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 90,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  139: { name: "col_m90",
    pic: 11, state: 15, wait: 0, next: 138, dvx: 75, dvy: 0, dvz: 0, centerx: 48, centery: 48, hit_a: 56, hit_d: 62, hit_j: 90,
    opoint: {
      kind: 1, x: 48, y: 48, action: 100, dvx: 0, dvy: 0, oid: 344, facing: 0
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  }
  }

}

export default data

import type { CharacterData } from '../types/index.js'
const data: CharacterData = {
  bmp: {
    name: 'knight_thunder',
    file: [
      {
        "file(0-13)": "sprite/knight_col.png", w: 109, h: 439, row: 7, col: 2
      },
      {
        "file(14-16)": "sprite/rudolf_flash.png", w: 319, h: 99, row: 1, col: 3
      },
      {
        "file(17)": "sprite/rudolf_flash2.png", w: 1999, h: 1199, row: 1, col: 1
      },
      {
        "file(18-27)": "sprite/spark.png", w: 99, h: 79, row: 5, col: 2
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  1: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 1, hit_j: 0, hit_Fa: 12,
    sound: "1/105",
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  2: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 2, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  3: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 3, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  4: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 4, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  5: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 5, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  6: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 6, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  7: { name: "flying",
    pic: 100, state: 1006, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 7, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  50: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/105",
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  51: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  52: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  53: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  54: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  55: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  56: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  57: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  58: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  59: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 60, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  60: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 61, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/105",
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  61: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 62, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  62: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 63, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  63: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 64, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  64: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 65, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  65: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 66, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  66: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 67, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  67: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 68, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  68: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 69, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  69: { name: "start",
    pic: 100, state: 1006, wait: 2, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 40, action: 120, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  100: { name: "col1",
    pic: 0, state: 15, wait: 1, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "col1",
    pic: 1, state: 15, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  102: { name: "col1",
    pic: 2, state: 15, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  103: { name: "col2",
    pic: 3, state: 15, wait: 1, next: 104, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  104: { name: "col2",
    pic: 4, state: 15, wait: 1, next: 105, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  105: { name: "col",
    pic: 5, state: 15, wait: 1, next: 106, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  106: { name: "col",
    pic: 6, state: 15, wait: 1, next: 107, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  107: { name: "col2",
    pic: 3, state: 15, wait: 1, next: 108, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  108: { name: "col2",
    pic: 4, state: 15, wait: 1, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  109: { name: "col",
    pic: 5, state: 15, wait: 1, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  110: { name: "col",
    pic: 6, state: 15, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  111: { name: "col2",
    pic: 3, state: 15, wait: 1, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  112: { name: "col2",
    pic: 4, state: 15, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  113: { name: "col",
    pic: 5, state: 15, wait: 1, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  114: { name: "col",
    pic: 6, state: 15, wait: 1, next: 115, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, dvy: -20, fall: 70, vrest: 8, bdefend: 70, injury: 8, zwidth: 37
      }
    ]
  },
  115: { name: "col1",
    pic: 0, state: 15, wait: 1, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "col1",
    pic: 1, state: 15, wait: 1, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "col1",
    pic: 2, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "col1",
    pic: 7, state: 15, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  121: { name: "col1",
    pic: 8, state: 15, wait: 1, next: 122, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "col1",
    pic: 9, state: 15, wait: 1, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "col2",
    pic: 10, state: 15, wait: 1, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  124: { name: "col2",
    pic: 11, state: 15, wait: 1, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  125: { name: "col",
    pic: 12, state: 15, wait: 1, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  126: { name: "col",
    pic: 13, state: 15, wait: 1, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 7, zwidth: 37
      }
    ]
  },
  127: { name: "col2",
    pic: 10, state: 15, wait: 1, next: 128, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  128: { name: "col2",
    pic: 11, state: 15, wait: 1, next: 129, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  129: { name: "col",
    pic: 12, state: 15, wait: 1, next: 130, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  130: { name: "col",
    pic: 13, state: 15, wait: 1, next: 131, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  131: { name: "col2",
    pic: 10, state: 15, wait: 1, next: 132, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 70, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  132: { name: "col2",
    pic: 11, state: 15, wait: 1, next: 133, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  133: { name: "col",
    pic: 12, state: 15, wait: 1, next: 134, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  134: { name: "col",
    pic: 13, state: 15, wait: 1, next: 135, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 0, y: 0, w: 57, h: 540, dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      },
      {
        kind: 0, x: 53, y: 0, w: 55, h: 540, dvx: -8, fall: 70, vrest: 8, bdefend: 100, injury: 4, zwidth: 37
      }
    ]
  },
  135: { name: "col1",
    pic: 7, state: 15, wait: 1, next: 136, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  136: { name: "col1",
    pic: 8, state: 15, wait: 1, next: 137, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  137: { name: "col1",
    pic: 9, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 430, hit_a: 0, hit_d: 0, hit_j: 0
  },
  139: { name: "flash2",
    pic: 999, state: 3005, wait: 0, next: 141, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -400, y: -400, w: 800, h: 600, dvx: 1, dvy: -5, fall: 70, vrest: 20, bdefend: 100, injury: 6, zwidth: 1000, effect: 1
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 145, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  140: { name: "flash2",
    pic: 999, state: 3005, wait: 0, next: 139, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "flash2",
    pic: 999, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    opoint: {
      kind: 1, x: 0, y: 0, action: 142, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  142: { name: "flash",
    pic: 14, state: 15, wait: 1, next: 143, dvx: 0, dvy: 0, dvz: 0, centerx: 160, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "flash",
    pic: 15, state: 15, wait: 1, next: 144, dvx: 0, dvy: 0, dvz: 0, centerx: 160, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  144: { name: "flash",
    pic: 16, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 160, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 160, y: 40, action: 155, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  145: { name: "flashflash",
    pic: 17, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 1000, centery: 600, hit_a: 0, hit_d: 0, hit_j: 1000
  },
  150: { name: "spark",
    pic: 18, state: 15, wait: 0, next: 151, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "spark",
    pic: 19, state: 15, wait: 0, next: 152, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "spark",
    pic: 20, state: 15, wait: 0, next: 153, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "spark",
    pic: 21, state: 15, wait: 0, next: 154, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "spark",
    pic: 22, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "spark2",
    pic: 23, state: 15, wait: 0, next: 156, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  156: { name: "spark2",
    pic: 24, state: 15, wait: 0, next: 157, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "spark2",
    pic: 25, state: 15, wait: 0, next: 158, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  158: { name: "spark2",
    pic: 26, state: 15, wait: 0, next: 159, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  159: { name: "spark2",
    pic: 27, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
}
export default data

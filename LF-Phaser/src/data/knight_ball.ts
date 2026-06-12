import type { CharacterData } from '../types/index.js'
const data: CharacterData = {
  bmp: {
    name: 'knight_ball',
    file: [
      {
        "file(0-1)": "sprite/knight_ball.png", w: 109, h: 126, row: 2, col: 1
      },
      {
        "file(2-6)": "sprite/guardian_ball.png", w: 59, h: 49, row: 5, col: 1
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 1006, wait: 1, next: 0, dvx: 25, dvy: 0, dvz: 0, centerx: 55, centery: 86, hit_a: 7, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 9, x: 5, y: 2, w: 100, h: 122, dvy: -1, fall: 70, vrest: 8, bdefend: 100, injury: 38, effect: 1, zwidth: 23
    }
  },
  1: { name: "flying",
    pic: 0, state: 1006, wait: 1, next: 2, dvx: 25, dvy: 0, dvz: 0, centerx: 55, centery: 86, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 9, x: 5, y: 2, w: 100, h: 122, dvy: -1, fall: 70, vrest: 8, bdefend: 100, injury: 38, effect: 1, zwidth: 23
    }
  },
  2: { name: "flying",
    pic: 1, state: 1006, wait: 1, next: 999, dvx: 25, dvy: 0, dvz: 0, centerx: 55, centery: 86, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 9, x: 5, y: 2, w: 100, h: 122, dvy: -1, fall: 70, vrest: 8, bdefend: 100, injury: 38, effect: 1, zwidth: 23
    }
  },
  10: { name: "_",
    pic: 5, state: 3006, wait: 1, next: 31, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "_",
    pic: 5, state: 3006, wait: 1, next: 31, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "_",
    pic: 5, state: 3006, wait: 1, next: 31, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "_",
    pic: 6, state: 3006, wait: 1, next: 1000, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "w",
    pic: 7, state: 1006, wait: 8, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 9, x: -240, y: -2000, w: 295, h: 2100, dvx: -20, fall: 1, vrest: 5, bdefend: 100, zwidth: 500, effect: -1, injury: 1
      },
      {
        kind: 9, x: 55, y: -2000, w: 95, h: 2100, dvx: 20, fall: 1, vrest: 8, bdefend: 100, zwidth: 500, effect: -1, injury: 5
      }
    ]
  },
  51: { name: "w",
    pic: 7, state: 1006, wait: 8, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 9, x: -240, y: -2000, w: 295, h: 2100, dvx: -20, fall: 1, vrest: 5, bdefend: 100, zwidth: 500, effect: -1, injury: 1
      },
      {
        kind: 9, x: 55, y: -2000, w: 95, h: 2100, dvx: 20, fall: 1, vrest: 8, bdefend: 100, zwidth: 500, effect: -1, injury: 5
      }
    ]
  },
  60: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 61, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/116",
    opoint: {
      kind: 1, x: 30, y: 80, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  61: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 62, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 20, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  62: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 63, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 50, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  63: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 64, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 20, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  64: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 65, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 50, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  65: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 66, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 80, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  66: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 67, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 50, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  67: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 68, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 80, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  68: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 75, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 30, y: 20, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  70: { name: "f",
    pic: 2, state: 3006, wait: 2, next: 71, dvx: 1, dvy: 0, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 9, w: 36, h: 36, dvy: -5, dvx: 1, fall: 70, vrest: 7, bdefend: 20, injury: 13, effect: 2, zwidth: 24
    }
  },
  71: { name: "f",
    pic: 3, state: 3006, wait: 2, next: 72, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 9, w: 36, h: 36, dvy: -5, dvx: 1, fall: 70, vrest: 7, bdefend: 20, injury: 13, effect: 2, zwidth: 24
    }
  },
  72: { name: "f",
    pic: 4, state: 3006, wait: 2, next: 73, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 9, w: 36, h: 36, dvy: -5, dvx: 1, fall: 70, vrest: 7, bdefend: 20, injury: 13, effect: 2, zwidth: 24
    }
  },
  73: { name: "f",
    pic: 5, state: 3006, wait: 1, next: 74, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "f",
    pic: 6, state: 3006, wait: 1, next: 1000, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 76, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 75, hit_j: 0, hit_Fa: 12,
    sound: "1/116",
    opoint: {
      kind: 1, x: 30, y: 80, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  76: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 77, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 76, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 20, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  77: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 78, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 77, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 50, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  78: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 79, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 78, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 20, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  79: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 80, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 79, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 50, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  80: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 81, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 80, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 80, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  81: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 82, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 81, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 50, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  82: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 83, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 82, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 80, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  83: { name: "flying",
    pic: 7, state: 1006, wait: 1, next: 75, dvx: 15, dvy: 0, dvz: 0, centerx: 30, centery: 40, hit_a: 9, hit_d: 83, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 30, y: 20, action: 70, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  110: { name: "start",
    pic: 1, state: 1006, wait: 5, next: 1, dvx: 25, dvy: 0, dvz: 0, centerx: 55, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    itr: {
      kind: 9, x: 5, y: 2, w: 100, h: 122, dvy: -1, fall: 70, vrest: 8, bdefend: 100, injury: 38, effect: 1, zwidth: 23
    }
  }
  }
}
export default data

import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-13)": "sprite/cl_chase.png", w: 199, h: 117, row: 2, col: 7
      },
      {
        "file(14-18)": "sprite/dennis_ball3.png", w: 81, h: 81, row: 5, col: 1
      }
    ],
    name: 'cl_chase',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "appear1",
    pic: 11, state: 1006, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "appear1",
    pic: 10, state: 1006, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/111"
  },
  2: { name: "appear1",
    pic: 9, state: 1006, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "appear1",
    pic: 8, state: 1006, wait: 1, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "appear1",
    pic: 7, state: 1006, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "appear1",
    pic: 6, state: 1006, wait: 1, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "appear1",
    pic: 5, state: 1006, wait: 1, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "appear1",
    pic: 4, state: 1006, wait: 1, next: 50, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hit",
    pic: 15, state: 3001, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 15, state: 3002, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "hit",
    pic: 15, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "hit",
    pic: 16, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "hit",
    pic: 17, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "hit",
    pic: 18, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "fly_u",
    pic: 14, state: 3006, wait: 2, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    sound: "1/047",
    itr: {
      kind: 0, x: 25, y: 1, w: 35, h: 80, dvx: 14, dvy: -11, fall: 70, vrest: 8, bdefend: 16, injury: 26, effect: 1, zwidth: 20
    },
    bdy: {
      kind: 0, x: 25, y: 1, w: 35, h: 80
    }
  },
  41: { name: "fly_u",
    pic: 14, state: 3006, wait: 1, next: 42, dvx: 28, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 25, y: 1, w: 35, h: 80, dvx: 14, dvy: -9, fall: 70, vrest: 8, bdefend: 16, injury: 26, effect: 1, zwidth: 20
    },
    bdy: {
      kind: 0, x: 25, y: 1, w: 35, h: 80
    }
  },
  42: { name: "fly_u",
    pic: 14, state: 3006, wait: 1, next: 41, dvx: 28, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 25, y: 1, w: 35, h: 80, dvx: 14, dvy: -9, fall: 70, vrest: 8, bdefend: 16, injury: 26, effect: 1, zwidth: 20
    },
    bdy: {
      kind: 0, x: 25, y: 1, w: 35, h: 80
    }
  },
  43: { name: "fly_u",
    pic: 14, state: 3006, wait: 2, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    sound: "1/047",
    itr: {
      kind: 0, x: 25, y: 1, w: 35, h: 80, dvx: 14, dvy: -11, fall: 70, vrest: 8, bdefend: 16, injury: 26, effect: 1, zwidth: 20
    },
    bdy: {
      kind: 0, x: 25, y: 1, w: 35, h: 80
    }
  },
  44: { name: "fly_u",
    pic: 14, state: 3006, wait: 1, next: 45, dvx: 28, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 25, y: 1, w: 35, h: 80, dvx: 14, dvy: -9, fall: 70, vrest: 8, bdefend: 16, injury: 26, effect: 1, zwidth: 20
    },
    bdy: {
      kind: 0, x: 25, y: 1, w: 35, h: 80
    }
  },
  45: { name: "fly_u",
    pic: 14, state: 3006, wait: 1, next: 44, dvx: 28, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 25, y: 1, w: 35, h: 80, dvx: 14, dvy: -9, fall: 70, vrest: 8, bdefend: 16, injury: 26, effect: 1, zwidth: 20
    },
    bdy: {
      kind: 0, x: 25, y: 1, w: 35, h: 80
    }
  },
  50: { name: "fly1",
    pic: 0, state: 1005, wait: 1, next: 51, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  51: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 52, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  52: { name: "fly1",
    pic: 2, state: 1005, wait: 1, next: 53, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  53: { name: "fly1",
    pic: 3, state: 1005, wait: 1, next: 54, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  54: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 55, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  55: { name: "fly1",
    pic: 0, state: 1005, wait: 1, next: 56, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  56: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 57, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  57: { name: "fly1",
    pic: 2, state: 1005, wait: 1, next: 58, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  58: { name: "fly1",
    pic: 3, state: 1005, wait: 1, next: 59, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  59: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 60, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  60: { name: "fly1",
    pic: 0, state: 1005, wait: 1, next: 61, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  61: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 62, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  62: { name: "fly1",
    pic: 2, state: 1005, wait: 1, next: 63, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  63: { name: "fly1",
    pic: 3, state: 1005, wait: 1, next: 64, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  64: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 65, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  65: { name: "fly1",
    pic: 0, state: 1005, wait: 1, next: 66, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  66: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 67, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  67: { name: "fly1",
    pic: 2, state: 1005, wait: 1, next: 68, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  68: { name: "fly1",
    pic: 3, state: 1005, wait: 1, next: 69, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  69: { name: "fly1",
    pic: 1, state: 1005, wait: 1, next: 70, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  70: { name: "fly1",
    pic: 0, state: 1005, wait: 1, next: 71, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  71: { name: "disappear1",
    pic: 4, state: 1006, wait: 1, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "disappear1",
    pic: 5, state: 1006, wait: 1, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "disappear1",
    pic: 6, state: 1006, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "disappear1",
    pic: 7, state: 1006, wait: 1, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "disappear1",
    pic: 8, state: 1006, wait: 1, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "disappear1",
    pic: 9, state: 1006, wait: 1, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "disappear1",
    pic: 10, state: 1006, wait: 1, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  78: { name: "disappear1",
    pic: 11, state: 1006, wait: 1, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  79: { name: "disappear1",
    pic: 11, state: 400, wait: 35, next: 80, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "appear2",
    pic: 11, state: 1006, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "appear2",
    pic: 10, state: 1006, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/111"
  },
  82: { name: "appear2",
    pic: 9, state: 1006, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "appear2",
    pic: 8, state: 1006, wait: 1, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  84: { name: "appear2",
    pic: 7, state: 1006, wait: 1, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "appear2",
    pic: 6, state: 1006, wait: 1, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "appear2",
    pic: 5, state: 1006, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  87: { name: "appear2",
    pic: 4, state: 1006, wait: 1, next: 90, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  90: { name: "fly2",
    pic: 0, state: 1005, wait: 1, next: 91, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  91: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 92, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  92: { name: "fly2",
    pic: 2, state: 1005, wait: 1, next: 93, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  93: { name: "fly2",
    pic: 3, state: 1005, wait: 1, next: 94, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  94: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 95, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  95: { name: "fly2",
    pic: 0, state: 1005, wait: 1, next: 96, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  96: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 97, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  97: { name: "fly2",
    pic: 2, state: 1005, wait: 1, next: 98, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  98: { name: "fly2",
    pic: 3, state: 1005, wait: 1, next: 99, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  99: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 100, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  100: { name: "fly2",
    pic: 0, state: 1005, wait: 1, next: 101, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  101: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 102, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  102: { name: "fly2",
    pic: 2, state: 1005, wait: 1, next: 103, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  103: { name: "fly2",
    pic: 3, state: 1005, wait: 1, next: 104, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  104: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 105, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  105: { name: "fly2",
    pic: 0, state: 1005, wait: 1, next: 106, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  106: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 107, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  107: { name: "fly2",
    pic: 2, state: 1005, wait: 1, next: 108, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  108: { name: "fly2",
    pic: 3, state: 1005, wait: 1, next: 109, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  109: { name: "fly2",
    pic: 1, state: 1005, wait: 1, next: 110, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  110: { name: "fly2",
    pic: 0, state: 1005, wait: 1, next: 111, dvx: 20, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 20, dvy: -12, fall: 70, vrest: 8, bdefend: 100, injury: 42, zwidth: 45
    }
  },
  111: { name: "disappear2",
    pic: 4, state: 1006, wait: 1, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  112: { name: "disappear2",
    pic: 5, state: 1006, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  113: { name: "disappear2",
    pic: 6, state: 1006, wait: 1, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  114: { name: "disappear2",
    pic: 7, state: 1006, wait: 1, next: 115, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  115: { name: "disappear2",
    pic: 8, state: 1006, wait: 1, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  116: { name: "disappear2",
    pic: 9, state: 1006, wait: 1, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  117: { name: "disappear2",
    pic: 10, state: 1006, wait: 1, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  118: { name: "disappear2",
    pic: 11, state: 1006, wait: 1, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "disappear2",
    pic: 11, state: 400, wait: 35, next: 340, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  340: { name: "appear2",
    pic: 11, state: 1006, wait: 1, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  341: { name: "appear2",
    pic: 10, state: 1006, wait: 1, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  342: { name: "appear2",
    pic: 9, state: 1006, wait: 1, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  343: { name: "appear2",
    pic: 8, state: 1006, wait: 1, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  344: { name: "appear2",
    pic: 7, state: 1006, wait: 1, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  345: { name: "appear2",
    pic: 6, state: 1006, wait: 1, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  346: { name: "appear2",
    pic: 5, state: 1006, wait: 1, next: 347, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  347: { name: "appear2",
    pic: 4, state: 1006, wait: 1, next: 350, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0
  },
  350: { name: "fly4",
    pic: 4, state: 1006, wait: 0, next: 351, dvx: 0, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/112"
  },
  351: { name: "fly4",
    pic: 12, state: 1005, wait: 1, next: 352, dvx: 30, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 25, dvy: -12, fall: 70, vrest: 6, bdefend: 100, injury: 36, zwidth: 135
    }
  },
  352: { name: "fly4",
    pic: 13, state: 1005, wait: 1, next: 351, dvx: 30, dvy: 0, dvz: 0, centerx: 100, centery: 141, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 35, w: 186, h: 81, dvx: 25, dvy: -12, fall: 70, vrest: 6, bdefend: 100, injury: 36, zwidth: 135
    }
  }
  }

}

export default data

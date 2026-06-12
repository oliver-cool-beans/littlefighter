import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-7)": "sprite/jan_chase.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-11)": "sprite/jan_chaseb.png", w: 25, h: 25, row: 4, col: 1
      },
      {
        "file(12-15)": "sprite/jan_ball.png", w: 32, h: 259, row: 4, col: 1
      },
      {
        "file(16-23)": "sprite/jan_ball2.png", w: 327, h: 331, row: 4, col: 2
      }
    ],
    name: 'jan_chase',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    bdy: {
      kind: 0, x: 28, y: 30, w: 27, h: 26
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 60, injury: 12
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 60, injury: 12
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 40, hit_a: 7, hit_d: 3, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 60, injury: 12
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 56, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 58, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 8, state: 3005, wait: 2, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "tail",
    pic: 9, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "tail",
    pic: 10, state: 3005, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "tail",
    pic: 11, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 6
  },
  52: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 4, state: 3001, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    sound: "1/020",
    pic: 5, state: 3001, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "hiting_ground",
    pic: 6, state: 3001, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "hiting_ground",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 56, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "start",
    pic: 100, state: 3005, wait: 0, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "start",
    pic: 100, state: 3005, wait: 40, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 75, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  75: { name: "up",
    pic: 12, state: 15, wait: 1, next: 76, dvx: 0, dvy: -15, dvz: 0, centerx: 16, centery: 240, hit_a: 40, hit_d: 77, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 30, h: 220, dvx: 1, dvy: -15, fall: 70, vrest: 15, bdefend: 60, injury: 19
    }
  },
  76: { name: "up",
    pic: 13, state: 15, wait: 1, next: 75, dvx: 0, dvy: -15, dvz: 0, centerx: 16, centery: 240, hit_a: 40, hit_d: 77, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 3, w: 30, h: 220, dvx: 1, dvy: -15, fall: 70, vrest: 15, bdefend: 60, injury: 19
    }
  },
  77: { name: "up",
    pic: 100, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  85: { name: "change",
    pic: 100, state: 400, wait: 1, next: 86, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  86: { name: "change",
    pic: 100, state: 400, wait: 7, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 88, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  87: { name: "change",
    pic: 100, state: 400, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 88, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  88: { name: "change",
    pic: 100, state: 3005, wait: 0, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  89: { name: "change",
    pic: 100, state: 3005, wait: 8, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 120, y: -400, action: 90, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  90: { name: "down",
    pic: 14, state: 15, wait: 1, next: 91, dvx: 0, dvy: 10, dvz: 0, centerx: 16, centery: 257, hit_a: 55, hit_d: 94, hit_j: 0,
    itr: {
      kind: 0, x: 1, y: 37, w: 34, h: 220, dvx: 1, dvy: -10, fall: 70, vrest: 15, bdefend: 60, injury: 11, zwidth: 15
    }
  },
  91: { name: "down",
    pic: 15, state: 15, wait: 1, next: 91, dvx: 0, dvy: 10, dvz: 0, centerx: 16, centery: 257, hit_a: 56, hit_d: 94, hit_j: 0,
    itr: {
      kind: 0, x: 1, y: 37, w: 34, h: 220, dvx: 1, dvy: -10, fall: 70, vrest: 15, bdefend: 60, injury: 11, zwidth: 15
    }
  },
  92: { name: "down",
    pic: 100, state: 15, wait: 0, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  93: { name: "down",
    pic: 100, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 120, y: 10, action: 10, dvx: 0, dvy: -5, oid: 220, facing: 0
    }
  },
  94: { name: "down",
    pic: 100, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  95: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 85, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  96: { name: "mo",
    pic: 100, state: 15, wait: 15, next: 97, dvx: 30, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 10, hit_d: 98, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 95, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  97: { name: "mo",
    pic: 100, state: 15, wait: 15, next: 96, dvx: 30, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 10, hit_d: 98, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 95, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  98: { name: "mo",
    pic: 100, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 0, y: 0, action: 95, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  },
  100: { name: "angel",
    pic: 16, state: 15, wait: 1, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 31, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "angel",
    pic: 17, state: 15, wait: 1, next: 102, dvx: 0, dvy: 0, dvz: 0, centerx: 64, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 64, y: 92, action: 150, dvx: 3, dvy: 0, oid: 345, facing: 40
    }
  },
  102: { name: "angel",
    pic: 18, state: 15, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 96, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 96, y: 148, action: 150, dvx: -3, dvy: 0, oid: 345, facing: 30
    }
  },
  103: { name: "angel",
    pic: 19, state: 15, wait: 1, next: 104, dvx: 0, dvy: 0, dvz: 0, centerx: 128, centery: 199, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 128, y: 199, action: 150, dvx: 3, dvy: 0, oid: 345, facing: 40
    }
  },
  104: { name: "angel",
    pic: 20, state: 15, wait: 1, next: 105, dvx: 0, dvy: 0, dvz: 0, centerx: 160, centery: 245, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 160, y: 245, action: 150, dvx: -3, dvy: 0, oid: 345, facing: 30
    }
  },
  105: { name: "angel",
    pic: 21, state: 15, wait: 2, next: 106, dvx: 0, dvy: 0, dvz: 0, centerx: 186, centery: 245, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 186, y: 245, action: 150, dvx: 3, dvy: 0, oid: 345, facing: 40
    }
  },
  106: { name: "angel",
    pic: 22, state: 15, wait: 1, next: 107, dvx: 0, dvy: 0, dvz: 0, centerx: 182, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 50, w: 100, h: 215, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 245, action: 150, dvx: -2, dvy: 0, oid: 345, facing: 30
    }
  },
  107: { name: "angel",
    pic: 22, state: 15, wait: 1, next: 108, dvx: 0, dvy: 0, dvz: 0, centerx: 182, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 245, action: 150, dvx: 2, dvy: 0, oid: 345, facing: 30
    }
  },
  108: { name: "angel",
    pic: 22, state: 15, wait: 1, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 182, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 245, action: 150, dvx: -2, dvy: 0, oid: 345, facing: 30
    }
  },
  109: { name: "angel",
    pic: 22, state: 15, wait: 1, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 182, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 245, action: 150, dvx: 2, dvy: 0, oid: 345, facing: 30
    }
  },
  110: { name: "angel",
    pic: 23, state: 15, wait: 0, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 187, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 187, y: 145, action: 50, dvx: 0, dvy: 0, oid: 220, facing: 20
    }
  },
  111: { name: "angel",
    pic: 23, state: 15, wait: 0, next: 112, dvx: 0, dvy: 0, dvz: 0, centerx: 187, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 187, y: 145, action: 50, dvx: 0, dvy: 0, oid: 220, facing: 21
    }
  },
  112: { name: "angel",
    pic: 23, state: 15, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 187, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 245, action: 150, dvx: -2, dvy: 0, oid: 345, facing: 30
    }
  },
  113: { name: "angel",
    pic: 23, state: 15, wait: 1, next: 106, dvx: 0, dvy: 0, dvz: 0, centerx: 187, centery: 245, hit_a: 4, hit_d: 114, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 245, action: 150, dvx: 2, dvy: 0, oid: 345, facing: 30
    }
  },
  114: { name: "angel",
    pic: 22, state: 15, wait: 1, next: 115, dvx: 20, dvy: 3, dvz: 0, centerx: 182, centery: 245, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 235, action: 150, dvx: -8, dvy: 0, oid: 345, facing: 30
    }
  },
  115: { name: "angel",
    pic: 22, state: 15, wait: 1, next: 116, dvx: 20, dvy: 0, dvz: 0, centerx: 182, centery: 245, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 235, action: 150, dvx: -8, dvy: 0, oid: 345, facing: 30
    }
  },
  116: { name: "angel",
    pic: 23, state: 15, wait: 1, next: 117, dvx: 20, dvy: -3, dvz: 0, centerx: 187, centery: 245, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ]
  },
  117: { name: "angel",
    pic: 23, state: 15, wait: 1, next: 114, dvx: 20, dvy: 0, dvz: 0, centerx: 187, centery: 245, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 182, y: 80, w: 100, h: 185, dvx: -25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      },
      {
        kind: 0, x: 82, y: 80, w: 100, h: 185, dvx: 25, dvy: -8, fall: 70, vrest: 7, bdefend: 100, injury: 11, zwidth: 50, effect: -1
      }
    ],
    opoint: {
      kind: 1, x: 187, y: 145, action: 95, dvx: 0, dvy: 0, oid: 220, facing: 0
    }
  }
  }

}

export default data

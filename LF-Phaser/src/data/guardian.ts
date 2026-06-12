import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-19)": "sprite/guardian_0.png", w: 319, h: 259, row: 10, col: 2
      },
      {
        "file(20-39)": "sprite/guardian_1.png", w: 319, h: 259, row: 10, col: 2
      },
      {
        "file(40-59)": "sprite/guardian_2.png", w: 319, h: 259, row: 10, col: 2
      }
    ],
    name: "Guardian",
    head: "sprite/guardian_f.png",
    small: "sprite/guardian_s.png",
    walking_frame_rate: 8,
    walking_speed: 2,
    walking_speedz: 1,
    running_frame_rate: 5,
    running_speed: 4,
    running_speedz: 1,
    heavy_walking_speed: 0,
    heavy_walking_speedz: 0,
    heavy_running_speed: 0,
    heavy_running_speedz: 0,
    jump_height: 0,
    jump_distance: 0,
    jump_distancez: 0,
    dash_height: -14,
    dash_distance: 0,
    dash_distancez: 0,
    rowing_height: 0,
    rowing_distance: 0
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 2, next: 1, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 71
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  1: { name: "standing",
    pic: 0, state: 1700, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  5: { name: "walking",
    pic: 0, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    sound: "1/084",
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  6: { name: "walking",
    pic: 1, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 187, y: 99, w: 73, h: 45, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 167, y: 134, w: 66, h: 30, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  7: { name: "walking",
    pic: 2, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 224, y: 59, w: 46, h: 54, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 187, y: 99, w: 38, h: 41, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 176, y: 126, w: 38, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  8: { name: "walking",
    pic: 3, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    sound: "1/084",
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 192, y: 31, w: 41, h: 75, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 180, y: 86, w: 42, h: 80, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  9: { name: "running",
    pic: 0, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  10: { name: "running",
    pic: 2, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 224, y: 59, w: 46, h: 54, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 187, y: 99, w: 38, h: 41, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 176, y: 126, w: 38, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  11: { name: "running",
    pic: 3, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 192, y: 31, w: 41, h: 75, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 180, y: 86, w: 42, h: 80, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  60: { name: "punch",
    pic: 10, state: 7, wait: 2, next: 235, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  65: { name: "punch",
    pic: 10, state: 7, wait: 2, next: 235, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  70: { name: "super_punch",
    pic: 10, state: 7, wait: 2, next: 235, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  80: { name: "jump_attack",
    pic: 10, state: 7, wait: 2, next: 235, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  85: { name: "run_attack",
    pic: 10, state: 7, wait: 2, next: 235, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 0, state: 3, wait: 20, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  100: { name: "rowing",
    pic: 10, state: 3, wait: 2, next: 265, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  102: { name: "rowing",
    pic: 10, state: 3, wait: 2, next: 265, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  110: { name: "defend",
    pic: 56, state: 7, wait: 2, next: 265, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 106, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  112: { name: "defend",
    pic: 56, state: 7, wait: 2, next: 265, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 106, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  130: { name: "picked_caught",
    pic: 1, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 133, y: 219, fronthurtact: 132, backhurtact: 132
    },
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  132: { name: "picked_caught",
    pic: 1, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 133, y: 219, fronthurtact: 130, backhurtact: 130
    },
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  180: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  181: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  182: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  183: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  184: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  185: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  186: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  187: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  188: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  189: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  190: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  191: { name: "falling",
    pic: 1, state: 12, wait: 1, next: 0, dvx: 0, dvy: 5, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, injury: 30
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  200: { name: "ice",
    pic: 1, state: 15, wait: 0, next: 201, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  201: { name: "ice",
    pic: 1, state: 15, wait: 0, next: 202, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  202: { name: "ice",
    pic: 1, state: 15, wait: 0, next: 180, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  203: { name: "fire",
    pic: 1, state: 18, wait: 0, next: 204, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  204: { name: "fire",
    pic: 1, state: 18, wait: 0, next: 203, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  205: { name: "fire",
    pic: 1, state: 18, wait: 0, next: 206, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  206: { name: "fire",
    pic: 1, state: 18, wait: 0, next: 205, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 70, effect: 2, injury: 42
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  210: { name: "jump",
    pic: 20, state: 7, wait: 2, next: 245, dvx: 0, dvy: 0, centerx: 137, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 105, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 167, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 101, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 173, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 140, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  211: { name: "jump",
    pic: 0, state: 4, wait: 30, next: 212, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  212: { name: "jump",
    pic: 0, state: 4, wait: 30, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  213: { name: "dash",
    pic: 1, state: 5, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  214: { name: "dash",
    pic: 1, state: 5, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  215: { name: "crouch",
    pic: 0, state: 3, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  216: { name: "dash",
    pic: 1, state: 5, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  218: { name: "stop_running",
    pic: 0, state: 15, wait: 8, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  219: { name: "crouch2",
    pic: 0, state: 3, wait: 6, next: 310, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/010",
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: -137, y: 254, w: 540, h: 10, vrest: 5, bdefend: 100, dvy: 10, injury: 21, fall: 70, zwidth: 90
      }
    ]
  },
  220: { name: "injured",
    pic: 0, state: 11, wait: 0, next: 221, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  221: { name: "injured",
    pic: 0, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  222: { name: "injured",
    pic: 0, state: 11, wait: 0, next: 223, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  223: { name: "injured",
    pic: 0, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  224: { name: "injured",
    pic: 0, state: 11, wait: 0, next: 225, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  225: { name: "injured",
    pic: 0, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  226: { name: "injured",
    pic: 0, state: 16, wait: 0, next: 227, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  227: { name: "injured",
    pic: 0, state: 16, wait: 0, next: 228, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  228: { name: "injured",
    pic: 0, state: 16, wait: 0, next: 229, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  229: { name: "injured",
    pic: 0, state: 16, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 235, hit_d: 0, hit_j: 245,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  230: { name: "lying",
    pic: 4, state: 14, wait: 0, next: 219, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 8, bdefend: 100, dvx: 10, injury: 1, fall: 1, effect: -1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 8, bdefend: 100, dvx: 10, injury: 1, fall: 1, effect: -1
      }
    ]
  },
  231: { name: "lying",
    pic: 4, state: 14, wait: 0, next: 219, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 8, bdefend: 100, dvx: 10, injury: 1, fall: 1, effect: -1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 8, bdefend: 100, dvx: 10, injury: 1, fall: 1, effect: -1
      }
    ]
  },
  235: { name: "punch",
    pic: 11, state: 7, wait: 2, next: 236, dvx: 0, dvy: 0, centerx: 145, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 113, y: 77, w: 74, h: 71
    },
    itr: [
      {
        kind: 0, x: 175, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 109, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 214, y: 59, w: 39, h: 57, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 197, y: 92, w: 34, h: 57, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  236: { name: "punch",
    pic: 12, state: 7, wait: 5, next: 237, dvx: 0, dvy: 0, centerx: 147, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 115, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 177, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 111, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 209, y: 45, w: 44, h: 64, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 188, y: 81, w: 42, h: 62, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  237: { name: "punch",
    pic: 13, state: 7, wait: 2, next: 238, dvx: 0, dvy: 0, centerx: 142, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 110, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 172, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 106, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 212, y: 83, w: 67, h: 41, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 181, y: 111, w: 70, h: 43, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  238: { name: "punch",
    pic: 14, state: 7, wait: 3, next: 239, dvx: 0, dvy: 0, centerx: 119, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    bdy: {
      kind: 0, x: 87, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 149, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 73, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 149, y: 167, w: 79, h: 39, vrest: 5, bdefend: 100, dvx: 20, injury: 37, fall: 70, effect: 1, zwidth: 15
      },
      {
        kind: 0, x: 181, y: 188, w: 80, h: 35, vrest: 5, bdefend: 100, dvx: 20, injury: 37, fall: 70, effect: 1, zwidth: 15
      },
      {
        kind: 0, x: 222, y: 214, w: 65, h: 31, vrest: 5, bdefend: 100, dvx: 20, injury: 37, fall: 70, effect: 1, zwidth: 15
      }
    ]
  },
  239: { name: "punch",
    pic: 15, state: 7, wait: 5, next: 240, dvx: 0, dvy: 0, centerx: 121, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 89, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 151, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 75, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 151, y: 167, w: 79, h: 39, vrest: 5, bdefend: 100, dvx: 20, injury: 37, fall: 70, effect: 1, zwidth: 15
      },
      {
        kind: 0, x: 183, y: 188, w: 80, h: 35, vrest: 5, bdefend: 100, dvx: 20, injury: 37, fall: 70, effect: 1, zwidth: 15
      },
      {
        kind: 0, x: 224, y: 214, w: 65, h: 31, vrest: 5, bdefend: 100, dvx: 20, injury: 37, fall: 70, effect: 1, zwidth: 15
      }
    ]
  },
  240: { name: "punch",
    pic: 16, state: 7, wait: 2, next: 241, dvx: 0, dvy: 0, centerx: 128, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 96, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 158, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 92, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 138, y: 166, w: 149, h: 45, vrest: 5, bdefend: 100, dvx: 20, injury: 28, fall: 70, effect: 1, zwidth: 15
      }
    ]
  },
  241: { name: "punch",
    pic: 10, state: 7, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 138, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 106, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  245: { name: "punch2",
    pic: 21, state: 7, wait: 2, next: 246, dvx: 0, dvy: 0, centerx: 128, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 96, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 158, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 92, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 156, y: 23, w: 54, h: 138, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  246: { name: "punch2",
    pic: 22, state: 7, wait: 2, next: 247, dvx: 0, dvy: 0, centerx: 170, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 138, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 200, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 134, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 171, y: 4, w: 55, h: 79, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 198, y: 70, w: 45, h: 62, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  247: { name: "punch2",
    pic: 23, state: 7, wait: 2, next: 248, dvx: 0, dvy: 0, centerx: 180, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 148, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 210, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 144, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 120, y: 4, w: 78, h: 46, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 156, y: 42, w: 88, h: 54, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  248: { name: "punch2",
    pic: 24, state: 7, wait: 2, next: 249, dvx: 0, dvy: 0, centerx: 183, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 151, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 213, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 147, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 84, y: 31, w: 141, h: 46, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  249: { name: "punch2",
    pic: 25, state: 7, wait: 2, next: 250, dvx: 0, dvy: 0, centerx: 194, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 162, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 214, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 157, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 66, y: 46, w: 149, h: 53, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  250: { name: "punch2",
    pic: 26, state: 7, wait: 2, next: 251, dvx: 0, dvy: 0, centerx: 196, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 165, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 226, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 159, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 71, y: 66, w: 96, h: 40, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 142, y: 38, w: 68, h: 39, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  251: { name: "punch2",
    pic: 27, state: 7, wait: 2, next: 252, dvx: 0, dvy: 0, centerx: 187, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 155, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 217, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 151, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 71, y: 66, w: 96, h: 40, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 142, y: 38, w: 68, h: 39, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  252: { name: "punch2",
    pic: 30, state: 7, wait: 2, next: 253, dvx: 0, dvy: 0, centerx: 178, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 146, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 208, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 142, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 71, y: 66, w: 96, h: 40, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 142, y: 38, w: 68, h: 39, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  253: { name: "punch2",
    pic: 31, state: 7, wait: 1, next: 254, dvx: 0, dvy: 0, centerx: 174, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    bdy: {
      kind: 0, x: 142, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 204, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 138, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 71, y: 66, w: 96, h: 40, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 142, y: 38, w: 68, h: 39, vrest: 5, bdefend: 100, dvx: -15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  254: { name: "punch2",
    pic: 32, state: 7, wait: 1, next: 255, dvx: 0, dvy: 0, centerx: 132, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 100, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 162, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 96, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 210, y: 10, w: 45, h: 83, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 189, y: 14, w: 46, h: 67, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  255: { name: "punch2",
    pic: 33, state: 7, wait: 0, next: 256, dvx: 0, dvy: 0, centerx: 87, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/010",
    bdy: {
      kind: 0, x: 55, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 117, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 51, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 145, y: 33, w: 99, h: 246, vrest: 8, bdefend: 100, dvx: 35, injury: 98, fall: 70, effect: 1, zwidth: 20
      },
      {
        kind: 0, x: 139, y: 213, w: 100, h: 66, vrest: 8, bdefend: 100, dvx: 35, injury: 98, fall: 70, effect: 1, zwidth: 20
      },
      {
        kind: 0, x: 112, y: 180, w: 84, h: 57, vrest: 8, bdefend: 100, dvx: 35, injury: 98, fall: 70, effect: 1, zwidth: 20
      }
    ]
  },
  256: { name: "punch2",
    pic: 33, state: 7, wait: 2, next: 257, dvx: 0, dvy: 0, centerx: 87, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 55, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 117, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 51, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 139, y: 213, w: 100, h: 66, vrest: 8, bdefend: 100, dvx: 30, injury: 82, fall: 70, effect: 1, zwidth: 20
      },
      {
        kind: 0, x: 112, y: 180, w: 84, h: 57, vrest: 8, bdefend: 100, dvx: 30, injury: 82, fall: 70, effect: 1, zwidth: 20
      }
    ]
  },
  257: { name: "punch2",
    pic: 33, state: 7, wait: 10, next: 258, dvx: 0, dvy: 0, centerx: 87, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 55, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 117, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 51, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 139, y: 213, w: 100, h: 66, vrest: 8, bdefend: 100, dvx: 30, injury: 77, fall: 70, effect: 1, zwidth: 20
      },
      {
        kind: 0, x: 112, y: 180, w: 84, h: 57, vrest: 8, bdefend: 100, dvx: 30, injury: 77, fall: 70, effect: 1, zwidth: 20
      }
    ]
  },
  258: { name: "punch2",
    pic: 34, state: 7, wait: 2, next: 259, dvx: 0, dvy: 0, centerx: 116, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 84, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 146, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 80, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 190, y: 207, w: 78, h: 44, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 161, y: 191, w: 53, h: 35, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  259: { name: "punch2",
    pic: 35, state: 7, wait: 2, next: 260, dvx: 0, dvy: 0, centerx: 97, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 65, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 127, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 61, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 137, y: 178, w: 113, h: 43, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  260: { name: "punch2",
    pic: 36, state: 7, wait: 2, next: 261, dvx: 0, dvy: 0, centerx: 114, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 82, y: 77, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 144, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 78, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 149, y: 148, w: 100, h: 47, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  261: { name: "punch2",
    pic: 20, state: 7, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 137, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 105, y: 77, w: 24, h: 71
    },
    itr: [
      {
        kind: 0, x: 167, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 101, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 202, y: 133, w: 67, h: 39, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 175, y: 156, w: 46, h: 38, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  265: { name: "defend",
    pic: 57, state: 7, wait: 2, next: 266, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 86, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 148, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 82, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 137, y: 43, w: 40, h: 105, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  266: { name: "defend",
    pic: 58, state: 7, wait: 20, next: 267, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 81, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 143, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 77, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 95, y: 37, w: 41, h: 93, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  267: { name: "defend",
    pic: 57, state: 7, wait: 2, next: 268, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 86, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 148, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 82, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 137, y: 43, w: 40, h: 105, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  268: { name: "defend",
    pic: 56, state: 7, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Fj: 290,
    bdy: {
      kind: 0, x: 105, y: 87, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 168, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 102, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 174, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 141, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  270: { name: "flame",
    pic: 0, state: 15, wait: 2, next: 271, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  271: { name: "flame",
    pic: 41, state: 15, wait: 2, next: 272, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 141, y: 146, w: 107, h: 47, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  272: { name: "flame",
    pic: 42, state: 15, wait: 2, next: 273, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 151, y: 176, w: 112, h: 41, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  273: { name: "flame",
    pic: 43, state: 15, wait: 2, next: 274, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 186, y: 192, w: 63, h: 48, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 134, y: 164, w: 63, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  274: { name: "flame",
    pic: 44, state: 15, wait: 2, next: 275, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 186, y: 192, w: 63, h: 48, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      },
      {
        kind: 0, x: 134, y: 164, w: 63, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      }
    ]
  },
  275: { name: "flame",
    pic: 45, state: 15, wait: 2, next: 276, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 186, y: 192, w: 63, h: 48, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      },
      {
        kind: 0, x: 134, y: 164, w: 63, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      }
    ]
  },
  276: { name: "flame",
    pic: 46, state: 15, wait: 2, next: 277, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 186, y: 192, w: 63, h: 48, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      },
      {
        kind: 0, x: 134, y: 164, w: 63, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      }
    ]
  },
  277: { name: "flame",
    pic: 47, state: 15, wait: 2, next: 278, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 186, y: 192, w: 63, h: 48, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      },
      {
        kind: 0, x: 134, y: 164, w: 63, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      }
    ]
  },
  278: { name: "flame",
    pic: 48, state: 15, wait: 2, next: 279, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 186, y: 192, w: 63, h: 48, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      },
      {
        kind: 0, x: 134, y: 164, w: 63, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      }
    ]
  },
  279: { name: "flame",
    pic: 50, state: 15, wait: 2, next: 280, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 186, y: 192, w: 63, h: 48, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      },
      {
        kind: 0, x: 134, y: 164, w: 63, h: 51, vrest: 5, bdefend: 100, dvx: 15, injury: 19, fall: 1, effect: 1
      }
    ]
  },
  280: { name: "flame",
    pic: 51, state: 15, wait: 1, next: 281, dvx: 0, dvy: 0, centerx: 133, centery: 254, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 106, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 82, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 194, y: 149, w: 60, h: 50, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 159, y: 171, w: 67, h: 58, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ],
    opoint: {
      kind: 1, x: 242, y: 220, action: 60, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  281: { name: "flame",
    pic: 51, state: 15, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 133, centery: 254, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 106, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 82, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 194, y: 149, w: 60, h: 50, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 159, y: 171, w: 67, h: 58, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ],
    opoint: {
      kind: 1, x: 212, y: 220, action: 63, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  282: { name: "flame",
    pic: 52, state: 15, wait: 1, next: 283, dvx: 0, dvy: 0, centerx: 133, centery: 254, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: -10000, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 106, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 82, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 194, y: 149, w: 60, h: 50, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 159, y: 171, w: 67, h: 58, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ],
    opoint: {
      kind: 1, x: 182, y: 220, action: 66, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  283: { name: "flame",
    pic: 52, state: 15, wait: 12, next: 284, dvx: 0, dvy: 0, centerx: 133, centery: 253, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 87, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 105, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 81, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 194, y: 149, w: 60, h: 50, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 159, y: 171, w: 67, h: 58, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  284: { name: "flame",
    pic: 53, state: 15, wait: 2, next: 285, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 87, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 156, y: 177, w: 124, h: 57, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  285: { name: "flame",
    pic: 54, state: 15, wait: 2, next: 286, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 87, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 151, y: 104, w: 127, h: 45, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  286: { name: "flame",
    pic: 55, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 87, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 192, y: 135, w: 72, h: 44, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 154, y: 162, w: 54, h: 37, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  290: { name: "standing",
    pic: 0, state: 15, wait: 5, next: 291, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, mp: 20
  },
  291: { name: "standing",
    pic: 5, state: 15, wait: 1, next: 292, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061"
  },
  292: { name: "standing",
    pic: 6, state: 15, wait: 1, next: 293, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0
  },
  293: { name: "standing",
    pic: 7, state: 15, wait: 1, next: 294, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0
  },
  294: { name: "standing",
    pic: 8, state: 15, wait: 1, next: 295, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0
  },
  295: { name: "standing",
    pic: 9, state: 15, wait: 1, next: 296, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0
  },
  296: { name: "standing",
    pic: 19, state: 15, wait: 8, next: 297, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0
  },
  297: { name: "standing",
    pic: 19, state: 15, wait: 4, next: 298, dvx: 2, dvy: 0, dvz: 2, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, mp: 20
  },
  298: { name: "standing",
    pic: 19, state: 15, wait: 6, next: 299, dvx: 5, dvy: 0, dvz: 2, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 297
  },
  299: { name: "standing",
    pic: 19, state: 15, wait: 16, next: 300, dvx: 8, dvy: 0, dvz: 2, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 297
  },
  300: { name: "standing",
    pic: 19, state: 15, wait: 6, next: 301, dvx: 5, dvy: 0, dvz: 2, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 297
  },
  301: { name: "standing",
    pic: 19, state: 15, wait: 4, next: 302, dvx: 2, dvy: 0, dvz: 2, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 297
  },
  302: { name: "standing",
    pic: 19, state: 15, wait: 8, next: 303, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 297
  },
  303: { name: "standing",
    pic: 9, state: 15, wait: 1, next: 304, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    itr: [
      {
        kind: 0, x: 160, y: 220, w: 70, h: 195, vrest: 30, bdefend: 100, dvx: 10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      },
      {
        kind: 0, x: 40, y: 220, w: 120, h: 195, vrest: 30, bdefend: 100, dvx: -10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      }
    ]
  },
  304: { name: "standing",
    pic: 8, state: 15, wait: 1, next: 305, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 160, y: 180, w: 70, h: 195, vrest: 30, bdefend: 100, dvx: 10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      },
      {
        kind: 0, x: 40, y: 180, w: 120, h: 195, vrest: 30, bdefend: 100, dvx: -10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      }
    ]
  },
  305: { name: "standing",
    pic: 7, state: 15, wait: 1, next: 306, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 160, y: 150, w: 70, h: 195, vrest: 30, bdefend: 100, dvx: 10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      },
      {
        kind: 0, x: 40, y: 150, w: 120, h: 195, vrest: 30, bdefend: 100, dvx: -10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      }
    ]
  },
  306: { name: "standing",
    pic: 6, state: 15, wait: 1, next: 307, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 160, y: 110, w: 70, h: 195, vrest: 30, bdefend: 100, dvx: 10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      },
      {
        kind: 0, x: 40, y: 110, w: 120, h: 195, vrest: 30, bdefend: 100, dvx: -10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      }
    ]
  },
  307: { name: "standing",
    pic: 5, state: 15, wait: 1, next: 308, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 160, y: 80, w: 70, h: 195, vrest: 30, bdefend: 100, dvx: 10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      },
      {
        kind: 0, x: 40, y: 80, w: 120, h: 195, vrest: 30, bdefend: 100, dvx: -10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      }
    ]
  },
  308: { name: "standing",
    pic: 1, state: 15, wait: 0, next: 309, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 160, y: 60, w: 70, h: 195, vrest: 30, bdefend: 100, dvx: 10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      },
      {
        kind: 0, x: 40, y: 60, w: 120, h: 195, vrest: 30, bdefend: 100, dvx: -10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      }
    ]
  },
  309: { name: "standing",
    pic: 1, state: 15, wait: 0, next: 214, dvx: 0, dvy: -12, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 160, y: 60, w: 70, h: 195, vrest: 30, bdefend: 100, dvx: 10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      },
      {
        kind: 0, x: 40, y: 60, w: 120, h: 195, vrest: 30, bdefend: 100, dvx: -10, dvy: -25, injury: 23, fall: 70, zwidth: 55
      }
    ]
  },
  310: { name: "crouch2",
    pic: 0, state: 3, wait: 6, next: 999, dvx: 0, dvy: 0, centerx: 133, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 87, w: 64, h: 91
    },
    itr: [
      {
        kind: 0, x: 163, y: 111, w: 31, h: 125, vrest: 8, bdefend: 100, dvx: 10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 97, y: 87, w: 41, h: 171, vrest: 8, bdefend: 100, dvx: -10, fall: 1, effect: -1, injury: 1
      },
      {
        kind: 0, x: 169, y: 126, w: 77, h: 36, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      },
      {
        kind: 0, x: 136, y: 161, w: 88, h: 15, vrest: 5, bdefend: 100, dvx: 15, injury: 13, fall: 1, effect: 1
      }
    ]
  },
  399: { name: "dummy",
    pic: 0, state: 15, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 39, centery: 259, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 101, y: 77, w: 64, h: 91
    }
  }
  }

}

export default data

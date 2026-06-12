import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-49)": "sprite/knight_0.png", w: 79, h: 99, row: 10, col: 5
      },
      {
        "file(50-63)": "sprite/knight_1.png", w: 109, h: 99, row: 7, col: 2
      },
      {
        "file(64-113)": "sprite/knight_2.png", w: 79, h: 99, row: 10, col: 5
      },
      {
        "file(114-163)": "sprite/knight_0b.png", w: 79, h: 99, row: 10, col: 5
      },
      {
        "file(164-177)": "sprite/knight_1b.png", w: 109, h: 99, row: 7, col: 2
      },
      {
        "file(178-227)": "sprite/knight_2b.png", w: 79, h: 99, row: 10, col: 5
      }
    ],
    name: "Knight",
    head: "sprite/knight_f.png",
    small: "sprite/knight_s.png",
    walking_frame_rate: 3,
    walking_speed: 7,
    walking_speedz: 3.07,
    running_frame_rate: 3,
    running_speed: 9.5,
    running_speedz: 2.1,
    heavy_walking_speed: 5.8,
    heavy_walking_speedz: 2.9,
    heavy_running_speed: 9,
    heavy_running_speedz: 1.7,
    jump_height: -14,
    jump_distance: 11,
    jump_distancez: 4.25,
    dash_height: -11,
    dash_distance: 17,
    dash_distancez: 5.5,
    rowing_height: -3,
    rowing_distance: 6
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 10, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 57, y: 72, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 9, effect: 4
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 4, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 57, y: 72, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 9, effect: 4
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 57, y: 71, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 9, effect: 4
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 8, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 58, y: 71, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 9, effect: 4
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  4: { name: "standing",
    pic: 1, state: 0, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 57, y: 71, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 9, effect: 4
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 57, y: 72, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 31, y: 10, w: 57, h: 89,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 57, y: 72, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 31, y: 10, w: 57, h: 89,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 57, y: 71, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 31, y: 10, w: 57, h: 89,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 58, y: 71, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 31, y: 10, w: 57, h: 89,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  9: { name: "running",
    pic: 26, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    sound: "1/084",
    wpoint: {
      kind: 1, x: 60, y: 64, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 18, dvy: -1, fall: 70, vrest: 7, bdefend: 16, injury: 27
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  10: { name: "running",
    pic: 27, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 62, y: 61, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 18, dvy: -1, fall: 70, vrest: 7, bdefend: 16, injury: 27
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  11: { name: "running",
    pic: 28, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    sound: "1/084",
    wpoint: {
      kind: 1, x: 60, y: 64, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 18, dvy: -1, fall: 70, vrest: 7, bdefend: 16, injury: 27
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 30, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 21, y: 15, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
    },
    bdy: {
      kind: 0, x: 10, y: 13, w: 63, h: 86
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 31, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 14, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
    },
    bdy: {
      kind: 0, x: 14, y: 14, w: 60, h: 85
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 32, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
    },
    bdy: {
      kind: 0, x: 13, y: 10, w: 60, h: 91
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 33, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 21, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 21, effect: 4
    },
    bdy: {
      kind: 0, x: 12, y: 7, w: 62, h: 93
    }
  },
  16: { name: "heavy_obj_run",
    pic: 34, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    wpoint: {
      kind: 1, x: 25, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 16, dvy: -1, fall: 70, vrest: 7, bdefend: 16, injury: 27
    },
    bdy: {
      kind: 0, x: 8, y: 7, w: 63, h: 90
    }
  },
  17: { name: "heavy_obj_run",
    pic: 35, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 27, y: 12, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 16, dvy: -1, fall: 70, vrest: 7, bdefend: 16, injury: 27
    },
    bdy: {
      kind: 0, x: 11, y: 11, w: 64, h: 88
    }
  },
  18: { name: "heavy_obj_run",
    pic: 36, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    wpoint: {
      kind: 1, x: 25, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 16, dvy: -1, fall: 70, vrest: 7, bdefend: 16, injury: 27
    },
    bdy: {
      kind: 0, x: 9, y: 7, w: 59, h: 93
    }
  },
  19: { name: "heavy_stop_run",
    pic: 41, state: 15, wait: 9, next: 999, dvx: 2, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    wpoint: {
      kind: 1, x: 25, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 27, effect: 4
    },
    bdy: {
      kind: 0, x: 13, y: 9, w: 55, h: 90
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 37, state: 15, wait: 2, next: 21, dvx: 3, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 9, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  21: { name: "normal_weapon_atck",
    pic: 38, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 55, y: 74, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 4, y: 15, w: 56, h: 86
    }
  },
  25: { name: "normal_weapon_atck",
    pic: 37, state: 15, wait: 2, next: 21, dvx: 3, dvy: 0, dvz: 0, centerx: 31, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 9, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 37, state: 3, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 11, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 13, w: 47, h: 85
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 38, state: 3, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 56, y: 73, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  32: { name: "jump_weapon_atck",
    pic: 38, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 73, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 37, state: 15, wait: 2, next: 36, dvx: 3, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 9, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  36: { name: "run_weapon_atck",
    pic: 38, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 55, y: 74, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 4, y: 15, w: 56, h: 86
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 37, state: 3, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 11, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 13, w: 47, h: 85
    }
  },
  41: { name: "dash_weapon_atck",
    pic: 38, state: 3, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 56, y: 73, weaponact: 24, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  42: { name: "dash_weapon_atck",
    pic: 38, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 73, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 37, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 9, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  46: { name: "light_weapon_thw",
    pic: 38, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 109, y: 60, weaponact: 35, attacking: 0, cover: 0, dvx: 30, dvy: -4, dvz: 3
    },
    bdy: {
      kind: 0, x: 4, y: 15, w: 56, h: 86
    }
  },
  50: { name: "heavy_weapon_thw",
    pic: 37, state: 15, wait: 3, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 12, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 4, w: 59, h: 97
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 38, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 101, y: 47, weaponact: 10, attacking: 0, cover: 0, dvx: 27, dvy: -5, dvz: 2
    },
    bdy: {
      kind: 0, x: 12, y: 16, w: 50, h: 84
    }
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 37, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 9, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 8, w: 44, h: 88
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 38, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 37, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 54, y: 72, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 14, w: 46, h: 80
    }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 38, state: 15, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 80, y: 78, weaponact: 23, attacking: 0, cover: 0, dvx: 25, dvy: 13, dvz: 3
    },
    bdy: {
      kind: 0, x: 13, y: 17, w: 48, h: 85
    }
  },
  55: { name: "weapon_drink",
    pic: 46, state: 17, wait: 2, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/042",
    wpoint: {
      kind: 1, x: 60, y: 27, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 12, w: 37, h: 67
    }
  },
  56: { name: "weapon_drink",
    pic: 47, state: 17, wait: 2, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 59, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 20, w: 36, h: 59
    }
  },
  57: { name: "weapon_drink",
    pic: 46, state: 17, wait: 2, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 27, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 17, w: 32, h: 63
    }
  },
  58: { name: "weapon_drink",
    pic: 47, state: 17, wait: 2, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 59, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 13, w: 36, h: 65
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 12, y: 80, w: 55, h: 25, vrest: 1
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  65: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 13, y: 81, w: 54, h: 23, vrest: 1
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  70: { name: "super",
    pic: 20, state: 3, wait: 2, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 58, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  80: { name: "jump_attack",
    pic: 29, state: 3, wait: 0, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 59, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 7, w: 53, h: 96
    }
  },
  81: { name: "jump_attack",
    pic: 39, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 25, y: 58, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 8, w: 45, h: 91
    }
  },
  82: { name: "jump_attack",
    pic: 53, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 57, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 34, y: 8, w: 68, h: 72, dvx: 12, dvy: 12, fall: 70, vrest: 8, bdefend: 60, injury: 39, effect: 1
    },
    bdy: {
      kind: 0, x: 12, y: 9, w: 43, h: 92
    }
  },
  83: { name: "jump_attack",
    pic: 49, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 56, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 34, y: 8, w: 68, h: 72, dvx: 12, dvy: 12, fall: 70, vrest: 8, bdefend: 60, injury: 30, effect: 1
    },
    bdy: {
      kind: 0, x: 9, y: 8, w: 50, h: 90
    }
  },
  85: { name: "run_attack",
    pic: 16, state: 3, wait: 2, next: 261, dvx: 3, dvy: 0, dvz: 0, centerx: 54, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 22,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 9, w: 53, h: 98
    }
  },
  90: { name: "dash_attack",
    pic: 14, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 24, y: 18, w: 25, h: 55
      },
      {
        kind: 0, x: 13, y: 36, w: 52, h: 18
      },
      {
        kind: 0, x: 31, y: 9, w: 25, h: 29
      }
    ]
  },
  91: { name: "dash_attack",
    pic: 15, state: 15, wait: 3, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 9, y: 32, w: 74, h: 35, dvx: 17, fall: 70, vrest: 8, bdefend: 60, injury: 41, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 22, y: 40, w: 33, h: 26
      },
      {
        kind: 0, x: 24, y: 6, w: 30, h: 34
      }
    ]
  },
  92: { name: "dash_attack",
    pic: 16, state: 15, wait: 15, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 29, w: 73, h: 40, dvx: 17, fall: 70, arest: 8, bdefend: 60, injury: 32, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 23, y: 38, w: 28, h: 25
      },
      {
        kind: 0, x: 22, y: 36, w: 50, h: 18
      },
      {
        kind: 0, x: 24, y: 6, w: 30, h: 34
      }
    ]
  },
  95: { name: "dash_defend",
    pic: 63, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 27, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 14, y: 19, w: 28, h: 36
      },
      {
        kind: 0, x: 28, y: 37, w: 24, h: 34
      }
    ]
  },
  100: { name: "rowing",
    pic: 55, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 106, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 61, y: 57, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  101: { name: "rowing",
    pic: 38, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 75, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  102: { name: "rowing",
    pic: 300, state: 7, wait: 10, next: 106, dvx: 9, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 103, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 62, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  103: { name: "rowing",
    pic: 300, state: 7, wait: 10, next: 106, dvx: 9, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 104, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 62, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  104: { name: "rowing",
    pic: 300, state: 7, wait: 10, next: 106, dvx: 9, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 105, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 62, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  105: { name: "rowing",
    pic: 300, state: 7, wait: 10, next: 106, dvx: 9, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 62, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  106: { name: "rowing",
    pic: 42, state: 7, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 62, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 27, effect: 4
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  108: { name: "rowing",
    pic: 54, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 55, y: 59, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  109: { name: "rowing",
    pic: 67, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 63, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  110: { name: "defend",
    pic: 42, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 62, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 27, effect: 4
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  111: { name: "defend",
    pic: 42, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 270, hit_Uj: 280, hit_Fj: 310, hit_ja: 320, hit_Ua: 340,
    wpoint: {
      kind: 1, x: 62, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 27, effect: 4
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  112: { name: "broken_defend",
    pic: 66, state: 8, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 6, w: 53, h: 94
    }
  },
  113: { name: "broken_defend",
    pic: 67, state: 8, wait: 0, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 48, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 6, w: 57, h: 92
    }
  },
  114: { name: "broken_defend",
    pic: 69, state: 8, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 54, h: 90
    }
  },
  115: { name: "picking_light",
    pic: 14, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 38, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 22, w: 52, h: 75
    }
  },
  116: { name: "picking_heavy",
    pic: 14, state: 15, wait: 2, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 23, w: 49, h: 75
    }
  },
  117: { name: "picking_heavy",
    pic: 14, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 70, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 22, w: 49, h: 78
    }
  },
  120: { name: "catching",
    pic: 44, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 6
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 13, w: 49, h: 89
    }
  },
  121: { name: "catching",
    pic: 43, state: 9, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 284,
    cpoint: {
      kind: 1, x: 61, y: 49, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -6
    },
    wpoint: {
      kind: 1, x: 58, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 11, w: 54, h: 84
    }
  },
  122: { name: "catching",
    pic: 44, state: 9, wait: 7, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 61, y: 51, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 5
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 10, w: 52, h: 86
    }
  },
  123: { name: "catching",
    pic: 45, state: 9, wait: 9, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 70, y: 53, injury: 23, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 4, w: 52, h: 92
    }
  },
  130: { name: "picked_caught",
    pic: 68, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 60, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  131: { name: "picked_caught",
    pic: 69, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 54, y: 56, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 49, y: 58, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  132: { name: "picked_caught",
    pic: 69, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 51, y: 58, fronthurtact: 131, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 50, y: 57, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  133: { name: "picked_caught",
    pic: 64, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 47
    },
    wpoint: {
      kind: 1, x: 29, y: 40, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  134: { name: "picked_caught",
    pic: 65, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 35, y: 51
    },
    wpoint: {
      kind: 1, x: 29, y: 41, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  135: { name: "picked_caught",
    pic: 54, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 51, y: 39
    },
    wpoint: {
      kind: 1, x: 31, y: 44, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  136: { name: "picked_caught",
    pic: 55, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 49, y: 46
    },
    wpoint: {
      kind: 1, x: 35, y: 40, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  137: { name: "picked_caught",
    pic: 56, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 43, y: 73
    },
    wpoint: {
      kind: 1, x: 33, y: 75, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  138: { name: "picked_caught",
    pic: 54, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 43
    },
    wpoint: {
      kind: 1, x: 39, y: 69, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  139: { name: "picked_caught",
    pic: 74, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 40
    },
    wpoint: {
      kind: 1, x: 28, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  140: { name: "picked_caught",
    pic: 75, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 63
    },
    wpoint: {
      kind: 1, x: 31, y: 38, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  141: { name: "picked_caught",
    pic: 57, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 59, y: 56
    },
    wpoint: {
      kind: 1, x: 49, y: 50, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  142: { name: "picked_caught",
    pic: 58, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 53, y: 69, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  143: { name: "picked_caught",
    pic: 59, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 86
    },
    wpoint: {
      kind: 1, x: 60, y: 90, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  144: { name: "picked_caught",
    pic: 58, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 50, y: 63
    },
    wpoint: {
      kind: 1, x: 40, y: 72, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  180: { name: "falling",
    pic: 64, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 101, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 17, y: 39, w: 35, h: 31, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
    },
    bdy: {
      kind: 0, x: 23, y: 45, w: 22, h: 21
    }
  },
  181: { name: "falling",
    pic: 65, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 40, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 12, y: 33, w: 29, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
      },
      {
        kind: 4, x: 20, y: 45, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
      }
    ],
    bdy: {
      kind: 0, x: 20, y: 41, w: 26, h: 22
    }
  },
  182: { name: "falling",
    pic: 54, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 33, y: 37, w: 39, h: 30, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
    },
    bdy: {
      kind: 0, x: 37, y: 38, w: 27, h: 24
    }
  },
  183: { name: "falling",
    pic: 55, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 94, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 37, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 55, y: 32, w: 27, h: 19, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
      },
      {
        kind: 4, x: 30, y: 37, w: 36, h: 32, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
      }
    ],
    bdy: {
      kind: 0, x: 38, y: 40, w: 26, h: 22
    }
  },
  184: { name: "falling",
    pic: 56, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  185: { name: "falling",
    pic: 54, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 69, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  186: { name: "falling",
    pic: 74, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 45, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 19, y: 37, w: 42, h: 36, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
    },
    bdy: {
      kind: 0, x: 31, y: 47, w: 25, h: 24
    }
  },
  187: { name: "falling",
    pic: 75, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 37, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 26, w: 41, h: 57, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
    },
    bdy: {
      kind: 0, x: 25, y: 49, w: 25, h: 22
    }
  },
  188: { name: "falling",
    pic: 57, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 61, y: 60, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 34, y: 29, w: 35, h: 32, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
    },
    bdy: {
      kind: 0, x: 42, y: 38, w: 26, h: 23
    }
  },
  189: { name: "falling",
    pic: 58, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 83, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 70, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
      },
      {
        kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 36
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 39, w: 23, h: 21
    }
  },
  190: { name: "falling",
    pic: 59, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 57, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  191: { name: "falling",
    pic: 57, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 63, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  200: { name: "ice",
    pic: 8, state: 15, wait: 2, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 58, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 61, h: 84
    }
  },
  201: { name: "ice",
    pic: 9, state: 13, wait: 90, next: 202, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 58, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 14, x: 8, y: 12, w: 66, h: 86, vrest: 1
    },
    bdy: {
      kind: 0, x: 8, y: 12, w: 66, h: 86
    }
  },
  202: { name: "ice",
    pic: 8, state: 15, wait: 1, next: 182, dvx: -4, dvy: -3, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    }
  },
  203: { name: "fire",
    pic: 61, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 36, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  204: { name: "fire",
    pic: 60, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 36, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  205: { name: "fire",
    pic: 61, state: 18, wait: 1, next: 206, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 36, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  206: { name: "fire",
    pic: 60, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 36, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  207: { name: "tired",
    pic: 69, state: 15, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 64, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 44, y: 28, w: 22, h: 37
      },
      {
        kind: 0, x: 28, y: 47, w: 28, h: 35
      }
    ]
  },
  210: { name: "jump",
    pic: 14, state: 4, wait: 2, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 73, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 19, w: 53, h: 83
    }
  },
  211: { name: "jump",
    pic: 14, state: 4, wait: 2, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 40, y: 73, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 20, w: 52, h: 80
    }
  },
  212: { name: "jump",
    pic: 48, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 5, w: 37, h: 84
    }
  },
  213: { name: "jump",
    pic: 48, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 1, w: 37, h: 92
    }
  },
  214: { name: "jump",
    pic: 48, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 5, w: 38, h: 88
    }
  },
  215: { name: "crouch",
    pic: 14, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 22, w: 50, h: 76
    }
  },
  218: { name: "stop_running",
    pic: 40, state: 15, wait: 8, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/084",
    wpoint: {
      kind: 1, x: 60, y: 64, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 53, y: 24, w: 24, h: 74, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 27, effect: 4
    },
    bdy: [
      {
        kind: 0, x: 16, y: 8, w: 47, h: 92
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
      }
    ]
  },
  219: { name: "crouch2",
    pic: 14, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 38, y: 73, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 21, w: 53, h: 77
    }
  },
  220: { name: "injured",
    pic: 66, state: 11, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 52, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 16, w: 38, h: 85
    }
  },
  221: { name: "injured",
    pic: 67, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 50, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 18, y: 16, w: 47, h: 85
      },
      {
        kind: 0, x: 22, y: 37, w: 26, h: 42
      }
    ]
  },
  222: { name: "injured",
    pic: 69, state: 11, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 54, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 14, w: 45, h: 83
    }
  },
  223: { name: "injured",
    pic: 68, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 56, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 15, w: 50, h: 78
    }
  },
  224: { name: "injured",
    pic: 69, state: 11, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 54, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 14, w: 45, h: 83
    }
  },
  225: { name: "injured",
    pic: 68, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 56, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 15, w: 50, h: 78
    }
  },
  226: { name: "injured",
    pic: 69, state: 16, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 53, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 26, y: 24, w: 41, h: 74
    }
  },
  227: { name: "injured",
    pic: 67, state: 16, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 52, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 23, y: 22, w: 46, h: 77
    }
  },
  228: { name: "injured",
    pic: 66, state: 16, wait: 0, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 53, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 23, y: 11, w: 43, h: 86
    }
  },
  229: { name: "injured",
    pic: 67, state: 16, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 52, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 18, y: 12, w: 49, h: 87
    }
  },
  230: { name: "lying",
    pic: 56, state: 14, wait: 15, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 88, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10000, w: 64, h: 90
    }
  },
  231: { name: "lying",
    pic: 59, state: 14, wait: 15, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 62, y: 92, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10000, w: 64, h: 90
    }
  },
  232: { name: "throw_lying_man",
    pic: 37, state: 9, wait: 3, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 37, y: 8, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 30, y: 21, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 25, w: 41, h: 74
    }
  },
  233: { name: "throw_lying_man",
    pic: 38, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 19, throwvy: -7, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 50, y: 73, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 15, w: 53, h: 84
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 38, state: 9, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 73, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 15, w: 46, h: 83
    }
  },
  240: { name: "sword",
    pic: 10, state: 3, wait: 0, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  241: { name: "sword1",
    pic: 11, state: 3, wait: 0, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 9, w: 53, h: 91
    }
  },
  242: { name: "sword1",
    pic: 12, state: 3, wait: 0, next: 243, dvx: 2, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 8, w: 50, h: 90
    }
  },
  243: { name: "sword1",
    pic: 13, state: 3, wait: 1, next: 244, dvx: 1, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 50, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 8, w: 47, h: 93
    }
  },
  244: { name: "sword1",
    pic: 50, state: 3, wait: 1, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 36, y: 15, w: 65, h: 65, dvx: 7, fall: 25, vrest: 7, bdefend: 30, injury: 15, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 7, w: 49, h: 91
    }
  },
  245: { name: "sword1",
    pic: 15, state: 3, wait: 1, next: 259, dvx: 3, dvy: 0, dvz: 0, centerx: 36, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 6, y: 8, w: 47, h: 94
    }
  },
  246: { name: "sword2",
    pic: 16, state: 3, wait: 0, next: 247, dvx: 3, dvy: 0, dvz: 0, centerx: 54, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 9, w: 53, h: 98
    }
  },
  247: { name: "sword2",
    pic: 17, state: 3, wait: 1, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 13, w: 54, h: 90
    }
  },
  248: { name: "sword2",
    pic: 51, state: 3, wait: 1, next: 249, dvx: 7, dvy: 0, dvz: 0, centerx: 32, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 19, y: 24, w: 86, h: 44, dvx: 10, fall: 25, vrest: 7, bdefend: 30, injury: 15, effect: 1
    },
    bdy: {
      kind: 0, x: 5, y: 10, w: 54, h: 90
    }
  },
  249: { name: "sword2",
    pic: 18, state: 3, wait: 1, next: 250, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 0, y: 9, w: 55, h: 93
    }
  },
  250: { name: "sword2",
    pic: 19, state: 3, wait: 1, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 3, y: 10, w: 49, h: 91
    }
  },
  251: { name: "sword3",
    pic: 20, state: 3, wait: 0, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 58, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 48, h: 89
    }
  },
  252: { name: "sword3",
    pic: 21, state: 3, wait: 0, next: 253, dvx: 3, dvy: 0, dvz: 0, centerx: 56, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 12, w: 44, h: 87
    }
  },
  253: { name: "sword3",
    pic: 22, state: 3, wait: 0, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 9, w: 46, h: 91
    }
  },
  254: { name: "sword3",
    pic: 23, state: 3, wait: 0, next: 255, dvx: 4, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 9, w: 50, h: 92
    }
  },
  255: { name: "sword3",
    pic: 24, state: 3, wait: 1, next: 256, dvx: 4, dvy: 0, dvz: 0, centerx: 23, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 49, h: 93
    }
  },
  256: { name: "sword3",
    pic: 52, state: 3, wait: 1, next: 257, dvx: 4, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 42, y: 18, w: 57, h: 65, dvx: 12, dvy: 12, fall: 70, vrest: 20, bdefend: 60, injury: 29, effect: 1
    },
    bdy: {
      kind: 0, x: 4, y: 9, w: 53, h: 90
    }
  },
  257: { name: "sword3",
    pic: 25, state: 3, wait: 1, next: 258, dvx: 4, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  258: { name: "sword3",
    pic: 15, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 5, y: 9, w: 50, h: 94
    }
  },
  259: { name: "sword1",
    pic: 15, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 99, hit_a: 246, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 6, y: 11, w: 51, h: 93
    }
  },
  260: { name: "sword2",
    pic: 19, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 251, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 4, y: 12, w: 50, h: 90
    }
  },
  261: { name: "shadow_slash",
    pic: 70, state: 3, wait: 2, next: 262, dvx: 3, dvy: 0, dvz: 0, centerx: 54, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 9, w: 53, h: 98
    }
  },
  262: { name: "shadow_slash",
    pic: 71, state: 3, wait: 1, next: 263, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  263: { name: "shadow_slash",
    pic: 300, state: 3, wait: 15, next: 264, dvx: 20, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/031",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  264: { name: "shadow_slash",
    pic: 71, state: 3, wait: 1, next: 265, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  265: { name: "shadow_slash",
    pic: 63, state: 3, wait: 1, next: 266, dvx: 7, dvy: 0, dvz: 0, centerx: 32, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -320, y: 24, w: 420, h: 44, dvx: 30, dvy: -9, fall: 70, vrest: 6, bdefend: 30, injury: 39, effect: 1
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  266: { name: "shadow_slash",
    pic: 72, state: 3, wait: 1, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -320, y: 24, w: 420, h: 44, dvx: 30, dvy: -9, fall: 70, vrest: 6, bdefend: 30, injury: 21, effect: 1
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  267: { name: "shadow_slash",
    pic: 73, state: 3, wait: 5, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  268: { name: "reverse",
    pic: 17, state: 3, wait: 0, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  269: { name: "reverse",
    pic: 51, state: 3, wait: 1, next: 249, dvx: -5, dvy: 0, dvz: 0, centerx: 32, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 19, y: 24, w: 86, h: 44, dvx: 16, fall: 70, vrest: 7, bdefend: 30, injury: 7, effect: 1
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  270: { name: "thunder",
    pic: 10, state: 3, wait: 1, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 48,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  271: { name: "thunder",
    pic: 25, state: 3, wait: 10, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  272: { name: "thunder",
    pic: 25, state: 3, wait: 3, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/105",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 100, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  273: { name: "thunder",
    pic: 25, state: 3, wait: 3, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 190, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 20
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  274: { name: "thunder",
    pic: 25, state: 3, wait: 3, next: 275, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/105",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 280, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  275: { name: "thunder",
    pic: 25, state: 3, wait: 3, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 370, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 20
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  276: { name: "thunder",
    pic: 25, state: 3, wait: 3, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/105",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 460, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  277: { name: "thunder",
    pic: 25, state: 3, wait: 3, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 550, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 20
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  278: { name: "thunder",
    pic: 25, state: 3, wait: 3, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/105",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 640, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  279: { name: "thunder",
    pic: 25, state: 3, wait: 20, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 730, y: 100, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 20
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  280: { name: "knight_catching",
    pic: 40, state: 15, wait: 3, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 20,
    wpoint: {
      kind: 1, x: 60, y: 64, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 16, y: 8, w: 47, h: 92
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
      }
    ]
  },
  281: { name: "knight_catching",
    pic: 43, state: 9, wait: 15, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 58, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 31, y: 10, w: 62, h: 89, vrest: 70,
      catchingact: [282, 282], caughtact: [132, 132]
    },
    bdy: {
      kind: 0, x: 11, y: 11, w: 54, h: 84
    }
  },
  282: { name: "knight_catching",
    pic: 44, state: 9, wait: 1, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 13, w: 49, h: 89
    }
  },
  283: { name: "knight_catching",
    pic: 40, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 64, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 16, y: 8, w: 47, h: 92
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
      }
    ]
  },
  284: { name: "knight_catching",
    pic: 43, state: 9, wait: 0, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 56,
    sound: "1/017",
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 1, y: 11, w: 74, h: 84, dvy: -9, fall: 70, vrest: 10, bdefend: 30, injury: 14
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  285: { name: "knight_catching",
    pic: 43, state: 9, wait: 1, next: 286, dvx: 0, dvy: -8, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  286: { name: "knight_catching",
    pic: 44, state: 9, wait: 12, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  287: { name: "knight_catching",
    pic: 12, state: 9, wait: 1, next: 288, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  288: { name: "knight_catching",
    pic: 13, state: 9, wait: 1, next: 289, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  289: { name: "knight_catching",
    pic: 50, state: 9, wait: 1, next: 290, dvx: 0, dvy: -2, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    cpoint: {
      kind: 1, x: 67, y: 39, injury: 8, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 70, y: 250, action: 100, dvx: 0, dvy: 0, oid: 329, facing: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  290: { name: "knight_catching",
    pic: 15, state: 9, wait: 1, next: 291, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  291: { name: "knight_catching",
    pic: 12, state: 9, wait: 1, next: 292, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/105",
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  292: { name: "knight_catching",
    pic: 13, state: 9, wait: 1, next: 293, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  293: { name: "knight_catching",
    pic: 50, state: 9, wait: 1, next: 294, dvx: 0, dvy: -2, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    cpoint: {
      kind: 1, x: 67, y: 39, injury: 8, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  294: { name: "knight_catching",
    pic: 15, state: 9, wait: 1, next: 295, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  295: { name: "knight_catching",
    pic: 17, state: 9, wait: 1, next: 296, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  296: { name: "knight_catching",
    pic: 18, state: 9, wait: 1, next: 297, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  297: { name: "knight_catching",
    pic: 51, state: 9, wait: 1, next: 298, dvx: 0, dvy: -2, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    cpoint: {
      kind: 1, x: 67, y: 39, injury: 8, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  298: { name: "knight_catching",
    pic: 19, state: 9, wait: 1, next: 299, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  299: { name: "knight_catching",
    pic: 12, state: 9, wait: 1, next: 300, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  300: { name: "knight_catching",
    pic: 13, state: 9, wait: 1, next: 301, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  301: { name: "knight_catching",
    pic: 50, state: 9, wait: 1, next: 302, dvx: 0, dvy: -2, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/032",
    cpoint: {
      kind: 1, x: 67, y: 39, injury: 8, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  302: { name: "knight_catching",
    pic: 15, state: 9, wait: 1, next: 303, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  303: { name: "knight_catching",
    pic: 48, state: 9, wait: 1, next: 304, dvx: 0, dvy: -1, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  304: { name: "knight_catching",
    pic: 29, state: 3, wait: 1, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  305: { name: "knight_catching",
    pic: 53, state: 3, wait: 1, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 8, w: 68, h: 72, dvx: 27, dvy: 16, fall: 70, vrest: 20, bdefend: 100, injury: 29, effect: 1
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  306: { name: "knight_catching",
    pic: 49, state: 3, wait: 1, next: 307, dvx: -12, dvy: -8, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 34, y: 8, w: 68, h: 72, dvx: 12, dvy: 12, fall: 70, vrest: 20, bdefend: 60, injury: 13, effect: 1
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  307: { name: "knight_catching",
    pic: 49, state: 3, wait: 30, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 34, y: 8, w: 68, h: 72, dvx: 12, dvy: 12, fall: 70, vrest: 20, bdefend: 60, injury: 13, effect: 1
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  308: { name: "knight_catching",
    pic: 44, state: 9, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 67, y: 39, injury: 30, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 13, w: 49, h: 89
    }
  },
  310: { name: "ball",
    pic: 10, state: 3, wait: 0, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 44,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  311: { name: "ball",
    pic: 11, state: 3, wait: 10, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/106",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 9, w: 53, h: 91
    }
  },
  312: { name: "ball",
    pic: 12, state: 3, wait: 0, next: 313, dvx: 2, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 8, w: 50, h: 90
    }
  },
  313: { name: "ball",
    pic: 24, state: 3, wait: 1, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 49, h: 93
    }
  },
  314: { name: "ball",
    pic: 52, state: 3, wait: 1, next: 315, dvx: 4, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 80, y: 60, action: 110, dvx: 0, dvy: 0, oid: 330, facing: 0
    },
    bdy: {
      kind: 0, x: 4, y: 9, w: 53, h: 90
    }
  },
  315: { name: "ball",
    pic: 25, state: 3, wait: 10, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 50, h: 91
    }
  },
  316: { name: "ball",
    pic: 15, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 5, y: 9, w: 50, h: 94
    }
  },
  320: { name: "hellwrath",
    pic: 10, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 321, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  321: { name: "hellwrath",
    pic: 10, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 322, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  322: { name: "hellwrath",
    pic: 10, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 323, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  323: { name: "hellwrath",
    pic: 10, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 324, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  324: { name: "hellwrath",
    pic: 10, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 325, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  325: { name: "hellwrath",
    pic: 10, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 327, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  327: { name: "hellwrath",
    pic: 10, state: 3, wait: 8, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 5390,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  328: { name: "hellwrath",
    pic: 76, state: 3, wait: 8, next: 329, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/107",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    },
    opoint: {
      kind: 1, x: 55, y: 30, action: 155, dvx: 0, dvy: 0, oid: 311, facing: 0
    }
  },
  329: { name: "hellwrath",
    pic: 77, state: 3, wait: 8, next: 330, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  330: { name: "hellwrath",
    pic: 78, state: 3, wait: 8, next: 331, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  331: { name: "hellwrath",
    pic: 79, state: 3, wait: 8, next: 332, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  332: { name: "hellwrath",
    pic: 80, state: 3, wait: 2, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  333: { name: "hellwrath",
    pic: 81, state: 3, wait: 8, next: 334, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  334: { name: "hellwrath",
    pic: 81, state: 3, wait: 0, next: 335, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 100, y: 80, action: 50, dvx: 0, dvy: 0, oid: 329, facing: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  335: { name: "hellwrath",
    pic: 81, state: 3, wait: 90, next: 336, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 100, y: 80, action: 50, dvx: 0, dvy: 0, oid: 329, facing: 1
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  336: { name: "hellwrath",
    pic: 82, state: 3, wait: 8, next: 337, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  337: { name: "hellwrath",
    pic: 83, state: 3, wait: 5, next: 338, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  338: { name: "hellwrath",
    pic: 25, state: 3, wait: 30, next: 339, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  339: { name: "hellwrath",
    pic: 15, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: -10000, w: 64, h: 90
    }
  },
  340: { name: "w",
    pic: 10, state: 3, wait: 2, next: 341, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 10,
    sound: "1/050",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  341: { name: "w",
    pic: 62, state: 3, wait: 2, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  342: { name: "w",
    pic: 10, state: 3, wait: 2, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  343: { name: "w",
    pic: 62, state: 3, wait: 2, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  344: { name: "w",
    pic: 10, state: 3, wait: 1, next: 345, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  345: { name: "w",
    pic: 62, state: 3, wait: 1, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  346: { name: "w",
    pic: 10, state: 3, wait: 1, next: 347, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  347: { name: "w",
    pic: 62, state: 3, wait: 1, next: 348, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  348: { name: "w",
    pic: 10, state: 3, wait: 0, next: 349, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  349: { name: "w",
    pic: 62, state: 3, wait: 0, next: 350, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  350: { name: "w",
    pic: 10, state: 3, wait: 0, next: 351, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  351: { name: "w",
    pic: 62, state: 3, wait: 0, next: 352, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  352: { name: "w",
    pic: 10, state: 15, wait: 0, next: 353, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  353: { name: "w",
    pic: 62, state: 15, wait: 8, next: 354, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 355, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 99, w: 64, h: 1
    },
    opoint: {
      kind: 1, x: 39, y: 60, action: 50, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  354: { name: "w",
    pic: 62, state: 3, wait: 8, next: 353, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 355, hit_j: 0, mp: -6,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 99, w: 64, h: 1
    },
    opoint: {
      kind: 1, x: 39, y: 60, action: 50, dvx: 0, dvy: 0, oid: 330, facing: 0
    }
  },
  355: { name: "w",
    pic: 10, state: 3, wait: 1, next: 356, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  356: { name: "w",
    pic: 62, state: 3, wait: 1, next: 357, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  357: { name: "w",
    pic: 10, state: 3, wait: 1, next: 358, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  358: { name: "w",
    pic: 62, state: 3, wait: 1, next: 359, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  359: { name: "w",
    pic: 10, state: 3, wait: 1, next: 360, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  360: { name: "w",
    pic: 62, state: 3, wait: 1, next: 361, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  361: { name: "w",
    pic: 10, state: 3, wait: 1, next: 362, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  362: { name: "w",
    pic: 62, state: 3, wait: 1, next: 363, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  363: { name: "w",
    pic: 10, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  398: { name: "x",
    pic: 68, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 10, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  }
  }
}

export default data

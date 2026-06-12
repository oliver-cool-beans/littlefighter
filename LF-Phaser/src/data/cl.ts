import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-69)": "sprite/cl_0.png", w: 99, h: 99, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/cl_1.png", w: 99, h: 99, row: 10, col: 7
      },
      {
        "file(140-141)": "sprite/cl_2.png", w: 144, h: 99, row: 2, col: 1
      },
      {
        "file(142-144)": "sprite/cl_3.png", w: 139, h: 599, row: 3, col: 1
      }
    ],
    name: "CL",
    head: "sprite/cl_f.png",
    small: "sprite/cl_s.png",
    walking_frame_rate: 3,
    walking_speed: 14,
    walking_speedz: 3,
    running_frame_rate: 3,
    running_speed: 18,
    running_speedz: 2.3,
    heavy_walking_speed: 13,
    heavy_walking_speedz: 2.5,
    heavy_running_speed: 15,
    heavy_running_speedz: 1.8,
    jump_height: -17,
    jump_distance: 17,
    jump_distancez: 4,
    dash_height: -12,
    dash_distance: 24,
    dash_distancez: 4.75,
    rowing_height: -15,
    rowing_distance: 14
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 2, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ]
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ]
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 4, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ]
  },
  3: { name: "standing",
    pic: 3, state: 1700, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ]
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 20, y: 10, w: 60, h: 90, vrest: 6, bdefend: 100, injury: 29, fall: 70, dvy: -1
    }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 20, y: 10, w: 60, h: 90, vrest: 6, bdefend: 100, injury: 29, fall: 70, dvy: -1
    }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 20, y: 10, w: 60, h: 90, vrest: 6, bdefend: 100, injury: 29, fall: 70, dvy: -1
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  16: { name: "heavy_obj_run",
    pic: 125, state: 2, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 20, y: 10, w: 60, h: 90, vrest: 6, bdefend: 100, injury: 29, fall: 70, dvy: -1
    }
  },
  17: { name: "heavy_obj_run",
    pic: 126, state: 2, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 20, y: 10, w: 60, h: 90, vrest: 6, bdefend: 100, injury: 29, fall: 70, dvy: -1
    }
  },
  18: { name: "heavy_obj_run",
    pic: 127, state: 2, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 20, y: 10, w: 60, h: 90, vrest: 6, bdefend: 100, injury: 29, fall: 70, dvy: -1
    }
  },
  19: { name: "heavy_stop_run",
    pic: 128, state: 15, wait: 0, next: 999, dvx: -1, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 20, y: 10, w: 60, h: 90, vrest: 5, bdefend: 100, effect: 4
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 0, next: 21, dvx: -1, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  21: { name: "normal_weapon_atck",
    pic: 71, state: 3, wait: 0, next: 22, dvx: 1, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 50, y: 20, weaponact: 32, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  22: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 82, y: 62, weaponact: 23, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  23: { name: "normal_weapon_atck",
    pic: 73, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 77, y: 67, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  25: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 0, next: 26, dvx: -1, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  26: { name: "normal_weapon_atck",
    pic: 71, state: 3, wait: 0, next: 27, dvx: 1, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 50, y: 20, weaponact: 32, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  27: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 1, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 82, y: 62, weaponact: 23, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  28: { name: "normal_weapon_atck",
    pic: 73, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 77, y: 67, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 80, state: 3, wait: 0, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 45, weaponact: 33, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 9, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 43, y: 8, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 81, state: 3, wait: 0, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 60, y: 10, weaponact: 32, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 9, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 43, y: 8, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  32: { name: "jump_weapon_atck",
    pic: 82, state: 3, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 80, y: 55, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 9, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 43, y: 8, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  33: { name: "jump_weapon_atck",
    pic: 83, state: 3, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 72, y: 64, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 9, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 43, y: 8, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  35: { name: "run_weapon_atck",
    pic: 71, state: 3, wait: 0, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 50, y: 20, weaponact: 32, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 80, state: 3, wait: 0, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 45, weaponact: 33, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 9, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 43, y: 8, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  45: { name: "light_weapon_thw",
    pic: 94, state: 15, wait: 0, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 12, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  46: { name: "light_weapon_thw",
    pic: 95, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 40, y: 15, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  47: { name: "light_weapon_thw",
    pic: 96, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 109, y: 60, weaponact: 35, attacking: 0, cover: 0, dvx: 32, dvy: -4, dvz: 5
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  50: { name: "heavy_weapon_thw",
    pic: 27, state: 15, wait: 2, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 28, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 112, y: 50, weaponact: 10, attacking: 0, cover: 0, dvx: 26, dvy: -4, dvz: 3
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 0, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 58, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 10, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 25, y: 9, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 52, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 59, y: 17, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 10, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 25, y: 9, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 99, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 95, y: 53, weaponact: 23, attacking: 0, cover: 0, dvx: 21, dvy: 12, dvz: 5
    },
    bdy: {
      kind: 0, x: 27, y: 10, w: 34, h: 35
    },
    itr: {
      kind: 0, x: 25, y: 9, w: 38, h: 37, vrest: 5, bdefend: 100, effect: 4
    }
  },
  55: { name: "weapon_drink",
    pic: 132, state: 17, wait: 1, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/042",
    wpoint: {
      kind: 1, x: 79, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  56: { name: "weapon_drink",
    pic: 133, state: 17, wait: 20, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 79, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  57: { name: "weapon_drink",
    pic: 134, state: 17, wait: 1, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 79, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  58: { name: "weapon_drink",
    pic: 133, state: 17, wait: 20, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 79, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 1, next: 61, dvx: -1, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 2, x: 20, y: 0, w: 60, h: 99, vrest: 5
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 36, y: 40, w: 48, h: 20, bdefend: 60, injury: 14, vrest: 5
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  65: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 66, dvx: -1, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 2, x: 20, y: 0, w: 60, h: 99, vrest: 5
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  66: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 40, y: 35, w: 48, h: 33, bdefend: 60, injury: 14, vrest: 5
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  70: { name: "super_punch",
    pic: 17, state: 3, wait: 0, next: 71, dvx: 4, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  71: { name: "super_punch",
    pic: 18, state: 3, wait: 2, next: 72, dvx: 6, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 255,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 16, y: 42, w: 86, h: 47, bdefend: 100, injury: 23, fall: 1, vrest: 5, dvx: 6
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  72: { name: "super_punch",
    pic: 19, state: 3, wait: 2, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 255,
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  73: { name: "super_punch",
    pic: 103, state: 3, wait: 0, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  74: { name: "super_punch",
    pic: 103, state: 3, wait: 0, next: 75, dvx: 6, dvy: 0, dvz: 0, centerx: 63, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  75: { name: "super_punch",
    pic: 104, state: 3, wait: 1, next: 76, dvx: 4, dvy: 0, dvz: 0, centerx: 63, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 31, y: 11, w: 60, h: 60, bdefend: 100, injury: 31, vrest: 5, dvy: -14, dvx: 9
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  76: { name: "super_punch",
    pic: 105, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 99, hit_a: 85, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 31, y: 11, w: 60, h: 60, bdefend: 100, injury: 31, vrest: 5, dvy: -14, dvx: 9
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  80: { name: "jump_attack",
    pic: 14, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 93, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  81: { name: "jump_attack",
    pic: 15, state: 3, wait: 2, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 93, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 25, y: 45, w: 75, h: 35, dvx: 12, fall: 70, vrest: 6, bdefend: 30, injury: 40
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  82: { name: "jump_attack",
    pic: 16, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 93, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 25, y: 45, w: 75, h: 35, dvx: 12, fall: 70, vrest: 6, bdefend: 30, injury: 40
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  85: { name: "run_attack",
    pic: 29, state: 3, wait: 1, next: 86, dvx: 6, dvy: 0, dvz: 0, centerx: 26, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 6, y: 10, w: 63, h: 63, bdefend: 100, injury: 49, fall: 70, dvx: 18, dvy: -9, vrest: 6
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  86: { name: "run_attack",
    pic: 39, state: 3, wait: 9, next: 87, dvx: 6, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 0, hit_j: 228,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 6, y: 10, w: 63, h: 63, bdefend: 100, injury: 49, fall: 70, dvx: 18, dvy: -9, vrest: 6
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  87: { name: "run_attack",
    pic: 49, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  90: { name: "dash_attack",
    pic: 106, state: 15, wait: 0, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  91: { name: "dash_attack",
    pic: 107, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: [
      {
        kind: 0, x: 34, y: 44, w: 60, h: 40, dvx: 32, fall: 70, vrest: 8, bdefend: 60, injury: 56
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  92: { name: "dash_attack",
    pic: 108, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 34, y: 44, w: 60, h: 40, dvx: 32, fall: 70, vrest: 8, bdefend: 60, injury: 56
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  95: { name: "dash_defend",
    pic: 111, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 27, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  100: { name: "rowing",
    pic: 66, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 99, hit_a: 80, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 36, y: 53, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 80, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 92, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  102: { name: "rowing",
    pic: 60, state: 6, wait: 0, next: 103, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 23, y: 74, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  103: { name: "rowing",
    pic: 61, state: 6, wait: 0, next: 104, dvx: 14, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 22, y: 76, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  104: { name: "rowing",
    pic: 69, state: 6, wait: 6, next: 105, dvx: 14, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 51, y: 1000, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  105: { name: "rowing",
    pic: 69, state: 6, wait: 0, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 1000, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  108: { name: "rowing",
    pic: 69, state: 6, wait: 0, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 1000, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  109: { name: "rowing",
    pic: 69, state: 6, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 1000, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  110: { name: "defend",
    pic: 56, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 39, y: 56, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  111: { name: "defend",
    pic: 57, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 255, hit_Uj: 265, hit_Ua: 273, hit_Da: 280, hit_Dj: 286, hit_ja: 290,
    wpoint: {
      kind: 1, x: 38, y: 56, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  112: { name: "broken_defend",
    pic: 58, state: 8, wait: 1, next: 113, dvx: -8, dvy: 0, dvz: 5, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 56, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  113: { name: "broken_defend",
    pic: 59, state: 8, wait: 1, next: 1200, dvx: -8, dvy: 0, dvz: 5, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 56, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  115: { name: "picking_light",
    pic: 36, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 58, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 86, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 39, y: 35, w: 35, h: 34
    },
    itr: {
      kind: 0, x: 37, y: 34, w: 39, h: 36, vrest: 5, bdefend: 100, effect: 4
    }
  },
  116: { name: "picking_heavy",
    pic: 36, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 58, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 52, y: 99, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 39, y: 35, w: 35, h: 34
    },
    itr: {
      kind: 0, x: 37, y: 34, w: 39, h: 36, vrest: 5, bdefend: 100, effect: 4
    }
  },
  120: { name: "catching",
    pic: 3, state: 9, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 99, y: 24, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 2
    },
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  121: { name: "catching",
    pic: 3, state: 9, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 99, y: 4, vaction: 131, aaction: 122, taction: 122, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -2
    },
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  122: { name: "catching",
    pic: 1, state: 9, wait: 1, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 99, y: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 1
    },
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  123: { name: "catching",
    pic: 2, state: 9, wait: 10, next: 232, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 99, y: 4, injury: 90, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 1
    },
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  130: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  131: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  132: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  133: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  134: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  135: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  136: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  137: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  138: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  139: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  140: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  141: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  142: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  143: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  144: { name: "picked_caught",
    pic: 0, state: 4, wait: 0, next: 224, dvx: -20, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  184: { name: "falling",
    pic: 33, state: 12, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  185: { name: "falling",
    pic: 33, state: 4, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  186: { name: "falling",
    pic: 40, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  187: { name: "falling",
    pic: 41, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  188: { name: "falling",
    pic: 42, state: 12, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  189: { name: "falling",
    pic: 43, state: 12, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  190: { name: "falling",
    pic: 43, state: 12, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  191: { name: "falling",
    pic: 43, state: 12, wait: 0, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  200: { name: "ice",
    pic: 8, state: 15, wait: 1, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 6, bdefend: 100, injury: 27, effect: 3
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  201: { name: "ice",
    pic: 9, state: 13, wait: 900, next: 202, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 202,
    itr: {
      kind: 0, x: 0, y: 0, w: 100, h: 100, arest: 6, bdefend: 60, injury: 27, effect: 3
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  202: { name: "ice",
    pic: 8, state: 15, wait: 0, next: 180, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 0, w: 100, h: 100, arest: 6, bdefend: 60, injury: 27, effect: 3
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  203: { name: "fire",
    pic: 34, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 100,
    itr: {
      kind: 0, x: 0, y: 12, w: 95, h: 78, dvx: -6, dvy: -6, fall: 70, vrest: 6, bdefend: 60, injury: 36, effect: 2
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  204: { name: "fire",
    pic: 35, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 100,
    itr: {
      kind: 0, x: 0, y: 12, w: 95, h: 78, dvx: -6, dvy: -6, fall: 70, vrest: 6, bdefend: 60, injury: 36, effect: 2
    },
    opoint: {
      kind: 1, x: 49, y: 99, action: 109, dvx: 0, dvy: 0, oid: 211, facing: 1
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  205: { name: "fire",
    pic: 44, state: 18, wait: 1, next: 206, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 100,
    sound: "1/020",
    itr: {
      kind: 0, x: 0, y: 12, w: 95, h: 78, dvx: -6, dvy: -6, fall: 70, vrest: 6, bdefend: 60, injury: 36, effect: 2
    },
    opoint: {
      kind: 1, x: 49, y: 49, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  206: { name: "fire",
    pic: 45, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 100,
    itr: {
      kind: 0, x: 0, y: 12, w: 95, h: 78, dvx: -6, dvy: -6, fall: 70, vrest: 6, bdefend: 60, injury: 36, effect: 2
    },
    opoint: {
      kind: 1, x: 49, y: 49, action: 0, dvx: 0, dvy: 0, oid: 211, facing: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  207: { name: "tired",
    pic: 69, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 1000, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  210: { name: "jump",
    pic: 60, state: 4, wait: 0, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 74, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 0, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 99, hit_a: 0, hit_d: 0, hit_j: 248,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 22, y: 76, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 245, hit_Fa: 241, hit_Dj: 250,
    wpoint: {
      kind: 1, x: 26, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  213: { name: "dash",
    pic: 63, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  214: { name: "dash",
    pic: 64, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 55, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 74, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  218: { name: "stop_running",
    pic: 4, state: 15, wait: 0, next: 999, dvx: -1, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 1, x: 50, y: 5, w: 25, h: 95,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  219: { name: "crouch2",
    pic: 60, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 74, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  220: { name: "injured",
    pic: 121, state: 11, wait: 1, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  221: { name: "injured",
    pic: 122, state: 11, wait: 1, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  222: { name: "injured",
    pic: 121, state: 11, wait: 1, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  223: { name: "injured",
    pic: 122, state: 11, wait: 1, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  224: { name: "injured",
    pic: 121, state: 4, wait: 1, next: 225, dvx: 0, dvy: -10, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  225: { name: "injured",
    pic: 122, state: 4, wait: 1, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  226: { name: "injured",
    pic: 121, state: 4, wait: 1, next: 227, dvx: -10, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  227: { name: "injured",
    pic: 122, state: 4, wait: 1, next: 1200, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  228: { name: "run_attack_dash",
    pic: 63, state: 4, wait: 0, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  229: { name: "run_attack_dash",
    pic: 63, state: 4, wait: 0, next: 213, dvx: 30, dvy: -11, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  230: { name: "lying",
    pic: 69, state: 14, wait: 15, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 10000, w: 35, h: 30
    }
  },
  231: { name: "lying",
    pic: 69, state: 14, wait: 15, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 1000, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 10000, w: 35, h: 30
    }
  },
  232: { name: "throw_lying_man",
    pic: 3, state: 9, wait: 1, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 99, y: 4, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  233: { name: "throw_lying_man",
    pic: 0, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 100, y: 44, vaction: 181, throwvx: 28, throwvy: -9, throwvz: 0, throwinjury: 48
    },
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  234: { name: "throw_lying_man",
    pic: 1, state: 9, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  235: { name: "ball1",
    pic: 77, state: 15, wait: 1, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 32,
    wpoint: {
      kind: 1, x: 44, y: 64, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  236: { name: "ball1",
    pic: 78, state: 15, wait: 2, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 64, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  237: { name: "ball1",
    pic: 79, state: 15, wait: 2, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  238: { name: "ball1",
    pic: 87, state: 15, wait: 3, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 24, y: 61, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 60, action: 100, dvx: 0, dvy: 0, oid: 328, facing: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  239: { name: "ball1",
    pic: 88, state: 15, wait: 2, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 62, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  240: { name: "ball1",
    pic: 89, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 235, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 27, y: 62, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  241: { name: "upball1",
    pic: 77, state: 15, wait: 0, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 32,
    wpoint: {
      kind: 1, x: 44, y: 64, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  242: { name: "upball1",
    pic: 78, state: 15, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 64, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  243: { name: "upball1",
    pic: 79, state: 15, wait: 1, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  244: { name: "upball1",
    pic: 87, state: 15, wait: 2, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 24, y: 61, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 50, y: 60, action: 100, dvx: 0, dvy: 0, oid: 328, facing: 20
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  245: { name: "jump2",
    pic: 60, state: 4, wait: 0, next: 246, dvx: 0, dvy: -12, dvz: 4, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 74, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  246: { name: "jump2",
    pic: 61, state: 4, wait: 0, next: 247, dvx: 0, dvy: -12, dvz: 0, centerx: 51, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 22, y: 76, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  247: { name: "jump2",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 241, hit_Dj: 250,
    wpoint: {
      kind: 1, x: 26, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  248: { name: "jump2",
    pic: 61, state: 4, wait: 0, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 22, y: 76, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  250: { name: "commando_kick",
    pic: 69, state: 4, wait: 5, next: 251, dvx: -1, dvy: -1, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 21,
    wpoint: {
      kind: 1, x: 51, y: 1000, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  251: { name: "commando_kick",
    pic: 67, state: 4, wait: 0, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/031",
    wpoint: {
      kind: 1, x: 19, y: 55, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  252: { name: "commando_kick",
    pic: 64, state: 4, wait: 0, next: 253, dvx: 30, dvy: 5, dvz: 10, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 55, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 64, y: 86, action: 0, dvx: 5, dvy: -10, oid: 333, facing: 30
    },
    itr: [
      {
        kind: 0, x: -100, y: 35, w: 280, h: 75, vrest: 8, fall: 70, dvx: 0, dvy: -1, bdefend: 60, zwidth: 50, injury: 57
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ]
  },
  253: { name: "commando_kick",
    pic: 67, state: 4, wait: 0, next: 252, dvx: 30, dvy: 5, dvz: 10, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 19, y: 55, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 64, y: 86, action: 0, dvx: 5, dvy: -10, oid: 333, facing: 31
    },
    itr: [
      {
        kind: 0, x: -100, y: 35, w: 280, h: 75, vrest: 8, fall: 70, dvx: 0, dvy: -1, bdefend: 60, zwidth: 50, injury: 57
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ]
  },
  255: { name: "dance",
    pic: 84, state: 9, wait: 1, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 48,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  256: { name: "dance",
    pic: 74, state: 9, wait: 10, next: 257, dvx: 20, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [259, 259], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  257: { name: "dance",
    pic: 74, state: 9, wait: 10, next: 258, dvx: 0, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [259, 259], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  258: { name: "dance",
    pic: 84, state: 9, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 3, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  259: { name: "dance ",
    pic: 74, state: 9, wait: 2, next: 260, dvx: 0, dvy: 0, centerx: 75, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 94, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  260: { name: "dance ",
    pic: 75, state: 9, wait: 2, next: 261, dvx: 0, dvy: 0, centerx: 83, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 94, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  261: { name: "dance ",
    pic: 76, state: 9, wait: 2, next: 262, dvx: 0, dvy: 0, centerx: 90, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 94, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  262: { name: "dance ",
    pic: 69, state: 9, wait: 8, next: 263, dvx: 0, dvy: 0, centerx: 90, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 94, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  263: { name: "dance",
    pic: 69, state: 9, wait: 0, next: 264, dvx: 0, dvy: 0, centerx: 90, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/001",
    cpoint: {
      kind: 1, x: 94, y: 41, injury: 10, vaction: 131, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -9
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 90, y: 99, action: 0, dvx: 4, dvy: -6, oid: 333, facing: 30
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  264: { name: "dance",
    pic: 69, state: 9, wait: 1, next: 263, dvx: 0, dvy: 0, centerx: 90, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 94, y: 41, injury: 10, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -9
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 90, y: 99, action: 0, dvx: 4, dvy: -6, oid: 333, facing: 31
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  265: { name: "big_bang",
    pic: 90, state: 15, wait: 1, next: 266, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 56,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  266: { name: "big_bang",
    pic: 91, state: 15, wait: 1, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  267: { name: "big_bang",
    pic: 92, state: 15, wait: 4, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 49, y: 99, action: 40, dvx: 0, dvy: 0, oid: 334, facing: 0
    }
  },
  268: { name: "big_bang",
    pic: 92, state: 15, wait: 0, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 49, y: 99, action: 100, dvx: 0, dvy: 0, oid: 334, facing: 0
    }
  },
  269: { name: "big_bang",
    pic: 92, state: 15, wait: 25, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 49, y: 99, action: 100, dvx: 0, dvy: 0, oid: 334, facing: 1
    }
  },
  270: { name: "end_move1",
    pic: 91, state: 15, wait: 1, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  271: { name: "end_move1",
    pic: 90, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  273: { name: "thunder_attack",
    pic: 90, state: 15, wait: 0, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 37,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  274: { name: "thunder_attack",
    pic: 91, state: 15, wait: 0, next: 275, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  275: { name: "thunder_attack",
    pic: 92, state: 15, wait: 0, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 8,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  276: { name: "thunder_attack",
    pic: 92, state: 15, wait: 8, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 277, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 49, y: 99, action: 120, dvx: 0, dvy: 0, oid: 335, facing: 0
    }
  },
  277: { name: "thunder_attack",
    pic: 92, state: 15, wait: 0, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 8,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  278: { name: "thunder_attack",
    pic: 92, state: 15, wait: 8, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 275, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 49, y: 99, action: 120, dvx: 0, dvy: 0, oid: 335, facing: 1
    }
  },
  280: { name: "ice_fire_ball",
    pic: 70, state: 3, wait: 1, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 48,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  281: { name: "ice_fire_ball",
    pic: 139, state: 3, wait: 2, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 42,
    sound: "1/067",
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  282: { name: "ice_fire_ball",
    pic: 139, state: 3, wait: 4, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 57, action: 0, dvx: 0, dvy: 0, oid: 336, facing: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  283: { name: "ice_fire_ball",
    pic: 139, state: 3, wait: 6, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 281, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  285: { name: "end_move2",
    pic: 70, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  286: { name: "destructive_ball",
    pic: 70, state: 3, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  287: { name: "destructive_ball",
    pic: 139, state: 3, wait: 4, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/108",
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 57, action: 0, dvx: 0, dvy: 0, oid: 337, facing: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  288: { name: "destructive_ball",
    pic: 139, state: 3, wait: 6, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/108",
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 57, action: 0, dvx: 0, dvy: 0, oid: 337, facing: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  290: { name: "sp1",
    pic: 0, state: 3, wait: 15, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 291,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  291: { name: "sp2",
    pic: 0, state: 3, wait: 15, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 368, hit_d: 0, hit_j: 0, hit_Uj: 295, hit_Dj: 300, hit_Ua: 315, hit_Da: 320, hit_ja: 330, hit_Fa: 345, hit_Fj: 350,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  295: { name: "dragon",
    pic: 70, state: 3, wait: 1, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 90,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  296: { name: "dragon",
    pic: 139, state: 3, wait: 10, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 37, action: 0, dvx: 0, dvy: 0, oid: 338, facing: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  300: { name: "sword",
    pic: 84, state: 9, wait: 1, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 56, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  301: { name: "sword",
    pic: 94, state: 15, wait: 1, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/107",
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  302: { name: "sword",
    pic: 140, state: 15, wait: 1, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  303: { name: "sword",
    pic: 141, state: 15, wait: 1, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  304: { name: "sword",
    pic: 140, state: 15, wait: 1, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  305: { name: "sword",
    pic: 141, state: 15, wait: 1, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  306: { name: "sword",
    pic: 140, state: 15, wait: 1, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  307: { name: "sword",
    pic: 141, state: 15, wait: 1, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  308: { name: "sword",
    pic: 140, state: 15, wait: 1, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  309: { name: "sword",
    pic: 141, state: 15, wait: 1, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  310: { name: "sword",
    pic: 140, state: 15, wait: 1, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 56, weaponact: 35, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  311: { name: "sword",
    pic: 141, state: 15, wait: 1, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 15, y: 61, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 2, x: 15, y: 61, action: 23, dvx: 0, dvy: 0, oid: 339, facing: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  312: { name: "sword",
    pic: 94, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 15, y: 61, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  315: { name: "disappear",
    pic: 3, state: 15, wait: 1, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 80,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  316: { name: "disappear",
    pic: 50, state: 15, wait: 1, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  317: { name: "disappear",
    pic: 51, state: 15, wait: 1, next: 1299, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  320: { name: "recovery",
    pic: 90, state: 15, wait: 1, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  321: { name: "recovery",
    pic: 91, state: 15, wait: 1, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  323: { name: "recovery",
    pic: 92, state: 15, wait: 1, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 270, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 55, y: -5, action: 100, dvx: 0, dvy: 0, oid: 340, facing: 0
    }
  },
  324: { name: "recovery",
    pic: 93, state: 15, wait: 1, next: 325, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 270, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 55, y: -5, action: 100, dvx: 5, dvy: 0, oid: 340, facing: 0
    }
  },
  325: { name: "recovery",
    pic: 92, state: 15, wait: 1, next: 326, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 270, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 55, y: -5, action: 100, dvx: -5, dvy: 0, oid: 340, facing: 0
    }
  },
  326: { name: "recovery",
    pic: 93, state: 15, wait: 1, next: 327, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 270, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 55, y: -5, action: 100, dvx: 0, dvy: 0, oid: 340, facing: 0
    }
  },
  327: { name: "recovery",
    pic: 92, state: 15, wait: 1, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 270, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 55, y: -5, action: 100, dvx: 5, dvy: 0, oid: 340, facing: 0
    }
  },
  328: { name: "recovery",
    pic: 93, state: 15, wait: 1, next: 323, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 329, hit_d: 270, hit_j: 0, mp: -5,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 55, y: -5, action: 100, dvx: -5, dvy: 0, oid: 340, facing: 0
    }
  },
  329: { name: "recovery",
    pic: 92, state: 15, wait: 1, next: 324, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 270, hit_j: 0, mp: -1000,
    sound: "1/049",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 55, y: -5, action: 100, dvx: 0, dvy: 0, oid: 340, facing: 30
    }
  },
  330: { name: "destruction",
    pic: 84, state: 15, wait: 0, next: 331, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 84,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  331: { name: "destruction",
    pic: 100, state: 15, wait: 0, next: 332, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  332: { name: "destruction",
    pic: 110, state: 15, wait: 0, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  333: { name: "destruction",
    pic: 100, state: 15, wait: 0, next: 334, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  334: { name: "destruction",
    pic: 110, state: 15, wait: 0, next: 335, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  335: { name: "destruction",
    pic: 100, state: 15, wait: 0, next: 336, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  336: { name: "destruction",
    pic: 110, state: 15, wait: 0, next: 337, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  337: { name: "destruction",
    pic: 101, state: 15, wait: 0, next: 338, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  338: { name: "destruction",
    pic: 111, state: 15, wait: 0, next: 339, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  339: { name: "destruction",
    pic: 84, state: 15, wait: 6, next: 340, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  340: { name: "destruction",
    pic: 74, state: 15, wait: 1, next: 341, dvx: 5, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  341: { name: "destruction",
    pic: 85, state: 15, wait: 35, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 344, hit_d: 344, hit_j: 344,
    sound: "1/055",
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      },
      {
        kind: 0, x: 0, y: -11000, w: 800, h: 12000, dvy: -50, fall: 70, vrest: 13, bdefend: 100, injury: 20, zwidth: 95
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  342: { name: "destruction",
    pic: 85, state: 15, wait: 20, next: 343, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  343: { name: "destruction",
    pic: 86, state: 15, wait: 2, next: 344, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  344: { name: "destruction",
    pic: 74, state: 15, wait: 2, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  },
  345: { name: "reincarnation",
    pic: 70, state: 3, wait: 1, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 5200,
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  346: { name: "reincarnation",
    pic: 139, state: 3, wait: 8, next: 347, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049",
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 57, action: 100, dvx: 10, dvy: 0, oid: 340, facing: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  347: { name: "reincarnation",
    pic: 139, state: 3, wait: 8, next: 348, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049",
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 57, action: 100, dvx: 5, dvy: 0, oid: 340, facing: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  348: { name: "reincarnation",
    pic: 139, state: 3, wait: 8, next: 349, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049",
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 57, action: 100, dvx: 0, dvy: 0, oid: 340, facing: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  349: { name: "reincarnation",
    pic: 139, state: 18, wait: 8, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049",
    wpoint: {
      kind: 1, x: 25, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 76, y: 57, action: 100, dvx: 10, dvy: 0, oid: 340, facing: 30
    },
    itr: [
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      },
      {
        kind: 0, x: 50, y: 10000, w: 100, h: 100, dvx: 2, bdefend: 16, injury: -150, effect: 6, zwidth: 35, vrest: 1
      }
    ]
  },
  350: { name: "fascination",
    pic: 84, state: 9, wait: 10, next: 351, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 5200,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  351: { name: "fascination",
    pic: 74, state: 9, wait: 1, next: 352, dvx: 15, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/031",
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  352: { name: "fascination",
    pic: 85, state: 9, wait: 1, next: 353, dvx: 15, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  353: { name: "fascination",
    pic: 74, state: 9, wait: 1, next: 354, dvx: 15, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  354: { name: "fascination",
    pic: 85, state: 9, wait: 1, next: 355, dvx: 15, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  355: { name: "fascination",
    pic: 74, state: 9, wait: 1, next: 356, dvx: 15, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  356: { name: "fascination",
    pic: 85, state: 9, wait: 1, next: 357, dvx: 15, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  357: { name: "fascination",
    pic: 74, state: 9, wait: 1, next: 358, dvx: 0, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  358: { name: "fascination",
    pic: 85, state: 9, wait: 1, next: 359, dvx: 0, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  359: { name: "fascination",
    pic: 74, state: 9, wait: 1, next: 360, dvx: 0, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  360: { name: "fascination",
    pic: 85, state: 9, wait: 1, next: 361, dvx: 0, dvy: 0, dvz: 5, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 35, y: 13, w: 64, h: 87, vrest: 7,
        catchingact: [362, 362], caughtact: [132, 132]
      },
      {
        kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 65, y: 50, action: 0, dvx: 10, dvy: -5, oid: 333, facing: 31
    }
  },
  361: { name: "fascination",
    pic: 84, state: 9, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 3, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  362: { name: "fascination ",
    pic: 74, state: 9, wait: 15, next: 363, dvx: 0, dvy: 0, centerx: 75, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: 50, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  363: { name: "fascination ",
    pic: 74, state: 9, wait: 15, next: 364, dvx: 0, dvy: 0, centerx: 75, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: 50, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    },
    opoint: {
      kind: 1, x: 120, y: 99, action: 100, dvx: 0, dvy: 0, oid: 342, facing: 0
    }
  },
  364: { name: "fascination ",
    pic: 90, state: 9, wait: 1, next: 365, dvx: 0, dvy: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: 50, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  365: { name: "fascination ",
    pic: 91, state: 9, wait: 1, next: 366, dvx: 0, dvy: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: 50, injury: 300, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  366: { name: "fascination ",
    pic: 92, state: 9, wait: 20, next: 367, dvx: 0, dvy: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 85, y: -1000, vaction: 398, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  367: { name: "fascination ",
    pic: 92, state: 15, wait: 55, next: 270, dvx: 0, dvy: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 1000, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 35, h: 30
    }
  },
  368: { name: "sp",
    pic: 0, state: 3, wait: 15, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 999, hit_d: 999, hit_j: 369,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  369: { name: "sp",
    pic: 0, state: 3, wait: 15, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 999, hit_d: 999, hit_j: 370,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  370: { name: "sp",
    pic: 0, state: 3, wait: 15, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 371, hit_d: 999, hit_j: 999,
    wpoint: {
      kind: 1, x: 40, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  371: { name: "eternal",
    pic: 90, state: 15, wait: 1, next: 372, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 1400,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  372: { name: "eternal",
    pic: 91, state: 15, wait: 20, next: 373, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/107",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 53, y: 40, action: 155, dvx: 0, dvy: 0, oid: 311, facing: 0
    }
  },
  373: { name: "eternal",
    pic: 142, state: 15, wait: 1, next: 374, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  374: { name: "eternal",
    pic: 143, state: 15, wait: 1, next: 375, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  375: { name: "eternal",
    pic: 142, state: 15, wait: 1, next: 376, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: 3, dvy: 0, oid: 345, facing: 20
    }
  },
  376: { name: "eternal",
    pic: 143, state: 15, wait: 1, next: 377, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: -3, dvy: 0, oid: 345, facing: 20
    }
  },
  377: { name: "eternal",
    pic: 142, state: 15, wait: 1, next: 378, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 30
    }
  },
  378: { name: "eternal",
    pic: 143, state: 15, wait: 1, next: 379, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 30
    }
  },
  379: { name: "eternal",
    pic: 142, state: 15, wait: 1, next: 380, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: 3, dvy: 0, oid: 345, facing: 30
    }
  },
  380: { name: "eternal",
    pic: 143, state: 15, wait: 1, next: 381, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: -3, dvy: 0, oid: 345, facing: 30
    }
  },
  381: { name: "eternal",
    pic: 142, state: 15, wait: 0, next: 382, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: -3, dvy: 0, oid: 345, facing: 30
    }
  },
  382: { name: "eternal",
    pic: 143, state: 15, wait: 0, next: 383, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: 3, dvy: 0, oid: 345, facing: 30
    }
  },
  383: { name: "eternal",
    pic: 142, state: 15, wait: 0, next: 384, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: 1, dvy: 0, oid: 345, facing: 30
    }
  },
  384: { name: "eternal",
    pic: 143, state: 15, wait: 0, next: 385, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: -1, dvy: 0, oid: 345, facing: 30
    }
  },
  385: { name: "eternal",
    pic: 142, state: 15, wait: 0, next: 386, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: -2, dvy: 0, oid: 345, facing: 30
    }
  },
  386: { name: "eternal",
    pic: 143, state: 15, wait: 0, next: 387, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: 2, dvy: 0, oid: 345, facing: 30
    }
  },
  387: { name: "eternal",
    pic: 142, state: 15, wait: 0, next: 388, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 599, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 30
    }
  },
  388: { name: "eternal",
    pic: 143, state: 15, wait: 0, next: 389, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/092",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 599, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 30
    }
  },
  389: { name: "eternal",
    pic: 144, state: 15, wait: 0, next: 390, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/110",
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 38, y: 559, action: 100, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  390: { name: "eternal",
    pic: 144, state: 15, wait: 3, next: 391, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    },
    opoint: {
      kind: 1, x: 107, y: 559, action: 100, dvx: 0, dvy: 0, oid: 345, facing: 1
    }
  },
  391: { name: "eternal",
    pic: 144, state: 15, wait: 3, next: 392, dvx: 0, dvy: 0, dvz: 0, centerx: 63, centery: 599, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  392: { name: "eternal",
    pic: 91, state: 15, wait: 10, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 10, w: 39, h: 32, vrest: 5, bdefend: 100, effect: 4
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 30, y: 11, w: 35, h: 30
    }
  }
  }

}

export default data

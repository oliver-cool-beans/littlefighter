import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/dennis_0.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/dennis_1.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-209)": "sprite/dennis_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(210-279)": "sprite/dennis_3.png", w: 79, h: 79, row: 10, col: 7
      }
    ],
    name: "Dennis",
    head: "sprite/dennis_f.png",
    small: "sprite/dennis_s.png",
    walking_frame_rate: 3,
    walking_speed: 7,
    walking_speedz: 3,
    running_frame_rate: 3,
    running_speed: 12,
    running_speedz: 2.15,
    heavy_walking_speed: 5.7,
    heavy_walking_speedz: 2.35,
    heavy_running_speed: 8.2,
    heavy_running_speedz: 1.5,
    jump_height: -17,
    jump_distance: 12,
    jump_distancez: 4,
    dash_height: -11,
    dash_distance: 20,
    dash_distancez: 5.5,
    rowing_height: -3,
    rowing_distance: 7
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 23, y: 55, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 6, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 23, y: 54, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 22, y: 54, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 22, y: 53, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 23, y: 54, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 27, y: 55, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 34, y: 54, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 37, y: 55, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 61, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 20, y: 44, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 21, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 21, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 21, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  16: { name: "heavy_obj_run",
    pic: 125, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 44, y: 26, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  17: { name: "heavy_obj_run",
    pic: 126, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  18: { name: "heavy_obj_run",
    pic: 127, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 47, y: 26, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  19: { name: "heavy_stop_run",
    pic: 128, state: 15, wait: 7, next: 999, dvx: 2, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 33, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 5, y: 15, w: 45, h: 65
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 11, w: 33, h: 69
    }
  },
  21: { name: "normal_weapon_atck",
    pic: 71, state: 3, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 17, y: 31, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 13, w: 33, h: 66
    }
  },
  22: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 2, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 59, y: 53, weaponact: 23, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 11, w: 36, h: 68
    }
  },
  23: { name: "normal_weapon_atck",
    pic: 73, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 57, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 18, y: 9, w: 36, h: 66
      },
      {
        kind: 0, x: 25, y: 61, w: 17, h: 18
      }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 74, state: 3, wait: 1, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 38, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 11, w: 30, h: 69
    }
  },
  26: { name: "normal_weapon_atck",
    pic: 75, state: 3, wait: 1, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 50, y: 39, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 11, w: 32, h: 68
    }
  },
  27: { name: "normal_weapon_atck",
    pic: 76, state: 3, wait: 2, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 62, y: 54, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 10, w: 36, h: 71
    }
  },
  28: { name: "normal_weapon_atck",
    pic: 77, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 48, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 11, w: 34, h: 68
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 80, state: 3, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 42, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 7, w: 32, h: 58
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 81, state: 3, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 17, y: 27, weaponact: 34, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 26, y: 7, w: 26, h: 39
      },
      {
        kind: 0, x: 13, y: 40, w: 24, h: 30
      }
    ]
  },
  32: { name: "jump_weapon_atck",
    pic: 82, state: 3, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 61, y: 50, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 32, w: 33, h: 43
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  33: { name: "jump_weapon_atck",
    pic: 83, state: 3, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 57, y: 55, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 32, w: 33, h: 43
      },
      {
        kind: 0, x: 26, y: 9, w: 26, h: 37
      }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 84, state: 3, wait: 3, next: 36, dvx: 6, dvy: 0, dvz: 0, centerx: 36, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 39, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 15, w: 31, h: 65
    }
  },
  36: { name: "run_weapon_atck",
    pic: 85, state: 3, wait: 8, next: 37, dvx: 4, dvy: 0, dvz: 0, centerx: 38, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 61, y: 54, weaponact: 24, attacking: 3, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 15, w: 34, h: 65
    }
  },
  37: { name: "run_weapon_atck",
    pic: 86, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 23, attacking: 3, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 17, w: 34, h: 64
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 90, state: 3, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 42, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 10, w: 35, h: 52
    }
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 18, y: 27, weaponact: 34, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 32, w: 33, h: 45
      },
      {
        kind: 0, x: 23, y: 8, w: 34, h: 33
      }
    ]
  },
  42: { name: "dash_weapon_atck",
    pic: 92, state: 3, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 62, y: 50, weaponact: 24, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 32, w: 33, h: 45
      },
      {
        kind: 0, x: 27, y: 13, w: 30, h: 33
      }
    ]
  },
  43: { name: "dash_weapon_atck",
    pic: 93, state: 3, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 53, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 32, w: 33, h: 45
      },
      {
        kind: 0, x: 23, y: 13, w: 31, h: 37
      }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 94, state: 15, wait: 2, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 46, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 34, h: 65
      },
      {
        kind: 0, x: 9, y: 36, w: 17, h: 18
      }
    ]
  },
  46: { name: "light_weapon_thw",
    pic: 95, state: 15, wait: 3, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 16, y: 32, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 96, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 107, y: 60, weaponact: 35, attacking: 0, cover: 0, dvx: 28, dvy: -5, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 27, state: 15, wait: 5, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 23, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 28, state: 15, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 101, y: 38, weaponact: 10, attacking: 0, cover: 0, dvx: 18, dvy: -5, dvz: 2
    },
    bdy: [
      {
        kind: 0, x: 8, y: 39, w: 61, h: 23
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 40, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 9, w: 29, h: 54
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 2, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 43, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 14, y: 26, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 35, y: 10, w: 36, h: 23
      },
      {
        kind: 0, x: 15, y: 18, w: 30, h: 43
      }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 99, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 71, weaponact: 23, attacking: 0, cover: 0, dvx: 16, dvy: 8, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 22, y: 15, w: 38, h: 38
      },
      {
        kind: 0, x: 3, y: 37, w: 34, h: 26
      }
    ]
  },
  55: { name: "weapon_drink",
    pic: 132, state: 17, wait: 2, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/042",
    wpoint: {
      kind: 1, x: 56, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  56: { name: "weapon_drink",
    pic: 133, state: 17, wait: 2, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 23, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  57: { name: "weapon_drink",
    pic: 134, state: 17, wait: 2, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 22, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  58: { name: "weapon_drink",
    pic: 133, state: 17, wait: 2, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 23, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 37, h: 53
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 44, y: 47, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 21, y: 30, w: 54, h: 23, dvx: 1, fall: 16, bdefend: 30, injury: 12
    },
    bdy: {
      kind: 0, x: 16, y: 19, w: 33, h: 59
    }
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 26, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 20, w: 33, h: 61
    }
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 37, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 9, w: 36, h: 71
    }
  },
  65: { name: "punch",
    pic: 14, state: 3, wait: 0, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 37, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 16, y: 59, w: 35, h: 21, vrest: 1
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 23, y: 43, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 17, y: 37, w: 60, h: 19, dvx: 1, fall: 16, bdefend: 30, injury: 12
    },
    bdy: {
      kind: 0, x: 14, y: 19, w: 32, h: 62
    }
  },
  67: { name: "punch",
    pic: 16, state: 3, wait: 1, next: 68, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 48, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 15, w: 37, h: 64
    }
  },
  68: { name: "punch",
    pic: 17, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 48, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 15, w: 34, h: 65
    }
  },
  70: { name: "super_punch",
    pic: 8, state: 3, wait: 1, next: 71, dvx: 5, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 30, y: 24, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  71: { name: "super_punch",
    pic: 9, state: 3, wait: 1, next: 72, dvx: 8, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 28, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 12, w: 26, h: 65
    }
  },
  72: { name: "super_punch",
    pic: 19, state: 3, wait: 1, next: 73, dvx: 9, dvy: 0, dvz: 0, centerx: 4, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 5, y: 31, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -13, y: 28, w: 84, h: 28, dvx: 8, dvy: -5, fall: 70, vrest: 5, bdefend: 60, injury: 17
    },
    bdy: {
      kind: 0, x: 4, y: 12, w: 42, h: 68
    }
  },
  73: { name: "super_punch",
    pic: 29, state: 3, wait: 1, next: 74, dvx: 7, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: 33, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -13, y: 28, w: 84, h: 28, dvx: 8, dvy: -5, fall: 70, vrest: 8, bdefend: 60, injury: 17
    },
    bdy: {
      kind: 0, x: 6, y: 20, w: 37, h: 55
    }
  },
  74: { name: "super_punch",
    pic: 29, state: 3, wait: 4, next: 75, dvx: 7, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Uj: 291, hit_ja: 345,
    wpoint: {
      kind: 1, x: 7, y: 33, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -13, y: 28, w: 84, h: 28, dvx: 8, dvy: -5, fall: 70, vrest: 8, bdefend: 60, injury: 17
    },
    bdy: {
      kind: 0, x: 6, y: 20, w: 37, h: 55
    }
  },
  75: { name: "super_punch",
    pic: 39, state: 3, wait: 2, next: 76, dvx: 6, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: 36, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -13, y: 28, w: 84, h: 28, dvx: 15, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 20
    },
    bdy: {
      kind: 0, x: 8, y: 17, w: 36, h: 61
    }
  },
  76: { name: "super_punch",
    pic: 49, state: 3, wait: 1, next: 999, dvx: 3, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 17, w: 36, h: 61
    }
  },
  80: { name: "jump_attack",
    pic: 37, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 10, y: 17, w: 43, h: 52
    }
  },
  81: { name: "jump_attack",
    pic: 38, state: 3, wait: 9, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 40, w: 58, h: 17, dvx: 7, fall: 70, arest: 15, bdefend: 30, injury: 21
    },
    bdy: {
      kind: 0, x: 10, y: 19, w: 43, h: 49
    }
  },
  82: { name: "jump_attack",
    pic: 37, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 17, w: 40, h: 52
    }
  },
  85: { name: "run_attack",
    pic: 102, state: 3, wait: 1, next: 86, dvx: 6, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 41, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 17, w: 37, h: 62
    }
  },
  86: { name: "run_attack",
    pic: 103, state: 7, wait: 1, next: 87, dvx: 4, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 47, y: 44, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 15, w: 39, h: 64
    }
  },
  87: { name: "run_attack",
    pic: 104, state: 7, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 10, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 9, y: 38, w: 68, h: 18, dvx: 10, fall: 60, arest: 15, bdefend: 16, injury: 18
    },
    bdy: {
      kind: 0, x: 10, y: 16, w: 38, h: 62
    }
  },
  88: { name: "run_attack",
    pic: 105, state: 3, wait: 2, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 46, y: 46, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 33, y: 41, w: 42, h: 25, dvx: 10, fall: 60, arest: 15, bdefend: 16, injury: 18
    },
    bdy: {
      kind: 0, x: 12, y: 16, w: 34, h: 63
    }
  },
  89: { name: "run_attack",
    pic: 106, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 70, hit_d: 0, hit_j: 0, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 11, w: 36, h: 67
    }
  },
  90: { name: "dash_attack",
    pic: 107, state: 15, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 20, w: 47, h: 51
    }
  },
  91: { name: "dash_attack",
    pic: 108, state: 15, wait: 9, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 24, y: 23, w: 55, h: 39, dvx: 12, fall: 70, arest: 15, bdefend: 60, injury: 42
    },
    bdy: {
      kind: 0, x: 11, y: 20, w: 41, h: 48
    }
  },
  92: { name: "dash_attack",
    pic: 109, state: 15, wait: 1, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 22, w: 55, h: 42
    }
  },
  94: { name: "crouch",
    pic: 60, state: 15, wait: 15, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 46, y: 61, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  95: { name: "dash_defend",
    pic: 111, state: 7, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 66, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 28, y: 35, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 72, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  102: { name: "rowing",
    pic: 58, state: 6, wait: 2, next: 103, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 363, hit_Da: 265, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 38, y: 75, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 1
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  103: { name: "rowing",
    pic: 59, state: 6, wait: 2, next: 104, dvx: 9, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 363, hit_Da: 265, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 43, y: 47, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 1
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  104: { name: "rowing",
    pic: 69, state: 6, wait: 2, next: 105, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 363, hit_Da: 265, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 20, y: 61, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 1
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  105: { name: "rowing",
    pic: 58, state: 6, wait: 2, next: 219, dvx: 9, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 363, hit_Da: 265, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 1
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  106: { name: "rowing",
    pic: 59, state: 6, wait: 1, next: 219, dvx: 9, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 293, y: 198, w: 1, h: 1, vrest: 1
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  107: { name: "rowing",
    pic: 69, state: 6, wait: 1, next: 219, dvx: 9, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 1
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  108: { name: "rowing",
    pic: 117, state: 6, wait: 1, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 41, y: 29, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  109: { name: "rowing",
    pic: 118, state: 6, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 22, y: 23, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  110: { name: "defend",
    pic: 56, state: 7, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Ua: 295, hit_Da: 265, hit_Fj: 280, hit_Uj: 305, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 46, y: 37, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 19, w: 38, h: 60
    }
  },
  111: { name: "defend",
    pic: 57, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 38, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 19, w: 42, h: 60
    }
  },
  112: { name: "broken_defend",
    pic: 46, state: 8, wait: 0, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  113: { name: "broken_defend",
    pic: 47, state: 8, wait: 0, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 46, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  114: { name: "broken_defend",
    pic: 48, state: 8, wait: 0, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 65, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  115: { name: "picking_light",
    pic: 36, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 75, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 43, w: 33, h: 37
      },
      {
        kind: 0, x: 32, y: 24, w: 28, h: 28
      }
    ]
  },
  116: { name: "picking_heavy",
    pic: 36, state: 15, wait: 3, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 43, w: 33, h: 37
      },
      {
        kind: 0, x: 36, y: 26, w: 26, h: 25
      }
    ]
  },
  117: { name: "picking_heavy",
    pic: 36, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 73, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 43, w: 33, h: 37
      },
      {
        kind: 0, x: 34, y: 19, w: 26, h: 37
      }
    ]
  },
  120: { name: "catching",
    pic: 51, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 28, y: 44, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "catching",
    pic: 50, state: 9, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Ua: 295, hit_Da: 265, hit_Fj: 372, hit_ja: 345, hit_Dj: 354,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -3
    },
    wpoint: {
      kind: 1, x: 31, y: 43, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 51, state: 9, wait: 2, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 4
    },
    wpoint: {
      kind: 1, x: 27, y: 43, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 52, state: 9, wait: 3, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 52, y: 36, injury: 7, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 4
    },
    wpoint: {
      kind: 1, x: 24, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  124: { name: "super_punch",
    pic: 226, state: 9, wait: 1, next: 125, dvx: 0, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: 36, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 0, y: -30, w: 190, h: 140, dvy: -9, dvx: 24, fall: 70, vrest: 15, bdefend: 60, injury: 23, zwidth: 30, effect: -1
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 36, h: 61
    }
  },
  125: { name: "super_punch",
    pic: 227, state: 15, wait: 8, next: 126, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 36, h: 61
    }
  },
  126: { name: "super_punch",
    pic: 49, state: 15, wait: 1, next: 127, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 36, h: 61
    }
  },
  127: { name: "super_punch",
    pic: 227, state: 15, wait: 1, next: 128, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 36, h: 61
    }
  },
  128: { name: "super_punch",
    pic: 49, state: 15, wait: 1, next: 129, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 36, h: 61
    }
  },
  129: { name: "super_punch",
    pic: 227, state: 15, wait: 1, next: 145, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 36, h: 61
    }
  },
  130: { name: "picked_caught",
    pic: 53, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 39, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  131: { name: "picked_caught",
    pic: 54, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 43, y: 39, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 27, y: 52, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  132: { name: "picked_caught",
    pic: 55, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 44, y: 47, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  133: { name: "picked_caught",
    pic: 30, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 36
    },
    wpoint: {
      kind: 1, x: 35, y: 37, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 83, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 30, y: 37
    },
    wpoint: {
      kind: 1, x: 41, y: 29, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 35, y: 22
    },
    wpoint: {
      kind: 1, x: 39, y: 44, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 27, y: 46
    },
    wpoint: {
      kind: 1, x: 35, y: 40, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  137: { name: "picked_caught",
    pic: 34, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 28, y: 59
    },
    wpoint: {
      kind: 1, x: 41, y: 72, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  138: { name: "picked_caught",
    pic: 35, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 31, y: 51
    },
    wpoint: {
      kind: 1, x: 40, y: 70, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  139: { name: "picked_caught",
    pic: 40, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 32
    },
    wpoint: {
      kind: 1, x: 28, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  140: { name: "picked_caught",
    pic: 41, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 40, y: 39
    },
    wpoint: {
      kind: 1, x: 44, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  141: { name: "picked_caught",
    pic: 42, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 42, y: 48, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  142: { name: "picked_caught",
    pic: 43, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 51, y: 65, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  143: { name: "picked_caught",
    pic: 44, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 66
    },
    wpoint: {
      kind: 1, x: 66, y: 72, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  144: { name: "picked_caught",
    pic: 45, state: 10, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 40, y: 67, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  145: { name: "super_punch",
    pic: 49, state: 15, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 36, h: 61
    }
  },
  146: { name: "punch",
    pic: 222, state: 9, wait: 0, next: 147, dvx: -1, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 2170,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 39, y: 26, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: -10000, w: 33, h: 61
    }
  },
  147: { name: "punch",
    pic: 222, state: 9, wait: 20, next: 148, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/107",
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 39, y: 26, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 5, y: -5, w: 90, h: 90, dvy: -8, dvx: -1, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 16, y: -10000, w: 33, h: 61
    },
    opoint: {
      kind: 1, x: 49, y: 49, action: 155, dvx: 0, dvy: 0, oid: 311, facing: 0
    }
  },
  148: { name: "swallow",
    pic: 230, state: 9, wait: 2, next: 149, dvx: 3, dvy: -4, dvz: 0, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  149: { name: "swallow",
    pic: 231, state: 9, wait: 3, next: 150, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 23, y: 42, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 0, y: -30, w: 140, h: 120, dvx: 2, dvy: -10, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 50
    }
  },
  150: { name: "swallow",
    pic: 232, state: 9, wait: 2, next: 151, dvx: 3, dvy: -3, dvz: 0, centerx: 18, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 42, y: 40, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  151: { name: "swallow",
    pic: 233, state: 9, wait: 3, next: 152, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 51, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 0, y: -30, w: 140, h: 120, dvx: 2, dvy: -10, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 51
    }
  },
  152: { name: "swallow",
    pic: 230, state: 9, wait: 2, next: 153, dvx: 3, dvy: -3, dvz: 0, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  153: { name: "swallow",
    pic: 231, state: 9, wait: 3, next: 154, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 23, y: 42, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 0, y: -30, w: 140, h: 120, dvx: 2, dvy: -10, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 50
    }
  },
  154: { name: "swallow",
    pic: 232, state: 9, wait: 2, next: 155, dvx: 3, dvy: -3, dvz: 0, centerx: 18, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 42, y: 40, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  155: { name: "swallow",
    pic: 233, state: 9, wait: 3, next: 156, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 8, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 51, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 0, y: -30, w: 140, h: 120, dvx: 2, dvy: -10, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 51
    }
  },
  156: { name: "swallow",
    pic: 230, state: 9, wait: 1, next: 157, dvx: 1, dvy: -2, dvz: 0, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 2, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 71
    }
  },
  157: { name: "rowing",
    pic: 234, state: 9, wait: 1, next: 158, dvx: 1, dvy: -1, dvz: 0, centerx: 40, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 70, y: 21, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 45, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 1, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 24, y: -10000, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 70, y: 21, action: 155, dvx: 0, dvy: 0, oid: 329, facing: 70
    }
  },
  158: { name: "jump_attack",
    pic: 235, state: 9, wait: 1, next: 159, dvx: 1, dvy: -1, dvz: 0, centerx: 36, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 42, y: 56, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 2, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 24, y: -10000, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 70
    }
  },
  159: { name: "rowing",
    pic: 236, state: 9, wait: 1, next: 160, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 34, y: 72, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 1, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 70, y: 21, action: 155, dvx: 0, dvy: 0, oid: 329, facing: 71
    }
  },
  160: { name: "swallow",
    pic: 237, state: 9, wait: 1, next: 161, dvx: 1, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 2, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 71
    }
  },
  161: { name: "swallow",
    pic: 230, state: 9, wait: 1, next: 162, dvx: 1, dvy: -1, dvz: 0, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 1, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 70
    }
  },
  162: { name: "rowing",
    pic: 234, state: 9, wait: 1, next: 163, dvx: 1, dvy: -1, dvz: 0, centerx: 40, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 70, y: 21, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 45, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 2, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 24, y: -10000, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 70, y: 21, action: 155, dvx: 0, dvy: 0, oid: 329, facing: 70
    }
  },
  163: { name: "jump_attack",
    pic: 235, state: 9, wait: 1, next: 164, dvx: 1, dvy: -1, dvz: 0, centerx: 36, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 42, y: 56, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 1, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 24, y: -10000, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 71
    }
  },
  164: { name: "rowing",
    pic: 236, state: 9, wait: 1, next: 165, dvx: 1, dvy: -1, dvz: 0, centerx: 30, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 34, y: 72, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 2, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 70, y: 21, action: 155, dvx: 0, dvy: 0, oid: 329, facing: 71
    }
  },
  165: { name: "swallow",
    pic: 237, state: 9, wait: 1, next: 166, dvx: 1, dvy: -1, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 1, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 70
    }
  },
  166: { name: "swallow",
    pic: 230, state: 9, wait: 1, next: 167, dvx: 1, dvy: 0, dvz: 0, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 2, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 71
    }
  },
  167: { name: "rowing",
    pic: 234, state: 9, wait: 1, next: 168, dvx: 1, dvy: 0, dvz: 0, centerx: 40, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 70, y: 21, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 45, y: 45, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 1, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 24, y: -10000, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 70, y: 21, action: 155, dvx: 0, dvy: 0, oid: 329, facing: 70
    }
  },
  168: { name: "jump_attack",
    pic: 235, state: 9, wait: 1, next: 169, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 42, y: 56, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -10, y: -10, w: 100, h: 100, dvx: 2, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 24, y: -10000, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 1, oid: 215, facing: 70
    }
  },
  169: { name: "swallow",
    pic: 219, state: 9, wait: 0, next: 170, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 48, y: 41, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  170: { name: "swallow",
    pic: 229, state: 9, wait: 0, next: 171, dvx: 0, dvy: -1, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 4, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 47, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  171: { name: "swallow",
    pic: 239, state: 9, wait: 2, next: 172, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/006",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 90, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -600, y: -300, w: 1200, h: 1000, dvx: 20, dvy: 20, fall: 70, vrest: 8, bdefend: 100, injury: 108, zwidth: 800
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    },
    opoint: {
      kind: 1, x: 40, y: 40, action: 145, dvx: 0, dvy: 0, oid: 329, facing: 0
    }
  },
  172: { name: "swallow",
    pic: 239, state: 9, wait: 1, next: 173, dvx: 0, dvy: -1, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 71, vaction: 181, throwvx: 20, throwvy: 20, throwvz: 0, throwinjury: 16
    },
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    }
  },
  173: { name: "swallow",
    pic: 239, state: 9, wait: 1, next: 174, dvx: 0, dvy: -1, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    }
  },
  174: { name: "swallow",
    pic: 228, state: 15, wait: 1, next: 175, dvx: 0, dvy: -1, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    }
  },
  175: { name: "swallow",
    pic: 238, state: 15, wait: 1, next: 176, dvx: 0, dvy: -1, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    }
  },
  176: { name: "swallow",
    pic: 139, state: 15, wait: 1, next: 177, dvx: 0, dvy: -1, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 43, h: 34
    }
  },
  177: { name: "swallow",
    pic: 62, state: 100, wait: 100, next: 999, dvx: 1, dvy: 2, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 40, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
    },
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 28, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 8, y: 15, w: 30, h: 32, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      },
      {
        kind: 4, x: 27, y: 35, w: 28, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      }
    ],
    bdy: {
      kind: 0, x: 22, y: 20, w: 24, h: 23
    }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 44, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 20, h: 18
    }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 37, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      },
      {
        kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      }
    ],
    bdy: {
      kind: 0, x: 22, y: 30, w: 27, h: 21
    }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 71, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  185: { name: "falling",
    pic: 35, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 61, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  186: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 47, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
    },
    bdy: {
      kind: 0, x: 31, y: 24, w: 25, h: 23
    }
  },
  187: { name: "falling",
    pic: 41, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 40, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      },
      {
        kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      }
    ],
    bdy: {
      kind: 0, x: 28, y: 27, w: 24, h: 26
    }
  },
  188: { name: "falling",
    pic: 42, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 48, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
    },
    bdy: {
      kind: 0, x: 30, y: 31, w: 24, h: 21
    }
  },
  189: { name: "falling",
    pic: 43, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 66, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      },
      {
        kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 24
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 39, w: 23, h: 21
    }
  },
  190: { name: "falling",
    pic: 44, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 62, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  191: { name: "falling",
    pic: 45, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  200: { name: "ice",
    pic: 67, state: 15, wait: 2, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 55, h: 68
    }
  },
  201: { name: "ice",
    pic: 68, state: 13, wait: 90, next: 202, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 55, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 14, x: 8, y: 6, w: 67, h: 73, vrest: 1
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    }
  },
  202: { name: "ice",
    pic: 67, state: 15, wait: 1, next: 182, dvx: -4, dvy: -3, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    }
  },
  203: { name: "fire",
    pic: 78, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 27, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  204: { name: "fire",
    pic: 79, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 27, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  205: { name: "fire",
    pic: 88, state: 18, wait: 1, next: 206, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 27, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  206: { name: "fire",
    pic: 89, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 27, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  207: { name: "tired",
    pic: 69, state: 15, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 59, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 24, w: 35, h: 58
    }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 46, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 26, w: 34, h: 56
    }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 11, w: 29, h: 61
    }
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 33, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 43, y: 5, w: 23, h: 33
      },
      {
        kind: 0, x: 28, y: 29, w: 21, h: 33
      },
      {
        kind: 0, x: 18, y: 48, w: 27, h: 21
      }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 27, y: 37, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 5, w: 27, h: 38
      },
      {
        kind: 0, x: 16, y: 37, w: 36, h: 22
      }
    ]
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 46, y: 59, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 31, h: 54
    }
  },
  216: { name: "dash",
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 34, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 35, y: 8, w: 27, h: 27
      },
      {
        kind: 0, x: 16, y: 30, w: 39, h: 37
      }
    ]
  },
  217: { name: "dash",
    pic: 113, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 27, y: 36, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 13, w: 29, h: 51
    }
  },
  218: { name: "stop_running",
    pic: 114, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 30, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 17, y: 25, w: 30, h: 55
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
      }
    ]
  },
  219: { name: "crouch2",
    pic: 60, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 46, y: 61, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  220: { name: "injured",
    pic: 120, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 17, w: 29, h: 61
    }
  },
  221: { name: "injured",
    pic: 121, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 50, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 32, y: 16, w: 27, h: 63
      },
      {
        kind: 0, x: 22, y: 37, w: 26, h: 42
      }
    ]
  },
  222: { name: "injured",
    pic: 123, state: 11, wait: 0, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 24, w: 39, h: 31
      },
      {
        kind: 0, x: 25, y: 53, w: 40, h: 27
      }
    ]
  },
  223: { name: "injured",
    pic: 124, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 52, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 12, y: 23, w: 40, h: 37
      },
      {
        kind: 0, x: 27, y: 56, w: 36, h: 24
      }
    ]
  },
  224: { name: "injured",
    pic: 130, state: 11, wait: 0, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 55, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 13, w: 30, h: 65
    }
  },
  225: { name: "injured",
    pic: 131, state: 11, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 56, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 120, state: 16, wait: 0, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 48, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 42, h: 58
    }
  },
  227: { name: "injured",
    pic: 122, state: 16, wait: 0, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 24, w: 39, h: 57
    }
  },
  228: { name: "injured",
    pic: 121, state: 16, wait: 0, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 23, w: 37, h: 58
    }
  },
  229: { name: "injured",
    pic: 122, state: 16, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 29, y: 26, w: 37, h: 53
    }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 20, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 71, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 10000, w: 43, h: 62
    }
  },
  231: { name: "lying",
    pic: 44, state: 14, wait: 20, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 62, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 10000, w: 43, h: 62
    }
  },
  232: { name: "throw_lying_man",
    pic: 27, state: 9, wait: 4, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 28, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 15, w: 36, h: 65
    }
  },
  233: { name: "throw_lying_man",
    pic: 28, state: 9, wait: 2, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 18, throwvy: -8, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 23, y: 37, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 10, y: 28, w: 61, h: 28
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 28, state: 9, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 37, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 13, y: 30, w: 57, h: 28
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  235: { name: "ball1",
    pic: 140, state: 3, wait: 1, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 32,
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  236: { name: "ball1",
    pic: 141, state: 3, wait: 1, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  237: { name: "ball1",
    pic: 142, state: 3, wait: 1, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  238: { name: "ball1",
    pic: 143, state: 3, wait: 1, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 19, w: 39, h: 62
    }
  },
  239: { name: "ball1",
    pic: 144, state: 3, wait: 2, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 85, y: 44, action: 0, dvx: 0, dvy: 0, oid: 215, facing: 0
    },
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 33, y: 21, w: 36, h: 60
    }
  },
  240: { name: "ball1",
    pic: 145, state: 3, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 34, y: 19, w: 36, h: 60
    }
  },
  241: { name: "ball1",
    pic: 145, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 242, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 20, w: 39, h: 59
    }
  },
  242: { name: "ball2",
    pic: 146, state: 3, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 24,
    wpoint: {
      kind: 1, x: 44, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 20, w: 39, h: 58
    }
  },
  243: { name: "ball2",
    pic: 147, state: 3, wait: 1, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 18, w: 41, h: 60
    }
  },
  244: { name: "ball2",
    pic: 148, state: 3, wait: 1, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 19, w: 34, h: 58
    }
  },
  245: { name: "ball2",
    pic: 149, state: 3, wait: 2, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 85, y: 47, action: 0, dvx: 0, dvy: 0, oid: 215, facing: 0
    },
    wpoint: {
      kind: 1, x: 42, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 13, w: 30, h: 64
    }
  },
  246: { name: "ball2",
    pic: 150, state: 3, wait: 1, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 251, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 13, w: 30, h: 68
    }
  },
  247: { name: "ball2",
    pic: 150, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 32, h: 66
    }
  },
  251: { name: "ball34",
    pic: 151, state: 3, wait: 1, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 24,
    wpoint: {
      kind: 1, x: 35, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 32, y: 15, w: 30, h: 64
    }
  },
  252: { name: "ball34",
    pic: 152, state: 3, wait: 1, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 13, w: 34, h: 67
    }
  },
  253: { name: "ball34",
    pic: 153, state: 3, wait: 1, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  254: { name: "ball34",
    pic: 154, state: 3, wait: 1, next: 255, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    wpoint: {
      kind: 1, x: 43, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 33, y: 12, w: 35, h: 68
    }
  },
  255: { name: "ball34",
    pic: 155, state: 3, wait: 2, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 85, y: 46, action: 0, dvx: 0, dvy: 0, oid: 215, facing: 0
    },
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: 15, w: 36, h: 65
    }
  },
  256: { name: "ball34",
    pic: 156, state: 3, wait: 1, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 19, w: 39, h: 61
    }
  },
  257: { name: "ball34",
    pic: 157, state: 3, wait: 1, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/046",
    wpoint: {
      kind: 1, x: 34, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 29, w: 42, h: 49
    }
  },
  258: { name: "ball34",
    pic: 158, state: 3, wait: 2, next: 259, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 85, y: 43, action: 0, dvx: 0, dvy: 0, oid: 215, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 29, w: 42, h: 49
    }
  },
  259: { name: "ball34",
    pic: 159, state: 3, wait: 2, next: 260, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 27, w: 37, h: 51
    }
  },
  260: { name: "ball34",
    pic: 160, state: 3, wait: 1, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 19, w: 36, h: 61
    }
  },
  261: { name: "ball34",
    pic: 161, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 262, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 27, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 16, w: 30, h: 64
    }
  },
  262: { name: "ball34",
    pic: 161, state: 3, wait: 1, next: 235, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 32,
    wpoint: {
      kind: 1, x: 27, y: 46, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  265: { name: "many_foot",
    pic: 13, state: 3, wait: 1, next: 266, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 55,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  266: { name: "many_foot",
    pic: 162, state: 3, wait: 1, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 45, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 12, y: 51, w: 68, h: 17, dvx: 0, fall: 1, vrest: 5, bdefend: 16, injury: 2
    },
    bdy: {
      kind: 0, x: 9, y: 14, w: 35, h: 65
    }
  },
  267: { name: "many_foot",
    pic: 163, state: 3, wait: 1, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 0, fall: 70, vrest: 5, bdefend: 16, injury: 5, effect: 4
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  268: { name: "many_foot",
    pic: 164, state: 3, wait: 1, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 38, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 21, y: 43, w: 63, h: 15, dvx: 0, fall: 1, vrest: 5, bdefend: 16, injury: 2
    },
    bdy: {
      kind: 0, x: 8, y: 18, w: 39, h: 59
    }
  },
  269: { name: "many_foot",
    pic: 165, state: 3, wait: 1, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 0, fall: 70, vrest: 5, bdefend: 16, injury: 5, effect: 4
    },
    bdy: {
      kind: 0, x: 15, y: 18, w: 43, h: 61
    }
  },
  270: { name: "many_foot",
    pic: 166, state: 3, wait: 1, next: 325, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 17, y: 35, w: 61, h: 13, dvx: 0, fall: 1, vrest: 5, bdefend: 16, injury: 2
    },
    bdy: {
      kind: 0, x: 13, y: 19, w: 32, h: 62
    }
  },
  271: { name: "many_foot",
    pic: 167, state: 3, wait: 0, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 3, fall: 70, vrest: 5, bdefend: 16, injury: 28, effect: 4
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  272: { name: "many_foot",
    pic: 168, state: 3, wait: 0, next: 273, dvx: 3, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 3, fall: 16, vrest: 5, bdefend: 16, injury: 28, effect: 4
    },
    bdy: {
      kind: 0, x: 9, y: 14, w: 36, h: 65
    }
  },
  273: { name: "many_foot",
    pic: 169, state: 3, wait: 1, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 9, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 22, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 11, y: 20, w: 56, h: 60, dvx: 3, fall: 16, vrest: 5, bdefend: 60, injury: 15
    },
    bdy: {
      kind: 0, x: 0, y: 15, w: 35, h: 66
    }
  },
  274: { name: "many_foot",
    pic: 179, state: 3, wait: 0, next: 275, dvx: 0, dvy: 0, dvz: 0, centerx: 15, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 3, y: 17, w: 40, h: 64
    }
  },
  275: { name: "many_foot",
    pic: 178, state: 3, wait: 0, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 17, w: 39, h: 66
    }
  },
  276: { name: "many_foot",
    pic: 178, state: 3, wait: 0, next: 70, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 345, hit_Dj: 353,
    wpoint: {
      kind: 1, x: 26, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  280: { name: "c_foot",
    pic: 170, state: 7, wait: 1, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 21,
    wpoint: {
      kind: 1, x: 40, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 21, w: 32, h: 58
    }
  },
  281: { name: "c_foot",
    pic: 171, state: 7, wait: 1, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 42, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 12, w: 31, h: 62
    }
  },
  282: { name: "c_foot",
    pic: 172, state: 7, wait: 1, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 35, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 72, y: 5, w: 18, h: 73, dvx: -14, fall: 7, vrest: 4, bdefend: 16, injury: 16, effect: 4
      },
      {
        kind: 0, x: 20, y: 13, w: 64, h: 58, dvx: -14, fall: 3, vrest: 4, bdefend: 16, injury: 16
      }
    ],
    bdy: {
      kind: 0, x: 13, y: 3, w: 41, h: 37
    }
  },
  283: { name: "c_foot",
    pic: 173, state: 7, wait: 1, next: 284, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 37, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 47, y: 12, w: 17, h: 60, dvx: -14, fall: 3, vrest: 4, bdefend: 16, injury: 16, effect: 4
    },
    bdy: {
      kind: 0, x: 14, y: 5, w: 37, h: 37
    }
  },
  284: { name: "c_foot",
    pic: 174, state: 7, wait: 1, next: 285, dvx: 0, dvy: 0, dvz: 1, centerx: 38, centery: 89, hit_a: 0, hit_d: 288, hit_j: 288,
    sound: "1/007",
    opoint: {
      kind: 1, x: 12, y: 55, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 38, weaponact: 27, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: -6, y: 3, w: 80, h: 81, dvx: 14, fall: 7, vrest: 4, bdefend: 16, injury: 16, effect: 4
      },
      {
        kind: 0, x: -2, y: 6, w: 72, h: 75, dvx: 14, fall: 2, vrest: 4, bdefend: 16, injury: 16
      }
    ],
    bdy: {
      kind: 0, x: 28, y: 9, w: 32, h: 35
    }
  },
  285: { name: "c_foot",
    pic: 175, state: 7, wait: 1, next: 286, dvx: 0, dvy: 0, dvz: 2, centerx: 33, centery: 85, hit_a: 0, hit_d: 288, hit_j: 288,
    wpoint: {
      kind: 1, x: 36, y: 35, weaponact: 27, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 44, y: 4, w: 28, h: 74, dvx: 14, fall: 3, vrest: 4, bdefend: 16, injury: 16, effect: 4
    },
    bdy: {
      kind: 0, x: 24, y: 6, w: 31, h: 35
    }
  },
  286: { name: "c_foot",
    pic: 176, state: 7, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 1, centerx: 27, centery: 85, hit_a: 0, hit_d: 288, hit_j: 288, mp: -8,
    sound: "1/007",
    opoint: {
      kind: 1, x: 56, y: 52, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 1
    },
    wpoint: {
      kind: 1, x: 37, y: 36, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 72, y: 3, w: 24, h: 74, dvx: -14, fall: 7, vrest: 4, bdefend: 16, injury: 16, effect: 4
      },
      {
        kind: 0, x: 20, y: 8, w: 71, h: 66, dvx: -14, fall: 3, vrest: 4, bdefend: 16, injury: 16
      }
    ],
    bdy: {
      kind: 0, x: 18, y: 11, w: 32, h: 30
    }
  },
  287: { name: "c_foot",
    pic: 173, state: 7, wait: 1, next: 284, dvx: 0, dvy: 0, dvz: 2, centerx: 31, centery: 85, hit_a: 0, hit_d: 288, hit_j: 288, mp: -8,
    wpoint: {
      kind: 1, x: 36, y: 36, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 47, y: 0, w: 21, h: 80, dvx: -14, fall: 3, vrest: 4, bdefend: 16, injury: 16, effect: 4
    },
    bdy: {
      kind: 0, x: 22, y: 11, w: 31, h: 32
    }
  },
  288: { name: "c_foot",
    pic: 177, state: 7, wait: 1, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 36, weaponact: 28, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 10, w: 37, h: 30
    }
  },
  289: { name: "c_foot",
    pic: 180, state: 7, wait: 1, next: 290, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 45, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 19, w: 34, h: 61
    }
  },
  290: { name: "c_foot",
    pic: 178, state: 7, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  291: { name: "swallow",
    pic: 61, state: 15, wait: 0, next: 292, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 42,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 46, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  292: { name: "swallow",
    pic: 62, state: 15, wait: 1, next: 308, dvx: 8, dvy: -5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  295: { name: "chase_ball",
    pic: 181, state: 3, wait: 1, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 22,
    wpoint: {
      kind: 1, x: 28, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  296: { name: "chase_ball",
    pic: 182, state: 3, wait: 1, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/077",
    wpoint: {
      kind: 1, x: 26, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  297: { name: "chase_ball",
    pic: 183, state: 3, wait: 1, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 47, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  298: { name: "chase_ball",
    pic: 184, state: 3, wait: 1, next: 299, dvx: 4, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: -7,
    wpoint: {
      kind: 1, x: 44, y: 46, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 88, y: 42, action: 0, dvx: 0, dvy: 0, oid: 205, facing: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  299: { name: "chase_ball",
    pic: 185, state: 3, wait: 1, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 303, hit_j: 0, mp: -7,
    wpoint: {
      kind: 1, x: 44, y: 46, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 88, y: 42, action: 0, dvx: 0, dvy: 0, oid: 205, facing: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  300: { name: "chase_ball",
    pic: 185, state: 3, wait: 1, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 303, hit_j: 0, mp: -7,
    wpoint: {
      kind: 1, x: 44, y: 46, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 88, y: 42, action: 50, dvx: 0, dvy: 0, oid: 205, facing: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  301: { name: "chase_ball",
    pic: 185, state: 3, wait: 1, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 303, hit_j: 0, mp: -7,
    wpoint: {
      kind: 1, x: 44, y: 46, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 88, y: 42, action: 0, dvx: 0, dvy: 0, oid: 205, facing: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  302: { name: "chase_ball",
    pic: 185, state: 3, wait: 1, next: 299, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 303, hit_j: 0, mp: -7,
    wpoint: {
      kind: 1, x: 44, y: 46, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 88, y: 42, action: 60, dvx: 0, dvy: 0, oid: 205, facing: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  303: { name: "chase_ball",
    pic: 186, state: 3, wait: 1, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 47, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  304: { name: "chase_ball",
    pic: 187, state: 3, wait: 1, next: 999, dvx: 3, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 36, h: 60
    }
  },
  305: { name: "swallow",
    pic: 60, state: 15, wait: 1, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 42,
    wpoint: {
      kind: 1, x: 46, y: 59, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  306: { name: "swallow",
    pic: 61, state: 15, wait: 1, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 46, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  307: { name: "swallow",
    pic: 62, state: 15, wait: 1, next: 308, dvx: 10, dvy: -5, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  308: { name: "swallow",
    pic: 107, state: 15, wait: 1, next: 309, dvx: 1, dvy: -2, dvz: 0, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  309: { name: "swallow",
    pic: 108, state: 7, wait: 3, next: 311, dvx: 0, dvy: 550, dvz: 2, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 23, y: 42, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 24, y: 23, w: 60, h: 39, dvx: 8, dvy: -8, fall: 70, vrest: 8, bdefend: 60, injury: 12
    },
    bdy: {
      kind: 0, x: 8, y: 22, w: 43, h: 34
    }
  },
  311: { name: "swallow",
    pic: 188, state: 15, wait: 0, next: 312, dvx: 1, dvy: 550, dvz: 2, centerx: 22, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 24, y: 34, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  312: { name: "swallow",
    pic: 102, state: 15, wait: 0, next: 313, dvx: 1, dvy: 550, dvz: 2, centerx: 18, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 40, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  313: { name: "swallow",
    pic: 171, state: 15, wait: 0, next: 314, dvx: 1, dvy: 550, dvz: 2, centerx: 30, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 34, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  314: { name: "swallow",
    pic: 189, state: 7, wait: 1, next: 315, dvx: 0, dvy: 550, dvz: 2, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 51, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 24, y: 23, w: 60, h: 39, dvx: 10, dvy: -8, fall: 70, vrest: 8, bdefend: 60, injury: 12
    },
    bdy: {
      kind: 0, x: 8, y: 22, w: 43, h: 34
    }
  },
  315: { name: "swallow",
    pic: 177, state: 3, wait: 1, next: 316, dvx: 1, dvy: 550, dvz: 2, centerx: 36, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 42, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  316: { name: "swallow",
    pic: 107, state: 15, wait: 2, next: 317, dvx: 1, dvy: 550, dvz: 2, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  317: { name: "swallow",
    pic: 108, state: 7, wait: 3, next: 318, dvx: 0, dvy: 550, dvz: 2, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 23, y: 42, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 24, y: 23, w: 60, h: 39, dvx: 10, dvy: -8, fall: 70, vrest: 8, bdefend: 60, injury: 12
    },
    bdy: {
      kind: 0, x: 8, y: 22, w: 43, h: 34
    }
  },
  318: { name: "swallow",
    pic: 107, state: 15, wait: 0, next: 319, dvx: 1, dvy: 550, dvz: 2, centerx: 26, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 49, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  319: { name: "swallow",
    pic: 119, state: 15, wait: 1, next: 320, dvx: 1, dvy: 550, dvz: 2, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 41, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  320: { name: "swallow",
    pic: 129, state: 15, wait: 1, next: 321, dvx: 0, dvy: 550, dvz: 2, centerx: 10, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 47, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  321: { name: "swallow",
    pic: 139, state: 7, wait: 3, next: 322, dvx: 0, dvy: 0, dvz: 2, centerx: 12, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 14, y: 13, w: 70, h: 54, dvx: 15, dvy: 10, fall: 70, vrest: 8, bdefend: 60, injury: 24
    },
    bdy: {
      kind: 0, x: 8, y: 22, w: 43, h: 34
    }
  },
  322: { name: "swallow",
    pic: 62, state: 15, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  325: { name: "many_foot",
    pic: 163, state: 3, wait: 1, next: 326, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 0, fall: 70, vrest: 8, bdefend: 16, injury: 2, effect: 4
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  326: { name: "many_foot",
    pic: 164, state: 3, wait: 1, next: 327, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 38, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 21, y: 43, w: 63, h: 15, dvx: 0, fall: 1, vrest: 5, bdefend: 16, injury: 2
    },
    bdy: {
      kind: 0, x: 8, y: 18, w: 39, h: 59
    }
  },
  327: { name: "many_foot",
    pic: 13, state: 3, wait: 1, next: 328, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  328: { name: "many_foot",
    pic: 162, state: 3, wait: 1, next: 329, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 45, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 12, y: 51, w: 68, h: 17, dvx: 0, fall: 1, vrest: 5, bdefend: 16, injury: 2
    },
    bdy: {
      kind: 0, x: 9, y: 14, w: 35, h: 65
    }
  },
  329: { name: "many_foot",
    pic: 163, state: 3, wait: 1, next: 330, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 0, fall: 70, vrest: 5, bdefend: 16, injury: 2, effect: 4
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  330: { name: "many_foot",
    pic: 164, state: 3, wait: 1, next: 331, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 38, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 21, y: 43, w: 63, h: 15, dvx: 0, fall: 1, vrest: 5, bdefend: 16, injury: 2
    },
    bdy: {
      kind: 0, x: 8, y: 18, w: 39, h: 59
    }
  },
  331: { name: "many_foot",
    pic: 165, state: 3, wait: 1, next: 332, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 0, fall: 70, vrest: 5, bdefend: 16, injury: 2, effect: 4
    },
    bdy: {
      kind: 0, x: 15, y: 18, w: 43, h: 61
    }
  },
  332: { name: "many_foot",
    pic: 166, state: 3, wait: 1, next: 333, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 17, y: 35, w: 61, h: 13, dvx: 0, fall: 1, vrest: 5, bdefend: 16, injury: 2
    },
    bdy: {
      kind: 0, x: 13, y: 19, w: 32, h: 62
    }
  },
  333: { name: "punch",
    pic: 14, state: 3, wait: 1, next: 334, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 37, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 16, y: 59, w: 35, h: 21, vrest: 1
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  334: { name: "punch",
    pic: 15, state: 3, wait: 1, next: 335, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 23, y: 43, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 17, y: 37, w: 60, h: 19, dvx: 1, fall: 1, bdefend: 30, injury: 6, vrest: 8
    },
    bdy: {
      kind: 0, x: 14, y: 19, w: 32, h: 62
    }
  },
  335: { name: "punch",
    pic: 17, state: 3, wait: 0, next: 336, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 48, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 15, w: 34, h: 65
    }
  },
  336: { name: "punch",
    pic: 10, state: 3, wait: 0, next: 337, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  337: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 338, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 44, y: 47, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 21, y: 30, w: 54, h: 23, dvx: 0, fall: 1, bdefend: 30, injury: 6, vrest: 5
    },
    bdy: {
      kind: 0, x: 16, y: 19, w: 33, h: 59
    }
  },
  338: { name: "punch",
    pic: 13, state: 3, wait: 0, next: 339, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 37, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 9, w: 36, h: 71
    }
  },
  339: { name: "run_attack",
    pic: 102, state: 3, wait: 0, next: 340, dvx: 6, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 41, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 17, w: 37, h: 62
    }
  },
  340: { name: "run_attack",
    pic: 103, state: 3, wait: 0, next: 341, dvx: 4, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 47, y: 44, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 15, w: 39, h: 64
    }
  },
  341: { name: "run_attack",
    pic: 104, state: 3, wait: 1, next: 342, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 9, y: 38, w: 68, h: 18, dvx: 6, fall: 16, vrest: 8, bdefend: 16, injury: 12
    },
    bdy: {
      kind: 0, x: 10, y: 16, w: 38, h: 62
    }
  },
  342: { name: "run_attack",
    pic: 106, state: 3, wait: 0, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 70, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 56, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 11, w: 36, h: 67
    }
  },
  345: { name: "swallow",
    pic: 60, state: 3, wait: 0, next: 346, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 95,
    wpoint: {
      kind: 1, x: 46, y: 59, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  346: { name: "swallow",
    pic: 61, state: 3, wait: 0, next: 347, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 61, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  347: { name: "swallow",
    pic: 62, state: 3, wait: 0, next: 348, dvx: 3, dvy: -6, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/031",
    wpoint: {
      kind: 1, x: 30, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  348: { name: "jump_attack",
    pic: 37, state: 3, wait: 0, next: 349, dvx: 2, dvy: -18, dvz: 0, centerx: 38, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  349: { name: "rowing",
    pic: 66, state: 3, wait: 1, next: 350, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 45, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 33, y: -15, w: 46, h: 110, dvx: 2, dvy: -18, fall: 70, vrest: 5, bdefend: 30, injury: 11
    },
    bdy: {
      kind: 0, x: 24, y: 24, w: 31, h: 46
    }
  },
  350: { name: "jump_attack",
    pic: 138, state: 3, wait: 3, next: 351, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 56, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 33, y: -15, w: 46, h: 110, dvx: 2, dvy: -18, fall: 70, vrest: 5, bdefend: 30, injury: 11
    },
    bdy: {
      kind: 0, x: 24, y: 24, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 55, y: 125, action: 100, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  351: { name: "jump_attack",
    pic: 138, state: 3, wait: 7, next: 352, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 56, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 33, y: -15, w: 46, h: 110, dvx: 4, dvy: -18, fall: 70, vrest: 5, bdefend: 30, injury: 10
    },
    bdy: {
      kind: 0, x: 24, y: 24, w: 31, h: 46
    },
    opoint: {
      kind: 1, x: 80, y: 185, action: 100, dvx: 0, dvy: 0, oid: 205, facing: 0
    }
  },
  352: { name: "rowing",
    pic: 65, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 72, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 43, h: 62
    }
  },
  353: { name: "many_foot",
    pic: 167, state: 7, wait: 8, next: 354, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 76,
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 17, w: 33, h: 63
    }
  },
  354: { name: "many_foot",
    pic: 168, state: 15, wait: 0, next: 355, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 76,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 49, y: 9, w: 18, h: 64, dvx: 3, fall: 16, vrest: 5, bdefend: 16, injury: 33, effect: 4
    },
    bdy: {
      kind: 0, x: 9, y: 14, w: 36, h: 65
    }
  },
  355: { name: "many_foot",
    pic: 169, state: 15, wait: 1, next: 356, dvx: 0, dvy: 0, dvz: 0, centerx: 9, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 22, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 11, y: 20, w: 56, h: 60, dvx: 1, dvy: -8, fall: 60, vrest: 12, bdefend: 60, injury: 21
    },
    bdy: {
      kind: 0, x: 0, y: 15, w: 35, h: 66
    },
    opoint: {
      kind: 1, x: 40, y: 40, action: 43, dvx: 0, dvy: 0, oid: 338, facing: 0
    }
  },
  356: { name: "many_foot",
    pic: 179, state: 15, wait: 0, next: 357, dvx: 0, dvy: 0, dvz: 0, centerx: 15, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 3, y: 17, w: 40, h: 64
    }
  },
  357: { name: "super_punch",
    pic: 8, state: 15, wait: 0, next: 358, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 30, y: 24, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 14, w: 30, h: 65
    }
  },
  358: { name: "super_punch",
    pic: 9, state: 15, wait: 0, next: 359, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 28, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 12, w: 26, h: 65
    }
  },
  359: { name: "super_punch",
    pic: 19, state: 15, wait: 0, next: 360, dvx: 0, dvy: 0, dvz: 0, centerx: 4, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 5, y: 31, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -13, y: 28, w: 84, h: 28, dvx: 15, dvy: -6, fall: 70, vrest: 12, bdefend: 60, injury: 24
    },
    bdy: {
      kind: 0, x: 4, y: 12, w: 42, h: 68
    }
  },
  360: { name: "super_punch",
    pic: 29, state: 15, wait: 1, next: 361, dvx: 0, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: 33, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -13, y: 28, w: 84, h: 28, dvx: 15, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 24
    },
    bdy: {
      kind: 0, x: 6, y: 20, w: 37, h: 55
    },
    opoint: {
      kind: 1, x: 55, y: 40, action: 40, dvx: 0, dvy: 0, oid: 338, facing: 0
    }
  },
  361: { name: "super_punch",
    pic: 39, state: 15, wait: 5, next: 362, dvx: 0, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 7, y: 36, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -13, y: 28, w: 84, h: 28, dvx: 15, dvy: -6, fall: 70, vrest: 8, bdefend: 60, injury: 24
    },
    bdy: {
      kind: 0, x: 8, y: 17, w: 36, h: 61
    }
  },
  362: { name: "super_punch",
    pic: 49, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 4, y: 35, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 17, w: 36, h: 61
    }
  },
  363: { name: "running",
    pic: 20, state: 7, wait: 2, next: 364, dvx: 10, dvy: 0, dvz: 2, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 18,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 61, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: -10000, w: 38, h: 60
    }
  },
  364: { name: "running",
    pic: 21, state: 7, wait: 2, next: 365, dvx: 10, dvy: 0, dvz: 2, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: -10000, w: 38, h: 60
    }
  },
  365: { name: "running",
    pic: 22, state: 7, wait: 2, next: 366, dvx: 15, dvy: 0, dvz: 3, centerx: 40, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 20, y: 44, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  366: { name: "running",
    pic: 21, state: 7, wait: 2, next: 367, dvx: 15, dvy: 0, dvz: 3, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  367: { name: "running",
    pic: 20, state: 7, wait: 2, next: 368, dvx: 15, dvy: 0, dvz: 3, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 61, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  368: { name: "running",
    pic: 21, state: 7, wait: 2, next: 369, dvx: 15, dvy: 0, dvz: 3, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  369: { name: "running",
    pic: 22, state: 7, wait: 3, next: 370, dvx: 10, dvy: 0, dvz: 2, centerx: 40, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 20, y: 44, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  370: { name: "running",
    pic: 21, state: 7, wait: 3, next: 371, dvx: 10, dvy: 0, dvz: 2, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 3, x: 40, y: 16, w: 30, h: 65,
        catchingact: [120, 120], caughtact: [130, 130]
      },
      {
        kind: 0, x: 40, y: 16, w: 25, h: 65, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  371: { name: "running",
    pic: 20, state: 7, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 61, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  372: { name: "ball2",
    pic: 147, state: 9, wait: 1, next: 373, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 2260,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: -10000, w: 41, h: 60
    }
  },
  373: { name: "ball2",
    pic: 148, state: 9, wait: 1, next: 374, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: -10000, w: 34, h: 58
    }
  },
  374: { name: "ball2",
    pic: 149, state: 9, wait: 3, next: 375, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 12, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 65, y: 47, action: 10, dvx: 0, dvy: 0, oid: 215, facing: 0
    },
    wpoint: {
      kind: 1, x: 42, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: -10000, w: 30, h: 64
    }
  },
  375: { name: "ball34",
    pic: 155, state: 9, wait: 2, next: 376, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 43, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 36, h: 65
    }
  },
  376: { name: "ball34",
    pic: 156, state: 9, wait: 1, next: 377, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: -10000, w: 39, h: 61
    }
  },
  377: { name: "ball34",
    pic: 157, state: 9, wait: 1, next: 378, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 34, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 42, h: 49
    }
  },
  378: { name: "ball34",
    pic: 158, state: 9, wait: 2, next: 379, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 12, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: 0, dvy: 0, oid: 215, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: -10000, w: 42, h: 49
    }
  },
  379: { name: "ball34",
    pic: 159, state: 9, wait: 10, next: 380, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: -10000, w: 37, h: 51
    }
  },
  380: { name: "ball34",
    pic: 210, state: 9, wait: 2, next: 381, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: -10000, w: 37, h: 51
    }
  },
  381: { name: "ball34",
    pic: 211, state: 9, wait: 2, next: 382, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: -10000, w: 37, h: 51
    }
  },
  382: { name: "ball34",
    pic: 212, state: 9, wait: 15, next: 383, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 32, y: 50, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: -10000, w: 37, h: 51
    }
  },
  383: { name: "c_foot",
    pic: 213, state: 9, wait: 2, next: 384, dvx: 3, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 37, y: 35, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: -10000, w: 41, h: 37
    }
  },
  384: { name: "c_foot",
    pic: 214, state: 9, wait: 2, next: 385, dvx: 8, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 36, y: 37, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: -10000, w: 37, h: 37
    }
  },
  385: { name: "c_foot",
    pic: 216, state: 9, wait: 2, next: 386, dvx: 10, dvy: 0, dvz: 1, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 9, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 38, weaponact: 27, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 5, y: -5, w: 90, h: 90, dvy: -5, dvx: 12, fall: 70, vrest: 6, bdefend: 60, injury: 4, zwidth: 30
    },
    opoint: {
      kind: 1, x: 70, y: 63, action: 10, dvx: -1, dvy: 0, oid: 215, facing: 0
    },
    bdy: {
      kind: 0, x: 28, y: -10000, w: 32, h: 35
    }
  },
  386: { name: "many_foot",
    pic: 217, state: 9, wait: 2, next: 387, dvx: 10, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 39, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: -10000, w: 43, h: 61
    }
  },
  387: { name: "many_foot",
    pic: 218, state: 9, wait: 2, next: 388, dvx: 10, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 9, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 38, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 0, oid: 215, facing: 0
    },
    itr: {
      kind: 0, x: 5, y: -5, w: 90, h: 90, dvy: -5, dvx: 12, fall: 70, vrest: 6, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: -10000, w: 39, h: 59
    }
  },
  388: { name: "c_foot",
    pic: 213, state: 9, wait: 2, next: 389, dvx: 10, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 37, y: 35, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: -10000, w: 41, h: 37
    }
  },
  389: { name: "c_foot",
    pic: 214, state: 9, wait: 2, next: 390, dvx: 10, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 36, y: 37, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: -10000, w: 37, h: 37
    }
  },
  390: { name: "c_foot",
    pic: 215, state: 9, wait: 2, next: 391, dvx: 10, dvy: 0, dvz: 2, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 9, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 36, y: 35, weaponact: 27, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 0, oid: 215, facing: 0
    },
    itr: {
      kind: 0, x: 5, y: -5, w: 90, h: 90, dvy: -5, dvx: 12, fall: 70, vrest: 6, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 24, y: -10000, w: 31, h: 35
    }
  },
  391: { name: "punch",
    pic: 220, state: 9, wait: 2, next: 392, dvx: 10, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 34, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: -10000, w: 27, h: 68
    }
  },
  392: { name: "punch",
    pic: 221, state: 9, wait: 2, next: 393, dvx: 10, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 9, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 44, y: 47, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    opoint: {
      kind: 1, x: 70, y: 40, action: 10, dvx: -1, dvy: 0, oid: 215, facing: 0
    },
    itr: {
      kind: 0, x: 5, y: -5, w: 90, h: 90, dvy: -5, dvx: 6, fall: 70, vrest: 6, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 16, y: -10000, w: 33, h: 59
    }
  },
  393: { name: "punch",
    pic: 222, state: 9, wait: 2, next: 394, dvx: 10, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 146,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 39, y: 26, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: -10000, w: 33, h: 61
    }
  },
  394: { name: "super_punch",
    pic: 223, state: 9, wait: 0, next: 395, dvx: 10, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 31, y: 28, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: -10000, w: 26, h: 65
    }
  },
  395: { name: "super_punch",
    pic: 224, state: 9, wait: 0, next: 396, dvx: 10, dvy: 0, dvz: 0, centerx: 4, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 65, y: 41, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 5, y: 31, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 5, y: -5, w: 90, h: 90, dvy: -6, dvx: 12, fall: 70, vrest: 6, bdefend: 60, injury: 4, zwidth: 30
    },
    bdy: {
      kind: 0, x: 4, y: -10000, w: 42, h: 68
    }
  },
  396: { name: "super_punch",
    pic: 225, state: 9, wait: 4, next: 397, dvx: 0, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    cpoint: {
      kind: 1, x: 65, y: 41, injury: 35, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    wpoint: {
      kind: 1, x: 7, y: 33, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 5, y: -10, w: 90, h: 100, dvy: -6, dvx: 12, fall: 70, vrest: 10, bdefend: 60, injury: 4, zwidth: 30
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: -1, dvy: 0, oid: 215, facing: 0
    },
    bdy: {
      kind: 0, x: 6, y: -10000, w: 37, h: 55
    }
  },
  397: { name: "super_punch",
    pic: 225, state: 9, wait: 1, next: 124, dvx: 0, dvy: 0, dvz: 0, centerx: 7, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 72, y: 63, vaction: 181, throwvx: 32, throwvy: -4, throwvz: 0, throwinjury: 12
    },
    wpoint: {
      kind: 1, x: 7, y: 33, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 0, y: -30, w: 190, h: 140, dvy: -9, dvx: 24, fall: 70, vrest: 15, bdefend: 60, injury: 23, zwidth: 30, effect: -1
    },
    opoint: {
      kind: 1, x: 65, y: 43, action: 10, dvx: 0, dvy: 0, oid: 215, facing: 20
    },
    bdy: {
      kind: 0, x: 6, y: -10000, w: 37, h: 55
    }
  },
  398: { name: "x",
    pic: 53, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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

import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-47)": "sprite/richter_0.png", w: 99, h: 99, row: 8, col: 6
      },
      {
        "file(48-59)": "sprite/richter_1.png", w: 199, h: 99, row: 4, col: 3
      },
      {
        "file(60-69)": "sprite/richter_2.png", w: 149, h: 119, row: 5, col: 2
      },
      {
        "file(70-85)": "sprite/richter_3.png", w: 199, h: 99, row: 4, col: 4
      }
    ],
    name: "Richter",
    head: "sprite/richter_f.png",
    small: "sprite/richter_s.png",
    walking_frame_rate: 3,
    walking_speed: 8,
    walking_speedz: 3,
    running_frame_rate: 3,
    running_speed: 16,
    running_speedz: 2.2,
    heavy_walking_speed: 0,
    heavy_walking_speedz: 0,
    heavy_running_speed: 0,
    heavy_running_speedz: 0,
    jump_height: -18,
    jump_distance: 12,
    jump_distancez: 3,
    dash_height: -14,
    dash_distance: 19,
    dash_distancez: 3.75,
    rowing_height: -4,
    rowing_distance: 8
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 3, next: 1, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  3: { name: "standing",
    pic: 1, state: 1700, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  5: { name: "walking",
    pic: 3, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  6: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  7: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  8: { name: "walking",
    pic: 6, state: 1, wait: 5, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  9: { name: "running",
    pic: 8, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  10: { name: "running",
    pic: 9, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  11: { name: "running",
    pic: 10, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  28: { name: "punch",
    pic: 49, state: 7, wait: 0, next: 29, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/054",
    itr: [
      {
        kind: 0, x: 20, y: 56, w: 45, h: 33, dvx: -6, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
      },
      {
        kind: 0, x: 54, y: 28, w: 40, h: 36, dvx: -6, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
      }
    ],
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  29: { name: "punch",
    pic: 50, state: 7, wait: 0, next: 30, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: [
      {
        kind: 0, x: 40, y: 30, w: 28, h: 44, dvx: -6, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
      },
      {
        kind: 0, x: 68, y: 19, w: 31, h: 20, dvx: -6, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
      }
    ],
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  30: { name: "punch",
    pic: 51, state: 7, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 19, w: 89, h: 26, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  31: { name: "punch",
    pic: 52, state: 7, wait: 0, next: 32, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 61, y: 10, w: 78, h: 27, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  32: { name: "punch",
    pic: 53, state: 7, wait: 0, next: 33, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 23, w: 74, h: 33, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  33: { name: "punch",
    pic: 54, state: 7, wait: 0, next: 34, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 37, y: 49, w: 114, h: 19, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  34: { name: "punch",
    pic: 55, state: 7, wait: 0, next: 35, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  35: { name: "punch",
    pic: 56, state: 7, wait: 0, next: 36, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  36: { name: "punch",
    pic: 57, state: 7, wait: 0, next: 37, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  37: { name: "punch",
    pic: 58, state: 7, wait: 0, next: 38, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  38: { name: "punch",
    pic: 59, state: 7, wait: 0, next: 39, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  39: { name: "punch",
    pic: 55, state: 7, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  40: { name: "punch",
    pic: 56, state: 7, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  41: { name: "punch",
    pic: 57, state: 7, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  42: { name: "punch",
    pic: 58, state: 7, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  43: { name: "punch",
    pic: 59, state: 7, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 12, dvy: -7, injury: 34, vrest: 12, bdefend: 60, fall: 70
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  45: { name: "super_punch",
    pic: 61, state: 7, wait: 0, next: 46, dvx: 0, dvy: 0, centerx: 20, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 42, w: 57, h: 35, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 56, y: 1, w: 33, h: 42, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  46: { name: "super_punch",
    pic: 62, state: 7, wait: 0, next: 47, dvx: 0, dvy: 0, centerx: 30, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: -5, y: 23, w: 34, h: 34, dvx: -5, dvy: 9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 30, y: 56, w: 37, h: 26, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  47: { name: "super_punch",
    pic: 63, state: 7, wait: 0, next: 48, dvx: 0, dvy: 0, centerx: 54, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 54, y: 66, w: 36, h: 24, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: -3, y: 61, w: 57, h: 29, dvx: -5, dvy: 9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  48: { name: "super_punch",
    pic: 64, state: 7, wait: 0, next: 49, dvx: 0, dvy: 0, centerx: 20, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 49, w: 36, h: 68, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
    },
    bdy: {
      kind: 0, x: 3, y: 29, w: 36, h: 67
    }
  },
  49: { name: "super_punch",
    pic: 65, state: 7, wait: 0, next: 50, dvx: 0, dvy: 0, centerx: 20, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 33, w: 65, h: 40, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 70, y: 73, w: 20, h: 45, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 29, w: 36, h: 67
    }
  },
  50: { name: "super_punch",
    pic: 60, state: 7, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 20, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 27, y: 51, w: 121, h: 30, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
    },
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  51: { name: "super_punch",
    pic: 61, state: 7, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 20, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 42, w: 57, h: 35, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 56, y: 1, w: 33, h: 42, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  52: { name: "super_punch",
    pic: 62, state: 7, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 30, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: -5, y: 23, w: 34, h: 34, dvx: -5, dvy: 9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 30, y: 56, w: 37, h: 26, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  53: { name: "super_punch",
    pic: 63, state: 7, wait: 0, next: 54, dvx: 0, dvy: 0, centerx: 54, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 54, y: 66, w: 36, h: 24, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: -3, y: 61, w: 57, h: 29, dvx: -5, dvy: 9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  54: { name: "super_punch",
    pic: 64, state: 7, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 20, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 49, w: 36, h: 68, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
    },
    bdy: {
      kind: 0, x: 3, y: 29, w: 36, h: 67
    }
  },
  55: { name: "super_punch",
    pic: 65, state: 7, wait: 0, next: 56, dvx: 0, dvy: 0, centerx: 20, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 33, w: 65, h: 40, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 70, y: 73, w: 20, h: 45, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 29, w: 36, h: 67
    }
  },
  56: { name: "super_punch",
    pic: 60, state: 7, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 20, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 27, y: 51, w: 121, h: 30, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
    },
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  57: { name: "punch",
    pic: 59, state: 7, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  58: { name: "punch",
    pic: 58, state: 7, wait: 0, next: 57, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  59: { name: "punch",
    pic: 57, state: 7, wait: 0, next: 58, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  60: { name: "punch",
    pic: 48, state: 7, wait: 0, next: 61, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 11, y: 61, w: 69, h: 21, dvx: -2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  61: { name: "punch",
    pic: 49, state: 7, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: [
      {
        kind: 0, x: 20, y: 56, w: 45, h: 33, dvx: -2, injury: 23, vrest: 12, bdefend: 60, fall: 60
      },
      {
        kind: 0, x: 54, y: 28, w: 40, h: 36, dvx: -2, injury: 23, vrest: 12, bdefend: 60, fall: 60
      }
    ],
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  62: { name: "punch",
    pic: 50, state: 7, wait: 0, next: 63, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 40, y: 30, w: 28, h: 44, dvx: -2, injury: 23, vrest: 12, bdefend: 60, fall: 60
      },
      {
        kind: 0, x: 68, y: 19, w: 31, h: 20, dvx: -2, injury: 23, vrest: 12, bdefend: 60, fall: 60
      }
    ],
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  63: { name: "punch",
    pic: 51, state: 7, wait: 0, next: 64, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 19, w: 89, h: 26, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  64: { name: "punch",
    pic: 52, state: 7, wait: 0, next: 66, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 61, y: 10, w: 78, h: 27, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  65: { name: "punch",
    pic: 48, state: 7, wait: 0, next: 61, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 11, y: 61, w: 69, h: 21, dvx: -2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  66: { name: "punch",
    pic: 53, state: 7, wait: 0, next: 67, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 23, w: 74, h: 33, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  67: { name: "punch",
    pic: 54, state: 7, wait: 0, next: 68, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 37, y: 49, w: 114, h: 19, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  68: { name: "punch",
    pic: 55, state: 7, wait: 0, next: 69, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  69: { name: "punch",
    pic: 56, state: 7, wait: 0, next: 59, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 40, w: 124, h: 25, dvx: 2, injury: 23, vrest: 12, bdefend: 60, fall: 60
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  70: { name: "super_punch",
    pic: 60, state: 7, wait: 0, next: 71, dvx: 0, dvy: 0, centerx: 20, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 27, y: 51, w: 121, h: 30, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
    },
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  71: { name: "super_punch",
    pic: 61, state: 7, wait: 0, next: 72, dvx: 0, dvy: 0, centerx: 20, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 22, y: 42, w: 57, h: 35, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 56, y: 1, w: 33, h: 42, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  72: { name: "super_punch",
    pic: 62, state: 7, wait: 0, next: 73, dvx: 0, dvy: 0, centerx: 30, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: -5, y: 23, w: 34, h: 34, dvx: -5, dvy: 9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 30, y: 56, w: 37, h: 26, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  73: { name: "super_punch",
    pic: 63, state: 7, wait: 0, next: 74, dvx: 0, dvy: 0, centerx: 54, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 54, y: 66, w: 36, h: 24, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: -3, y: 61, w: 57, h: 29, dvx: -5, dvy: 9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  74: { name: "super_punch",
    pic: 64, state: 7, wait: 0, next: 75, dvx: 0, dvy: 0, centerx: 20, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 49, w: 36, h: 68, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
    },
    bdy: {
      kind: 0, x: 3, y: 29, w: 36, h: 67
    }
  },
  75: { name: "super_punch",
    pic: 65, state: 7, wait: 0, next: 76, dvx: 0, dvy: 0, centerx: 20, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 50, y: 33, w: 65, h: 40, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      },
      {
        kind: 0, x: 70, y: 73, w: 20, h: 45, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
      }
    ],
    bdy: {
      kind: 0, x: 3, y: 29, w: 36, h: 67
    }
  },
  76: { name: "super_punch",
    pic: 60, state: 7, wait: 0, next: 45, dvx: 0, dvy: 0, centerx: 20, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: {
      kind: 0, x: 27, y: 51, w: 121, h: 30, dvx: 5, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 28
    },
    bdy: {
      kind: 0, x: 3, y: 49, w: 36, h: 67
    }
  },
  80: { name: "jump_attack",
    pic: 48, state: 7, wait: 0, next: 28, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 11, y: 61, w: 69, h: 21, dvx: -6, dvy: -7, bdefend: 60, injury: 34, vrest: 12, fall: 70
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  85: { name: "run_attack",
    pic: 48, state: 7, wait: 0, next: 28, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 11, y: 61, w: 69, h: 21, dvx: -6, dvy: -7, bdefend: 60, injury: 34, vrest: 12, fall: 70
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  90: { name: "dash_attack",
    pic: 48, state: 7, wait: 0, next: 28, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 11, y: 61, w: 69, h: 21, dvx: -6, dvy: -7, bdefend: 60, injury: 34, vrest: 12, fall: 70
    },
    bdy: {
      kind: 0, x: 82, y: 32, w: 36, h: 67
    }
  },
  96: { name: "rowing",
    pic: 25, state: 6, wait: 10, next: 0, dvx: 0, dvy: 0, centerx: 59, centery: 99, hit_a: 80, hit_d: 0, hit_j: 0, hit_Fj: 235,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  97: { name: "rowing",
    pic: 24, state: 6, wait: 1, next: 96, dvx: 0, dvy: 0, centerx: 79, centery: 99, hit_a: 80, hit_d: 0, hit_j: 0, hit_Fj: 235,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  98: { name: "rowing",
    pic: 23, state: 6, wait: 1, next: 97, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 80, hit_d: 0, hit_j: 0, hit_Fj: 235,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  99: { name: "rowing",
    pic: 22, state: 6, wait: 1, next: 98, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  100: { name: "rowing",
    pic: 20, state: 6, wait: 1, next: 101, dvx: -5, dvy: -8, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  101: { name: "rowing",
    pic: 21, state: 6, wait: 1, next: 99, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  102: { name: "rowing",
    pic: 12, state: 6, wait: 1, next: 103, dvx: 6, dvy: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/059",
    bdy: {
      kind: 0, x: 9, y: -10000, w: 68, h: 33
    }
  },
  103: { name: "rowing",
    pic: 13, state: 6, wait: 1, next: 104, dvx: 10, dvy: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 22, y: 54, action: 20, dvx: -2, dvy: 0, oid: 204, facing: 0
    },
    itr: {
      kind: 0, x: 34, y: 72, w: 59, h: 27, dvx: 1, bdefend: 60, injury: 16, vrest: 8, fall: 60
    },
    bdy: {
      kind: 0, x: 9, y: -10000, w: 68, h: 33
    }
  },
  104: { name: "rowing",
    pic: 66, state: 6, wait: 12, next: 105, dvx: 20, dvy: 0, centerx: 71, centery: 119, hit_a: 0, hit_d: 0, hit_j: 109, hit_Fj: 235, hit_Ua: 250, hit_Fa: 265, hit_ja: 325,
    itr: {
      kind: 0, x: 26, y: 76, w: 73, h: 23, dvx: 1, bdefend: 60, injury: 16, vrest: 8, fall: 60
    },
    bdy: {
      kind: 0, x: 9, y: -10000, w: 68, h: 33
    }
  },
  105: { name: "rowing",
    pic: 13, state: 6, wait: 2, next: 219, dvx: 0, dvy: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 72, w: 59, h: 27, dvx: 1, bdefend: 60, injury: 16, vrest: 8, fall: 60
    },
    bdy: {
      kind: 0, x: 9, y: -10000, w: 68, h: 33
    }
  },
  106: { name: "rowing",
    pic: 30, state: 7, wait: 4, next: 107, dvx: 20, dvy: 0, centerx: 34, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 38, y: 57, w: 60, h: 26, dvx: 21, dvy: -7, bdefend: 60, injury: 34, vrest: 8, fall: 70
    },
    bdy: {
      kind: 0, x: 4, y: 60, w: 68, h: 33
    }
  },
  107: { name: "rowing",
    pic: 31, state: 7, wait: 8, next: -206, dvx: 0, dvy: 0, centerx: 34, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235,
    itr: {
      kind: 0, x: 40, y: 68, w: 60, h: 28, dvx: 18, dvy: -6, bdefend: 60, injury: 31, vrest: 8, fall: 70
    },
    bdy: {
      kind: 0, x: 4, y: 60, w: 68, h: 33
    }
  },
  108: { name: "rowing",
    pic: 20, state: 6, wait: 1, next: -101, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  109: { name: "rowing",
    pic: 30, state: 7, wait: 1, next: 106, dvx: 20, dvy: -7, centerx: 34, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 4, y: 60, w: 68, h: 33
    }
  },
  110: { name: "defend",
    pic: 7, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 70, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 20, y: 19, w: 38, h: 60
    }
  },
  111: { name: "defend",
    pic: 7, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    bdy: {
      kind: 0, x: 16, y: 19, w: 42, h: 60
    }
  },
  112: { name: "broken_defend",
    pic: 7, state: 7, wait: 1, next: 110, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 70, hit_d: 0, hit_j: 325, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    itr: {
      kind: 6, x: 5, y: 17, w: 64, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  115: { name: "defend",
    pic: 7, state: 7, wait: 0, next: 116, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 200,
    bdy: {
      kind: 0, x: 16, y: 19, w: 42, h: 60
    }
  },
  116: { name: "defend",
    pic: 7, state: 7, wait: 1, next: 110, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 49, y: 59, action: 92, oid: 200, facing: 0
    },
    bdy: {
      kind: 0, x: 16, y: 19, w: 42, h: 60
    }
  },
  130: { name: "picked_caught",
    pic: 16, state: 4, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  131: { name: "picked_caught",
    pic: 16, state: 4, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  132: { name: "picked_caught",
    pic: 16, state: 4, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  180: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  181: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  182: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  183: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  184: { name: "falling",
    pic: 15, state: 12, wait: 2, next: 0, dvx: 0, dvy: 10, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  185: { name: "falling",
    pic: 15, state: 12, wait: 1, next: 0, dvx: 0, dvy: 10, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  186: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  187: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  188: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  189: { name: "falling",
    pic: 20, state: 12, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 4, x: 21, y: 22, w: 37, h: 58, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 18
    },
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    }
  },
  190: { name: "falling",
    pic: 15, state: 12, wait: 2, next: 0, dvx: 0, dvy: 10, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  191: { name: "falling",
    pic: 15, state: 12, wait: 1, next: 0, dvx: 0, dvy: 10, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  200: { name: "ice",
    pic: 29, state: 15, wait: 2, next: 201, dvx: 0, dvy: 0, centerx: 49, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 18, y: -10000, w: 65, h: 73
    }
  },
  201: { name: "ice",
    pic: 29, state: 13, wait: 90, next: 202, dvx: 0, dvy: 0, centerx: 49, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 18, y: -10000, w: 65, h: 73
    },
    itr: {
      kind: 14, x: 18, y: 26, w: 65, h: 73, vrest: 1
    }
  },
  202: { name: "ice",
    pic: 29, state: 15, wait: 1, next: 182, dvx: -4, dvy: -3, centerx: 49, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 18, y: -10000, w: 65, h: 73
    }
  },
  203: { name: "fire",
    pic: 26, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    },
    itr: {
      kind: 0, x: 31, y: 20, w: 37, h: 46, fall: 70, vrest: 10, bdefend: 16, injury: 18, effect: 20
    }
  },
  204: { name: "fire",
    pic: 27, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    },
    itr: {
      kind: 0, x: 31, y: 20, w: 37, h: 46, fall: 70, vrest: 10, bdefend: 16, injury: 18, effect: 20
    }
  },
  205: { name: "fire",
    pic: 28, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: -10000, w: 37, h: 46
    },
    itr: {
      kind: 0, x: 31, y: 20, w: 37, h: 46, fall: 70, vrest: 10, bdefend: 16, injury: 18, effect: 20
    }
  },
  206: { name: "jump",
    pic: 18, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Fa: 265, hit_ja: 325,
    bdy: {
      kind: 0, x: 36, y: 28, w: 31, h: 54
    }
  },
  207: { name: "jump",
    pic: 17, state: 4, wait: 1, next: 206, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Fa: 265, hit_ja: 325,
    bdy: {
      kind: 0, x: 35, y: 28, w: 38, h: 48
    }
  },
  208: { name: "jump",
    pic: 19, state: 4, wait: 1, next: 207, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Fa: 265, hit_ja: 325,
    bdy: {
      kind: 0, x: 31, y: 25, w: 37, h: 46
    }
  },
  209: { name: "jump",
    pic: 17, state: 4, wait: 1, next: 208, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Fa: 265, hit_ja: 325,
    bdy: {
      kind: 0, x: 35, y: 28, w: 38, h: 48
    }
  },
  210: { name: "jump",
    pic: 14, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: 53, w: 37, h: 46
    }
  },
  211: { name: "jump",
    pic: 15, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    bdy: {
      kind: 0, x: 34, y: 43, w: 32, h: 52
    }
  },
  212: { name: "jump",
    pic: 16, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Fa: 265, hit_ja: 325,
    bdy: {
      kind: 0, x: 37, y: 29, w: 27, h: 59
    }
  },
  213: { name: "dash",
    pic: 16, state: 5, wait: 1, next: 216, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: 29, w: 27, h: 59
    }
  },
  214: { name: "dash",
    pic: 16, state: 5, wait: 1, next: 217, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: 29, w: 27, h: 59
    }
  },
  215: { name: "crouch",
    pic: 14, state: 7, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 60, hit_d: 0, hit_j: 0, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    sound: "1/012",
    bdy: {
      kind: 0, x: 31, y: 53, w: 37, h: 46
    }
  },
  216: { name: "dash",
    pic: 16, state: 5, wait: 1, next: 209, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: 29, w: 27, h: 59
    }
  },
  217: { name: "dash",
    pic: 16, state: 5, wait: 1, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 90, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: 29, w: 27, h: 59
    }
  },
  218: { name: "stop_running",
    pic: 11, state: 15, wait: 10, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 25, y: 52, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 14, state: 7, wait: 8, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 60, hit_d: 110, hit_j: 210, hit_Fj: 235, hit_Dj: 115, hit_Ua: 250, hit_Fa: 265, hit_ja: 325, hit_Uj: 275,
    sound: "1/012",
    bdy: {
      kind: 0, x: 31, y: 53, w: 37, h: 46
    }
  },
  220: { name: "injured",
    pic: 16, state: 11, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  222: { name: "injured",
    pic: 16, state: 11, wait: 1, next: 100, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  224: { name: "injured",
    pic: 16, state: 11, wait: 0, next: 220, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  226: { name: "injured",
    pic: 16, state: 11, wait: 0, next: 220, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  228: { name: "injured",
    pic: 16, state: 11, wait: 0, next: 220, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 37, y: -10000, w: 27, h: 59
    }
  },
  230: { name: "lying",
    pic: 14, state: 14, wait: 15, next: 219, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: 10000, w: 37, h: 46
    }
  },
  231: { name: "lying",
    pic: 14, state: 14, wait: 15, next: 219, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 31, y: 10000, w: 37, h: 46
    }
  },
  235: { name: "sp",
    pic: 32, state: 7, wait: 1, next: 236, dvx: 10, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 30,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  236: { name: "sp",
    pic: 33, state: 7, wait: 1, next: 237, dvx: 16, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: -10000, w: 66, h: 46
    }
  },
  237: { name: "sp",
    pic: 34, state: 7, wait: 1, next: 238, dvx: 16, dvy: 0, centerx: 49, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/030",
    itr: {
      kind: 0, x: 9, y: 27, w: 85, h: 72, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  238: { name: "sp",
    pic: 67, state: 7, wait: 1, next: 239, dvx: 16, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 75, w: 112, h: 64, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  239: { name: "sp",
    pic: 34, state: 7, wait: 1, next: 240, dvx: 16, dvy: 0, centerx: 49, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 27, w: 85, h: 72, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  240: { name: "sp",
    pic: 67, state: 7, wait: 1, next: 241, dvx: 16, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 75, w: 112, h: 64, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  241: { name: "sp",
    pic: 34, state: 7, wait: 1, next: 242, dvx: 0, dvy: 0, centerx: 49, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 27, w: 85, h: 72, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  242: { name: "sp",
    pic: 67, state: 7, wait: 1, next: 243, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 75, w: 112, h: 64, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  243: { name: "sp",
    pic: 34, state: 7, wait: 1, next: 244, dvx: 0, dvy: 0, centerx: 49, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 27, w: 85, h: 72, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  244: { name: "sp",
    pic: 67, state: 7, wait: 1, next: 245, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 21, y: 75, w: 112, h: 64, dvx: 12, dvy: -6, injury: 22, vrest: 8, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  245: { name: "sp",
    pic: 33, state: 7, wait: 2, next: 218, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 48, w: 66, h: 46
    }
  },
  250: { name: "sp2",
    pic: 68, state: 7, wait: 1, next: 251, dvx: 3, dvy: -12, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0, mp: 45,
    sound: "1/059",
    bdy: {
      kind: 0, x: 54, y: -10000, w: 36, h: 67
    }
  },
  251: { name: "sp2",
    pic: 68, state: 7, wait: 0, next: 252, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  252: { name: "sp2",
    pic: 69, state: 7, wait: 0, next: 253, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  253: { name: "sp2",
    pic: 68, state: 7, wait: 0, next: 254, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  254: { name: "sp2",
    pic: 69, state: 7, wait: 0, next: 255, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  255: { name: "sp2",
    pic: 68, state: 7, wait: 0, next: 256, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  256: { name: "sp2",
    pic: 69, state: 7, wait: 0, next: 257, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  257: { name: "sp2",
    pic: 68, state: 7, wait: 0, next: 258, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  258: { name: "sp2",
    pic: 69, state: 7, wait: 0, next: 259, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  259: { name: "sp2",
    pic: 68, state: 7, wait: 0, next: 260, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  260: { name: "sp2",
    pic: 69, state: 7, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 74, centery: 119, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 66, y: 7, w: 37, h: 117, dvx: 2, dvy: -24, injury: 16, vrest: 5, bdefend: 60, fall: 70, effect: 1
    },
    bdy: {
      kind: 0, x: 54, y: 40, w: 32, h: 67
    }
  },
  265: { name: "sp3",
    pic: 35, state: 7, wait: 1, next: 266, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  266: { name: "sp3",
    pic: 36, state: 7, wait: 0, next: 267, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  267: { name: "sp3",
    pic: 37, state: 7, wait: 0, next: 268, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    },
    opoint: {
      kind: 1, x: 70, y: 45, action: 0, dvx: 0, dvy: 0, oid: 334, facing: 0
    }
  },
  268: { name: "sp3",
    pic: 38, state: 7, wait: 0, next: 269, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  269: { name: "sp3",
    pic: 39, state: 7, wait: 5, next: 270, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  270: { name: "sp3",
    pic: 39, state: 7, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 265, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 32, w: 36, h: 67
    }
  },
  275: { name: "?",
    pic: 40, state: 7, wait: 0, next: 276, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    sound: "1/107",
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  276: { name: "?",
    pic: 40, state: 7, wait: 1, next: 277, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 54, y: 54, action: 155, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  277: { name: "?",
    pic: 41, state: 7, wait: 1, next: 278, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  278: { name: "?",
    pic: 42, state: 7, wait: 1, next: 279, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  279: { name: "?",
    pic: 43, state: 7, wait: 1, next: 280, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  280: { name: "?",
    pic: 44, state: 7, wait: 1, next: 281, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  281: { name: "?",
    pic: 41, state: 7, wait: 1, next: 282, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  282: { name: "?",
    pic: 42, state: 7, wait: 1, next: 283, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  283: { name: "?",
    pic: 43, state: 7, wait: 1, next: 284, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  284: { name: "?",
    pic: 44, state: 7, wait: 1, next: 285, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  285: { name: "?",
    pic: 41, state: 7, wait: 1, next: 286, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  286: { name: "?",
    pic: 42, state: 7, wait: 1, next: 287, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  287: { name: "?",
    pic: 43, state: 7, wait: 1, next: 288, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  288: { name: "?",
    pic: 45, state: 7, wait: 1, next: 289, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  289: { name: "?",
    pic: 46, state: 7, wait: 1, next: 290, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  290: { name: "?",
    pic: 47, state: 7, wait: 1, next: 291, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  291: { name: "?",
    pic: 45, state: 7, wait: 0, next: 292, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0, mp: -15,
    opoint: {
      kind: 1, x: 39, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  292: { name: "?",
    pic: 46, state: 7, wait: 0, next: 293, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  293: { name: "?",
    pic: 47, state: 7, wait: 0, next: 294, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  294: { name: "?",
    pic: 45, state: 7, wait: 0, next: 295, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0, mp: -15,
    opoint: {
      kind: 1, x: -153, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  295: { name: "?",
    pic: 46, state: 7, wait: 0, next: 296, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: -153, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  296: { name: "?",
    pic: 47, state: 7, wait: 0, next: 297, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: -153, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  297: { name: "?",
    pic: 45, state: 7, wait: 0, next: 298, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0, mp: -15,
    opoint: {
      kind: 1, x: 231, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  298: { name: "?",
    pic: 46, state: 7, wait: 0, next: 299, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: 231, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  299: { name: "?",
    pic: 47, state: 7, wait: 0, next: 300, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: 231, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  300: { name: "?",
    pic: 45, state: 7, wait: 0, next: 301, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0, mp: -15,
    opoint: {
      kind: 1, x: -345, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  301: { name: "?",
    pic: 46, state: 7, wait: 0, next: 302, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: -345, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  302: { name: "?",
    pic: 47, state: 7, wait: 0, next: 303, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: -345, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  303: { name: "?",
    pic: 45, state: 7, wait: 0, next: 304, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0, mp: -15,
    opoint: {
      kind: 1, x: 423, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  304: { name: "?",
    pic: 46, state: 7, wait: 0, next: 305, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: 423, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  305: { name: "?",
    pic: 47, state: 7, wait: 0, next: 291, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 306, hit_j: 0,
    opoint: {
      kind: 1, x: 423, y: 99, action: 60, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  306: { name: "?",
    pic: 45, state: 7, wait: 0, next: 321, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  307: { name: "?",
    pic: 46, state: 7, wait: 0, next: 308, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  308: { name: "?",
    pic: 47, state: 7, wait: 0, next: 309, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  309: { name: "?",
    pic: 45, state: 7, wait: 0, next: 310, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  310: { name: "?",
    pic: 46, state: 7, wait: 0, next: 311, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  311: { name: "?",
    pic: 47, state: 7, wait: 0, next: 312, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  312: { name: "?",
    pic: 45, state: 7, wait: 0, next: 313, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  313: { name: "?",
    pic: 46, state: 7, wait: 0, next: 314, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  314: { name: "?",
    pic: 47, state: 7, wait: 0, next: 315, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  315: { name: "?",
    pic: 45, state: 7, wait: 0, next: 316, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  316: { name: "?",
    pic: 46, state: 7, wait: 0, next: 317, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  317: { name: "?",
    pic: 47, state: 7, wait: 0, next: 318, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  318: { name: "?",
    pic: 45, state: 7, wait: 0, next: 319, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  319: { name: "?",
    pic: 46, state: 7, wait: 0, next: 320, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  320: { name: "?",
    pic: 47, state: 7, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  321: { name: "?",
    pic: 45, state: 7, wait: 0, next: 307, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 99, action: 70, dvx: 0, dvy: 0, oid: 311, facing: 0
    },
    bdy: {
      kind: 0, x: 32, y: -10000, w: 36, h: 67
    }
  },
  325: { name: "punch",
    pic: 70, state: 7, wait: 0, next: 326, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    itr: {
      kind: 0, x: 11, y: 61, w: 69, h: 21, dvx: -2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
    },
    bdy: {
      kind: 0, x: 82, y: -10000, w: 36, h: 67
    }
  },
  326: { name: "punch",
    pic: 71, state: 7, wait: 0, next: 327, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    itr: [
      {
        kind: 0, x: 20, y: 56, w: 45, h: 33, dvx: -2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
      },
      {
        kind: 0, x: 54, y: 28, w: 40, h: 36, dvx: -2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
      }
    ],
    bdy: {
      kind: 0, x: 82, y: -10000, w: 36, h: 67
    }
  },
  327: { name: "punch",
    pic: 72, state: 7, wait: 0, next: 328, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: 40, y: 30, w: 28, h: 44, dvx: -2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
      },
      {
        kind: 0, x: 68, y: 19, w: 31, h: 20, dvx: -2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
      }
    ],
    bdy: {
      kind: 0, x: 82, y: -10000, w: 36, h: 67
    }
  },
  328: { name: "punch",
    pic: 73, state: 7, wait: 0, next: 329, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 50, y: 19, w: 89, h: 26, dvx: 2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
    },
    bdy: {
      kind: 0, x: 82, y: -10000, w: 36, h: 67
    }
  },
  329: { name: "punch",
    pic: 74, state: 7, wait: 0, next: 330, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 61, y: 10, w: 78, h: 27, dvx: 2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
    },
    bdy: {
      kind: 0, x: 82, y: -10000, w: 36, h: 67
    }
  },
  330: { name: "punch",
    pic: 75, state: 7, wait: 0, next: 331, dvx: 0, dvy: 0, centerx: 107, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 23, w: 74, h: 33, dvx: 2, injury: 35, vrest: 12, bdefend: 100, fall: 70, effect: 2
    },
    bdy: {
      kind: 0, x: 82, y: -10000, w: 36, h: 67
    }
  },
  331: { name: "punch",
    pic: 76, state: 7, wait: 1, next: 332, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 63, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 37, y: 49, w: 214, h: 19, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  332: { name: "punch",
    pic: 77, state: 7, wait: 1, next: 333, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 77, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 39, y: 40, w: 224, h: 25, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  333: { name: "punch",
    pic: 78, state: 7, wait: 1, next: 334, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 91, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 39, y: 40, w: 224, h: 25, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  334: { name: "punch",
    pic: 79, state: 7, wait: 1, next: 335, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 105, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 39, y: 40, w: 224, h: 25, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  335: { name: "punch",
    pic: 80, state: 7, wait: 1, next: 336, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 119, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 39, y: 40, w: 224, h: 25, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  336: { name: "punch",
    pic: 81, state: 7, wait: 1, next: 337, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 133, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 39, y: 40, w: 224, h: 25, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  337: { name: "punch",
    pic: 82, state: 7, wait: 1, next: 338, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 147, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 39, y: 40, w: 224, h: 25, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  338: { name: "punch",
    pic: 83, state: 7, wait: 1, next: 999, dvx: 0, dvy: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    opoint: {
      kind: 1, x: 161, y: 54, action: 130, dvx: 0, dvy: -1, oid: 211, facing: 0
    },
    itr: {
      kind: 0, x: 39, y: 40, w: 224, h: 25, dvx: 18, dvy: -6, injury: 52, vrest: 20, bdefend: 100, fall: 70, effect: 2, zwidth: 30
    },
    bdy: {
      kind: 0, x: 8, y: 32, w: 36, h: 67
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 49, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  }
  }

}

export default data

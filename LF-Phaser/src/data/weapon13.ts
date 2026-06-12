import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-39)": "sprite/weapon13.png", w: 139, h: 139, row: 10, col: 4
      }
    ],
    name: 'weapon13',
    weapon_hp: 999999,
    weapon_drop_hurt: 0,
    weapon_hit_sound: "1/079",
    weapon_drop_sound: "1/079",
    weapon_broken_sound: "1/079"
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 8, fall: 70, vrest: 8, bdefend: 100, injury: 34, effect: 1
    },
    2: {
      entry: "jump", dvx: 14, fall: 70, vrest: 8, bdefend: 100, injury: 37, effect: 1
    },
    3: {
      entry: "run", dvx: 20, fall: 70, vrest: 8, bdefend: 100, injury: 44, effect: 1
    },
    4: {
      entry: "dash", dvx: 26, fall: 70, vrest: 8, bdefend: 100, injury: 44, effect: 1
    }
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 71, centery: 108, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 2, dvx: 0, dvy: 0, centerx: 77, centery: 113, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 62, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 65, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "in_the_sky",
    pic: 4, state: 1000, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 67, centery: 116, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "in_the_sky",
    pic: 5, state: 1000, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 66, centery: 113, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "in_the_sky",
    pic: 6, state: 1000, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 62, centery: 113, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "in_the_sky",
    pic: 7, state: 1000, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 58, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0
  },
  8: { name: "in_the_sky",
    pic: 8, state: 1000, wait: 0, next: 9, dvx: 0, dvy: 0, centerx: 60, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0
  },
  9: { name: "in_the_sky",
    pic: 9, state: 1000, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 80, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "in_the_sky",
    pic: 10, state: 1000, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 54, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "in_the_sky",
    pic: 11, state: 1000, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 62, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "in_the_sky",
    pic: 12, state: 1000, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 70, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "in_the_sky",
    pic: 13, state: 1000, wait: 0, next: 14, dvx: 0, dvy: 0, centerx: 54, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "in_the_sky",
    pic: 14, state: 1000, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 50, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "in_the_sky",
    pic: 15, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 69, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "on_hand",
    pic: 20, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 71, centery: 108, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 69, y: 113, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 42, y: -15, w: 55, h: 151, fall: 70, bdefend: 100, injury: 27
    }
  },
  21: { name: "on_hand",
    pic: 21, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 77, centery: 113, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 65, y: 115, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 42, y: 49, w: 55, h: 92, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 79, y: 1, w: 44, h: 79, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  22: { name: "on_hand",
    pic: 22, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 62, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 38, y: 104, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 13, y: 66, w: 69, h: 53, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 54, y: 38, w: 54, h: 36, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 74, y: 8, w: 54, h: 39, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  23: { name: "on_hand",
    pic: 23, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 65, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 28, y: 88, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 10, y: 66, w: 59, h: 38, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 40, y: 54, w: 63, h: 31, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 80, y: 34, w: 65, h: 34, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  24: { name: "on_hand",
    pic: 24, state: 1001, wait: 3, next: 0, dvx: 0, dvy: 0, centerx: 67, centery: 116, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 13, y: 85, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: -5, y: 61, w: 147, h: 50, dvx: 8, fall: 70, bdefend: 100, injury: 27
    }
  },
  25: { name: "on_hand",
    pic: 25, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 66, centery: 113, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 21, y: 67, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: -15, y: 52, w: 75, h: 41, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 45, y: 74, w: 78, h: 43, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  26: { name: "on_hand",
    pic: 26, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 62, centery: 113, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 39, y: 49, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 24, y: 33, w: 51, h: 54, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 55, y: 64, w: 43, h: 42, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 81, y: 90, w: 47, h: 43, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  27: { name: "on_hand",
    pic: 27, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 58, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 47, y: 26, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 31, y: 16, w: 48, h: 67, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 55, y: 69, w: 46, h: 64, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  28: { name: "on_hand",
    pic: 28, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 60, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 63, y: 18, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 40, y: -1, w: 47, h: 140, dvx: 8, fall: 70, bdefend: 100, injury: 27
    }
  },
  29: { name: "on_hand",
    pic: 29, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 80, centery: 110, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 101, y: 22, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 69, y: 1, w: 46, h: 79, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 49, y: 49, w: 48, h: 88, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  30: { name: "on_hand",
    pic: 30, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 54, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 100, y: 27, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 54, y: 9, w: 59, h: 52, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 38, y: 42, w: 45, h: 43, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 3, y: 68, w: 55, h: 47, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  31: { name: "on_hand",
    pic: 31, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 62, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 114, y: 49, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 46, y: 36, w: 90, h: 37, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: -11, y: 57, w: 101, h: 41, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  32: { name: "on_hand",
    pic: 32, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 70, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 120, y: 74, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: -8, y: 47, w: 152, h: 56
    }
  },
  33: { name: "on_hand",
    pic: 33, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 54, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 108, y: 91, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: -13, y: 35, w: 69, h: 37, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 34, y: 60, w: 95, h: 45, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  34: { name: "on_hand",
    pic: 34, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 50, centery: 89, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 92, y: 105, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 0, y: 7, w: 42, h: 46, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 24, y: 42, w: 56, h: 39, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 43, y: 68, w: 72, h: 51, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  35: { name: "on_hand",
    pic: 35, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 69, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 89, y: 109, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 37, y: -15, w: 47, h: 67, dvx: 8, fall: 70, bdefend: 100, injury: 27
      },
      {
        kind: 5, x: 54, y: 39, w: 56, h: 89, dvx: 8, fall: 70, bdefend: 100, injury: 27
      }
    ]
  },
  40: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  41: { name: "throwing",
    pic: 1, state: 1002, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  42: { name: "throwing",
    pic: 2, state: 1002, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  43: { name: "throwing",
    pic: 3, state: 1002, wait: 0, next: 44, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  44: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 45, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  45: { name: "throwing",
    pic: 5, state: 1002, wait: 0, next: 46, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  46: { name: "throwing",
    pic: 6, state: 1002, wait: 0, next: 47, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  47: { name: "throwing",
    pic: 7, state: 1002, wait: 0, next: 48, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  48: { name: "throwing",
    pic: 8, state: 1002, wait: 0, next: 49, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  49: { name: "throwing",
    pic: 9, state: 1002, wait: 0, next: 50, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  50: { name: "throwing",
    pic: 10, state: 1002, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  51: { name: "throwing",
    pic: 11, state: 1002, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  52: { name: "throwing",
    pic: 12, state: 1002, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  53: { name: "throwing",
    pic: 13, state: 1002, wait: 0, next: 54, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  54: { name: "throwing",
    pic: 14, state: 1002, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  55: { name: "throwing",
    pic: 15, state: 1002, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 69, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 10, w: 113, h: 113, dvx: 16, vrest: 5, fall: 70, bdefend: 100, injury: 108, effect: 1
    }
  },
  60: { name: "on_ground",
    pic: 2, state: 1003, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 70, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/079"
  },
  61: { name: "on_ground",
    pic: 5, state: 1003, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 49, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "on_ground",
    pic: 3, state: 1003, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 59, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/079"
  },
  63: { name: "on_ground",
    pic: 5, state: 1003, wait: 1, next: 80, dvx: 0, dvy: 0, centerx: 49, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "on_ground",
    pic: 4, state: 1004, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 62, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "just_on_ground",
    pic: 2, state: 1003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 71, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/079",
    itr: {
      kind: 0, x: 36, y: 25, w: 76, h: 87, dvx: 4, fall: 70, bdefend: 100, effect: 1, injury: 21, vrest: 5
    }
  },
  71: { name: "just_on_on_ground",
    pic: 5, state: 1003, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 57, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 64, w: 107, h: 46, dvx: 4, fall: 70, bdefend: 100, effect: 1, injury: 21, vrest: 5
    }
  },
  72: { name: "just_on_on_ground",
    pic: 3, state: 1003, wait: 2, next: 61, dvx: 0, dvy: 0, centerx: 65, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/079",
    itr: {
      kind: 0, x: 12, y: 44, w: 115, h: 56, dvx: 4, fall: 70, bdefend: 100, effect: 1, injury: 21, vrest: 5
    }
  },
  80: { name: "explosion",
    pic: 40, state: 1002, wait: 0, next: 81, dvx: 0, dvy: 0, centerx: 49, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 49, y: 92, action: 40, dvx: 20, dvy: 0, oid: 334, facing: 0
    }
  },
  81: { name: "explosion",
    pic: 40, state: 1002, wait: 0, next: 82, dvx: 0, dvy: 0, centerx: 49, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 49, y: 92, action: 40, dvx: -20, dvy: 0, oid: 334, facing: 0
    }
  },
  82: { name: "explosion",
    pic: 40, state: 1002, wait: 0, next: 83, dvx: 0, dvy: 0, centerx: 49, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 49, y: 92, action: 50, dvx: 0, dvy: 0, oid: 340, facing: 50
    }
  },
  83: { name: "explosion",
    pic: 40, state: 1002, wait: 0, next: 1000, dvx: 0, dvy: 0, centerx: 49, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 49, y: 92, action: 50, dvx: 0, dvy: 0, oid: 340, facing: 51
    }
  },
  399: { name: "dummy",
    pic: 4, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 30, centery: 44, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 0, y: 43, w: 96, h: 40
    }
  }
  }
}

export default data

import type { CharacterData } from '../types/index.js'

const data: CharacterData = {
  bmp: {
    file: [
      {
        "file(0-5)": "sprite/john_col.png", w: 680, h: 480, row: 3, col: 2
      },
      {
        "file(6-7)": "sprite/john_col2.png", w: 680, h: 500, row: 1, col: 2
      },
      {
        "file(8-10)": "sprite/john_col3.png", w: 1020, h: 500, row: 1, col: 3
      },
      {
        "file(11-18)": "sprite/hunter_col.png", w: 640, h: 440, row: 1, col: 8
      }
    ],
    name: 'john_col',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  1: { name: "binding",
    pic: 0, state: 15, wait: 4, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "binding",
    pic: 1, state: 15, wait: 4, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "binding",
    pic: 2, state: 15, wait: 4, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "binding",
    pic: 3, state: 15, wait: 4, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "binding",
    pic: 4, state: 15, wait: 4, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "binding",
    pic: 5, state: 15, wait: 4, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "binding_hold",
    pic: 6, state: 15, wait: 4, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "binding_hold",
    pic: 7, state: 15, wait: 4, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 170, centery: 250, hit_a: 0, hit_d: 0, hit_j: 0
  },
  25: { name: "col",
    pic: 11, state: 15, wait: 3, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  26: { name: "col",
    pic: 12, state: 15, wait: 3, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "col",
    pic: 13, state: 15, wait: 3, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  28: { name: "col",
    pic: 14, state: 15, wait: 3, next: 29, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  29: { name: "col",
    pic: 15, state: 15, wait: 3, next: 30, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "col",
    pic: 16, state: 15, wait: 3, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "col",
    pic: 17, state: 15, wait: 3, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "col",
    pic: 18, state: 15, wait: 3, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 220, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
}

export default data

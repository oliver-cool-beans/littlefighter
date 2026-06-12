import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    name: 'dragon',
    file: [
      {
        "file(0-9)": "sprite/freeze_chase.png", w: 319, h: 159, row: 2, col: 5
      },
      {
        "file(10-25)": "sprite/firen_chase.png", w: 319, h: 159, row: 2, col: 5
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 2, state: 1005, wait: 1, next: 1, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 3, zwidth: 50
    }
  },
  1: { name: "flying",
    pic: 3, state: 1005, wait: 1, next: 2, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 1, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 3, zwidth: 50
    }
  },
  2: { name: "flying",
    pic: 4, state: 1005, wait: 1, next: 3, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 3, zwidth: 50
    }
  },
  3: { name: "flying",
    pic: 5, state: 1005, wait: 1, next: 4, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 3, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 3, zwidth: 50
    }
  },
  4: { name: "flying",
    pic: 6, state: 1005, wait: 1, next: 999, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 4, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 3, zwidth: 50
    }
  },
  50: { name: "start",
    sound: "1/103",
    pic: 0, state: 1005, wait: 1, next: 51, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 3, zwidth: 50
    }
  },
  51: { name: "start",
    pic: 7, state: 1005, wait: 1, next: 52, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 3, zwidth: 50
    }
  },
  52: { name: "start",
    pic: 7, state: 1005, wait: 1, next: 53, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 3, zwidth: 50
    }
  },
  53: { name: "start",
    pic: 1, state: 1005, wait: 1, next: 54, dvx: 2, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 3, zwidth: 50
    }
  },
  54: { name: "start",
    pic: 2, state: 1005, wait: 1, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 3, zwidth: 50
    }
  },
  55: { name: "start",
    sound: "1/104",
    pic: 2, state: 1005, wait: 0, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 3, zwidth: 50
    }
  },
  100: { name: "flying",
    pic: 12, state: 1005, wait: 1, next: 101, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 100, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 2, zwidth: 50
    }
  },
  101: { name: "flying",
    pic: 13, state: 1005, wait: 1, next: 102, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 101, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 2, zwidth: 50
    }
  },
  102: { name: "flying",
    pic: 14, state: 1005, wait: 1, next: 103, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 102, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 2, zwidth: 50
    }
  },
  103: { name: "flying",
    pic: 15, state: 1005, wait: 1, next: 104, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 103, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 2, zwidth: 50
    }
  },
  104: { name: "flying",
    pic: 16, state: 1005, wait: 1, next: 100, dvx: 23, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 19, hit_d: 104, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 5, dvy: -26, fall: 70, vrest: 100, bdefend: 100, injury: 235, effect: 2, zwidth: 50
    }
  },
  150: { name: "start",
    sound: "1/103",
    pic: 10, state: 1005, wait: 2, next: 151, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 2, zwidth: 50
    }
  },
  151: { name: "start",
    pic: 17, state: 1005, wait: 1, next: 152, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 2, zwidth: 50
    }
  },
  152: { name: "start",
    pic: 17, state: 1005, wait: 1, next: 153, dvx: 5, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 2, zwidth: 50
    }
  },
  153: { name: "start",
    pic: 11, state: 1005, wait: 1, next: 154, dvx: 2, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 2, zwidth: 50
    }
  },
  154: { name: "start",
    pic: 12, state: 1005, wait: 2, next: 155, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 2, zwidth: 50
    }
  },
  155: { name: "start",
    sound: "1/104",
    pic: 12, state: 1005, wait: 0, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 0, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 37, w: 289, h: 94, dvx: 3, dvy: -30, fall: 70, vrest: 100, bdefend: 100, injury: 245, effect: 2, zwidth: 50
    }
  }
  }

}

export default data

import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-3)": "sprite/bat_chase4.png", w: 405, h: 410, row: 4, col: 1
      }
    ],
    name: 'bat_chase4',
    weapon_hit_sound: "1/068",
    weapon_drop_sound: "1/068",
    weapon_broken_sound: "1/068"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 1006, wait: 2, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 215, centery: 195, hit_a: 5, hit_d: 0, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 250, y: 200, action: 0, dvx: 5, dvy: -3, oid: 211, facing: 31
    },
    itr: {
      kind: 0, x: 116, y: 145, w: 170, h: 87, dvx: 0, dvy: -7, fall: 70, vrest: 6, bdefend: 100, injury: 11, effect: 2, zwidth: 45
    }
  },
  1: { name: "flying",
    pic: 1, state: 1006, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 235, centery: 215, hit_a: 5, hit_d: 1, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 200, y: 200, action: 1, dvx: 20, dvy: 0, oid: 225, facing: 21
    },
    itr: {
      kind: 0, x: 116, y: 145, w: 170, h: 87, dvx: 0, dvy: -7, fall: 70, vrest: 6, bdefend: 100, injury: 11, effect: 2, zwidth: 45
    }
  },
  2: { name: "flying",
    pic: 2, state: 1006, wait: 2, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 225, centery: 220, hit_a: 5, hit_d: 2, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 250, y: 200, action: 0, dvx: 5, dvy: -3, oid: 211, facing: 31
    },
    itr: {
      kind: 0, x: 116, y: 145, w: 170, h: 87, dvx: 0, dvy: -7, fall: 70, vrest: 6, bdefend: 100, injury: 11, effect: 2, zwidth: 45
    }
  },
  3: { name: "flying",
    pic: 1, state: 1006, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 235, centery: 225, hit_a: 5, hit_d: 3, hit_j: 0, hit_Fa: 12,
    opoint: {
      kind: 1, x: 200, y: 200, action: 1, dvx: 20, dvy: 0, oid: 225, facing: 21
    },
    itr: {
      kind: 0, x: 116, y: 145, w: 170, h: 87, dvx: 0, dvy: -7, fall: 70, vrest: 6, bdefend: 100, injury: 11, effect: 2, zwidth: 45
    }
  },
  50: { name: "start",
    pic: 3, state: 1005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 210, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    sound: "1/087",
    pic: 3, state: 1005, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 200, centery: 190, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }

}

export default data

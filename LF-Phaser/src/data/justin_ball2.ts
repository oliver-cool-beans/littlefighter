import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-19)": "sprite/hunter_arrow1.png", w: 48, h: 48, row: 10, col: 2
      }
    ],
    name: 'justin_ball2'
  },
  frame: {
  0: { name: "ball",
    pic: 999, state: 3005, wait: 0, next: 1000, dvx: 3, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "ball",
    pic: 999, state: 3005, wait: 4, next: 2, dvx: 3, dvy: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: -40, y: -40, w: 80, h: 80, vrest: 1,
      catchingact: [3, NaN], caughtact: [132, NaN]
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: -2, dvy: 1, oid: 200, facing: 0
    }
  },
  2: { name: "ball",
    pic: 999, state: 3005, wait: 4, next: 1, dvx: 3, dvy: 0, centerx: 0, centery: 0, hit_a: 5, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: -40, y: -40, w: 80, h: 80, vrest: 1,
      catchingact: [3, NaN], caughtact: [132, NaN]
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: -2, dvy: 1, oid: 200, facing: 0
    }
  },
  3: { name: "ball",
    pic: 999, state: 9, wait: 1, next: 4, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049",
    cpoint: {
      kind: 1, x: 0, y: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    }
  },
  4: { name: "ball",
    pic: 999, state: 9, wait: 1, next: 5, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 0, injury: 6, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 80, y: 0, action: 1, dvx: 0, dvy: 0, oid: 312, facing: 0
    }
  },
  5: { name: "ball",
    pic: 999, state: 9, wait: 5, next: 6, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: 0, dvy: 2, oid: 200, facing: 0
    }
  },
  6: { name: "ball",
    pic: 999, state: 9, wait: 5, next: 5, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -3
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: 0, dvy: 2, oid: 200, facing: 0
    }
  },
  11: { name: "ball",
    pic: 999, state: 3005, wait: 4, next: 12, dvx: 6, dvy: 0, centerx: 0, centery: 0, hit_a: 8, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: -40, y: -40, w: 80, h: 80, vrest: 1,
      catchingact: [13, NaN], caughtact: [132, NaN]
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: -2, dvy: 1, oid: 200, facing: 0
    }
  },
  12: { name: "ball",
    pic: 999, state: 3005, wait: 4, next: 11, dvx: 6, dvy: 0, centerx: 0, centery: 0, hit_a: 8, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: -40, y: -40, w: 80, h: 80, vrest: 1,
      catchingact: [13, NaN], caughtact: [132, NaN]
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: -2, dvy: 1, oid: 200, facing: 0
    }
  },
  13: { name: "ball",
    pic: 999, state: 9, wait: 1, next: 14, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049",
    cpoint: {
      kind: 1, x: 0, y: 0, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    }
  },
  14: { name: "ball",
    pic: 999, state: 9, wait: 1, next: 15, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 0, injury: 6, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 80, y: 0, action: 11, dvx: 0, dvy: 0, oid: 312, facing: 0
    }
  },
  15: { name: "ball",
    pic: 999, state: 9, wait: 4, next: 16, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 0, injury: 5, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -5
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: 0, dvy: 2, oid: 200, facing: 0
    }
  },
  16: { name: "ball",
    pic: 999, state: 9, wait: 4, next: 15, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 0, y: 0, injury: 2, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -5
    },
    opoint: {
      kind: 1, x: 0, y: 0, action: 44, dvx: 0, dvy: 2, oid: 200, facing: 0
    }
  },
  25: { name: "a",
    pic: 999, state: 3005, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 0, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: -3, y: -3, w: 6, h: 6, vrest: 1,
      catchingact: [26, NaN], caughtact: [132, NaN]
    }
  },
  26: { name: "a",
    pic: 7, state: 9, wait: 5, next: 27, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 8, hit_d: 30, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 33, y: 34, injury: 8, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 30, y: 35, action: 155, dvx: -8, dvy: -6, oid: 329, facing: 0
    }
  },
  27: { name: "a",
    pic: 7, state: 9, wait: 3, next: 28, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 8, hit_d: 30, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 33, y: 34, injury: 6, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 30, y: 35, action: 155, dvx: -7, dvy: -3, oid: 329, facing: 0
    }
  },
  28: { name: "a",
    pic: 7, state: 9, wait: 5, next: 29, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 8, hit_d: 30, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 33, y: 34, injury: 8, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 30, y: 35, action: 155, dvx: -9, dvy: 5, oid: 329, facing: 0
    }
  },
  29: { name: "a",
    pic: 7, state: 9, wait: 3, next: 26, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 8, hit_d: 30, hit_j: 0,
    sound: "1/033",
    cpoint: {
      kind: 1, x: 33, y: 34, injury: 6, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 0
    },
    opoint: {
      kind: 1, x: 30, y: 35, action: 155, dvx: -6, dvy: 3, oid: 329, facing: 0
    }
  },
  30: { name: "a",
    pic: 7, state: 9, wait: 0, next: 31, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 33, y: 34, vaction: 132, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    }
  },
  31: { name: "a",
    pic: 7, state: 9, wait: 0, next: 32, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 33, y: 74, vaction: 181, throwvx: 4, throwvy: 1, throwvz: 0, throwinjury: 0
    }
  },
  32: { name: "a",
    pic: 8, state: 9, wait: 2, next: 33, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "a",
    pic: 9, state: 9, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 33, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }

}

export default data

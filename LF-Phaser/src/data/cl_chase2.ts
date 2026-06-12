import type { CharacterData } from '../types/index.js'

const data: CharacterData = {

  bmp: {
    file: [
      {
        "file(0-2)": "sprite/cl_col5.png", w: 239, h: 559, row: 3, col: 1
      },
      {
        "file(3-6)": "sprite/cl_star2.png", w: 81, h: 81, row: 4, col: 1
      }
    ],
    name: 'cl_chase2',
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 2, state: 15, wait: 0, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 8, hit_d: 2, hit_j: 0,
    sound: "1/076",
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ],
    opoint: {
      kind: 1, x: 20, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  1: { name: "flying",
    pic: 1, state: 15, wait: 0, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 8, hit_d: 2, hit_j: 0,
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ],
    opoint: {
      kind: 1, x: 220, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  2: { name: "flying",
    pic: 3, state: 15, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "flying",
    pic: 0, state: 9, wait: 1, next: 101, dvx: 20, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    }
  },
  101: { name: "flying",
    pic: 1, state: 9, wait: 1, next: 102, dvx: 20, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 101, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 119, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  102: { name: "flying",
    pic: 0, state: 9, wait: 1, next: 103, dvx: 15, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 102, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    }
  },
  103: { name: "flying",
    pic: 1, state: 9, wait: 1, next: 104, dvx: 15, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 103, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 119, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  104: { name: "flying",
    pic: 0, state: 9, wait: 1, next: 105, dvx: 10, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 104, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    }
  },
  105: { name: "flying",
    pic: 1, state: 9, wait: 1, next: 106, dvx: 10, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 105, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 119, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  106: { name: "flying",
    pic: 0, state: 9, wait: 1, next: 107, dvx: 5, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 106, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    }
  },
  107: { name: "flying",
    pic: 1, state: 9, wait: 1, next: 108, dvx: 5, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 107, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 119, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  108: { name: "flying",
    pic: 0, state: 9, wait: 1, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 108, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    }
  },
  109: { name: "flying",
    pic: 1, state: 9, wait: 1, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 109, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 119, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  110: { name: "flying",
    pic: 0, state: 9, wait: 1, next: 111, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 110, hit_j: 0, hit_Fa: 12,
    sound: "1/076",
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    }
  },
  111: { name: "flying",
    pic: 1, state: 9, wait: 1, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 111, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 3, x: 35, y: 489, w: 200, h: 20, vrest: 7, zwidth: 43,
      catchingact: [114, 114], caughtact: [132, 132]
    },
    opoint: {
      kind: 1, x: 119, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  114: { name: "flying",
    pic: 0, state: 9, wait: 0, next: 115, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 119, y: 439, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ]
  },
  115: { name: "flying",
    pic: 1, state: 9, wait: 2, next: 116, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/114",
    cpoint: {
      kind: 1, x: 119, y: 439, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ],
    opoint: {
      kind: 1, x: 119, y: 459, action: 100, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  116: { name: "flying",
    pic: 2, state: 9, wait: 0, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 119, y: 439, injury: 60, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: 0
    },
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ]
  },
  117: { name: "flying",
    pic: 1, state: 9, wait: 0, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 119, y: 439, injury: 1, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -2
    },
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ],
    opoint: {
      kind: 1, x: 20, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  118: { name: "flying",
    pic: 2, state: 9, wait: 0, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/076",
    cpoint: {
      kind: 1, x: 119, y: 437, injury: 2, vaction: 130, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -2
    },
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ],
    opoint: {
      kind: 1, x: 220, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  119: { name: "flying",
    pic: 1, state: 9, wait: 0, next: 120, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 119, y: 439, injury: 1, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -2
    },
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ],
    opoint: {
      kind: 1, x: 20, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  120: { name: "flying",
    pic: 2, state: 9, wait: 0, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 119, centery: 459, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/076",
    cpoint: {
      kind: 1, x: 119, y: 437, injury: 2, vaction: 132, throwvz: -842150451, hurtable: 0, throwinjury: -842150451, decrease: -3
    },
    itr: [
      {
        kind: 0, x: 20, y: 0, w: 50, h: 500, dvx: -10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 70, y: 0, w: 50, h: 500, dvx: -5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 120, y: 0, w: 50, h: 500, dvx: 5, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      },
      {
        kind: 0, x: 170, y: 0, w: 50, h: 500, dvx: 10, dvy: -20, fall: 70, vrest: 4, bdefend: 100, injury: 10, zwidth: 43, effect: 23
      }
    ],
    opoint: {
      kind: 1, x: 220, y: 499, action: 150, dvx: 0, dvy: 0, oid: 345, facing: 0
    }
  },
  150: { name: "up_star",
    pic: 3, state: 1000, wait: 2, next: 151, dvx: 0, dvy: -1, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "up_star",
    pic: 4, state: 1000, wait: 2, next: 152, dvx: 0, dvy: -2, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "up_star",
    pic: 5, state: 1000, wait: 2, next: 153, dvx: 0, dvy: -3, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "up_star",
    pic: 6, state: 1000, wait: 2, next: 1000, dvx: 0, dvy: -4, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }

}

export default data

/*\
 * global.ts
 *
 * Global constants of a game.
 * Ported from F.LF/LF/global.js — AMD wrapper stripped, exported as ES module.
\*/

const G = {
  application: {
    window: {
      width:       794,
      outer_width: 804,
      wide_width:  1000,
      height:       550,
      outer_height: 590
    },
    viewer: {
      height: 400
    },
    camera: {
      speed_factor: 1 / 14  // widened from 1/18 to handle CL (run speed 18) without lag
    }
  },

  /*\
   * global.combo_list
   [ property ]
   * list of combos
  \*/
  combo_list: [
    { name: 'D<A',  seq: ['def', 'left',  'att'],  clear_on_combo: false },
    { name: 'D>A',  seq: ['def', 'right', 'att'],  clear_on_combo: false },
    { name: 'DvA',  seq: ['def', 'down',  'att']  },
    { name: 'D^A',  seq: ['def', 'up',    'att']  },
    { name: 'D<J',  seq: ['def', 'left',  'jump'], clear_on_combo: false },
    { name: 'D>J',  seq: ['def', 'right', 'jump'], clear_on_combo: false },
    { name: 'DvJ',  seq: ['def', 'down',  'jump'] },
    { name: 'D^J',  seq: ['def', 'up',    'jump'] },
    { name: 'D<AJ', seq: ['def', 'left',  'att', 'jump'], clear_on_combo: false },
    { name: 'D>AJ', seq: ['def', 'right', 'att', 'jump'], clear_on_combo: false },
    { name: 'DJA',  seq: ['def', 'jump',  'att'] }
  ] as Array<{ name: string; seq: string[]; clear_on_combo?: boolean }>,

  combo_tag: {
    def:   'hit_d',
    jump:  'hit_j',
    att:   'hit_a',
    'D<A': 'hit_Fa',
    'D>A': 'hit_Fa',
    DvA:   'hit_Da',
    'D^A': 'hit_Ua',
    'D<J': 'hit_Fj',
    'D>J': 'hit_Fj',
    DvJ:   'hit_Dj',
    'D^J': 'hit_Uj',
    'D<AJ': 'hit_Fj',
    'D>AJ': 'hit_Fj',
    DJA:   'hit_ja'
  } as Record<string, string>,

  combo_dir: {
    'D<A':  'left',
    'D>A':  'right',
    'D<J':  'left',
    'D>J':  'right',
    'D<AJ': 'left',
    'D>AJ': 'right'
  } as Record<string, string>,

  combo_priority: {
    up:     0, down:  0, left:  0, right: 0,
    def:    0, jump:  0, att:   0, run:   0,
    'D>A':  1, 'D<A': 1, DvA:  1, 'D^A': 1,
    DvJ:    1, 'D^J': 1, 'D>J': 1, 'D<J': 1,
    'D<AJ': 1, 'D>AJ':1, DJA:  1
  } as Record<string, number>,

  gameplay: {
    framerate: 30,

    default: {
      health: {
        hpFull:   500,
        mpFull:   500,
        mpStart:  200
      },
      itr: {
        zwidth:      12,
        hit_stop:     3,
        throw_injury: 10
      },
      cpoint: {
        hurtable: 0,
        cover:    0,
        vaction:  135
      },
      wpoint: {
        cover: 0
      },
      effect: {
        num: 0
      },
      fall: {
        value: 20,
        dvy:   -6.9
      },
      weapon: {
        vrest: 9
      },
      character: {
        arest: 7
      },
      machanics: {
        mass: 1
      }
    },

    recover: {
      fall:     -0.45,
      bdefend:  -0.5
    },

    effect: {
      num_to_id: 300,
      duration:   3,
      heal_max:  100,
      disappear: {
        shadow_blink: 120,
        body_blink:   150
      }
    },

    character: {
      bounceup: {
        limit: {
          xy: 13.4,
          y:  11
        },
        y:      4.25,
        absorb: {
          9:  1,
          14: 4,
          20: 10,
          40: 20,
          60: 30
        } as Record<number, number>
      }
    },

    defend: {
      injury: {
        factor: 0.1
      },
      break_limit: 40,
      absorb: {
        5:  0,
        15: 5
      } as Record<number, number>
    },

    fall: {
      KO: 60,
      wait180: {
        7:  1,
        9:  2,
        11: 3,
        13: 4,
        15: 5,
        17: 6
      } as Record<number, number>
    },

    friction: {
      fell: {
        2:  0,
        3:  1,
        5:  2,
        6:  4,
        9:  5,
        13: 7,
        25: 9
      } as Record<number, number>
    },

    min_speed: 1,
    gravity:   1.7,

    weapon: {
      bounceup: {
        limit: 8,
        speed: {
          y: -3.7,
          x:  3,
          z:  1.5
        }
      },
      soft_bounceup: {
        speed: {
          y: -2
        }
      },
      hit: {
        vx: -3,
        vy:  0
      },
      reverse: {
        factor: {
          vx: -0.4,
          vy: -2,
          vz: -0.4
        }
      }
    },

    combo: {
      timeout: 20
    },

    unspecified:               -842150451,
    specialattack_projectiles: [
      201, 202,
    ] as number[]
  }
}

export default G

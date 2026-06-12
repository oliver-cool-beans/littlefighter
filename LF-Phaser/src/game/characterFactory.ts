/**
 * characterFactory.ts — creates a Character instance by LF2 character ID.
 *
 * Each character has a dedicated subclass in game/character/ that carries
 * its own data import and any id_update overrides.
 */

import { Davis  } from './character/davis.js'
import { Dennis } from './character/dennis.js'
import { Deep   } from './character/deep.js'
import { John   } from './character/john.js'
import { Henry  } from './character/henry.js'
import { Firen  } from './character/firen.js'
import { Freeze } from './character/freeze.js'
import { Louis  } from './character/louis.js'
import { Rudolf } from './character/rudolf.js'
import { Bandit   } from './character/bandit.js'
import { BanditEX } from './character/bandit2.js'
import { Woody    } from './character/woody.js'
import { Knight   } from './character/knight.js'
import { Julian   } from './character/julian.js'
import { Jan      } from './character/jan.js'
import { Firzen   } from './character/firzen.js'
import { Richter  } from './character/richter.js'
import { CL       } from './character/cl.js'
import { Justin   } from './character/justin.js'
import { Monk     } from './character/monk.js'
import { Mark     } from './character/mark.js'
import { Hunter   } from './character/hunter.js'
import { Jack     } from './character/jack.js'
import { Sorcerer } from './character/sorcerer.js'
import { Bat      } from './character/bat.js'
import { LouisEX  } from './character/louisex.js'
import { Guardian } from './character/guardian.js'
import { Criminal } from './character/criminal.js'
import { Dragon   } from './character/dragon.js'
import type { Character } from './character/index.js'
import type { ObjectConfig } from '../types/index.js'

type CharacterCtor = new (config: ObjectConfig) => Character

const CHARACTER_CTORS: Record<number, CharacterCtor> = {
  11: Davis,
  12: Dennis,
  13: Deep,
  14: John,
  15: Henry,
  16: Firen,
  17: Freeze,
  18: Louis,
  19: Rudolf,
  20: Julian,
  21: Bandit,
  22: Woody,
  23: Jan,
  24: Firzen,
  25: Richter,
  26: CL,
  27: Justin,
  28: Monk,
  29: Mark,
  30: Hunter,
  31: Jack,
  32: Sorcerer,
  33: Bat,
  34: LouisEX,
  35: BanditEX,
  37: Knight,
  50: Guardian,
  51: Criminal,
  52: Dragon,
}

export function createCharacterById(
  id: number,
  config: ObjectConfig
): Character {
  const Ctor = CHARACTER_CTORS[id]
  if (!Ctor) throw new Error(`Unknown character id: ${id}`)
  return new Ctor(config)
}

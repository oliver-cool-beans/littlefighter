/**
 * objectFactory — central OID registry and spawn factory.
 *
 * Maps every sub-object OID (0, 200-215) to its data file and handles
 * position / velocity initialisation so each scene's _createObject
 * does not repeat the logic.
 *
 * Usage:
 *   const obj = spawnObject(opoint, parent, cfg)
 *   if (obj) {
 *     lfScene.add(obj as SceneObject)
 *     objects.push(obj)
 *   }
 */

import { createBat }           from './weapons/bat.js'
import { createHoe }           from './weapons/hoe.js'
import { createStone }         from './weapons/stone.js'
import { createWoodenBox }     from './weapons/woodenBox.js'
import { createIceSword }      from './weapons/iceSword.js'
import { createKnife }         from './weapons/knife.js'
import { createBaseball }      from './weapons/baseball.js'
import { createBottle }        from './weapons/bottle.js'
import { createLouisArmour }   from './weapons/louisArmour.js'
import { createGuardianWeapon } from './weapons/guardianWeapon.js'
import { createDragonWeapon }  from './weapons/dragonWeapon.js'
import { createHunterArrow }   from './weapons/hunterArrow.js'
import { createSpecialAttack } from './specialattack.js'
import { createEffect }        from './effects/effect.js'
import { createBrokenWeapon }  from './effects/broken.js'
import type { LivingObject }   from './livingobject.js'
import type { ObjectConfig, OpointSpec, CharacterData } from '../types/index.js'

import effect0Data               from '../data/effect0.js'
import effect1Data               from '../data/effect1.js'
import brokenData                from '../data/broken.js'
import davisBallData             from '../data/davis_ball.js'
import johnBallData              from '../data/john_ball.js'
import henryArrow1Data           from '../data/henry_arrow1.js'
import rudolfWeaponData          from '../data/rudolf_weapon.js'
import deepBallData              from '../data/deep_ball.js'
import henryLouisRudolfWindData  from '../data/henry_louis_rudolf_wind.js'
import dennisBallData            from '../data/dennis_ball.js'
import woodyBallData             from '../data/woody_ball.js'
import henryArrow2Data           from '../data/henry_arrow2.js'
import freezeBallData            from '../data/freeze_ball.js'
import firenBallData             from '../data/firen_ball.js'
import firenFlameData            from '../data/firen_flame.js'
import freezeColumnData          from '../data/freeze_column.js'
import johnBiscuitData           from '../data/john_biscuit.js'
import dennisChaseData           from '../data/dennis_chase.js'
import knightBallData            from '../data/knight_ball.js'
import knightThunderData         from '../data/knight_thunder.js'
import banditFlameData           from '../data/bandit_flame.js'
import jackBallData              from '../data/jack_ball.js'
import janChaseData              from '../data/jan_chase.js'
import janChasehData             from '../data/jan_chaseh.js'
import firzenBallData            from '../data/firzen_ball.js'
import firzenChasefData          from '../data/firzen_chasef.js'
import firzenChaseiData          from '../data/firzen_chasei.js'
import batBallData               from '../data/bat_ball.js'
import batBall2Data              from '../data/bat_ball2.js'
import batChaseData              from '../data/bat_chase.js'
import batChase2Data             from '../data/bat_chase2.js'
import batChase3Data             from '../data/bat_chase3.js'
import batChase4Data             from '../data/bat_chase4.js'
import justinBallData            from '../data/justin_ball.js'
import justinBall2Data           from '../data/justin_ball2.js'
import julianBallData            from '../data/julian_ball.js'
import julianBall2Data           from '../data/julian_ball2.js'
import horizontalWwData          from '../data/horizontal_ww.js'
import louisexBallData           from '../data/louisex_ball.js'
import davisBall2Data            from '../data/davis_ball2.js'
import clBallData                from '../data/cl_ball.js'
import clBall2Data               from '../data/cl_ball2.js'
import clBall3Data               from '../data/cl_ball3.js'
import clChaseData               from '../data/cl_chase.js'
import clChase2Data              from '../data/cl_chase2.js'
import clColData                 from '../data/cl_col.js'
import clCol2Data                from '../data/cl_col2.js'
import clCol3Data                from '../data/cl_col3.js'
import clFlameData               from '../data/cl_flame.js'
import firenBall2Data            from '../data/firen_ball2.js'
import firenBall3Data            from '../data/firen_ball3.js'
import louisBallData             from '../data/louis_ball.js'
import johnColData               from '../data/john_col.js'
// ── OID constants ────────────────────────────────────────────────────────────

export const OID_WEAPON0               = 0
export const OID_KNIFE                 = 120
export const OID_BASEBALL              = 121
export const OID_MILK_BOTTLE           = 122
export const OID_BEER                  = 123
export const OID_BOTTLE                = 124
export const OID_HOE                   = 101
export const OID_STONE                 = 150
export const OID_WOODEN_BOX            = 151
export const OID_LOUIS_ARMOUR_1        = 217
export const OID_LOUIS_ARMOUR_2        = 218
export const OID_GUARDIAN_WEAPON       = 325
export const OID_HUNTER_ARROW          = 313
export const OID_JOHN_BALL             = 200
export const OID_HENRY_ARROW1          = 201
export const OID_RUDOLF_WEAPON         = 202
export const OID_DEEP_BALL             = 203
export const OID_HENRY_LOUIS_RUDOLF_WIND = 204
export const OID_DENNIS_BALL           = 205
export const OID_WOODY_BALL            = 206
export const OID_DAVIS_BALL            = 207
export const OID_HENRY_ARROW2          = 208
export const OID_FREEZE_BALL           = 209
export const OID_FIREN_BALL            = 210
export const OID_FIREN_FLAME           = 211
export const OID_FREEZE_COLUMN         = 212
export const OID_ICE_SWORD             = 213
export const OID_JOHN_BISCUIT          = 214
export const OID_DENNIS_CHASE          = 215
export const OID_JACK_BALL             = 216
export const OID_JAN_CHASEH            = 219
export const OID_JAN_CHASE             = 220
export const OID_FIRZEN_CHASEF         = 221
export const OID_FIRZEN_CHASEI         = 222
export const OID_FIRZEN_BALL           = 223
export const OID_BAT_BALL              = 224
export const OID_BAT_CHASE             = 225
export const OID_JUSTIN_BALL           = 226
export const OID_JULIAN_BALL           = 228
export const OID_JULIAN_BALL2          = 229
export const OID_KNIGHT_THUNDER        = 329
export const OID_KNIGHT_BALL           = 330
export const OID_BLAST                 = 300
export const OID_BLOOD                 = 301
export const OID_BROKEN                = 320
export const OID_BANDIT_FLAME          = 311
export const OID_BAT_CHASE2            = 315
export const OID_BAT_BALL2             = 316
export const OID_BAT_CHASE3            = 317
export const OID_BAT_CHASE4            = 321
export const OID_JUSTIN_BALL2          = 322
export const OID_HORIZONTAL_WW         = 328
export const OID_CL_BALL               = 333
export const OID_CL_COL                = 334
export const OID_CL_COL2               = 335
export const OID_CL_BALL2              = 336
export const OID_CL_BALL3              = 337
export const OID_CL_CHASE              = 338
export const OID_CL_CHASE2             = 345  // self-references 345; also spawned by Jan chase
export const OID_CL_FLAME              = 340
export const OID_LOUISEX_BALL          = 341
export const OID_CL_COL3              = 342
export const OID_DAVIS_BALL2           = 344
export const OID_DRAGON_WEAPON         = 339  // type 1 heavy weapon (grabbed via opoint kind:2 by CL)
export const OID_FIREN_BALL2           = 310
export const OID_JOHN_COL              = 312
export const OID_FREEZE_COLUMN2        = 323  // alias for freeze_column, used by Firen/Freeze catching
export const OID_FIREN_BALL3           = 327
export const OID_LOUIS_BALL            = 343

/** Maps specialattack OIDs to their data files. */
const SPECIAL_ATTACK_DATA: Record<number, CharacterData> = {
  [OID_JOHN_BALL]:              johnBallData,
  [OID_HENRY_ARROW1]:           henryArrow1Data,
  [OID_RUDOLF_WEAPON]:          rudolfWeaponData,
  [OID_DEEP_BALL]:              deepBallData,
  [OID_HENRY_LOUIS_RUDOLF_WIND]: henryLouisRudolfWindData,
  [OID_DENNIS_BALL]:            dennisBallData,
  [OID_WOODY_BALL]:             woodyBallData,
  [OID_DAVIS_BALL]:             davisBallData,
  [OID_HENRY_ARROW2]:           henryArrow2Data,
  [OID_FREEZE_BALL]:            freezeBallData,
  [OID_FIREN_BALL]:             firenBallData,
  [OID_FIREN_FLAME]:            firenFlameData,
  [OID_FREEZE_COLUMN]:          freezeColumnData,
  [OID_JOHN_BISCUIT]:           johnBiscuitData,
  [OID_DENNIS_CHASE]:           dennisChaseData,
  [OID_KNIGHT_THUNDER]:         knightThunderData,
  [OID_KNIGHT_BALL]:            knightBallData,
  [OID_BANDIT_FLAME]:           banditFlameData,
  [OID_JACK_BALL]:              jackBallData,
  [OID_JAN_CHASE]:              janChaseData,
  [OID_JAN_CHASEH]:             janChasehData,
  [OID_FIRZEN_BALL]:            firzenBallData,
  [OID_FIRZEN_CHASEF]:          firzenChasefData,
  [OID_FIRZEN_CHASEI]:          firzenChaseiData,
  [OID_BAT_BALL]:               batBallData,
  [OID_BAT_BALL2]:              batBall2Data,
  [OID_BAT_CHASE]:              batChaseData,
  [OID_BAT_CHASE2]:             batChase2Data,
  [OID_BAT_CHASE3]:             batChase3Data,
  [OID_BAT_CHASE4]:             batChase4Data,
  [OID_JUSTIN_BALL]:            justinBallData,
  [OID_JUSTIN_BALL2]:           justinBall2Data,
  [OID_JULIAN_BALL]:            julianBallData,
  [OID_JULIAN_BALL2]:           julianBall2Data,
  [OID_HORIZONTAL_WW]:          horizontalWwData,
  [OID_LOUISEX_BALL]:           louisexBallData,
  [OID_DAVIS_BALL2]:            davisBall2Data,
  [OID_CL_BALL]:                clBallData,
  [OID_CL_BALL2]:               clBall2Data,
  [OID_CL_BALL3]:               clBall3Data,
  [OID_CL_CHASE]:               clChaseData,
  [OID_CL_CHASE2]:              clChase2Data,
  [OID_CL_COL]:                 clColData,
  [OID_CL_COL2]:                clCol2Data,
  [OID_CL_COL3]:                clCol3Data,
  [OID_CL_FLAME]:               clFlameData,
  [OID_FIREN_BALL2]:            firenBall2Data,
  [OID_FIREN_BALL3]:            firenBall3Data,
  [OID_FREEZE_COLUMN2]:         freezeColumnData,
  [OID_JOHN_COL]:               johnColData,
  [OID_LOUIS_BALL]:             louisBallData,
}

/**
 * Spawn a sub-object for the given opoint.
 *
 * Returns the newly created LivingObject (already positioned and initialised),
 * or null if the OID is unrecognised or not yet supported.
 * The caller is responsible for adding the result to the scene and objects list.
 */
export function spawnObject(
  opoint: OpointSpec,
  parent: InstanceType<typeof LivingObject>,
  cfg: ObjectConfig,
): InstanceType<typeof LivingObject> | null {
  const oid = opoint.oid as number

  if (oid === OID_WEAPON0) return _spawnWeapon0(opoint, parent, cfg)
  if (oid === OID_HOE)            return _spawnWeapon(createHoe(cfg), opoint, parent)
  if (oid === OID_STONE)          return _spawnWeapon(createStone(cfg), opoint, parent)
  if (oid === OID_WOODEN_BOX)     return _spawnWeapon(createWoodenBox(cfg), opoint, parent)
  if (oid === OID_ICE_SWORD)      return _spawnWeapon(createIceSword(cfg), opoint, parent)
  if (oid === OID_KNIFE)          return _spawnWeapon(createKnife(cfg), opoint, parent)
  if (oid === OID_BASEBALL)       return _spawnWeapon(createBaseball(cfg), opoint, parent)
  if (oid === OID_MILK_BOTTLE)    return null  // consumable item — handled by stage logic
  if (oid === OID_BEER)           return null  // consumable item — handled by stage logic
  if (oid === OID_BOTTLE)         return _spawnWeapon(createBottle(cfg), opoint, parent)
  if (oid === OID_LOUIS_ARMOUR_1) return _spawnWeapon(createLouisArmour(cfg, 10), opoint, parent)
  if (oid === OID_LOUIS_ARMOUR_2) return _spawnWeapon(createLouisArmour(cfg, 11), opoint, parent)
  if (oid === OID_GUARDIAN_WEAPON) return _spawnWeapon(createGuardianWeapon(cfg), opoint, parent)
  if (oid === OID_DRAGON_WEAPON)  return _spawnWeapon(createDragonWeapon(cfg), opoint, parent)
  if (oid === OID_HUNTER_ARROW)   return _spawnWeapon(createHunterArrow(cfg), opoint, parent)

  if (oid === OID_BLAST)  return _spawnEffect(createEffect(cfg, effect0Data, OID_BLAST), opoint)
  if (oid === OID_BLOOD)  return _spawnEffect(createEffect(cfg, effect1Data, OID_BLOOD), opoint)
  if (oid === OID_BROKEN) return _spawnBrokenWeapon(opoint, parent, cfg)

  const saData = SPECIAL_ATTACK_DATA[oid]
  if (saData) {
    return _spawnSpecialAttack(oid, saData, opoint, parent, cfg)
  }

  return null
}

// ── Private helpers ──────────────────────────────────────────────────────────

function _spawnWeapon0(
  opoint: OpointSpec,
  parent: InstanceType<typeof LivingObject>,
  cfg: ObjectConfig,
): InstanceType<typeof LivingObject> {
  const weapon = createBat(cfg)
  const ps = parent.physics
  const ox = ps.facing === 'right' ? opoint.x : -opoint.x
  weapon.setPosition(ps.x + ox, ps.y - opoint.y, ps.z)
  weapon.physics.velocityX = (ps.facing === 'right' ? 1 : -1) * (opoint.dvx ?? 0) + ps.velocityX
  weapon.physics.velocityY = -(opoint.dvy ?? 0)
  if (ps.facing === 'left') weapon.switchFacing('left')
  if (opoint.action !== undefined) weapon.trans.frame(opoint.action, 10)
  weapon.setup()
  return weapon as unknown as InstanceType<typeof LivingObject>
}

function _spawnSpecialAttack(
  oid: number,
  data: CharacterData,
  opoint: OpointSpec,
  parent: InstanceType<typeof LivingObject>,
  cfg: ObjectConfig,
): InstanceType<typeof LivingObject> {
  const sa = createSpecialAttack(cfg, data, oid)
  sa.init({
    z:           parent.physics.z,
    dir:         parent.physics.facing,
    opoint:      opoint as { x: number; y: number; action: number; facing: number; dvx?: number; dvy?: number },
    dvz:         opoint.dvz as number | undefined,
    pierceCount: opoint._pierceCount as number | undefined,
    bounceCount: opoint._bounceCount as number | undefined,
    parent:      parent,
  })
  return sa as unknown as InstanceType<typeof LivingObject>
}

function _spawnWeapon(
  weapon: InstanceType<typeof LivingObject>,
  opoint: OpointSpec,
  parent: InstanceType<typeof LivingObject>,
): InstanceType<typeof LivingObject> {
  const ps = parent.physics
  const ox = ps.facing === 'right' ? opoint.x : -opoint.x
  weapon.setPosition(ps.x + ox, ps.y - opoint.y, ps.z)
  weapon.physics.velocityX = (ps.facing === 'right' ? 1 : -1) * (opoint.dvx ?? 0) + ps.velocityX
  weapon.physics.velocityY = -(opoint.dvy ?? 0)
  if (ps.facing === 'left') weapon.switchFacing('left')
  if (opoint.action !== undefined) weapon.trans.frame(opoint.action, 10)
  weapon.setup()
  return weapon as unknown as InstanceType<typeof LivingObject>
}

function _spawnEffect(
  effect: ReturnType<typeof createEffect>,
  opoint: OpointSpec,
): InstanceType<typeof LivingObject> {
  effect.init({ x: opoint.x, y: opoint.y, z: opoint.dvz ?? 0, frame: opoint.action })
  return effect as unknown as InstanceType<typeof LivingObject>
}

function _spawnBrokenWeapon(
  opoint: OpointSpec,
  parent: InstanceType<typeof LivingObject>,
  cfg: ObjectConfig,
): InstanceType<typeof LivingObject> {
  const broken = createBrokenWeapon(cfg, brokenData, OID_BROKEN)
  const ps = parent.physics
  broken.init({
    x:    ps.x + (opoint.x ?? 0),
    y:    ps.y - (opoint.y ?? 0),
    z:    ps.z,
    dvx:  opoint.dvx ?? 0,
    dvy:  opoint.dvy ?? 0,
    dvz:  opoint.dvz ?? 0,
    frame: opoint.action ?? 0,
  })
  return broken as unknown as InstanceType<typeof LivingObject>
}

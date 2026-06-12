/**
 * character/states.ts — state machine for LF2 characters.
 *
 * Ported from F.LF/LF/character.js.
 * Each state function receives (event, K) where K is the current combo name.
 *
 * Events fired by LivingObject machinery:
 *   'frame'             — on every frame transition
 *   'TU'                — every 30 Hz tick
 *   'transit'           — after combos: run dynamics, weapon follow
 *   'combo'             — process player input for current state
 *   'post_combo'        — after combo processing
 *   'state_entry'       — entering a state
 *   'state_exit'        — leaving a state
 *   'fell_onto_ground'  — just hit the ground (vy > 0, y clamped)
 *   'fall_onto_ground'  — predicted ground collision this tick
 *   'setup'             — initial state setup
 */

import { lookup_abs }  from '../util.js'
import Global          from '../global.js'
import { SoundEngine } from '../../sound/SoundEngine.js'
import type { Character } from './index.js'  // type-only import to avoid circular dep
import type Weapon     from '../weapons/weapon.js'
import type { ItrSpec, CpointSpec, FrameData, StateMap } from '../../types/index.js'

/** Type-safe cast to access weapon actions from a held object. */
function weaponActions(obj: unknown): Weapon['actions'] {
  return (obj as Weapon).actions ?? {}
}

const gameplay = Global.gameplay

// Helpers that access `this` as `Character`
function self (thiz: unknown): Character { return thiz as Character }

export const states: StateMap = {

  // ── Generic — fires for ALL states ────────────────────────────────────────
  generic (event, K) {
    const $ = self(this)
    switch (event) {

      case 'frame': {
        $.opoint()
        break
      }

      case 'TU': {
        if (!$.stateUpdate('post_interaction')) $.post_interaction()

        const physics = $.physics

        if (physics.y === 0 && physics.velocityY === 0 && $.frame.N === 212 && $.frame.PN !== 211) {
          $.trans.frame(999)
        } else if (physics.y === 0 && physics.velocityY > 0) {
          const result = $.stateUpdate('fell_onto_ground')
          if (result) {
            $.trans.frame(result as number, 15)
          } else {
            physics.velocityY = 0
            $.mech.applyLinearFriction(
              lookup_abs(gameplay.friction.fell, physics.velocityX),
              lookup_abs(gameplay.friction.fell, physics.velocityZ)
            )
          }
        } else if (physics.y + physics.velocityY >= 0 && physics.velocityY > 0) {
          const result = $.stateUpdate('fall_onto_ground')
          if (result) {
            $.trans.frame(result as number, 15)
          } else {
            if ($.state() === 13) {
              // frozen — do nothing
            } else if ($.frame.N === 212) {
              $.trans.frame(215, 15)
            } else {
              $.trans.frame(219, 15)
            }
          }
        }

        // Health recovery (every 12 ticks)
        if ($.match.time.t % 12 === 0) {
          if ($.health.hp >= 0 && $.health.hp < ($.health.hpBound ?? 500)) {
            $.health.hp++
          }
        }

        // Heal effect
        if ($.health.hp >= 0 && $.effect.heal && $.effect.heal > 0) {
          if ($.match.time.t % 8 === 0) {
            const hs = 8
            if ($.health.hp + hs <= ($.health.hpBound ?? 500)) $.health.hp += hs
            $.effect.heal -= hs
            $.match.spawn_heal_number?.($.physics.x, $.physics.z, $.physics.y, hs)
          }
        }

        // MP recovery (every 3 ticks)
        if ($.match.time.t % 3 === 0) {
          if ($.health.mp < ($.health.mpFull ?? 500)) {
            $.health.mp += 1 + Math.floor(
              (($.health.hpFull ?? 500) - Math.min($.health.hp, $.health.hpFull ?? 500)) / 100
            )
          }
        }

        // Fall / bdefend recovery
        if (($.health.fall    ?? 0) > 0) $.health.fall!    += gameplay.recover.fall
        if (($.health.bdefend ?? 0) > 0) $.health.bdefend! += gameplay.recover.bdefend

        // Disappear counter (respawn animation) — counter.disappearCount >= 0 means active
        const dc = $.counter.disappearCount
        if (dc >= 0) {
          const ds = gameplay.effect.disappear
          $.counter.disappearCount++
          if (dc >= ds.shadow_blink && dc < ds.body_blink) {
            // shadow blink phase
            if (Math.floor(dc / 2) % 2 === 0) $.bodySprite.show()
            else                               $.bodySprite.hide()
          } else if (dc === ds.body_blink) {
            // body blink: fully reappear
            $.effect.blink   = true
            $.effect.timein  = 0
            $.effect.timeout = 30
            $.effect.super   = false
            $.bodySprite.show()
          } else if (dc > ds.body_blink) {
            // done — reset
            $.counter.disappearCount = -1
          }
        }

        // Dead blink counter (NPC death fade-out)
        const dbc = $.counter.deadBlinkCount
        if (dbc >= 0) {
          if (dbc === 0) {
            $.effect.blink = true
            $.counter.deadBlinkCount++
          } else if (dbc < 30) {
            $.counter.deadBlinkCount++
          } else {
            $.effect.blink = false
            $.bodySprite.hide()
            $.counter.deadBlinkCount = -1
            $.match.destroy_object($)
          }
        }

        // Combo buffer timeout
        $.comboBuffer.timeout--
        if ($.comboBuffer.timeout === 0) {
          switch ($.comboBuffer.combo) {
            case 'def': case 'jump': case 'att':
            case 'left-left': case 'right-right':
              $.comboBuffer.combo = null
          }
        }
        break
      }

      case 'transit':
        $.mech.tickPhysics()
        $.wpoint()
        break

      case 'combo':
        switch (K) {
          case 'left': case 'right':
          case 'left-left': case 'right-right':
            break
          default: {
            if (K === 'DJA' && $.transformCharacter &&
                ($.transformCharacter as Record<string, unknown>).isRudolfTransform) {
              $.id_update('revertTransform')
            }
            const tag = Global.combo_tag[K as string]
            if (tag && ($.frame.D as Record<string, unknown>)[tag]) {
              if (!$.id_update('genericCombo', K, tag)) {
                const dir = Global.combo_dir[K as string]
                if (dir) $.switchFacing(dir as 'left' | 'right')
                $.trans.frame(($.frame.D as Record<string, unknown>)[tag] as number, 11)
                return 1
              }
            }
          }
        }
        break

      case 'post_combo':
        $.pre_interaction()
        break

      case 'state_exit':
        switch ($.comboBuffer.combo) {
          case 'left-left': case 'right-right':
            $.comboBuffer.combo = null
        }
        break
    }
  },

  // ── State 0: standing ──────────────────────────────────────────────────────
  0 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'frame':
        if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
          $.trans.frame(12)
        }
        break

      case 'combo':
        switch (K) {
          case 'left': case 'right': case 'up': case 'down':
          case 'jump': case null: {
            const dx = $.con!.state['left'] !== $.con!.state['right']
            const dz = $.con!.state['up']   !== $.con!.state['down']
            if (dx || dz) {
              const bmp = $.data.bmp as Record<string, number>
              if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon'
                  && bmp.heavy_walking_speed !== 0) {
                if (dx) $.physics.velocityX = $.dirh() * bmp.heavy_walking_speed
                $.physics.velocityZ = $.dirv() * bmp.heavy_walking_speedz
              } else {
                if (K !== 'jump') $.trans.frame(5, 5)
                if (dx) $.physics.velocityX = $.dirh() * bmp.walking_speed
                $.physics.velocityZ = $.dirv() * bmp.walking_speedz
              }
            }
            break
          }
        }
        switch (K) {
          case 'left-left': case 'right-right':
            if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
              $.trans.frame(16, 10)
            } else {
              $.trans.frame(9, 10)
            }
            return 1
          case 'def':
            if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') return 1
            $.trans.frame(110, 10)
            return 1
          case 'jump': {
            if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
              if (!$.proper('heavy_weapon_jump')) return 1
              $.trans.frame($.proper('heavy_weapon_jump') as number, 10)
              return 1
            }
            $.trans.frame(210, 10)
            return 1
          }
          case 'att': {
            if ($.hold.obj) {
              const dx = $.con!.state['left'] !== $.con!.state['right']
              const holdType = ($.hold.obj as { type: string }).type
              const act = weaponActions($.hold.obj)
              if (holdType === 'heavyweapon') {
                $.trans.frame(50, 10); return 1
              } else if (act.justThrow) {
                $.trans.frame(act.standThrow ?? 45, 10); return 1
              } else if (dx && act.standThrow) {
                $.trans.frame(act.standThrow, 10); return 1
              } else if (act.standAttack !== undefined) {
                const frame = (act.standAttackAlt !== undefined && $.match.random() < 0.5)
                  ? act.standAttackAlt
                  : act.standAttack
                $.trans.frame(frame, 10); return 1
              }
            }
            const itrData = ($.data.frame[72]?.itr || $.data.frame[73]?.itr) as Record<string, unknown> | undefined
            if (itrData) {
              const vol = $.mech.buildVolume(itrData as unknown as ItrSpec)
              const hit = $.scene.query(vol, $, { tag: 'itr:6', notTeam: $.team })
              if (hit.length) { $.trans.frame(70, 10); return 1 }
            }
            $.trans.frame($.match.random() < 0.5 ? 60 : 65, 10)
            return 1
          }
        }
        break

      case 'TU':
        $.bodySprite.setYOffset(Math.sin($.match.time.t * 0.12) * 1.2)
        break

      case 'state_exit':
        $.bodySprite.setYOffset(0)
        break
    }
  },

  // ── State 1: walking ───────────────────────────────────────────────────────
  1 (event, K) {
    const $ = self(this)
    const bmp = $.data.bmp as Record<string, number>
    const dx = ($.con!.state['left'] ? -1 : 0) + ($.con!.state['right'] ? 1 : 0)
    const dz = ($.con!.state['up']   ? -1 : 0) + ($.con!.state['down']  ? 1 : 0)

    switch (event) {
      case 'frame':
        if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
          if (dx || dz) {
            $.frame_ani_oscillate(12, 15)
          } else {
            $.trans.setNext($.frame.N)
          }
        } else {
          $.frame_ani_oscillate(5, 8)
        }
        $.trans.setWait(bmp.walking_frame_rate - 1)
        break

      case 'TU': {
        const xfactor = 1 - ($.dirv() ? 1 : 0) * (2 / 7)
        if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon'
            && bmp.heavy_walking_speed !== 0) {
          if (dx) $.physics.velocityX = xfactor * $.dirh() * bmp.heavy_walking_speed
          $.physics.velocityZ = $.dirv() * bmp.heavy_walking_speedz
        } else {
          if (dx) $.physics.velocityX = xfactor * $.dirh() * bmp.walking_speed
          $.physics.velocityZ = $.dirv() * bmp.walking_speedz
          if (!dx && !dz && $.trans.next() !== 999) {
            $.trans.setNext(999)
            $.trans.setWait(1, 1, 2)
          }
        }
        break
      }

      case 'state_entry':
        $.trans.setWait(0)
        break

      case 'combo':
        if (dx !== 0 && dx !== $.dirh()) {
          $.switchFacing($.physics.facing === 'right' ? 'left' : 'right')
        }
        if (!dx && !dz && !$.statemem.released) {
          $.statemem.released = true
          $.mech.applyUnitFriction()
        }
        if (K) return states[0]!.call($, event, K)
        break
    }
  },

  // ── State 2: running ───────────────────────────────────────────────────────
  2 (event, K) {
    const $ = self(this)
    const bmp = $.data.bmp as Record<string, number>
    switch (event) {
      case 'frame':
        if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
          $.frame_ani_oscillate(16, 18)
        } else {
          $.frame_ani_oscillate(9, 11)
        }
        $.trans.setWait(bmp.running_frame_rate)
        // fall through to set velocity

      case 'TU': {
        const xfactor = 1 - ($.dirv() ? 1 : 0) * (1 / 7)
        if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
          $.physics.velocityX = xfactor * $.dirh() * bmp.heavy_running_speed
          $.physics.velocityZ = $.dirv() * bmp.heavy_running_speedz
        } else {
          $.physics.velocityX = xfactor * $.dirh() * bmp.running_speed
          $.physics.velocityZ = $.dirv() * bmp.running_speedz
        }
        break
      }

      case 'combo':
        switch (K) {
          case 'left': case 'right': case 'left-left': case 'right-right':
            if (K!.split('-')[0] !== $.physics.facing) {
              if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
                $.trans.frame(19, 10)
              } else {
                $.trans.frame(218, 10)
              }
              return 1
            }
            break

          case 'def':
            if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') return 1
            $.trans.frame(102, 10)
            return 1

          case 'jump':
            if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
              if (!$.proper('heavy_weapon_dash')) return 1
              $.trans.frame($.proper('heavy_weapon_dash') as number, 10)
              return 1
            }
            $.trans.frame(213, 10)
            return 1

          case 'att':
            if ($.hold.obj) {
              const holdType = ($.hold.obj as { type: string }).type
              const act = weaponActions($.hold.obj)
              if (holdType === 'heavyweapon') { $.trans.frame(50, 10); return 1 }
              const dx = $.con!.state['left'] !== $.con!.state['right']
              if (dx && act.runThrow) { $.trans.frame(act.runThrow, 10); return 1 }
              if (act.runAttack !== undefined) { $.trans.frame(act.runAttack, 10); return 1 }
            }
            $.trans.frame(85, 10)
            return 1
        }
        break
    }
  },

  // ── State 3: punch / jump-attack / run-attack ──────────────────────────────
  3 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'frame':
        if ($.frame.D.next === 999 && $.physics.y < 0) $.trans.setNext(212)
        if ($.frame.N === 253) $.id_update('state3_fly_crash')
        $.id_update('state3_frame')
        break
      case 'hit_stop':
        return $.id_update('state3_hit_stop') as number | boolean
      case 'frameForce':
        return $.id_update('state3_frameForce') as number | boolean
      case 'TU':
        break
    }
  },

  // ── State 4: jump / in-air ─────────────────────────────────────────────────
  4 (event, K) {
    const $ = self(this)
    const bmp = $.data.bmp as Record<string, number>
    switch (event) {
      case 'frame':
        $.statemem.frameTU = true
        if ($.frame.PN === 80 || $.frame.PN === 81) $.statemem.attlock = 2
        break

      case 'TU':
        if ($.statemem.frameTU) {
          $.statemem.frameTU = false
          if ($.frame.N === 212 && $.frame.PN === 211) {
            const dx = ($.con!.state['left'] ? -1 : 0) + ($.con!.state['right'] ? 1 : 0)
            $.physics.velocityX = dx * (bmp.jump_distance  - 1)
            $.physics.velocityZ = $.dirv() * (bmp.jump_distancez - 1)
            $.physics.velocityY = bmp.jump_height
          }
        }
        if ($.statemem.attlock) $.statemem.attlock = ($.statemem.attlock as number) - 1
        break

      case 'combo':
        if ((K === 'att' || $.con!.state['att']) && !$.statemem.attlock) {
          if ($.frame.N === 212) {
            if ($.hold.obj) {
              const dx = $.con!.state['left'] !== $.con!.state['right']
              const act = weaponActions($.hold.obj)
              if (dx && act.jumpThrow) {
                $.trans.frame(act.jumpThrow, 10)
              } else if (act.jumpAttack !== undefined) {
                $.trans.frame(act.jumpAttack, 10)
              }
            } else {
              $.trans.frame(80, 10)
            }
            return 1
          }
        }
        break
    }
  },

  // ── State 5: dash ──────────────────────────────────────────────────────────
  5 (event, K) {
    const $ = self(this)
    const bmp = $.data.bmp as Record<string, number>
    switch (event) {
      case 'state_entry':
        if (($.frame.PN >= 9 && $.frame.PN <= 11) || $.frame.PN === 215) {
          const dir = $.frame.N === 213 ? 1 : -1
          $.physics.velocityX = $.dirh() * (bmp.dash_distance  - 1) * dir
          $.physics.velocityZ = $.dirv() * (bmp.dash_distancez - 1)
          $.physics.velocityY = bmp.dash_height
        }
        break

      case 'combo':
        if (K === 'att' || $.con!.state['att']) {
          if ($.proper('dash_backattack') ||
              $.dirh() === ($.physics.velocityX > 0 ? 1 : -1)) {
            if ($.hold.obj) {
              const act = weaponActions($.hold.obj)
              if (act.dashAttack !== undefined) {
                $.trans.frame(act.dashAttack, 10)
              } else {
                $.trans.frame(90, 10)
              }
            } else {
              $.trans.frame(90, 10)
            }
            $.allowFacingFollowsInput = false
            if (K === 'att') return 1
          }
        }
        if (K === 'left' || K === 'right') {
          if (K !== $.physics.facing) {
            const movingForward = $.dirh() === ($.physics.velocityX > 0 ? 1 : -1)
            if (movingForward) {
              if ($.frame.N === 213) $.trans.frame(214, 0)
              if ($.frame.N === 216) $.trans.frame(217, 0)
              $.switchFacing(K as 'left' | 'right')
            } else {
              if ($.frame.N === 214) $.trans.frame(213, 0)
              if ($.frame.N === 217) $.trans.frame(216, 0)
              $.switchFacing(K as 'left' | 'right')
            }
            return 1
          }
        }
        break
    }
  },

  // ── State 6: rowing / back-roll ────────────────────────────────────────────
  6 (event, K) {
    const $ = self(this)
    const bmp = $.data.bmp as Record<string, number>
    switch (event) {
      case 'TU':
        if ($.frame.N === 100 || $.frame.N === 108) $.physics.velocityY = 0
        break
      case 'frame':
        if ($.frame.N === 100 || $.frame.N === 108) {
          $.trans.setWait(1)
          if ($.frame.N !== $.frame.PN) {
            $.physics.velocityY = bmp.rowing_height ?? -2
          }
        }
        break
      case 'fall_onto_ground':
        if ($.frame.N === 101 || $.frame.N === 109) return 215
        break
    }
  },

  // ── State 7: defending ─────────────────────────────────────────────────────
  7 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'frame':
        if ($.frame.N === 111) $.trans.incWait(4)
        break
    }
  },

  // ── State 8: broken defend ─────────────────────────────────────────────────
  8 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'frameForce': case 'TU_force':
        if ($.frame.D.dvx) {
          const movDir = $.physics.velocityX > 0 ? 1 : -1
          if (movDir !== $.dirh()) {
            const absVx = Math.abs($.physics.velocityX)
            const twoDir = 2 * movDir
            if ($.physics.y < 0 || absVx < ($.frame.D.dvx ?? 0)) {
              $.physics.velocityX = twoDir * ($.frame.D.dvx ?? 0)
            }
            if (($.frame.D.dvx ?? 0) < 0) $.physics.velocityX -= twoDir
          }
        }
        break
    }
  },

  // ── State 9: catching / throw lying man ───────────────────────────────────
  9 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'state_entry':
        $.statemem.stateTU = true
        $.statemem.counter = 43
        $.statemem.attacks = 0
        break

      case 'state_exit':
        $.catching = null
        $.physics.zOrderOffset = 0
        break

      case 'frame': {
        switch ($.frame.N) {
          case 123:  // successful attack hit
            $.statemem.attacks = ($.statemem.attacks as number) + 1
            $.statemem.counter = ($.statemem.counter as number) + 3
            $.trans.incWait(1)
            break
          case 233: case 234:
            $.trans.incWait(-1)
            break
          case 240:  // Rudolf transform cue
            $.id_update('rudolfTransform')
            break
        }
        // update held victim's position each frame
        const cp9 = $.frame.D.cpoint as CpointSpec | undefined
        if ($.catching && cp9) {
          const catchee = $.catching as Character
          catchee.caught_b(
            $.mech.toWorldPoint(cp9),
            cp9,
            $.physics.facing,
            $.dirv()
          )
        }
        break
      }

      case 'TU': {
        const catchee9 = $.catching as Character | null
        if (catchee9 && $.caught_cpointkind() === 1 && catchee9.caught_cpointkind() === 2) {
          if ($.statemem.stateTU) {
            $.statemem.stateTU = false
            const cp = $.frame.D.cpoint as CpointSpec | undefined
            if (cp?.injury) {
              const dmg = catchee9.hit(cp as ItrSpec, $,
                { x: $.physics.x, y: $.physics.y, z: $.physics.z }, null)
              if ($.attacked(dmg)) $.trans.incWait(1, 10, 99)
            }
            let cover = gameplay.default.cpoint.cover
            if (cp?.cover !== undefined) cover = cp.cover
            $.physics.zOrderOffset = (cover === 0 || cover === 10) ? 1 : -1
            if (cp?.dircontrol === 1) {
              if ($.con?.state['left'])  $.switchFacing('left')
              if ($.con?.state['right']) $.switchFacing('right')
            }
          }
        }
        break
      }

      case 'post_combo': {
        if ($.catching) $.statemem.counter = ($.statemem.counter as number) - 1
        if (($.statemem.counter as number) <= 0) {
          const notLastPunch = !($.frame.N === 122 && ($.statemem.attacks as number) === 4)
          if (notLastPunch && ($.frame.N === 121 || $.frame.N === 122)) {
            ;($.catching as Character).caught_release()
            $.trans.frame(999, 15)
          }
        }
        break
      }

      case 'combo': {
        const cp = $.frame.D.cpoint as CpointSpec | undefined
        switch (K) {
          case 'att':
            if (cp && (cp.taction || cp.aaction)) {
              const dx = $.con?.state['left'] !== $.con?.state['right']
              const dz = $.con?.state['up']   !== $.con?.state['down']
              if ((dx || dz) && cp.taction) {
                const tac = cp.taction
                if (tac < 0) {
                  $.switchFacing($.physics.facing === 'right' ? 'left' : 'right')
                  $.trans.frame(-tac, 10)
                } else {
                  $.trans.frame(tac, 10)
                }
                $.statemem.counter = ($.statemem.counter as number) + 10
              } else if (cp.aaction) {
                $.trans.frame(cp.aaction, 10)
              }
              const nextCp = ($.data.frame[$.trans.next()] as FrameData)
                .cpoint as CpointSpec | undefined
              if (nextCp) {
                ;($.catching as Character).caught_throw(nextCp, $.dirv())
              }
            }
            return 1  // absorb att — prevents re-fire
          case 'jump':
            if ($.frame.N === 121 && cp?.jaction) {
              $.trans.frame(cp.jaction, 10)
              return 1
            }
            break
        }
        break
      }
    }
  },

  // ── State 10: being caught ─────────────────────────────────────────────────
  10 (event, K) {
    const $ = self(this)
    const $ext = $ as unknown as Record<string, unknown>
    switch (event) {
      case 'state_exit':
        $.catching          = null
        $ext.caughtBHoldpoint = null
        $ext.caughtBCpoint    = null
        $ext.caughtBAdir      = null
        $ext.caughtBVdir      = null
        $ext.caughtThrowZ     = null
        break

      case 'frame':
        $.statemem.frameTU = true
        $.trans.setWait(99, 10, 99)
        break

      case 'TU': {
        if ($.frame.N === 135) $.physics.velocityY = 0

        const catcher10 = $.catching as Character | null
        if ($.caught_cpointkind() === 2 && catcher10 && catcher10.caught_cpointkind() === 1) {
          if ($.statemem.frameTU) {
            $.statemem.frameTU = false

            const holdpoint = $ext.caughtBHoldpoint as { x: number; y: number }
            const cpoint    = $ext.caughtBCpoint    as CpointSpec
            const adir      = $ext.caughtBAdir      as 'left' | 'right'

            if (cpoint?.vaction) $.trans.frame(cpoint.vaction, 22)

            if (cpoint?.throwvx) {
              // Being thrown — apply impulse velocities
              $.physics.velocityX = (adir === 'right' ? 1 : -1) * cpoint.throwvx
              if (cpoint.throwvy) $.physics.velocityY = cpoint.throwvy
              let dvz = cpoint.throwvz ?? 0
              if (dvz === gameplay.unspecified) dvz = 0
              if (dvz) $.physics.velocityZ = dvz
              const throwZ = $ext.caughtThrowZ as number | null
              $.physics.velocityZ *= throwZ != null ? throwZ : ($ext.caughtBVdir as number)

              $.caughtThrowInjury = cpoint.throwinjury !== undefined && cpoint.throwinjury !== gameplay.unspecified
                ? cpoint.throwinjury
                : gameplay.default.itr.throw_injury

              $.mech.setPosition(
                $.physics.x + $.physics.velocityX,
                $.physics.y + $.physics.velocityY * 2,
                $.physics.z + $.physics.velocityZ
              )
            } else {
              // Still held — align position to catcher's hold-point
              if (cpoint?.dircontrol === undefined) {
                if (cpoint?.cover && cpoint.cover >= 10) {
                  $.switchFacing(adir)
                } else {
                  $.switchFacing(adir === 'left' ? 'right' : 'left')
                }
              }
              const selfCp = $.frame.D.cpoint as { x: number; y: number } | undefined
              if (holdpoint && selfCp) $.mech.alignPosition(holdpoint, $.mech.toWorldPoint(selfCp))
              // Zero velocity: the grabbed character's position is driven entirely by the
              // catcher's cpoint each tick; gravity must not accumulate between snaps.
              $.physics.velocityX = 0
              $.physics.velocityY = 0
              $.physics.velocityZ = 0
            }
          }
        } else {
          if ($.catching) $.trans.frame(212, 10)
        }
        break
      }
    }
  },

  // ── State 11: injured ──────────────────────────────────────────────────────
  11 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'state_entry':
        $.trans.incWait(0, 20)
        break
      case 'frame':
        switch ($.frame.N) {
          case 221: case 223: case 225: $.trans.setNext(999); break
        }
        break
    }
  },

  // ── State 12: falling ──────────────────────────────────────────────────────
  12 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'frame':
        if (($.effect.dvy ?? 0) <= 0) {
          switch ($.frame.N) {
            case 180:
              $.trans.setNext(181)
              $.trans.setWait(lookup_abs(gameplay.fall.wait180, $.effect.dvy ?? 0))
              break
            case 181: {
              $.trans.setNext(182)
              let vy = Math.abs($.physics.velocityY)
              if ($.physics.velocityY === 0) { $.physics.velocityY = 5; vy = 5 }
              if      (vy <= 4) $.trans.setWait(2)
              else if (vy <  7) $.trans.setWait(3)
              else              $.trans.setWait(4)
              break
            }
            case 182: $.trans.setNext(183); break
            case 186:
              if ($.physics.velocityY === 0) $.physics.velocityY = 5
              $.trans.setNext(187)
              break
            case 187: $.trans.setNext(188); break
            case 188: $.trans.setNext(189); break
          }
        } else {
          switch ($.frame.N) {
            case 180: $.trans.setNext(185); $.trans.setWait(1); break
            case 186: $.trans.setNext(191); break
          }
        }
        break

      case 'fell_onto_ground':
      case 'fall_onto_ground': {
        if (($.caughtThrowInjury ?? 0) > 0) {
          $.injury($.caughtThrowInjury!)
          $.caughtThrowInjury = 0
        }
        SoundEngine.play('1/016')
        const bounceup = gameplay.character.bounceup
        if ($.mech.currentSpeed() > bounceup.limit.xy ||
            $.physics.velocityY > bounceup.limit.y) {
          $.mech.applyLinearFriction(
            lookup_abs(bounceup.absorb, $.physics.velocityX),
            lookup_abs(bounceup.absorb, $.physics.velocityZ)
          )
          $.physics.velocityY = -bounceup.y
          if ($.frame.N >= 203 && $.frame.N <= 206) return 185
          if ($.frame.N >= 180 && $.frame.N <= 185) return 185
          if ($.frame.N >= 186 && $.frame.N <= 191) return 191
        } else {
          if ($.frame.N >= 203 && $.frame.N <= 206) return 230
          if ($.frame.N >= 180 && $.frame.N <= 185) return 230
          if ($.frame.N >= 186 && $.frame.N <= 191) return 231
        }
        break
      }

      case 'combo':
        if ($.frame.N === 182 || $.frame.N === 188) {
          if (K === 'jump') {
            if (($.health.fall ?? 0) < gameplay.fall.KO && $.health.hp > 0) {
              $.trans.frame($.frame.N === 182 ? 100 : 108)
              if ($.physics.velocityX) $.physics.velocityX = 5 * ($.physics.velocityX > 0 ? 1 : -1)
              if ($.physics.velocityY === 0) $.physics.velocityY = 5
              if ($.physics.velocityZ) $.physics.velocityZ = 2 * ($.physics.velocityZ > 0 ? 1 : -1)
              return 1
            }
          }
        }
        return 1  // absorb all combos while falling
    }
  },

  // ── State 13: frozen ───────────────────────────────────────────────────────
  13 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'state_entry':
        $.physics.velocityX = 0
        $.physics.velocityZ = 0
        $.bodySprite.setTint(0x88CCFF)
        break
      case 'state_exit':
        $.bodySprite.clearTint()
        $.brokeneffect_create(212)
        break
    }
  },

  // ── State 14: lying / KO ───────────────────────────────────────────────────
  14 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'state_entry':
        $.health.fall    = 0
        $.health.bdefend = 0
        if ($.health.hp <= 0) {
          $.die()
          if ($.is_npc && $.counter) $.counter.deadBlinkCount = 0
        }
        break
      case 'state_exit':
        $.effect.timein  = 0
        $.effect.timeout = 30
        $.effect.blink   = true
        $.effect.super   = true
        break
    }
  },

  // ── State 15: stop-running / crouch / landing ──────────────────────────────
  15 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'frame':
        switch ($.frame.N) {
          case 19:
            if ($.hold.obj && ($.hold.obj as { type: string }).type === 'heavyweapon') {
              $.trans.frame(12)
            }
            break
          case 215:
            $.trans.incWait(-1)
            break
          case 219:
            if (!$.id_update('state15_crouch')) {
              switch ($.frame.PN) {
                case 105: $.mech.applyUnitFriction(); break
                case 216: case 90: case 91: case 92: $.trans.incWait(-1); break
              }
            }
            break
          case 54:
            if ($.frame.D.next === 999 && $.physics.y < 0) $.trans.setNext(212)
            break
          case 257:
            $.id_update('state1280_disappear')
            break
        }
        break

      case 'combo':
        if ($.frame.N === 215) {
          if (K === 'def') { $.trans.frame(102, 10); return 1 }
          if (K === 'jump') {
            const dx = ($.con!.state['left'] ? -1 : 0) + ($.con!.state['right'] ? 1 : 0)
            if (dx) {
              $.trans.frame(213, 10)
              $.switchFacing(dx === 1 ? 'right' : 'left')
            } else if ($.physics.velocityX === 0) {
              $.trans.incWait(2, 10, 99)
              $.trans.setNext(210, 10)
            } else if (($.physics.velocityX > 0 ? 1 : -1) === $.dirh()) {
              $.trans.frame(213, 10)
            } else {
              $.trans.frame(214, 10)
            }
            return 1
          }
        }
        break
    }
  },

  // ── State 16: injured 2 (dance of pain) ───────────────────────────────────
  16 (_event, _K) {},

  // ── State 18: burning ──────────────────────────────────────────────────────
  18 (event, K) {
    const $ = self(this)
    switch (event) {
      case 'state_entry':
        $.bodySprite.setTint(0xFF6622)
        break
      case 'state_exit':
        $.bodySprite.clearTint()
        break
      case 'frame':
        $.brokeneffect_create(302, 1)
        $.bodySprite.setTint(Math.floor(Date.now() / 80) % 2 === 0 ? 0xFF6622 : 0xFF3300)
        break
      case 'fall_onto_ground':
      case 'fell_onto_ground':
        $.brokeneffect_create(302)
        return states[12]!.call($, event, K) as number | boolean
    }
  },

  // ── State 19: character-specific run (e.g. Firen) ─────────────────────────
  19 (event, _K) {
    const $ = self(this)
    switch (event) {
      case 'TU':
        $.physics.velocityZ = $.dirv() * ($.data.bmp as Record<string, number>).running_speedz
        break
    }
  }
}

// States where the character may auto-rotate to face the input direction
export const statesFacingFollowsInput: Record<number, boolean> = {
  0: true,  1: true,  2: false, 3: false, 4: true,
  5: false, 6: false, 7: true,  8: false, 9: false,
  10: false, 11: false, 12: false, 13: false, 14: false,
  15: false, 16: false
}

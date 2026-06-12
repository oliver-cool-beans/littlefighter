/**
 * codec.ts — compact binary encoding for high-frequency game messages.
 *
 * Only state and input messages are encoded as binary; all lobby/chat/pause
 * control messages stay as JSON (they're infrequent enough that size doesn't matter).
 *
 * Bandwidth comparison (all objects ~6, 10 Hz state / ~8 Hz input):
 *   JSON  : state ~220 B × 10 + input ~36 B × 16  ≈ 2780 B/s
 *   Binary: state  56 B × 10 + input   6 B × 16  ≈  656 B/s  (~76 % reduction)
 *
 * State message layout  (8-byte header + N × 32-byte entity blocks):
 *   [0]      MSG_STATE (0x01)
 *   [1–4]    tick          uint32 big-endian
 *   [5]      entity count  uint8
 *   [6]      freezeFrames  uint8   (hitstop countdown from host)
 *   [7]      shakeSeverity uint8   (0=none 1=light 2=medium 3=heavy)
 *   Per entity (32 bytes):
 *     [0]    index       uint8   (netId — 0/1 = players, 2+ = weapons/projectiles)
 *     [1]    flags       uint8   (bit 0: facing — 1=right, 0=left)
 *     [2–3]  frame       uint16
 *     [4–5]  hp          uint16
 *     [6–7]  mp          uint16
 *     [8–11] x           float32
 *     [12–15]y           float32
 *     [16–19]z           float32
 *     [20–23]vx          float32
 *     [24–27]vy          float32
 *     [28–31]vz          float32
 *
 * Input message layout  (7 bytes total):
 *   [0]    MSG_INPUT (0x02)
 *   [1–4]  tick        uint32 big-endian
 *   [5]    playerIndex uint8   (sender's player index, for routing on host + peer CSP)
 *   [6]    keys        uint8   bitmask
 */

import type { EntityStateNet } from './types.js'

export const MSG_STATE = 0x01
export const MSG_INPUT = 0x02

const ENTITY_STRIDE = 32
const STATE_HDR     = 8   // type(1) + tick(4) + count(1) + freezeFrames(1) + shakeSeverity(1)

// ── State ─────────────────────────────────────────────────────────────────────

export function encodeState(tick: number, entities: EntityStateNet[], freezeFrames = 0, shakeSeverity = 0): ArrayBuffer {
  const buf = new ArrayBuffer(STATE_HDR + entities.length * ENTITY_STRIDE)
  const v   = new DataView(buf)
  v.setUint8(0,  MSG_STATE)
  v.setUint32(1, tick, false)
  v.setUint8(5,  entities.length)
  v.setUint8(6,  freezeFrames & 0xff)
  v.setUint8(7,  shakeSeverity & 0x03)
  let off = STATE_HDR
  for (const e of entities) {
    v.setUint8(off,       e.index)
    v.setUint8(off + 1,   (e.facing ?? 1) === 1 ? 1 : 0)
    v.setUint16(off + 2,  e.frame  ?? 0, false)
    v.setUint16(off + 4,  Math.min(65535, Math.max(0, e.hp ?? 0)), false)
    v.setUint16(off + 6,  Math.min(65535, Math.max(0, e.mp ?? 0)), false)
    v.setFloat32(off + 8,  e.x  ?? 0, false)
    v.setFloat32(off + 12, e.y  ?? 0, false)
    v.setFloat32(off + 16, e.z  ?? 0, false)
    v.setFloat32(off + 20, e.vx ?? 0, false)
    v.setFloat32(off + 24, e.vy ?? 0, false)
    v.setFloat32(off + 28, e.vz ?? 0, false)
    off += ENTITY_STRIDE
  }
  return buf
}

export function decodeState(buf: ArrayBuffer): { tick: number; entities: EntityStateNet[]; freezeFrames: number; shakeSeverity: number } {
  const v             = new DataView(buf)
  const tick          = v.getUint32(1, false)
  const count         = v.getUint8(5)
  const freezeFrames  = v.getUint8(6)
  const shakeSeverity = v.getUint8(7)
  const entities: EntityStateNet[] = []
  let off = STATE_HDR
  for (let i = 0; i < count; i++) {
    entities.push({
      index:  v.getUint8(off),
      facing: v.getUint8(off + 1) ? 1 : -1,
      frame:  v.getUint16(off + 2, false),
      hp:     v.getUint16(off + 4, false),
      mp:     v.getUint16(off + 6, false),
      x:      v.getFloat32(off + 8,  false),
      y:      v.getFloat32(off + 12, false),
      z:      v.getFloat32(off + 16, false),
      vx:     v.getFloat32(off + 20, false),
      vy:     v.getFloat32(off + 24, false),
      vz:     v.getFloat32(off + 28, false),
    })
    off += ENTITY_STRIDE
  }
  return { tick, entities, freezeFrames, shakeSeverity }
}

// ── Input ─────────────────────────────────────────────────────────────────────

export function encodeInput(tick: number, keys: number, playerIndex: number): ArrayBuffer {
  const buf = new ArrayBuffer(7)
  const v   = new DataView(buf)
  v.setUint8(0,  MSG_INPUT)
  v.setUint32(1, tick, false)
  v.setUint8(5,  playerIndex & 0xff)
  v.setUint8(6,  keys & 0xff)
  return buf
}

export function decodeInput(buf: ArrayBuffer): { tick: number; playerIndex: number; keys: number } {
  const v = new DataView(buf)
  return {
    tick:        v.getUint32(1, false),
    playerIndex: v.getUint8(5),
    keys:        v.getUint8(6),
  }
}

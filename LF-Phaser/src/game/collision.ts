/**
 * collision.ts — AABB rectangle-rectangle intersection tests.
 *
 * Ported from F.LF/core/collision.js (AMD wrapper stripped).
 * Only the rect and rect_flat functions are needed for bdy/itr overlap.
 */

/** Rectangle-rectangle intersect test using { left, top, right, bottom } form. */
export interface Rect {
  left: number
  top: number
  right: number
  bottom: number
}

export function rect(rect1: Rect, rect2: Rect): boolean {
  if (rect1.bottom < rect2.top)    return false
  if (rect1.top    > rect2.bottom) return false
  if (rect1.right  < rect2.left)   return false
  if (rect1.left   > rect2.right)  return false
  return true
}

/** Flat (scalar) version — avoids object allocation. */
export function rect_flat(
  r1l: number, r1t: number, r1r: number, r1b: number,
  r2l: number, r2t: number, r2r: number, r2b: number
): boolean {
  if (r1b < r2t) return false
  if (r1t > r2b) return false
  if (r1r < r2l) return false
  if (r1l > r2r) return false
  return true
}

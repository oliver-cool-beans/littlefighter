/**
 * util.ts — shared utility functions.
 * Ported from F.LF/core/util.js and F.LF/LF/util.js (AMD wrappers stripped).
 */

/** Convert target to an array.  Falsy → [].  Object → [obj].  Array → self. */
export function make_array<T>(target: T | T[] | null | undefined | false | 0 | ''): T[] {
  if (target) {
    if (target instanceof Array) return target
    return [target]
  }
  return []
}

/**
 * Look up a value in a threshold table using the absolute value of x.
 * Keys are numeric thresholds (ascending); returns the value for the first key ≥ |x|.
 */
export function lookup_abs(table: Record<string | number, number>, x: number): number {
  if (x < 0) x = -x
  let last = 0
  for (const i in table) {
    last = table[i]
    if (x <= Number(i)) return table[i]
  }
  return last
}

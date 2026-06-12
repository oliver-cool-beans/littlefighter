/**
 * AI/types.ts — shared types used by AI scripts and the MatchScene wiring.
 */

import type { MatchContext } from '../../types/index.js'
import type { LivingObject } from '../livingobject.js'

/** Extended match context that AI scripts depend on. */
export interface AIMatchContext extends MatchContext {
  /** Returns all currently living objects in the scene. */
  get_living_object(): LivingObject[]
}

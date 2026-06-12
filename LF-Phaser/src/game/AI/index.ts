/**
 * AI/index.ts — public API for the AI system.
 *
 * Exports the controller, interface, and available AI scripts.
 * Use createAI() to instantiate a script by name.
 */

export { AIController }  from './controller.js'
export { AIInterface }   from './interface.js'
export { EasyAI }    from './easy.js'
export { MediumAI }  from './medium.js'
export type { AIMatchContext } from './types.js'

import type { LivingObject } from '../livingobject.js'
import type { AIController } from './controller.js'
import type { AIMatchContext } from './types.js'
import { EasyAI }   from './easy.js'
import { MediumAI } from './medium.js'

export type AIScript = { TU(): void }

const AI_SCRIPTS: Record<string, new (self: LivingObject, match: AIMatchContext, controller: AIController) => AIScript> = {
  easy:   EasyAI,
  medium: MediumAI,
}

/**
 * Create an AI script instance by name.
 * Returns an EasyAI fallback if the name is unrecognised.
 */
export function createAI(
  scriptName: string,
  self:       LivingObject,
  match:      AIMatchContext,
  controller: AIController,
): AIScript {
  const Ctor = AI_SCRIPTS[scriptName.toLowerCase()] ?? EasyAI
  return new Ctor(self, match, controller)
}

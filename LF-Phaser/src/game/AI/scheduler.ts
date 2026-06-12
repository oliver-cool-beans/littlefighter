/**
 * AI/scheduler.ts — staggered AI tick budget.
 *
 * Distributes N AI scripts across multiple ticks so that only a fixed
 * budget of scripts runs per tick. With 100 AIs and budgetPerTick=8,
 * 13 buckets are created — each AI fires approximately once every 13 TUs
 * (≈0.43 s at 30 fps). That latency is imperceptible for CPU enemies
 * and keeps per-tick CPU cost bounded regardless of enemy count.
 */

import type { AIScript }     from './index.js'
import type { AIController } from './controller.js'

interface AIEntry {
  script:     AIScript
  controller: AIController
}

export class AIScheduler {
  private readonly buckets:      AIEntry[][]
  private          currentBucket = 0

  constructor(
    scripts:      AIScript[],
    controllers:  AIController[],
    budgetPerTick = 8,
  ) {
    const numBuckets = Math.max(1, Math.ceil(scripts.length / budgetPerTick))
    this.buckets = Array.from({ length: numBuckets }, () => [])
    scripts.forEach((script, i) => {
      this.buckets[i % numBuckets]!.push({ script, controller: controllers[i]! })
    })
  }

  /** Run one bucket of AI scripts for this tick, then advance to the next bucket. */
  tick(): void {
    const bucket = this.buckets[this.currentBucket]!
    for (const entry of bucket) {
      entry.script.TU()
      entry.controller.fetch()
    }
    this.currentBucket = (this.currentBucket + 1) % this.buckets.length
  }

  /** Add a new AI+controller pair into the smallest existing bucket. */
  add(script: AIScript, controller: AIController): void {
    let smallestIdx = 0
    for (let i = 1; i < this.buckets.length; i++) {
      if (this.buckets[i]!.length < this.buckets[smallestIdx]!.length) smallestIdx = i
    }
    this.buckets[smallestIdx]!.push({ script, controller })
  }

  /** Remove a script from whichever bucket it lives in. */
  remove(script: AIScript): void {
    for (const bucket of this.buckets) {
      const idx = bucket.findIndex(e => e.script === script)
      if (idx !== -1) {
        bucket.splice(idx, 1)
        return
      }
    }
  }

  get totalScripts(): number {
    return this.buckets.reduce((sum, b) => sum + b.length, 0)
  }
}

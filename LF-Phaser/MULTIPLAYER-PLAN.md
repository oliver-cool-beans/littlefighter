# LF2 Multiplayer Backend Plan

> Living document. Covers the server project (`LF-Server/`) and the client network module
> (`LF-Phaser/src/network/`).

---

## Architecture Decision Record

### Framework: PartyKit

**PartyKit** is a TypeScript-first serverless platform built on top of Cloudflare Durable
Objects. It removes all the boilerplate of raw DO authoring — no `wrangler.toml` binding
declarations, no `fetch()` WebSocket upgrade handler, no manual connection tagging — while
preserving full DO behaviour: edge-distributed, hibernation-safe, one instance per room.

| Feature | Raw Hono + DO | PartyKit |
|---|---|---|
| Room routing / code dispatch | ~40 lines in `index.ts` | Zero — rooms addressed by URL path |
| DO registration + wrangler bindings | ~15 lines `wrangler.toml` | Zero |
| WS upgrade + hibernation setup | `ctx.acceptWebSocket()` boilerplate | Automatic |
| Broadcast to room | Write yourself | `party.broadcast(msg, except?)` |
| Connection iteration | `ctx.getWebSockets(tag)` | `party.getConnections()` |
| Per-connection metadata | Manual tag management | `conn.setState()` / `conn.state` |
| Local dev | `wrangler dev` | `partykit dev` |
| Deploy | `wrangler deploy` | `partykit deploy` |

Alternatives evaluated and rejected:

| Option | Rejected reason |
|---|---|
| Colyseus | Stateful Node process; not serverless |
| Socket.io | Requires Node |
| Elysia | Bun-runtime-only — not Cloudflare-compatible |
| Fastify / Express | Node-only; require persistent server |
| Supabase Realtime | Postgres-backed pub/sub — unsuitable for 30 Hz game loop |
| Rivet | Managed lobbies-as-a-service; black-box infra, no DO-level control |

### Runtime: PartyKit (Cloudflare edge)

Under the hood PartyKit runs each room as a Durable Object at an edge node. Key properties:

- One `Party.Server` class instance = one game room; isolated by room ID
- `partykit dev` for local development on `:1999` with full hot-reload
- Globally edge-deployed; ~20–50 ms RTT from most regions
- Free tier covers all development usage; production pricing per-connection-minute

---

## Authentication

All lobby and match access is gated behind **Supabase Auth**. No anonymous connections are
permitted to a game room.

### How it works

1. The client obtains a short-lived Supabase JWT via the existing `supabase.auth.getSession()`
   call already present in `src/auth/supabase.ts`.
2. The JWT is attached to the WebSocket upgrade request as a query parameter:
   `wss://<host>/parties/gameroom/<roomCode>?token=<jwt>`
3. PartyKit's `onBeforeConnect(req)` hook fires **before** the WebSocket is accepted.
   The server extracts the token, calls `supabase.auth.getUser(token)`, and rejects the
   connection (`return new Response('Unauthorized', { status: 401 })`) if the token is
   invalid or expired.
4. On success, the verified `userId` and `displayName` are stored in `conn.setState()` —
   the `join` message is no longer needed to identify the player.

### Why query param, not a message

PartyKit's `onBeforeConnect` fires synchronously during the HTTP upgrade handshake, before
any WebSocket frames are exchanged. This is the only point where a `401` can close the
connection cleanly. A `join` message arriving after the upgrade cannot reject the connection
with an HTTP status code, so auth must happen at the upgrade layer.

### Token freshness

The client checks `session.expires_at` before connecting and calls
`supabase.auth.refreshSession()` if the token has less than 60 s remaining. The refreshed
token is used for the WS URL. No re-authentication is needed mid-match — a match lasts at
most a few minutes and the JWT has a guaranteed minimum 60 s lifetime at connect time.

---

## Server Authority & Client-Side Prediction

### Principle

The server is the single source of truth for all game state. The client **never** trusts its
own simulation output as final — it is only a prediction. Every HP value, position, velocity,
frame number, and hit result that the player sees is ultimately the server's answer.

### What runs where

| Component | Server (`party/`) | Client (`src/network/`) |
|---|---|---|
| Physics step (`applyGravity`, `applyFriction`, `clampToGround`) | ✅ authoritative | ✅ prediction only |
| Frame state machine (idle/walk/jump/attack transitions) | ✅ authoritative | ✅ prediction only |
| Collision & hit detection (bdy/itr AABB) | ✅ authoritative | ✅ prediction only |
| HP / MP mutation | ✅ authoritative | ❌ read-only from server state |
| Input reading | ❌ receives C2S `input` frames | ✅ local keyboard/pad |
| Rendering | ❌ headless | ✅ displays predicted + corrected state |

### Shared physics module

The physics + state machine code must be a **pure TypeScript module with zero framework
imports** so it can run identically in both environments:

```
LF-Server/party/physics/   ← authoritative copy (no Phaser, no DOM)
  worldStep.ts             ← gravity, friction, ground clamp
  stateMachine.ts          ← frame transitions driven by InputKey[]
  collision.ts             ← AABB bdy/itr tests
  types.ts                 ← EntityState, InputKey, PhysicsConstants

LF-Phaser/src/game/        ← existing client code (unchanged)
  mechanics.ts             ← already pure TS — prediction re-uses this directly
  character/index.ts       ← state machine — prediction re-uses this directly
  collision.ts             ← collision — prediction re-uses this directly
```

The server copy is a straight copy-paste of the client's pure modules. If a physics constant
or state transition changes in the client, it must be mirrored in the server copy. A future
phase can extract a shared package to enforce this; for v1 a manual sync is acceptable.

### Client-side prediction loop (per tick)

```
1. Read local input
2. Apply input to local Character instance  →  renders immediately (zero perceived lag)
3. Send { type: 'input', tick, keys } to server
4. Wait for server 'state' message
5. On receipt: compare server EntityState to local prediction
   a. If position delta < threshold  →  smooth-correct (lerp over 3–5 frames)
   b. If delta ≥ threshold (misprediction)  →  hard-snap to server state
6. HP / MP always hard-set from server state — never predicted
```

### Why HP is never predicted

HP changes are caused by hit detection on the server. The client does not know whether its
own attack connected until the server confirms it — predicting a hit that the server rejects
would cause a visible HP flicker. It is simpler and more correct to show HP only from
confirmed server state, accepting up to one `state` frame (~33 ms) of lag on HP updates.

### Cheating surface

Because all physics runs on the server, clients cannot manipulate their own position, HP, or
damage output by modifying local state. The server validates:
- `input` messages contain only legal `InputKey` values (whitelist)
- Entity positions are never accepted from clients — only inputs are
- HP is computed server-side; any client-sent HP value is ignored

---

## Wire Efficiency

A 30 Hz server means up to 30 `state` messages per second per client. Keeping each message
small reduces latency and PartyKit per-message costs.

### Input encoding — bitmask not array

The `input` message replaces `keys: InputKey[]` with a compact bitmask:

```ts
// 8 actions fit in one byte: left, right, up, down, attack, jump, defend, (spare)
type C2SMessage =
  | { type: 'input'; tick: number; keys: number }  // bitfield, not array
  | ...
```

A typical input frame is 2–4 bytes of payload vs. a variable-length JSON array.

### State message — send only what changed

The server tracks the last state it sent to each connection. A `state` message includes only
entities whose fields differ from the previously sent snapshot:

```ts
interface EntityState {
  index:   number       // always included (selector)
  // remaining fields: omitted if unchanged since last broadcast
  x?:      number
  y?:      number
  z?:      number
  vx?:     number
  vy?:     number
  vz?:     number
  facing?: 1 | -1
  frame?:  number
  hp?:     number
  mp?:     number
}
```

During an airborne sequence most ticks only change `x`, `y`, `vx`, `vy` — the message
contains 5 fields instead of 11. HP and MP are omitted every tick except when they change.

### No heartbeat messages

Latency probing uses `ping`/`pong` only when the client explicitly requests it (e.g. before
a match starts to measure RTT for display). There are no server-initiated heartbeat frames
during a match — the 30 Hz `state` stream is itself proof the connection is alive.

---

## Repository Layout

```
littlefighter/
 ├── LF-Phaser/          ← existing client (untouched by server work)
 │   └── src/network/    ← NEW: client-side network module (Phase N-4)
 └── LF-Server/          ← NEW: PartyKit project
     ├── partykit.json
     ├── package.json
     ├── tsconfig.json
     └── party/
         ├── index.ts        ← Party.Server class (GameRoom)
         ├── protocol.ts     ← All WS message types (canonical source of truth)
         └── physics/        ← Authoritative copy of pure physics modules
             ├── worldStep.ts
             ├── stateMachine.ts
             ├── collision.ts
             └── types.ts
```

---

## Protocol Specification

All messages are UTF-8 JSON strings with a `type` discriminant, serialisable to plain objects.

### Client → Server (`C2SMessage`)

```ts
type C2SMessage =
  | { type: 'join';      displayName: string }   // userId comes from verified JWT, not message
  | { type: 'character'; characterId: number }
  | { type: 'ready' }
  | { type: 'input';     tick: number; keys: number }   // keys is a bitmask
  | { type: 'ping';      timestamp: number }
```

- **`join`** — sent immediately after WS connect; provides the display name (identity comes
  from the JWT verified in `onBeforeConnect`).
- **`character`** — player announces their character selection.
- **`ready`** — player marks themselves ready to start.
- **`input`** — one input frame per physics tick (30 Hz); `tick` is the client's local tick
  counter; `keys` is a bitmask of the 8 possible actions.
- **`ping`** — latency probe; server echoes as `pong`.

### Server → Client (`S2CMessage`)

```ts
type S2CMessage =
  | { type: 'lobby';     code: string; players: PlayerSlot[]; status: LobbyStatus }
  | { type: 'countdown'; seconds: number }
  | { type: 'start';     seed: number; playerIndex: 0 | 1 }
  | { type: 'state';     tick: number; entities: EntityState[] }
  | { type: 'end';       winner: 0 | 1 }
  | { type: 'pong';      timestamp: number; serverTime: number }
  | { type: 'error';     code: string; message: string }
```

- **`lobby`** — broadcast whenever player list or status changes.
- **`countdown`** — sent every second during the 3-second countdown.
- **`start`** — signals match begin; includes a shared `seed` for deterministic RNG and
  `playerIndex` so each client knows which entity they control.
- **`state`** — authoritative game state snapshot after each server tick (30 Hz).
- **`end`** — match over; winner index.
- **`pong`** — echoes client `timestamp` plus current server wall-clock for clock sync.

### Shared sub-types

```ts
type LobbyStatus =
  | 'waiting'    // host created room; awaiting second player
  | 'ready'      // all slots filled; host can press Start
  | 'countdown'  // 3-second countdown running
  | 'playing'    // match in progress
  | 'finished'   // match over

interface PlayerSlot {
  index:       0 | 1
  displayName: string
  characterId: number | null   // null = not yet selected
  ready:       boolean
}

interface EntityState {
  index:   number      // player index (0 or 1) — always present
  // remaining fields only sent when changed since last broadcast
  x?:      number
  z?:      number
  y?:      number
  vx?:     number
  vy?:     number
  vz?:     number
  facing?: 1 | -1
  frame?:  number      // LF2 pic number
  hp?:     number
  mp?:     number
}
```

---

## Lobby Lifecycle (Server State Machine)

```
WAITING ──► READY ──► COUNTDOWN (3 s) ──► PLAYING ──► FINISHED
  │                                           │
  └───────────── player disconnect ◄──────────┘
                  (return to WAITING)
```

Rules:
1. Any authenticated player can create a lobby by connecting to a new room ID.
2. Only the **host** (first player to connect) can trigger READY → COUNTDOWN.
3. When the **last player disconnects** at any status, the DO cancels any running alarm,
   clears all in-memory state, and deletes its `party.storage` checkpoint. The Durable
   Object then hibernates immediately — no timer needed, no lingering resource cost.
4. A disconnect during PLAYING pauses the loop and returns to WAITING. The opponent has
   30 s to reconnect before the room is torn down as if everyone left.
5. The DO is self-contained; it never needs an external "close room" API call.

---

## Database (Prisma)

All persistent data — match history, player stats, friend relationships — is managed by
**Prisma ORM** backed by a **Prisma Postgres** database. Live match state (physics, inputs,
current frame) is never written to the database; it lives only in the Durable Object's
in-memory state for the duration of the match.

### What is stored

| Table | Purpose |
|---|---|
| `User` | Supabase `userId`, display name, created-at |
| `Match` | Completed match record: winner, duration, stage, created-at |
| `MatchPlayer` | Join: `Match` ↔ `User` with characterId, final HP, result (`win`/`loss`) |

### Schema location

```
LF-Server/
  prisma/
    schema.prisma    ← Prisma schema (single source of truth)
    migrations/      ← generated by `prisma migrate dev`
```

### Runtime access

The `GameRoom` DO connects to Prisma Postgres via **Prisma Accelerate** (the edge-compatible
connection pool). The standard Prisma Client cannot open a direct TCP connection from a
Cloudflare Worker; Accelerate provides an HTTP-based adapter that works in the edge runtime.

```ts
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())
```

The `DATABASE_URL` and `PRISMA_ACCELERATE_URL` secrets are set in PartyKit's environment
(`.env` locally; `partykit env add` for production).

### When writes happen

- On `status → FINISHED`: `GameRoom` writes one `Match` row and two `MatchPlayer` rows.
- No writes during the match — all 30 Hz state is transient.

---

## `GameRoom` (PartyKit Server)

### Storage

In-memory state only during a live match. PartyKit's underlying DO storage
(`party.storage`) is used solely to checkpoint lobby metadata (player names, character
selections, room code) so late reconnects can restore context without a fresh `join` message.
This checkpoint is **deleted** when the last connection closes, freeing all DO storage
immediately. All persistent player/match data goes to Prisma (see Database section above).

### Connections

PartyKit tracks connections automatically. Each `conn` object carries `conn.setState()` /
`conn.state` for per-connection metadata (e.g. `{ playerIndex: 0, displayName: 'Oliver' }`).
Broadcasting is `party.broadcast(msg, [skipId])` — no manual socket iteration needed.

### Authoritative game loop

PartyKit exposes `party.storage.setAlarm()` (wrapping the underlying DO Alarm API):

```
onAlarm() → process input buffers → advance one tick → broadcast state → reschedule alarm
```

Alarm period: `33 ms` (≈ 30 Hz, matching `GC.framerate`).

The server maintains the complete authoritative game state and runs the full physics stack
(gravity, friction, ground clamp), full frame state machine (all state transitions), and full
collision + hit detection on every tick. On each alarm:
1. Read all buffered input frames received since the last tick.
2. Run frame state machine for each entity (transitions driven by inputs).
3. Advance each entity's physics one step (`worldStep`).
4. Run bdy/itr collision detection; apply hit results (damage, knockback, HP mutation).
5. Broadcast `state` to all connected clients.
6. Reschedule the next alarm.

**Input buffering** — 2-tick deep buffer per player; repeat-last-frame on missing packet
(delay-tolerant, consistent with the original F.LF `verify` system; no rollback for v1).

---

## Client Network Module (`src/network/`)

Lives in `LF-Phaser/src/network/`. Communicates with the rest of the app exclusively through
the existing `UIEventBus` (mitt) — **no direct coupling to Phaser scenes or React components**.

```
src/network/
  index.ts           ← barrel: re-exports public API
  types.ts           ← mirrors server protocol.ts (copy-on-change)
  NetworkClient.ts   ← WS connection lifecycle; reconnect backoff
  LobbyManager.ts    ← create/join room; player-list state; emits bus events
  InputSender.ts     ← hooks into controller tick; sends C2S input frames
  StateReceiver.ts   ← applies authoritative server state; reconciles predictions
  Predictor.ts       ← runs local physics + state machine tick for client-side prediction
```

### Bus events added for network

```ts
// React → network
'net:create-lobby':  { displayName: string; characterId: number }
'net:join-lobby':    { code: string; displayName: string; characterId: number }
'net:ready':         void
'net:disconnect':    void

// network → React / Phaser
'net:lobby-update':  { code: string; players: PlayerSlot[]; status: LobbyStatus }
'net:countdown':     { seconds: number }
'net:match-start':   { seed: number; playerIndex: 0 | 1 }
'net:state-update':  { tick: number; entities: EntityState[] }
'net:match-end':     { winner: 0 | 1 }
'net:error':         { message: string }
```

### Client-side prediction & reconciliation

During a networked match the client runs the **full physics + state machine locally** on every
tick for both characters, purely as a prediction for responsive rendering:

- **Local player** — input is applied immediately to the local `Character` before the server
  confirms it. When the server `state` arrives, the predicted position is compared to the
  authoritative one:
  - Small delta (< 8 px) → smooth-correct over 3–5 frames (lerp)
  - Large delta (≥ 8 px, e.g. a hit caused knockback) → hard-snap to server state
- **Remote player** — predicted by replaying the opponent's last known inputs through the
  local physics step. On each `state` message the actual server position overrides the
  prediction (same lerp/snap thresholds).
- **HP / MP** — never predicted. Both bars are updated only from `state` messages.
  This eliminates HP flicker from mispredicted hit outcomes.

`Predictor.ts` owns the local simulation. `StateReceiver.ts` owns reconciliation. Neither
module imports Phaser — they work only with `EntityState` plain objects and the shared
pure physics functions already in `src/game/`.

---

## Phases

### Phase N-1 — Server Scaffold

**Goal**: `LF-Server/` project builds and `partykit dev` runs locally on `:1999`.

Tasks:
- [ ] `LF-Server/package.json` — `partykit` dep, `"main": "party/index.ts"` entry
- [ ] `LF-Server/partykit.json` — `{ "name": "lf2-server", "main": "party/index.ts" }`
- [ ] `LF-Server/tsconfig.json` — `target: "ES2022"`, types include `partykit/server`
- [ ] `LF-Server/party/protocol.ts` — full type definitions from Protocol Specification above
- [ ] `LF-Server/party/index.ts` — skeleton `GameRoom` class:
  ```ts
  import type * as Party from 'partykit/server'
  export default class GameRoom implements Party.Server {
    constructor(readonly room: Party.Room) {}
    onConnect(conn: Party.Connection) {}
    onMessage(message: string, sender: Party.Connection) {}
    onClose(conn: Party.Connection) {}
  }
  ```

**Test**: `partykit dev` starts. `wscat -c ws://localhost:1999/parties/gameroom/TEST` connects
without error.

---

### Phase N-2 — Lobby State Machine

**Goal**: Any authenticated player can create and join a room; last-player-out closes it.

Tasks:
- [ ] `onBeforeConnect(req)` — extract `?token=` query param; call
  `supabase.auth.getUser(token)`; return `401` response if invalid; store verified
  `userId` in a short-lived map keyed by connection ID for `onConnect` to consume
- [ ] `onConnect` — assign `playerIndex` (0 or 1); reject a third connection with a
  close frame; store `{ userId, playerIndex }` in `conn.setState()`; persist slot in
  `party.storage`; broadcast `lobby` message to all
- [ ] `onMessage` — dispatch on `msg.type`:
  - `join` → store `displayName` in `conn.setState()`; broadcast `lobby`
  - `character` → store `characterId`; broadcast `lobby`
  - `ready` → mark slot ready; if both ready broadcast `lobby { status: 'ready' }`
  - `ping` → reply `{ type: 'pong', timestamp: msg.timestamp, serverTime: Date.now() }`
- [ ] `onClose` — clear the vacated slot; if **no connections remain**: cancel alarm,
  call `party.storage.deleteAll()` to free DO storage, skip further processing;
  otherwise broadcast `lobby { status: 'waiting' }` so the remaining player sees the room
  is open again
- [ ] Lobby status transitions: `WAITING` → `READY` when both slots filled and characters selected

**Test**: two `wscat` connections to the same room ID. First receives `status: waiting`; second
connection triggers `status: ready` on both sockets.

---

### Phase N-3 — Authoritative Game Loop

**Goal**: Server runs the full physics + state machine + collision stack and broadcasts
authoritative `state` at 30 Hz.

Tasks:
- [ ] `LF-Server/party/physics/types.ts` — `EntityState`, `InputKey`, `PhysicsConstants`
  (verbatim port of the constants from `src/game/global.ts`; zero Phaser imports)
- [ ] `LF-Server/party/physics/worldStep.ts` — port of `mechanics.ts` pure functions
  (`applyGravity`, `applyFriction`, `clampToGround`); zero Phaser imports
- [ ] `LF-Server/party/physics/stateMachine.ts` — port of `character/states.ts` frame
  transition logic, driven by `InputKey[]`; zero Phaser imports
- [ ] `LF-Server/party/physics/collision.ts` — port of `collision.ts` AABB tests plus
  hit application (damage, knockback, HP mutation)
- [ ] Host triggers `READY → COUNTDOWN` via `{ type: 'ready' }` message; server broadcasts
  3-second countdown then sends `{ type: 'start', seed, playerIndex }` to each connection
- [ ] `onAlarm()` — full tick: state machine → worldStep → collision → broadcast `state`
  → reschedule via `this.room.storage.setAlarm(Date.now() + 33)`
- [ ] Input buffer per player (2-tick deep); repeat-last-frame on missing packet
- [ ] `end` message broadcast when `hp ≤ 0`; alarm cancelled; status → `FINISHED`

**Test**: two-tab smoke test — observe `state` messages arriving at ~30 Hz in DevTools
WebSocket inspector for both tabs.

---

### Phase N-4 — Client Integration

**Goal**: `OnlineLobbyScreen` connects to the real backend; a networked match plays.

Tasks:
- [ ] `src/network/types.ts` — copy `C2SMessage`, `S2CMessage`, `PlayerSlot`, etc. from
  `LF-Server/party/protocol.ts`
- [ ] `src/network/NetworkClient.ts`
  - Manages one `WebSocket` instance; URL pattern:
    `wss://<host>/parties/gameroom/<roomCode>?token=<supabaseJwt>`
  - Fetches fresh Supabase JWT before connecting; refreshes if expiry < 60 s
  - Reconnect with exponential backoff (max 5 retries, re-fetching JWT each attempt)
  - Dispatches parsed `S2CMessage` objects to handlers
  - Exposes `send(msg: C2SMessage): void`
- [ ] `src/network/LobbyManager.ts`
  - Listens for `net:create-lobby` / `net:join-lobby` bus events
  - Generates room code client-side (`crypto.randomUUID()` slice) for `create`; uses
    provided code for `join`
  - Connects `NetworkClient`; sends `join` + `character` on open
  - Emits `net:lobby-update`, `net:countdown`, `net:match-start` from incoming messages
- [ ] `src/network/InputSender.ts`
  - Hooks into `MatchScene._tick()` post-physics
  - Sends `{ type: 'input', tick, keys }` each local tick during networked match
- [ ] `src/network/Predictor.ts`
  - Each local tick: run the full physics + state machine step for **both** entities using
    each player's last known inputs, re-using `src/game/mechanics.ts`,
    `src/game/character/`, and `src/game/collision.ts` directly (no copies needed)
  - Exposes `predictedState(index): EntityState` consumed by `StateReceiver`
- [ ] `src/network/StateReceiver.ts`
  - On `state` messages: reconcile each entity against `Predictor.predictedState()`
  - Position delta < 8 px → lerp correction over 4 frames
  - Position delta ≥ 8 px → hard-snap to server state
  - HP / MP → always hard-set from server state, never predicted
- [ ] `src/network/index.ts` — barrel; `initNetwork()` wires all bus listeners on startup
- [ ] `src/main.ts` — call `initNetwork()` after Phaser + React boot
- [ ] `OnlineLobbyScreen.tsx` — replace stub with real create/join UI wired to bus
- [ ] `MatchScene.ts` — honour `net:match-start`; skip local physics for remote player slot
- [ ] `VITE_PARTYKIT_HOST` env var in `.env.local` defaulting to `localhost:1999`

**Test**: full end-to-end in two browser tabs against `partykit dev`. Characters move, attacks
land, HP decreases on both screens.

---

### Phase N-5 — Production Deploy

**Goal**: live at a public URL; client points at it.

Tasks:
- [ ] `LF-Server/prisma/schema.prisma` — define `User`, `Match`, `MatchPlayer` models
- [ ] `npx prisma migrate dev` — generate and apply initial migration
- [ ] `npx prisma generate --no-engine` — generate edge-compatible Prisma Client
- [ ] `LF-Server/package.json` — add `@prisma/client`, `@prisma/extension-accelerate`
- [ ] `LF-Server/party/db.ts` — export singleton `prisma` client with Accelerate extension
- [ ] `GameRoom.onAlarm()` — on `FINISHED`: write `Match` + `MatchPlayer` rows via `prisma`
- [ ] `partykit deploy` — publishes to `lf2-server.<account>.partykit.dev`
- [ ] Set `VITE_PARTYKIT_HOST` in Cloudflare Pages env to the deployed host
- [ ] Auth integration: `onBeforeConnect` already verifies Supabase JWT at connection time
  (implemented in Phase N-2); confirm it rejects expired/forged tokens in production
- [ ] Add `DATABASE_URL` and `PRISMA_ACCELERATE_URL` secrets: `partykit env add`
- [ ] Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` secrets: `partykit env add`
- [ ] Smoke-test: two devices on different networks; confirm sub-200 ms latency on state frames
- [ ] Verify match record written to DB after a completed match: `prisma studio` or direct query

---

## External Dependencies

| Package | Location | Purpose |
|---|---|---|
| `partykit` | `LF-Server` | Server framework + local dev + deploy CLI |
| `prisma` | `LF-Server` devDep | Schema management, migrations, client generation |
| `@prisma/client` | `LF-Server` | Generated ORM client (edge build) |
| `@prisma/extension-accelerate` | `LF-Server` | HTTP adapter for edge runtime |
| `mitt` | `LF-Phaser` (already installed) | Bus — no new dep needed |
| `@supabase/supabase-js` | `LF-Server` (Phase N-5 only) | JWT verification on server |

No new client dependencies — `NetworkClient.ts` uses the native browser `WebSocket` API.
Room URL pattern: `wss://<VITE_PARTYKIT_HOST>/parties/gameroom/<roomCode>`.

---

## Security Considerations

- Room codes are 6-character random strings (~2 billion combinations); brute-force is
  rate-limited by Cloudflare's built-in per-IP request limits (no extra code needed).
- JWT verification in Phase N-5 ensures only authenticated Supabase users can join rooms.
- Server is authoritative for all game state — clients cannot inject `state` messages or
  manipulate HP/physics directly.
- Input messages are range-validated on the server before being fed into the physics step.
- Persistent data (match records, player stats) is written only after a match completes —
  never during a live tick — so a DO crash mid-match loses no database state.

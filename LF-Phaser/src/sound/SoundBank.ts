/**
 * SoundBank — maps semantic sound IDs and raw frame-data IDs to Howler
 * sprite entries.
 *
 * The LF2_19 soundpack is a single audio sprite file.  Frame data references
 * sounds as '1/NNN' (pack 1, sprite NNN).  Semantic IDs map to the same
 * sprite entries via SEMANTIC_MAP.
 *
 * Observed sound-to-event mapping derived from character data:
 *   002        — hit impact / block thud (posteffect, hit-received)
 *   003 / 004  — running foot-step sounds (state 2)
 *   007        — punch/kick swing (state 3 attacks)
 *   008        — heavy attack swing (state 3 combos)
 *   009        — dash / land burst (state 15 entry)
 *   012        — landing / stop (state 15)
 *   016        — body-hits-ground thud (state 12 fell_onto_ground)
 *   017        — jump launch (state 4 / 6)
 *   042        — catch / grab sound (state 17)
 *   048        — energy / projectile (state fire frames)
 *   095        — throw release
 *   031        — pick-up weapon sound
 *   m_ok       — UI confirm
 *   m_cancel   — UI cancel / cursor move
 *   m_pass     — stage music loop
 */

/** Howler sprite entry: [offset_ms, duration_ms] */
type SpriteEntry = [number, number, boolean?]

function toSprite(start: number, end: number, loop = false): SpriteEntry {
  return [Math.round(start * 1000), Math.round((end - start) * 1000), loop]
}

/**
 * Full sprite map for the soundpack.  Keys match the numeric IDs in
 * public/sound/soundpack.js (stringified with leading zeros).
 */
export const SOUNDPACK_SPRITE: Record<string, SpriteEntry> = {
  '001': toSprite(0,   0.267),
  '002': toSprite(2,   2.368),
  '003': toSprite(4,   4.220),
  '004': toSprite(6,   6.251),
  '005': toSprite(8,   8.979),
  '006': toSprite(10, 10.388),
  '007': toSprite(12, 12.095),
  '008': toSprite(14, 14.143),
  '009': toSprite(16, 16.337),
  '010': toSprite(18, 18.260),
  '011': toSprite(20, 20.170),
  '012': toSprite(22, 22.095),
  '013': toSprite(24, 24.244),
  '014': toSprite(26, 26.550),
  '015': toSprite(28, 28.162),
  '016': toSprite(30, 30.369),
  '017': toSprite(32, 32.685),
  '018': toSprite(34, 34.541),
  '019': toSprite(36, 36.710),
  '020': toSprite(38, 38.761),
  '021': toSprite(40, 40.893),
  '022': toSprite(42, 42.327),
  '023': toSprite(44, 44.308),
  '024': toSprite(46, 46.269),
  '025': toSprite(48, 48.202),
  '026': toSprite(50, 50.538),
  '027': toSprite(52, 52.361),
  '028': toSprite(54, 54.732),
  '029': toSprite(56, 56.435),
  '030': toSprite(58, 59.007),
  '031': toSprite(61, 62.123),
  '032': toSprite(64, 64.273),
  '033': toSprite(66, 66.493),
  '034': toSprite(68, 68.425),
  '035': toSprite(70, 70.766),
  '036': toSprite(72, 73.034),
  '037': toSprite(75, 75.655),
  '038': toSprite(77, 77.080),
  '039': toSprite(79, 79.240),
  '040': toSprite(81, 82.236),
  '041': toSprite(84, 84.369),
  '042': toSprite(86, 86.484),
  '043': toSprite(88, 88.619),
  '044': toSprite(90, 90.547),
  '045': toSprite(92, 92.864),
  '046': toSprite(94, 94.602),
  '047': toSprite(96, 96.623),
  '048': toSprite(98, 98.569),
  '049': toSprite(100, 101.492),
  '050': toSprite(103, 104.289),
  '051': toSprite(106, 106.539),
  '052': toSprite(108, 108.876),
  '053': toSprite(110, 110.521),
  '054': toSprite(112, 113.031),
  '055': toSprite(115, 115.968),
  '056': toSprite(117, 117.418),
  '057': toSprite(119, 119.415),
  '058': toSprite(121, 121.972),
  '059': toSprite(123, 124.083),
  '060': toSprite(126, 126.419),
  '061': toSprite(128, 128.588),
  '062': toSprite(130, 131.776),
  '063': toSprite(133, 134.161),
  '064': toSprite(136, 137.384),
  '065': toSprite(139, 140.096),
  '066': toSprite(142, 143.370),
  '067': toSprite(145, 146.414),
  '068': toSprite(148, 149.212),
  '069': toSprite(151, 151.116),
  '070': toSprite(153, 154.633),
  '071': toSprite(156, 157.837),
  '072': toSprite(159, 159.741),
  '073': toSprite(161, 163.551),
  '074': toSprite(165, 165.741),
  '075': toSprite(167, 167.527),
  '076': toSprite(169, 169.487),
  '077': toSprite(171, 171.975),
  '078': toSprite(173, 175.454),
  '079': toSprite(177, 177.472),
  '080': toSprite(179, 179.670),
  '081': toSprite(181, 181.523),
  '082': toSprite(183, 183.479),
  '083': toSprite(185, 185.404),
  '084': toSprite(187, 187.523),
  '085': toSprite(189, 189.523),
  '086': toSprite(191, 191.988),
  '087': toSprite(193, 194.642),
  '088': toSprite(196, 196.505),
  '089': toSprite(198, 199.091),
  '090': toSprite(201, 203.753),
  '091': toSprite(205, 205.759),
  '092': toSprite(207, 207.891),
  '093': toSprite(209, 210.577),
  '094': toSprite(212, 212.232),
  '095': toSprite(214, 214.726),
  '096': toSprite(216, 216.314),
  '097': toSprite(218, 218.830),
  '098': toSprite(220, 220.330),
  '099': toSprite(222, 222.494),
  '100': toSprite(224, 224.805),
  '101': toSprite(226, 226.441),
  '102': toSprite(228, 230.236),
  'm_cancel': toSprite(232, 232.159),
  'm_end':    toSprite(234, 237.274),
  'm_join':   toSprite(239, 239.775),
  'm_ok':     toSprite(241, 241.932),
  'm_pass':   toSprite(243, 251.609, true),
}

/**
 * R-LF2 extra sounds (103–116).
 * Served from public/sound/rlf2sounds.ogg / rlf2sounds.mp3 — a single
 * audio sprite built by concatenating R-LF2/data/103.wav…116.wav with ffmpeg.
 * SoundEngine loads this as a second Howl instance alongside the main soundpack.
 */
export const RLF2_SPRITE: Record<string, SpriteEntry> = {
  '103': toSprite(0,      0.985),
  '104': toSprite(0.985,  2.896),
  '105': toSprite(2.896,  4.577),
  '106': toSprite(4.577,  5.033),
  '107': toSprite(5.033,  5.819),
  '108': toSprite(5.819,  7.352),
  '109': toSprite(7.352,  8.385),
  '110': toSprite(8.385, 10.152),
  '111': toSprite(10.152, 11.831),
  '112': toSprite(11.831, 13.739),
  '113': toSprite(13.739, 14.063),
  '114': toSprite(14.063, 15.067),
  '115': toSprite(15.067, 16.067),
  '116': toSprite(16.067, 17.571),
}

/**
 * Maps semantic game event IDs → soundpack sprite keys.
 * These are used by direct SoundEngine.play() calls in game code.
 */
export const SEMANTIC_MAP: Record<string, string> = {
  hit:        '001',   // small stagger hit (retained for legacy callers)
  heavy_hit:  '006',   // big knockdown hit (retained for legacy callers)
  punch:      '007',   // punch/kick swing (miss)
  jump:       '017',   // jump launch
  land:       '009',   // landing burst
  step:       '003',   // walk footstep
  pick:       '031',   // weapon pick-up
  throw:      '095',   // weapon throw release
  energy:     '048',   // special attack projectile fire
  ui_confirm: 'm_ok',
  ui_cursor:  'm_cancel',
  ui_cancel:  'm_cancel',
}

/**
 * Resolves any sound ID (semantic or raw '1/NNN') to a sprite key.
 * Returns `{ key, pack }` where pack is 'main' or 'rlf2', or undefined.
 */
export function resolveSpriteKey(id: string): { key: string; pack: 'main' | 'rlf2' } | undefined {
  const semantic = SEMANTIC_MAP[id]
  if (semantic) return { key: semantic, pack: 'main' }

  // raw frame-data format: '1/003'
  let key = id
  const slash = id.indexOf('/')
  if (slash !== -1) key = id.slice(slash + 1)

  if (SOUNDPACK_SPRITE[key]) return { key, pack: 'main' }
  if (RLF2_SPRITE[key])      return { key, pack: 'rlf2' }

  return undefined
}

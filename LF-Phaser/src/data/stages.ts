/**
 * stages.ts — stage definitions for level select and match setup.
 *
 * previewImage paths are relative to public/. Supply a real screenshot or
 * leave as empty string to fall back to a plain dark background.
 *
 * R-LF2 campaign stages (id 100+) are in rlfStages.ts alongside their
 * phase/wave data. ALL_STAGE_DEFS combines both lists for the UI.
 */

export interface StageDefinition {
  id:           number
  name:         string
  backgroundId: string      // key into stage factory (matches ForbiddenTower.stageId etc.)
  previewImage: string      // path relative to public/ — empty string = placeholder
}

import { RLF_STAGES } from './rlfStages.js'

export const STAGE_DEFS: StageDefinition[] = [
  {
    id:           1,
    name:         'Forbidden Tower',
    backgroundId: 'forbiddenTower',
    previewImage: 'bg/ft/sky.png',
  },
  {
    id:           2,
    name:         'CUHK',
    backgroundId: 'cuhk',
    previewImage: 'bg/cuhk/sky1.png',
  },
  {
    id:           3,
    name:         'The Great Wall',
    backgroundId: 'greatWall',
    previewImage: 'bg/gw/sky.png',
  },
  {
    id:           4,
    name:         'HK Coliseum',
    backgroundId: 'hkColiseum',
    previewImage: 'bg/hkc/back1.png',
  },
  {
    id:           5,
    name:         'Lion Forest',
    backgroundId: 'lionForest',
    previewImage: 'bg/lf/forests.png',
  },
  {
    id:           6,
    name:         "Queen's Island",
    backgroundId: 'queensIsland',
    previewImage: 'bg/qi/qi1.png',
  },
  {
    id:           7,
    name:         'Stanley Prison',
    backgroundId: 'stanleyPrison',
    previewImage: 'bg/sp/wall.png',
  },
  {
    id:           8,
    name:         'Tai Hom Village',
    backgroundId: 'taiHomVillage',
    previewImage: 'bg/thv/5.png',
  },
]

/** All stages: VS mode backgrounds + R-LF2 campaign stages. */
export const ALL_STAGE_DEFS: StageDefinition[] = [
  ...STAGE_DEFS,
  ...RLF_STAGES,
]

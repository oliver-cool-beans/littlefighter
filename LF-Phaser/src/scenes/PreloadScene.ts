import ftBgData   from '../data/ft_bg.js'
import cuhkBgData from '../data/cuhk_bg.js'
import gwBgData   from '../data/gw_bg.js'
import hkcBgData  from '../data/hkc_bg.js'
import lfBgData   from '../data/lf_bg.js'
import qiBgData   from '../data/qi_bg.js'
import spBgData   from '../data/sp_bg.js'
import thvBgData  from '../data/thv_bg.js'
import weapon0Data              from '../data/weapon0.js'
import weapon1Data              from '../data/weapon1.js'
import weapon2Data              from '../data/weapon2.js'
import weapon3Data              from '../data/weapon3.js'
import weapon4Data              from '../data/weapon4.js'
import weapon5Data              from '../data/weapon5.js'
import weapon6Data              from '../data/weapon6.js'
import weapon7Data              from '../data/weapon7.js'
import weapon8Data              from '../data/weapon8.js'
import weapon9Data              from '../data/weapon9.js'
import weapon10Data             from '../data/weapon10.js'
import weapon11Data             from '../data/weapon11.js'
import weapon12Data             from '../data/weapon12.js'
import weapon13Data             from '../data/weapon13.js'
import weapon14Data             from '../data/weapon14.js'
import davisBallData            from '../data/davis_ball.js'
import johnBallData             from '../data/john_ball.js'
import henryArrow1Data          from '../data/henry_arrow1.js'
import rudolfWeaponData         from '../data/rudolf_weapon.js'
import deepBallData             from '../data/deep_ball.js'
import windData                 from '../data/henry_louis_rudolf_wind.js'
import dennisBallData           from '../data/dennis_ball.js'
import woodyBallData            from '../data/woody_ball.js'
import henryArrow2Data          from '../data/henry_arrow2.js'
import freezeBallData           from '../data/freeze_ball.js'
import firenBallData            from '../data/firen_ball.js'
import firenFlameData           from '../data/firen_flame.js'
import freezeColumnData         from '../data/freeze_column.js'
import johnBiscuitData          from '../data/john_biscuit.js'
import dennisChaseData          from '../data/dennis_chase.js'
import knightBallData           from '../data/knight_ball.js'
import knightThunderData        from '../data/knight_thunder.js'
import banditFlameData          from '../data/bandit_flame.js'
import jackBallData             from '../data/jack_ball.js'
import janChaseData             from '../data/jan_chase.js'
import janChasehData            from '../data/jan_chaseh.js'
import firzenBallData           from '../data/firzen_ball.js'
import firzenChasefData         from '../data/firzen_chasef.js'
import firzenChaseiData         from '../data/firzen_chasei.js'
import batBallData              from '../data/bat_ball.js'
import batBall2Data             from '../data/bat_ball2.js'
import batChaseData             from '../data/bat_chase.js'
import batChase2Data            from '../data/bat_chase2.js'
import batChase3Data            from '../data/bat_chase3.js'
import batChase4Data            from '../data/bat_chase4.js'
import justinBallData           from '../data/justin_ball.js'
import justinBall2Data          from '../data/justin_ball2.js'
import julianBallData           from '../data/julian_ball.js'
import julianBall2Data          from '../data/julian_ball2.js'
import horizontalWwData         from '../data/horizontal_ww.js'
import louisexBallData          from '../data/louisex_ball.js'
import davisBall2Data           from '../data/davis_ball2.js'
import clBallData               from '../data/cl_ball.js'
import clBall2Data              from '../data/cl_ball2.js'
import clBall3Data              from '../data/cl_ball3.js'
import clChaseData              from '../data/cl_chase.js'
import clChase2Data             from '../data/cl_chase2.js'
import clColData                from '../data/cl_col.js'
import clCol2Data               from '../data/cl_col2.js'
import clCol3Data               from '../data/cl_col3.js'
import clFlameData              from '../data/cl_flame.js'
import firenBall2Data           from '../data/firen_ball2.js'
import firenBall3Data           from '../data/firen_ball3.js'
import louisBallData            from '../data/louis_ball.js'
import johnColData              from '../data/john_col.js'
import effect0Data              from '../data/effect0.js'
import effect1Data              from '../data/effect1.js'
import brokenData               from '../data/broken.js'
import type { CharacterData }   from '../types/index.js'

/**
 * PreloadScene — loads all character sprite sheets and the Forbidden Tower background.
 *
 * LF2 frame size convention: data stores w/h as (frameSize - 1).
 * The spritesheet grid is row × col frames (row = cols per row, col = rows per col).
 * Each cell in the grid is (w+1) × (h+1) pixels.
 */
export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload(): void {
    this._createProgressBar()
    this._loadWeaponSheets()
    this._loadBackground(ftBgData)
    this._loadBackground(cuhkBgData)
    this._loadBackground(gwBgData)
    this._loadBackground(hkcBgData)
    this._loadBackground(lfBgData)
    this._loadBackground(qiBgData)
    this._loadBackground(spBgData)
    this._loadBackground(thvBgData)
    this.load.image('shadow', 'bg/template/shadow.png')
  }

  private _loadBackground(data: { layer: Array<{ pic?: string; rect?: unknown }> }): void {
    for (const layer of data.layer) {
      if (layer.pic && layer.rect === undefined) {
        if (!this.textures.exists(layer.pic)) {
          this.load.image(layer.pic, layer.pic)
        }
      }
    }
  }

  private _createProgressBar(): void {
    const { width, height } = this.scale
    const cx = width / 2
    const cy = height / 2

    this.add.text(cx, cy - 60, 'Loading…', {
      fontFamily: 'monospace',
      fontSize: '18px',
      color: '#ffffff'
    }).setOrigin(0.5)

    this.add.rectangle(cx, cy, 400, 20, 0x333333).setOrigin(0.5)
    const bar = this.add.rectangle(cx - 200, cy, 0, 20, 0x00ff88).setOrigin(0, 0.5)

    this.load.on('progress', (value: number) => {
      bar.width = 400 * value
    })
  }

  private _loadWeaponSheets(): void {
    const subObjects: CharacterData[] = [
      weapon0Data, weapon1Data, weapon2Data, weapon3Data,
      weapon4Data, weapon5Data, weapon6Data, weapon7Data,
      weapon8Data, weapon9Data, weapon10Data, weapon11Data,
      weapon12Data, weapon13Data, weapon14Data,
      davisBallData, johnBallData, henryArrow1Data, rudolfWeaponData,
      deepBallData, windData, dennisBallData, woodyBallData, henryArrow2Data,
      freezeBallData, firenBallData, firenFlameData, freezeColumnData,
      johnBiscuitData, dennisChaseData, knightBallData, knightThunderData,
      banditFlameData, jackBallData, janChaseData, janChasehData,
      firzenBallData, firzenChasefData, firzenChaseiData,
      batBallData, batBall2Data, batChaseData, batChase2Data, batChase3Data, batChase4Data,
      justinBallData, justinBall2Data, julianBallData, julianBall2Data,
      horizontalWwData, louisexBallData, davisBall2Data,
      clBallData, clBall2Data, clBall3Data, clChaseData, clChase2Data,
      clColData, clCol2Data, clCol3Data, clFlameData,
      firenBall2Data, firenBall3Data, louisBallData, johnColData,
      effect0Data, effect1Data, brokenData,
    ]
    for (const data of subObjects) {
      const name = data.bmp.name as string
      data.bmp.file.forEach((sheet, index) => {
        const fileEntry = sheet as Record<string, unknown>
        const fileKey = Object.keys(fileEntry).find(k => k.startsWith('file'))!
        const url         = fileEntry[fileKey] as string
        const frameWidth  = fileEntry.w as number
        const frameHeight = fileEntry.h as number
        this.load.spritesheet(`${name}_${index}`, url, { frameWidth, frameHeight, spacing: 1 })
      })
    }
  }

  create(): void {
    // Emit select screen — React App will show CharacterSelectScreen.
    // MatchScene starts when the user confirms character selection.
    import('../ui/bus.js').then(({ bus }) => {
      bus.emit('ui:scene-change', { scene: 'select' })
    })
    // Stop the scene so the loading bar is not visible behind the main menu.
    // Loaded textures remain in Phaser's global cache.
    this.scene.stop()
  }
}

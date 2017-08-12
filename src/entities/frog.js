import {
  BASE,
  ROWS,
  COLS,
  CANV_W,
  CANV_H,
  CTX
} from '../constants/canvas'
import * as et from '../constants/events'
import * as f from '../constants/sprites/frog'
import { drawSprite, subscribe, Vector } from '../engine'

const width = BASE
const height = BASE
const size = [BASE, BASE]
const respawnTime = 2500
const startPos = [BASE * Math.floor(COLS/2), BASE * (ROWS - 1)]

export default function createFrog() {
  let size = [BASE, BASE]
  let pos = startPos
  let dead = false
  let handlingDeath = false
  let facing = 0
  let charging = false

  const frog = {
    get size() {
      return size
    },

    get pos() {
      return pos
    },

    get dead() {
      return dead
    },

    update: function() {
      this.boundaries()
    },

    render: function() {
      let sprite
      switch (facing) {
        case 0:
          if (!dead) {
            sprite = (charging === false) ? f.UP : f.CHARGING_UP
          } else {
            sprite = f.DEAD_UP
          }
          break
        case 1:
          if (!dead) {
            sprite = (charging === false) ? f.RIGHT : f.CHARGING_RIGHT
          } else {
            sprite = f.DEAD_RIGHT
          }
          break
        case 2:
          if (!dead) {
            sprite = (charging === false) ? f.DOWN : f.CHARGING_DOWN
          } else {
            sprite = f.DEAD_DOWN
          }
          break
        case 3:
          if (!dead) {
            sprite = (charging === false) ? f.LEFT : f.CHARGING_LEFT
          } else {
            sprite = f.DEAD_LEFT
          }
          break
      }
      drawSprite(CTX, f.SHEET, f.SPRITES[sprite], pos[0], pos[1])
    },

    boundaries: function() {
      if (pos[0] < 0) pos[0] = 0
      if (pos[1] < 0) pos = startPos
      if (pos[0] > CANV_W - width) pos[0] = CANV_W - width
      if (pos[1] > CANV_H - height) pos[1] = CANV_H - height
    },

    charge: function() {
      charging = true
    },

    move: function(direction, units) {
      if (!dead) {
        charging = false
        let v
        const mag = BASE * units
        switch (direction) {
          case 0:
            v = [0, -mag]
            facing = 0
            break
          case 1:
            v = [mag, 0]
            facing = 1
            break
          case 2:
            v = [0, mag]
            facing = 2
            break
          case 3:
            v = [-mag, 0]
            facing = 3
            break
        }
        pos = Vector.add(pos, v)
      }
    },

    handleDeath: function() {
      dead = true
      handlingDeath = true
      setTimeout(() => {
        pos = startPos
        dead = false
        handlingDeath = false
        facing = 0
      }, respawnTime)
    }

  }

  // Subscribe frog to events
  subscribe(et.SPACE_BAR_UP, frog, () => { frog.move(facing, 2) })
  subscribe(et.SPACE_BAR_DOWN, frog, () => { frog.charge() })
  subscribe(et.ARROW_UP_UP, frog, () => { frog.move(0, 1) })
  subscribe(et.ARROW_UP_DOWN, frog, () => { frog.charge() })
  subscribe(et.ARROW_RIGHT_UP, frog, () => { frog.move(1, 1) })
  subscribe(et.ARROW_RIGHT_DOWN, frog, () => { frog.charge() })
  subscribe(et.ARROW_DOWN_UP, frog, () => { frog.move(2, 1) })
  subscribe(et.ARROW_DOWN_DOWN, frog, () => { frog.charge() })
  subscribe(et.ARROW_LEFT_UP, frog, () => { frog.move(3, 1) })
  subscribe(et.ARROW_LEFT_DOWN, frog, () => { frog.charge() })
  subscribe(et.COLLISION, frog, frog.handleDeath)

  return frog
}

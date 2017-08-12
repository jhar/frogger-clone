import { BASE, ROWS, COLS, CTX } from '../constants/canvas'
import { COLLISION } from '../constants/events'
import * as vst from '../constants/sprites/vsTeslas'
import { SHEET as fSheet } from '../constants/sprites/frog'
import { SHEET as tSheet } from '../constants/sprites/teslas'
import createFrog from '../entities/frog'
import {
  drawMap,
  publish,
  subscribe,
  loadImages,
  loop,
  rectangleUnion
} from '../engine'
import createTeslaArray from '../entities/tesla'

// Configure entities
const frog = createFrog()
const teslaNum = 8
const teslaRows = [2, 3, 5, 6, 8, 9, 11, 12]
const teslas = createTeslaArray(teslaNum, teslaRows)

// Collision detection
function collisionDetector() {
  let i, check
  let len = teslas.length
  for (i = 0; i < len; i++) {
    check = rectangleUnion(frog, teslas[i])
    if (check) {
      if (check > (teslas[i].area * teslas[i].tolerance)) {
        publish(COLLISION, teslas[i])
        break
      }
    }
  }
}

// Configure function to render map
const renderMap = () => {
  drawMap(CTX, vst.MAP, vst.SHEET, vst.SPRITES, ROWS, COLS, BASE, BASE)
}

// Load and cache images
function preload() {
  console.log(vst.SHEET)
  return loadImages([vst.SHEET, fSheet, tSheet])
}

// Configure loop
const now = Date.now()
const updates = [frog, ...teslas, collisionDetector]
const renders = [renderMap, frog, ...teslas]

export default function vsTeslas() {
  preload().then(function() {
    loop(now, updates, renders)
  })
}

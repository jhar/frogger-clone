import * as ke from './constants/events'
import { configureKeys } from './engine'
import { scenes } from './scenes'

// Configure input
const keyUpMap = {
  32: ke.SPACE_BAR_UP,
  37: ke.ARROW_LEFT_UP,
  38: ke.ARROW_UP_UP,
  39: ke.ARROW_RIGHT_UP,
  40: ke.ARROW_DOWN_UP
}

configureKeys('keyup', keyUpMap)

const keyDownMap = {
  32: ke.SPACE_BAR_DOWN,
  37: ke.ARROW_LEFT_DOWN,
  38: ke.ARROW_UP_DOWN,
  39: ke.ARROW_RIGHT_DOWN,
  40: ke.ARROW_DOWN_DOWN
}

configureKeys('keydown', keyDownMap)

// Scene manager
let currentScene = scenes[0]
currentScene()

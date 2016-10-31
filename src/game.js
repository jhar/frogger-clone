import { keyup } from './engine/keyboard'
import {
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    CANVAS,
    KEY_UP_VALUES
} from './constants'
import scenes from './scenes/all'

/* Initialize the game canvas */
CANVAS.width = CANVAS_WIDTH
CANVAS.height = CANVAS_HEIGHT
document.body.appendChild(CANVAS)

/* Initialize the keyboard configuration */
keyup(KEY_UP_VALUES)

// Scene manager (engine), transitions, started stopped by custom events
// Maybe write a vector class

let currentScene = scenes[0]
currentScene()

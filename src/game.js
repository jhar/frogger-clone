import { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS } from './constants'
import scenes from './scenes/all'

/* Initialize the game canvas */
CANVAS.width = CANVAS_WIDTH
CANVAS.height = CANVAS_HEIGHT
document.body.appendChild(CANVAS)

// Custom event wrapper functions (engine), used in scenes & entities
// Scene manager (engine), transitions, started stopped by custom events
// Maybe write a vector class

let currentScene = scenes[0]
currentScene()

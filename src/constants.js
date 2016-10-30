/* Canvas */
export const BASE = 48
export const ROWS = 16
export const COLUMNS = 9
export const CANVAS_WIDTH = BASE * COLUMNS
export const CANVAS_HEIGHT = BASE * ROWS
export const CANVAS = document.createElement('canvas')
export const CONTEXT = CANVAS.getContext('2d')

/* Input */
export const KEY_UP_VALUES = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
}

/* Canvas */
export const BASE = 48
export const ROWS = 16
export const COLUMNS = 9
export const CANVAS_WIDTH = BASE * COLUMNS
export const CANVAS_HEIGHT = BASE * ROWS
export const CANVAS = document.createElement('canvas')
export const CONTEXT = CANVAS.getContext('2d')

/* Input */
export const KEYS = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}

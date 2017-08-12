const BASE = 48
const ROWS = 15
const COLS = 11
const CANV_W = BASE * COLS
const CANV_H = BASE * ROWS
const CANV = document.createElement('canvas')
const CTX = CANV.getContext('2d')

CANV.width = CANV_W
CANV.height = CANV_H
document.body.appendChild(CANV)

export { BASE, ROWS, COLS, CANV_W, CANV_H, CANV, CTX }

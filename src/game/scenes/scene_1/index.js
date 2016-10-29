import assets from '../../../engine/assets'
import background from './entities/background'
import frog from './entities/frog'
import tesla from './entities/tesla'

/**
 * Load and cache data and assets.
 *
 * @param {function} callback - Transitions to setup()
 * @return {void}
 */

const imageAssets = assets()
const preload = (callback) => {
    imageAssets.load([
        'sprites/road-top.png',
        'sprites/road-bottom.png',
        'sprites/grass.png',
        'sprites/tesla-right.png',
        'sprites/tesla-left.png',
        'sprites/tree-frog.png',
        'sprites/tree-frog-dead.png'
    ])
    imageAssets.onReady(callback)
}

/**
 * Configure and create game objects / initial state.
 *
 * @param {function} callback - Transitions to loop()
 * @return {void}
 */

const setup = (callback) => {
    const engine = this

    /* Background variables */
    const rowHeight = 48
    const colWidth = 48
    const rows = 16
    const cols = 9

    /* Each sprite is a single row of the background */
    const sprites = [
        'sprites/grass.png',
        'sprites/grass.png',
        'sprites/grass.png',
        'sprites/road-top.png',
        'sprites/road-bottom.png',
        'sprites/grass.png',
        'sprites/road-top.png',
        'sprites/road-bottom.png',
        'sprites/grass.png',
        'sprites/road-top.png',
        'sprites/road-bottom.png',
        'sprites/grass.png',
        'sprites/road-top.png',
        'sprites/road-bottom.png',
        'sprites/grass.png',
        'sprites/grass.png'
    ]

    /* Create Background */
    const background = background(engine, rowHeight, colWidth, rows, cols, sprites)

    /* Tesla variables */
    const sr = 'sprites/tesla-right.png' // Right facing sprite
    const sl = 'sprites/tesla-left.png' // Left facing sprite
    const w = 96 // Sprite width
    const h = 48 // Sprite height
    const u = 400 // Speed upper bound
    const l = 100 // Speed lower bound
    const d = 0.93 // "Hardness" of Tesla - how much contact will kill frog

    /* Create Teslas */
    const allTeslas = [
        tesla(engine, sl, 3, false, w, h, u, l, d),
        tesla(engine, sr, 4, true, w, h, u, l, d),
        tesla(engine, sl, 6, false, w, h, u, l, d),
        tesla(engine, sr, 7, true, w, h, u, l, d),
        tesla(engine, sl, 9, false, w, h, u, l, d),
        tesla(engine, sr, 10, true, w, h, u, l, d),
        tesla(engine, sl, 12, false, w, h, u, l, d),
        tesla(engine, sr, 13, true, w, h, u, l, d)
    ]

    /* Frog variables */
    const liveSprite = 'sprites/tree-frog.png';
    const deadSprite = 'sprites/tree-frog-dead.png';
    const frogWidth = 48;
    const frogHeight = 48;
    const respawnTime = 2500;

    /* Create frog */
    const frog = frog(engine, liveSprite, deadSprite, frogWidth, frogHeight, respawnTime)

    /* Advance to loop */
    callBack()
}

/**
 * Call all update methods of objects.
 *
 * @param {number} dt - Time delta to normalize framerate across different devices.
 * @return {void}
 */

const update = (dt) => {
    frog.update()
    allTeslas.forEach(function(tesla) {
        tesla.update(dt)
    })
}

/**
 * Call all render methods of objects.
 *
 * @return {void}
 */

const render = () => {
    background.render()
    frog.render()
    allTeslas.forEach(function(tesla) {
        tesla.render()
    })
}

export { preload, setup, update, render }

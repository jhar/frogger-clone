import { get } from '../../engine/images'
import {
    ROWS,
    COLUMNS,
    CANVAS_WIDTH,
    CONTEXT,
    KEYS
} from '../../constants'
import {
    FROG_ALIVE,
    FROG_DEAD,
    FROG_WIDTH,
    FROG_HEIGHT,
    FROG_RESPAWN_TIME,
    FROG_START_X,
    FROG_START_Y
} from './constants'

export default function frog_factory() {
    let x = FROG_START_X
    let y = FROG_START_Y
    let dead = false
    let handlingDeath = false

    /* Event listener for keyboard input */
    document.addEventListener('keyup', (e) => {
        handleControls(keys[e.keyCode]);
    })

    return {
        update: function() {
            if (dead && !handlingDeath) handleDeath()

            /* Check if frog has reached goal */
            if (y < FROG_HEIGHT) {
                x = FROG_START_X
                y = FROG_START_Y
            }
        },

        render: function() {
            if (dead !== true) {
                CONTEXT.drawImage(get(FROG_ALIVE), x, y)
            } else {
                CONTEXT.drawImage(get(FROG_DEAD), x, y)
            }
        },

        handleControls: function(key) {
            if (dead !== true) {
                switch(key) {
                    case 'left':
                        if (x > 0) x = x - CANVAS_WIDTH
                        break
                    case 'up':
                        if (y > 0) y = y - CANVAS_HEIGHT
                        break
                    case 'right':
                        if (x < CANVAS_WIDTH - FROG_WIDTH) x = x + FROG_WIDTH
                        break
                    case 'down':
                        if (y < CANVAS_HEIGHT - FROG_HEIGHT) y = y + FROG_HEIGHT
                        break
                    default:
                        break
                }
            }
        },

        handleDeath: function() {
            handlingDeath = true
            setTimeout(respawn, FROG_RESPAWN_TIME)
        },

        respawn: function() {
            dead = false
            handlingDeath = false
            x = FROG_START_X
            y = FROG_START_Y
        }
    }
}

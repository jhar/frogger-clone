import { get } from '../../engine/images'
import { subscribe } from '../../engine/eventBus'
import {
    ROWS,
    COLUMNS,
    CANVAS_HEIGHT,
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

    const frog = {
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

        moveLeft: function() {
            if (!dead && (x > 0)) x = x - FROG_WIDTH
        },

        moveUp: function() {
            if (!dead && (y > 0)) y = y - FROG_HEIGHT
        },

        moveRight: function() {
            if (!dead && (x < CANVAS_WIDTH - FROG_WIDTH)) x = x + FROG_WIDTH
        },

        moveDown: function() {
            if (!dead && (y < CANVAS_HEIGHT - FROG_HEIGHT)) y = y + FROG_HEIGHT
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

    /* Subscribe frog to events */
    subscribe('LEFT', frog, frog.moveLeft)
    subscribe('UP', frog, frog.moveUp)
    subscribe('RIGHT', frog, frog.moveRight)
    subscribe('DOWN', frog, frog.moveDown)

    return frog
}

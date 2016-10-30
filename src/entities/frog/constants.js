import { BASE, ROWS, COLUMNS } from '../../constants'
import frog_factory from './factory'

/* Sprites */
export const FROG_ALIVE = 'sprites/tree-frog-alive.png'
export const FROG_DEAD = 'sprites/tree-frog-dead.png'

/* Frog constants */
export const FROG_WIDTH = BASE
export const FROG_HEIGHT = BASE
export const FROG_RESPAWN_TIME = 2500
export const FROG_START_X = BASE * Math.floor(COLUMNS / 2)
export const FROG_START_Y = BASE * (ROWS - 1)

/* Create frog entity with factory function */
export const FROG = frog_factory()

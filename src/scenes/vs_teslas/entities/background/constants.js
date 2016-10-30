import background_factory from './factory'

/* Sprites */
export const ROAD_TOP = 'sprites/road-top.png'
export const ROAD_BOTTOM = 'sprites/road-bottom.png'
export const GRASS = 'sprites/grass.png'

/* Background sprite arrangement for scene vs_teslas
 * Each sprite is a single row of the background */
export const VS_TESLAS_BACKGROUND_SPRITES = [
    GRASS,
    GRASS,
    GRASS,
    ROAD_TOP,
    ROAD_BOTTOM,
    GRASS,
    ROAD_TOP,
    ROAD_BOTTOM,
    GRASS,
    ROAD_TOP,
    ROAD_BOTTOM,
    GRASS,
    ROAD_TOP,
    ROAD_BOTTOM,
    GRASS,
    GRASS
]

/* Create background entity for vs_teslas with factory function */
export const VS_TESLAS_BACKGROUND = background_factory()

import { BASE, CANVAS_WIDTH } from '../../../../constants'

/* Tesla sprites */
export const TESLA_RIGHT = 'sprites/tesla-right.png'
export const TESLA_LEFT = 'sprites/tesla-left.png'

/* Tesla constants */
export const TESLA_WIDTH = BASE * 2
export const TESLA_HEIGHT = BASE
export const TESLA_SPEED_UPPER_BOUND = BASE * 9
export const TESLA_SPEED_LOWER_BOUND = BASE * 3
export const TESLA_FORGIVENESS = 0.93 // Percent of 1/2 sprite that is deadly
export const NUMBER_OF_TESLAS = 8
export const TESLA_ROWS = [3, 4, 6, 7, 9, 10, 12, 13]

/* Tesla constant functions */
export const TESLA_STARTING_X = function(right_) {
    return right_ ? -(TESLA_WIDTH) : CANVAS_WIDTH + TESLA_WIDTH
}
export const TESLA_RANDOM_SPEED = function() {
    return (Math.random() * TESLA_SPEED_UPPER_BOUND) + TESLA_SPEED_LOWER_BOUND
}

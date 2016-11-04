import { TESLA_WIDTH, TESLA_FORGIVENESS } from '../tesla/constants'
import { FROG } from '../../../../entities/frog/constants'

/* Pairwise comparison of entities to check for collision */
export function detectCollision(tesla) {
    if (FROG.dead === true) return 0
    if (FROG.y !== tesla.y) return false
    let proximity = Math.abs(FROG.x - (tesla.x + (TESLA_WIDTH / 2)))
    if (proximity < (TESLA_WIDTH / 2 * TESLA_FORGIVENESS)) return true
}

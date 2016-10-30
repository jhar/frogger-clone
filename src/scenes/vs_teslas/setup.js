import { BASE, ROWS, COLUMNS } from '../../constants'
import {
    TESLA_RIGHT,
    TESLA_LEFT,
    NUMBER_OF_TESLAS,
    TESLA_ROWS,
} from './entities/tesla/constants'
import tesla_factory from './entities/tesla/factory'

/* Configure and create teslas */
export default function setup() {
    /* Generate teslas */
    let teslas = []
    let tesla, teslaSprite, teslaRow, teslaGoingRight
    for (let i = 0; i < NUMBER_OF_TESLAS; i++) {
        if ((i === 0) || (i % 2 === 0)) {
            teslaSprite = TESLA_LEFT
            teslaGoingRight = false
        } else {
            teslaSprite = TESLA_RIGHT
            teslaGoingRight = true
        }
        teslaRow = TESLA_ROWS[i]
        tesla = tesla_factory(teslaSprite, teslaRow, teslaGoingRight)
        teslas.push(tesla)
    }

    return teslas
}

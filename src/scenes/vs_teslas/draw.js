import loop from '../../engine/loop'
import { FROG } from '../../entities/frog/constants'
import { VS_TESLAS_BACKGROUND } from './entities/background/constants'

/* Update and render game entities */
export default function draw(entities) {
    const now = Date.now()
    const updates = [FROG, ...entities[0], entities[1]]
    const renders = [VS_TESLAS_BACKGROUND, FROG, ...entities[0]]
    loop(now, updates, renders)
}

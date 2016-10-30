import loop from '../../engine/loop'
import { FROG } from '../../entities/frog/constants'
import { VS_TESLAS_BACKGROUND } from './entities/background/constants'

/* Update and render game entities */
export default function draw(teslas) {
    const now = Date.now()
    const updates = [FROG, ...teslas]
    const renders = [VS_TESLAS_BACKGROUND, FROG, ...teslas]
    loop(now, updates, renders)
}

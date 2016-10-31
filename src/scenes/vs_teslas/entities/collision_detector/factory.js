import { publish, subscribe } from '../../../../engine/eventBus'
import { detectCollision } from './constants'

/* Publish collision if detected */
export default function collision_detector_factory(teslas_) {
    return {
        teslas: teslas_,
        update: function() {
            for (let i = 0; i < this.teslas.length; i++) {
                let check = detectCollision(this.teslas[i])
                if (check === 0) {
                    break // Frog is dead, leave loop early
                }
                else if (check) {
                    publish('COLLISION', this.teslas[i])
                    break
                }
            }
        }
    }
}

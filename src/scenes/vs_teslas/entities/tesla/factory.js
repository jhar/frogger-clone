import { get } from '../../../../engine/images'
import { CANVAS_WIDTH, CONTEXT } from '../../../../constants'
import {
    TESLA_WIDTH,
    TESLA_HEIGHT,
    TESLA_RANDOM_SPEED,
    TESLA_STARTING_X
} from './constants'

const teslaProto = {
    update: function(dt) {
        if (this.right) {
            this.x = this.x + this.speed * dt
            /* Check if it has left the left side */
            if (this.x > CANVAS_WIDTH) {
                this.speed = TESLA_RANDOM_SPEED()
                this.x = -CANVAS_WIDTH
            }
        } else { /* Tesla is moving left */
            this.x = this.x - this.speed * dt
            /* Check if it has left the right side */
            if (this.x < -CANVAS_WIDTH) {
                this.speed = TESLA_RANDOM_SPEED()
                this.x = CANVAS_WIDTH + TESLA_WIDTH
            }
        }
    },

    render: function() {
        CONTEXT.drawImage(get(this.sprite), this.x, this.y)
    }
}

export default function tesla_factory(sprite_, row_, right_) {
    const tesla = Object.create(teslaProto)
    tesla.sprite = sprite_
    tesla.row = row_
    tesla.right = right_
    tesla.x = TESLA_STARTING_X()
    tesla.y = TESLA_HEIGHT * row_
    tesla.speed = TESLA_RANDOM_SPEED()
    return tesla
}

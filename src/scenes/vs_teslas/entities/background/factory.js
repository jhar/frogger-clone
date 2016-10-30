/**
 * Background of Scene 1.
 *
 * @return {object}
 */

import { get } from '../../../../engine/images'
import { BASE, ROWS, COLUMNS, CONTEXT } from '../../../../constants'
import { VS_TESLAS_BACKGROUND_SPRITES } from './constants'

export default function background_factory() {
    return {
        render: function() {
            let row, col, sprite, x, y

            /* Loop through rows and columns drawing sprites */
            for (row = 0; row < ROWS; row++) {
                for (col = 0; col < COLUMNS; col++) {
                    sprite = get(VS_TESLAS_BACKGROUND_SPRITES[row])
                    x = col * BASE
                    y = row * BASE
                    CONTEXT.drawImage(sprite, x, y)
                }
            }
        }
    }
}

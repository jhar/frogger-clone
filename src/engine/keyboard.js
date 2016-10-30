/**
 * Keyboard configuration
 *
 * @name keyboard.js
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 */

import { subscribe, publish } from './eventBus'

/* Configure event publishing for keyup */
export function keyup(config) {
    for (let key in config) {
        subscribe(config[key])
    }

    document.addEventListener('keyup', (event) => {
        if (config[event.keyCode]) {
            publish(config[event.keyCode])
        }
    })
}

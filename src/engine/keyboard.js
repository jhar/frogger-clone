/**
 * Keyboard configuration
 *
 * @name keyboard.js
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 */

import { publish, subscribe } from './events'

export function configureKeys(action, config) {
  for (let key in config) {
    subscribe(config[key])
  }

  document.addEventListener(action, (event) => {
    if (config[event.keyCode]) {
      publish(config[event.keyCode])
    }
  })
}

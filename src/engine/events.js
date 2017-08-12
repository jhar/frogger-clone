/**
 * Event bus
 *
 * @name events.js
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 */

const register = {}

export function publish(name, data) {
    const callback = (action) => { action(data) }
	  for (let target in register[name]) {
		    register[name][target].forEach(callback)
	  }
}

export function subscribe(name, target, action) {
  	if (name && !(name in register)) {
  	    register[name] = {}
  	}
  	if (target && !(target in register[name])) {
        register[name][target] = []
  	}
  	if (action && (register[name][target].findIndex(action) === -1)) {
        register[name][target].push(action)
    }
}

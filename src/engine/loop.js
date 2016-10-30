/**
 * Main game loop
 *
 * @name loop.js
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 * @param {number} prevTime - Date.now()
 * @param {array} updates - Array of objects to update
 * @param {array} renders - Array of objects to render
 */

const loop = function(prevTime, updates, renders) {
    /* Make time delta */
    const now = Date.now()
    const dt = (now - prevTime) / 1000.0

    /* Update the game state */
    updates.forEach(function(object) {
        object.update(dt)
    })

    /* Render the game state */
    renders.forEach(function(object) {
        object.render()
    })

    /* Loop as soon as the browser is able */
    window.requestAnimationFrame(() => {
        loop(now, updates, renders)
    })
}

export default loop

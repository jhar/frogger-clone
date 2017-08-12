/**
 * Main game loop
 *
 * @name loop.js
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 * @param {number} prevTime - Date.now()
 * @param {array} updates - Array of objects to update or functions to call
 * @param {array} renders - Array of objects to render
 */

export default function loop(prevTime, updates, renders) {
  /* Make time delta */
  const now = Date.now()
  const dt = (now - prevTime) / 1000.0

  /* Update the game state */
  updates.forEach(function(item) {
    if (typeof item === 'function') {
      item()
    } else {
      item.update(dt)
    }
  })

  /* Render the game state */
  renders.forEach(function(item) {
    if (typeof item === 'function') {
      item()
    } else {
      item.render()
    }
  })

  /* Loop as soon as the browser is able */
  window.requestAnimationFrame(() => {
    loop(now, updates, renders)
  })
}

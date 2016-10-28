/**
 * Everything not specific to a game
 *
 * @name Engine
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 * 
 * @param {object} global - Global context.
 * @param {number} width - Desired width of canvas element.
 * @param {number} height - Desired height of canvas element.
 * @param {function} setup - Configure and create game objects and state.
 * @param {function} update - Call update methods of individual objects.
 * @param {function} render - Call render methods of individual objects.
 * @param {function} load - Load and cache data & assets.
 */ 

const engine = (global, width, height, _setup, _update, _render, _preload) => {
    const doc = global.document
    const win = global.window
    const canvas = doc.createElement('canvas')
    const ctx = canvas.getContext('2d')
     
    canvas.width = width
    canvas.height = height
    doc.body.appendChild(this.canvas)
    
    let prevTime

    /* Game logic functions */
    const setup = (typeof _setup === 'function') ? _setup : null
    const update = (typeof _update === 'function') ? _update : null
    const render = (typeof _render === 'function') ? _render : null
    const preload = (typeof _preload === 'function') ? _preload : null

    return {
        /* Start the engine */
        start: () => {
            /* Call preload if it was given */
            if (preload !== null) {
                preload(preloadCallback)
            } else {
                // Else skip it
                preloadCallback()
            }
        },

        /* Main loop */
        loop: () => {
            /* Make time delta */
            const now = Date.now()
            const dt = (now - prevTime) / 1000.0

            /* Update and render the game state */
            update(dt)
            render()

            /* Update for next frame's time delta */
            prevTime = now

            /* Loop as soon as the browser is able */
            win.requestAnimationFrame(loop)
        },

        preloadCallback: () => {
            setup(setupCallback)
        },

        setupCallback: () => {
            prevTime = Date.now()
            loop()
        }
    }
}

export default engine

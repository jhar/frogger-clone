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

const engine = function(_setup, _update, _render, _preload) {
    let prevTime

    return {
        /* Game logic functions */
        setup: function(callback) { _setup(callback) },
        update: function(dt) { _update(dt) },
        render: function() { _render() },
        preload: function(callback) { _preload(callback) },

        /* Callbacks */
        setupCallback: function() {
            prevTime = Date.now()
            this.loop()
        },
        preloadCallback: function() {
            this.setup(() => { this.setupCallback })
        },

        /* Start the engine */
        start: function() {
            this.preload(() => { this.preloadCallback })
        },

        /* Main loop */
        loop: function() {
            /* Make time delta */
            const now = Date.now()
            const dt = (now - prevTime) / 1000.0

            /* Update and render the game state */
            this.update(dt)
            this.render()

            /* Update for next frame's time delta */
            prevTime = now

            /* Loop as soon as the browser is able */
            window.requestAnimationFrame(loop)
        }
    }
}

export default engine

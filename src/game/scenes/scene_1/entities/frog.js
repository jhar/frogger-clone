const frog = (_engine, _sprite, _deathSprite, _width, _height, _respawnTime) => {
    const engine = _engine
    const sprite = _sprite
    const deathSprite = _deathSprite
    const width = _width
    const height = _height
    const respawnTime = _respawnTime
    const keys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }

    let x = self.width * 4
    let y = self.height * 15
    let dead = false
    let handlingDeath = false

    /* Event listener for keyboard input */
    document.addEventListener('keyup', (e) => {
        handleControls(keys[e.keyCode]);
    })

    return {
        update: function() {
            if (dead && !handlingDeath) handleDeath()

            /* Check if frog has reached goal */
            if (y < height) {
                x = width * 4
                y = height * 15
            }
        },

        render: function() {
            if (dead !== true) {
                engine.ctx.drawImage(Resources.get(sprite), x, y)
            } else {
                engine.ctx.drawImage(Resources.get(deathSprite), x, y)
            }
        },

        handleControls: function(key) {
            if (dead !== true) {
                switch(key) {
                    case 'left':
                        if (x > 0) x = x - width
                        break
                    case 'up':
                        if (y > 0) y = y - height
                        break
                    case 'right':
                        if (x < engine.ctx.canvas.width - width) x = x + width
                        break
                    case 'down':
                        if (y < engine.ctx.canvas.height - height) y = y + height;
                        break
                    default:
                        break
                }
            }
        },

        handleDeath: function() {
            handlingDeath = true
            setTimeout(respawn, respawnTime)
        },

        respawn: function() {
            dead = false
            handlingDeath = false
            x = width * 4
            y = height * 15
        }
    }
}

export default frog

const teslaProto = {
    update(dt) {
        if (right) {
            x = x + speed * dt
            /* Check if it has left the left side */
            if (x > engine.ctx.canvas.width) {
                speed = randomSpeed()
                x = -width
            }
        } else { /* Tesla is moving left */
            x = x - speed * dt
            /* Check if it has left the right side */
            if (x < -width) {
                speed = randomSpeed()
                x = engine.ctx.canvas.width + width
            }
        }

        /* Run over the frog */
        if (collision(engine.frog)) kill(engine.frog);
    },

    render() {
        engine.ctx.drawImage(Resources.get(sprite), x, y)
    },

    collision(object) {
        midPointX = x + halfWidth
        if ((y === object.y) &&
            (Math.abs(object.x - this.midPointX) < (this.halfWidth * this.hardness)) &&
            (object.dead === false)) {
            return true
        } else {
            return false
        }
    },

    kill(target) {
        target.dead = true
    },

    randomSpeed() {
        return Math.floor((Math.random() * upper) + lower)
    }
}

const tesla = (_engine, _sprite, _row, _right, _width, _height, _upper, _lower, _hardness) => {
    const engine = _engine
    const sprite = _sprite
    const row = _row
    const right = _right
    const width = _width
    const height = _height
    const upper = _upper
    const lower = _lower
    const hardness = _hardness 
    
    let x = right ? -width : engine.ctx.canvas.width + width
    let y = height * row
    let halfWidth = width/2
    let midPointX = x + halfWidth
    let speed = randomSpeed()

    return Object.create(teslaProto)
}

export default tesla

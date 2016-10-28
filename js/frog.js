var Frog = function(engine, sprite, deathSprite, width, height, respawnTime) {
    var self = this;
    self.engine = engine;
    self.sprite = sprite;
    self.deathSprite = deathSprite;
    self.width = width;
    self.height = height;
    self.respawnTime = respawnTime;
    self.x = self.width * 4;
    self.y = self.height * 15;
    self.dead = false;
    self.handlingDeath = false;
    self.keys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }

    // Update
    self.update = function() {
        if (self.dead && !self.handlingDeath) self.handleDeath();

        // Has frogger reached the goal?
        if (self.y < self.height) {
            self.x = self.width * 4;
            self.y = self.height * 15;
        }
    }

    // Render
    self.render = function() {
        if (self.dead !== true) {
            self.engine.ctx.drawImage(Resources.get(self.sprite), self.x, self.y);
        } else {
            self.engine.ctx.drawImage(Resources.get(self.deathSprite), self.x, self.y);
        }
    }

    // Event listener for keyboard input
    document.addEventListener('keyup', function(e) {
        self.handleControls(self.keys[e.keyCode]);
    });

    // Handle controls
    self.handleControls = function(key) {
        if (self.dead !== true) {
            switch(key) {
                case 'left':
                    if (self.x > 0) self.x = self.x - self.width;
                    break;
                case 'up':
                    if (self.y > 0) self.y = self.y - self.height;
                    break;
                case 'right':
                    if (self.x < self.engine.ctx.canvas.width - self.width) self.x = self.x + self.width;
                    break;
                case 'down':
                    if (self.y < self.engine.ctx.canvas.height - self.height) self.y = self.y + self.height;
                    break;
                default:
                    break;
            }
        }
    }

    // Handle death
    self.handleDeath = function() {
        self.handlingDeath = true;;
        setTimeout(self.respawn, self.respawnTime);
    }

    // Respawn
    self.respawn = function() {
        self.dead = false;
        self.handlingDeath = false;
        self.x = self.width * 4;
        self.y = self.height * 15;
    }
}

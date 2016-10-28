var Frog = function(sprite, deathSprite, width, height, respawnTime) {
    var self = this;
    self.sprite = sprite;
    self.deathSprite = deathSprite;
    self.width = width;
    self.height = height;
    self.respawnTime = respawnTime;
    self.x = self.width * 4;
    self.y = self.height * 15;
    self.dead = false;

    // Update
    self.update = function() {
        if (self.dead) self.handleDeath();

        // Has frogger reached the goal?
        if (self.y < self.height) {
            self.x = self.width * 4;
            self.y = self.height * 15;
        }
    }

    // Render
    self.render = function() {
        if (self.dead !== true) {
            ctx.drawImage(Resources.get(self.sprite), self.x, self.y);
        } else {
            ctx.drawImage(Resources.get(self.deathSprite), self.x, self.y);
        }
    }
    
    // Controls
    self.handleInput = function(key) {
        if (self.dead !== true) {
            switch(key) {
                case 'left':
                    if (self.x > 0) self.x = self.x - self.width;
                    break;
                case 'up':
                    if (self.y > 0) self.y = self.y - self.height;
                    break;
                case 'right':
                    if (self.x < ctx.canvas.width - self.width) self.x = self.x + self.width;
                    break;
                case 'down':
                    if (self.y < ctx.canvas.height - self.height) self.y = self.y + self.height;
                    break;
                default:
                    break;
            }
        }
    }

    // Handle death
    self.handleDeath = function() {
        console.log("dead at " + Date.now());
        setTimeout(self.respawn(), self.respawnTime);
    }

    // Respawn
    self.respawn = function() {
        self.dead = false;
        self.x = self.width * 4;
        self.y = self.height * 15;
    }
}

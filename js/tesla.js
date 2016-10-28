var Tesla = function(sprite, row, right, width, height, upper, lower, hardness) {
    this.sprite = sprite;
    this.row = row;
    this.right = right;
    this.width = width;
    this.height = height;
    this.speedUpperBound = upper;
    this.speedLowerBound = lower;
    this.hardness = hardness; 
    this.x = this.right ? -this.width : ctx.canvas.width + this.width;
    this.y = this.height * row;
    this.halfWidth = this.width/2;
    this.midPointX = this.x + this.halfWidth;
    this.speed = this.randomSpeed();
}

Tesla.prototype.update = function(dt) {
    if (this.right) { // Tesla is moving right
        this.x += this.speed * dt;
        // Check if it has left the screen
        if (this.x > ctx.canvas.width) {
            this.speed = this.randomSpeed();
            this.x = -this.width;
        }
    } else { // Tesla is moving left
        this.x -= this.speed * dt;
        // Check if it has left the screen
        if (this.x < -this.width) {
            this.speed = this.randomSpeed();
            this.x = ctx.canvas.width + this.width;
        }
    }

    // Run over the frog
    if (this.collision(frog)) this.kill(frog);
}

Tesla.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Tesla.prototype.collision = function (object) {
    this.midPointX = this.x + this.halfWidth;
    if ((this.y === object.y) &&
        (Math.abs(object.x - this.midPointX) < (this.halfWidth * this.hardness)) &&
        (object.dead === false)) {
        return true;
    } else {
        return false;
    }
}

Tesla.prototype.kill = function(target) {
    target.dead = true;
}

Tesla.prototype.randomSpeed = function() {
    return Math.floor((Math.random() * this.speedUpperBound) + this.speedLowerBound);
}


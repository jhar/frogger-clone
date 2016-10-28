// The player class
var Player = function() {
    this.x = 48 * 4;
    this.y = 48 * 15;
    this.sprite = 'images/tree-frog.png';

    this.update = function() {
        // Checks to see if the player has reached the goal.
        // If they have, they're moved back to the starting
        // position with a win.
        if (this.y < 48) {
            this.x = 48 * 4;
            this.y = 48 * 15;
        }
    };

    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    this.handleInput = function(key) {
        switch(key) {
            case 'left':
                if (this.x > 0) this.x = this.x - 48;
                break;
            case 'up':
                if (this.y > 0) this.y = this.y - 48;
                break;
            case 'right':
                if (this.x < ctx.canvas.width - 48) this.x = this.x + 48;
                break;
            case 'down':
                if (this.y < ctx.canvas.height - 48) this.y = this.y + 48;
                break;
            default:
                break;
        }
    };
}

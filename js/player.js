// The player class
var Player = function() {
    this.x = 101 * 2;
    this.y = 83 * 5 - 20;
    this.sprite = 'images/char-boy.png';

    this.update = function() {
        // Checks to see if the player has reached the goal.
        // If they have, they're moved back to the starting
        // position with a win.
        if (this.y < 63) {
            this.x = 101 * 2;
            this.y = 83 * 5 - 20;
            console.log("A Winner Is You");
        }
    };

    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    this.handleInput = function(key) {
        switch(key) {
            case 'left':
                if (this.x > 0) this.x = this.x - 101;
                break;
            case 'up':
                if (this.y > 0) this.y = this.y - 83;
                break;
            case 'right':
                if (this.x < 404) this.x = this.x + 101;
                break;
            case 'down':
                if (this.y < 395) this.y = this.y + 83;
                break;
            default:
                break;
        }
    };
}
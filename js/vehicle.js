// Enemies the player must avoid
var Vehicle = function(row, speed, right) {
    this.row = row;
    this.right = right;
    this.speed = speed;

    // Starting position
    this.x = this.right ? -96 : ctx.canvas.width + 96;
    this.y = 48 * row; 

    // The image/sprite for our vehicles
    this.sprite = 'images/tesla.png';

    // Update the enemy's position,
    this.update = function(dt) {
        
        if (this.right) {
            // Ensure game runs at same speed for all computers
            this.x += this.speed * dt;

            if (this.x > ctx.canvas.width) {
                var randomSpeed = Math.floor((Math.random() * 400) + 100);
                this.speed = randomSpeed;
                this.x = -96;
            }
        } else {
            // Ensure game runs at same speed for all computers
            this.x -= this.speed * dt;

            if (this.x < -96) {
                var randomSpeed = Math.floor((Math.random() * 400) + 100);
                this.speed = randomSpeed;
                this.x = ctx.canvas.width + 96;
            }
        }

        if (this.row === 3) console.log(this.x);

        // Checks for collisions with the player
        if (this.y === player.y && Math.abs(player.x - this.x) < 96) {
            player.x = 48 * 4;
            player.y = 48 * 15;
            console.log("All your base are belong to us.");
        }
    }

    // Draw the vehicle on the screen
    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
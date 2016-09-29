// Enemies the player must avoid
var Enemy = function(row, speed) {
    this.row = row;
    this.x = -101;
    this.y = 83 * row - 20;
    this.speed = speed;

    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';

    // Update the enemy's position,
    this.update = function(dt) {
        // Ensure game runs at same speed for all computers
        this.x += this.speed * dt;

        if (this.x > ctx.canvas.width) {
            var randomSpeed = Math.floor((Math.random() * 400) + 100);
            allEnemies[this.row-1].speed = randomSpeed;
            this.x = -101;
        }

        // Checks for collisions with the player
        if (this.y === player.y && Math.abs(player.x - this.x) < 20) {
            player.x = 101 * 2;
            player.y = 83 * 5 - 20;
            console.log("All your base are belong to us.");
        }
    }

    // Draw the enemy on the screen, required method for game
    this.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
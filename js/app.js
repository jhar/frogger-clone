var allEnemies = [new Enemy(1, 250), new Enemy(2, 500), new Enemy(3, 100)];
var player = new Player();


// Sends key presses to Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

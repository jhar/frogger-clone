var allVehicles = [];
var player;

var config = function() {
	allVehicles = [
		new Vehicle(3, Math.floor((Math.random() * 400) + 100), false),
		new Vehicle(4, Math.floor((Math.random() * 400) + 100), true),
		new Vehicle(6, Math.floor((Math.random() * 400) + 100), false),
		new Vehicle(7, Math.floor((Math.random() * 400) + 100), true),
		new Vehicle(9, Math.floor((Math.random() * 400) + 100), false),
		new Vehicle(10, Math.floor((Math.random() * 400) + 100), true),
		new Vehicle(12, Math.floor((Math.random() * 400) + 100), false),
		new Vehicle(13, Math.floor((Math.random() * 400) + 100), true)
	];
	
	player = new Player();
};


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

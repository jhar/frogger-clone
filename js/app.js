var allTeslas = [];
var frog;

var config = function() {
    var sr = 'images/tesla-right.png'; // Right facing sprite
    var sl = 'images/tesla-left.png'; // Left facing sprite
    var w = 96; // Sprite width
    var h = 48; // Sprite height
    var u = 400; // Speed upper bound
    var l = 100; // Speed lower bound
    var d = 0.93; // "Hardness" of Tesla - how much contact will kill frog

	allTeslas = [
		new Tesla(sl, 3, false, w, h, u, l, d),
		new Tesla(sr, 4, true, w, h, u, l, d),
		new Tesla(sl, 6, false, w, h, u, l, d),
		new Tesla(sr, 7, true, w, h, u, l, d),
		new Tesla(sl, 9, false, w, h, u, l, d),
		new Tesla(sr, 10, true, w, h, u, l, d),
		new Tesla(sl, 12, false, w, h, u, l, d),
		new Tesla(sr, 13, true, w, h, u, l, d)
	];
	
	frog = new Frog('images/tree-frog.png', 'images/tree-frog-dead.png', 48, 48, 2500);
};

document.addEventListener('keyup', function bindControls(e) {
    var keys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    frog.handleInput(keys[e.keyCode]);
});

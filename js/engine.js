/* Engine.js
 * Game loop functionality (update entities and render),
 * Draws the initial game board on the screen.
 * Updates and renders player & enemy objects.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */

var Engine = (function(global) {
    // Predefine variables, create canvas, get 2d context
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    // Initial setup
    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    // Main method
    function main() {
        // Get our time delta information
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        // Update and render the game state
        update(dt);
        render();

        // Update for next frame's time delta
        lastTime = now;

        // Call this function again as soon as the browser is able
        win.requestAnimationFrame(main);
    };

    // Update all game objects
    function update(dt) {
        // Update enemies
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });

        // Update player
        player.update();
    }

    // Render the game state
    function render() {
        // Array for url of image (each row is using the same image)
        var rowImages = [
                'images/water-block.png',   // Row 1
                'images/stone-block.png',   // Row 2
                'images/stone-block.png',   // Row 3
                'images/stone-block.png',   // Row 4
                'images/grass-block.png',   // Row 5
                'images/grass-block.png'    // Row 6
            ],
            numRows = 6,
            numCols = 5,
            row, col;

        // Loop through rows and columns drawing images
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                // drawImage(image, x coord, y coord)
                // Using Resources for caching
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        // Render enemies
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        // Render player
        player.render();
    }

    // Could be used to reset states (game menu's, game over screen, etc)
    function reset() {
        
    }

    // Load all image resources, set init as callback
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png'
    ]);
    Resources.onReady(init);

    // Make canvas context global 
    global.ctx = ctx;
})(this);

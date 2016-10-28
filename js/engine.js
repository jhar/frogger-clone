/* Engine.js
 * Game loop functionality (update entities and render),
 * Draws the initial game board on the screen.
 * Updates and renders player & vehicle objects.
 */

var Engine = (function(global) {
    // Predefine variables, create canvas, get 2d context
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 432;
    canvas.height = 768;
    doc.body.appendChild(canvas);

    // Make canvas context global 
    global.ctx = ctx;

    // Initial setup
    function init() {
        reset();
        config();
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
        // Update player
        player.update();

        // Update enemies
        allVehicles.forEach(function(vehicle) {
            vehicle.update(dt);
        });
    }

    // Render the game state
    function render() {
        // Array for url of image (each row is using the same image)
        var rowImages = [
                'images/grass.png', 
                'images/grass.png',
                'images/grass.png',
                'images/road-top.png',
                'images/road-bottom.png',       
                'images/grass.png',
                'images/road-top.png',
                'images/road-bottom.png',
                'images/grass.png',
                'images/road-top.png',
                'images/road-bottom.png',
                'images/grass.png',
                'images/road-top.png',
                'images/road-bottom.png',
                'images/grass.png',
                'images/grass.png',
            ],
            numRows = 16,
            numCols = 9,
            row, col;

        // Loop through rows and columns drawing images
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                // drawImage(image, x coord, y coord)
                // Using Resources for caching
                ctx.drawImage(Resources.get(rowImages[row]), col * 48, row * 48);
            }
        }

        // Render player
        player.render();

        // Render enemies
        allVehicles.forEach(function(vehicle) {
            vehicle.render();
        });
    }

    // Could be used to reset states (game menu's, game over screen, etc)
    function reset() {
        
    }

    // Load all image resources, set init as callback
    Resources.load([
        'images/road-top.png',
        'images/road-bottom.png',
        'images/grass.png',
        'images/tesla.png',
        'images/tesla-left.png',
        'images/tree-frog.png',
        'images/tree-frog-dead.png'
    ]);
    Resources.onReady(init);

})(this);

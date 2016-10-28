var Engine = (function(global) {
    var doc = global.document;
    var win = global.window;
    var can = doc.createElement('canvas');
    var ctx = can.getContext('2d');
    var prevTime;

    can.width = 432;
    can.height = 768;
    doc.body.appendChild(can);

    // Make canvas context global
    global.ctx = ctx;

    // Initial setup
    function init() {
        config();
        prevTime = Date.now();
        main();
    }

    // Main method
    function main() {
        // Make time delta
        var now = Date.now();
        var dt = (now - prevTime) / 1000.0;

        // Update and render the game state
        update(dt);
        render();

        // Update for next frame's time delta
        prevTime = now;

        // Loop as soon as the browser is able
        win.requestAnimationFrame(main);
    };

    // Update all game objects
    function update(dt) {
        frog.update();
        allTeslas.forEach(function(tesla) {
            tesla.update(dt);
        });
    }

    // Render the game state
    function render() {
        // Game backdrop - Each row uses the same image
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
                ctx.drawImage(Resources.get(rowImages[row]), col * 48, row * 48);
            }
        }

        frog.render();
        allTeslas.forEach(function(tesla) {
            tesla.render();
        });
    }

    // Load all image resources, set init as callback
    Resources.load([
        'images/road-top.png',
        'images/road-bottom.png',
        'images/grass.png',
        'images/tesla-right.png',
        'images/tesla-left.png',
        'images/tree-frog.png',
        'images/tree-frog-dead.png'
    ]);
    Resources.onReady(init);

})(this);

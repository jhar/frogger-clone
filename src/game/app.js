(function(global) {
    function preload(cb) {
        Resources.load([
            'images/road-top.png',
            'images/road-bottom.png',
            'images/grass.png',
            'images/tesla-right.png',
            'images/tesla-left.png',
            'images/tree-frog.png',
            'images/tree-frog-dead.png'
        ]);
        Resources.onReady(cb);
    }

    function setup(cb) {
        var eng = this;

        // Background variables
        var rowHeight = 48;
        var colWidth = 48;
        var rows = 16;
        var cols = 9;
        var sprites = [
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
        ]; // Each sprite is a single row of the background

        // Create Background
        this.background = new Background(eng, rowHeight, colWidth, rows, cols, sprites)

        // Tesla variables
        var sr = 'images/tesla-right.png'; // Right facing sprite
        var sl = 'images/tesla-left.png'; // Left facing sprite
        var w = 96; // Sprite width
        var h = 48; // Sprite height
        var u = 400; // Speed upper bound
        var l = 100; // Speed lower bound
        var d = 0.93; // "Hardness" of Tesla - how much contact will kill frog

        // Create Teslas
        this.allTeslas = [
            new Tesla(eng, sl, 3, false, w, h, u, l, d),
            new Tesla(eng, sr, 4, true, w, h, u, l, d),
            new Tesla(eng, sl, 6, false, w, h, u, l, d),
            new Tesla(eng, sr, 7, true, w, h, u, l, d),
            new Tesla(eng, sl, 9, false, w, h, u, l, d),
            new Tesla(eng, sr, 10, true, w, h, u, l, d),
            new Tesla(eng, sl, 12, false, w, h, u, l, d),
            new Tesla(eng, sr, 13, true, w, h, u, l, d)
        ];
        
        // Frog variables
        var liveSprite = 'images/tree-frog.png';
        var deadSprite = 'images/tree-frog-dead.png';
        var frogWidth = 48;
        var frogHeight = 48;
        var respawnTime = 2500;

        // Create frog
        this.frog = new Frog(eng, liveSprite, deadSprite, frogWidth, frogHeight, respawnTime);

        // Advance to loop
        cb();
    }

    function update(dt) {
        this.frog.update();
        this.allTeslas.forEach(function(tesla) {
            tesla.update(dt);
        });
    }

    function render() {
        this.background.render();
        this.frog.render();
        this.allTeslas.forEach(function(tesla) {
            tesla.render();
        });
    }

    var eng = new Engine(global, 432, 768, setup, update, render, preload);
    eng.start();
})(this);

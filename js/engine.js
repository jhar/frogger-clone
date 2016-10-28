var Engine = function(global, width, height, setup, update, render, preload) {
    this.doc = global.document;
    this.win = global.window;
    this.canvas = this.doc.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    this.doc.body.appendChild(this.canvas);
    this.prevTime;
    
    // Game functions
    this.setup = (typeof setup === 'function') ? setup.bind(this) : null;
    this.update = (typeof update === 'function') ? update.bind(this) : null;
    this.render = (typeof render === 'function') ? render.bind(this) : null;
    this.preload = (typeof preload === 'function') ? preload.bind(this) : null;

    // Start your engine
    this.start = function() {
        // Call preload if it was given
        var cb = this.preloadCb.bind(this);
        if (this.preload !== null) {
            this.preload(cb);
        } else {
            // Else skip it
            cb();
        }
    }

    // Main loop
    this.loop = function() {
        // Make time delta
        var now = Date.now();
        var dt = (now - this.prevTime) / 1000.0;

        // Update and render the game state
        this.update(dt);
        this.render();

        // Update for next frame's time delta
        this.prevTime = now;

        // Loop as soon as the browser is able
        this.win.requestAnimationFrame(this.loop.bind(this));
    }

    // Preload callback
    this.preloadCb = function() {
        this.setup(this.setupCb.bind(this));
    }

    // Setup callback
    this.setupCb = function() {
        this.prevTime = Date.now();
        this.loop();
    }
}

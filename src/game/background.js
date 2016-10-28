var Background = function(engine, rowHeight, colWidth, rows, cols, sprites) {
    this.engine = engine;
    this.rowHeight = rowHeight;
    this.colWidth = colWidth;
    this.rows = rows;
    this.cols = cols;
    this.sprites = sprites;

    this.render = function() {
        var row, col, sprite, x, y;

        // Loop through rows and columns drawing sprites
        for (row = 0; row < this.rows; row++) {
            for (col = 0; col < this.cols; col++) {
                sprite = Resources.get(this.sprites[row]);
                x = col * this.colWidth;
                y = row * this.rowHeight;
                this.engine.ctx.drawImage(sprite, x, y);
            }
        }
    }
}

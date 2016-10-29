/**
 * Background of Scene 1.
 *
 * @param {object} engine - Context for game engine.
 * @param {number} rowHeight - Height of game grid rows.
 * @param {number} colWidth - Width of game grid columns.
 * @param {number} rows - Number of rows in game grid.
 * @param {number} cols - Number of columns in game grid.
 * @param {array} sprites - Array of URLs to cached images.
 * @return {object}
 */

const background = (_engine, _rowHeight, _colWidth, _rows, _cols, _sprites) => {
    const engine = _engine
    const rowHeight = _rowHeight
    const colWidth = _colWidth
    const rows = _rows
    const cols = _cols
    const sprites = _sprites

    return {
        render: function() {
            let row, col, sprite, x, y

            /* Loop through rows and columns drawing sprites */
            for (row = 0; row < rows; row++) {
                for (col = 0; col < cols; col++) {
                    sprite = Resources.get(sprites[row])
                    x = col * colWidth
                    y = row * rowHeight
                    engine.ctx.drawImage(sprite, x, y)
                }
            }
        }
    }
}

export default background

/**
 * Image cache
 *
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 */

const imgCache = {}

// Private function to load a single image
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = function() {
      imgCache[url] = img
      resolve(url)
    }
    img.onerror = function() {
      reject(url)
    }
    img.src = url
  })
}

/**
 * Load images by array of URLs into imgCache
 *
 * @param {array} array - Array of URLs for images to cache
 */

export function loadImages(array) {
  let promises = []
  array.forEach((url) => {
    promises.push(loadImage(url))
  })
  return Promise.all(promises)
}

/**
 * Get reference to cached image
 * @param {string} url - URL of image requested
 * @return {object} img - Reference to cached image
 */

function get(url) {
  return imgCache[url]
}

/**
 * Drawing functions
 *
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 */

export function drawSprite(context, sheet, sprite, dest_x, dest_y) {
  const sx = sprite[1]
  const sy = sprite[2]
  const w = sprite[3]
  const h = sprite[4]
  context.drawImage(get(sheet), sx, sy, w, h, dest_x, dest_y, w, h)
}

export function drawMap(ctx, map, sheet, sprites, rows, cols, base_w, base_h) {
  // Loop through rows and columns drawing sprites
  let i, j, row, sprite, dx, dy
  for (i = 0; i < rows; i++) {
    row = map[i]
    dy = i * base_w
    for (j = 0; j < cols; j++) {
      sprite = row[j]
      dx = j * base_h
      drawSprite(ctx, sheet, sprites[sprite], dx, dy)
    }
  }
}

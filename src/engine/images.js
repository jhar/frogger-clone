/**
 * Image cache
 *
 * @name images.js
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 */

const imgCache = {}

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

const loadImage = function(url) {
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
 * Get reference to cached image
 * @param {string} url - URL of image requested
 * @return {object} img - Reference to cached image
 */
export function get(url) {
    let img = imgCache[url]
    return img
}

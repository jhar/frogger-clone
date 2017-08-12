/**
 * Math utility functions
 *
 * @name math.js
 * @author Justin A. Harrison <justinadenharrison@gmail.com>
 */

// Mappings
export function abs(n) { return Math.abs(n) }
export function max(a, b) { return Math.max(a, b) }
export function min(a, b) { return Math.min(a, b) }
export function pow(b, e) { return Math.pow(b, e) }
export function random(min, max) { return (Math.random() * (max - min)) + min }
export function sqrt(n) { return Math.sqrt(n) }

// Vector math
export const Vector = {
  add: function(a, b) {
    return [a[0] + b[0], a[1] + b[1]]
  },

  distance: function(a, b) {
    return sqrt(pow(a[0] - b[0], 2) + pow(a[1] - b[1], 2))
  },

  magnitude: function(a) {
    return sqrt(a[0] * a[0] + a[1] * a[1])
  },

  scale: function(v, s) {
    return [v[0] * s, v[1] * s]
  },

  substract: function(a, b) {
    return [a[0] - b[0], a[1] - b[1]]
  }
}

// Gets the area of a rectangle formed by the union of two rectangles
export function rectangleUnion(a, b) {
  // Attempt to return from function early
  const br = b.pos[0] + b.size[0]
  if (a.pos[0] > br) return false
  const ar = a.pos[0] + a.size[0]
  if (ar < b.pos[0]) return false
  const bb = b.pos[1] + b.size[1]
  if (a.pos[1] > bb) return false
  const ab = a.pos[1] + a.size[1]
  if (ab < b.pos[1]) return false

  // Return area of overlapping region
  const ox = min(ar, br) - max(a.pos[0], b.pos[0])
  const oy = min(ab, bb) - max(a.pos[1], b.pos[1])
  return ox * oy
}

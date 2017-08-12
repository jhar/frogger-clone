import { BASE, CANV_W, CTX } from '../constants/canvas'
import * as t from '../constants/sprites/teslas'
import { drawSprite, random, Vector } from '../engine'

const width = BASE * 2
const height = BASE
const maxSpeed = BASE * 10
const minSpeed = BASE * 5

// Tesla prototype
const teslaProto = {
  update: function(dt) {
    const scaledVel = Vector.scale(this.vel, dt)
    this.pos = Vector.add(this.pos, scaledVel)
    this.boundaries()
  },

  render: function() {
    drawSprite(CTX, t.SHEET, t.SPRITES[this.sprite], this.pos[0], this.pos[1])
  },

  boundaries: function() {
    if (this.scalar === 1 && (this.pos[0] > CANV_W)) {
      this.vel = Vector.scale([random(minSpeed, maxSpeed), 0], this.scalar)
      this.pos[0] = -CANV_W
    }

    if (this.scalar === -1 && (this.pos[0] < -CANV_W)) {
      this.vel = Vector.scale([random(minSpeed, maxSpeed), 0], this.scalar)
      this.pos[0] = CANV_W + width
    }
  }
}

// Construct a single tesla
function createTesla(sprite, row, scalar) {
  const tesla = Object.create(teslaProto)
  tesla.sprite = sprite
  tesla.size = [width, height]
  tesla.area = width * height
  tesla.tolerance = 0.13

  // Position
  const px = (scalar > 0) ? -width : CANV_W + width
  const py = height * row
  tesla.pos = [px, py]

  // Velocity
  tesla.scalar = scalar
  tesla.vel = Vector.scale([random(minSpeed, maxSpeed), 0], tesla.scalar)

  return tesla
}

// Construct array of teslas
export default function createTeslaArray(num, rows) {
  let teslas = []
  let tesla, sprite, row, scalar
  for (let i = 0; i < num; i++) {
    if ((i === 0) || (i % 2 === 0)) {
      sprite = t.WHITE_RIGHT
      scalar = -1
    } else {
      sprite = t.WHITE_LEFT
      scalar = 1
    }

    row = rows[i]
    tesla = createTesla(sprite, row, scalar)
    teslas.push(tesla)
  }

  return teslas
}

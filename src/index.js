import { engine, assets } from './engine/index'
import { setup, update, render, preload } from './game/scenes/scene_1/index'

const init = function(_width, _height) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  canvas.width = _width
  canvas.height = _height
  document.body.appendChild(canvas)
}
init(432, 768)
window.gameEngine = engine(setup, update, render, preload)
gameEngine.start()

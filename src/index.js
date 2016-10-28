import engine from './engine/index'
import { setup, update, render, preload } from './game/scenes/scene_1/index'

(global => {
    const engine = engine(global, 432, 768, setup, update, render, preload)
    engine.start()
})(window)

import preload from './preload'
import setup from './setup'
import draw from './draw'

export default function vs_teslas() {
    preload()
    .then(() => {
        let teslas = setup()
        draw(teslas)
    })
}

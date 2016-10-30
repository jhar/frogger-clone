import { loadImages } from '../../engine/images'
import { VS_TESLAS_ALL_SPRITES } from './constants'

export default function preload() {
    /* Load and cache images then call setup */
    return loadImages(VS_TESLAS_ALL_SPRITES)
}

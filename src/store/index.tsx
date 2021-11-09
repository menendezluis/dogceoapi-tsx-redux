import {configureStore} from '@reduxjs/toolkit'

//reducer
import dogs from './slices/dogs'
import random from './slices/random'
import dogPhotos from './slices/dogPhotos'
export default configureStore({
    reducer:{
        dogs: dogs,
        random: random,
        dogPhotos: dogPhotos
    }
})
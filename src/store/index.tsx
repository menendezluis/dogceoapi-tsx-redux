import {configureStore} from '@reduxjs/toolkit'

//reducer
import dogs from './slices/dogs'
import random from './slices/random'
export default configureStore({
    reducer:{
        dogs: dogs,
        random: random
    }
})
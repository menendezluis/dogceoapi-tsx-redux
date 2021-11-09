import React, {useEffect} from 'react'
//redux
import { fetchDogPhotos } from '../../store/slices/dogPhotos'
import {useDispatch,useSelector} from 'react-redux'
import Gallery from "react-grid-gallery";

const DogPhotos = (props) => {
    const {breedSelection} = props
    const IMAGES = []
    const { list: dogPhotos } = useSelector(state => state.dogPhotos)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDogPhotos(breedSelection))
    }, [])

    dogPhotos.forEach(dat => {
        IMAGES.push({
            src: dat,
            thumbnail: dat,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tag:breedSelection
        })
    })
    return (
        <div>
        <div className="container">
      <Gallery images={IMAGES} />
        </div>
      </div>
    )
}

export default DogPhotos

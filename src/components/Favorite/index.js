import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//firebase
import { auth,db } from "../../config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

//redux
import {useDispatch,useSelector} from 'react-redux'

const Favorite = (props) => {
    const {breedSelection} = props
    const [user, loading, error] = useAuthState(auth);
    const [favoriteDog,setFavoriteDog] = useState('')
    if(user){
        db.collection("favorites").doc(user.uid)
        .get()
        .then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            setFavoriteDog(doc.data().favoriteDog.wiki.name)
          } else {
            // doc.data() will be undefined in this case
            setFavoriteDog('Sin Favorito')
          }
        }).catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
   
    const deleteFavorite = async () => {
        try {
            await db.collection("favorites").doc(user.uid).delete();
            } catch (err) {
              console.error(err);
              alert(err.message);
            }
          
    }
    return (
        <div>
               
               
                <Stack direction="row" spacing={1}>
                <span> 🐩Favorite Breed 🐶 {favoriteDog}🐕 </span>
      <IconButton color="secondary" onClick={()=>breedSelection(favoriteDog.toLowerCase() )} aria-label="Ver fotos">
        <PhotoCameraIcon />
      </IconButton>
      <IconButton  onClick={()=> deleteFavorite()} color="warning" aria-label="Eliminar Favorito">
        <DeleteForeverIcon />
      </IconButton>
    </Stack>
    </div>
        
    )
}

export default Favorite

import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentVeryDissatisfiedIcon  from '@mui/icons-material/MoodBad';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

//firebase
import { auth,db } from "../../config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

//redux
import {useDispatch,useSelector} from 'react-redux'

const theme = createTheme({
        palette: {
          primary: pink,
          secondary: green,
          tertiary: grey,

        },
});

const Vote = () => {
    const [user, loading, error] = useAuthState(auth);
   
    const { list: random } = useSelector(state => state.random)
    console.log("from favorite", user)

const saveFavorite = async (dog) => {
    try {
        await db.collection("favorites").doc(user.uid).set({
            authProvider: "Favorite",
            favoriteDog: dog
          });
          //setReload(!reload)
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      
}

const saveVote = async (dog, value) => {
    try {
        await db.collection("favorites").doc(dog.breed).set({
            breed: dog.breed,
            value: value
          });
          //setReload(!reload)
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      
}

    return (
        <div>
           
             <Stack direction="row" spacing={1}>
             <h5 className="card-title">Vote</h5>
             <ThemeProvider theme={theme}>
      <IconButton color="secondary" aria-label="Ver fotos">
        <MoodIcon />
      </IconButton>
      <IconButton color="warning" aria-label="Ver fotos">
        <SentimentVeryDissatisfiedIcon  />
      </IconButton>
      <IconButton onClick={()=> saveFavorite(random)} color="primary" aria-label="Ver fotos">
        <FavoriteIcon />
      </IconButton>
      </ThemeProvider>
    </Stack>
        </div>
    )
}

export default Vote

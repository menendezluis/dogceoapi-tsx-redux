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
import { doc, updateDoc, arrayUnion, increment  } from "firebase/firestore";

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

/*
const masiveVote = async (breed) => {
    try {
        await db.collection("votes").doc(breed).set({
            breed: breed,
            votes: []
          });
          //setReload(!reload)
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      
}

DogsVote.forEach(dat => masiveVote(dat))

*/


const saveVote = async (dog, value) => {
   // var breedVote =  db.collection("votes").doc(dog.breed);
    const breedVote = doc(db, "votes", dog.breed);
    const voteDate = new Date()
    try {
        await updateDoc(breedVote, {
            updatedAt: voteDate,
            value: increment(value),
            votes: arrayUnion({"user":user.uid,"value":value,"voteDate":voteDate})
        });
        //console.log(dog.breed, value,voteDate, dog.url)
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
      <IconButton onClick={()=> saveVote(random, +1)} color="secondary" aria-label="Ver fotos">
        <MoodIcon />
      </IconButton>
      <IconButton  onClick={()=> saveVote(random, -1)}color="warning" aria-label="Ver fotos">
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

const DogsVote = [
    'affenpinscher',
'african',
'airedale',
'akita',
'appenzeller',
'australian shepherd',
'basenji',
'beagle',
'bluetick',
'borzoi',
'bouvier',
'boxer',
'brabancon',
'briard',
'buhund norwegian',
'bulldog boston',
'bulldog english',
'bulldog french',
'bullterrier staffordshire',
'cattledog australian',
'chihuahua',
'chow',
'clumber',
'cockapoo',
'collie border',
'coonhound',
'corgi cardigan',
'cotondetulear',
'dachshund',
'dalmatian',
'dane great',
'deerhound scottish',
'dhole',
'dingo',
'doberman',
'elkhound norwegian',
'entlebucher',
'eskimo',
'finnish lapphund',
'frise bichon',
'germanshepherd',
'greyhound italian',
'groenendael',
'havanese',
'hound afghan',
'hound basset',
'hound blood',
'hound english',
'hound ibizan',
'hound plott',
'hound walker',
'husky',
'keeshond',
'kelpie',
'komondor',
'kuvasz',
'labradoodle',
'labrador',
'leonberg',
'lhasa',
'malamute',
'malinois',
'maltese',
'mastiff bull',
'mastiff english',
'mastiff tibetan',
'mexicanhairless',
'mix',
'mountain bernese',
'mountain swiss',
'newfoundland',
'otterhound',
'ovcharka caucasian',
'papillon',
'pekinese',
'pembroke',
'pinscher miniature',
'pitbull',
'pointer german',
'pointer germanlonghair',
'pomeranian',
'poodle miniature',
'poodle standard',
'poodle toy',
'pug',
'puggle',
'pyrenees',
'redbone',
'retriever chesapeake',
'retriever curly',
'retriever flatcoated',
'retriever golden',
'ridgeback rhodesian',
'rottweiler',
'saluki',
'samoyed',
'schipperke',
'schnauzer giant',
'schnauzer miniature',
'setter english',
'setter gordon',
'setter irish',
'sheepdog english',
'sheepdog shetland',
'shiba',
'shihtzu',
'spaniel blenheim',
'spaniel brittany',
'spaniel cocker',
'spaniel irish',
'spaniel japanese',
'spaniel sussex',
'spaniel welsh',
'springer english',
'stbernard',
'terrier american',
'terrier australian',
'terrier bedlington',
'terrier border',
'terrier cairn',
'terrier dandie',
'terrier fox',
'terrier irish',
'terrier kerryblue',
'terrier lakeland',
'terrier norfolk',
'terrier norwich',
'terrier patterdale',
'terrier russell',
'terrier scottish',
'terrier sealyham',
'terrier silky',
'terrier tibetan',
'terrier toy',
'terrier welsh',
'terrier westhighland',
'terrier wheaten',
'terrier yorkshire',
'tervuren',
'vizsla',
'waterdog spanish',
'weimaraner',
'whippet',
'wolfhound irish',
'terrier irish'
]

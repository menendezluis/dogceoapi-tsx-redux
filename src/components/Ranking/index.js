import React,{ useEffect, useState } from 'react'
//redux
import { fetchDogRandom } from '../../store/slices/random'
import {useDispatch,useSelector} from 'react-redux'
//material
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

//vote
import Vote from '../Vote';
import './style.css'

//firebase
import { auth,db } from "../../config/firebase";
import { doc, updateDoc, arrayUnion, increment  } from "firebase/firestore";

const Ranking = () => {
    const [reload, setReload] = useState(false)
    const [votes, setVotes] = useState([])
   
    const { list: random } = useSelector(state => state.random)
//console.log("random",random)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDogRandom())
    }, [reload])

    const getVotes = async()=> {
      const snapshot = await db.collection('votes').get()
      let votesTable= []
      snapshot.docs.forEach(doc => {
        let dogVote = doc.data()
       
        if (dogVote.value)
        {
          votesTable.push({"breed":dogVote.breed, "value":dogVote.value})
        
        }
       
      })
      setVotes(votesTable)
   //   return snapshot.docs.map(doc => doc.data());
  }
  
  getVotes()
    return (
        <div className="container">
             <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '100%',
        },
      }}
    >
            <Paper elevation={3}> 
            <div className="row">
           
        
          <p>Votes</p>
        {votes.map(dat => 
          (<p>{dat.breed}{" - "}{dat.value}</p>))}
        
            </div>
            </Paper>
            </Box>
        </div>
    )
}

export default Ranking

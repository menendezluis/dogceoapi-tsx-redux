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

const Ranking = () => {
    const [reload, setReload] = useState(false)
    const { list: random } = useSelector(state => state.random)
//console.log("random",random)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDogRandom())
    }, [reload])
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
           
        <li>
          <ul> Bulldog Frances      11589 </ul>
          <ul> American buldog      2586 </ul>
          <ul> Pequinez             1256 </ul>
          <ul> Gran danes           1000</ul>
          <ul> Chihuahua             900 </ul>
        </li>
            </div>
            </Paper>
            </Box>
        </div>
    )
}

export default Ranking

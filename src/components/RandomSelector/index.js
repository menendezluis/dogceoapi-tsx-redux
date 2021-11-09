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

const RandomSelector = () => {
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
           
          <div  className="col-md-7">
                    <div className="card">
                        <img src={random.url} alt="avatar" />     
             </div>
             </div> 
            <div className="col-md-4">
            <div className="card-body">
                           <h5 className="card-title">{random.breed}</h5>
                           </div>
                           {random.wiki ? 
                           <div className="card-text">
                            
                           { random.wiki.bred_for ? <> <p>Breed for:{random.wiki.bred_for}</p> </>: null }
                           { random.wiki.breed_group ? <> <p>Breed Group: {random.wiki.breed_group}</p> </>: null }
                           { random.wiki.height ? <> <p>Height: Imperial {random.wiki.height.imperial} / Metric {random.wiki.height.metric}</p> </>: null }
                           { random.wiki.weight ? <> <p>Weight: Imperial {random.wiki.weight.imperial} / Metric {random.wiki.weight.metric}</p> </>: null }
                           { random.wiki.name ? <> <p>Name: {random.wiki.name}</p> </>: null }
                           { random.wiki.temperament ? <> <p>Others:{random.wiki.temperament}</p> </>: null }
                          <Vote />
                           </div>
                      : <><p>Not Data to display</p> 
                       <IconButton onClick={()=>setReload(!reload)} color="secondary" aria-label="Reload">
       <p>Reload <RefreshIcon /></p>
      </IconButton>
                      </> }
                           <p>
                              

                           </p>
            </div>
                
            </div>
            </Paper>
            </Box>
        </div>
    )
}

export default RandomSelector

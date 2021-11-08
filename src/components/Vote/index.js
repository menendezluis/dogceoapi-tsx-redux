import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentVeryDissatisfiedIcon  from '@mui/icons-material/MoodBad';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { grey } from '@mui/material/colors';


const theme = createTheme({
        palette: {
          primary: pink,
          secondary: green,
          tertiary: grey,

        },
});

const Vote = () => {
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
      <IconButton color="primary" aria-label="Ver fotos">
        <FavoriteIcon />
      </IconButton>
      </ThemeProvider>
    </Stack>
        </div>
    )
}

export default Vote

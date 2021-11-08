import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Favorite = () => {
    return (
        <div>
               
               
                <Stack direction="row" spacing={1}>
                <span>Raza favorita - Boston </span>
      <IconButton color="secondary" aria-label="Ver fotos">
        <PhotoCameraIcon />
      </IconButton>
      <IconButton color="warning" aria-label="Ver fotos">
        <DeleteForeverIcon />
      </IconButton>
    </Stack>
    </div>
        
    )
}

export default Favorite

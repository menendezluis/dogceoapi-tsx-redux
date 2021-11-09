import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const dogPhotosSlice = createSlice({
   name:"dogs",
   initialState:{
       list:[]
   },
   reducers:{
    setDogPhotos: (state, action) => {
        state.list = action.payload;
       }

   }
})

export const {setDogPhotos} = dogPhotosSlice.actions;
export default dogPhotosSlice.reducer


export const fetchDogPhotos = (breed:any) => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
 
    axios
      .get(`https://dog.ceo/api/breed/${breed.replace(' ','/')}/images`)
      .then((response) => {
            console.log(response)
        let data = response.data.message
        //console.log(Object.entries(data))
          dispatch(setDogPhotos(data));
          
      })
      .catch((error) => console.log(error));
        
}


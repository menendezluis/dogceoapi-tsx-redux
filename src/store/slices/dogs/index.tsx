import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const dogSlice = createSlice({
   name:"dogs",
   initialState:{
       list:[]
   },
   reducers:{
       setDogList: (state, action) => {
        state.list = action.payload;
       }

   }
})

export const {setDogList} = dogSlice.actions;
export default dogSlice.reducer


export const fetchDogsList = () => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
 console.log("hola")
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
            console.log(response)
        let data = response.data.message
        console.log()
          dispatch(setDogList(Object.keys(data)));
          
      })
      .catch((error) => console.log(error));
        
}


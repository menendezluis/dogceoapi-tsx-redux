import React, {useState} from 'react';
import Navbar from './components/Navbar';
import DogsList from './components/DogsList'
import RandomSelector from './components/RandomSelector'
import DogPhotos from './components/DogPhotos';
//redux
import { Provider } from 'react-redux';
import store from './store';



function App() {
const [breedSelection, setbreedSelection] = useState('')

  return (
    <Provider store={store}>
    <div >
     <div>
       <Navbar breedSelection={setbreedSelection}/>
      
  
  <DogsList breedSelection={setbreedSelection}/>
  {breedSelection ? 
    <DogPhotos breedSelection={breedSelection}/> :
<RandomSelector />
  }
  
  

</div>
     </div>
     </Provider>
  );
}

export default App;

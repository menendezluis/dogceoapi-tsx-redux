import React, {useState} from 'react';
import Navbar from './components/Navbar';
import DogsList from './components/DogsList'
import RandomSelector from './components/RandomSelector'
import DogPhotos from './components/DogPhotos';
import Ranking from './components/Ranking'
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
    
    <div className="container">
          <div className="row">
              <div className="col-sm-9">
              <RandomSelector />
              </div>
              <div className="col-sm-3">  <Ranking /></div>
        </div>
    </div>


  }
  
  

</div>
     </div>
     </Provider>
  );
}

export default App;

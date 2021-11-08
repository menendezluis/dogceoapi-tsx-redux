import React from 'react';
import Navbar from './components/Navbar';
import DogsList from './components/DogsList'
import RandomSelector from './components/RandomSelector'

//redux
import { Provider } from 'react-redux';
import store from './store';

//firebase
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase/firebase';

function App() {

  const app = initializeApp(firebaseConfig);

  return (
    <Provider store={store}>
    <div >
     <div>
       <Navbar/>
       <h1>Random Selector</h1>
  
  <DogsList/>
  <RandomSelector />
  

</div>
     </div>
     </Provider>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Layout from './components/CustomLayout'
import Signin from './components/Signin';
import {firebase} from './Firebase/firebase'

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(true);
  firebase.auth().onAuthStateChanged( (user) => {
    if(user){
      return setisLoggedIn(true);
    }

    setisLoggedIn(false);
  })

  return (
    <div className="App">
      {isLoggedIn
        ? <Layout/>
        : <Signin/>
      }

    </div>
  );
}

export default App;

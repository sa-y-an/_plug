import React, { useState } from 'react';
import './App.css';
import Layout from './components/CustomLayout'
import Signin from './components/Signin';
import {firebase} from './Firebase/firebase'
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(true);
  const {user} = useAuthContext();

  // firebase.auth().onAuthStateChanged( (user) => {
  //   if(user){
  //     return setisLoggedIn(true);
  //   }

  //   setisLoggedIn(false);
  // })
  console.log(user);

  return (

    

    <div className="App">
      {!user && 
        <>
          <Signin/>
        </>
      }

      {user && 
        <>
          <Layout/>
        </>
      }

    </div>
  );
}

export default App;

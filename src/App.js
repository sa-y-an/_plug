import React, { useState } from 'react';
import './App.css';
import Layout from './components/CustomLayout'
import Signin from './components/Signin';
import {firebase} from './Firebase/firebase'
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(true);
  const { authIsReady, user } = useAuthContext()

  return (

    

    <div className="App">
      { authIsReady && (
        <div>
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
      )}


    </div>
  );
}

export default App;

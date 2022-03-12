import React, { useState } from 'react';
import './App.css';
import Layout from './components/CustomLayout'
import Signin from './components/Signin';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

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

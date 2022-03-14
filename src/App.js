import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import Loved from "./pages/Loved"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import {Rings} from "react-loader-spinner";

function App() {

const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
    {!authIsReady && 
    <div style={{ backgroundColor : "black",  height:"100vh" ,width:"100vw" , display : "flex", alignItem : "center", justifyContent: "center"}}>
      <Rings color="#00BFFF" height={"100vh"} width={"100vw"} />
    </div>
    
    }

      { authIsReady && (
        
        <BrowserRouter>
          <Routes>
            { user ? <Route path="/" element={<Home/>} exact/> :  <Route path="/" element={<SignIn/>} exact/> }
            { user ? <Route path="/profile" element={<Profile/>} /> :  <Route path="/profile" element={<SignIn/>} />}
            { user ? <Route path="/favourites" element={<Loved/>} /> :  <Route path="/favourites" element={<SignIn/>} />}
          </Routes>
        </BrowserRouter>

      )}


    </div>
  );
}

export default App;

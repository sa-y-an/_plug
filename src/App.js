import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

function App() {

const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      { authIsReady && (
        
        <BrowserRouter>
          <Routes>
            { user ? <Route path="/" element={<Home/>} exact/> :  <Route path="/" element={<SignIn/>} exact/> }
            { user ? <Route path="/profile" element={<Profile/>} /> :  <Route path="/profile" element={<SignIn/>} exact/> }
          </Routes>
        </BrowserRouter>

      )}


    </div>
  );
}

export default App;

import React from 'react'
import { firebase } from '../Firebase/firebase'

function Signin() {
    
    const SignInWithFireBase = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then( (re) => {
            console.log(re);
        })
        .catch( (err) => {
            console.log(err);
        })
    }
  
    return (

    

    <div>
        <button onClick={SignInWithFireBase}> SignIn with Google </button>
    </div>
  )
}

export default Signin
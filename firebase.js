import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAizGOpSfigUx-zmFtXsr63mLYFxXwUFVg",
    authDomain: "plug-d8a44.firebaseapp.com",
    projectId: "plug-d8a44",
    storageBucket: "plug-d8a44.appspot.com",
    messagingSenderId: "1044833208247",
    appId: "1:1044833208247:web:12dad54246baaa3a110a32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
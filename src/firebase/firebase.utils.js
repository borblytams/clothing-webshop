import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyCodEjm7T3Pin8gsgcWeTYkRvV06CjlB-4",
    authDomain: "crwn-db-5d368.firebaseapp.com",
    projectId: "crwn-db-5d368",
    storageBucket: "crwn-db-5d368.appspot.com",
    messagingSenderId: "52688848017",
    appId: "1:52688848017:web:18239fe90147a897ba6b30"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore"
import 'firebase/storage';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCnfIjx3xb26Q_B03WelcUv-sENEpUW2tw",
    authDomain: "twitterclone1212.firebaseapp.com",
    projectId: "twitterclone1212",
    storageBucket: "twitterclone1212.appspot.com",
    messagingSenderId: "892281514455",
    appId: "1:892281514455:web:848d9175a5501fe942c392",
    measurementId: "G-T9TEVNS7P0"
  };

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = getFirestore(fb);

  const storage = firebase.storage()


export {storage, firebase as default}
 
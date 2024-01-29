import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDFzNANJRYbx8tj5TNuIR-FWCSvP9eGYdM",
  authDomain: "linkedin-clone-yt-4dc89.firebaseapp.com",
  projectId: "linkedin-clone-yt-4dc89",
  storageBucket: "linkedin-clone-yt-4dc89.appspot.com",
  messagingSenderId: "650527363006",
  appId: "1:650527363006:web:ce14e7509dc50146a733ef"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHXRVVoRiZ9V_9V4_aIRodfmQCQrhNO5A",
    authDomain: "shaddi-ac69b.firebaseapp.com",
    projectId: "shaddi-ac69b",
    storageBucket: "shaddi-ac69b.appspot.com",
    messagingSenderId: "28920341551",
    appId: "1:28920341551:web:363f265eb9cd23319f92da"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//  Initialize Storage and Firestore
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};
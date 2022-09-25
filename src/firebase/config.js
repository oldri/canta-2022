import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJCEIAthKsyICgAjscc6Yhu_xHKFS53Kc",
    authDomain: "canta-2022.firebaseapp.com",
    projectId: "canta-2022",
    storageBucket: "canta-2022.appspot.com",
    messagingSenderId: "924518764707",
    appId: "1:924518764707:web:3b0462aea5b1c7245baf16",
    measurementId: "G-46M5EKJCXX"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); 
}

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

export { projectStorage, projectFirestore };


import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCix7SzY034kskvXnozVv248_WqilMoL60",
    authDomain: "sujeitopost-52f38.firebaseapp.com",
    projectId: "sujeitopost-52f38",
    storageBucket: "sujeitopost-52f38.appspot.com",
    messagingSenderId: "17041106286",
    appId: "1:17041106286:web:4a4c4e70b8d2da10458d7f",
    measurementId: "G-L10WKSPV2K"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBsqD6lHQtkeX4_iEhDZiGTwq5tJn6u8s",
    authDomain: "einunknowntodo.firebaseapp.com",
    databaseURL: "https://einunknowntodo.firebaseio.com",
    projectId: "einunknowntodo",
    storageBucket: "einunknowntodo.appspot.com",
    messagingSenderId: "52725877792",
    appId: "1:52725877792:web:0f65c2dbaee90c0da48045",
    measurementId: "G-8V10NG6264"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  /* firebase.analytics(); */

  const db = firebase.firestore();

  export default db;
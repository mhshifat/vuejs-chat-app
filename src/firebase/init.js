import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYaljJ6nEnW5W22GMXeLSQkAuy_5mgOhg",
  authDomain: "vuejs-ninja-chat-f85fb.firebaseapp.com",
  databaseURL: "https://vuejs-ninja-chat-f85fb.firebaseio.com",
  projectId: "vuejs-ninja-chat-f85fb",
  storageBucket: "",
  messagingSenderId: "370769487321"
};
firebase.initializeApp(config);

export default firebase.firestore();

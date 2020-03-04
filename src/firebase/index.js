import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBRbGnmr1NmpZLFwEb3rqO_xBInKorQNQk",
  authDomain: "ichat-4ee4f.firebaseapp.com",
  databaseURL: "https://ichat-4ee4f.firebaseio.com",
  projectId: "ichat-4ee4f",
  storageBucket: "ichat-4ee4f.appspot.com",
  messagingSenderId: "864107614095",
  appId: "1:864107614095:web:6bca38eb81d505e54485fa"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
};


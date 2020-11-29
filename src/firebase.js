import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyAzpHyEziYiX95Qg7RREXb4ZlBQ5IFmzvA",
  authDomain: "react-blog-app-f01f1.firebaseapp.com",
  databaseURL: "https://react-blog-app-f01f1.firebaseio.com",
  projectId: "react-blog-app-f01f1",
  storageBucket: "react-blog-app-f01f1.appspot.com",
  messagingSenderId: "436465015052",
  appId: "1:436465015052:web:c79d8d19c177fbb9075129",
  measurementId: "G-683CFENDHM"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};

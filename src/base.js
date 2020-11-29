import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  "projectId": "react-blog-app-f01f1",
  "appId": "1:436465015052:web:3de4bd24281d2bbf075129",
  "databaseURL": "https://react-blog-app-f01f1.firebaseio.com",
  "storageBucket": "react-blog-app-f01f1.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyAzpHyEziYiX95Qg7RREXb4ZlBQ5IFmzvA",
  "authDomain": "react-blog-app-f01f1.firebaseapp.com",
  "messagingSenderId": "436465015052",
  "measurementId": "G-N1HR6FK3TT"
});
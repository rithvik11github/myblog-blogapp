import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  "projectId": "********************",
  "appId": "*****************************",
  "databaseURL": "******************************",
  "storageBucket": "*****************",
  "locationId": "*******",
  "apiKey": "****************",
  "authDomain": "**************",
  "messagingSenderId": "*********",
  "measurementId": "***********"
});

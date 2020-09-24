import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnqgDYqDr-3LsIlUda1sl4AoMeIoWlDkM",
  authDomain: "msgapp-20187.firebaseapp.com",
  databaseURL: "https://msgapp-20187.firebaseio.com",
  projectId: "msgapp-20187",
  storageBucket: "msgapp-20187.appspot.com",
  messagingSenderId: "92381241673",
  appId: "1:92381241673:web:42fb373a7f33a29650ba98",
  measurementId: "G-M42652BET8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

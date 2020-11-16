import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvMQMd_TjmmiuH4TC5Y9vrFZ28p4SQ0qk",
  authDomain: "slack-clone-ccc9b.firebaseapp.com",
  databaseURL: "https://slack-clone-ccc9b.firebaseio.com",
  projectId: "slack-clone-ccc9b",
  storageBucket: "slack-clone-ccc9b.appspot.com",
  messagingSenderId: "278652188806",
  appId: "1:278652188806:web:a7ad6657cf050d9c76f907",
  measurementId: "G-EKNFVYGE6Z"
};

const firebassApp = firebase.initializeApp(firebaseConfig);
const db = firebassApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBElQU2E1O3ERWXFY0be5Z511GFRZPRXfA",
    authDomain: "slack-2-1e793.firebaseapp.com",
    projectId: "slack-2-1e793",
    storageBucket: "slack-2-1e793.appspot.com",
    messagingSenderId: "919369262330",
    appId: "1:919369262330:web:66b9ca56590fbeacead543"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db , provider , auth};
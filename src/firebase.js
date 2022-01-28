import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-yO_cD_9qAfGVFu5KiwAOhZVdUgM3qCg",
  authDomain: "slack-clone-aa146.firebaseapp.com",
  projectId: "slack-clone-aa146",
  storageBucket: "slack-clone-aa146.appspot.com",
  messagingSenderId: "760484297943",
  appId: "1:760484297943:web:1910fb2a764aa8ac0bc492",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

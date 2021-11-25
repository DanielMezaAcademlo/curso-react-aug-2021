import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjOMuuEVphRecQT2I1TiquFus4ME4J0Mk",
  authDomain: "login-redux-academlo.firebaseapp.com",
  projectId: "login-redux-academlo",
  storageBucket: "login-redux-academlo.appspot.com",
  messagingSenderId: "850493059107",
  appId: "1:850493059107:web:481fad78c38a25bdb54196"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };

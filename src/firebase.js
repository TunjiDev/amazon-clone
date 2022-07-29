import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC27oRTrUryiJykRNO597TyLHEW-Mo62hk",
  authDomain: "clone-4af69.firebaseapp.com",
  projectId: "clone-4af69",
  storageBucket: "clone-4af69.appspot.com",
  messagingSenderId: "469105804751",
  appId: "1:469105804751:web:ce4b63d6dacb1642b57eba",
  measurementId: "G-3C7X8T0F75",
});

// const db = firebaseApp.firestore(); //For database
const auth = firebase.auth(); //For authentication/login

export { auth };

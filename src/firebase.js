// src/firebase.js
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLOpGVnh7Ii_E_WDx27uvhtH2OhgWpwGw",
  authDomain: "test-f8f35.firebaseapp.com",
  projectId: "test-f8f35",
  storageBucket: "test-f8f35.appspot.com",
  messagingSenderId: "119500009997",
  appId: "1:119500009997:web:6306b63f2a49f7659cdb44",
  measurementId: "G-KY36SZSHC6"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW7krQm2m5mQtfpWCohhuiXkAQXUaok6g",
  authDomain: "audio-store-45d65.firebaseapp.com",
  projectId: "audio-store-45d65",
  storageBucket: "audio-store-45d65.appspot.com",
  messagingSenderId: "439967803623",
  appId: "1:439967803623:web:cc17c2512710e0ccf39a42",
  measurementId: "G-RKWBQGZ36D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const googleSignIn = () => signInWithPopup(auth, provider);

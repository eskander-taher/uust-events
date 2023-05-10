// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnQtNPX3SMicB678UuHpRqBopLWVQxBGU",
  authDomain: "ugatu-events.firebaseapp.com",
  projectId: "ugatu-events",
  storageBucket: "ugatu-events.appspot.com",
  messagingSenderId: "556834672927",
  appId: "1:556834672927:web:0d959173f0eb21c8e2a02a",
  measurementId: "G-7Y8CTJYTZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

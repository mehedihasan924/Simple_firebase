// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTXMiFaetaEug29pxn_T0WO9Do2E-e5gw",
  authDomain: "email-password-first.firebaseapp.com",
  projectId: "email-password-first",
  storageBucket: "email-password-first.appspot.com",
  messagingSenderId: "1064145557101",
  appId: "1:1064145557101:web:a8cddae4ccc19be26c5164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
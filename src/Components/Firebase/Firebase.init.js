// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5TSFygRTSocWH0Uy404u57E7AwHY3Uo",
  authDomain: "art-auth-project.firebaseapp.com",
  projectId: "art-auth-project",
  storageBucket: "art-auth-project.appspot.com",
  messagingSenderId: "646793045006",
  appId: "1:646793045006:web:adfab3391b1f06a3abc85f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
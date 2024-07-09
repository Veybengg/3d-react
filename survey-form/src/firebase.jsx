// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcjL9FteQMej5B566ChIb16y-rknXzoA4",
  authDomain: "activty-b843d.firebaseapp.com",
  projectId: "activty-b843d",
  storageBucket: "activty-b843d.appspot.com",
  messagingSenderId: "188875036588",
  appId: "1:188875036588:web:9fbf6ce85e22301589cc09",
  measurementId: "G-M2943MHST2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
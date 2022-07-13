// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-RiAPAH2LJ8chUGMrJW87r9hDGWCBmQ",
  authDomain: "freshmango-auth.firebaseapp.com",
  projectId: "freshmango-auth",
  storageBucket: "freshmango-auth.appspot.com",
  messagingSenderId: "920018368365",
  appId: "1:920018368365:web:ae4e3d528bedb9cce74c64",
  measurementId: "G-QB9E1SNBEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);
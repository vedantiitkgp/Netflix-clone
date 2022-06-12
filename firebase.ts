// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhInbBEAagDC9mvNIGWTbqzlM_wZb6xw",
  authDomain: "netflix-clone-78835.firebaseapp.com",
  projectId: "netflix-clone-78835",
  storageBucket: "netflix-clone-78835.appspot.com",
  messagingSenderId: "188761021643",
  appId: "1:188761021643:web:03b118e3d4068180c84f4e",
  measurementId: "G-LW0916VM3K"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
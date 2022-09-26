
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDVu4WIpYGIBfDRmCnlz9fXKbj-tPD7uf0",
  authDomain: "react-portfolio-app-7efa6.firebaseapp.com",
  projectId: "react-portfolio-app-7efa6",
  storageBucket: "react-portfolio-app-7efa6.appspot.com",
  messagingSenderId: "861772738687",
  appId: "1:861772738687:web:4e1b0e545a3b6ec9ee0f4a",
  measurementId: "G-G6M296J8L3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
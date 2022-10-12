// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase';
import { getFireStore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD8Z4sEGenpoUICE2MeEU80ZMvzFsYtVg",
  authDomain: "we-need-to-talk-1f922.firebaseapp.com",
  projectId: "we-need-to-talk-1f922",
  storageBucket: "we-need-to-talk-1f922.appspot.com",
  messagingSenderId: "427640292323",
  appId: "1:427640292323:web:2aa4cff2d5815ebe23d6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFireStore(app);
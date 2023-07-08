// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBPMO8LzmB-Guq67yaf2GwI2UxqKWcxBXw",
  authDomain: "fir-med-ec8c4.firebaseapp.com",
  projectId: "fir-med-ec8c4",
  storageBucket: "fir-med-ec8c4.appspot.com",
  messagingSenderId: "278225203631",
  appId: "1:278225203631:web:cfa527d2d03d44ced43f5a",
  measurementId: "G-SZ0W20HFSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth, provider};

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXIl8x0XHIm6CRD2I9i2Z3QIWu7JZhHL8",
  authDomain: "chatreact-a2965.firebaseapp.com",
  projectId: "chatreact-a2965",
  storageBucket: "chatreact-a2965.appspot.com",
  messagingSenderId: "287641432510",
  appId: "1:287641432510:web:76a92e1b6598629dc8c9ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

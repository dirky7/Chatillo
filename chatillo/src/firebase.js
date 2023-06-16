import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxx_XaSLioOud1RwvwDVthVsJSABCjdMI",
  authDomain: "chatillo-8e41b.firebaseapp.com",
  projectId: "chatillo-8e41b",
  storageBucket: "chatillo-8e41b.appspot.com",
  messagingSenderId: "744609800518",
  appId: "1:744609800518:web:454703de8e953a0f38c547"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
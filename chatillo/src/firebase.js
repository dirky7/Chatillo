import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAio9PRplolRuvyLi_O2D1narsXCqUjiR8",
	authDomain: "chatillo-442e9.firebaseapp.com",
	projectId: "chatillo-442e9",
	storageBucket: "chatillo-442e9.appspot.com",
	messagingSenderId: "789473032322",
	appId: "1:789473032322:web:507895bc50a219b4fadc9b",
	measurementId: "G-PTVKXNW23F"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

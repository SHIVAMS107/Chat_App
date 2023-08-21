import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsTq-lHf0s8R1CeDkugByRggSLr7dm7LU",
  authDomain: "chatt-83632.firebaseapp.com",
  projectId: "chatt-83632",
  storageBucket: "chatt-83632.appspot.com",
  messagingSenderId: "93048984478",
  appId: "1:93048984478:web:f8c08016b3f03f098fbc8f"
};
console.log(firebaseConfig)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
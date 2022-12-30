import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMUayD4H1Us-QfeP21CLwYVWNA5BLU9lM",
  authDomain: "chat-a58bc.firebaseapp.com",
  projectId: "chat-a58bc",
  storageBucket: "chat-a58bc.appspot.com",
  messagingSenderId: "646621711935",
  appId: "1:646621711935:web:19cbd38e1ecf164192b28a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

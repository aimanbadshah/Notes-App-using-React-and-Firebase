// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAi67vB-hOSpUF3CMfQGA-0Lf5EBmc3FXQ",
  authDomain: "notes-app-cc73e.firebaseapp.com",
  projectId: "notes-app-cc73e",
  storageBucket: "notes-app-cc73e.appspot.com",
  messagingSenderId: "332690004234",
  appId: "1:332690004234:web:fbf53a3c83c31f090b02f3",
  measurementId: "G-S1D98JZ2V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

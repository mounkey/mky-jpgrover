import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoT2hKHXZ9mE4xcSvfDG7qShoumHUbh0E",
  authDomain: "mky-jpgrover.firebaseapp.com",
  projectId: "mky-jpgrover",
  storageBucket: "mky-jpgrover.appspot.com",
  messagingSenderId: "945386159509",
  appId: "1:945386159509:web:63abac3ecfca4fc8934a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
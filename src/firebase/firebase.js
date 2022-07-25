
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_MKYjpg_apiKey,
  authDomain: process.env.REACT_APP_MKYjpg_authDomain,
  projectId: process.env.REACT_APP_MKYjpg_projectId,
  storageBucket: process.env.REACT_APP_MKYjpg_storageBucket,
  messagingSenderId: "945386159509",
  appId: "1:945386159509:web:63abac3ecfca4fc8934a9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
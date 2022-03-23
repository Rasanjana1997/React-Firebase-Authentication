import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWfn8vFZwKnXIysXA26yGMLrnWT73SxAU",
  authDomain: "react-auth-3445c.firebaseapp.com",
  projectId: "react-auth-3445c",
  storageBucket: "react-auth-3445c.appspot.com",
  messagingSenderId: "1029869893397",
  appId: "1:1029869893397:web:6035142b351b2428a79b1c",
  measurementId: "G-LRXQCKVG10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
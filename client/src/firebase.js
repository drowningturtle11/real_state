// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-b2b24.firebaseapp.com",
  projectId: "mern-state-b2b24",
  storageBucket: "mern-state-b2b24.appspot.com",
  messagingSenderId: "655004975712",
  appId: "1:655004975712:web:9f03bbbb96f9d6ee167905"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
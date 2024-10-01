// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-58d99.firebaseapp.com",
  projectId: "real-estate-mern-58d99",
  storageBucket: "real-estate-mern-58d99.appspot.com",
  messagingSenderId: "922396681742",
  appId: "1:922396681742:web:70933b28284362d8a93e5f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

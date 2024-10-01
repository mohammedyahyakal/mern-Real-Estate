import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store .js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDXe4ViXP7_2v-0DxNYXCNW484CHdXzlI",
  authDomain: "real-estate-mern-58d99.firebaseapp.com",
  projectId: "real-estate-mern-58d99",
  storageBucket: "real-estate-mern-58d99.appspot.com",
  messagingSenderId: "922396681742",
  appId: "1:922396681742:web:70933b28284362d8a93e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

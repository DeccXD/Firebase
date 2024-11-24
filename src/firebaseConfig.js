
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxq-P39nUUH3YD8-RrqKuFKeOak2B4xYM",
  authDomain: "loginfb-28f6e.firebaseapp.com",
  projectId: "loginfb-28f6e",
  storageBucket: "loginfb-28f6e.appspot.com",
  messagingSenderId: "976614848550",
  appId: "1:976614848550:web:1f4fc2b8f5b3c884c34ee7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

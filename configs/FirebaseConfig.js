// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBORx_GkNDVHGLMynAA8g9sIWDKj8-q17g",
  authDomain: "app-viagem-bcce2.firebaseapp.com",
  projectId: "app-viagem-bcce2",
  storageBucket: "app-viagem-bcce2.appspot.com",
  messagingSenderId: "464113267731",
  appId: "1:464113267731:web:b609b1fa204073f175fbe6",
  measurementId: "G-40P1GWZEZ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
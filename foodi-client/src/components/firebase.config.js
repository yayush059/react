// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACNLZ12dBgHmqcHnPQelDLG0Y_vjkuhm4",
  authDomain: "foodi-client-62aa4.firebaseapp.com",
  projectId: "foodi-client-62aa4",
  storageBucket: "foodi-client-62aa4.appspot.com",
  messagingSenderId: "199264839964",
  appId: "1:199264839964:web:571bfdde6e6ed56a7cf2d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
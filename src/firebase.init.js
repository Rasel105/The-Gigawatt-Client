// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHP9bMVNj4_PsZRi0aM6Ol5uSE6tAJ-hU",
  authDomain: "the-gigawatt.firebaseapp.com",
  projectId: "the-gigawatt",
  storageBucket: "the-gigawatt.appspot.com",
  messagingSenderId: "621937492821",
  appId: "1:621937492821:web:0559ce79432a9b1b2b25dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
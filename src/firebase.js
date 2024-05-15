// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArFsRsDHL0Y9W5S9uyEaHHZJ_qmwKisrY",
  authDomain: "react-firebase-auth-13573.firebaseapp.com",
  projectId: "react-firebase-auth-13573",
  storageBucket: "react-firebase-auth-13573.appspot.com",
  messagingSenderId: "224213215503",
  appId: "1:224213215503:web:edfcd5fb615007a4d6767a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Set persistence to Local Storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to LocalStorage.");
  })
  .catch((err) => {
    console.error("Error setting auth persistence:", err);
  });

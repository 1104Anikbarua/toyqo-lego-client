// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdGFNW7K34VXhEGrTOmT6WNfq7cQ5IrSs",
    authDomain: "lego-cars-210d4.firebaseapp.com",
    projectId: "lego-cars-210d4",
    storageBucket: "lego-cars-210d4.appspot.com",
    messagingSenderId: "1013712828101",
    appId: "1:1013712828101:web:380eac58a263640379a2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
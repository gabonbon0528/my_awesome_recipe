// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_F8Q9UGZpl2px1i9b1Xp609onUDesLuE",
  authDomain: "my-awesome-recipe-c5f04.firebaseapp.com",
  projectId: "my-awesome-recipe-c5f04",
  storageBucket: "my-awesome-recipe-c5f04.firebasestorage.app",
  messagingSenderId: "610568188380",
  appId: "1:610568188380:web:e353f53278d01ad7a01f19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

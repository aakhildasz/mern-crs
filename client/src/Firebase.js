// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crsprotal.firebaseapp.com",
  projectId: "crsprotal",
  storageBucket: "crsprotal.appspot.com",
  messagingSenderId: "949490460242",
  appId: "1:949490460242:web:fd5983546293e95aba618b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

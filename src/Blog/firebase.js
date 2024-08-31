
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqYgw-jx7RwcVFDUWsSX-w3nA4NZlYsFw",
  authDomain: "tylerblog-10fa4.firebaseapp.com",
  projectId: "tylerblog-10fa4",
  storageBucket: "tylerblog-10fa4.appspot.com",
  messagingSenderId: "395595647894",
  appId: "1:395595647894:web:0c0c953f722c9ea9baebb7",
  measurementId: "G-VQFXNW7MZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const firestore = getFirestore(app);
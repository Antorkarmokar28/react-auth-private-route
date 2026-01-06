// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFRQ7EfMFI3ZiBrVTpTvLRuU6bX-OATnA",
  authDomain: "react-auth-private-route-b5b5e.firebaseapp.com",
  projectId: "react-auth-private-route-b5b5e",
  storageBucket: "react-auth-private-route-b5b5e.firebasestorage.app",
  messagingSenderId: "130853003794",
  appId: "1:130853003794:web:7ece71837117ae66256ecb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

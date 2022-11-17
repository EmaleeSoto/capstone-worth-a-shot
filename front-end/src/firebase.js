// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDsBFvC51evFeTpkzKNwa65f-QnZeSCE",
  authDomain: "worth-a-shot.firebaseapp.com",
  projectId: "worth-a-shot",
  storageBucket: "worth-a-shot.appspot.com",
  messagingSenderId: "971567692550",
  appId: "1:971567692550:web:9ed4e6f97a0313401f3c87",
  measurementId: "G-GQQRMMLHW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

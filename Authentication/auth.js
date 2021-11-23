// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCipaADEfrbZ-I4jrw8ZtyFEjLRX6FzWEo",
  authDomain: "project-manhattan-d14e3.firebaseapp.com",
  projectId: "project-manhattan-d14e3",
  storageBucket: "project-manhattan-d14e3.appspot.com",
  messagingSenderId: "437681308358",
  appId: "1:437681308358:web:0dd1e2f84792e297010dc7",
  measurementId: "G-GGHYJ4ZM59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
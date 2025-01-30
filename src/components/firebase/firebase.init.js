// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKY8r8QupaMMqaRpxiwbT5lQJ1CjQNXz0",
  authDomain: "blog-site-1f988.firebaseapp.com",
  projectId: "blog-site-1f988",
  storageBucket: "blog-site-1f988.firebasestorage.app",
  messagingSenderId: "749860861185",
  appId: "1:749860861185:web:5bfc68e32037a2d3361700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
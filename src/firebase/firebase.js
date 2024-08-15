import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGifOvuOmSMfi91fkoqVYlSpfer4hBCUQ",
  authDomain: "taskmanager-b344c.firebaseapp.com",
  projectId: "taskmanager-b344c",
  storageBucket: "taskmanager-b344c.appspot.com",
  messagingSenderId: "895997264639",
  appId: "1:895997264639:web:7996d3c6b44df257a5c2ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
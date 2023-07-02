import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCtCZP_Xu6y_B2SE75vvI5s7WMgi9RcqM",
  authDomain: "library-management-syste-a5b45.firebaseapp.com",
  projectId: "library-management-syste-a5b45",
  storageBucket: "library-management-syste-a5b45.appspot.com",
  messagingSenderId: "944277415581",
  appId: "1:944277415581:web:50027b056952dbe1231674",
  measurementId: "G-L8VJCDEXNM"
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

export {firebaseAuth, provider};
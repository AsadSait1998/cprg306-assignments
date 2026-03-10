// app/week-8/_utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuPDqDsDuIQbUycOh4R1SDYS7B6FMMOFA",
  authDomain: "cprg306-assignments-ddbfb.firebaseapp.com",
  projectId: "cprg306-assignments-ddbfb",
  storageBucket: "cprg306-assignments-ddbfb.appspot.com", // fixed here
  messagingSenderId: "54950037664",
  appId: "1:54950037664:web:6935870a5bd8771a41a1c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
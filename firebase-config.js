
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnLzL-q6wKr5QB6PQxRDyminNDqZawz8U",
  authDomain: "clean-171d1.firebaseapp.com",
  projectId: "clean-171d1",
  storageBucket: "clean-171d1.appspot.com",
  messagingSenderId: "251971756889",
  appId: "1:251971756889:web:b1e834736287da4ffb6248",
  measurementId: "G-2BKLSYS7VW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

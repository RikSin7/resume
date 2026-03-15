import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD3zv2NcX_N7A1qgLlrz8205eCDaUBGoQc",
    authDomain: "resume-web-0.firebaseapp.com",
    projectId: "resume-web-0",
    storageBucket: "resume-web-0.firebasestorage.app",
    messagingSenderId: "273744016925",
    appId: "1:273744016925:web:4bfd4e2c5d9db00c8ff8f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


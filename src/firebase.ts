import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtvDZ7Bh5I7SsWv69J33JLK4c9DLhR5b0",
  authDomain: "discord-clone-udemy-81e33.firebaseapp.com",
  projectId: "discord-clone-udemy-81e33",
  storageBucket: "discord-clone-udemy-81e33.appspot.com",
  messagingSenderId: "311378754401",
  appId: "1:311378754401:web:47396ec617ccf8fdf96320"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRM8FjdXmWkZ7_rGliH3uKSpqU0b8IZv4",
  authDomain: "financely-d2740.firebaseapp.com",
  projectId: "financely-d2740",
  storageBucket: "financely-d2740.appspot.com",
  messagingSenderId: "414206059343",
  appId: "1:414206059343:web:a160114203dc9cfa25db3a",
  measurementId: "G-4XYJ3817DB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdhMvqTNsnlRXm4LX95MM6c1VyUlfPI_8",
  authDomain: "portfolio-6c807.firebaseapp.com",
  projectId: "portfolio-6c807",
  storageBucket: "portfolio-6c807.appspot.com",
  messagingSenderId: "646619051005",
  appId: "1:646619051005:web:73ac2edbb4cb10e3715f94",
  measurementId: "G-KW6C6NFWS9"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
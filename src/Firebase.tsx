// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyVzExKSWB-pbAC3Wp_Ojlq2KQA-2eJno",
  authDomain: "portfolio-757ee.firebaseapp.com",
  projectId: "portfolio-757ee",
  storageBucket: "portfolio-757ee.firebasestorage.app",
  messagingSenderId: "730980273606",
  appId: "1:730980273606:web:ca2a52d57a1b1850a836c7",
  measurementId: "G-0VGD7DXFSM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

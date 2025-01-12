// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
// console.log(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN)
// console.log(import.meta.env.VITE_FIREBASE_PROJECT_ID)
// console.log(import.meta.env.VITE_FIREBASE_STOREAGE_BUCKET)
// console.log(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID)
// console.log(import.meta.env.VITE_FIREBASE_APP_ID)


// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:             import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:         import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:          import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:      import.meta.env.VITE_FIREBASE_STOREAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:              import.meta.env.VITE_FIREBASE_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAQRNcgMVdUC4v7lpgXcWlapFg7Kd5yrFk",
//   authDomain: "myfirstproject-3887d.firebaseapp.com",
//   projectId: "myfirstproject-3887d",
//   storageBucket: "myfirstproject-3887d.firebasestorage.app",
//   messagingSenderId: "117452418171",
//   appId: "1:117452418171:web:cd4bab8f7a1de03104c6de"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db} 
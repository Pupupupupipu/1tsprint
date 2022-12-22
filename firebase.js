// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import 'https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js'
import "https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js"
import "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore-compat.js"
import "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth-compat.js"


const firebaseConfig = {
  apiKey: "AIzaSyBx-_dW8AyNV1qCjNuRO4h-JtCeTJUnbBc",
  authDomain: "anongifts-44d60.firebaseapp.com",
  projectId: "anongifts-44d60",
  storageBucket: "anongifts-44d60.appspot.com",
  messagingSenderId: "125878013445",
  appId: "1:125878013445:web:df95defaa4ff47e0c4166c",
  measurementId: "G-YBYFDLXK1Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const db = firebase.firestore();
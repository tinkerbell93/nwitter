import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJhygLqBINTh-dSL9MV1u6a2RNmfigALQ",
  authDomain: "nwitter-a93d6.firebaseapp.com",
  projectId: "nwitter-a93d6",
  storageBucket: "nwitter-a93d6.appspot.com",
  messagingSenderId: "171368281048",
  appId: "1:171368281048:web:952192d5f91a342f2978ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
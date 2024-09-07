// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2pBrsjgwLAO_oO1uYyaH2itFBwLpVJgI",
  authDomain: "pinkpilot-61fef.firebaseapp.com",
  projectId: "pinkpilot-61fef",
  storageBucket: "pinkpilot-61fef.appspot.com",
  messagingSenderId: "237956924862",
  appId: "1:237956924862:web:aa14eb1852b5c2064a65ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
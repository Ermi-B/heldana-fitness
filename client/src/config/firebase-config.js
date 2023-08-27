import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCE99Y47fAiUd1HckhxU_e_aHn5TAu6dc8",
    authDomain: "heldana-fitness.firebaseapp.com",
    projectId: "heldana-fitness",
    storageBucket: "heldana-fitness.appspot.com",
    messagingSenderId: "941913125788",
    appId: "1:941913125788:web:4b5131a9f70dadea980e59",
    measurementId: "G-YKQC599MFN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider}
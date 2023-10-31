import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAIegrfXNLIh8lEFQZFzT4T83o_3icxbpY",
    authDomain: "tinder-gbh.firebaseapp.com",
    projectId: "tinder-gbh",
    storageBucket: "tinder-gbh.appspot.com",
    messagingSenderId: "911556713973",
    appId: "1:911556713973:web:80d55f21d1ced75f1bd4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(firebaseConfig);
export { auth, provider }
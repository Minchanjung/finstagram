import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    console.log(auth);
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}
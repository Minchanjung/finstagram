import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDuSiGDwALaBjFZS2kxsBXZpU0thSDeOxE",
    authDomain: "finstagram-c4b54.firebaseapp.com",
    projectId: "finstagram-c4b54",
    storageBucket: "finstagram-c4b54.appspot.com",
    messagingSenderId: "985011444714",
    appId: "1:985011444714:web:6995f60d2bb5f070233093",
    measurementId: "G-YDW3VFGVKL"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
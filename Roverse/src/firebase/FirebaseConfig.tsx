// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjKcTdUfQAGAp_n91_gQWDeCp1xjy-Hfs",
    authDomain: "roverse-react-ac453.firebaseapp.com",
    projectId: "roverse-react-ac453",
    storageBucket: "roverse-react-ac453.appspot.com",
    messagingSenderId: "804332426637",
    appId: "1:804332426637:web:46a5595097f0367dbad9c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);


export default auth;

export fireDB;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKMzzdTtQwe_VJBvL7juOGY503z8jjHfI",
  authDomain: "netflix-78e63.firebaseapp.com",
  projectId: "netflix-78e63",
  storageBucket: "netflix-78e63.appspot.com",
  messagingSenderId: "1087341948987",
  appId: "1:1087341948987:web:76e7136bba99149d94ac1e",
  measurementId: "G-VR260FH25P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();


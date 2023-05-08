// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTOuRX6O3yRElJWutfL8SUl8rkXvZstGo",
  authDomain: "react-native-auth-1c992.firebaseapp.com",
  projectId: "react-native-auth-1c992",
  storageBucket: "react-native-auth-1c992.appspot.com",
  messagingSenderId: "204731472584",
  appId: "1:204731472584:web:43eb2a424ae19684cb63fd",
  measurementId: "G-DKK082G5Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
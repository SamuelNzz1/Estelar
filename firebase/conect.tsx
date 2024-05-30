// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOS8hgs9cuMPSl4fiexp_QgyBeV-SbK0A",
    authDomain: "estelar-50146.firebaseapp.com",
    projectId: "estelar-50146",
    storageBucket: "estelar-50146.appspot.com",
    messagingSenderId: "117201149818",
    appId: "1:117201149818:web:3f5610b54680470fcdc0c3",
    measurementId: "G-Q9LFBM7B6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native Persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

export { auth };


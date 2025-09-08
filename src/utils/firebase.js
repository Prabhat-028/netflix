// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtPUcJ3lfslf1W6miYyXAOmYE7Eyn9QpI",
  authDomain: "netflix-c406e.firebaseapp.com",
  projectId: "netflix-c406e",
  storageBucket: "netflix-c406e.firebasestorage.app",
  messagingSenderId: "483860761145",
  appId: "1:483860761145:web:b7a3dc1da4d04d8af55be8",
  measurementId: "G-TLQ56FPW3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

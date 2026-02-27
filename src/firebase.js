// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa_hJ6cq2ZZbtZUI5__6yOkhxe14qP9wE",
  authDomain: "shiksha-b8390.firebaseapp.com",
  projectId: "shiksha-b8390",
  storageBucket: "shiksha-b8390.appspot.com",
  messagingSenderId: "183113807478",
  appId: "1:183113807478:web:197666b2474c38bb865157",
  measurementId: "G-JH8VJ4XFBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;
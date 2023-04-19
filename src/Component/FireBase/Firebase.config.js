// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJH7DIgsEhvlsJu7-D__5m9TijGQuXUvk",
  authDomain: "emazon-with-auth.firebaseapp.com",
  projectId: "emazon-with-auth",
  storageBucket: "emazon-with-auth.appspot.com",
  messagingSenderId: "131103595344",
  appId: "1:131103595344:web:dc7c8f5f7ec75c4e8d6a55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
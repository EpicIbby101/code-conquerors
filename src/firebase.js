import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhIUqFmOx_a3AsiMAX2jXMSxGIKXO7NEg",
    authDomain: "code-conquerors.firebaseapp.com",
    projectId: "code-conquerors",
    storageBucket: "code-conquerors.appspot.com",
    messagingSenderId: "119368175948",
    appId: "1:119368175948:web:a8b0135c826bad3238ffe9",
    measurementId: "G-PMBWKND9MH"
  };

  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);
  export default app;
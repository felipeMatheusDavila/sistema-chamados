import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'firebase/auth';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEOZE4rgm4kYrRf-LQ0NQWgPKezHXHrfU",
  authDomain: "sistema-cc2af.firebaseapp.com",
  projectId: "sistema-cc2af",
  storageBucket: "sistema-cc2af.appspot.com",
  messagingSenderId: "293815217174",
  appId: "1:293815217174:web:3b12580dd22e8f27d91937",
  measurementId: "G-XMTRLNJKD0"
};

if(!firebase.apps.length) {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

} 

firebase.initializeApp(firebaseConfig);

export default firebase;
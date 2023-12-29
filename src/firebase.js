import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXRKssFC1Jkg5bBIOTGebpDH9kEGiWDhI",
    authDomain: "clone-67528.firebaseapp.com",
    projectId: "clone-67528",
    storageBucket: "clone-67528.appspot.com",
    messagingSenderId: "877951221198",
    appId: "1:877951221198:web:c7e42fdca52e96d871ff9f",
    measurementId: "G-GQD9MN3KTB"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
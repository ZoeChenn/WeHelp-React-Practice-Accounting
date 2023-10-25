import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

export const COLLECTION_NAME = 'moneyLists';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-practice-accounting.firebaseapp.com",
    projectId: "react-practice-accounting",
    storageBucket: "react-practice-accounting.appspot.com",
    messagingSenderId: "951653089600",
    appId: process.env.APP_ID,
    measurementId: "G-WYQ9108N5B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const MoneyListsDocRef = collection(
    db,
    COLLECTION_NAME
);

export default db;
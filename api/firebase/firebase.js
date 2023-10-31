import getConfig from "next/config";
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const { publicRuntimeConfig } = getConfig();
export const COLLECTION_NAME = 'moneyLists';

const firebaseConfig = {
    apiKey: publicRuntimeConfig.API_KEY,
    authDomain: "react-practice-accounting.firebaseapp.com",
    projectId: "react-practice-accounting",
    storageBucket: "react-practice-accounting.appspot.com",
    messagingSenderId: "951653089600",
    appId: publicRuntimeConfig.APP_ID,
    measurementId: "G-WYQ9108N5B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const MoneyListsDocRef = collection(
    db,
    COLLECTION_NAME,
);

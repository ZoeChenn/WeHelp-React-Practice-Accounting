import { doc, getDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { MoneyListsDocRef } from './firebase';

const asyncAddList = async ({ type, money, description }) => {
    const docRef = await addDoc( MoneyListsDocRef, {
        type,
        money,
        description,
        created: serverTimestamp(),
    });
    
    return docRef;
};

export default asyncAddList;

import { addDoc, serverTimestamp } from 'firebase/firestore';
import { MoneyListsDocRef } from './firebase';
import { getAuth } from "firebase/auth";

const asyncAddList = async ({ type, money, description }) => {
    const user = getAuth().currentUser;
    const userId = user.uid;
    const docRef = await addDoc( MoneyListsDocRef , {
        userId,
        type,
        money,
        description,
        created: serverTimestamp(),
    });
    
    return docRef;
};

export default asyncAddList;

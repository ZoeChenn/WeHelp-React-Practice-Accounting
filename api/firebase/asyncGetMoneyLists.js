import { getDocs, orderBy, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { MoneyListsDocRef } from './firebase';

const asyncGetMoneyLists = async (
    queryConstraints = [ orderBy('created', 'desc') ]
) => {
    const user = getAuth().currentUser;
    const userId = user.uid;

    const q = query( MoneyListsDocRef, where('userId', '==', userId), ...queryConstraints );
    const docSnap = await getDocs(q);

    const res = docSnap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return res;
};

export default asyncGetMoneyLists;

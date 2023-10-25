import { getDocs, orderBy, query } from 'firebase/firestore';
import { MoneyListsDocRef } from './firebase';

const asyncGetMoneyLists = async (
    queryConstraints = [ orderBy('created', 'desc') ]
) => {
    const q = query( MoneyListsDocRef, ...queryConstraints );
    const docSnap = await getDocs(q);

    const res = docSnap.docs.map((doc) => ({
        ...doc.data(),
        created: JSON.stringify(doc.data().created),
        id: doc.id,
    }));
    return res;
};

export default asyncGetMoneyLists;

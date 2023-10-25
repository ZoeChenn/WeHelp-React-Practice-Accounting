import { deleteDoc } from 'firebase/firestore';
import getDocRef from './getDocRef';

const asyncDeleteList = async (index = '') => {
    await deleteDoc(getDocRef([index]));
};

export default asyncDeleteList;

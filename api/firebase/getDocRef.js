import { doc } from 'firebase/firestore';
import { db, COLLECTION_NAME } from './firebase';

const getDocRef = (pathSegments = []) =>
    doc(db, COLLECTION_NAME, ...pathSegments);

export default getDocRef;
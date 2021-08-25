import { db } from '../firebase/firebase-config';

export const loadBugs = async (uid) => {
    const bugsSnap = await db.collection('bugs').get();
    return bugsSnap.docs.map((bug) => bug.data());
};

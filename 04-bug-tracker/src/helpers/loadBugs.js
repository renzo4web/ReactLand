import { db } from '../firebase/firebase-config';

export const loadBugs = async () => {
    const bugsSnap = await db.collection('bugs').get();
    return bugsSnap.docs.map((bug) => {
        return { ...bug.data(), id: bug.id };
    });
};

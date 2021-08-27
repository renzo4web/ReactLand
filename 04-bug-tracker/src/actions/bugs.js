import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { loadBugs } from '../helpers/loadBugs';
import { types } from '../types/types';

export const addNewBug = (bug) => {
    return async (dispatch, getState) => {
        const { name } = getState().auth;

        const newBug = {
            title: bug.name,
            reporter: name,
            description: bug.description,
            severity: bug.severity,
            assignee: bug.assignee || name,
            status: bug.status,
            createdAt: new Date().getTime(),
        };
        const docRef = await db.collection('bugs').add(newBug);
        try {
            const docAdded = await docRef;
            await db
                .collection('bugs')
                .doc(docAdded.id)
                .update({ id: docAdded.id });
        } catch (error) {
            console.warn(error);
        }

        Swal.fire('Bug Added', '', 'success');
    };
};

export const startLoadingBugs = () => {
    return async (dispatch) => {
        const bugs = await loadBugs();
        dispatch(setBugs(bugs));
    };
};

export const setBugs = (bugs) => ({
    type: types.bugsLoad,
    payload: bugs,
});

export const startEditBug = (bug) => {
    return async (dispatch) => {
        await db.collection('bugs').doc(bug.id).update(bug);
        Swal.fire('Edited', 'the bug has been correctly edited', 'success');
    };
};

export const deleteBug = (id) => {
    return async (dispatch) => {
        await db.collection('bugs').doc(id).delete();
    };
};

export const bugsLogout = () => ({
    type: types.bugsLogoutCleaning,
});

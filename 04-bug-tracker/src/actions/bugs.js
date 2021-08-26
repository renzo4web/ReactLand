// bugsAddNew: '[Bugs] New Bug',
// bugsActive: '[Bugs] Set active bug',
// bugsLoad: '[Bugs] Load bugs',
// bugsUpdated: '[Bugs] Update Bug',
// bugsDelete: '[Bugs] Delete bug',
// bugsLogoutCleaning: '[Bugs] Logout Cleaning',

import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { loadBugs } from '../helpers/loadBugs';
import { types } from '../types/types';

export const addNewBug = (bug) => {
    return async (dispatch, getState) => {
        const { uid, name } = getState().auth;

        const newBug = {
            title: bug.name,
            bugId: new Date().getTime() + uid,
            reporter: name,
            description: bug.description,
            severity: bug.severity,
            assignee: bug.assignee || name,
            status: bug.status,
            createdAt: new Date().getTime(),
        };

        const docRef = await db.collection('bugs').add(newBug);

        Swal.fire('Bug Added');
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
        console.log({ bug });
        const docRef = await db
            .collection('bugs')
            .where('bugId', '==', bug.bugId);

        console.log(docRef);
    };
};

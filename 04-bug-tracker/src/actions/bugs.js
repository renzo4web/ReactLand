// bugsAddNew: '[Bugs] New Bug',
// bugsActive: '[Bugs] Set active bug',
// bugsLoad: '[Bugs] Load bugs',
// bugsUpdated: '[Bugs] Update Bug',
// bugsDelete: '[Bugs] Delete bug',
// bugsLogoutCleaning: '[Bugs] Logout Cleaning',

import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { types } from '../types/types';

export const addNewBug = (bug) => {
    return async (dispatch, getState) => {
        const { uid, name } = getState().auth;

        const newBug = {
            title: bug.name,
            bugId: new Date().getTime() + uid,
            reporter: name,
            discription: bug.description,
            severity: bug.severity,
            assignee: bug.assignee || name,
            status: bug.status,
            createdAt: new Date().getTime(),
        };

        const docRef = await db.collection('bugs').add(newBug);

        Swal.fire('Bug Added');
    };
};

export const setBugs = (bugs) => ({
    type: types.bugsLoad,
    payload: bugs,
});

import Swal from 'sweetalert2';

import { firebase, googleAuthProvider, db } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, setError, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((err) => {
                dispatch(finishLoading());
                Swal.fire('Error', err.message);
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                const { displayName, uid } = user;
                dispatch(login(uid, displayName));
            });
    };
};

// export const registerFirestore = (name, email, password) => {
//     return (dispatch) => {
//         db.collection('users')
//             .add(dispatch(register(name, email, password)))
//             .then((docRef) => {
//                 console.log('Document written with ID: ', docRef.id);
//             });
//     };
// };

export const startRegisterWithEmailPasswordName = (name, email, password) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name,
                });

                dispatch(login(user.id, user.displayName));
            })
            .catch((err) => {
                Swal.fire('Error', err.message);
            });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    },
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    };
};

export const logout = () => ({
    type: types.logout,
});

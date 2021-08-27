import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCpo_CyQipDGLVf8ySIbQ6HceJxYuKxNic',
    authDomain: 'bug-tracker-662e3.firebaseapp.com',
    projectId: 'bug-tracker-662e3',
    storageBucket: 'bug-tracker-662e3.appspot.com',
    messagingSenderId: '366782735624',
    appId: '1:366782735624:web:8f784a0a6a46640ab238bd',
};

const firebaseConfigTesting = {
    apiKey: 'AIzaSyCybzp6M4YJ8YQWrF6pXodLWwEP82uzqXA',
    authDomain: 'redux-test-f2c8c.firebaseapp.com',
    projectId: 'redux-test-f2c8c',
    storageBucket: 'redux-test-f2c8c.appspot.com',
    messagingSenderId: '565617037164',
    appId: '1:565617037164:web:e98f66a125f5657d616d49',
};

if (process.env.NODE_ENV === 'test') {
    // TESTING
    firebase.initializeApp(firebaseConfigTesting);
} else {
    // DEV/PROD
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

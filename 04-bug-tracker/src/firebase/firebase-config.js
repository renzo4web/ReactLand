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

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

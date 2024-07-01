import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQE6Mmn8bcv29HtzYwoypl3Slu3uvEYp4",
    authDomain: "linkedinclone-114bf.firebaseapp.com",
    projectId: "linkedinclone-114bf",
    storageBucket: "linkedinclone-114bf.appspot.com",
    messagingSenderId: "1015867507164",
    appId: "1:1015867507164:web:d644002d01a74b504e0f19"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
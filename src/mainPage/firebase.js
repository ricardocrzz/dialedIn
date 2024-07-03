import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOBECFWlHad0TgcAaF_AfouajJ2Jspb90",
    authDomain: "dialedin-7b3f8.firebaseapp.com",
    projectId: "dialedin-7b3f8",
    storageBucket: "dialedin-7b3f8.appspot.com",
    messagingSenderId: "14627041019",
    appId: "1:14627041019:web:01c7739663ac5706e84a5e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
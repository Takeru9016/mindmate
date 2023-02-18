import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArJnM1shOXI_eglRZopScPp_ODIyLJhVg",
    authDomain: "chatgpt-clone-3718e.firebaseapp.com",
    projectId: "chatgpt-clone-3718e",
    storageBucket: "chatgpt-clone-3718e.appspot.com",
    messagingSenderId: "1030919470082",
    appId: "1:1030919470082:web:8f2cf6514f69e8dd667b1b"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
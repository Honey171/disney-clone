import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'disney-clone-c9466.firebaseapp.com',
  projectId: 'disney-clone-c9466',
  storageBucket: 'disney-clone-c9466.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
export const auth = getAuth(app);

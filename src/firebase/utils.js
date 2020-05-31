import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config();

const config = {
  apiKey: 'AIzaSyBZFOMoR012oiwXVCtZZsDfpILcw4sH8yw',
  authDomain: 'ecommerce-db-9f210.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-9f210.firebaseio.com',
  projectId: 'ecommerce-db-9f210',
  storageBucket: 'ecommerce-db-9f210.appspot.com',
  messagingSenderId: '20340116199',
  appId: '1:20340116199:web:031d1e1cb3b9683521b042',
  measurementId: 'G-BJCP52TG3W',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

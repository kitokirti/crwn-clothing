import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBJcn2NPbnK0cq-UkZmDOHgEn5elAM8Wtc",
    authDomain: "crwn-db-cloth.firebaseapp.com",
    projectId: "crwn-db-cloth",
    storageBucket: "crwn-db-cloth.appspot.com",
    messagingSenderId: "712000434917",
    appId: "1:712000434917:web:4ddb242ab001e43bc6da0c",
    measurementId: "G-56VX2JJCX1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  //Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
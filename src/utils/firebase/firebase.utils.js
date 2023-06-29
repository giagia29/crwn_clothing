// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
// Your web app's Firebase configuration

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDtgq_0jJdw9B1WZzl43gDMAatvNeElAes",
  authDomain: "my-app-87a39.firebaseapp.com",
  projectId: "my-app-87a39",
  storageBucket: "my-app-87a39.appspot.com",
  messagingSenderId: "660717747749",
  appId: "1:660717747749:web:23a67c68ae7ea3605589cc",
  measurementId: "G-96YF7P4RKK"
};

// Initialize Firebase

const firebaseapp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseapp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);

    if( !userSnapShot.exists() ){
       const { displayName, email } = userAuth;
       const createAdt = new Date();
       
       try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createAdt,
            ...additionalInfo
        });
       } catch (error){
        console.log('error creating the user', error.message);
       }
    }

    return userDocRef;
}

export const createUser = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}
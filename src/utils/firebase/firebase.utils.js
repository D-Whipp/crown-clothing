import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyClP-MrPiqRGy7zBzt6fE09wQnSFYd1D7c',
    authDomain: 'crown-clothing-db-1cae4.firebaseapp.com',
    projectId: 'crown-clothing-db-1cae4',
    storageBucket: 'crown-clothing-db-1cae4.appspot.com',
    messagingSenderId: '546068359301',
    appId: '1:546068359301:web:c45eb76275c7cd9ccda1ec',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log('User Doc Ref: ', userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log('User Snapshot: ', userSnapshot);
    console.log('User Snapshot Exists: ', userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user: ', error.message);
        }
    }

    return userDocRef;

    // return userdocref
};

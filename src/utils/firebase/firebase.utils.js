import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyClP-MrPiqRGy7zBzt6fE09wQnSFYd1D7c',
    authDomain: 'crown-clothing-db-1cae4.firebaseapp.com',
    projectId: 'crown-clothing-db-1cae4',
    storageBucket: 'crown-clothing-db-1cae4.appspot.com',
    messagingSenderId: '546068359301',
    appId: '1:546068359301:web:c45eb76275c7cd9ccda1ec',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, provider);

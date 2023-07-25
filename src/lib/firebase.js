import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

export const firebaseApp = initializeApp({
    // get from .env
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
})

const auth = getAuth(firebaseApp)
export const getFirebaseAuth = () => {
    return auth
}

export const getFirestore = () => {
    return getFirestore(firebaseApp)
}


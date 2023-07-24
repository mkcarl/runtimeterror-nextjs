import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app"


import React, {createContext, useContext, useEffect, useState} from "react";

export const app = initializeApp({
    // get from .env
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
})

const auth = getAuth(app)


const AuthContext = createContext({})

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

    function login(email, password){
        // return signInWithEmailAndPassword(auth, email,password)
        alert(`firebase login with ${email} and ${password}`)
    }

    function logout() {
        // signOut(auth)
        alert("firebase logout")
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [])


    const value = {
        currentUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

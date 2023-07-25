import {signInWithEmailAndPassword, getAuth, signOut, onAuthStateChanged} from "firebase/auth";


import React, {createContext, useContext, useEffect, useState} from "react";
import {firebaseApp, getFirebaseAuth} from "@/lib/firebase";
import {useAuthState, useSignInWithEmailAndPassword, useSignOut} from "react-firebase-hooks/auth";


const auth = getAuth(firebaseApp)


const AuthContext = createContext({})

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(getFirebaseAuth(),(user)=>{
            if (user){
                setUser(user)
                console.log('user signed in')
            } else {
                setUser(null)
                console.log('no user found')
            }
            setLoading(false)
        })
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            {loading? <>Loading...</> : children}
        </AuthContext.Provider>
    )
}

export default AuthContext

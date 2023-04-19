import React, { createContext, useEffect, useState } from 'react';
export const UserContext = createContext(null);
import app from '../FireBase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UserProvider = ({children}) => {
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            return unsubscribe();
        }
    })
    const createuser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const googleSignup = ()=>{
        return signInWithPopup(auth, provider)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
       return signOut(auth)
    }
    const UserInfo = {
        user,
        createuser,
        signIn,
        logOut,
        googleSignup
    }
    return (
        <UserContext.Provider value={UserInfo}>
        {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
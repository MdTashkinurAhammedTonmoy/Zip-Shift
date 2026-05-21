import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const gooleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const registerUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,gooleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (crrentUser) =>{
            setLoading(false)
            setUser (crrentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,
        logOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
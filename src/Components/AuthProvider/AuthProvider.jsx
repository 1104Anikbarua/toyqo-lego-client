import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import axios from 'axios';

export const LegoContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(null);

    const googleProvider = new GoogleAuthProvider();


    const signUpUser = (email, password) => {
        // console.log(email, password)
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const verifyLogin = (email, password) => {
        setLoading(true);
        const userInfo = {
            email,
            password,
            returnSecureToken: true
        }
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdGFNW7K34VXhEGrTOmT6WNfq7cQ5IrSs`, userInfo)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)

            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [refresh])

    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    const authInfo = {
        signUpUser,
        verifyLogin,
        logInUser,
        updateUser,
        logOutUser,
        googleSignUp,
        resetPassword,
        user,
        loading,
        setRefresh,
    }

    return (
        <LegoContext.Provider value={authInfo}>
            {children}
        </LegoContext.Provider>
    );
};

export default AuthProvider;
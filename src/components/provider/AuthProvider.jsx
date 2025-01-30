import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';


export const AuthContext=createContext(null)

const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {


    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

const signInWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
}




    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    } 
    
    const updateProfileUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
       
    }
    
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };



    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            if (currentUser) {
                console.log('currently logged user',currentUser);
                setUser(currentUser)
                setLoading(false)
            }
            else{
                console.log('No User logged in');
                setUser(null)
            }
        })

        return()=>{
            unSubscribe()
        }
    },[])

  



    const authInfo={
        createUser,
        signInUser,
        user,setUser,
        logOut,
        updateProfileUser,
        loading,
        signInWithGoogle
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
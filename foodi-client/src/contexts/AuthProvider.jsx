import React, { createContext, useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    // create an account
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign up with gmail account
    const signUpWithGmail = () => {
      return signInWithPopup(auth, googleProvider)
    }

    //login using email and password
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
      signOut(auth)
    }

    //update profile
    const updateuserProfile = ({name, photoURL}) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
    }

    //check signed in user
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
          setLoading(false)
        } else {
          
        }
      })
      return () => {
        return unsubscribe()
      }
    })

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
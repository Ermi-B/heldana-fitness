import { useContext, createContext, useEffect,useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, provider } from "../config/firebase-config";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user,setUser] = useState({})
    const googleSignIn = () =>{
        
        // signInWithPopup(auth,provider)
        signInWithRedirect(auth,provider)
    }
    const logOut = () => {
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('User', currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

  return <AuthContext.Provider value={{googleSignIn,logOut,user }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

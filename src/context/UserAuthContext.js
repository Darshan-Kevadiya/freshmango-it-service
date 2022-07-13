import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
 
  const [user, setuser] = useState()
  function signup(email , password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email , password){
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    onAuthStateChanged(auth,(currentuser) =>{
      setuser(currentuser);
    })
  }, [])
  
  return <userAuthContext.Provider value={ }>{children}</userAuthContext.Provider>
}

export function useUserAuth (){
  return  useContext(userAuthContext)
}
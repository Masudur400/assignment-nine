import { createContext, useEffect, useState } from "react"; 
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";  
import PropTypes from 'prop-types';



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const createUser = (email, password,name,photo) =>{ 
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password,name, photo);
} 

const logIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}

const githubLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
}

const updateUserProfile = (name, photo) =>{
    setLoading(true);
    return updateProfile (user,{
        displayName : name,
        photoURL : photo
    },setLoading(false))

}



const logOut = () =>{
    setLoading(true);
    return signOut(auth)
}

useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
},[])


    const authInfo = {
        user,
        createUser,
        logOut,
        logIn,
        loading,
        googleLogin,
        githubLogin,
        updateUserProfile,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

 AuthProvider.propTypes ={
    children:PropTypes.node
 }

 
export default AuthProvider;
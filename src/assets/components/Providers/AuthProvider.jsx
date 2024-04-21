import { createContext, useEffect, useState } from "react"; 
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";  
import UpdateProfile from "../UpdateProfile/UpdateProfile";



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

const updateProfile = (name, photo) =>{
    setLoading(true);
    return UpdateProfile(user,{
        displayName : name,
        photoURL : photo
    })

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
        updateProfile,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

 
export default AuthProvider;
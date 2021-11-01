import { getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    const auth = getAuth();

    // Sign in functionalities
    // const signInWithGoogle = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             setUser(result.user);
    //             console.log(user);
    //         }).catch((error) => {
    //             setError(error.message);
    //         });
    // }

    const signInWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
    }

    // Sign out functionalities
    const logOut = () => {
        signOut(auth).then(() => {
          setUser({})
        }).catch((error) => {
            setError(error.message);
        });
    }


    // Ovserve weather User auth state change or not.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            
            if (user) {
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
    return unsubscribe;
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;
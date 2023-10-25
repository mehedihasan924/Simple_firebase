import React, { useState } from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth"
import app from '../../firebase/firsbase.init';
const Login = () => {
    const auth= getAuth(app);
    const provider=new GoogleAuthProvider();
        //User Infromation show state
     const [user, setUser]=useState(null)   
    
    const handleGoogleSignIn=()=>{
       signInWithPopup(auth, provider)
       .then(result=>{
        const logginUser=result.user;
        console.log(logginUser);
        setUser(logginUser)
       })
       .catch(error =>{
        console.log("Error", error.message);
       })
    }
// SignOut Function
    const handleSignOut=()=>{
            signOut(auth)
            .then(result=>{
                console.log(result);
                setUser(null)
            })
            .catch( error=>{
                console.log(error)
            })
    }


    return (
        <div style={{marginTop:"20px"}}>
            {/* toggle SignIn and Singn Out Button */}
         {  user ?
           <button onClick={handleSignOut}> Sign Out </button>:
           <button onClick={handleGoogleSignIn}> Login With google</button> 
         }

         {/* User takle show koro na takle null */}
          { user && 
            <div> 
               <h1> Name:{user.displayName}</h1>
               <h2>Email: {user.email}</h2>
                <img style={{borderRadius:"50%"}} src={user.photoURL} alt="" />
            </div>
          }
        </div>
    );
};

export default Login;
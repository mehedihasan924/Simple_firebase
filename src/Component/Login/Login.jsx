import React, { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth"
// import app from '../../firebase/firsbase.init';
const Login = () => {
    const auth= getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider()

    //User Infromation show state
     const [user, setUser]=useState(null)   
    
    const handleGoogleSignIn=()=>{
       signInWithPopup(auth, googleProvider)
       .then(result=>{
        const logginUser=result.user;
        console.log(logginUser);
        setUser(logginUser)
       })
       .catch(error =>{
        console.log("Error", error.message);
       })
    }
 // Git SignIn System 
    const handleGitHubSignIn=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
           const loginUser=result.user;
            console.log(loginUser)
        })
        .catch(error=>{
            console.log(error)
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
         <div>
            <button onClick={handleGoogleSignIn}> Login With google</button> 
            <button onClick={handleGitHubSignIn}> Login With gitHub</button>
         </div>
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
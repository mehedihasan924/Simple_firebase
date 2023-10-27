import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// Fireabase connent
import app from '../Firebase2/firebase.config';
const auth = getAuth(app);



const Register = () => {
   // Error massage show korar jonno
   const [error, setError]=useState('')

    const [email, setemail]=useState('')
// Input field data show system 
    const handleEmailChange=(event)=>{
        console.log(event.target.value);
        setemail(event.target.value);
    }
//  Button submit Data / pass ba email deka jabe 
    const handleSubmit=(event)=>{
       //1. prevent page not refresh
       event.preventDefault();
       //2. Collect from data
        const email=event.target.email.value;
        const password=event.target.password.value
        console.log(email, password);

            //  3. Creat user ib firebase
            createUserWithEmailAndPassword(auth ,email, password )
                .then(result=>{
                    const loginUser=result.user;
                    console.log(loginUser);
                    setError(" Success Full login") 
                })
                
                .catch(error=>{
                    console.error(error.massage);
                    setError( " Password minmum 6 caterter ")
                })
    }


// Blur Password Show to console
    const handlePasswordBlur=(event)=>{
            console.log(event.target.value);
    }

    return (
        <div className='w-50 mx-auto'>
            <h1> Register From </h1>
            {/* // Input field data show system  */}
            <h1>{email}</h1>

           <form  onSubmit={handleSubmit}>
               <input required className='w-50 mb-2 rounded ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' />
               <br />
               <input  required className='w-50 mb-2 rounded ps-2' onBlur={handlePasswordBlur} type="password" name="password" id='password' placeholder='Your Password' />
               <br />
               <h6 className='text-danger'> {error} </h6>
               <input className='btn btn-primary' style={{marginTop:"10px"}} type="submit" value="Register" />
             
         </form>
          
        </div>
    );
};

export default Register;
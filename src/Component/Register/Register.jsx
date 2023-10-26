import React, { useState } from 'react';

const Register = () => {

    const [email, setemail]=useState('')
// Input field data show system 
    const handleEmailChange=(event)=>{
        console.log(event.target.value);
        setemail(event.target.value);
    }
//  Button submit Data  
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event.target.email.value);
    }
// Blur Password Show to console
    const handlePasswordBlur=(event)=>{
            console.log(event.target.value);
    }
    return (
        <div>
            <h1> Register From </h1>

            <h1>{email}</h1>
           <form  onSubmit={handleSubmit}>
               <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' />
               <br />
               <input onBlur={handlePasswordBlur} type="password" name="password" id='password'placeholder='Your Password' />
               <br />
               <input style={{marginTop:"10px"}} type="submit" value="Register" />
           </form>
        </div>
    );
};

export default Register;
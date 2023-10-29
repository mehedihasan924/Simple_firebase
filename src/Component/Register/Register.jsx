import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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


       setError('')
       //2. Collect from data
        const email=event.target.email.value;
        const password=event.target.password.value
        console.log(email, password);
              // Validation
                if(!/(?=.*[A-Z])/.test(password)){
                    setError('Please Add 2 Uparcase');
                    return;
                }
                if(!/(?=.*[0-9].*[0-9])/.test(password)){
                    setError('Please Add two Number');
                    return;
                }
                else if(password.length<6){
                    setError('Please Atlest 6 Chaacter input')
                }
                
            //  3. Creat user ib firebase
            createUserWithEmailAndPassword(auth ,email, password )
                .then(result=>{
                    const loginUser=result.user;
                    console.log(loginUser);
                    setError(" Success Full login") 
                 // Sob Clear click on submit button   
                    event.target.reset();
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
<h4> Akane Registerer sate Login-f page connent kora hoyase</h4>

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
               <p> <small> Are you all ready loged ? <Link to="/loginfrom"> Login</Link> </small></p>
         </form>
          
        </div>
    );
};

export default Register;
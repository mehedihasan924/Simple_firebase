import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../Firebase2/firebase.config';
import { Link } from 'react-router-dom';
const auth = getAuth(app);

const LoginFrom = () => {
        const [error, setError]=useState('');
        const [success, setSuccess]=useState('')

    const handleLogin=(event)=>{
        event.preventDefault();
          const from=event.target;
          const email=from.email.value;
          const password=from.password.value
          console.log(email, password);

   // validation
       setError('')
       setSuccess('')
    
           if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
                setError('Please add atlest 2 Character');
                return
           }
           else if(!/(?=.*[@])/.test(password)){
                    setError("please add at liest  spacial Character")
                    return
           }
           else if(password.length<6){
             setError('Minimum 6 character input');
             return;
           }
           else{
            setSuccess("You Successfuly login");
            event.target.reset()
           }


        // Register from to Connenct Login from // check User login info

           signInWithEmailAndPassword(auth , email, password)
           .then(result=> {
             const loginUser=result.user;
             setSuccess("User login successfily.");         
             setError('');
          
           })
           .catch(error=>{
             setError(error.massage)
           })
    }
    return (
        <div className='w-50 mx-auto'>
        <h1> Login From </h1>
       <form  onSubmit={handleLogin}>
           <input required className='w-50 mb-2 rounded ps-2'  type="email" name="email" id="email" placeholder='Your Email' />
           <br />
           <input  required className='w-50 mb-2 rounded ps-2'  type="password" name="password" id='password' placeholder='Your Password' />
           <br />
           <h6 className='text-danger'>  </h6>
           <input className='btn btn-primary' style={{marginTop:"10px"}} type="submit" value="Login" />
        <p> <small> Are you new user? <Link to="/register"> Register Now</Link> </small></p>

       <h3>{error}</h3>
       <h3>{success}</h3>
     </form>
      
    </div>
    );
};

export default LoginFrom;
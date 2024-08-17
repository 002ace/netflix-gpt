import React, { useState } from 'react'
import Header from './Header'
import { bgImg } from '../utils/constant'
import { useRef } from 'react'
import checkValidateData from '../utils/validate'
import { auth } from '../utils/firbase'; // Make sure this path is correct
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
   
      const[isSignIn , setSignIn] =  useState(true);

      const [isMessage, setMessage] = useState('');

      const email = useRef(null);
      const password = useRef(null);
      const name = useRef(null);
    
      const handleButtonClick = () => {
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const nameValue = name.current ? name.current.value : '';
    
        const message = isSignIn 
          ? checkValidateData(emailValue, passwordValue) 
          : checkValidateData(emailValue, passwordValue, nameValue);
        
        // Log form values
        // console.log('Name:', nameValue);console.log('Email:', emailValue); console.log('Password:', passwordValue);console.log('Validation Message:', message);
        setMessage(message);
        if(message) return ;
          
        if(!isSignIn)
        {  
              
        
          createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user);
          
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage(errorCode+"-"+errorMessage)
              // ..
            });
             
        
    
        }
        else
        {   
          signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
         
            // ...
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode + "-" + errorMessage)
          });
        
    
        }
       
    
    
      }

  return (
    
    <div className="relative h-screen w-screen flex flex-col">
    <Header />
    <div className="flex-grow flex items-center justify-center">
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={bgImg}
        alt="background"
      />
      <form  onSubmit={(e)=>e.preventDefault()} className="absolute bg-black bg-opacity-70 p-8 rounded-lg flex flex-col items-center w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <h1 className="text-white text-3xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter name"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 text-white focus:outline-none"
        />

        <p className='text-red-600 mb-6'>
           {isMessage}

        </p>

        <button
          
          className="w-full p-3 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          onClick = {handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          onClick={() => setSignIn(!isSignIn)}
          className="text-gray-400 mt-4 cursor-pointer hover:underline"
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in"}
        </p>
      </form>
    </div>
  </div>

   
  )
}

export default Login
import React, { useRef, useState } from 'react';
import Header from './Header';
import checkValidateData from '../utils/validate';
import { auth } from '../utils/firbase'; // Make sure this path is correct
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';


// Email: san@gmail.com
// Login.js:28 Password: Sant#123


const Login = () => {
 
  const [isLogin, setLogIn] = useState(true);
  const [isMessage, setMessage] = useState('');

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current ? name.current.value : '';

    const message = isLogin 
      ? checkValidateData(emailValue, passwordValue) 
      : checkValidateData(emailValue, passwordValue, nameValue);
    
    // Log form values
    console.log('Name:', nameValue);console.log('Email:', emailValue); console.log('Password:', passwordValue);console.log('Validation Message:', message);
    setMessage(message);
    if(message) return ;
      
    if(!isLogin)
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

  const handleLogIn = () => {
    setLogIn(!isLogin);
  }

  return (
    <div>
      <Header />
      <div className="relative h-screen">
        {/* Background Image */}
        <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg'
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Centered Form */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <form className="bg-black bg-opacity-75 p-8 rounded-lg flex flex-col w-full max-w-xs h-auto max-h-96" onSubmit={(e) => e.preventDefault()}>
            <p className='text-white text-3xl font-semibold mb-4'>{isLogin ? "Sign In" : "Sign Up"}</p>
            {
              !isLogin && (
                <input 
                  ref={name}
                  type="text" 
                  placeholder="Enter name" 
                  className="mb-4 p-2 rounded bg-slate-900 text-white"
                />
              )
            }
            <input 
              ref={email}
              type="text" 
              placeholder="Enter email" 
              className="mb-4 p-2 rounded bg-slate-900 text-white"
            />
            <input 
              ref={password}
              type="password" 
              placeholder="Password" 
              className="mb-4 p-2 rounded text-white bg-slate-900"
            />
            <p className='text-red-700 text-sm font-bold mb-4'>{isMessage}</p>
            <button className="p-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={handleButtonClick}>
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
            
            <p className='text-gray-400 mt-5 text-sm cursor-pointer ' onClick={handleLogIn}>
              {isLogin ? "New to Netflix? Sign up now" : "Already have an account? Sign in"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


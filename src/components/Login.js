import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  
      const[isLogin , setLogIn] =  useState(true);
     
    const handleLogIn =()=>{
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
        <div className="absolute inset-0 flex items-center justify-center">
          <form className="bg-black bg-opacity-75 p-8 rounded-lg flex flex-col w-1/4">
            <p className='text-white  text-3xl font-semibold  mb-4'> {isLogin ? "Login" : "SignUp"}</p>
            {
                 !isLogin && (
                    <input 
                    type="text" 
                    placeholder="Enter name" 
                    className="mb-4 p-2 rounded bg-slate-900 text-white"
                    
                  />

                 )
            }
            <input 
              type="text" 
              placeholder="Enter email" 
              className="mb-4 p-2 rounded bg-slate-900 text-white"
              
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="mb-4 p-2 rounded text-white  bg-slate-900"
            />
            <button className="p-2 bg-red-600 text-white rounded">Submit</button>

            <p  className='text-gray-400 mt-8 text-sm cursor-pointer'  onClick={handleLogIn}> {isLogin ? "New to Netflix ? Sign up now" : "Already exist ? Sign in"} </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'
import { useDispatch } from 'react-redux'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firbase';
import { addUser ,removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const dispatch =  useDispatch();
  const navigate =  useNavigate()
  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid ,email ,displayName }= user;
        console.log('User:', user);
        dispatch(addUser({uid:uid , displayName:displayName , email:email}))
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
        // ...
      }
    });
    
     //unsubscribe  when component is unmount 
    return () => unSubscribe()

  } , [])

  return (
    <div>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='logo'
          className='absolute  w-44  ml-10 bg-gradient-to-b  z-10 -mt-1 '  
        />
    </div>
    
  )
}

export default Header


  import React from 'react'
  import  {LOGO} from '../utils/constant'
  import { useDispatch, useSelector } from 'react-redux'
  import {  onAuthStateChanged } from "firebase/auth";
  import { auth } from '../utils/firbase';
  import { addUser ,removeUser } from '../utils/userSlice'
  import { useNavigate } from 'react-router-dom';
  import { useEffect } from 'react';
  import { signOut } from "firebase/auth";
  
  const Header = () => {
    const dispatch =  useDispatch();
    const navigate =  useNavigate()
    const user = useSelector((store)=>store.user)
  
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
          navigate("/");
          // ...
        }
      });
      
       //unsubscribe  when component is unmount 
      return () => unSubscribe()
  
    } , [])

    const handleSignout =()=>{
      signOut(auth).then(() => {
       
        navigate("/")
  
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      }); 
      
  
    }
  

       return (
      // const dispatch =  useDispatch();
       <div className="fixed  w-screen bg-gradient-to-b from-black to-transparent px-8 py-4 z-50 flex justify-between items-center">
      <img
        className="w-36 md:w-44"
        src={LOGO}
        alt="netflix-logo"
      />

      {user && (
            < button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4
            " onClick={handleSignout}>
              Sign out
            </button>
      )
          
      }
     
    </div>
    )
  }
  
  export default Header
    

  


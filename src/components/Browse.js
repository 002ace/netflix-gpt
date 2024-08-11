import React, { useEffect } from 'react'
import Header from './Header'
import { auth } from '../utils/firbase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';



const Browse = () => {
    useNowPlayingMovies();
  const navigate =  useNavigate()
 



  const handleSignout =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    }); 
    

  }


  return (
    <div className="flex   justify-between p-4 bg-gradient-to-b from-black   text-white">
      <Header /> 
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4
      " onClick={handleSignout}>
        Sign out
      </button>
    </div>
  
  )
}

export default Browse
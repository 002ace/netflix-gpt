import React, { useEffect } from 'react'
import Header from './Header'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import { useDispatch } from 'react-redux'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firbase';
import { addUser ,removeUser } from '../utils/userSlice'

const Body = () => {
       const dispatch =  useDispatch();
      const appRouter =  createBrowserRouter([
           {
               path:"/login",
               element:<Login/>
           },
           {
              path:"/browse",
              element:<Browse/>

           }
      ])

      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid ,email ,displayName }= user;
            console.log('User:', user);
            dispatch(addUser({uid:uid , displayName:displayName , email:email}))

            // ...
          } else {
            // User is signed out
            dispatch(removeUser());
            // ...
          }
        });
        

      } ,[])

  return (
    <div>
          <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
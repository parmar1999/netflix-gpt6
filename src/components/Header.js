import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import  { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      
      })
      .catch((error) => {
    
      });
  };
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
         navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');       
      }
    });
    return () =>unsubscribe();
   },[])

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40'>
      <img
        className='w-60'
        src={LOGO}
        
        alt="Netflix Logo"
      />

      <div className="flex items-center p-2">
        {user && user.photoURL ? (
          <img
            className='w-12 h-12 rounded-full'
            alt="User Profile"
            src={user.photoURL}
          />
        ) : (
          <img
            className='w-12 h-12 rounded-full'
            alt="Default User Icon"
            src="https://via.placeholder.com/150/000000/FFFFFF/?text=User"
          />
        )}
        <button onClick={handleSignOut} className='ml-4 font-bold text-white'>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;

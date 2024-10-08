import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkvalidateData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';
const Login = () => {
     const dispatch=useDispatch
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMassege, setErrorMassege] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const massege = checkvalidateData(email.current.value, password.current.value);
    setErrorMassege(massege);

    if (massege) return;

    if (!IsSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
             photoURL: USER_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL} =auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            
          }).catch((error) => {
            setErrorMassege(error.massege);
          });
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassege(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In Logic (not implemented in this example)
      signInWithEmailAndPassword(auth, email.current.value
        , password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMassege(errorCode+"-"+errorMessage);
      });
    
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='absolute'>
        <img
          src={BG_URL}
          alt="background-image"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70 text-white'>
        <h1 className='font-bold text-3xl py-4'>{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!IsSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className='p-4 my-4 w-full bg-gray-700'
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className='p-4 my-4 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMassege}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {IsSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
        </p>
      </form>
    </>
  );
}

export default Login;

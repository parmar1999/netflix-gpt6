import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
      
     const [IsSignInForm,setIsSignInForm]=useState(true);

      const toggleSignInForm=()=>{
              setIsSignInForm(!IsSignInForm)
      }
  return (    
    <>
<div>
      <Header/>
    </div>
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
        alt="background-image"
      />
    </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70 text-white'>
         <h1 className='font-bold text-3xl py-4'>{IsSignInForm ? "Sign In" :"Sign Up"}</h1>
         {!IsSignInForm && (      
   <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700'/>
)
}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>

           <input type="text" placeholder="password" className='p-4 my-4 w-full bg-gray-700'/>
           <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
           {IsSignInForm ? "Sign In" :"Sign Up"}</button>  
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {IsSignInForm ? "New to Netflix Sign Up Now" :"Already registered? Sign In  Now."}</p>
           
      </form>
    </>
  )
}

export default Login;

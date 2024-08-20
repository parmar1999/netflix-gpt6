import React from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40'>
      <img
        className='w-60'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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

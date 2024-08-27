import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Sign out the user
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  // Firebase Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe(); // Clean up subscription
  }, [dispatch, navigate]);

  // Toggle GPT Search View
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  // Change language
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40'>
      <img
        className='w-60'
        src={LOGO}
        alt="Netflix Logo"
      />
      <div className="flex items-center p-2">
        {showGptSearch && (
          <select 
            className='rounded-lg p-2 m-2 bg-red-600 text-white'
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        
        <button 
          className='py-2 px-3 m-2 bg-purple-800 rounded-lg text-white'
          onClick={handleGptSearch}
        >
          {showGptSearch ? "HomePage" : "GPT Search"}
        </button>
        
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
        
        <button 
          onClick={handleSignOut} 
          className='ml-4 font-bold text-white'
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;

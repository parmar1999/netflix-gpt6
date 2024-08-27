import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux'; // Corrected import

const GptSearchBar = () => {
const langKey=useSelector(store=>store.config.lang)


console.log('langkey',langKey);
console.log("lang object",lang);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-b from-red-700 to-green-600">
      <form className="bg-gray-800 p-8 m-6 rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all hover:scale-105">
        
        <input
          type="text"
          className="p-4 mb-6 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500 placeholder-gray-400"
          placeholder={lang[langKey].gptsearchplaceholder}
        />
        <button
          type="submit"
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

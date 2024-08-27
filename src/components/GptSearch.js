import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className='absolute'>
        <img
        src={BG_URL}
          alt="background-image"
        />
      </div>
     <GptSearchBar/>
     <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch

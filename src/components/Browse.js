import React, { useState } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';

const Browse = () => {
  // Initialize state for controlling the display of GptSearch
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  // Fetching movies data using custom hooks
  useNowPlayingMovies();   
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  );
};

export default Browse;

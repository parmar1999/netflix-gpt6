import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import SecondaryContainer from './SecondaryContainer';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return <div>Loading...</div>;

  const mainMovie = movies[0];
  const { original_title, overview ,id} = mainMovie;


  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      
    </div>
  );
};

export default MainContainer;

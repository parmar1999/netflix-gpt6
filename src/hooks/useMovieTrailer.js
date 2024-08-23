import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Fetch trailer video
  const getMovieVideos = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const data = await response.json();

      // Filter and select the appropriate trailer
      const filteredVideos = data.results.filter((video) => video.type === "Trailer");
      const trailer = filteredVideos.length ? filteredVideos[0] : data.results[0];
      
      // Dispatch the trailer video to the Redux store
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);

  return null; // The hook does not need to return any JSX
};

export default useMovieTrailer;

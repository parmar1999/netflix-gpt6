import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
    
      dispatch(addNowPlayingMovies(json.results));
      return json.results;  // Return the data if needed
    } catch (error) {
      console.error('Fetch error:', error);
      return [];  // Return an empty array in case of error
    }
  };

  useEffect(() => {
    getNowPlayingMovies()
  }, []);

  return null;  // Return null or you can return the data if you want to use it in the component
}

export default useNowPlayingMovies;

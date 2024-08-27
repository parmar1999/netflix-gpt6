import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {  addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?page=1',
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
    
      dispatch(addUpcomingMovies(json.results));
      return json.results;  // Return the data if needed
    } catch (error) {
      console.error('Fetch error:', error);
      return [];  // Return an empty array in case of error
    }
  };

  useEffect(() => {
    getUpcomingMovies()
  }, []);

  return null;  // Return null or you can return the data if you want to use it in the component
}

export default useUpcomingMovies;

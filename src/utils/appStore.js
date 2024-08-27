import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Corrected from `useReducer` to `userReducer`
import moviesReducer from "./moviesSlice";
import gptReducer from './gptSlice';
import configReducer from "./configSlice";


const appStore = configureStore({
  reducer: { 
    user: userReducer,       // Corrected naming
    movies: moviesReducer,
    gpt: gptReducer,
    config:configReducer,
  }
});

export default appStore;

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/Movies/moviesSlice'
import detailReducer from '../features/detail/detailSlice'
import genreSlice from '../features/genres/genreSlice'
import searchSlice from '../features/search/searchSlice'
export const store = configureStore({
  reducer: {
    movies:  moviesReducer,
    detail: detailReducer,
    genre: genreSlice,
    search: searchSlice
  },
});

import {createSlice } from '@reduxjs/toolkit';
import { fetchMoviesByFilters } from '../thunks/moviesThunk.js';



const searchSlice = createSlice({
  name: 'search',
  initialState: {
    ids: [],
  },
  reducers: {
    removeAll: (state) => {
      state.ids = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByFilters.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMoviesByFilters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const ids = action.payload.map(movie => movie.id);
        state.ids = ids;
      })
      .addCase(fetchMoviesByFilters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { removeAll } = searchSlice.actions;
export default searchSlice.reducer;

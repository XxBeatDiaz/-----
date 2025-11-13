import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { fetchMovies, fetchMoviesByFilters, fetchOneMovie } from '../thunks/moviesThunk.js';


const moviesAdapter = createEntityAdapter();
const initialState = moviesAdapter.getInitialState({
    status: 'idle',
    error: null,
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                moviesAdapter.upsertMany(state, action.payload);
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(fetchOneMovie.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOneMovie.fulfilled, (state, action) => {
                state.status = 'succeeded';
                moviesAdapter.upsertOne(state, action.payload);
            })
            .addCase(fetchOneMovie.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(fetchMoviesByFilters.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMoviesByFilters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                moviesAdapter.upsertMany(state, action.payload);
            })
            .addCase(fetchMoviesByFilters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const moviesSelectors = moviesAdapter.getSelectors(state => state.movies);

export const selectManyByIds = createSelector(
  [
    (state) => state.movies.entities,
    (state, ids) => ids
  ],
  (entities, ids) => ids.map(id => entities[id]).filter(Boolean)
);

export default moviesSlice.reducer;
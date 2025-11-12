import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieById, getMovies, getMoviesByFilters } from "../../api/moviesAPI.js";

export const fetchMovies = createAsyncThunk(
    "movies/fetchAll", 
    async () => {
        const response = await getMovies();
        return response;
    }
);

export const fetchOneMovie = createAsyncThunk(
    "movies/fetchOneMovie",
    async ({movieId}) => {
        const respons = await getMovieById(movieId)
        return respons;
    }
)

export const fetchMoviesByFilters = createAsyncThunk(
    "movies/fetchByFilters",
    async ({ name, year, genres }) => {
        const response = await getMoviesByFilters(name, year, genres);
        return response;
    }
);

export const fetchMoviesByName = createAsyncThunk(
    "movies/fetchByName",
    async (name) => {
        const response = await getMoviesByFilters(name);
        return response;
    }
);

export const fetchMoviesByYear = createAsyncThunk(
    "movies/fetchByYear",
    async (year) => {
        const response = await getMoviesByFilters( "", year);
        return response;
    }
);

export const fetchMoviesByGenres = createAsyncThunk(
    "movies/fetchByGenres",
    async (genres) => {
        const response = await getMoviesByFilters("", "", genres);
        return response;
    }
);

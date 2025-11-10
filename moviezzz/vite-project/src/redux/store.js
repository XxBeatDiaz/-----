import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users";
import moviesReducer from "./slices/movies";
import genresReducer from "./slices/genres";
import searchReducer from "./slices/search";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer,
    },
});

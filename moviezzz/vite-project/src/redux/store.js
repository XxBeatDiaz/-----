import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user";
import moviesReducer from "./slices/movies";
import genresReducer from "./slices/genres";
import searchReducer from "./slices/search";

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer,
    },
});

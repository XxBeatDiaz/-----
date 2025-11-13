import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./slices/login";
import moviesReducer from "./slices/movies";
import genresReducer from "./slices/genres";
import searchReducer from "./slices/search";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer,
    },
});

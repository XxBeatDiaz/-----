import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        genres: [],
    },
});

export default genresSlice.reducer;

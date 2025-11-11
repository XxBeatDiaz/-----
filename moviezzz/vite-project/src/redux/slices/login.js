import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../thunks/loginThunk';

const loginSlice = createSlice({
    name: 'users',
    initialState: {
        user: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default loginSlice.reducer;










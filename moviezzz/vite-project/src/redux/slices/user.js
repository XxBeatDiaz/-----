import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchUser } from '../thunks/userThunks';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: "idle",
        error: null
    },
    reducers: {
        logOut: (state) => {
            state.user = null;
            state.status = 'idle';
            state.error = null;
        }
    },
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

export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;

export const selectMoviesIdsFromUser = createSelector(
    [selectUser],
    (user) => {
        if (!user) return [];

        return user.moviesIds;
    }
);

export const { logOut } = userSlice.actions;
export default userSlice.reducer;










import { createAsyncThunk } from "@reduxjs/toolkit";

import { login } from "../../api/loginAPI";

export const fetchUser = createAsyncThunk(
    "login/fetchUser",
    async ({ username, password }) => {
        const response = await login(username, password);
        return response;
    }
);
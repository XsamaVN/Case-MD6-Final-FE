import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./Api";

export const loginUser = createAsyncThunk (
    'user/login',
    async (data) => {
        return  await customAxios.post('login', data);
    }
)

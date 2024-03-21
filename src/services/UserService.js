import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./Api";

export const loginUser = createAsyncThunk (
    'email/login',
    async (data) => {
        const res = await customAxios.post('login', data)
        return res.data;
    }
)

export const registerUser = createAsyncThunk (
    'email/register',
    async ({id, data}) => {
        return  await customAxios.post(`register/${id}`, data);
    }
)


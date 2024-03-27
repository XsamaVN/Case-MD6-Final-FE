import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./Api";

export const loginUser = createAsyncThunk(
    'user/login',
    async (values) => {
        try {
            const res = await customAxios.post(`login`, values)
            return res.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
)

export const registerUser = createAsyncThunk (
    'email/register',
    async ({id, data}) => {
        return  await customAxios.post(`register/${id}`, data);
    }
)


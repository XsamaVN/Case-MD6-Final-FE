import {createSlice} from "@reduxjs/toolkit";
import {loginUser, registerUser} from "../../services/UserService";

const initialState = {
    users: [],
    // currentUser: localStorage.getItem('currentUser')
}
const userSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            localStorage.setItem('currentUser', action.payload.username)
            localStorage.setItem("access_token", action.payload.accessToken)
            localStorage.setItem("roles",action.payload.roles[0].authority)
            // state.currentUser = action.payload.data.username;
            state.users= action.payload
        });
        // builder.addCase(registerUser.fulfilled, (state, action) => {
        //
        // });
    }
})
export default userSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
import {loginUser, registerUser} from "../../services/UserService";

const initialState = {
    users: [],
    // currentUser: JSON.parse(localStorage.getItem('currentUser')),
    registrationStatus: 'idle', // Thêm trạng thái để theo dõi quá trình đăng ký
    registrationError: null
};

const userSlice = createSlice({
    name: 'user',
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
        builder.addCase(registerUser.pending, (state) => {
            state.registrationStatus = 'loading';
            state.registrationError = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.registrationStatus = 'succeeded';
            state.users.push(action.payload); // Có thể cần cập nhật danh sách người dùng sau khi đăng ký thành công
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.registrationStatus = 'failed';
            state.registrationError = action.error.message; // Lưu trữ lỗi trong trường hợp đăng ký không thành công
        });
    }
});

export default userSlice.reducer;

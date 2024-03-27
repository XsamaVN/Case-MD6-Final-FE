import {createSlice} from "@reduxjs/toolkit";
import {loginUser, registerUser} from "../../services/UserService";

const initialState = {
    users: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    registrationStatus: 'idle', // Thêm trạng thái để theo dõi quá trình đăng ký
    registrationError: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem('currentUser', JSON.stringify(action.payload))
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

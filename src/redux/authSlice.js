import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from './axiosConfig.js'
const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isLoading: null,
    message: null,
    isSuccess: false,
}
export const registerUser = createAsyncThunk('auth/registerUser', async ({email, password, username}, {rejectWithValue}) => {
    try {
        const {data} = await axiosConfig.post('/auth/register', {email, password, username})
        if(data.token) localStorage.setItem('token', data.token)
        return data
    } catch(err) {
        console.log(err)
        return rejectWithValue(err.response.data || { message: 'Server Error' });
    }
} )
export const loginUser = createAsyncThunk('auth/loginUser', async ({email, password}, {rejectWithValue}) => {
    try {
        const {data} = await axiosConfig.post('/auth/login', {email, password})
        if(data.token) localStorage.setItem('token', data.token)
        return data
    } catch(err) {
        console.log(err)
        return rejectWithValue(err.response.data || { message: 'Server Error' });
    }
} )
export const getMe = createAsyncThunk('auth/getMe', async (_, {rejectWithValue}) => {
    try {
        const {data} = await axiosConfig.get('/auth/me')
        return data
    } catch(err) {
        console.log(err)
        return rejectWithValue(err.response.data || { message: 'Server Error' });
    }
})
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            localStorage.removeItem('token')
            state.isLoading = null
            state.message = null
            state.isSuccess = false
        }
    }, extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload.newUser;
            state.token = action.payload.token;
            state.message = action.payload.message;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload?.message || 'Registration failed';
        })
        //login
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload?.user;
            state.token = action.payload?.token;
            state.message = action.payload?.message;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload?.message || 'Registration failed';
        })
        //login
        .addCase(getMe.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload?.user;
            state.message = action.payload?.message;
        })
        .addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload?.message || 'Registration failed';
        })
    }
})
export const isAuthInSlice = (state) => Boolean(state.auth.user)
export default authSlice.reducer
export const {logout} = authSlice.actions
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from './axiosConfig.js'
const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isLoading: null,
    message: null
}
export const registerUser = createAsyncThunk('auth/registerUser', async ({email, password}, {rejectWithValue}) => {
    try {
        const {data} = await axiosConfig.post('/auth/register', {email, password})
        if(data.token) localStorage.setItem('token', data.token)
        return data
    } catch(err) {
        console.log(err)
        return rejectWithValue(err.response.data || { message: 'Server Error' });
    }
} )
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = localStorage.removeItem('token')
            state.isLoading = null
            state.message = null
        }
    }, extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload?.newUser
            state.token = action.payload?.token
            state.message = action.payload?.message
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.message = action.payload?.message || 'Registration failed'
            
        })
    }
})
export default authSlice.reducer
export const {logout} = authSlice.actions
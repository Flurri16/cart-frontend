// src/redux/postSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosConfig from './axiosConfig.js'
const initialState = {
    items: [],
    message: null
}
// Асинхронный экшен для добавления поста
export const addItem = createAsyncThunk(
    'items/addItem',
    async (postData, { rejectWithValue }) => {
        try {
            const response = await axiosConfig.post('/add', postData)

            return response.data // возвращаем данные из ответа
        } catch (err) {
            return rejectWithValue(err.response.data) // если ошибка, возвращаем её
        }
    }
)
export const getAllItems = createAsyncThunk(
    'items/getAllItems',
     async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosConfig.get('/items')
            return data.items
        } catch(err) {
            console.log(err)
            return rejectWithValue(err.response.data) // если ошибка, возвращаем её           
        }
    }
)
export const deleteItem = createAsyncThunk(
    'items/deleteItem',
    async (id, {rejectWithValue}) => {
        try {
            const { data } = await axiosConfig.delete(`/items/delete/${id}`)
            return data
        } catch(err) {
            console.log(err)
            return rejectWithValue(err.response.data) // если ошибка, возвращаем её           
        }
    }
)
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addItem.pending, (state) => {
                state.message = null
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.message = action.payload.message
                state.items.push(action.payload.newItem) // добавляем новый пост в массив
            })
            .addCase(addItem.rejected, (state, action) => {
                state.message = action.payload.message
            })
            //get all
            .addCase(getAllItems.pending, (state) => {
                state.message = null
            })
            .addCase(getAllItems.fulfilled, (state, action) => {
                state.message = action.payload?.message
                state.items = action.payload
                
            })
            .addCase(getAllItems.rejected, (state, action) => {
                state.message = action.payload?.message
            })
            //delete
            .addCase(deleteItem.pending, (state) => {
                state.message = null
              })
            .addCase(deleteItem.fulfilled, (state, action) => {
            state.message = action.payload.message
            // удаляем удалённый item из массива по id
            state.items = state.items.filter(item => item._id !== action.payload._id)
            })
            .addCase(deleteItem.rejected, (state, action) => {
            state.message = action.payload?.message
            })
              
    },
})

export default itemsSlice.reducer

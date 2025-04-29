import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './itemSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice' // 👈 добавляем

export const store = configureStore({
  reducer: {
    items: itemReducer,
    auth: authReducer,
    cart: cartReducer, // 👈 добавляем
  },
})

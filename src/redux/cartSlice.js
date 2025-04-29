// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], // товары в корзине
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const itemInCart = state.cartItems.find(element => element._id === item._id)
      if(itemInCart) {
        itemInCart.quantity += 1
      } else {
        const newItem = {...item, quantity: 1}
        state.cartItems.push(newItem)
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const itemInCart = state.cartItems.find(element => element._id === item._id);
      
      if (itemInCart) {
        if (itemInCart.quantity > 1) {
          itemInCart.quantity -= 1;
        } else {
          // Удаляем товар из корзины, если его количество становится 0
          state.cartItems = state.cartItems.filter(element => element._id !== item._id);
        }
      }
    }
    // removeFromCart(state, action) {
    //   state.cartItems = state.cartItems.filter(x => x._id !== action.payload);
    // },
    // clearCart(state) {
    //   state.cartItems = [];
    // }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

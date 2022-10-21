import { createSlice } from '@reduxjs/toolkit'

const favSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      console.log('ADDINGGGG FAV')
      
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFavorite: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const {
  addToFavorites,
  removeFavorite,
} = favSlice.actions

export default favSlice.reducer //cartreducer

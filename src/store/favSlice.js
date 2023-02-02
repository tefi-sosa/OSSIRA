import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favorites: []
}

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      console.log('ADDINGGGG FAV')
      
      state.favorites.push(action.payload);

    },

    removeFavorite: (state, action) => {
      console.log('DELETING FAV')

      const removeFav = state.favorites.filter((item) => item.id !== action.payload);
      state.favorites = removeFav;

    },
  },
});

export const {
  addToFavorites,
  removeFavorite,
} = favSlice.actions

export default favSlice.reducer 

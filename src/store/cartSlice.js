import { createSlice } from '@reduxjs/toolkit';

//^ INITIAL STATE AND TIMER //
const initialState = {
  cart: [],
}

let logoutTimer

//& TIME CALCULATOR //
const calculateRemainingTime = exp => {
	const currentTime = new Date().getTime()
	const expTime = exp
	const remainingTime = expTime - currentTime
	return remainingTime
}

//& LOCAL DATA HELPER //
const getLocalData = () => {
	const storedCart = JSON.parse(localStorage.getItem('cart'))
	const storedExpCart = localStorage.getItem('expCart')

	const remainingTime = calculateRemainingTime(storedExpCart)

	if (remainingTime <= 1000 * 60 * 30) {
		localStorage.removeItem('cart')
		localStorage.removeItem('expCart')
		return null
	}

	return {
		cart: storedCart,
		duration: remainingTime,
	}
}

const localData = getLocalData()

if (localData) {
    initialState.cart = localData.cart
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log('ADDINGGGG')

      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer; //cartreducer

import { createSlice } from '@reduxjs/toolkit';
import { reducerName } from '../../constant';

const initialState = {
  cartData: '',
  isCartLoading: false,
  isQtyUpdate: false,
};

// cart slice
const CartSlice = createSlice({
  name: reducerName.cartReducer,
  initialState: initialState,
  reducers: {
    clear: state => {
      state.cartData = '';
    },
    addCart: (state, actions) => {
      state.cartData = actions.payload;
    },
    addToCartPending: state => {
      state.isCartLoading = true;
    },
    addToCartSuccess: (state, actions) => {
      state.cartData = actions.payload;
      state.isCartLoading = false;
    },
    createCartPending: () => {},
    createCartSuccess: (state, actions) => {
      state.cartData = actions.payload;
    },
    getCartSuccess: (state, actions) => {
      state.cartData = actions.payload;
      state.isCartLoading = false;
    },
    getCartPending: state => {
      state.isCartLoading = true;
    },
    removeItemPending: state => {
      state.isCartLoading = true;
    },
    removeItemSuccess: (state, actions) => {
      state.cartData = actions.payload;
      state.isCartLoading = false;
    },
    updateQuantityPending: state => {
      state.isQtyUpdate = true;
    },
    updateQuantitySuccess: (state, actions) => {
      state.cartData = actions.payload;
      state.isQtyUpdate = false;
    },
  },
});

export const CartReducer = CartSlice.reducer;
export const CartAction = CartSlice.actions;

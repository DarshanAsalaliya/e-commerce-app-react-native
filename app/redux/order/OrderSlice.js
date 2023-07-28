import { createSlice } from '@reduxjs/toolkit';
import { reducerName } from '../../constant';

const initialState = {
  isLoading: false,
  isOrderListLoad: false,
  isCartCheckoutLoading: false,
  orderData: [],
  checkoutData: [],
  isCheckOutSuccess: false,
};

// order slice
const OrderSlice = createSlice({
  name: reducerName.orderReducer,
  initialState: initialState,
  reducers: {
    clear: state => {
      state.orderData = [];
    },
    generateCheckoutPending: state => {
      state.isLoading = true;
    },
    generateCheckoutSuccess: (state, actions) => {
      state.checkoutData = actions.payload;
      state.isCheckOutSuccess = true;
      state.isLoading = false;
    },
    orderListPending: (state, actions) => {
      state.isOrderListLoad = true;
    },
    orderListSuccess: (state, actions) => {
      state.isOrderListLoad = false;
      state.orderData = actions.payload;
    },
    generateCartCheckoutPending: state => {
      state.isCartCheckoutLoading = true;
    },
    generateCartCheckoutSuccess: (state, actions) => {
      state.checkoutData = actions.payload;
      state.isCheckOutSuccess = true;
      state.isCartCheckoutLoading = false;
    },
    toggleSuccess: (state, action) => {
      state.isCheckOutSuccess = !state.isCheckOutSuccess;
    },
  },
});

export const OrderReducer = OrderSlice.reducer;
export const OrderAction = OrderSlice.actions;

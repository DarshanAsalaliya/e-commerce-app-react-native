import { createSlice } from '@reduxjs/toolkit';
import { reducerName } from '../../constant';

// product slice
const ProductSlice = createSlice({
  name: reducerName.productReducer,
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {
    getProductsPending: state => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, actions) => {
      state.products = actions.payload;
      state.isLoading = false;
    },
  },
});

export const ProductReducer = ProductSlice.reducer;
export const ProductAction = ProductSlice.actions;

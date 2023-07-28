import { createSlice } from '@reduxjs/toolkit';
import { CommonStrings, reducerName } from '../../constant';

// category slice
const CategorySlice = createSlice({
  name: reducerName.categoryReducer,
  initialState: {
    categories: [],
    isLoading: false,
  },
  reducers: {
    getCategoryPending: state => {
      state.isLoading = true;
    },
    getCategorySuccess: (state, actions) => {
      state.categories = [
        { id: CommonStrings.allToken, name: CommonStrings.all },
        ...actions.payload,
      ];
      state.isLoading = false;
    },
  },
});

export const CategoryReducer = CategorySlice.reducer;
export const CategoryAction = CategorySlice.actions;

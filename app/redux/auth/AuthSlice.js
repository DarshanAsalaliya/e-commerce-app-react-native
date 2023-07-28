import { createSlice } from '@reduxjs/toolkit';
import { reducerName } from '../../constant';

const initialState = {
  isLoading: false,
  isLogin: false,
  userData: '',
  isCartIdUpdate: false,
};

// auth slice
const AuthSlice = createSlice({
  name: reducerName.authReducer,
  initialState: initialState,
  reducers: {
    clear: state => {
      state.userData = initialState.userData;
      state.isLogin = initialState.isLogin;
    },
    logOut: state => {
      state.userData = initialState.userData;
      state.isLogin = false;
    },
    login: state => {
      state.isLogin = true;
    },
    signupPending: state => {
      state.isLoading = true;
    },
    signupSuccess: (state, actions) => {
      state.userData = actions.payload;
      state.isLoading = false;
      state.isLogin = true;
    },
    loginPending: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, actions) => {
      state.userData = actions.payload;
      state.isLoading = false;
    },
    customerUpdatePending: state => {
      state.isLoading = true;
    },
    customerUpdateSuccess: (state, actions) => {
      state.userData = actions.payload;
      state.isLoading = false;
    },
  },
});

export const AuthReducer = AuthSlice.reducer;
export const AuthAction = AuthSlice.actions;

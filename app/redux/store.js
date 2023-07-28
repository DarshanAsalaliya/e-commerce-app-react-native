import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from './product';
import { AuthReducer } from './auth';
import { CategoryReducer } from './category';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { CartReducer } from './cart';
import { OrderReducer } from './order';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

// combine reducer
const combineReducer = combineReducers({
  ProductReducer: ProductReducer,
  AuthReducer: AuthReducer,
  CategoryReducer: CategoryReducer,
  CartReducer: CartReducer,
  OrderReducer: OrderReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthReducer'],
};

const persistedReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

import { call, put, takeLeading } from 'redux-saga/effects';
import {
  addToCart,
  createCart,
  getCarts,
  removeItem,
  updateQty,
} from '../../service';
import { CartAction } from './CartSlice';

// cart saga
function* workCreateCart() {
  const cart = yield call(createCart);
  if (cart) {
    yield put(CartAction.createCartSuccess(cart));
  }
}

function* workGetCart(action) {
  const getCart = yield call(getCarts, action.payload);
  if (getCart) {
    yield put(CartAction.getCartSuccess(getCart));
  }
}
function* workAddToCart(action) {
  const addtocart = yield call(addToCart, action.payload);
  if (addtocart) {
    yield put(CartAction.addToCartSuccess(addtocart));
  }
}
function* workRemoveItem(action) {
  const removetocart = yield call(() => removeItem(action.payload));
  if (removetocart) {
    yield put(CartAction.removeItemSuccess(removetocart));
  }
}
function* workUpdateCartQty(action) {
  const updateCart = yield call(updateQty, action.payload);
  if (updateCart) {
    yield put(CartAction.updateQuantitySuccess(updateCart));
  }
}
function* watchCart() {
  yield takeLeading(CartAction.createCartPending, workCreateCart);
  yield takeLeading(CartAction.getCartPending, workGetCart);
  yield takeLeading(CartAction.addToCartPending, workAddToCart);
  yield takeLeading(CartAction.removeItemPending, workRemoveItem);
  yield takeLeading(CartAction.updateQuantityPending, workUpdateCartQty);
}
export default watchCart;

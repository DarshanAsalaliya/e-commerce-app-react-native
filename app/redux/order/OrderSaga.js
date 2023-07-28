import { call, put, takeLeading } from 'redux-saga/effects';
import { createCart, generateCheckout, orderList } from '../../service';
import { AuthAction, customerUpdate } from '../auth';
import { CartAction } from '../cart';
import { OrderAction } from './OrderSlice';

// order saga
function* workOrderList(action) {
  const order = yield call(orderList, action.payload);
  if (order) {
    yield put(OrderAction.orderListSuccess(order));
  }
}

function* workGenerateCheckout(action) {
  const checkout = yield call(generateCheckout, action.payload);
  if (checkout) {
    yield put(OrderAction.generateCheckoutSuccess(checkout));
  }
}

function* workGenerateCartCheckout(action) {
  const checkoutCart = yield call(generateCheckout, action.payload);
  yield put(OrderAction.generateCartCheckoutSuccess(checkoutCart));
  const newCart = yield call(createCart);
  yield put(CartAction.createCartSuccess(newCart));
  const userUpdate = yield call(customerUpdate, {
    customer: checkoutCart.customer,
    cartId: newCart.id,
  });
  yield put(AuthAction.customerUpdateSuccess(userUpdate));
}

function* watchOrder() {
  yield takeLeading(OrderAction.orderListPending, workOrderList);
  yield takeLeading(OrderAction.generateCheckoutPending, workGenerateCheckout);
  yield takeLeading(
    OrderAction.generateCartCheckoutPending,
    workGenerateCartCheckout,
  );
}
export default watchOrder;

import { all, fork } from 'redux-saga/effects';
import { watchLogin } from './auth';
import { watchCart } from './cart';
import { watchCategory } from './category';
import { watchOrder } from './order';
import { watchProduct } from './product';

// root saga function
function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchCategory),
    fork(watchProduct),
    fork(watchCart),
    fork(watchOrder),
  ]);
}

export default rootSaga;

import { call, put, takeEvery } from 'redux-saga/effects';
import { getProducts } from '../../service';
import { ProductAction } from './ProductSlice';

// product saga
function* workProduct() {
  const product = yield call(getProducts);
  if (product) {
    yield put(ProductAction.getProductsSuccess(product));
  }
}
function* watchProduct() {
  yield takeEvery(ProductAction.getProductsPending, workProduct);
}
export default watchProduct;

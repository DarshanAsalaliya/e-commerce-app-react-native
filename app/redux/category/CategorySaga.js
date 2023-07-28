import { call, put, takeEvery } from 'redux-saga/effects';
import { getCategory } from '../../service';
import { CategoryAction } from './CategorySlice';

// category saga
function* workCategory() {
  const category = yield call(getCategory);
  if (category) {
    yield put(CategoryAction.getCategorySuccess(category));
  }
}
function* watchCategory() {
  yield takeEvery(CategoryAction.getCategoryPending, workCategory);
}
export default watchCategory;

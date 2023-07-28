import { call, put, takeLeading } from 'redux-saga/effects';
import { customerUpdate, login, signUp } from '../../service';
import { AuthAction } from './AuthSlice';

// auth saga
function* workLogin(action) {
  const user = yield call(login, action.payload);
  if (user) {
    yield put(AuthAction.loginSuccess(user));
  } else {
  }
}

function* workSignup(action) {
  const user = yield call(() => signUp(action.payload));
  if (user) {
    yield put(AuthAction.signupSuccess(user));
  } else {
  }
}

function* workCustomerUpdate(action) {
  const user = yield call(customerUpdate, action.payload);
  if (user) {
    yield put(AuthAction.customerUpdateSuccess(user));
  } else {
  }
}

function* watchLogin() {
  yield takeLeading(AuthAction.loginPending, workLogin);
  yield takeLeading(AuthAction.signupPending, workSignup);
  yield takeLeading(AuthAction.customerUpdatePending, workCustomerUpdate);
}

export default watchLogin;

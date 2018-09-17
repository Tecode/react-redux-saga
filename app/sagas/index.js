import { put, takeEvery, call } from 'redux-saga/effects';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  const data = yield call(() => 56);
  console.log(data, '--------------data');
  yield put({ type: 'USER_FETCH_SUCCEEDED', message: '异步加载成功' });
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({ type: "USER_FETCH_SUCCEEDED", message: user });
  // } catch (e) {
  //   yield put({ type: "USER_FETCH_FAILED", message: '出错了' });
  // }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mainSagas() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default mainSagas;

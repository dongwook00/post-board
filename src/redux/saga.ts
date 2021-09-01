import { takeLatest, fork, all } from 'redux-saga/effects';

function* test() {
  console.log('saga test');
}

function* saga() {
  yield takeLatest('list/test', test);
}

export default function* rootSaga() {
  yield all([fork(saga)]);
}

import { fork, all, put, debounce } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ListState, updateBoardTitle } from './listSlice';

function* updateBoardTitleBySaga(action: PayloadAction<ListState>) {
  yield put(updateBoardTitle(action.payload));
}

function* saga() {
  yield debounce(500, 'list/updateBoardTitleBySaga', updateBoardTitleBySaga);
}

export default function* rootSaga() {
  yield all([fork(saga)]);
}

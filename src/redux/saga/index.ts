import { all } from 'redux-saga/effects';
import authenSaga from './authSaga';
import quoteListSaga from './quoteListSaga';
import quoteDetailSaga from './quoteDetailSaga';
export function* rootSaga() {
    yield all([authenSaga(), quoteListSaga(), quoteDetailSaga()]);
}

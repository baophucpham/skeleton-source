import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getListQuote } from 'src/api/apiGetListQuote';
import { GET_LIST_ACTION, updateListAction } from '../actions/getListAction';

function* quoteListSaga(action?: any) {
    try {
        // Loading.show()
        const response: Promise<any> = yield call(getListQuote, action.payload);
        if (response) {
            // Map data to action redux
            yield put(updateListAction(response));
            // toast.success('loading success')
        } else {
            // toast.error('loading false')
            console.log(response, 'ERROR QUOTE LIST H');
        }
    } catch (error:any) {
        console.log(error?.response, 'ERROR QUOTE LIST');

        if (error instanceof Error) {
            yield put(updateListAction(error.message));
        } else {
            console.log('error', 'ERROR QUOTE LIST');
        }
        // toast.error('loading false')
    } finally {
        // Loading.hide()
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield takeLatest(GET_LIST_ACTION, quoteListSaga);
}

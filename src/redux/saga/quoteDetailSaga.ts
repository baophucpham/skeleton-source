import { call, put, takeLatest } from 'redux-saga/effects';
import { getQuoteDetailAction, updateQuoteDetailtAction } from '../actions/getQuoteDetailAction';
import { getDetailQuote } from 'src/api/apiGetDetailQuote';

function* quoteDetailSaga(action?: any) {
    try {
        // Loading.show()
        const response: Promise<any> = yield call(getDetailQuote, action.payload);
        console.log(response,'sagaa')
        if (response) {
            // Map data to action redux
            yield put(updateQuoteDetailtAction(response));
            // toast.success('loading success')
        } else {
            // toast.error('loading false')
            console.log(response, 'ERROR QUOTE DETAIL');
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message, 'ERROR QUOTE DETAIL');
        } else {
            console.log('An unknown error occurred', 'ERROR QUOTE DETAIL');
        }
        // toast.error('loading false')
    } finally {
        // Loading.hide()
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield takeLatest(getQuoteDetailAction, quoteDetailSaga);
}

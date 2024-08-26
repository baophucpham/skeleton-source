import { call, put, takeLatest } from "redux-saga/effects"
import { LOGIN, loginSuccess } from "../actions/authenAction"

// eslint-disable-next-line require-yield
function* loginSaga(action: any ) {
	try {
		// Loading.show()
		// const response = yield call(loginApi.login, action.payload)
		// localStorage.setItem(StorageKeys.TOKEN, response.access_token)
		// if (response.data?.role === 'admin') {
			// history.replace('/admin/account')
		// }
		// yield put(loginSuccess(response.data))
		// toast.success('🚀 Login success', option)
	} catch (error) {
		// toast.error(`${error}`, option)
	} finally {
		// Loading.hide()
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(LOGIN, loginSaga)
}
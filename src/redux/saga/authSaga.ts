import { call, put, takeLatest } from 'redux-saga/effects';
import { authExited, LOGIN } from '../actions/authenAction';
import { loginApi } from 'src/api/apiLogin';
import { toast } from 'react-toastify';
import { refreshTokenApi } from 'src/api/apiRefetchToken';

function* loginSaga(action: any) {
    try {
        const response: Promise<any> = yield call(loginApi, action.payload);
        const { access_token, refresh_token }: any = response || {};
        if (access_token) {
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            yield put(authExited(true));
            action.payload?.history.push('/dashboard');
            toast.success('Login successful');
        } else {
            action.payload?.history.push('/login');
            toast.error('Login false');
        }
    } catch (error: any) {
        if (error?.response?.status === 401) {
            try {
                const refreshResponse: Promise<any> = yield call(
                    refreshTokenApi,
                    {
                        refresh_token: localStorage.getItem('refresh_token'),
                    },
                );
                const {
                    access_token: newAccessToken,
                    refresh_token: newRefetchToken,
                }: any = refreshResponse || {};

                if (newAccessToken) {
                    localStorage.setItem('access_token', newAccessToken);
                    localStorage.setItem('refresh_token', newRefetchToken);
                    yield put(authExited(true));
                    toast.success('Login successful with refreshed token');
                } else {
                    action.payload?.history.push('/login');
                    toast.error('Refresh token failed, login required');
                }
            } catch (refreshError) {
                console.log(refreshError, 'ERROR REFRESH TOKEN');
                action.payload?.history.push('/login');
                toast.error('Error refreshing token. Please contact support.');
            }
        } else {
            console.log(error?.response?.status, 'ERROR SAGA');
            action.payload?.history.push('/login');
            toast.error(
                'Reservations user profile not found. Please contact the ACE Team.',
            );
        }
    } finally {
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield takeLatest(LOGIN, loginSaga);
}

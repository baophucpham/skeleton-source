import { AuthenState } from 'src/redux/reducers/authenReducer';
import { RoleCheckState } from 'src/redux/reducers/checkRoleReducer';

export interface RootState {
    authen: AuthenState;
    rolecheck: RoleCheckState;
}

export interface ResponseType<T> {
    statusCode?: 200 | 400 | 403 | 404 | 405 | 500 | null;
    data?: any;
    message?: string;
    error?: string;
    status?: any;
}

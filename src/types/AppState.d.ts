import { AuthenState } from "src/redux/reducers/authenReducer";

export interface RootState {
  authen: AuthenState
}

export interface ResponseType<T> {
  statusCode?: 200 | 400 | 403 | 404 | 405 | 500 | null;
  data?: any;
  message?: string;
  error?: string;
  status?: any;
}
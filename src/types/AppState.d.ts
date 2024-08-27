import { AuthenState, AuthenCheckState } from "src/redux/reducers/authenReducer";

export interface RootState {
  authen: AuthenState
}

export interface setAuth {
  authCheck: AuthenCheckState 
}

export interface ResponseType<T> {
  statusCode?: 200 | 400 | 403 | 404 | 405 | 500 | null;
  data?: any;
  message?: string;
  error?: string;
  status?: any;
}
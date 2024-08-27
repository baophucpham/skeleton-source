import { AnyAction } from 'redux';
import * as ActionType from '../actions/authenAction';

export interface AuthenState {
    user: any;
    isAuthen: boolean;
}

const initialState: AuthenState = {
    user: {},
    isAuthen: false,
};
export const authenReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case ActionType.UPDATE_AUTH:
            return {
                ...state,
                isAuthen: action.payload,
            };
        case ActionType.LOG_OUT:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

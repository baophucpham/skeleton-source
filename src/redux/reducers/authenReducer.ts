import { AnyAction } from "redux"
import * as ActionType from '../actions/authenAction';
export interface AuthenState {
    user: any
}
const initialState: AuthenState  = {
    user: {}
}
export const authenReducer = (state = initialState, action: AnyAction)=> {
    switch(action.type) {
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case ActionType.LOG_OUT:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}
import { AnyAction } from 'redux';
import * as ActionType from '../actions/authenAction';
export interface AuthenCheckState {
    auth: any;
}
const initialState: AuthenCheckState = {
    auth: '',
};
export const authenCheckReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionType.UPDATE_AUTH:
            return {
                ...state,
                auth: action.payload,
            };
        default:
            console.log(action.payload, 'action.type');

            return state;
    }
};

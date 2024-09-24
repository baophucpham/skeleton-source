import { AnyAction } from 'redux';
import * as ActionType from '../actions/roleCheckAction';
export interface RoleCheckState {
    role: string;
}
const initialState: RoleCheckState = {
    role: '',
};
export const roleCheckReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionType.SET_CHECK_ROLE:
            return {
                ...state,
                role: action.payload,
            };
        default:
            return state;
    }
};

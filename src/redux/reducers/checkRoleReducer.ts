import { AnyAction } from 'redux';
import * as ActionType from '../actions/roleCheckAction';


export interface RoleCheckState {
    roles: any;
}
const initialState: RoleCheckState = {
    roles: '',
};
export const roleCheckReducer = (state = initialState, action: AnyAction) => {
    console.log(action.payload,'reducer CHECK_ROLE')
    switch (action.type) {
        case ActionType.CHECK_ROLE:
            return {
                ...state,
                roles: action.payload,
            };
        default:
            console.log(action.payload, 'action.type');

            return state;
    }
};

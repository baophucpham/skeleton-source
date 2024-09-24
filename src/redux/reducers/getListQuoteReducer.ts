import { AnyAction } from 'redux';
import * as ActionType from '../actions/getListAction';


export interface ListQuoteState {
    dataQuote: any;
}
const initialState: ListQuoteState = {
    dataQuote: [],
};
export const getListQouteReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionType.UPDATE_LIST:
            return {
                ...state,
                dataQuote: action.payload,
            };
        default:
            return state;
    }
};

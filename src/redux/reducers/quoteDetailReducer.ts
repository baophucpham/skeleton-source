import { AnyAction } from 'redux';
import * as ActionType from '../actions/getQuoteDetailAction';


export interface QuoteDetailState {
    dataDetail: any;
}
const initialState: QuoteDetailState = {
    dataDetail: '',
};
export const getQouteDetailReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionType.UPDATE_QUOTE_DETAIL:
            return {
                ...state,
                dataDetail: action.payload,
            };
        default:
            return state;
    }
};

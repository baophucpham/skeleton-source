import { combineReducers } from '@reduxjs/toolkit';
import { authenReducer } from './authenReducer';
import { roleCheckReducer } from './checkRoleReducer';
import { getListQouteReducer } from './getListQuoteReducer';
import { getQouteDetailReducer } from './quoteDetailReducer';
const rootReducer = combineReducers({
    authen: authenReducer,
    roleCheck: roleCheckReducer,
    listQuote: getListQouteReducer,
    quoteDetail: getQouteDetailReducer
});

export { rootReducer };

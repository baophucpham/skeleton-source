import { combineReducers } from '@reduxjs/toolkit';
import { authenReducer } from './authenReducer';
import { authenCheckReducer } from './authenCheckReducer';
const rootReducer = () =>
    combineReducers({
        // authen: authenReducer,
        authen: authenCheckReducer,
    });

export { rootReducer };

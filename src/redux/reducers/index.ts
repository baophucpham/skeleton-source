import { combineReducers } from '@reduxjs/toolkit';
import { authenReducer } from './authenReducer';
import { connectRouter } from 'connected-react-router';
const rootReducer = (history: any) =>
    combineReducers({
        authen: authenReducer,
        router: connectRouter(history),
    });

export { rootReducer };

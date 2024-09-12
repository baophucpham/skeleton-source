import { combineReducers } from '@reduxjs/toolkit';
import { authenReducer } from './authenReducer';
import { roleCheckReducer } from './checkRoleReducer';
const rootReducer = combineReducers({
    authen: authenReducer,
    roleCheck: roleCheckReducer
});

export { rootReducer };

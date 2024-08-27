import { RootState } from 'src/types';

export const userSelector = (state: RootState) => state.authen.user;
export const isAuthSelector = (state: RootState) => state.authen.isAuthen;

import { RootState } from "src/types";

export const userSelector = (state: RootState) => state.authen.user;
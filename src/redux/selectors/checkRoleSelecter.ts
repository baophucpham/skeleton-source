import { RootState } from 'src/types';

export const roleSelector = (state: RootState) => state.roleCheck.role;
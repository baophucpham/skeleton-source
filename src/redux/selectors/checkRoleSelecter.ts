import { RootState } from 'src/types';

export const roleSelector = (state: RootState) => state?.rolecheck?.roles
console.log(roleSelector,'selecterRole')
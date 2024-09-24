import { RootState } from 'src/types';

export const listQuoteSelector = (state: RootState) => state.listQuote.dataQuote;
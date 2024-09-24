import { AuthenState } from 'src/redux/reducers/authenReducer';
import { RoleCheckState } from 'src/redux/reducers/checkRoleReducer';
import { ListQuoteState } from 'src/redux/reducers/getListQuoteReducer';
import { QuoteDetailState } from 'src/redux/reducers/quoteDetailReducer';

export interface RootState {
    authen: AuthenState;
    roleCheck: RoleCheckState;
    listQuote: ListQuoteState;
    quoteDetail: QuoteDetailState;
}

export interface ResponseType<T> {
    statusCode?: 200 | 400 | 403 | 404 | 405 | 500 | null;
    data?: any;
    message?: string;
    error?: string;
    status?: any;
}

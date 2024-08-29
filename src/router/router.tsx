import Login from 'src/pages/loginPage';
import QuoteDetailPage from 'src/pages/QuoteDetailPage';

const routes = [
    {
        path: '/login',
        exact: true,
        main: () => <Login />,
    },
    {
        path: '/quoteDetail',
        exact: true,
        main: () => <QuoteDetailPage />,
    },
];

export default routes;

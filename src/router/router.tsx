import DashboardComponent from 'src/pages/Dashboard';
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
    {
        path: '/dashboard',
        exact: true,
        main: () => <DashboardComponent />,
    },
];

export default routes;

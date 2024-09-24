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
        path: '/dashboard/:id',
        exact: true,
        main: () => <DashboardComponent />,
    },
    {
        path: '/quoteDetail/introduction',
        exact: true,
        main: () => <QuoteDetailPage />,
    },
    {
        path: '/quoteDetail/itineraryInDetail',
        exact: true,
        main: () => <QuoteDetailPage />,
    },
    {
        path: '/quoteDetail/pricingAndBooking',
        exact: true,
        main: () => <QuoteDetailPage />,
    },
    {
        path: '/quoteDetail/importantInformation',
        exact: true,
        main: () => <QuoteDetailPage />,
    },
    {
        path: '/quoteDetail/termsAndCoditions',
        exact: true,
        main: () => <QuoteDetailPage />,
    },
];

export default routes;

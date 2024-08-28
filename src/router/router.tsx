import Login from 'src/pages/loginPage';
import InformationPage from 'src/pages/InformationPage';

const routes = [
    {
        path: '/login',
        exact: true,
        main: () => <Login />,
    },
    {
        path: '/informationPage',
        exact: true,
        main: () => <InformationPage />,
    },
];

export default routes;

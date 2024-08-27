import Login from 'src/pages/loginPage';
import PrivatePage from 'src/pages/privatePage';

const routes = [
    {
        path: '/login',
        exact: true,
        main: () => <Login />,
    },
    {
        path: '/privatePage',
        exact: true,
        main: () => <PrivatePage />,
    },
];

export default routes;

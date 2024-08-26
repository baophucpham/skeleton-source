import Login from 'src/pages/loginPage';
import PrivatePage from 'src/pages/privatePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Login />,
    },
    {
        path: '',
        exact: true,
        main: () => <PrivatePage />,
    },
];

export default routes;

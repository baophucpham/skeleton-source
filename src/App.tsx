import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './router/router';
import PrivatePage from './pages/privatePage';
import Login from './pages/loginPage';
import ProtectedRoute from './router/protectedRoutes';

const App: React.FC = () => {
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
        setIsAuth(false);
    }, [isAuth]);

    return (
        <Switch>
            {/* <Route exact path="/">
                <Redirect to="/privatePage" />
            </Route> */}
            {/* <ProtectedRoute
                path={'/privatePage'}
                component={PrivatePage}
                isAuthenticated={isAuth}
            /> */}
            <Route path={'/login'} exact={true} component={() => <Login />} />
            <Route path={'/privatePage"'} exact={true} component={() => <PrivatePage />} />
        </Switch>
    );
};

export default App;

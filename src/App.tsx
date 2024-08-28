import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/loginPage';
import InformationPage from './pages/InformationPage';
import ProtectedRoute from './router/protectedRoutes';
import { useSelector } from 'react-redux';
import { isAuthSelector } from './redux/selectors/authenSelector';
import routes from './router/router';

const App: React.FC = () => {
    const isAuthen = useSelector(isAuthSelector);
    console.log(isAuthen);

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/informationPage" />
            </Route>
            <ProtectedRoute
                path={'/informationPage'}
                component={InformationPage}
                isAuthenticated={isAuthen}
            />
            {routes.length > 0 &&
                routes.map((routes, index) => {
                    return (
                        <Route
                            key={index}
                            path={routes?.path}
                            exact={routes?.exact}
                            component={routes?.main}
                        />
                    );
                })}
        </Switch>
    );
};

export default App;

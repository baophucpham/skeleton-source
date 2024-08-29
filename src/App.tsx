import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './router/protectedRoutes';
import { useSelector } from 'react-redux';
import { isAuthSelector } from './redux/selectors/authenSelector';
import routes from './router/router';
import QuoteDetailPage from './pages/QuoteDetailPage';

const App: React.FC = () => {
    const isAuthen = useSelector(isAuthSelector);
    console.log(isAuthen);

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/quoteDetail" />
            </Route>
            <ProtectedRoute
                path={'/quoteDetail'}
                component={QuoteDetailPage}
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

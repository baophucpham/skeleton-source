/* eslint-disable simple-import-sort/imports */
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/loginPage';
import { ConnectedRouter } from 'connected-react-router';
import routes from './router/router';

interface Props {
    history: any;
}
const App: React.FC<Props> = ({ history }: Props) => {
    return (
        <Router>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.length > 0 &&
                        routes.map(({ routes, index }: any) => {
                            return (
                                <Route
                                    key={index}
                                    path={routes.path}
                                    exact={routes.exact}
                                    component={routes.main}
                                />
                            );
                        })}
                    {/* <PrivateRoute path="/admin" component={Admin} isAuthenticated={isAuthenticated} /> */}
                    <Route path="*">{/* <NotFound /> */}</Route>
                </Switch>
            </ConnectedRouter>
        </Router>
    );
};

export default App;

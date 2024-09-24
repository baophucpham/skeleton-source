import React, { useEffect } from 'react';
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom';
import ProtectedRoute from './router/protectedRoutes';
import { useDispatch } from 'react-redux';
import routes from './router/router';
import DashboardComponent from './pages/Dashboard';
import { loginAction } from './redux/actions/authenAction';

const App: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const domain = window.location.origin;
    const fullURL = `${domain}${location.pathname}${location.search}${location.hash}`;
    const takeDomain = `${domain}`;
    const urlParams = new URLSearchParams(new URL(fullURL).search);
    const codePost = urlParams.get('code');
    const token = localStorage.getItem('access_token');

    const loginApiCall = () => {
        const data = {
            code: codePost,
            redirect_uri: `${takeDomain}/oauth2/callback`,
            history
        };
        dispatch(loginAction(data))
    };
    useEffect(() => {
        if (codePost) {
            loginApiCall();
        }
    }, [codePost]);

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
            <ProtectedRoute
                path={'/dashboard'}
                component={DashboardComponent}
                isAuthenticated={token ? true : false}
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

import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/loginPage';
import PrivatePage from './pages/privatePage';

const App: React.FC = () => {
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
        setIsAuth(false);
    }, [isAuth]);

    return (
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/privatePage" exact={true} component={PrivatePage} />
        </Switch>
    );
};

export default App;

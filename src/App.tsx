import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/loginPage';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
    );
};

export default App;

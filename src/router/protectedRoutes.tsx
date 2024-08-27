import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}: any) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;

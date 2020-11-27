import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoute({ path, component, redirectTo }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <Route
            path={path}
            exact
            render={() => (isLoggedIn ? (
                component
            ) : (
                <Redirect
                    to={{
                        pathname: redirectTo,
                    }}
                />
            ))}
        />
    );
}
ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
    redirectTo: PropTypes.string.isRequired,
};

export default ProtectedRoute;

import React from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from '@containers/LoginContainer';
import HomeContainer from '@containers/HomeContainer';
import ConnectContainer from '@containers/ConnectContainer';
import SearchContainer from '@containers/SearchContainer';
import ProtectedRoute from '@components/ProtectedRoute';

function MyRoute() {
    return (
        <>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/search" exact component={SearchContainer} />
            <ProtectedRoute
                path="/connect"
                redirectTo="/login"
                component={<ConnectContainer />}
            />
            <Route path="/login" exact component={LoginContainer} />
        </>
    );
}

export default MyRoute;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from '@containers/LoginContainer';
import HomeContainer from '@containers/HomeContainer';
import ConnectContainer from '@containers/ConnectContainer';
import SearchContainer from '@containers/SearchContainer';
import ProfileContainer from '@containers/ProfileContainer';
import ProtectedRoute from '@components/ProtectedRoute';

function MyRoute() {
    return (
        <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/search" exact component={SearchContainer} />
            <ProtectedRoute
                path="/connect"
                redirectTo="/login"
                component={<ConnectContainer />}
            />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/:username" exact component={ProfileContainer} />
        </Switch>
    );
}

export default MyRoute;

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginContainer from "./app/containers/LoginContainer";
import HomeContainer from "./app/containers/HomeContainer";
import ConnectContainer from "./app/containers/ConnectContainer";
import SearchContainer from "./app/containers/SearchContainer";

function MyRoute() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/search" exact component={SearchContainer} />
            <Route
                path="/connect"
                exact
                render={() => {
                    return isLoggedIn ? (
                        <ConnectContainer />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    message:
                                        "Please Login to connect with people",
                                },
                            }}
                        />
                    );
                }}
            />
            <Route path="/login" exact component={LoginContainer} />
        </>
    );
}

export default MyRoute;

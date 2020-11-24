import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "@components/Button";

export default {
    title: "Button",
    component: Button,
    decorators: [(story) => <Router>{story()}</Router>],
};

export const Login = () => (
    <Button to="/login" className={"button button--login"}>
        Login
    </Button>
);

export const Logout = () => (
    <Button to="/logout" className={"button button--login"}>
        Logout
    </Button>
);

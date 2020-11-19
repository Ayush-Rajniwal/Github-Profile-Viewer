import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "../app/components/Button";

export default {
    title: "Button",
    component: Button,
    decorators: [(story) => <Router>{story()}</Router>],
};

export const Login = () => (
    <Button type="link" to="/login" className={"button--primary"}>
        Login
    </Button>
);

export const Logout = () => (
    <Button type="link" to="/" className={"button--primary"}>
        Logout
    </Button>
);

export const Submit = () => (
    <Button type="submit" className={"button--primary"}>
        Submit
    </Button>
);

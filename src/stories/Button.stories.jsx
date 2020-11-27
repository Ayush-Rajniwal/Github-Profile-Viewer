import React from 'react';
import Button from '@components/Button';

export default {
    title: 'Button',
    component: Button,
};

export const Login = () => (
    <Button to="/login" className="button button--login">
        Login
    </Button>
);

export const Logout = () => (
    <Button to="/logout" className="button button--login">
        Logout
    </Button>
);

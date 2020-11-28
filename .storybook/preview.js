import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@styles/styles.scss';

addDecorator((story) => <Router>{story()}</Router>);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

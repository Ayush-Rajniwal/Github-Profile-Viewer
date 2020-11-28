import React from 'react';
import IconText from '@components/IconText';

export default {
    title: 'IconText',
    component: IconText,
};

export const WithIcon = () => (
    <IconText className="u__text--center u__text--large" text="India">
        <i className="icon icon-location " />
    </IconText>
);

export const WithText = () => (
    <IconText className="u__text--center u__text--large" text="Follower">
        88
    </IconText>
);

import React from 'react';
import Avatar from '@components/Avatar';

export default {
    title: 'Avatar',
    component: Avatar,
    decorators: [
        (story) => <div className="profile__img-wrapper">{story()}</div>,
    ],
};

export const AvatarDisplay = () => (
    <Avatar img="https://avatars3.githubusercontent.com/u/54205?s=460&v=4" />
);

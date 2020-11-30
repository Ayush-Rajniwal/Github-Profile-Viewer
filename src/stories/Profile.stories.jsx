import React from 'react';
import Profile from '../app/components/Profile';

export default {
    title: 'Profile',
    component: Profile,
};

export const ProfileCard = () => (
    <Profile
        profile={{
            avatar: 'https://avatars3.githubusercontent.com/u/54205?s=460&v=4',
            link: 'https://github.com/Ayush-Rajniwal/',
            username: 'username',
            bio: 'Bio will appear here',
            followers: '22',
            following: '32',
            location: 'location',
            name: 'Name Will Appear here',
            email: 'email',
            blog: 'blog',
        }}
    />
);

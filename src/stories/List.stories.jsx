import React from 'react';
import List from '@components/List';

export default {
    title: 'List',
    component: List,
};

export const ListDisplay = () => (
    <List
        data={[
            {
                avatar: 'https://avatars0.githubusercontent.com/u/54768821?v=4',
                username: 'Item 1',
            },
            {
                avatar: 'https://avatars0.githubusercontent.com/u/54768821?v=4',
                username: 'Item 2',
            },
        ]}
    />
);

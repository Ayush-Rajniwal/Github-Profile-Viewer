import React from "react";
import List from "../app/components/List";
import { BrowserRouter as Router } from "react-router-dom";

export default {
    title: "List",
    component: List,
    decorators: [(story) => <Router>{story()}</Router>],
};

export const ListDisplay = () => (
    <List
        data={[
            {
                avatar: "https://avatars0.githubusercontent.com/u/54768821?v=4",
                username: "Item 1",
            },
            {
                avatar: "https://avatars0.githubusercontent.com/u/54768821?v=4",
                username: "Item 2",
            },
        ]}
    />
);

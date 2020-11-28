import React, { useState } from 'react';
import List from '@components/List';
import SearchBar from '@components/SearchBar';
import apiCall from '@services/apiCall';
import { useSelector } from 'react-redux';

function SearchContainer() {
    const [searchUser, setSearchUser] = useState([]);
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const searchUserCount = 5;

    const debounce = (func, d) => {
        let timer;
        return (...args) => {
            const context = this;
            clearTimeout(timer);

            timer = setTimeout(() => {
                func.apply(context, args);
            }, d);
        };
    };
    const fetchSearch = (e) => {
        const username = e.target.value;

        if (username.length === 0) {
            setSearchUser([]);
            return;
        }

        apiCall(
            'GET',
            `/search/users?q=${username}&per_page=${searchUserCount}`,
            {
                isAuthenticated: isLoggedIn,
                password: loggedInUser.token,
            },
        )
            .then((response) => {
                const userList = response.data.items.map((item) => ({
                    avatar: item.avatar_url,
                    username: item.login,
                }));
                setSearchUser(userList);
            })
            .catch(() => {
                setSearchUser([]);
            });
    };

    const changeHandler = debounce(fetchSearch, 300);
    return (
        <div className="search">
            <div className="search__container">
                <SearchBar onChange={changeHandler} />
                {searchUser.length === 0 ? (
                    <h1>No result found</h1>
                ) : (
                    <List data={searchUser} />
                )}
            </div>
        </div>
    );
}

export default SearchContainer;

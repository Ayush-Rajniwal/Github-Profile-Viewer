import React, { useState } from 'react';
import List from '@components/List';
import SearchBar from '@components/SearchBar';
import apiCall from '@services/apiCall';
import { useSelector, useDispatch } from 'react-redux';
import { SEARCH_URL } from '@constants/variables';
import Loader from '@components/Loader';
import { START_LOADING, STOP_LOADING } from '@redux/actionTypes';

function SearchContainer() {
    const [searchUser, setSearchUser] = useState([]);
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.isLoading);

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
        dispatch({
            type: START_LOADING,
        });

        if (username.length === 0) {
            setSearchUser([]);
            dispatch({
                type: STOP_LOADING,
            });
            return;
        }

        apiCall(
            'GET',
            `${SEARCH_URL}?q=${username}&per_page=${searchUserCount}`,
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
                dispatch({
                    type: STOP_LOADING,
                });
            })
            .catch(() => {
                setSearchUser([]);
                dispatch({
                    type: STOP_LOADING,
                });
            });
    };

    const changeHandler = debounce(fetchSearch, 300);
    return (
        <div className="search">
            <div className="search__container">
                <SearchBar onChange={changeHandler} />
                {searchUser.length === 0 ? (
                    !isLoading && <h1>No result found</h1>
                ) : (
                    !isLoading && <List data={searchUser} />
                )}
                {isLoading && <Loader />}
            </div>
        </div>
    );
}

export default SearchContainer;

import React, { useState } from "react";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import axios from "axios";

function SearchContainer() {
    const [searchUser, setSearchUser] = useState([]);
    let searchUserCount = 5;

    const debounce = function (func, d) {
        let timer;
        return function () {
            let context = this;
            let args = arguments;

            clearTimeout(timer);

            timer = setTimeout(() => {
                func.apply(context, args);
            }, d);
        };
    };
    const fetchSearch = (e) => {
        let username = e.target.value;

        if (username.length === 0) {
            setSearchUser([]);
            return;
        }

        let config = {
            method: "get",
            url: `https://api.github.com/search/users?q=${username}&per_page=${searchUserCount}`,
        };

        axios(config)
            .then(function (response) {
                let a = response.data.items.map((item) => {
                    return { avatar: item.avatar_url, username: item.login };
                });
                setSearchUser(a);
            })
            .catch(function (error) {
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

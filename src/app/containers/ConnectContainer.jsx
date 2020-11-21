import React, { useEffect, useState } from "react";
import FollowCard from "../components/FollowCard";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useSelector } from "react-redux";

function ConnectContainer() {
    const [userList, setUserList] = useState([]);
    const [lastIndex, setLastIndex] = useState(30);
    const [error, setError] = useState(false);
    let userPerPage = 3;
    const token = useSelector((state) => state.loggedInUser.token);
    const { t } = useTranslation();

    const fetchUsers = (since = 0) => {
        let config = {
            method: "get",
            url: `https://api.github.com/users?since=${since}&per_page=30`,
        };

        axios(config)
            .then(function (response) {
                response.data = response.data.map(function (user) {
                    return { login: user.login, avatar: user.avatar_url };
                });
                setUserList([...response.data]);
                setError(false);
            })
            .catch(function (error) {
                console.log(error);
                setError(true);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const emptyCheck = () => {
        if (userList.length <= userPerPage) {
            fetchUsers(lastIndex);
            setLastIndex(lastIndex * 2);
        }
    };

    const refresh = () => {
        setUserList([...userList.slice(userPerPage)]);
        emptyCheck();
    };

    const clickHandler = (e) => {
        emptyCheck();
        let id = e.target.dataset.id;
        let config = {
            method: "PUT",
            url: `https://api.github.com/user/following/${id}`,
            headers: {
                Authorization: `token ${token}`,
            },
        };

        switch (e.target.innerText) {
            case "Follow":
                axios(config)
                    .then(function (response) {
                        setError(false);
                    })
                    .catch(function (error) {
                        console.log(error);
                        setError(true);
                    });
            case "Remove":
                setUserList(userList.filter((ele) => id !== ele.login));
                break;
            default:
                break;
        }
    };

    return (
        <div className="connect">
            {error ? (
                <h1>{t("Unable to fetch the user :(")}</h1>
            ) : (
                <>
                    <h1>{t("Connect more")}</h1>
                    <Button
                        onClick={refresh}
                        className="connect__btn button--primary"
                    >
                        {t("Refresh")}
                    </Button>
                    {userList.map((user, index) => {
                        if (index > userPerPage - 1) return null;
                        return (
                            <FollowCard
                                data-id={`${user.login}`}
                                onClick={clickHandler}
                                key={`${user.login}`}
                                avatar={`${user.avatar}`}
                                username={`${user.login}`}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default ConnectContainer;

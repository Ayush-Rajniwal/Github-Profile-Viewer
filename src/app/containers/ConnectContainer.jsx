import React, {
    useEffect, useState, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@components/Button';
import FollowCard from '@components/FollowCard';
import Loader from '@components/Loader';
import {
    FOLLOWING_URL, USERS_URL,
} from '@constants/variables';
import { START_LOADING, STOP_LOADING } from '@redux/actionTypes';
import apiCall from '@services/apiCall';

function ConnectContainer() {
    const dispatch = useDispatch();
    const [userList, setUserList] = useState([]);
    const [lastIndex, setLastIndex] = useState(30);
    const [error, setError] = useState(false);
    const userPerPage = 3;
    const token = useSelector((state) => state.auth.loggedInUser.token);
    const { t } = useTranslation();
    const isLoading = useSelector((state) => state.ui.isLoading);
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);

    const fetchSuggestions = useCallback(
        (since = 0) => {
            dispatch({
                type: START_LOADING,
            });

            apiCall('GET', `${USERS_URL}?since=${since}&per_page=30`, {
                isAuthenticated: true,
                password: loggedInUser.token,
            })
                .then((response) => {
                    response.data = response.data.map((user) => ({
                        login: user.login,
                        avatar: user.avatar_url,
                    }));
                    setUserList([...response.data]);
                    setError(false);
                    dispatch({
                        type: STOP_LOADING,
                    });
                })
                .catch(() => {
                    setError(true);
                    dispatch({
                        type: STOP_LOADING,
                    });
                });
        },
        [token],
    );

    useEffect(() => {
        fetchSuggestions();
    }, [fetchSuggestions]);

    const emptyCheck = () => {
        if (userList.length <= userPerPage) {
            fetchSuggestions(lastIndex);
            setLastIndex(lastIndex * 2);
        }
    };

    const refresh = () => {
        setUserList([...userList.slice(userPerPage)]);
        emptyCheck();
    };

    const onFollow = (e) => {
        emptyCheck();
        const { id } = e.target.dataset;

        apiCall('PUT', `${FOLLOWING_URL}/${id}`, {
            isAuthenticated: true,
            password: loggedInUser.token,
        })
            .then(() => {
                setError(false);
            })
            .catch(() => {
                setError(true);
            });
        setUserList(userList.filter((ele) => id !== ele.login));
    };

    const onRemove = (e) => {
        emptyCheck();
        const { id } = e.target.dataset;

        setUserList(userList.filter((ele) => id !== ele.login));
    };

    if (isLoading) {
        return (
            <div className="connect">
                <Loader />
            </div>
        );
    }
    return (
        <div className="connect">
            {error ? (
                <h1>{t('Unable_fetch_user')}</h1>
            ) : (
                <>
                    <h1>{t('Connect more')}</h1>
                    <Button
                        type="button"
                        id="refresh-btn"
                        onClick={refresh}
                        className="connect__btn button--primary"
                    >
                        {t('Refresh')}
                    </Button>
                    {userList.map((user, index) => {
                        if (index > userPerPage - 1) return null;
                        return (
                            <FollowCard
                                data-id={`${user.login}`}
                                key={`${user.login}`}
                                avatar={`${user.avatar}`}
                                username={`${user.login}`}
                                onFollow={onFollow}
                                onRemove={onRemove}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default ConnectContainer;

import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Profile from '@components/Profile';
import Popup from '@components/Popup';
import List from '@components/List';
import NotFound from '@components/NotFound';
import PropTypes from 'prop-types';
import GET from '@services/apiCall';

function ProfileContainer({
    match: {
        params: { username },
    },
}) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.ui.profile);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [noProfile, setNoProfile] = useState(false);
    const [followersList, setFollowersList] = useState([]);
    const [followingList, setFollowingList] = useState([]);

    const fetchUser = useCallback(() => {
        GET(`/users/${username}`, { isAuthenticated: isLoggedIn, password: loggedInUser.token })
            .then((response) => {
                dispatch({
                    type: 'SAVE_USER',
                    payload: response,
                });
            })
            .catch(() => {
                setNoProfile(true);
            });
    }, [dispatch, isLoggedIn, loggedInUser.token, username]);

    const fetchFollowers = useCallback(() => {
        GET(`/users/${username}/followers?per_page=5`, {
            isAuthenticated: isLoggedIn,
            password: loggedInUser.token,
        })
            .then((response) => {
                setFollowersList(
                    response.data.map((user) => ({
                        avatar: user.avatar_url,
                        username: user.login,
                    })),
                );
            })
            .catch(() => {
                setNoProfile(true);
            });
    }, [username, isLoggedIn, loggedInUser.token]);

    const fetchFollowing = useCallback(() => {
        GET(`/users/${username}/following?per_page=5`, {
            isAuthenticated: isLoggedIn,
            password: loggedInUser.token,
        })
            .then((response) => {
                setFollowingList(
                    response.data.map((user) => ({
                        avatar: user.avatar_url,
                        username: user.login,
                    })),
                );
            })
            .catch(() => {
                setNoProfile(true);
            });
    }, [username, isLoggedIn, loggedInUser.token]);

    useEffect(() => {
        setShowFollowers(false);
        setShowFollowing(false);
        fetchUser();
        fetchFollowing();
        fetchFollowers();
    }, [fetchFollowers, fetchFollowing, fetchUser]);

    const followBtn = (e) => {
        const { id } = e.target.dataset;
        const config = {
            method: 'PUT',
            url: `https://api.github.com/user/following/${id}`,
            headers: {
                Authorization: `token ${loggedInUser.token}`,
            },
        };
        axios(config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const toggleFollowerList = () => {
        setShowFollowers(!showFollowers);
    };

    const toggleFollowingList = () => {
        setShowFollowing(!showFollowing);
    };

    return (
        <div className="profile">
            {noProfile ? (
                <NotFound />
            ) : (
                <>
                    <Profile
                        profile={{
                            ...profile,
                            isLoggedIn,
                            loggedInUserName: loggedInUser.name,
                            followBtn,
                        }}
                        toggleFollowerList={toggleFollowerList}
                        toggleFollowingList={toggleFollowingList}
                    />
                    {showFollowers ? (
                        <Popup
                            title={t('Followers')}
                            onClick={toggleFollowerList}
                        >
                            <List data={followersList} />
                        </Popup>
                    ) : null}
                    {showFollowing ? (
                        <Popup
                            title={t('Following')}
                            onClick={toggleFollowingList}
                        >
                            <List data={followingList} />
                        </Popup>
                    ) : null}
                </>
            )}
        </div>
    );
}

ProfileContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            username: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default ProfileContainer;

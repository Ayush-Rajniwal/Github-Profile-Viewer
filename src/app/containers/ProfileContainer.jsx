import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Profile from "../components/Profile";
import Popup from "../components/Popup";
import List from "../components/List";
import NotFound from "../components/NotFound";

function ProfileContainer({
    match: {
        params: { username },
    },
}) {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const loggedInUser = useSelector((state) => state.loggedInUser);
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [noProfile, setNoProfile] = useState(false);
    const [followersList, setFollowersList] = useState([]);
    const [followingList, setFollowingList] = useState([]);

    const fetchUser = useCallback(() => {
        let config = {
            method: "get",
            url: `https://api.github.com/users/${username}`,
        };

        if (isLoggedIn) {
            config.headers = {
                Authorization: `token ${loggedInUser.token}`,
            };
        }

        axios(config)
            .then(function (response) {
                dispatch({
                    type: "SAVE_USER",
                    payload: response,
                });
            })
            .catch(function (error) {
                console.log(error);
                setNoProfile(true);
            });
    }, [dispatch, isLoggedIn, loggedInUser.token, username]);

    const fetchFollowers = useCallback(() => {
        let configFollower = {
            method: "get",
            url: `https://api.github.com/users/${username}/followers?per_page=5`,
        };
        if (isLoggedIn) {
            configFollower.headers = {
                Authorization: `token ${loggedInUser.token}`,
            };
        }

        axios(configFollower)
            .then(function (response) {
                console.log(response.data);
                setFollowersList(
                    response.data.map((user) => {
                        return {
                            avatar: user.avatar_url,
                            username: user.login,
                        };
                    })
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [username, isLoggedIn, loggedInUser.token]);

    const fetchFollowing = useCallback(() => {
        let configFollowing = {
            method: "get",
            url: `https://api.github.com/users/${username}/following?per_page=5`,
        };

        if (isLoggedIn) {
            configFollowing.headers = {
                Authorization: `token ${loggedInUser.token}`,
            };
        }

        axios(configFollowing)
            .then(function (response) {
                console.log(response.data);
                setFollowingList(
                    response.data.map((user) => {
                        return {
                            avatar: user.avatar_url,
                            username: user.login,
                        };
                    })
                );
            })
            .catch(function (error) {
                console.log(error);
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
        let id = e.target.dataset.id;
        let config = {
            method: "PUT",
            url: `https://api.github.com/user/following/${id}`,
            headers: {
                Authorization: `token ${loggedInUser.token}`,
            },
        };
        axios(config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
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
                            isLoggedIn: isLoggedIn,
                            loggedInUserName: loggedInUser.name,
                            followBtn: followBtn,
                        }}
                        toggleFollowerList={toggleFollowerList}
                        toggleFollowingList={toggleFollowingList}
                    />
                    {showFollowers ? (
                        <Popup title="Followers" onClick={toggleFollowerList}>
                            <List data={followersList} />
                        </Popup>
                    ) : null}
                    {showFollowing ? (
                        <Popup title="Following" onClick={toggleFollowingList}>
                            <List data={followingList} />
                        </Popup>
                    ) : null}
                </>
            )}
        </div>
    );
}

export default ProfileContainer;

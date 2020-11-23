import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Profile from "../components/Profile";
import Popup from "../components/Popup";

function ProfileContainer({
    match: {
        params: { username },
    },
}) {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const loggedInUser = useSelector((state) => state.loggedInUser);

    const [noProfile, setNoProfile] = useState(false);
    const history = useHistory();

    const popupClose = () => {
        history.push("/");
        setNoProfile(false);
    };

    useEffect(() => {
        let config = {
            method: "get",
            url: `https://api.github.com/users/${username}`,
        };

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
    }, [username, dispatch]);

    const followBtn = (e) => {
        let id = e.target.dataset.id;
        console.log(e);
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

    return (
        <div className="profile">
            {noProfile ? (
                <Popup
                    title="Message"
                    message="No Profile Found!!"
                    onClick={popupClose}
                />
            ) : (
                <Profile
                    profile={{
                        ...profile,
                        isLoggedIn: isLoggedIn,
                        loggedInUserName: loggedInUser.name,
                        followBtn: followBtn,
                    }}
                />
            )}
        </div>
    );
}

export default ProfileContainer;

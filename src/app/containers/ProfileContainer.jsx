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

    return (
        <div className="profile">
            {noProfile ? (
                <Popup
                    title="Message"
                    message="No Profile Found!!"
                    onClick={popupClose}
                />
            ) : (
                <Profile profile={profile} />
            )}
        </div>
    );
}

export default ProfileContainer;

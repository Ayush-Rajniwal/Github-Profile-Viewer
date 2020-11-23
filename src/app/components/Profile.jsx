import React from "react";
import IconText from "../components/IconText";
import Avatar from "./Avatar";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function Profile({ profile, toggleFollowerList, toggleFollowingList }) {
    const { t } = useTranslation();

    return (
        <div className="profile__container">
            <div className="profile__left-section">
                <div className="profile__img-wrapper">
                    <Avatar img={`${profile.avatar}`} />
                </div>

                <div className="profile__userdata u__text--center">
                    <a className="" href={`${profile.link}`}>
                        <IconText
                            className="profile__username"
                            text={profile.username}
                        >
                            <i className="icon icon-at-symbol"></i>
                        </IconText>
                    </a>
                    {profile.isLoggedIn &&
                    profile.loggedInUserName !== profile.username ? (
                        <Button
                            onClick={profile.followBtn}
                            data-id={`${profile.username}`}
                            className="button button--follow u__margin--tb"
                        >
                            {t("Follow")}
                        </Button>
                    ) : null}
                </div>
            </div>
            <div className="profile__right-section">
                <div className="profile__content">
                    <h1 className="u__text--center">{profile.name}</h1>

                    <div className="profile__details">
                        {profile.location ? (
                            <IconText
                                className="u__text--center"
                                text={profile.location}
                            >
                                <i className="icon icon-location "></i>
                            </IconText>
                        ) : null}

                        <IconText
                            onClick={toggleFollowerList}
                            className="u__text--center u__text--uppercase"
                            text={t("Followers")}
                        >
                            <div>{profile.followers}</div>
                        </IconText>

                        <IconText
                            onClick={toggleFollowingList}
                            className="u__text--center u__text--uppercase"
                            text={t("Following")}
                        >
                            <div>{profile.following}</div>
                        </IconText>

                        {profile.email ? (
                            <a href={`mailto:${profile.email}`}>
                                <IconText
                                    className="u__text--center u__text--uppercase"
                                    text={t("Email")}
                                >
                                    <i className="icon icon-envelope"></i>
                                </IconText>
                            </a>
                        ) : null}

                        {profile.blog ? (
                            <a href={`${profile.blog}`}>
                                <IconText
                                    className="u__text--center"
                                    text={t("Blog")}
                                >
                                    <i className="icon icon-link"></i>
                                </IconText>
                            </a>
                        ) : null}
                    </div>
                    {profile.bio ? (
                        <p className="profile__bio u__text--center">
                            {profile.bio}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Profile;

import React from "react";
import IconText from "../components/IconText";
import Counter from "../components/Counter";
import Avatar from "./Avatar";

function Profile({ profile }) {
    return (
        <div className="profile__container">
            <div className="profile__left-section">
                <div className="profile__img-wrapper">
                    <Avatar img={`${profile.avatar}`} />
                </div>

                <div className="profile__userdata">
                    <a className="u__text--center" href={`${profile.link}`}>
                        <IconText
                            className="profile__username"
                            text={profile.username}
                        >
                            <i className="icon icon-at-symbol"></i>
                        </IconText>
                    </a>
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
                            className="u__text--center u__text--uppercase"
                            text="Followers"
                        >
                            <div>{profile.followers}</div>
                        </IconText>

                        <IconText
                            className="u__text--center u__text--uppercase"
                            text="Following"
                        >
                            <div>{profile.following}</div>
                        </IconText>

                        {profile.email ? (
                            <a href={`mailto:${profile.email}`}>
                                <IconText
                                    className="u__text--center u__text--uppercase"
                                    text="Email"
                                >
                                    <i className="icon icon-envelope"></i>
                                </IconText>
                            </a>
                        ) : null}

                        {profile.blog ? (
                            <a href={`${profile.blog}`}>
                                <IconText
                                    className="u__text--center"
                                    text="Blog"
                                >
                                    <i className="icon icon-link"></i>
                                </IconText>
                            </a>
                        ) : null}
                    </div>
                    {profile.bio ? (
                        <p className="profile__bio">{profile.bio}</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Profile;

import React from "react";
import Avatar from "./Avatar";
import { useTranslation } from "react-i18next";
import Button from "./Button";

function FollowCard({ avatar, username, onClick }) {
    const { t } = useTranslation();

    return (
        <div className="fc" onClick={onClick}>
            <div className="fc__img-wrapper">
                <Avatar img={avatar} />
            </div>
            <div className="fc__container">
                <div className="fc__name">
                    <i className="icon icon-at-symbol"> </i>
                    <a href={`/${username}`}>{username}</a>
                </div>
                <div className="fc__icons">
                    <Button
                        className="button button--follow"
                        data-id={username}
                    >
                        <i data-id={username} className="icon icon-user-add">
                            {t("Follow")}
                        </i>
                    </Button>
                    <Button
                        className="button button--follow"
                        data-id={username}
                    >
                        <i data-id={username} className="icon icon-close">
                            {t("Remove")}
                        </i>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FollowCard;

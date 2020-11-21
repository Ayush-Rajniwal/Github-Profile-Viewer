import React from "react";
import Avatar from "./Avatar";
import { useTranslation } from "react-i18next";

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
                    <i className="icon icon-user-add" data-id={username}>
                        {t("Follow")}
                    </i>
                    <i className="icon icon-close" data-id={username}>
                        {t("Remove")}
                    </i>
                </div>
            </div>
        </div>
    );
}

export default FollowCard;

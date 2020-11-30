import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Avatar from '@components/Avatar';

function FollowCard({ avatar, username, onClick }) {
    const { t } = useTranslation();

    return (
        <div
            role="presentation"
            className="followCard"
            onKeyPress={onClick}
            onClick={onClick}
        >
            <div className="followCard__img-wrapper">
                <Avatar img={avatar} />
            </div>
            <div className="followCard__container">
                <div className="followCard__name">
                    <i className="icon icon-at-symbol"> </i>
                    <a href={`/${username}`}>{username}</a>
                </div>
                <div className="followCard__icons">
                    <i className="icon icon-user-add" data-id={username}>
                        {t('Follow')}
                    </i>
                    <i className="icon icon-close" data-id={username}>
                        {t('Remove')}
                    </i>
                </div>
            </div>
        </div>
    );
}

FollowCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FollowCard;

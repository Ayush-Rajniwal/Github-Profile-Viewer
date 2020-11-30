import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Avatar from '@components/Avatar';
import Button from '@components/Button';

function FollowCard({
    avatar, username, onFollow, onRemove,
}) {
    const { t } = useTranslation();

    return (
        <div
            className="followCard"
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
                    <Button
                        id="follow-btn"
                        type="button"
                        className="button button--follow"
                        data-id={username}
                        onClick={onFollow}
                    >
                        <i data-id={username} className="icon icon-user-add">
                            {t('Follow')}
                        </i>
                    </Button>
                    <Button
                        type="button"
                        id="following-btn"
                        className="button button--follow"
                        data-id={username}
                        onClick={onRemove}
                    >
                        <i data-id={username} className="icon icon-close">
                            {t('Remove')}
                        </i>
                    </Button>
                </div>
            </div>
        </div>
    );
}

FollowCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onFollow: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default FollowCard;

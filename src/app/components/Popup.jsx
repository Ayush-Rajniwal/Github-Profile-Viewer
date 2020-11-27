import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button';

function Popup({ title, message, onClick }) {
    return (
        <div className="popup">
            <div className="popup__content u__shadow">
                <div className="popup__title">
                    {title}
                    <Button
                        id="close-popup"
                        type="button"
                        className="button__close"
                        onClick={onClick}
                    >
                        <i
                            aria-label="close popup"
                            className="icon icon-close popup__close-btn"
                        />
                    </Button>
                </div>
                <div className="popup__message">{message}</div>
            </div>
        </div>
    );
}

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Popup;

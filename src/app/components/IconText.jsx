import React from 'react';
import PropTypes from 'prop-types';

function IconText({
    className, children, text, onClick,
}) {
    return (
        <div
            role="presentation"
            onKeyDown={onClick}
            onClick={onClick}
            className={`${className} iconText`}
        >
            <div className="iconText__icon">{children}</div>
            <div className="iconText__text">{text}</div>
        </div>
    );
}

IconText.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

IconText.defaultProps = {
    onClick: () => {},
};

export default IconText;

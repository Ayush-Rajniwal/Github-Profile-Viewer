import React from 'react';
import PropTypes from 'prop-types';

function Avatar({ className, img }) {
    return (
        <div className={`avatar__wrapper ${className}`}>
            <img className="avatar__img" src={img} alt="Profile" />
        </div>
    );
}

Avatar.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
    className: null,
};

export default Avatar;

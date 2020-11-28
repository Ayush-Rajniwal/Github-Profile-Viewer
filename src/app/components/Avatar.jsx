import React, { useState } from 'react';
import PropTypes from 'prop-types';
import loadingGIF from '@images/loading.gif';

function Avatar({ className, img }) {
    const [loadingImage, setLoadingImage] = useState(true);

    const loadingImageCompleted = () => {
        setLoadingImage(false);
    };

    return (
        <>
            <div
                className={`avatar__wrapper ${
                    !loadingImage ? 'avatar__wrapper--hidden' : ''
                } ${className}`}
            >
                <img className="avatar__img" src={loadingGIF} alt="Profile" />
            </div>

            <div
                className={`avatar__wrapper  ${
                    loadingImage ? 'avatar__wrapper--hidden' : ''
                }  ${className}`}
            >
                <img
                    className="avatar__img"
                    src={img}
                    alt="Profile"
                    onLoad={loadingImageCompleted}
                />
            </div>
        </>
    );
}

Avatar.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
    className: '',
};

export default Avatar;

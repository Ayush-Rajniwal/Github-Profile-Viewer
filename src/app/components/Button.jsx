import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LINK, SUBMIT } from '@constants/variables';

function Button({
    type, to, onClick, className, children, id,
}) {
    switch (type) {
    case LINK:
        return (
            <Link to={to} onClick={onClick}>
                <button type="button" className={className}>
                    {children}
                </button>
            </Link>
        );

    case SUBMIT:
        return (
            <button
                id={id}
                type="submit"
                className={`button ${className}`}
            >
                {children}
            </button>
        );

    default:
        return (
            <button
                onClick={onClick}
                type="button"
                id={id}
                className={`button ${className}`}
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    to: PropTypes.string,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    to: '#',
    onClick: () => {},
};

export default Button;

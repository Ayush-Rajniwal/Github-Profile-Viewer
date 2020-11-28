import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({
    to, onClick, className, children,
}) {
    return (
        <Link to={to} onClick={onClick}>
            <button type="button" className={className}>
                {children}
            </button>
        </Link>
    );
}

Button.propTypes = {
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Button;

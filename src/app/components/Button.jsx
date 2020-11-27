import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
    return (
        <Link to={props.to} onClick={props.onClick}>
            <button className={props.className}>{props.children}</button>
        </Link>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Button;

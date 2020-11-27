import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Button(props) {
    return (
        <NavLink to={props.to} onClick={props.onClick}>
            <button className={props.className}>{props.children}</button>
        </NavLink>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.any,
};

export default Button;

import React from "react";
import { NavLink } from "react-router-dom";

function Button(props) {
    return (
        <NavLink to={props.to} onClick={props.onClick}>
            <button className={props.className}>{props.children}</button>
        </NavLink>
    );
}

export default Button;

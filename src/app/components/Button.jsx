import React from "react";
import { NavLink } from "react-router-dom";

function Button(props) {
    switch (props.type) {
        case "link":
            return (
                <NavLink to={props.to} onClick={props.onClick}>
                    <button
                        disabled={props.disabled}
                        className={`button ${props.className}`}
                    >
                        {props.children}
                    </button>
                </NavLink>
            );

        case "submit":
            return (
                <button type="submit" className={`button ${props.className}`}>
                    {props.children}
                </button>
            );

        default:
            return (
                <button
                    disabled={props.disabled}
                    className={`button ${props.className}`}
                >
                    {props.children}
                </button>
            );
    }
}

export default Button;

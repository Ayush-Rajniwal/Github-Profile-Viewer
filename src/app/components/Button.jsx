import React from "react";
import { NavLink } from "react-router-dom";

function Button(props) {
    switch (props.type) {
        case "link":
            return (
                <NavLink to={props.to} onClick={props.onClick}>
                    <button className={`button ${props.className}`}>
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
                    data-id={props["data-id"]}
                    onClick={props.onClick}
                    className={`button ${props.className}`}
                >
                    {props.children}
                </button>
            );
    }
}

export default Button;

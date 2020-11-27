import React from "react";
import { NavLink } from "react-router-dom";
import { LINK, SUBMIT } from "@constants/variables";

function Button(props) {
    switch (props.type) {
        case LINK:
            return (
                <NavLink to={props.to} onClick={props.onClick}>
                    <button className={`button ${props.className}`}>
                        {props.children}
                    </button>
                </NavLink>
            );

        case SUBMIT:
            return (
                <button type="submit" className={`button ${props.className}`}>
                    {props.children}
                </button>
            );

        default:
            return (
                <button className={`button ${props.className}`}>
                    {props.children}
                </button>
            );
    }
}

export default Button;

import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="nf u__text--center">
            <div className="nf__title">404</div>
            <div className="nf__msg">Profile not found!!</div>
            <Link className="nf__link" to="/">
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;

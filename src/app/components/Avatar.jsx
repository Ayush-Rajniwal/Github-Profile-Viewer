import React from "react";

function Avatar({ className, img }) {
    return (
        <div className={`avatar__wrapper ${className}`}>
            <img className="avatar__img" src={img} alt="Profile" />
        </div>
    );
}

export default Avatar;

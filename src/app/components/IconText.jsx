import React from "react";

function IconText({ className, children, text }) {
    return (
        <div className={className}>
            <div className="it__icon">{children}</div>
            <div className="it__text">{text}</div>
        </div>
    );
}

export default IconText;

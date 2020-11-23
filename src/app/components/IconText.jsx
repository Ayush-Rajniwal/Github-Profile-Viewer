import React from "react";

function IconText({ className, children, text, onClick }) {
    return (
        <div onClick={onClick} className={`${className} it`}>
            <div className="it__icon">{children}</div>
            <div className="it__text">{text}</div>
        </div>
    );
}

export default IconText;

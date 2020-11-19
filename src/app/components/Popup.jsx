import React from "react";

function Popup({ title, message,onClick }) {
    return (
        <div className={"popup"}>
            <div className={"popup__content u__shadow"}>
                <div className={"popup__title"}>
                    {title}
                    <i className="icon icon-close popup__close-btn" onClick={onClick}></i>
                </div>
                <div className={"popup__message"}>{message}</div>
            </div>
        </div>
    );
}

export default Popup;

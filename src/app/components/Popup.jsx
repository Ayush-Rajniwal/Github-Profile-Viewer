import React from "react";

function Popup({ title, onClick, children }) {
    return (
        <div className={"popup"}>
            <div className={"popup__content u__shadow"}>
                <div className={"popup__title"}>
                    {title}
                    <i
                        className="icon icon-close popup__close-btn"
                        onClick={onClick}
                    ></i>
                </div>
                <div className={"popup__message"}>{children}</div>
            </div>
        </div>
    );
}

export default Popup;

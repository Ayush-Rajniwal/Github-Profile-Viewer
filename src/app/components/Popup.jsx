import React from "react";
import PropTypes from "prop-types";

function Popup({ title, message, onClick }) {
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
                <div className={"popup__message"}>{message}</div>
            </div>
        </div>
    );
}

Popup.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    onClick: PropTypes.func,
};

export default Popup;

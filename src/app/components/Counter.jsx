import React from "react";

function Counter({ className, number, text }) {
    return (
        <span className={`${className}`}>
            <span>{number} - </span>
            <span>{text}</span>
        </span>
    );
}

export default Counter;

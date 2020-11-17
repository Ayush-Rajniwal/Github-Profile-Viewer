import React from "react";

function LoginContainer(props) {
    return (
        <div>
            {props.location.state ? props.location.state.message : "Login page"}
        </div>
    );
}

export default LoginContainer;

import React from "react";
import { createStore } from "redux";
import reducer from "../app/redux/reducer";
import { Provider } from "react-redux";

function ProviderWrapper(props) {
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return <Provider store={store}>{props.children}</Provider>;
}

export default ProviderWrapper;

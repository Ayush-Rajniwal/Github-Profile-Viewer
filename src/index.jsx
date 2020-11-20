import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { createStore } from "redux";
import reducer from "./app/redux/reducer";
import { Provider } from "react-redux";

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {
        console.log(error);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

const persistedState = loadFromLocalStorage();

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <App />
            </Provider>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

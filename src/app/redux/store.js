import { createStore, combineReducers } from "redux";
import authReducer from "@redux/authReducer";
import uiReducer from "@redux/uiReducer";

const reducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store, reducer };

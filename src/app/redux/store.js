/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import authReducer from '@redux/authReducer';
import uiReducer from '@redux/uiReducer';

const saveToLocalStorage = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
};

const loadFromLocalStorage = () => {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
};

const persistedState = loadFromLocalStorage();

const reducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
});

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export { store, reducer };

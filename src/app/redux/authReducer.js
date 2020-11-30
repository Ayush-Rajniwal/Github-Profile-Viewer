import { LOGIN_USER, LOGOUT_USER } from '@redux/actionTypes';

const authInitialState = {
    isLoggedIn: false,
    loggedInUser: {
        token: '',
        name: '',
        avatar: '',
    },
};

function authReducer(state = authInitialState, action) {
    const { payload } = action;
    switch (action.type) {
    case LOGIN_USER:
        return {
            ...state,
            isLoggedIn: !state.isLoggedIn,
            loggedInUser: {
                token: payload.token,
                name: payload.username,
                avatar: payload.avatar,
            },
        };

    case LOGOUT_USER:
        return {
            ...state,
            isLoggedIn: false,
            loggedInUser: {
                token: '',
                name: '',
                avatar: '',
            },
        };
    default:
        return state;
    }
}

export default authReducer;

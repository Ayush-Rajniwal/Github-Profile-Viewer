import { LOGIN_USER } from '@redux/actionTypes';

const authInitialState = {
    isLoggedIn: false,
    loggedInToken: '',
};

function authReducer(state = authInitialState, action) {
    switch (action.type) {
    case LOGIN_USER:
        return {
            ...state,
            isLoggedIn: !state.isLoggedIn,
        };
    default:
        return state;
    }
}

export default authReducer;

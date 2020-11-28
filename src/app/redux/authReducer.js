import { LOGIN_USER, SAVE_USER } from '@redux/actionTypes';

const authInitialState = {
    isLoggedIn: false,
    loggedInToken: '',
    profile: {
        avatar: '',
        username: '',
        location: '',
        following: '',
        followers: '',
        bio: '',
        link: '',
        blog: '',
        email: '',
    },
};

function authReducer(state = authInitialState, action) {
    const { payload } = action;
    switch (action.type) {
    case LOGIN_USER:
        return {
            ...state,
            isLoggedIn: !state.isLoggedIn,
        };

    case SAVE_USER:
        return {
            ...state,
            profile: {
                avatar: payload.data.avatar_url,
                username: payload.data.login,
                location: payload.data.location,
                following: payload.data.following,
                followers: payload.data.followers,
                bio: payload.data.bio,
                link: payload.data.html_url,
                blog: payload.data.blog,
                email: payload.data.email,
            },
        };
    default:
        return state;
    }
}

export default authReducer;

import { TOGGLE_NAV, SAVE_USER } from '@redux/actionTypes';

const uiInitialState = {
    isNavOpen: false,
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

function uiReducer(state = uiInitialState, action) {
    const { payload } = action;
    switch (action.type) {
    case TOGGLE_NAV:
        return {
            ...state,
            isNavOpen: !state.isNavOpen,
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

export default uiReducer;

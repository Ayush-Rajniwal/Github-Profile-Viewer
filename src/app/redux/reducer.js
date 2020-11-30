import initialState from './store';

function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
    case 'TOGGLE_NAV':
        return {
            ...state,
            isNavOpen: !state.isNavOpen,
        };

    case 'LOGIN_USER':
        return {
            ...state,
            isLoggedIn: true,
            loggedInUser: {
                token: payload.token,
                name: payload.username,
                avatar: payload.avatar,
            },
        };

    case 'LOGOUT_USER':
        return {
            ...state,
            isLoggedIn: false,
            loggedInUser: {
                token: '',
                name: '',
                avatar: '',
            },
        };

    case 'SAVE_USER':
        return {
            ...state,
            profile: {
                avatar: payload.data.avatar_url,
                name: payload.data.name,
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

export default reducer;

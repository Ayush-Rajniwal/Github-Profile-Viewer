import initialState from "./store";

function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case "TOGGLE_NAV":
            return {
                ...state,
                isNavOpen: !state.isNavOpen,
            };

        case "LOGIN_USER":
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn,
            };

        case "SAVE_USER":
            return {
                ...state,
                profile: {
                    avatar: payload.data.avatar,
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

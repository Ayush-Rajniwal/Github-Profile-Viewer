import initialState from "@redux/store";
import { LOGIN_USER, TOGGLE_NAV } from "@redux/actionTypes";

function reducer(state = initialState, action) {
    let payload = action.payload;

    switch (action.type) {
        case TOGGLE_NAV:
            return {
                ...state,
                isNavOpen: !state.isNavOpen,
            };

        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                loggedInToken: payload.password,
            };

        case "SAVE_USER":
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

export default reducer;

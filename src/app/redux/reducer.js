import initialState from "./store";

function reducer(state = initialState, action) {
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
        default:
            return state;
    }
}

export default reducer;

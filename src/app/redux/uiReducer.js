import { TOGGLE_NAV } from "@redux/actionTypes";

const uiInitialState = {
    isNavOpen: false,
};

function uiReducer(state = uiInitialState, action) {
    switch (action.type) {
        case TOGGLE_NAV:
            return {
                ...state,
                isNavOpen: !state.isNavOpen,
            };

        default:
            return state;
    }
}

export default uiReducer;

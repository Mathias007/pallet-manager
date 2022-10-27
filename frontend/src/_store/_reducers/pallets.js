import eventStatuses from "../../_config/eventStatuses";

const {
    WELCOME_LOADED,
    WELCOME_NOT_FOUND,
    AUTHENTICATION_ERROR,
    RESET_STATUS,
} = eventStatuses.welcome;

const initialState = {
    welcome: "",
    errorMessage: "",
    status: null,
};

export default function welcome(state = initialState, action) {
    switch (action.type) {
        case WELCOME_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                welcome: action.data.message,
                errorMessage: action.data.message,
            };

        case WELCOME_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case AUTHENTICATION_ERROR:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case RESET_STATUS:
            return { ...state, status: null };

        default:
            return state;
    }
}

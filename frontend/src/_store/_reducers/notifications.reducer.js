import eventStatuses from "../../_config/eventStatuses";

const {
    NOTIFICATIONS_LIST_LOADED,
    NOTIFICATIONS_LIST_NOT_FOUND,
    SINGLE_NOTIFICATION_ADDED,
    SINGLE_NOTIFICATION_ADDING_FAILED,
    MULTI_NOTIFICATIONS_ADDED,
    MULTI_NOTIFICATIONS_ADDING_FAILED,
    SINGLE_NOTIFICATION_LOADED,
    SINGLE_NOTIFICATION_NOT_FOUND,
    NOTIFICATION_SUCCESSFULLY_EDITED,
    NOTIFICATION_EDITING_FAILED,
    NOTIFICATION_SUCCESSFULLY_REMOVED,
    NOTIFICATION_REMOVING_FAILED,
    AUTHENTICATION_ERROR,
    RESET_STATUS,
} = eventStatuses.notifications;

const initialState = {
    notificationsList: [],
    selectedNotification: {},
    newNotificationsData: [],
    errorMessage: "",
    status: null,
};

export default function notifications(state = initialState, action) {
    switch (action.type) {
        case NOTIFICATIONS_LIST_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                notificationsList: action.data.notificationsData,
                errorMessage: action.data.message,
            };

        case NOTIFICATIONS_LIST_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case SINGLE_NOTIFICATION_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                selectedNotification: action.data.notification,
                errorMessage: action.data.message,
            };

        case SINGLE_NOTIFICATION_NOT_FOUND:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
            };

        case SINGLE_NOTIFICATION_ADDED:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case SINGLE_NOTIFICATION_ADDING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case MULTI_NOTIFICATIONS_ADDED:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case MULTI_NOTIFICATIONS_ADDING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_SUCCESSFULLY_EDITED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_EDITING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_SUCCESSFULLY_REMOVED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_REMOVING_FAILED:
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

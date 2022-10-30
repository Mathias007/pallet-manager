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
            return {
                ...state,
                ...action.data,
                notificationsList: action.data.notificationsData,
                errorMessage: action.data.message,
            };

        case NOTIFICATIONS_LIST_NOT_FOUND:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case SINGLE_NOTIFICATION_LOADED:
            return {
                ...state,
                ...action.data,
                selectedNotification: action.data.notification,
                errorMessage: action.data.message,
            };

        case SINGLE_NOTIFICATION_NOT_FOUND:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
            };

        case SINGLE_NOTIFICATION_ADDED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case SINGLE_NOTIFICATION_ADDING_FAILED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case MULTI_NOTIFICATIONS_ADDED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case MULTI_NOTIFICATIONS_ADDING_FAILED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_SUCCESSFULLY_EDITED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_EDITING_FAILED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_SUCCESSFULLY_REMOVED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case NOTIFICATION_REMOVING_FAILED:
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status,
            };

        case AUTHENTICATION_ERROR:
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

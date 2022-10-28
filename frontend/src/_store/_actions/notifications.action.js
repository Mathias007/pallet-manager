import {
    getAllNotifications,
    getSingleNotification,
    addSingleNotification,
    addManyNotifications,
    editSelectedNotification,
    deleteSelectedNotification,
} from "./services/notifications.service";

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

export const showNotificationsList = () => {
    return (dispatch, getState) => {
        const dispatchNotificationsListLoaded = function (response) {
            dispatch({
                type: NOTIFICATIONS_LIST_LOADED,
                data: response.data,
                status: response.status,
            });
        };

        const dispatchNotificationsLoadingError = function (response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        const dispatchNotificationsNotFound = function (response) {
            dispatch({
                type: NOTIFICATIONS_LIST_NOT_FOUND,
                data: response.data,
                status: response.status,
            });
        };

        return getAllNotifications(
            dispatchNotificationsListLoaded,
            dispatchNotificationsLoadingError,
            dispatchNotificationsNotFound
        );
    };
};

export const showSelectedNotification = (id) => {
    return (dispatch, getState) => {
        const dispatchSingleNotificationLoaded = function (response) {
            dispatch({
                type: SINGLE_NOTIFICATION_LOADED,
                data: response.data,
                status: response.status,
            });
        };

        const dispatchNotificationAuthError = function (response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        const dispatchNotificationNotFound = function (response) {
            dispatch({
                type: SINGLE_NOTIFICATION_NOT_FOUND,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        return getSingleNotification(
            id,
            dispatchSingleNotificationLoaded,
            dispatchNotificationAuthError,
            dispatchNotificationNotFound
        );
    };
};

export const addNotification = (
    title,
    area,
    type,
    startDate,
    finishDate,
    quantity
) => {
    return (dispatch, getState) => {
        const dispatchSingleNotificationAdded = function (response) {
            dispatch({
                type: SINGLE_NOTIFICATION_ADDED,
                data: response.data,
                status: response.status,
            });
            return response.data;
        };

        const dispatchSingleNotificationAuthError = function (response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        const dispatchSingleNotificationAddingFailed = function (response) {
            dispatch({
                type: SINGLE_NOTIFICATION_ADDING_FAILED,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        return addSingleNotification(
            title,
            area,
            type,
            startDate,
            finishDate,
            quantity,
            dispatchSingleNotificationAdded,
            dispatchSingleNotificationAuthError,
            dispatchSingleNotificationAddingFailed
        );
    };
};

export const addMultipleNotifications = (notificationsArray) => {
    return (dispatch, getState) => {
        const dispatchManyNotificationsAdded = function (response) {
            dispatch({
                type: MULTI_NOTIFICATIONS_ADDED,
                data: response.data,
                status: response.status,
            });
            return response.data;
        };

        const dispatchManyNotificationsAuthError = function (response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        const dispatchManyNotificationsAddingFailed = function (response) {
            dispatch({
                type: MULTI_NOTIFICATIONS_ADDING_FAILED,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        return addManyNotifications(
            notificationsArray,
            dispatchManyNotificationsAdded,
            dispatchManyNotificationsAuthError,
            dispatchManyNotificationsAddingFailed
        );
    };
};

export const editNotification = (
    id,
    title,
    area,
    type,
    startDate,
    finishDate,
    quantity
) => {
    return (dispatch, getState) => {
        const dispatchNotificationEdited = function (response) {
            dispatch({
                type: NOTIFICATION_SUCCESSFULLY_EDITED,
                data: response.data,
                status: response.status,
            });
            return response.data;
        };

        const dispatchNotificationAuthError = function (response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        const dispatchNotificationEditingFailed = function (response) {
            dispatch({
                type: NOTIFICATION_EDITING_FAILED,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        return editSelectedNotification(
            id,
            title,
            area,
            type,
            startDate,
            finishDate,
            quantity,
            dispatchNotificationEdited,
            dispatchNotificationAuthError,
            dispatchNotificationEditingFailed
        );
    };
};

export const deleteNotification = (id) => {
    return (dispatch, getState) => {
        const dispatchNotificationDeleted = function (response) {
            dispatch({
                type: NOTIFICATION_SUCCESSFULLY_REMOVED,
                data: response.data,
                status: response.status,
            });
            return response.data;
        };

        const dispatchNotificationAuthError = function (response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        const dispatchNotificationDeletingFailed = function (response) {
            dispatch({
                type: NOTIFICATION_REMOVING_FAILED,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        return deleteSelectedNotification(
            id,
            dispatchNotificationDeleted,
            dispatchNotificationAuthError,
            dispatchNotificationDeletingFailed
        );
    };
};

export const cleanServerStatus = () => {
    return (dispatch, getState) => {
        return dispatch({
            type: RESET_STATUS,
        });
    };
};

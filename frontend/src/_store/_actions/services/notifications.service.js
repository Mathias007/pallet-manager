import apiAddresses from "../../../_config/apiAddresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { NOTIFICATIONS } = apiAddresses;
const { LIST, ADD, ADD_MANY, EDIT, REMOVE, SINGLE } = NOTIFICATIONS;

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR,
} = serverStatuses;

const { method, headers } = fetchOptions;
const { GET, POST, PATCH, DELETE } = method;

export const getAllNotifications = (
    dispatchNotificationsListLoaded,
    dispatchNotificationsLoadingError,
    dispatchNotificationsNotFound
) => {
    const options = {
        method: GET,
        headers,
    };

    fetch(LIST, options)
        .then(async (response) => {
            if (response.status < INTERNAL_ERROR) {
                const data = await response.json();
                return { status: response.status, data };
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchNotificationsListLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNotificationsLoadingError(response);
            } else {
                return dispatchNotificationsNotFound(response);
            }
        });
};

export const getSingleNotification = (
    id,
    dispatchSingleNotificationLoaded,
    dispatchNotificationAuthError,
    dispatchNotificationNotFound
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({ id }),
    };

    fetch(SINGLE, options)
        .then(async (response) => {
            if (response.status < INTERNAL_ERROR) {
                const data = await response.json();
                return { status: response.status, data };
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchSingleNotificationLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNotificationAuthError(response);
            } else {
                return dispatchNotificationNotFound(response);
            }
        });
};

export const addSingleNotification = (
    title,
    area,
    type,
    startDate,
    finishDate,
    quantity,
    dispatchSingleNotificationAdded,
    dispatchSingleNotificationAuthError,
    dispatchSingleNotificationAddingFailed
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({
            title,
            area,
            type,
            startDate,
            finishDate,
            quantity,
        }),
    };

    fetch(ADD, options)
        .then(async (response) => {
            if (response.status < INTERNAL_ERROR) {
                const data = await response.json();
                return { status: response.status, data };
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchSingleNotificationAdded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchSingleNotificationAuthError(response);
            } else {
                return dispatchSingleNotificationAddingFailed(response);
            }
        });
};

export const addManyNotifications = (
    notificationsArray,
    dispatchManyNotificationsAdded,
    dispatchManyNotificationsAuthError,
    dispatchManyNotificationsAddingFailed
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({
            notificationsArray,
        }),
    };

    fetch(ADD_MANY, options)
        .then(async (response) => {
            if (response.status < INTERNAL_ERROR) {
                const data = await response.json();
                return { status: response.status, data };
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchManyNotificationsAdded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchManyNotificationsAuthError(response);
            } else {
                return dispatchManyNotificationsAddingFailed(response);
            }
        });
};

export const editSelectedNotification = (
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
) => {
    const options = {
        method: PATCH,
        headers,
        body: JSON.stringify({
            id,
            title,
            area,
            type,
            startDate,
            finishDate,
            quantity,
        }),
    };

    fetch(EDIT, options)
        .then(async (response) => {
            if (response.status < INTERNAL_ERROR) {
                const data = await response.json();
                return { status: response.status, data };
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchNotificationEdited(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNotificationAuthError(response);
            } else {
                return dispatchNotificationEditingFailed(response);
            }
        });
};

export const deleteSelectedNotification = (
    id,
    dispatchNotificationDeleted,
    dispatchNotificationAuthError,
    dispatchNotificationDeletingFailed
) => {
    const options = {
        method: DELETE,
        headers,
        body: JSON.stringify({
            id,
        }),
    };

    fetch(REMOVE, options)
        .then(async (response) => {
            if (response.status < INTERNAL_ERROR) {
                const data = await response.json();
                return { status: response.status, data };
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchNotificationDeleted(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNotificationAuthError(response);
            } else {
                return dispatchNotificationDeletingFailed(response);
            }
        });
};

import { getWelcomeData } from "./services/PalletService";

import eventStatuses from "../../_config/eventStatuses";

const {
    WELCOME_LOADED,
    WELCOME_NOT_FOUND,
    AUTHENTICATION_ERROR,
    RESET_STATUS,
} = eventStatuses.welcome;

export const showWelcomeData = () => {
    return (dispatch, getState) => {
        const dispatchWelcomeDataLoaded = function (response) {
            dispatch({
                type: WELCOME_LOADED,
                data: response.data,
                status: response.status,
            });
        };

        const dispatchWelcomeDataLoadingError = function (response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status,
            });
            throw response.data;
        };

        const dispatchWelcomeDataNotFound = function (response) {
            dispatch({
                type: WELCOME_NOT_FOUND,
                data: response.data,
                status: response.status,
            });
        };

        return getWelcomeData(
            dispatchWelcomeDataLoaded,
            dispatchWelcomeDataLoadingError,
            dispatchWelcomeDataNotFound
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

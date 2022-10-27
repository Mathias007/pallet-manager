// import apiAddresses from "../../../_config/apiAddresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR,
} = serverStatuses;

const { method, headers } = fetchOptions;
const { GET, POST, PATCH, DELETE } = method;

export const getWelcomeData = (
    dispatchWelcomeDataLoaded,
    dispatchWelcomeDataLoadingError,
    dispatchWelcomeDataNotFound
) => {
    const options = {
        method: GET,
        headers,
    };

    fetch("http://localhost:5000/", options)
        .then((response) => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then((data) => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchWelcomeDataLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchWelcomeDataLoadingError(response);
            } else {
                return dispatchWelcomeDataNotFound(response);
            }
        });
};

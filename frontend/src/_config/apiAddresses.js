import addressFragments from "./addressFragments";

const {
    API_URL,
    NOTIFICATIONS,
    LIST,
    ADD,
    ADD_MANY,
    EDIT,
    REMOVE,
    SINGLE,
    UPLOAD,
} = addressFragments;

const apiAddresses = {
    NOTIFICATIONS: {
        MAIN: `${API_URL}${NOTIFICATIONS}`,
        LIST: `${API_URL}${NOTIFICATIONS}/${LIST}`,
        ADD: `${API_URL}${NOTIFICATIONS}/${ADD}`,
        ADD_MANY: `${API_URL}${NOTIFICATIONS}/${ADD_MANY}`,
        EDIT: `${API_URL}${NOTIFICATIONS}/${EDIT}`,
        REMOVE: `${API_URL}${NOTIFICATIONS}/${REMOVE}`,
        SINGLE: `${API_URL}${NOTIFICATIONS}/${SINGLE}`,
        UPLOAD: `${API_URL}${NOTIFICATIONS}/${UPLOAD}`,
    },
};

export default apiAddresses;

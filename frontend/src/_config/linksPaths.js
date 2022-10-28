import addressFragments from "./addressFragments";

const {
    // API_URL,
    NOTIFICATIONS,
    // LIST,
    ADD,
    // ADD_MANY,
    EDIT,
    REMOVE,
    // SINGLE,
    // KEY,
} = addressFragments;

const linksPaths = {
    GENERAL: {
        INDEX: "/",
    },
    NOTIFICATIONS: {
        MAIN: `/${NOTIFICATIONS}`,
        ADD: `/${NOTIFICATIONS}/${ADD}`,
        EDIT: `/${NOTIFICATIONS}/${EDIT}`,
        REMOVE: `/${NOTIFICATIONS}/${REMOVE}`,
    }
};

export default linksPaths;

import addressFragments from "./addressFragments";

const {
    NOTIFICATIONS,
    ADD,
    ADD_MANY,
    EDIT,
    LIST,
    REMOVE,
    SINGLE,
    UPLOAD,
} = addressFragments;

const routesPaths = {
    ROOT: "/",
    NOTIFICATIONS: {
        LIST: `/${NOTIFICATIONS}/${LIST}`,
        SINGLE: `/${NOTIFICATIONS}/${SINGLE}`,
        ADD: `/${NOTIFICATIONS}/${ADD}`,
        ADD_MANY: `/${NOTIFICATIONS}/${ADD_MANY}`,
        UPLOAD: `/${NOTIFICATIONS}/${UPLOAD}`,
        EDIT: `/${NOTIFICATIONS}/${EDIT}`,
        REMOVE: `/${NOTIFICATIONS}/${REMOVE}`,
    },
};

export default routesPaths;

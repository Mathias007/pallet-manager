import addressFragments from "./addressFragments";

const {
    DASHBOARD,
    TABLES,
    NOTIFICATIONS,
    ADD,
    EDIT,
    REMOVE,
} = addressFragments;

const routesPaths = {
    GENERAL: {
        INDEX: "/",
        DASHBOARD: `/${DASHBOARD}`,
        TABLES: `/${TABLES}`,
    },
    NOTIFICATIONS: {
        MAIN: `/${NOTIFICATIONS}`,
        ADD: `/${NOTIFICATIONS}/${ADD}`,
        EDIT: `/${NOTIFICATIONS}/${EDIT}`,
        REMOVE: `/${NOTIFICATIONS}/${REMOVE}`,
    },
};

export default routesPaths;

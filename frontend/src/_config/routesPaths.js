import addressFragments from "./addressFragments";

const {
    DASHBOARD,
    TABLES,
    NOTIFICATIONS,
    ADD,
    EDIT,
    REMOVE,
    ID_PARAM,
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
        EDIT: `/${NOTIFICATIONS}/${EDIT}/:${ID_PARAM}`,
        REMOVE: `/${NOTIFICATIONS}/${REMOVE}/:${ID_PARAM}`,
    },
};

export default routesPaths;

const addressFragments = {
    // api host
    API_URL: process.env.REACT_APP_API_URL,

    // admin panel
    ADMIN: "admin",

    // pages
    DASHBOARD: "dashboard",
    TABLES: "tables",
    NOTIFICATIONS: "notifications",

    // CRUD (common fragments)
    ADD: "add",
    ADD_MANY: "add_many",
    EDIT: "edit",
    REMOVE: "remove",
    SINGLE: "single",
    KEY: "key",
    LIST: "list",
    ID_PARAM: "_id",
};

export default addressFragments;

import { combineReducers } from "redux";

import notifications from "./notifications.reducer";

const palletApp = combineReducers({
    notifications,
});

export default palletApp;

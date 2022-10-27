import { combineReducers } from "redux";

import pallets from "./pallets";

const palletApp = combineReducers({
    pallets,
});

export default palletApp;

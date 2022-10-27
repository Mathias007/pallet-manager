import { createStore, applyMiddleware, compose } from "redux";

// import { configureStore } from '@reduxjs/toolkit'

import thunk from "redux-thunk";
import palletApp from "./_reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(
    palletApp,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

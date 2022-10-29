import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import AppMain from "../components/sections/AppMain";
import Home from "../components/pages/Home";
import Tables from "../components/pages/Tables";

import "antd/dist/antd.min.css";
import "./styles/main.css";
import "./styles/responsive.css";

import { useSelector, useDispatch } from "react-redux";
import { notifications } from "../_store/_actions";

import routesPaths from "../_config/routesPaths";
const { GENERAL } = routesPaths;

function App() {
    const notificationsList = useSelector(
        (state) => state.notifications.notificationsList
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(notifications.showNotificationsList());
    }, []);

    return (
        <div className="App">
            <Router>
                <AppMain>
                    <Switch>
                        <Route
                            exact
                            path={GENERAL.DASHBOARD}
                            component={Home}
                        />
                        <Route
                            exact
                            path={GENERAL.TABLES}
                            component={Tables}
                            notificationsList={notificationsList}
                        />
                        <Redirect from="*" to={GENERAL.DASHBOARD} />
                    </Switch>
                </AppMain>
            </Router>
        </div>
    );
}

export default App;

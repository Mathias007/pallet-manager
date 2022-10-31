import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppMain from "../components/sections/AppMain";
import Home from "../components/pages/Home";
import Tables from "../components/pages/Tables";
import NotificationCreator from "../components/forms/NotificationCreator";

import "antd/dist/antd.min.css";
import "./styles/main.css";
import "./styles/responsive.css";

import routesPaths from "../_config/routesPaths";

const { GENERAL, NOTIFICATIONS } = routesPaths;

function App() {
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
                        <Route exact path={GENERAL.TABLES} component={Tables} />
                        <Route
                            exact
                            path={NOTIFICATIONS.ADD}
                            component={NotificationCreator}
                        />
                        <Route path={NOTIFICATIONS.EDIT} component={null} />
                        <Route path={NOTIFICATIONS.REMOVE} component={null} />
                    </Switch>
                </AppMain>
            </Router>
        </div>
    );
}

export default App;

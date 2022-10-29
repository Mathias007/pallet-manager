import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

import { dashboard, tables } from "./helpers/sidebarSVG";

import navigationTitles from "../../_config/navigationTitles";
import routesPaths from "../../_config/routesPaths";
import addressFragments from "../../_config/addressFragments";

const { INDEX, NOTIFICATIONS } = navigationTitles;
const { GENERAL } = routesPaths;
const { DASHBOARD, TABLES } = addressFragments;

function AppSidebar({ color }) {
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");

    const sidebarAdditionalStyles = {
        dashboard: { background: page === DASHBOARD ? color : "" },
        tables: {
            background: page === TABLES ? color : "",
        },
    };

    return (
        <>
            <div className="brand">
                <span>Zarządzanie Paletami</span>
            </div>
            <hr />
            <Menu theme="light" mode="inline">
                <Menu.Item key="1">
                    <NavLink to={GENERAL.DASHBOARD}>
                        <span
                            className="icon"
                            style={sidebarAdditionalStyles.dashboard}
                        >
                            {dashboard(color)}
                        </span>
                        <span className="label">{INDEX}</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to={GENERAL.TABLES}>
                        <span
                            className="icon"
                            style={sidebarAdditionalStyles.tables}
                        >
                            {tables(color)}
                        </span>
                        <span className="label">{NOTIFICATIONS}</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </>
    );
}

export default AppSidebar;

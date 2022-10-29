import { useEffect } from "react";
import { Row, Col, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

import navigationTitles from "../../_config/navigationTitles";
const { PALLETS } = navigationTitles;

function AppHeader({ name, subName }) {
    useEffect(() => window.scrollTo(0, 0));

    const headerAdditionalStyles = {
        textTransform: "capitalize",
    };

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col span={24} md={6}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/">{PALLETS}</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item style={headerAdditionalStyles}>
                            {name.replace("/", "")}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="ant-page-header-heading">
                        <span
                            className="ant-page-header-heading-title"
                            style={headerAdditionalStyles}
                        >
                            {subName.replace("/", "")}
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default AppHeader;
